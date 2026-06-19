# Contributing

This project is developed with **Lovable + GitHub** and a mix of local IDEs (Cursor, Claude Code, VS Code). Lovable and GitHub are bidirectionally synced: every Lovable edit auto-commits to `main`, and every push to `main` auto-pulls into Lovable. Because there is no "draft" mode in Lovable, we follow a few rules to avoid race conditions and overwrites.

## TL;DR

- `main` is **Lovable's branch**. Don't push to it directly from local.
- **One Lovable driver at a time.** Announce it before editing in Lovable.
- All local work happens on **feature branches → PR → squash merge**.
- Heavy work (refactors, dependencies, tests, type fixes) → local IDE, not Lovable.
- Never force-push `main`.

## Branch model

```text
            ┌──────────────────────────┐
            │        main (prod)       │  ← Lovable syncs here
            └─────────────┬────────────┘
                          │  PR merges only
        ┌─────────────────┼──────────────────┐
        │                 │                  │
   feat/ai-prompts   feat/auth-ui      fix/sermon-images
```

## Daily checklist

- **Start of day:** `git pull --rebase origin main`
- **Editing in Lovable?** Announce in the team channel. You own `main` for that session. Pull locally when done.
- **Editing locally?** Branch (`git checkout -b feat/<name>`), commit, push, open PR.
- **Merging a PR?** Confirm nobody is mid-edit in Lovable (~30s pause is enough), then "Squash and merge."
- **End of session:** verify the Lovable preview still loads.

## What goes where

| Task | Where |
| --- | --- |
| UI tweaks, copy, content, prototyping | Lovable |
| Refactors, complex logic | Local IDE |
| Adding/removing dependencies | Local IDE |
| Tests, type fixes, CI config | Local IDE |
| Visual design exploration | Lovable |

## GitHub branch protection (recommended)

On `main`:
- Require PR + 1 review
- Block force-pushes and deletions
- Allow the **Lovable GitHub App** to bypass (it commits as part of normal sync)

## Recovering an out-of-sync project

1. **Pick the source of truth** — Lovable preview, or GitHub `main`?
2. **Freeze the other side** — pause Lovable edits and local pushes.
3. **If Lovable is truth:** make a trivial edit in Lovable and save (forces a fresh commit), then locally `git fetch origin && git reset --hard origin/main`.
4. **If GitHub is truth:** in Lovable, open History (clock icon) and roll back to the matching version — or disconnect/reconnect GitHub to force a re-pull.
5. **Verify** by spot-checking 2–3 recent files in Lovable's Code Editor against GitHub.
6. **Tag the recovery point:** `git tag sync-recovered && git push --tags`.

## Optional: Lovable Labs

Enable **Account Settings → Labs → GitHub Branch Switching** to preview a feature branch in Lovable. Switch back to `main` when you're done reviewing.
