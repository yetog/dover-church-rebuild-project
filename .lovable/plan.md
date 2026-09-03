# About Page: Photo Crops + Missing Headshots

## Verified current state
All 13 headshots on the About page load successfully (no broken images). The real problems are framing and three specific photos:

- Most headshots are tall portraits (roughly 2:3) squeezed into square cards with center cropping, so the top of the head is cut on Robin, Cheryl, Randal, Paul, James and Clarence.
- Kathy H.'s file is the compressed landscape version (1600x1067) where she stands far from the camera, so the square crop shows mostly room, not a headshot.
- Paul and Ileana render, but you've flagged them as wrong/unavailable, so their source files need to be replaced.

## Changes

### 1. Face-weighted square crops (`src/components/StaffSection.tsx`)
Keep the square card grid, but crop toward the face instead of the center: add upward-biased object positioning to every headshot image in both the Church Staff and Lay Leaders grids. This stops heads being cut off without changing the layout or card sizes.

### 2. Same treatment for the pastor photo (`src/components/PastorSection.tsx`)
Apply the same face-weighted positioning to Rev. Dr. Hodge's 4:5 photo so the framing matches the rest of the page.

### 3. Replace Paul, Kathy H. and Ileana photos
Send the original files for Paul, Kathy H. and Ileana here in chat and they'll be added to `src/assets/staff/` replacing `paul.jpg`, `kathy-h.jpg` and `ileana.jpg`. If a file is over the repo size limit it will be resized to about 1600px wide (visually identical on screen) rather than dropped.

For Kathy specifically, if only the wide full-body shot exists, it will be cropped to a headshot around her face so her card matches the others.

## Verification
After the change, the About page will be re-checked in the preview with screenshots of the Church Staff and Lay Leaders grids to confirm no head is cut off and every face sits comfortably in frame.

## Out of scope
- Real titles and bios for James, Paul, Randal, Kathy, CJ, Clarence, Ed and Ileana (still placeholders until you send them).
- No layout, content or backend changes.
