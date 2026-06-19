# 2026 Redesign Design Spec
**Date:** 2026-06-19  
**Goal:** Modernize the People's Church of Dover homepage to a 2026 standard while keeping the stakeholder-approved structure intact. Add a dark mode toggle for the meeting proposal.  
**Repo:** git@github.com:yetog/dover-church-rebuild-project.git

---

## Background

The current build faithfully replicates pcd-dover.org — a mid-2010s WordPress layout. The stakeholder approved that structure, but the visual execution needs to move forward a decade. This redesign applies Option C (Modern Nonprofit) aesthetics on top of the existing section order, adds a stats bar, fixes the double-button issue in CommunitySection, and introduces a dark mode toggle that turns the site into Option A (Bold Purple Identity) at the flip of a switch.

The goal at the stakeholder meeting: show the light version as "exactly what you asked for, modernized" and flip to dark mode live as the upgrade pitch.

---

## Typography System

All headings switch from regular-weight centered Lato to **900-weight uppercase tight-tracked** display treatment. No new fonts — Lato at full weight used aggressively.

**Display headings** (section titles, hero subtext, card labels):
```css
font-weight: 900;
text-transform: uppercase;
letter-spacing: -0.05em;
line-height: 1;
```

**Section labels** (eyebrow text above headings):
```css
font-size: 0.625rem; /* 10px */
font-weight: 700;
text-transform: uppercase;
letter-spacing: 0.15em;
color: church-500;
```

Apply via new Tailwind utility classes added to `index.css`:
```css
.display-heading {
  @apply font-heading font-black uppercase tracking-tight leading-none;
}
.section-label {
  @apply font-heading font-bold uppercase text-xs tracking-widest text-church-500;
}
```

---

## Color Tokens

### Light Mode (default — no change to existing tokens)

| Role | Token | Hex |
|------|-------|-----|
| Page background | `bg-white` | #FFFFFF |
| Alt section background | `bg-church-50` | #f7f2f6 |
| Card background | `bg-white` | #FFFFFF |
| Body text | `text-church-800` | #422F3C |
| Headings | `text-church-800` | #422F3C |
| Primary purple | `church-600` | #5A2653 |
| CTA green | `cta` | #4CAF50 |

### Dark Mode (applied when `<html>` has class `dark`)

Override CSS custom properties in `index.css` inside a `.dark` selector:

```css
.dark {
  --background: 308 41% 6%;          /* #1a0a17 */
  --foreground: 300 30% 93%;         /* #ede5f0 */
  --card: 308 30% 22%;               /* #422F3C */
  --card-foreground: 300 30% 93%;    /* #ede5f0 */
  --muted: 308 35% 14%;              /* #2d1429 */
  --muted-foreground: 300 25% 75%;   /* #b885aa */
  --border: 308 35% 22%;             /* #422F3C */
  --primary: 308 41% 25%;            /* #5A2653 — unchanged */
  --secondary: 122 39% 49%;          /* #4CAF50 — unchanged */
}
```

Additional dark-mode Tailwind overrides for section backgrounds:
- `bg-white` sections → `dark:bg-[#1a0a17]`
- `bg-church-50` sections → `dark:bg-[#2d1429]`
- Cards `bg-white` → `dark:bg-[#422F3C]`
- Body text `text-church-800` → `dark:text-[#ede5f0]`
- Headings `text-church-800` → `dark:text-white`
- Section labels `text-church-500` → `dark:text-[#b885aa]`

---

## Dark Mode Toggle

### Behavior
- Toggle button in the Navbar, far right on desktop, visible on mobile
- Icon: `Sun` (light mode) / `Moon` (dark mode) from Lucide
- On click: toggle `dark` class on `document.documentElement`
- Persist preference in `localStorage` key `pcd-theme`
- On page load: read `localStorage` and apply class before first render (no flash)

### Implementation
A `ThemeProvider` context component wraps the app in `App.tsx`:

```tsx
// src/context/ThemeContext.tsx
import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';
interface ThemeContextValue { theme: Theme; toggleTheme: () => void; }
const ThemeContext = createContext<ThemeContextValue>({ theme: 'light', toggleTheme: () => {} });

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    const stored = localStorage.getItem('pcd-theme');
    return (stored === 'dark' || stored === 'light') ? stored : 'light';
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('pcd-theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(t => t === 'light' ? 'dark' : 'light');
  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => useContext(ThemeContext);
```

Wrap `App.tsx` content with `<ThemeProvider>`. Add toggle button to `Navbar.tsx`.

---

## New Component: StatsBar

Insert between `<HeroSection />` and `<QuickLinksSection />` in `Index.tsx`.

