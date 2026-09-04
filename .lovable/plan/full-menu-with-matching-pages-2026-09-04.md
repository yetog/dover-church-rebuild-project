# Full menu with matching pages

Add the requested items to the main menu alongside what is already there, and make sure each one opens a real page.

## New menu (in order)

| Menu item | Page it opens | Status |
| --- | --- | --- |
| Who We Are | About page | exists |
| Videos of Service | Watch / sermons page | exists |
| Daily Scripture Meditation and Prayer Requests | Devotional page | exists |
| Happening at People's | Events page | exists |
| People's Community Center | pcc-dover.org (opens in a new tab) | external |
| Helping Others & Getting Help | Outreach page | placeholder page — needs real content |
| Current Issues of our Newsletter | Newsletter page | exists |
| Contact Us | Contact page | exists |
| Give | Give page | exists, kept from the current menu |

## What changes

- The menu grows from 6 items to the 9 above. Longer names wrap onto two lines so the bar stays tidy, and the same list drives the phone menu.
- Every item links to a page that already loads — nothing will dead-end.
- "Helping Others & Getting Help" currently shows a "coming soon" placeholder. It will stay linked, and you can send the text and photos for it whenever ready.

## Note

Because the menu is now nine items wide, the desktop bar will be tight. If it looks crowded, the alternative is grouping a few items under a dropdown — say the word and I'll adjust.

## Technical detail

- Rewrite `navItems` in `src/components/Navbar.tsx` to the nine entries; keep the external flag for the community center.
- Wrap multi-word labels with `\n` and render label text in a `span` with `whitespace-pre-line text-center` for both desktop and mobile branches.
- No route changes needed in `src/App.tsx`; all target routes (`/about`, `/sermons`, `/meditation`, `/happening`, `/helping-others`, `/newsletter`, `/contact`, `/give`) already exist.
