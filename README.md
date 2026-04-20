# LedgerAI Marketing Site

The public marketing site for [LedgerAI](https://ledgerai.com) — built with
**Next.js 16** (App Router, Turbopack) and **React 19**.

Runs independently from `app-frontend/` (Angular customer app) and `app-backend/` (NestJS API).

## Getting started

```bash
pnpm install
pnpm dev        # http://localhost:3001
```

## Scripts

- `pnpm dev` — start the dev server on port **3001** (kept distinct from `app-frontend` on 4200)
- `pnpm build` — production build
- `pnpm start` — run the production build on port 3001
- `pnpm lint` — ESLint via `next lint`
- `pnpm typecheck` — `tsc --noEmit`

## Project structure

```
main-website/
├─ Landing Page.html            # original single-file design reference
├─ AGENTS.md                    # agent guide (conventions, commands, architecture)
├─ public/
│  └─ favicon.svg
└─ src/
   ├─ app/
   │  ├─ layout.tsx             # fonts, metadata, <html>/<body>
   │  ├─ page.tsx               # composes marketing sections
   │  ├─ globals.css            # design tokens + component CSS
   │  ├─ actions.ts             # bookDemo Server Action
   │  ├─ sitemap.ts / robots.ts # SEO file conventions
   ├─ components/               # one file per section (+ shared primitives)
   └─ lib/
      ├─ fonts.ts               # next/font setup
      └─ lead.ts                # zod schema + shared form types
```

## Styling

- **Design tokens** live in `src/app/globals.css` under `:root` and are
  mirrored into Tailwind via `@theme inline`.
- **Tailwind CSS v4** is enabled for utility classes.
- **Component styles** for section-specific layouts (hero visual, dial,
  pipeline, compare table, CTA block, footer lockup) use the original class
  names from the design so the site stays pixel-identical to
  `Landing Page.html`.

## Forms

The "Book a demo" form uses a Server Action defined in
[`src/app/actions.ts`](./src/app/actions.ts). The action validates with Zod
(schema in [`src/lib/lead.ts`](./src/lib/lead.ts)) and currently just logs the
payload.

**To wire up a real destination**, replace the `console.log` call with a fetch
to a CRM webhook, email provider, or the `app-backend` API.

```ts
await fetch(process.env.LEADS_WEBHOOK_URL!, {
  method: "POST",
  headers: { "content-type": "application/json" },
  body: JSON.stringify(parsed.data),
});
```

Environment variables go in `.env.local` (not checked in).

## SEO

- `src/app/sitemap.ts` and `src/app/robots.ts` generate `/sitemap.xml` and
  `/robots.txt` at build time.
- Open Graph / Twitter metadata lives in `src/app/layout.tsx`.
- Replace the `metadataBase` URL when the production domain is finalized.

## Interactive behavior

All interactive pieces are isolated into client components and loaded only
where needed:

| Component             | Why client |
| --------------------- | ---------- |
| `nav.tsx`             | scroll state → border toggle |
| `hero-visual.tsx`     | live transaction list cycling, dial stroke-dashoffset animation |
| `logos-marquee.tsx`   | nothing stateful but uses an SVG render helper; pure presentational |
| `confidence.tsx`      | `IntersectionObserver` → animated bar fills |
| `reveal.tsx`          | generic `IntersectionObserver` wrapper with stagger support |
| `demo-form.tsx`       | React 19 `useActionState` |

Everything else is a Server Component.