**Content:**
| Stat | Label |
|------|-------|
| 1886 | FOUNDED *(confirm with church — placeholder)* |
| 3 | PROGRAMS |
| UCC | MEMBER |

**Styling:**
- Background: `bg-church-600 dark:bg-[#2d1429]`
- Three columns, equal width, center-aligned
- Stat number: `display-heading` class, `text-white`, large (text-3xl)
- Label: `section-label` class, `text-church-200`
- Vertical dividers between columns: `border-r border-white/20`

---

## Files to Modify

### 1. `src/index.css`
- Add `.display-heading` and `.section-label` utility classes
- Add `.dark { ... }` CSS variable overrides block

### 2. `src/App.tsx`
- Import and wrap with `<ThemeProvider>`

### 3. `src/components/Navbar.tsx`
- Import `Sun`, `Moon` from lucide-react
- Import `useTheme` from `@/context/ThemeContext`
- Add toggle button far right of desktop nav and in mobile menu

### 4. `src/components/HeroSection.tsx`
- Upgrade dark overlay to `bg-black/60`
- Replace plain OA tagline `<p>` with a styled treatment:
  - Church name: `section-label` class, white
  - OA badge: green pill `bg-cta text-white` rounded, uppercase, small

### 5. `src/components/QuickLinksSection.tsx`
- Card labels: apply `font-black uppercase tracking-tight` (display heading treatment)
- Add `dark:bg-[#2d1429]` to section, `dark:bg-[#422F3C]` to cards, `dark:text-[#ede5f0]` to labels

### 6. `src/components/CommunitySection.tsx`
- **Remove** the bottom Volunteer/Donate button row entirely (fixes double-button issue)
- Section background: add `dark:bg-[#1a0a17]`
- Card backgrounds: add `dark:bg-[#422F3C]`
- Section heading: apply `display-heading` class + `dark:text-white`
- Card titles: `dark:text-[#ede5f0]`

### 7. `src/components/AboutSection.tsx`
- Section heading: apply `display-heading` class
- Background: add `dark:bg-[#1a0a17]`
- Quote text: add `dark:text-[#ede5f0]`

### 8. `src/components/ServiceInfoBar.tsx`
- Add `dark:bg-[#2d1429]` to section (purple bar stays visible in both modes)

### 9. `src/components/NewsSection.tsx`
- Section heading: apply `display-heading` class
- Section background: add `dark:bg-[#1a0a17]`
- Cards: add `dark:bg-[#422F3C] dark:border-[#5A2653]`
- Card titles: add `dark:text-white`
- Dates/excerpts: add `dark:text-[#b885aa]`

### 10. `src/components/SermonSection.tsx`
- Section heading: apply `display-heading` class
- Background: add `dark:bg-[#1a0a17]`
- Cards: add `dark:bg-[#422F3C]`
- Text: add `dark:text-[#ede5f0]`

### 11. `src/components/RomeroQuoteSection.tsx`
- No change needed — already uses `bg-church-800` which looks correct in both modes
- Add `dark:bg-[#1a0a17]` to deepen it in dark mode

### 12. `src/components/PrayerInvitationSection.tsx`
- Background: add `dark:bg-[#2d1429]`
- Heading/body: add `dark:text-white` / `dark:text-[#ede5f0]`

### 13. `src/components/Footer.tsx`
- No structural change — already dark (`bg-church-800`)
- Add `dark:bg-[#0d0510]` to deepen in dark mode

---

## Files to Create

| File | Purpose |
|------|---------|
| `src/context/ThemeContext.tsx` | Dark mode state, toggle function, localStorage persistence |
| `src/components/StatsBar.tsx` | Three-stat purple bar between hero and quick links |

---

## Section Order (Index.tsx — no change)

```
Navbar (with toggle)
HeroSection
StatsBar  ← new
QuickLinksSection
CommunitySection (bottom buttons removed)
AboutSection
ServiceInfoBar
NewsSection
SermonSection
RomeroQuoteSection
PrayerInvitationSection
Footer
```

---

## Out of Scope

- Sub-page dark mode (stub pages inherit Navbar/Footer which already get dark mode; main content "coming soon" text will adapt via CSS variable)
- CMS / dynamic content
- Contact form backend
- Real founding year (placeholder 1886 — must confirm with church before launch)
- Real YouTube channel ID / Facebook URL

---

## Meeting Presentation Flow

1. Open the live site — light mode loads by default
2. Walk through the homepage: "This is exactly what you approved, built with modern tooling"
3. Click the moon icon — whole site flips to dark mode live
4. "This is what it could become — same structure, same content, same URL"
5. Leave the choice with the stakeholder
