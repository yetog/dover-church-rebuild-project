# November 6 meeting edits

## What changes

1. **Homepage order** – Worship and devotional content moves up. New order:
   Hero → Weekly activities → Videos/worship → Daily devotional card → Serving Our Neighbors → Contact.

2. **Rename the devotional heading** – "Daily Scripture & Meditation" becomes **"Prayer and Daily Devotional"** in the menu (desktop and phone) and as the Devotional page banner title.

3. **Remove "Visit"** from the Who We Are menu.

4. **Split About Us** – The Who We Are menu becomes:
   - **About Our Church** (our church, beliefs, pastor, staff and trustees, history)
   - **United Church of Christ** (the existing UCC page, now its own menu item)
   The About page's link card to the UCC page is removed, since the menu now covers it. The page wording stays the same.

5. **Videos of Service page** – The video player and "Live Every Sunday" bar move above "What to Expect", so videos show first.

6. **Prayer and Pastoral Care (Devotional page)** – The section under the devotionals becomes two columns (one column on phones):
   - **Left:** the current Prayer Requests box, unchanged.
   - **Right:** a new **Pastoral Needs** box: "For urgent pastoral matters, please contact Pastor Hodge directly," with (302) 674-4177 ext. 3 (tap to call) and pastor@pcd-dover.org (tap to email).

7. **Helping Others and Getting Help page** – Phone numbers change to 674-4177 **ext. 3**. The help text will say that anyone in need may make an appointment with the pastor, and that the church does not turn people away who are not members.

8. **Newsletter from ChurchTrac** – Research only, no change to the site yet. Two likely options:
   - **Simple:** each week, send me the newsletter as a JPEG or PDF. I put it on the Newsletter page, with a viewer and a download button.
   - **Automatic:** use ChurchTrac's public sharing link or embed code, if it has one, so the page updates by itself.
   I'll report back on which one ChurchTrac supports. That may need the church's ChurchTrac login or a sample share link.

## Wording I'll write unless you send your own
- The Pastoral Needs box text in item 6.
- The new sentence on the Helping Others page: "If you are in need, you may make an appointment with the pastor. You don't need to be a member. We do not turn anyone away."

## Technical details
- `src/pages/Index.tsx`: reorder to `HeroSection, NewsSection, SermonSection, HomeDevotionalCard, CommunitySection`.
- `src/components/Navbar.tsx`: remove the Visit child; rename the About child to "About Our Church"; add `{ label: 'United Church of Christ', href: '/ucc' }`; rename the top-level label.
- `src/pages/Meditation.tsx`: change the PageHeader title.
- `src/components/AboutLinksSection.tsx`: remove the UCC card.
- `src/pages/Sermons.tsx`: render `<WhatToExpectSection />` after the live bar and the playlist section.
- `src/components/MeditationSection.tsx`: replace the single `max-w-3xl` card with a `grid md:grid-cols-2` that has Prayer Requests on the left and a new Pastoral Needs card on the right.
- `src/pages/HelpingOthers.tsx`: change the phone text and `tel:` links to ext. 3 (`tel:+13026744177,3`) and update the help copy.
- Record the work in CHANGELOG.md and billing/ledger.csv, and tick it off in roadmap.md.
