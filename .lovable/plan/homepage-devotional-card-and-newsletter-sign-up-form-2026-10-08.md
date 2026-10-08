# Homepage devotional card and newsletter sign-up form

## What will change

1. **Homepage devotional becomes one wide card.** The homepage shows a single horizontal card with today's UCC devotional (title, date, author, excerpt) instead of the three-card grid. Under it: a **Read Full Devotion** button (opens the full devotional on ucc.org) and a **Meditation & Prayer** button (goes to the Meditation page). The Meditation page keeps the existing three-card layout, so both pages still share the same devotional data source — only the homepage presentation changes.

2. **Newsletter sign-up form.** The Newsletter page's "Email the Church Office" button is replaced with a short built-in form (name + email address). Submissions are stored in the backend so the church can see everyone who signed up, with a clear confirmation message after submitting. Regular activities stay as-is; upcoming events remain a manually edited list (updated through me or GitHub) — no change there.

3. **Verify.** Check the homepage card on desktop and phone widths, confirm the Meditation page still shows three cards, submit a test newsletter entry, confirm it is stored, then remove the test entry.

## Notes

- Owner email notifications for new sign-ups require a verified sending domain; without one, sign-ups are stored and viewable in the backend. We can add email notifications later once a domain is verified.
- The events list stays manually maintained per your choice — just send me new events when they come up.

## Technical details

- New homepage-only component (e.g. `HomeDevotionalCard.tsx`) using the existing `useUccDevotional` hook's first entry; `DailyDevotionalSection` stays unchanged for the Meditation page.
- New `newsletter_subscriptions` table (name, email, created_at) with RLS enabled and an anonymous insert-only policy; no public read access.
- Form validation and a duplicate-email guard on the Newsletter page.
