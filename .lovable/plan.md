# Hero Photo Revert + About Page Fixes

## 1. Restore the previous homepage hero photo

The hero currently uses the congregation/preaching photo (`Watch.jpg`), which replaced the sanctuary interior photo you had uploaded earlier. Revert the hero back to the sanctuary photo (`hero-sanctuary.jpg`); `Watch.jpg` stays in use on the Watch page banner.

## 2. Fix the "Our Church" link on the About page

The "Our Church" card links to `/about#who-we-are`. Since you are already on the About page, the router does not react and nothing appears to happen. Fix: make the card scroll smoothly to the "Who We Are" section on the page, and also handle the `#who-we-are` anchor when arriving from another page.

## 3. About page text and staff photos

I can't reach the shared Google Drive from here. To add the About copy and staff headshots, upload the files directly in chat (drag the photos and paste or attach the text). Once uploaded I will:

- Replace the "Photo Coming Soon" placeholder for Rev. Dr. Hodge on the About page.
- Replace the three "Photo needed" placeholders and the lay-leader avatars on the Staff & Leaders page with real headshots.
- Swap in the provided About / Our Church copy in place of the current placeholder text.

## Technical notes

Hero: change the image import in `src/components/HeroSection.tsx` back to `@/assets/hero-sanctuary.jpg`. About link: in `AboutLinksSection.tsx`, use a click handler with `scrollIntoView` for the same-page target, plus a hash-scroll effect in `src/pages/About.tsx`. Uploaded photos go through the CDN asset pipeline and are imported into `PastorSection.tsx` and `src/pages/Staff.tsx`.
