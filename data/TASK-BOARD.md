# TASK BOARD (WIP=1)

Purpose: single-thread execution queue. Only Card 1 may be in progress.

## Rules
1. Work only on **Card 1** until complete or explicitly re-prioritized by Glen.
2. When Card 1 is complete, Card 2 auto-promotes to Card 1.
3. Every card must include: owner, deadline, KPI, definition of done.
4. Report progress in: Done / Blocked / Need from Glen.

---

## Card 1 (ACTIVE)
- **Title:** FlowerHub Blackpool launch: first verified florist outreach block
- **Owner:** Rose (execution), Oracle (orchestration)
- **Deadline:** Tomorrow 12:00 Europe/London
- **KPI:** Verified leads added (#), outreach emails sent (#), replies (#), partner signups started (#)
- **Definition of Done:** Minimum 20 verified florist outreaches sent with receipts, follow-up schedule set, and suppression safeguards active
- **Status:** ACTIVE
- **Unblock packet (if blocked >2 heartbeats):** Dependency = verified lead enrichment speed; Owner = Sage; Required input = cleaner data source if scrape quality drops; Safe-by = tomorrow 09:00 Europe/London; Default if missed = run manual verification sweep on top 20 and ship batch anyway.

## Card 2 (QUEUED)
- **Title:** Mystic first paid conversion path verification
- **Owner:** Oracle
- **Deadline:** Next 24h after Card 1
- **KPI:** Paid conversions (#), checkout clicks (#), intake submissions (#)
- **Definition of Done:** First verified paid conversion path working end-to-end
- **Status:** QUEUED

## Card 3 (QUEUED)
- **Title:** FlowerHub blocker-clear sprint plan with acceptance criteria
- **Owner:** Oracle + FlowerHub manager
- **Deadline:** This week
- **KPI:** Blockers closed (#), test-order pass/fail
- **Definition of Done:** Clear unblock checklist with owners and pass criteria
- **Status:** QUEUED

## Card 4 (QUEUED)
- **Title:** Weekly scorecard population with real numbers
- **Owner:** All managers, verified by Oracle
- **Deadline:** Friday
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
