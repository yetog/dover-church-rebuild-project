---
name: project-audit-billing
description: Set up and maintain a client project's audit trail (CHANGELOG.md), billing ledger, monthly invoice backup and billing spreadsheet. Use when the user asks to set up project audit/billing, backfill history for an older project, record work for invoicing, or "prepare this month's invoice".
---

# Project audit & billing

Gives every client project the same transparent record: what was done, when, and how it maps to the monthly invoice (retainer + included platform cost).

## Files (in the project root)
- `CHANGELOG.md` — newest first, grouped by billing period. Entry format:
  `- **YYYY-MM-DD** [*(est.)*] · `CL-###` · Category — Outcome in plain language. _Pages: … Source: plan/chat/meeting/git._`
  Categories: Design, Content, Feature, Fix, Integration, Admin. Ends with "Open items (waiting on client)".
- `billing/config.json` — `client, retainer, platform_name, platform_cost, platform_cost_placeholder, billing_day, open_items[]`.
- `billing/ledger.csv` — `date,period,type,category,description,changelog_ref,hours,amount`.
  - `type`: `work` (amount blank unless billed extra), `retainer`, `platform_cost`.
  - `period`: `START..END`, ending on `billing_day` (e.g. `2026-09-19..2026-10-18`).
  - Platform cost is **included in** the retainer, never added on top.
- `billing/invoices/YYYY-MM-DD.md` — generated invoice backup per period.
- Add to the root `AGENTS.md`: "Record each completed change in CHANGELOG.md and billing/ledger.csv, so audits and invoices trace to work."

## Workflows

### Set up (new project)
1. Ask only for: client name, retainer, platform cost (use `billing--get_plan` for the plan name; mark cost placeholder if unknown), billing day.
2. Create the files above with empty ledger header, plus the AGENTS.md rule.

### Backfill (existing project)
1. Sources, in order of trust: `.lovable/plan/*-YYYY-MM-DD.md` archived plans, `roadmap.md`, `git log --date=short`, chat history (`chat_search` tools).
2. One entry per outcome (not per commit). Mark dates inferred only from git as *(est.)*.
3. Add `retainer` + `platform_cost` rows for every period touched.

### Ongoing
After each completed change, append a changelog entry and a `work` ledger row with the next CL number.

### Monthly close ("prepare this month's invoice")
1. Ensure the period has retainer and platform_cost rows; update `open_items` from the roadmap.
2. Copy `scripts/build_billing.py` to /tmp and run:
   `python /tmp/build_billing.py <project_root> <period_end> /mnt/documents/<Client>-Billing.xlsx`
3. Recalculate with the xlsx skill's `recalculate_formulas.py`; require zero errors.
4. Present the invoice markdown and the spreadsheet (Ledger, Period Summary with SUMIFS/COUNTIFS, Dashboard charts).

Branded PDF invoices are a future addition; the user currently sends invoices from separate software.
