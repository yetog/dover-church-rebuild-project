# Homepage Replication Design Spec
**Date:** 2026-06-19  
**Goal:** Replicate pcd-dover.org homepage and navigation exactly in the React/Vite/Tailwind repo.  
**Repo:** git@github.com:yetog/dover-church-rebuild-project.git

---

## Background

The original WordPress site is inaccessible (dev gone). The React rebuild at `dover-church-rebuild-project` has the right stack (React + Vite + TypeScript + Tailwind + shadcn/ui) and brand tokens (colors, fonts) now corrected, but the homepage section order and content do not match the live site at pcd-dover.org. This spec defines exactly what to add, remove, and fix to produce a faithful replication.

---

## Section Order — Target Homepage

The homepage must render sections in this exact order:

1. `<Navbar>`
2. `<HeroSection>`
3. `<QuickLinksSection>` ← new
4. `<CommunitySection>` (exists, keep)
5. `<AboutSection>` (rename content scope — Gracie Allen quote + OA statement)
6. `<ServiceInfoBar>` ← new
7. `<NewsSection>` ← new
8. `<SermonSection>` (exists, keep)
9. `<RomeroQuoteSection>` ← new
10. `<PrayerInvitationSection>` ← new
11. `<Footer>`

**Remove from homepage entirely:** `MeditationSection`, `NewsletterSection`, `ContactSection` — these become standalone pages, not homepage sections.

---

## Component Specs

### 1. Navbar

**Current state:** Flat links, no dropdowns, Community links to Lovable preview URL, missing 4 nav items.

**Target:**
- Logo image (left) — already using `src/assets/logo/church-logo.png`
- Desktop: horizontal nav with hover dropdowns for two items
- Mobile: hamburger → slide-in menu with nested sub-items

**Nav items (exact order):**
```
Who We Are ▾
  └ Church for the People        → /about
  └ United Church of Christ      → /ucc
  └ Pastor, Staff and Lay Leaders → /staff
  └ Partners in Mission           → /partners

Videos of Service                → /sermons
Daily Scripture, Meditation & Prayer Requests → /meditation
Happening at People's            → /happening
People's Community Center ▾
  └ Center for Children and Youth → /community/children-youth
  └ Center for Neighbors in Need  → /community/neighbors
  └ Center for Community Health   → /community/health

Helping Others & Getting Help    → /helping-others
Current Issues of our Newsletter → /newsletter
Contact Us                       → /contact
```

**Styling:**
- Background: `church-800` (`#422F3C`) — matches real site dark header
- Nav text: white, hover: `cta` green underline
- Dropdowns: white bg, `church-50` hover, `cta` green left border on hover
- Sticky top, z-50

---

### 2. HeroSection

**Current state:** Full-width banner image + headline + two CTA buttons.

