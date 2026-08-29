# Meeting Follow-Up: Photos, Colors, Navigation & Watch Page

Work items taken from the meeting notes, plus placing the six uploaded photos.

## 1. Add the new photos

| Photo | Placement |
| --- | --- |
| `Watch.jpg` (congregation + pastor preaching) | Homepage hero image, replacing the current sanctuary shot — this is the "fuller, inviting" photo discussed |
| `Who_we_are.jpg` (Good Shepherd stained glass) | "Who We Are" section on the About page |
| `Visit.jpg` (sanctuary interior down the aisle) | About / Visit page header banner |
| `Our_Church.jpg` (exterior with sign) | Our Church / About page banner |
| `Serving_our_Neighbors.jpg` (food pantry kitchen) | "Serving Our Neighbors" community section on the homepage |
| `Give.jpg` (donor tree wall) | Give page banner |

Note: no "Welcome" photo was in this upload. The `Watch.jpg` image is used for the homepage welcome/hero unless a dedicated welcome photo is sent.

## 2. Color scheme — plum and gray, no pink

- Sweep the site and replace the pinkish/dark-purple section backgrounds so sections alternate between **plum** and **medium gray**.
- Drop green as a section background color (green stays only for small accents/buttons).
- Keep the lighter purple already applied to the header bar so the logo stays readable.

## 3. Navigation — About

- Remove the About dropdown entirely.
- "About" becomes a direct link to the About page.
- The About page gets four clearly separated sections — Our Church, United Church of Christ, Staff & Leaders, Partners — each linking through to its own page.

## 4. Watch page — three links

Replace the single YouTube link with three clearly labeled options:
- **Watch Live** — live stream
- **Previous Sermons** — sermon playlist
- **Full Worship Services** — the main YouTube channel

Links need the actual YouTube channel and playlist URLs; if they aren't provided, the current channel URL is used as a placeholder for all three and swapped in later.

## 5. Community Center section

- Confirm the third center reads "Center for Workforce Development" with real description copy (currently "Text to be updated" — needs wording).
- Add a **large button** linking to pcc-dover.org, replacing the small text link at the bottom of the section.

## 6. Already done / no change

- Century Gothic font is applied site-wide.
- Accessibility text on the About page is corrected.
- The Events / "What's Happening" page stays, per Rev. Hodge.

## Technical notes

Photos are added as CDN assets via the asset pipeline and imported into the relevant components; the current stock placeholders they replace stay in the repo for now. Color work is done by updating section background classes to the existing `church-*` plum tokens and `gray-300`, keeping dark-mode variants intact. The About nav change edits `navItems` in `Navbar.tsx` and expands `src/pages/About.tsx` into the four-section layout.

## Open questions

- Description copy for the Center for Workforce Development.
- Exact YouTube live / playlist / channel URLs for the three Watch links.
