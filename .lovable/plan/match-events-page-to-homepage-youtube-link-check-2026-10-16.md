# Match Events page to homepage + YouTube link check

## 1. Events page matches the homepage
- Move the homepage weekly list (Sunday Worship 10 AM, Happy Hour 11 AM, Meditation 3rd Wed 10:30, Bible Study Thu 1 PM & 6 PM, PCC Every Weekday) into one shared list.
- Show it on the Events page using the exact same row design as the homepage (calendar icon, day/time, category label, title, arrow).
- Replace the Events page's separate "Regular Activities" list with this shared one, so editing one place updates both pages.
- Keep the "Upcoming Events" section on the Events page, restyled to the same row design; it shows when you send events to add.
- Fix the label typo "Biblical Litracy" to "Biblical Literacy".

## 2. YouTube links
- The site's video links all point to the YouTube search page and open in a new tab — nothing on the site blocks them.
- Inside the Lovable editor preview, YouTube often refuses to open from the preview frame; it works on the published site.
- If it still fails in another browser, likely causes are a network/school/work filter blocking youtube.com, or an ad/privacy extension. I'll re-test each link and, if needed, switch to a plain channel link as a fallback.

## Technical details
- New shared `src/data/weeklyActivities.ts` + `WeeklyActivityRow` component used by `NewsSection.tsx` and `Happening.tsx`.
- Remove `recurringEvents` from `Happening.tsx`.
