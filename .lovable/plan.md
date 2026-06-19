## Goal

Set up a clean, conflict-resistant workflow for a team using Lovable + GitHub + local IDEs (Cursor/Claude/VS Code), and recover any project that has drifted out of sync between Lovable and GitHub.

This is a process/workflow plan — no code changes will be made to your project. Approving switches me to build mode so I can produce any companion files you want (a `CONTRIBUTING.md`, PR template, branch-protection cheatsheet, etc.).

---

## Part 1 — Recover the out-of-sync project

Do these steps **before** anyone else commits, in this order:

1. **Pick the source of truth.** Decide which side is "correct" right now:
   - Lovable preview looks right → Lovable is truth.
   - GitHub `main` has the latest local dev work → GitHub is truth.
2. **Freeze the other side.** Tell the team: no Lovable edits and no pushes to `main` until recovery is done.
3. **If Lovable is truth:**
   - In Lovable, make any tiny edit (e.g. add a space in a README) and save. This forces a fresh auto-commit to GitHub, re-syncing the repo head.
   - Locally: `git fetch origin && git reset --hard origin/main` (warning: discards local `main` changes — stash or branch first if needed).
4. **If GitHub is truth:**
   - In Lovable, open History (clock icon, top nav) and roll back to the version that matches GitHub, OR
   - Disconnect GitHub in Lovable (Plus + → GitHub → Disconnect), then reconnect and choose to overwrite from GitHub. Lovable will re-pull `main`.
5. **Verify** the preview matches the repo: open the Code Editor in Lovable and spot-check 2–3 recently changed files against GitHub.
6. **Tag the recovery point** locally so you have an anchor: `git tag sync-recovered && git push --tags`.

---

## Part 2 — Ongoing team workflow

```text
            ┌──────────────────────────┐
            │        main (prod)       │  ← Lovable is wired to this branch
            └─────────────┬────────────┘
                          │  PR merges only
        ┌─────────────────┼──────────────────┐
        │                 │                  │
   feat/ai-prompts   feat/auth-ui      fix/sermon-images
   (local dev)       (Lovable editor)  (local dev)
```

**Rules**

1. **`main` = Lovable's branch.** Everything Lovable auto-commits goes here. Treat `main` as semi-protected: no direct local pushes except by the person currently "driving" Lovable.
2. **One Lovable driver at a time.** Whoever is editing in Lovable announces it (Slack/Discord). They own `main` for that session. Everyone else works on branches.
3. **Local devs always branch.**
   - `git checkout -b feat/<short-name>` from latest `main`.
   - Commit, push, open PR on GitHub.
   - Get review, merge via "Squash and merge."
   - Lovable auto-pulls the merge within seconds.
4. **Before merging a PR**, confirm nobody is mid-edit in Lovable (otherwise Lovable's next auto-save can race the merge). 30-second pause is enough.
5. **Heavy work belongs local.** Use Lovable for UI tweaks, prototyping, content. Use local IDE + Claude/Cursor for refactors, package changes, tests, type fixes.
6. **Never force-push `main`.** It will desync Lovable and may corrupt its working tree. If `main` is broken, fix forward with a new commit.
7. **Branch protection on GitHub** (recommended):
   - Require PR + 1 review for `main`.
   - Block force-pushes and deletions.
   - Allow the Lovable GitHub App to bypass (it commits directly as part of normal sync).
8. **Enable Labs → GitHub Branch Switching** (Account Settings → Labs) if you want Lovable to preview a feature branch instead of `main`. Useful for review, but switch back to `main` when done.

---

## Part 3 — Daily checklist for each dev

- Start of day: `git pull --rebase origin main`.
- Working in Lovable? Announce it. Pull locally afterwards.
- Working locally? Branch. PR. Merge. Don't push to `main`.
- Adding a dependency or editing config? Do it locally — package installs in Lovable can conflict with concurrent edits.
- End of session: confirm Lovable preview still loads (catches sync issues early).

---

## What I'll produce in build mode (optional, on approval)

- `CONTRIBUTING.md` at repo root with the rules above.
- `.github/pull_request_template.md` with a "Lovable driver idle? ✅" checkbox.
- A short `docs/lovable-workflow.md` for onboarding.

Tell me which of those (if any) you want generated, or just approve and I'll create all three.