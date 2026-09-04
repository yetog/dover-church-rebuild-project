# Restore old menu items alongside the new ones

## What went wrong
The navbar was rewritten with only the new menu list, dropping the existing items the team uses: **Watch**, **Visit**, **Events**, and **About**. The pages themselves were never deleted — all routes still work — only the menu entries were removed.

## Fix: one merged menu, grouped into dropdowns
Old + new together is 12+ items, too many for a flat bar. Group them into 6 tidy top-level entries (the navbar already supports dropdowns):

```text
Who We Are ▾        Worship ▾                    Happening ▾              Community ▾                    Contact Us    Give
  About Us            Videos of Service            Events (/happening)       People's Community Center ↗
  Visit               Daily Scripture Meditation   Newsletter              Helping Others & Getting Help
                      and Prayer Requests
```

- **Who We Are** → About Us (`/about`), Visit (`/about`)
- **Worship** → Videos of Service (`/sermons`), Daily Scripture Meditation and Prayer Requests (`/meditation`)
- **Happening** → Events (`/happening`), Current Issues of our Newsletter (`/newsletter`)
- **Community** → People's Community Center (external, pcc-dover.org), Helping Others & Getting Help (`/helping-others`)
- **Contact Us** (`/contact`) and **Give** (`/give`) stay as top-level buttons
- Mobile menu gets the same structure with tap-to-expand sections

## Technical details
- Only `src/components/Navbar.tsx` changes — no pages or routes touched.
- Dropdown items currently only support internal links; add external-link support so the PCC link can live inside the Community dropdown (opens in new tab).
- Keep existing styling (multi-line labels, hover styles, dark mode).

## Alternative
If you'd rather have everything flat in the bar (no dropdowns), say so and I'll restore all items as a single-row list instead — it will just be crowded on smaller screens.
