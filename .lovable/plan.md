

# Gabi AI Financial Assistant — Implementation Plan

## Overview

Add a floating AI chat assistant ("Gabi") to all pages. Uses Lovable AI Gateway (not Anthropic directly — the project already has `LOVABLE_API_KEY` configured) via an edge function. The chat panel follows the specified visual identity.

## Key Decision: API Approach

The user requested Anthropic's API with a `VITE_ANTHROPIC_API_KEY`. However:
- Calling AI APIs directly from the frontend exposes API keys (security risk)
- This project has Lovable Cloud with `LOVABLE_API_KEY` already configured
- Lovable AI Gateway supports the same functionality without requiring an additional API key

**Approach**: Use a backend edge function (`supabase/functions/gabi-chat/index.ts`) calling Lovable AI Gateway with Gabi's system prompt. No API key needed from the user.

## Files to Create

### 1. `supabase/functions/gabi-chat/index.ts` — Edge Function

- Receives `{ messages }` from client
- Prepends Gabi's system prompt (the exact one from the user's spec)
- Calls Lovable AI Gateway (non-streaming, simple invoke)
- Returns assistant response
- Handles 429/402 errors gracefully

### 2. `src/components/GabiChat.tsx` — Chat Panel Component

- Full chat UI: header, message area, input
- State: `isOpen`, `messages[]`, `isLoading`, `error`
- Session history via `sessionStorage` (last 10 messages)
- Welcome message + 4 quick-action pills on first open
- Visual specs exactly as described:
  - 380x520px desktop, fullscreen mobile
  - Header: `bg-[#1C1917]`, avatar "G", green status dot, close button
  - Messages area: `bg-[#F7F4EE]`
  - Gabi bubbles: white bg, thin border, `border-radius: 12px` with bottom-left square
  - User bubbles: `bg-[#16A34A]`, white text, bottom-right square
  - Input with placeholder "Pergunte sobre finanças..."
- Enter to send, Shift+Enter for newline
- Auto-scroll to latest message
- Loading state: animated 3 dots
- Error state: retry button
- Calls edge function via `supabase.functions.invoke('gabi-chat', ...)`

### 3. `src/components/GabiFAB.tsx` — Floating Action Button

- 56px green circle, chat icon, tooltip "Fale com a Gabi"
- Slide-up animation when opening chat
- Conditionally hidden on `/contact` and on mobile at `/blog/:slug` routes
- Renders `GabiChat` when open

## Files to Modify

### 4. `src/App.tsx`

- Add `<GabiFAB />` inside the `BrowserRouter` (needs access to route for conditional display)

## Technical Details

- Edge function uses `LOVABLE_API_KEY` (already available)
- Model: `google/gemini-3-flash-preview` (default, fast, good for conversational Q&A)
- Non-streaming for simplicity (responses are short, max 3 paragraphs per Gabi's rules)
- `sessionStorage` key: `gabi-chat-history`, stores last 10 messages as JSON
- Mobile detection via viewport width for fullscreen mode
- Route detection via `useLocation()` for conditional visibility

