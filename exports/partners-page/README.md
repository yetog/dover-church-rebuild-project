# Partners page export

Exported from the People's Church of Dover Lovable project on 2026-09-18.
Everything the Partners page needs is in this folder — no dependency on the
original project's hosting.

## Contents
- `Partners.tsx` — standalone React page component (TypeScript + Tailwind)
- `assets/` — the six partner logos and the banner photo

## How to use in another React + Tailwind site
1. Copy `Partners.tsx` and the `assets/` folder into the target site's `src/`
   (e.g. `src/pages/Partners.tsx` and `src/pages/assets/` — adjust the import
   paths if you place them elsewhere).
2. Add a route in the target site's router, e.g.
   `<Route path="/partners" element={<Partners />} />`
3. Render the target site's own navbar and footer where the two `TODO`
   comments are.
4. The page uses the plum `church-*` Tailwind color tokens
   (`church-50/500/600/700/800/900`). Either copy those tokens from the
   original project's `tailwind.config` / `src/index.css`, or replace them
   with the target site's own palette.
5. The original site also supported dark mode (`dark:` variants); those were
   dropped in this standalone copy — re-add if the target site needs them.

## Text content
The intro paragraph and the six partner descriptions are current as of the
export date. Edit the `partners` array at the top of `Partners.tsx` to change
names, descriptions, or logos.
