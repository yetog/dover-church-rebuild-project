# Remaining Tasks: YouTube Handle Fix + Editable "What's Happening"

## Status of meeting task list
1. Century Gothic font — already done (system font with sans-serif fallback).
2. Receptionist can update What's Happening — **this plan**.
3. Large PCC button — already done.
4/5. YouTube links — done, but the channel handle needs correcting from `@PeoplesChurchOfDover` to `@PeoplesChurchDover` (affects Watch Live, Previous Sermons, Full Worship Services buttons). **This plan.**

## Part 1: Fix YouTube channel handle
- Update the channel base URL in `src/pages/Sermons.tsx` to `https://www.youtube.com/@PeoplesChurchDover` for all three buttons (Watch Live → `/streams`, Previous Sermons → `/playlists`, Full Worship Services → `/videos`).

## Part 2: Editable "What's Happening" (receptionist workflow)
Goal: a non-technical staff member can add/edit/remove events without touching code.

**Approach: enable Lovable Cloud (built-in database + login).**

1. **Database table** `events`: title, date/time, description, optional image, published flag. Row-level security: anyone can read published events; only signed-in staff can create/edit/delete.
2. **Staff login**: simple email/password sign-in page (no public sign-up; accounts created for staff only).
3. **Admin page** (`/admin/events`): after login, the receptionist sees a simple form — title, date, description — with save/delete buttons. No technical knowledge needed.
4. **What's Happening section/page** reads events from the database automatically, showing upcoming events in date order; past events drop off automatically.
5. **Accounts**: we'll create the first staff account (receptionist) once Cloud is enabled.

## Technical details
- Lovable Cloud provides the database, auth, and storage — no external accounts needed.
- RLS policies: `SELECT` published rows for everyone; `INSERT/UPDATE/DELETE` for authenticated users only.
- Events rendered with the existing plum/gray alternating section styling and Century Gothic.

## Verification
- Build passes; Playwright check: Watch buttons point at the corrected channel; events page loads; admin login and add-event flow works end to end.
