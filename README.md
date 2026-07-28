# Venuze

A venue and vendor booking platform built for the Hashed System Next.js + TypeScript assignment. Implements the provided Figma design pixel-for-pixel across mobile, tablet (iPad), and desktop, plus a full authentication flow against the reqres.in API.

## Setup

```bash
pnpm install
```

Create `.env.local` in the project root with:

```
NEXT_PUBLIC_REQRES_API_KEY=your_key_here
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_key_here
```

- `NEXT_PUBLIC_REQRES_API_KEY` — reqres.in now requires a registered key; get a free one at [app.reqres.in/api-keys](https://app.reqres.in/api-keys).
- `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` — powers the map on the search page ([@react-google-maps/api](https://www.npmjs.com/package/@react-google-maps/api)). Get a key from the [Google Cloud Console](https://console.cloud.google.com/google/maps-apis/credentials) with the **Maps JavaScript API** enabled. Without it, the map panel shows a placeholder instead of erroring.

Then run the dev server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000). Use the pre-filled demo credentials on the login page (`eve.holt@reqres.in` / `cityslicka`) to sign in.

## Tech stack

- **Next.js 15 (App Router)** + TypeScript
- **Tailwind CSS 4**
- **TanStack Query** — server state, caching, mutations
- **Zustand** — auth state, persisted to `localStorage`
- **React Hook Form + Zod** — form state and schema validation
- **Axios** — HTTP client

## Project structure

```
app/
  page.tsx                  # Landing page (Server Component, composes section components)
  (auth)/login/             # Public login route
  (dashboard)/dashboard/    # Protected route group
  layout.tsx                # Root layout: font, providers
components/
  landing/                  # One component per landing page section
  auth/                     # Login form (Client Component — needs RHF/useSearchParams)
  dashboard/                # Dashboard header + user list (loading/error/empty states)
lib/
  api-client.ts              # Axios instance, attaches auth token + API key
  query-client.ts            # TanStack Query client factory
  hooks/                      # useLogin, useUsers — one hook per API concern
  schemas/                    # Zod schemas
store/
  auth-store.ts               # Zustand auth store (token, email, login/logout)
types/                        # Shared TypeScript interfaces
middleware.ts                 # Route protection
```

## Technical decisions

- **Server vs. Client components**: page-level route files (`app/page.tsx`, `app/(dashboard)/dashboard/page.tsx`) are Server Components. Only leaf components that need interactivity, hooks, or browser APIs (search bar tabs, forms, carousels, the login form which needs `useSearchParams`) are marked `"use client"`. This keeps the bulk of the landing page server-rendered.
- **Auth persistence**: Zustand's `persist` middleware keeps the session in `localStorage` for client-side reads (e.g. showing the logged-in email), and mirrors the token into a cookie on login/logout specifically so `middleware.ts` — which runs on the edge and cannot read `localStorage` — can check auth state server-side before a protected page ever renders.
- **Middleware-based protection**: `/dashboard/*` redirects to `/login?redirect=<path>` when no cookie is present; `/login` redirects back to `/dashboard` if a cookie is already present. The login form reads the `redirect` param and returns the user to where they were headed.
- **TanStack Query**: `useLogin` is a mutation (side effect: writes to the auth store on success). `useUsers` is a paginated query (`queryKey: ["users", page]`) demonstrating loading/error/empty UI states and per-page caching — switching pages back and forth doesn't re-fetch already-loaded pages.
- **Responsive breakpoints**: Tailwind's `md:` (768px) is used as the tablet tier because that's the exact width of the "Home iPad" frame in the provided Figma file — breakpoint values were pulled from Figma's dev-mode inspector rather than guessed, so tablet layout matches the design (e.g. testimonials go 2-up at `md:`, but venue/destination card rows stay in a horizontal-scroll row until `lg:` because that's what the Figma iPad frame actually shows).

## Assumptions

- No Figma frames were provided for the authenticated/dashboard screens, so the dashboard (header + paginated host list sourced from reqres.in `/users`) was designed to match the landing page's visual language (color palette, typography, spacing) rather than a specific mock.
- Featured Venues cards repeat identical placeholder copy in the Figma source (same title/price/stats on all four cards) — this was implemented as-is rather than inventing content not present in the design.
- reqres.in's public API changed since the assignment brief was written and now requires a registered `x-api-key` header for `/api/*` endpoints; the key is read from an environment variable rather than hardcoded.

## Challenges

- The Figma file's desktop frame used absolute pixel positioning throughout; every section had to be re-derived into fluid, mobile-first flex/grid layouts rather than transcribing coordinates directly.
- Figma's MCP dev-mode connection required explicit node selection in the desktop app per section (large pages exceed the single-call response size), so each section's design context was fetched individually rather than in one pass.
