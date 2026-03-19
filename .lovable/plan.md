

# Instagram Video Embeds Integration

## Overview

Add optional Instagram Reel embeds across 4 existing pages (Article, Library topic, Learning Paths, About) with lazy loading, fallback UI, and a single shared embed script. Projects page has no detail routes, so that integration will be skipped for now.

## Files to Create

### 1. `src/components/InstagramEmbed.tsx` — Reusable Embed Component

- Accepts `url`, `maxWidth`, and optional `className` props
- Uses `IntersectionObserver` via a `useRef` to lazy-load: renders the `blockquote` markup only when visible, then calls `window.instgrm?.Embeds.process()`
- Fallback: if embed fails to render after 5s timeout, shows an elegant fallback card (surface bg, Instagram icon in accent green, "Ver no Instagram →" link)
- Handles `null`/`undefined` url gracefully (renders nothing)

### 2. `src/hooks/useInstagramEmbed.ts` — Script Loader Hook

- Loads `//www.instagram.com/embed.js` once globally via a module-level flag
- Appended to `document.body` with `async` attribute
- Called from `InstagramEmbed` component on mount

## Files to Modify

### 3. `src/data/content.ts` — Add `instagramUrl` Fields

- Add optional `instagramUrl?: string` to `Article` and `LibraryTopic` interfaces
- Add placeholder URLs to ~4 articles and ~4 library topics as specified in the prompt
- Export a `learningPathsData` with `instagramUrl` on steps (or modify inline in LearningPaths)

### 4. `src/pages/ArticlePage.tsx` — "Também em Vídeo" Block

- Insert above "Related Articles" section
- Conditional: only if `article.instagramUrl` exists
- Layout: thin 1px divider + green uppercase label "TAMBÉM EM VÍDEO", centered `InstagramEmbed` (max-width 480px), subtitle text below

### 5. `src/pages/Library.tsx` — "Entenda em 60 Segundos" Block

- In the topic detail view (lines 51-55 area), after the article content, before "Related Blog Articles"
- Conditional: only if `topic.instagramUrl` exists
- Layout: dark card (`bg-[#1C1917]`), 2-column on desktop (40% embed / 60% text), stacked on mobile
- Title: "Entenda em 60 segundos", description text, "Ver no Instagram →" fallback link

### 6. `src/pages/LearningPaths.tsx` — Accordion Steps with Video Badge

- Add `instagramUrl` to step data inline (4 steps with URLs, others null)
- Add green `+ vídeo` badge next to step title when URL exists
- Convert each step from a simple Link to a collapsible/accordion: clicking expands to show description + embed (if URL exists) + existing link
- Use the existing `Collapsible` component from radix

### 7. `src/pages/About.tsx` — "Me Conheça Melhor" Section

- New section before the end of the page (after Certifications, before closing `</div>`)
- Dark background (`bg-[#1C1917]`), generous padding
- Title in DM Serif Display: "Me conheça melhor"
- Subtitle: "Um pouco mais sobre minha trajetória no Instagram"
- Centered `InstagramEmbed` (max-width 480px)
- "Seguir no Instagram →" link below

### 8. Projects Page — Skipped

- Current `/projects` is a list page with no detail routes (`/projects/:slug`)
- No place to add per-project video embeds without creating detail pages
- Will note this as a future enhancement

## Technical Details

- **Lazy loading**: `IntersectionObserver` with `rootMargin: '200px'` for pre-loading
- **Script**: Single `<script async>` appended once, module-level `let loaded = false` guard
- **Fallback**: 5-second timeout after `process()` call; if embed iframe not detected, show fallback card
- **No render when empty**: All blocks use early return / conditional rendering on `instagramUrl`

