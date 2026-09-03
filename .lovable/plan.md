# Consolidate Staff & Leaders onto the About Page

## Goal
Move all staff and lay-leader cards off the standalone `/staff` page and onto the About page, then remove the standalone page entirely. The About page becomes the single place to meet the pastor, staff, and lay leaders.

## Current state (verified)
- Cards for CJ, Clarence, Ed, and Ileana **already render** on `/staff` — they were never added to the About page.
- `/staff` is referenced in only two places: the "Staff & Leaders" card in `AboutLinksSection.tsx` (`href: '/staff'`) and a footer link in `Footer.tsx`. It is **not** in the Navbar dropdown.
- The About page already has `PastorSection` (Rev. Dr. Hodge) rendering his photo + bio.

## Changes

### 1. New component: `src/components/StaffSection.tsx`
Holds the consolidated team content, with a section id so the "Staff & Leaders" link can scroll to it:
- A **Church Staff** subsection (id `staff`) — the `staffMembers` data currently in `Staff.tsx` minus Rev. Dr. Hodge (he has his own richer `PastorSection` above). That leaves Sue Harris and the Contact Office card, reused as-is.
- A **Lay Leaders** subsection (id `lay-leaders`) — all 11 lay-leader cards (John, Robin, Cheryl, James, Paul, Randal, Kathy H., CJ, Clarence, Ed, Ileana) using the existing `@/assets/staff/*` headshots, with the same placeholder titles/descriptions to fill in later.
- Reuse the exact card markup, grid layout, and dark-mode classes already in `Staff.tsx` so styling stays consistent.

### 2. `src/pages/About.tsx`
Render `<StaffSection />` after `<PastorSection />` (and before `<ChurchHistorySection />`). The hash-scroll effect already in `About.tsx` handles `#staff` / `#lay-leaders` anchors for arrivals from other pages.

### 3. `src/components/AboutLinksSection.tsx`
Change the "Staff & Leaders" card `href` from `/staff` to `/about#staff` so the existing same-page scroll handler smooth-scrolls to the new section.

### 4. `src/components/Footer.tsx`
Update the footer "Staff & Leaders" link from `/staff` to `/about#staff`.

### 5. Remove the standalone page
- Delete `src/pages/Staff.tsx`.
- Remove the `Staff` import and the `<Route path="/staff" ... />` line from `src/App.tsx`.

## Out of scope
- Filling in real titles/last names/bios for James, Paul, Randal, Kathy, CJ, Clarence, Ed, Ileana — kept as placeholders per your earlier instruction; send details whenever ready.
- No backend, auth, or database changes.

## Verification
- Build is clean (`/tmp/observability/build-errors.log` shows OK).
- `/about` shows PastorSection + new Church Staff (Sue Harris, Contact Office) + Lay Leaders grid (all 11 cards, incl. CJ/Clarence/Ed/Ileana).
- `/staff` no longer exists (returns NotFound).
- "Staff & Leaders" card and footer link scroll to the staff section on the About page.
