# LedgerAI Marketing Site — Agent Guide

This is the public marketing site for LedgerAI, built with **Next.js 16 (App Router)** and **React 19**. It is separate from `app-frontend/` (Angular customer app) and `app-backend/` (NestJS API).

## Commands

- `pnpm dev` — start dev server on http://localhost:3001
- `pnpm build` — production build
- `pnpm start` — run the production build on port 3001
- `pnpm lint` — ESLint via `next lint`
- `pnpm typecheck` — `tsc --noEmit`

## Architecture

- **Routing**: App Router only. The single marketing page is `src/app/page.tsx`.
- **Styling**: Tailwind CSS v4 for utilities + CSS Modules (`*.module.css`) for section-specific custom layouts. Design tokens live in `src/app/globals.css` under `:root`.
- **Fonts**: `next/font/google` in `src/lib/fonts.ts`. Never add `<link href="fonts.googleapis.com">` — it bypasses Next's font optimization.
- **Client vs Server Components**: default to Server Components. Only mark files `"use client"` when they need browser APIs, state, or effects (see `components/nav.tsx`, `hero-visual.tsx`, `logos-marquee.tsx`, `confidence.tsx`, `reveal.tsx`, `demo-form.tsx`).
- **Forms**: Server Actions in `src/app/actions.ts`. Client uses `useActionState` from React 19.
- **Validation**: Zod schemas in `src/lib/`.

## Conventions

- `src/app/` — routes, layouts, server actions, metadata files (sitemap, robots)
- `src/components/<name>.tsx` + optional `<name>.module.css`
- `src/lib/` — framework-agnostic helpers (fonts, validation schemas)
- Imports via `@/` alias (`@/components/nav`, `@/lib/fonts`)
- Never import from `app-frontend/` or `app-backend/` — this project is standalone

## Design source

[`Landing Page.html`](./Landing Page.html) at the project root is the original single-file design. Treat it as the visual source of truth. Line numbers are referenced from the plan.
