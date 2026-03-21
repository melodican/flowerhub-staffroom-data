#!/bin/zsh
set -e
export PATH="/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin"
cd ~/flowerhub-staffroom-data
/usr/local/bin/node scripts/generate-heartbeat.mjs
git add data/active_tasks.json
git diff --cached --quiet && exit 0
git commit -m "chore: heartbeat update"
git pull --rebase origin main || true
git push origin main || true