**Target (match real site):**
- Full-width hero background image (`src/assets/banners/who-we-are.jpg`)
- Dark overlay (`bg-black/50`)
- Centered church logo (`src/assets/logo/church-logo.png`) — natural colors (not white-filtered)
- Tagline below logo: `"The People's Church of Dover is an Open and Affirming Congregation."`
- Font: Lato, large, white, centered
- Remove the two CTA buttons (real site doesn't have them on hero)
- Height: `min-h-[60vh]`

---

### 3. QuickLinksSection ← NEW

Four equal-width cards in a row, each linking to a key page. Matches real site's first section after hero.

| Card | Label | Link |
|------|-------|------|
| 1 | About Us | /about |
| 2 | Contact Us | /contact |
| 3 | People's Community Center | /community |
| 4 | Prayer List | /meditation |

**Styling:**
- Background: `church-600` (`#5A2653`) purple bar
- Cards: white bg, centered icon + label, hover lifts with shadow
- Full-width section, no vertical padding excess
- Icons: simple Lucide icons (Users, Mail, Building2, Heart)

---

### 4. CommunitySection (existing — keep, minor fixes)

Three-column cards with real program photos already wired. Keep as-is.  
Fix: "Learn More" buttons should use `bg-cta` green, not `church-600` purple.

---

### 5. AboutSection (existing — keep, content adjustment)

Contains the Gracie Allen quote ("Don't place a period where God has placed a comma.") and the "God is still Speaking" heading + OA statement. Keep this content.  
Fix: section background should be `bg-white` not `bg-secondary` (which now renders green).

---

### 6. ServiceInfoBar ← NEW

A single horizontal bar showing worship info. Matches real site's service info block.

**Content:**
- 📍 46 South Bradford, Dover, Delaware 19904
- 🕙 Every Sunday 10:00 AM
- 📺 Watch on YouTube (link — placeholder until real channel ID provided)

**Styling:**
- Background: `church-600` purple
- Text: white
- Three items evenly spaced in a row, icons + text
- Full width, compact padding (py-6)

---

### 7. NewsSection ← NEW

Four blog post cards in a row. Matches real site's "Latest News" section.

**Content:** Use placeholder posts for now (real content to come from church). Each card has:
- Thumbnail image (use program photos from `src/assets/programs/` as placeholders)
- Date
- Title
- Short excerpt (2 sentences)
- "Read More »" link

**Styling:**
- 4-column grid (desktop), 2-col tablet, 1-col mobile
- Card: white bg, border, hover shadow
- Date: `text-church-500`, small
- Title: `font-heading font-bold`
- Read More: `text-cta` green

---

### 8. SermonSection (existing — keep, minor fixes)

Keep existing structure. Fix: replace fake YouTube URLs with placeholder text noting real URLs needed. Keep "Watch on YouTube" CTA button using `bg-cta` green.

---

### 9. RomeroQuoteSection ← NEW

Full-width quote block. Matches real site's second inspirational quote.

**Content:**
> "A church that doesn't provoke any crises, a gospel that doesn't unsettle, a word of God that doesn't get under anyone's skin, a word of God that doesn't touch the real sin of the society in which it is being proclaimed — what gospel is that?"  
> — Saint Oscar Romero

**Styling:**
- Background: `church-800` (`#422F3C`) dark
- Text: white, centered, italic, large
- Attribution: smaller, `text-church-200`
- Full-width, generous padding

---

### 10. PrayerInvitationSection ← NEW

Simple outreach invitation block. Matches real site's final homepage section.

**Content:**
- Heading: "Seeking Prayer or Counsel?"
- Body: "We welcome all who seek prayer, guidance, or simply someone to talk to. Reach out to us — our community is here for you."
- CTA button: "Contact Us" → `/contact`

**Styling:**
- Background: `cta-light` (`#E8F5E9`) soft green
- Heading: `text-church-800`, `font-heading`
- Button: `bg-cta` green
- Centered, moderate padding

---

### 11. Footer (existing — fix links)

Keep existing three-column structure. Fix:
- YouTube link: placeholder `https://www.youtube.com/@PeoplesChurchOfDover` (confirm with church)
- Facebook link: placeholder `https://www.facebook.com/PeoplesChurchDover` (confirm with church)
- Add YouTube icon alongside Facebook icon

---

## Routes to Add to App.tsx

These pages exist as stubs or are missing entirely. Add routes so nav links don't 404:

| Path | Component | Status |
|------|-----------|--------|
| `/ucc` | `UCC.tsx` | create stub |
| `/staff` | `Staff.tsx` | create stub |
| `/partners` | `Partners.tsx` | create stub |
| `/happening` | `Happening.tsx` | create stub |
| `/community` | `Community.tsx` | create stub |
| `/community/children-youth` | `ChildrenYouth.tsx` | create stub |
| `/community/neighbors` | `Neighbors.tsx` | create stub |
| `/community/health` | `CommunityHealth.tsx` | create stub |
| `/helping-others` | `HelpingOthers.tsx` | create stub |

Stub pages: Navbar + banner image from `src/assets/banners/` + "Coming soon" placeholder + Footer. Each uses the correct banner image from the drive assets already in the repo.

---

## Files to Change

| File | Change |
|------|--------|
| `src/pages/Index.tsx` | Reorder sections, remove Meditation/Newsletter/Contact |
| `src/components/Navbar.tsx` | Add dropdowns, all nav items, dark bg |
| `src/components/HeroSection.tsx` | Centered logo + tagline, remove CTA buttons |
| `src/components/AboutSection.tsx` | Fix bg-secondary → bg-white |
| `src/components/CommunitySection.tsx` | Fix button color to cta green |
| `src/components/SermonsSection.tsx` | Fix button color to cta green |
| `src/components/Footer.tsx` | Add YouTube link + icon |
| `src/App.tsx` | Add new routes |

## Files to Create

| File | Purpose |
|------|---------|
| `src/components/QuickLinksSection.tsx` | 4-column quick links |
| `src/components/ServiceInfoBar.tsx` | Address + time + YouTube bar |
| `src/components/NewsSection.tsx` | 4-post news grid |
| `src/components/RomeroQuoteSection.tsx` | Oscar Romero quote |
| `src/components/PrayerInvitationSection.tsx` | Prayer outreach CTA |
| `src/pages/UCC.tsx` | Stub page |
| `src/pages/Staff.tsx` | Stub page |
| `src/pages/Partners.tsx` | Stub page |
| `src/pages/Happening.tsx` | Stub page |
| `src/pages/Community.tsx` | Stub page |
| `src/pages/ChildrenYouth.tsx` | Stub page |
| `src/pages/Neighbors.tsx` | Stub page |
| `src/pages/CommunityHealth.tsx` | Stub page |
| `src/pages/HelpingOthers.tsx` | Stub page |

---

## Out of Scope (deferred)

- Real YouTube channel ID / Facebook URL (waiting on church team)
- Contact form email backend
- CMS / dynamic news posts
- Sub-page full content (Staff bios, UCC page copy, etc.)
- Any design upgrades beyond faithful replication
