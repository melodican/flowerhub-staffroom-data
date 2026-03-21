import fs from "node:fs";
import path from "node:path";

const LOG_FILE = process.env.LOG_FILE || "./data/inbox_log.jsonl";
const QUEUE_FILE = process.env.QUEUE_FILE || "./data/inbox_queue.json";
const OUT_FILE = process.env.OUT_FILE || "./data/active_tasks.json";

const now = new Date();
const nowMs = now.getTime();

const readJson = (p, fallback) => {
try {
return JSON.parse(fs.readFileSync(p, "utf8"));
} catch {
return fallback;
}
};

const readJsonl = (p) => {
try {
const txt = fs.readFileSync(p, "utf8");
return txt
.split("\n")
.map((l) => l.trim())
.filter(Boolean)
.map((l) => {
try { return JSON.parse(l); } catch { return null; }
})
.filter(Boolean);
} catch {
return [];
}
};

const logs = readJsonl(LOG_FILE);
const queue = readJson(QUEUE_FILE, { items: [] });

const agentsMap = new Map();
const touch = (agent, patch = {}) => {
if (!agent) return;
const key = String(agent).trim();
if (!key) return;
const prev = agentsMap.get(key) || {
agent: key,
status: "offline",
current_task: "No recent runtime activity",
started_at: null,
last_heartbeat: null,
source: "runtime",
confidence: "low"
};
agentsMap.set(key, { ...prev, ...patch, agent: key, source: "runtime" });
};

for (const row of logs) {
const agent = row.agent || row.owner || row.assignee || row.worker || row.route_to;
const ts = row.ts || row.timestamp || row.time || row.created_at || row.updated_at;
const iso = ts ? new Date(ts).toISOString() : now.toISOString();
const status = (row.status || row.state || "working").toString().toLowerCase();
const task = row.task || row.current_task || row.summary || row.subject || "Processing inbox workflow";

touch(agent, {
status,
current_task: task,
started_at: row.started_at || null,
last_heartbeat: iso,
confidence: "medium"
});
}

const items = Array.isArray(queue) ? queue : (queue.items || []);
for (const item of items) {
const agent = item.agent || item.owner || item.assignee || item.route_to;
if (!agent) continue;

const statusRaw = (item.status || item.state || "queued").toString().toLowerCase();
const status = ["queued", "blocked", "waiting_input", "done", "working"].includes(statusRaw)
? statusRaw
: "queued";

const hb = item.updated_at || item.last_heartbeat || item.timestamp || now.toISOString();
const task = item.task || item.current_task || item.subject || "Inbox queue item";

touch(agent, {
status,
current_task: task,
started_at: item.started_at || null,
last_heartbeat: new Date(hb).toISOString(),
confidence: "high"
});
}

// stale -> offline if no heartbeat in 30 min
for (const [k, v] of agentsMap.entries()) {
if (!v.last_heartbeat) continue;
const ageMin = (nowMs - new Date(v.last_heartbeat).getTime()) / 60000;
if (ageMin > 30) {
agentsMap.set(k, {
...v,
status: "offline",
current_task: "No runtime event in last 30 minutes",
confidence: "low"
});
}
}

const out = {
updated_at: now.toISOString(),
agents: Array.from(agentsMap.values()).sort((a, b) => a.agent.localeCompare(b.agent))
};

fs.mkdirSync(path.dirname(OUT_FILE), { recursive: true });
fs.writeFileSync(OUT_FILE, JSON.stringify(out, null, 2) + "\n", "utf8");

console.log(`Wrote ${OUT_FILE} with ${out.agents.length} agents`);
