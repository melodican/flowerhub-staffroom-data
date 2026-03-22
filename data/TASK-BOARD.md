# TASK BOARD (WIP=1)

Purpose: single-thread execution queue. Only Card 1 may be in progress.

## Rules
1. Work only on **Card 1** until complete or explicitly re-prioritized by Glen.
2. When Card 1 is complete, Card 2 auto-promotes to Card 1.
3. Every card must include: owner, deadline, KPI, definition of done.
4. Report progress in: Done / Blocked / Need from Glen.
5. Active card must include **Last Evidence Update (timestamp + receipt path/link)** and **Next Concrete Action (owner + due time)**. If either is missing for 2 consecutive heartbeats, auto-mark as STALLED and trigger unblock packet.
6. If an active card has a send/ops window, pre-commit a **Window Closeout Artifact** (owner + due time + output path). If due time passes without artifact, auto-mark BLOCKED and switch next action to artifact-first closeout before any new sends.

---

## Card 1 (ACTIVE)
- **Title:** FlowerHub Blackpool launch: first verified florist outreach block
- **Owner:** Rose (execution), Oracle (orchestration)
- **Deadline:** Monday 2026-03-23 18:05 Europe/London
- **KPI:** Verified leads added (#), outreach emails sent (#), replies (#), partner signups started (#)
- **Definition of Done:** Minimum 20 verified florist outreaches sent with receipts, follow-up schedule set, and suppression safeguards active
- **Status:** BLOCKED (deadline breached)
- **Last Evidence Update:** 2026-03-21 15:05 Europe/London, additional outreach block accepted by Microsoft Graph (10 of 10 accepted). Receipt: `flowerhub/tools/outreach/send_receipts_2026-03-21_1505.json`
- **Next Concrete Action:** Rose + Sage to execute florist-only recovery block Monday send window open (09:00), log first receipt checkpoint by 11:00, and complete target/shortfall closeout by 18:05.
- **Window Closeout Artifact:** Owner = Rose, Due = 2026-03-23 18:05 Europe/London, Output = `flowerhub/tools/outreach/day_closeout_2026-03-23.md` (final verified sends, shortfall, recovery plan)
- **Unblock packet (if blocked >2 heartbeats):** Dependency = clean florist-only lead quality under time pressure; Owner = Sage; Required input = trusted florist source/list or explicit approval of reduced verified batch size for today; Safe-by = 2026-03-21 15:30 Europe/London (BREACHED); Default if missed = ship only fully verified florist recipients available before 16:00 and log shortfall + recovery plan (now active).

## Card 2 (QUEUED)
- **Title:** FlowerHub florist onboarding conversion sprint
- **Owner:** Daisy + Rose (execution), Oracle (orchestration)
- **Deadline:** Wednesday 2026-03-25 18:00 Europe/London
- **KPI:** Partner signups started (#), onboarding completed (#), first live listings (#)
- **Definition of Done:** Minimum 3 florist onboarding flows moved from outreach reply to live listing-ready with evidence
- **Status:** QUEUED

## Card 3 (QUEUED)
- **Title:** FlowerHub blocker-clear sprint plan with acceptance criteria
- **Owner:** Oracle + FlowerHub manager
- **Deadline:** Thursday 2026-03-26 17:00 Europe/London
- **KPI:** Blockers closed (#), test-order pass/fail
- **Definition of Done:** Clear unblock checklist with owners and pass criteria
- **Status:** QUEUED

## Card 4 (QUEUED)
- **Title:** Weekly scorecard population with real numbers
- **Owner:** All managers, verified by Oracle
- **Deadline:** Friday 2026-03-27 17:00 Europe/London
- **KPI:** Blank KPI fields (target 0)
- **Definition of Done:** WEEKLY-SCORECARD.md fully populated with numeric values
- **Status:** QUEUED

## Card 5 (QUEUED)
- **Title:** Factory-mode replication trigger criteria draft
- **Owner:** Oracle
- **Deadline:** After Card 1-4 completion
- **KPI:** Trigger framework completed (yes/no)
- **Definition of Done:** Written criteria for when to spin up next company lane
- **Status:** QUEUED
