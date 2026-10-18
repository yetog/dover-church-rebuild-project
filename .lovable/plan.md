# Project audit, changelog and monthly invoice system (reusable)

## Goal
Keep a clear, dated record of all work and platform costs for this project, and turn it into a monthly invoice backup each time you bill on the 18th. Then package the same setup so you can reuse it on new projects and run it on older ones.

## 1. Audit records in this project
- **CHANGELOG.md** (project root): one dated entry per piece of work. Each entry has the date, a short outcome in plain language, its category (Design, Content, Feature, Fix, Integration, Admin), the pages affected, its source (plan, chat request, meeting note) and its billing period.
- **Backfill**: build the history from the dated plan files, the roadmap and the git commit history, starting with the first plan on 2026-08-29. I'll mark any item whose date is estimated.
- **Open items** section: copied from the roadmap, listing what the church still needs to send, such as the Facebook link, newsletter PDFs and the copyright claim.

## 2. Billing records
- **billing/ledger.csv**: one row per item. Columns: date, period, type (work or platform cost), category, description, changelog reference, hours (optional), amount.
- **Platform cost line**: the Lovable fee is recorded as its own cost inside the $400 retainer. It shows as a separate "included" line and isn't added on top of the $400.
- **Billing periods**: each one runs from the 19th of one month to the 18th of the next. Today's invoice covers 2026-09-19 to 2026-10-18.
- **billing/invoices/2026-10-18.md**: summary of the retainer, the included platform cost, the work grouped by category with links to changelog entries, and the open items. This is backup you can attach to the invoice from your current invoicing software.
- **Spreadsheet** (saved to Files): `People's-Church-Billing.xlsx`, with tabs for the Ledger, a Period Summary that totals by category with formulas, and a Dashboard with charts of work by category and by period.
- A branded PDF invoice is left for later. Your current software keeps sending invoices for now.

## 3. Keeping it up to date
- Add a project rule saying every finished change also adds a CHANGELOG.md entry and a ledger row. This keeps the record current without you having to ask.
- On the 18th, ask me to "prepare this month's invoice". I'll close the period, create the invoice summary and refresh the spreadsheet.

## 4. Reusable skill for all your projects
Save a workspace skill called **project-audit-billing**. You'll find it in Settings > Skills, and it works in any project. It covers:
- **Set up**: create CHANGELOG.md, the billing folder, the ledger, and the project rule.
- **Backfill an older project**: rebuild the timeline from plans, roadmap, git history and chat history.
- **Monthly close**: produce the invoice summary and the spreadsheet for a chosen period, with the retainer amount and platform cost as settings for each project.
- **Templates**: changelog entry, ledger columns, invoice summary layout and spreadsheet structure, so every project's records look the same.

To start on another project, open it and type "/" to pick the skill, or ask "set up project audit and billing".

## What I need from you (it won't block the work)
- Lovable's monthly cost to record. Until you send it, I'll use a placeholder and highlight it in the spreadsheet.
- Optional: hours or a rate if you want time shown on each item. If not, items are listed by outcome only.

## Technical details
- Files: `CHANGELOG.md`, `billing/ledger.csv`, `billing/config.json` (retainer, platform cost, billing day 18, client name), `billing/invoices/YYYY-MM-DD.md`. None of these affect the website.
- Spreadsheet built with openpyxl using formulas (SUMIFS by period and category) plus native charts, recalculated and checked for errors. Saved to `/mnt/documents/`.
- Add an `AGENTS.md` rule: "Record each completed change in CHANGELOG.md and billing/ledger.csv, so audits and invoices trace to work."
- Skill draft at `.agents/skills/project-audit-billing/`, containing SKILL.md, references for the templates, and a Python script that generates the ledger, invoice and spreadsheet from config plus the CSV. Activated once written.
