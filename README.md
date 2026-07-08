# Luxe Link

Premium frontend prototype for **Luxe Link** — a luxury platform combining chauffeur services,
itinerary & event planning, and a luxury marketplace. Frontend only: no backend, no auth, no admin.

Currently built: the landing page (hero + the three linked service sections). Chauffeur,
Itinerary, and Marketplace pages are stubbed as routes ready to be built out next.

## Tech stack

- React 19 + Vite
- Tailwind CSS (brand tokens in `tailwind.config.js`)
- Framer Motion (page-load stagger, scroll reveals, the animated white "thread")
- React Router
- Lucide React icons

## Getting started

```bash
npm install
npm run dev
```

Open the printed local URL (usually `http://localhost:5173`).

```bash
npm run build     # production build to /dist
npm run preview   # preview the production build locally
```

## Project structure

```
src/
  components/   Navbar, Hero, Services, ServiceCard, Footer
  pages/        Home, ComingSoon (placeholder for /chauffeur, /itinerary, /marketplace)
  layouts/      MainLayout (navbar + footer shell)
  data/         services.js — single source of truth for the 3 service cards & nav links
  hooks/        useScrollPosition — scroll tracking for nav blur + hero parallax
  styles/       Tailwind entry stylesheet
  assets/       drop local images/fonts here as you replace the placeholder imagery
```

## Brand

- Colors: `obsidian` #0F0F10, `accent` #FFFFFF, `ivory` #F4F4F5 — defined in `tailwind.config.js` (monochrome black & white)
- Type: Playfair Display (`font-display`) for headlines, Inter (`font-body`) for everything else
- Imagery: currently hotlinked from Unsplash as placeholders — swap in real photography via
  `src/assets` before shipping

## Notes

- `prefers-reduced-motion` is respected globally (see `src/styles/index.css` and
  `useScrollPosition`).
- The three service card CTAs already route to `/chauffeur`, `/itinerary`, `/marketplace`,
  currently a placeholder page — replace `ComingSoon` in `App.jsx` with the real pages as they're built.
