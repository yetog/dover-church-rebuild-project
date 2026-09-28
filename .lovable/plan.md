# Church website audit and devotional alignment

## What will change

1. **Audit every page and link.** Check all menu, footer, page, button, email, phone, and external links against their intended destinations; test pages on desktop and phone widths for missing content, broken images, overlapping text, and obvious layout or interaction problems. Fix verified issues within this website. Report any destination that needs your real URL rather than inventing one.
2. **Make dropdowns click to open.** On desktop, clicking a menu heading opens its choices; clicking again, choosing a destination, clicking elsewhere, or pressing Escape closes it. Remove hover-only behavior and its gap-related flicker. Keep the phone menu tap-to-expand, and make expanded state clear to keyboard and screen-reader users.
3. **Align the daily meditation.** Replace the old Philippians placeholder on the meditation page with the same current UCC devotional preview used on the homepage, with its title, date, author, excerpt, and a clear **Read Full Devotional** link to the matching UCC page. Keep the Prayer Requests section and its existing list and contact details on the meditation page. If today's entry is unavailable, show a clear link to UCC's devotional page instead of stale scripture.
4. **Verify the outcome.** Recheck every internal page and navigation flow, spot-check external destinations, compare the homepage and meditation page's devotional on the same day, and test menus with pointer, keyboard, and touch-sized viewport. Summarize what was repaired and anything still awaiting a correct destination or outside the site's control.

## Confirmed findings

- The homepage fetches UCC's devotional feed; the meditation page separately displays fixed Philippians 4:6–7 text and fixed prayer requests.
- The UCC feed provides only a preview, not the full article, so the full devotional will continue to open on ucc.org.
- Desktop menu panels currently open on hover, with a small gap between the heading and panel; phone menus already expand on tap.
- Initial source review found a `#` online-giving target, generic Facebook destinations, and two different YouTube channel handles. These need verification during the audit; unknown official destinations will be flagged rather than guessed.

## Technical approach

Use one shared UCC devotional data source for both views, select the entry for the current date in the church's local timezone when available, and preserve safe fallback behavior when the feed fails. Keep navigation changes localized to the existing menu, and use route/link checks plus browser checks to distinguish truly broken targets from redirects or third-party restrictions. Do not include the unrelated People's Community Center redesign or scheduling changes in this work.
