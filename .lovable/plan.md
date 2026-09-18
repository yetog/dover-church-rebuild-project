# Export the Partners page work for reuse on a future site

## Goal
The Partners page was built here by mistake (meant for another project). Package everything it needs into a portable export so it can be dropped into the other website later — without changing what visitors see on this site right now.

## What the page depends on
- `src/pages/Partners.tsx` — the whole page (intro text, six partner cards)
- Six logo assets in `src/assets/partners/` (Delaware seal, City of Dover, IMA Dover, Boys & Girls Clubs, NeighborGood Partners, Capital School District) — five are hosted-asset pointers, one is a local file
- `src/components/PageHeader.tsx` — shared banner component (the page passes a small optional tweak, but works fine with the stock version)
- `src/assets/photos/Serving_our_Neighbors.jpg` — banner photo (shared with other pages)
- Shared look: navbar, footer, plum color tokens — these come from the site shell; the export will note that the target site needs its own navbar/footer/colors

## Steps
1. Build a self-contained export folder containing:
   - A copy of the Partners page, rewritten to be standalone (its own simple banner instead of the shared one, inline comments marking where the target site's navbar/footer go)
   - Real image files for all six logos (downloaded from the hosted pointers into the folder, so no dependency on this project's asset hosting) plus the banner photo
   - A short `README.md` explaining how to drop it into another React site and what to restyle
2. Zip the folder and deliver it to Files so it can be downloaded and saved.
3. Also copy the export folder into the repository under `exports/partners-page/` so it's versioned in GitHub and travels with the repo.
4. Leave the live site untouched — the Partners page stays exactly as it is until you say to remove it.

## When you're ready to remove it from this site (later, on your word)
- Delete `src/pages/Partners.tsx`, the `/partners` route in `src/App.tsx`, any menu links to it, and the `src/assets/partners/` folder.

## Technical details
- Hosted asset pointers (`*.asset.json`) resolve to `/__l5e/assets-v1/...` URLs; the export downloads each to a real file so the package works anywhere.
- The standalone page keeps the same Tailwind classes; the README notes the plum `church-*` color tokens it expects and how to substitute another palette.
