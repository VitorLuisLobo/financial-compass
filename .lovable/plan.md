

# Homepage Visual Refactoring — Awwwards/Dribbble-Level Portfolio

## Overview

A complete visual refactoring of the homepage layout to achieve a modern, editorial, Awwwards-level portfolio aesthetic. Same content and sections, entirely new composition, spacing, and visual hierarchy.

## Design Direction

- **Massive typography** — hero headlines at 6-8rem, editorial section headers
- **Generous whitespace** — sections with `py-36` to `py-44` spacing
- **Asymmetric layouts** — offset grids, staggered elements, editorial composition
- **Minimal decoration** — remove orbs, mesh gradients, grid patterns; use clean space instead
- **Subtle interactions** — clean hover states, smooth scroll reveals, no shimmer/glow
- **Editorial feel** — think magazine layout, not SaaS template

## Files to Modify

### 1. `src/components/home/HeroSection.tsx` — Complete Rewrite

**New layout:**
- Full viewport height, clean two-column split (60/40)
- Left: oversized headline (~6rem+) with tight leading, no badge/pill, just clean type
- Small elegant description below with generous spacing
- Horizontal stats row with large numbers + thin labels (no icons, pure typography)
- Single primary CTA button, minimal and elegant
- Right: large profile photo with no rings/orbs, just a clean rounded container with subtle shadow
- Remove all mesh backgrounds, orbs, grid patterns, floating stat cards
- Clean background with a single very subtle gradient

### 2. `src/components/home/StatsStrip.tsx` — Remove or Integrate

- Remove as standalone component — stats integrated into hero section
- Cleaner presentation: large bold numbers in a horizontal row

### 3. `src/components/home/FeaturedArticles.tsx` — Editorial Grid

- Section header: oversized left-aligned title with a thin horizontal rule
- 3-column grid with equal cards (not bento)
- Cards: clean white/surface background, large padding, category as small uppercase label, large title, date below, subtle border, hover lifts with arrow icon appearing
- More whitespace between cards

### 4. `src/components/home/LibrarySection.tsx` — Minimal Cards

- 2-column or 3-column grid with more spacious cards
- Remove icon containers — use subtle colored dot or just text
- Larger card padding, cleaner hover state
- Section header with editorial large type + thin divider

### 5. `src/components/home/LearningPathsSection.tsx` — Clean Timeline

- Horizontal or side-by-side layout
- Remove background numbers — use clean numbered list
- More whitespace, editorial styling

### 6. `src/components/home/ProjectsSection.tsx` — Modern Grid

- 2x2 grid instead of 4 columns
- Larger cards with more breathing room
- Clean hover with arrow icon reveal
- Remove corner blur effects

### 7. `src/components/home/NewsletterSection.tsx` — Full-Width CTA Banner

- Transform into a bold full-width call-to-action section
- Large headline, centered layout, prominent form
- Subtle background differentiation

### 8. `src/pages/Index.tsx` — Remove StatsStrip Import

- Remove StatsStrip component (stats now in hero)
- Keep section order otherwise

### 9. `src/index.css` — Refined Styles

- Add new utility classes for editorial spacing
- Simplify glass/glow effects — more subtle
- Increase base spacing variables
- Add `.section-divider` thin line utility

### 10. `src/components/Header.tsx` — Minimal Nav

- Taller navbar height (h-20)
- Cleaner spacing between nav items
- More refined active indicator

### 11. `src/components/Footer.tsx` — Minimal Footer

- Simplified layout, more whitespace
- Larger text, fewer columns

## Visual Principles Applied

| Current | New |
|---------|-----|
| Orbs + mesh gradients | Clean whitespace |
| Floating stat cards | Inline typography stats |
| Dense card grids | Spacious editorial grids |
| Glow/shimmer effects | Subtle shadow + lift |
| Template-like sections | Magazine-style composition |
| Busy backgrounds | Minimal, breathing layouts |

## Technical Notes

- Keep `ScrollReveal` component for fade-in animations
- Keep existing data imports (`allArticles`, `libraryData`, etc.)
- Keep all routing and navigation structure
- Keep Manrope + DM Serif Display fonts (they work well for editorial)
- All changes are CSS/layout only — no backend or data changes

