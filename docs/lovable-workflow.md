# Lovable + GitHub Workflow (Onboarding)

Welcome! This project lives in two places at once: the **Lovable editor** (visual/AI-driven) and **GitHub** (code + PRs). They are kept in sync automatically — but that sync has no merge logic, so we use a light process to stay clean.

## The 60-second mental model

- Lovable is wired to the `main` branch.
- Every save in Lovable → instant commit/push to `main`.
- Every push to `main` (from anywhere) → instant pull into Lovable's container.
- There is **no draft mode** and **no auto-rebase**. Whoever writes last, wins.

## Your first day

1. **Clone the repo** locally: `git clone <repo-url> && cd <repo>`
2. **Install deps:** `npm install` (or `bun install`)
3. **Run locally:** `npm run dev`
4. **Read** [CONTRIBUTING.md](../CONTRIBUTING.md).
5. **Join the team channel** where Lovable driving is announced.

## How to make a change

### Small UI / content change
1. Announce "driving Lovable" in chat.
2. Make the change in Lovable; it auto-commits to `main`.
3. Announce "done." Pull locally: `git pull --rebase origin main`.

### Code change (everything else)
1. `git checkout main && git pull --rebase`
2. `git checkout -b feat/<short-name>`
3. Code, commit, push.
4. Open PR on GitHub. Get review.
5. Confirm nobody is mid-edit in Lovable → **Squash and merge**.
6. Lovable auto-pulls the merge within seconds. Verify the preview still loads.

## What NOT to do

- ❌ Push directly to `main` from local
- ❌ Force-push `main` (will desync Lovable)
- ❌ Edit in Lovable while a teammate is also editing in Lovable
- ❌ Merge a PR while someone is actively typing in Lovable
- ❌ Install npm packages in both Lovable and locally at the same time

## If something looks out of sync

See **"Recovering an out-of-sync project"** in [CONTRIBUTING.md](../CONTRIBUTING.md).

## Useful links

- [Lovable docs — GitHub integration](https://docs.lovable.dev/integrations/github)
- [Lovable docs — Collaboration](https://docs.lovable.dev/features/collaboration)
