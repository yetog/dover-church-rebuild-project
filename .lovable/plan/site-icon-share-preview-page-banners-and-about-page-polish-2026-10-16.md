# Site icon, share preview, page banners, and About page polish

## 1. Site icon and share preview (remove Lovable branding)
- Use the round UCC emblem from your screenshot as the browser tab icon. Remove the old default icon so it can't show up instead.
- Shared links currently show a Lovable preview image. Replace it with a church share image (sanctuary photo, church name, and emblem) so links shared in texts and on Facebook or X look like the church's own.
- Remove the placeholder "@peoples_church" X handle until the real one is confirmed.

## 2. Consistent page banners on every subpage
Today About, Watch, Give and Helping Others have photo banners. Events, Daily Devotional, Contact, Newsletter and UCC show a plain purple block.
- Give every subpage a photo banner, using church photos you already have (Our Church, Who We Are, Serving our Neighbors, worship and choir photos).
- Make all banners the same height. Add a soft purple fade so text is easy to read, plus a small gold accent line above the title.
- Make the breadcrumb ("Home > Events") lighter and smaller so the title stands out. Tighten spacing on phones.

## 3. About page improvements
- Under the banner, add a "jump to" bar: Our Church, Our Pastor, Staff & Trustees, History. It stays visible while you scroll.
- Add more breathing room between sections, and switch between light and soft-purple backgrounds so each section reads as its own block.
- Show the seven faith statements as a tidy numbered card grid instead of one long list.
- End the page with a short "Visit us Sunday at 10 AM" call to action, with Plan a Visit and Watch Online buttons.
- All approved wording, names, photos and plum portrait frames stay exactly as they are.

## 4. Quick UI sweep (small fixes only)
- Make button styles and corner rounding the same across Give, Watch, Events and Helping Others.
- Remove the "Percentages are illustrative" note from the Give page and hide that chart until real budget numbers are provided. Or tell me to keep it.
- Check every page on phone and desktop, and fix any text that overflows or any uneven spacing.

## Technical details
- Favicon: crop the screenshot to a padded square at `public/favicon.png` (64px) and an `apple-touch-icon` (180px). Update `index.html` and delete `public/favicon.ico`.
- Share image: generate a 1200x630 image and save it to `public/og-image.jpg`. Set og:image and twitter:image to the absolute URL on the primary domain, add og:url, and drop the Lovable image URLs.
- PageHeader: add a gradient overlay, a fixed min-height, and an accent bar. Pass `image` from each page. No new images need generating, since we reuse existing church photos.
- About: add a sticky anchor nav (hash links work with the existing scroll handling) and restyle OurChurchSection's statements. Add a CTA section.
