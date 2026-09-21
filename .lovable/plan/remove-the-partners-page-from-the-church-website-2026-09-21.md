# Remove the Partners page from the church website

The Partners content (State of Delaware, City of Dover, Ministerial Alliance, Boys & Girls Clubs, NeighborGood, Capital School District) belongs on the People's Community Center site, not the church site. A complete, reusable copy is already saved at `exports/partners-page/` in the repo (plus the zip you downloaded), so nothing is lost — this step takes it off the live church site.

## Changes

1. **Remove the page** — delete `src/pages/Partners.tsx`.
2. **Remove the route** — drop the `/partners` route and its import from `src/App.tsx`. Visiting `/partners` will then land on the site's Not Found page.
3. **Remove the "Partners" card** — take it out of the About page's link cards in `src/components/AboutLinksSection.tsx` (leaving Our Church, Staff & Leaders, What to Expect, United Church of Christ).
4. **Remove the footer link** — delete the "Partners" entry in `src/components/Footer.tsx`.
5. **Keep the export** — `exports/partners-page/` stays in the repo untouched, ready to drop into the PCC website when that project starts.

Note: the sentence on the UCC page mentioning "200 mission partners" is about the national church's work — unrelated, so it stays.

## Technical details

- Five files touched: delete `Partners.tsx`; edit `App.tsx`, `AboutLinksSection.tsx`, `Footer.tsx`.
- The partner logo asset pointers under `src/assets/partners/` stay in place — they're harmless, and the PCC site can reuse the same files.
- Verified current references before writing this plan: route + import in `App.tsx` (lines 15, 43), card in `AboutLinksSection.tsx` (line 29), footer link in `Footer.tsx` (line 61). The UCC page's "mission partners" mention is prose, not a link.
