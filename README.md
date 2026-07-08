# Luxe Link

Premium frontend prototype for **Luxe Link** — a luxury platform combining chauffeur services,
itinerary & event planning, and a luxury marketplace. Frontend only: no backend, no auth, no admin.

Built: the landing page (hero + the three linked service sections) and all three service
pages — Chauffeur (fleet + inline ride-quote widget), Itinerary (editorial travel browsing,
timeline preview, budget tiers), and Marketplace (filterable product grid, spotlights,
product detail overlay).

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
  components/   Navbar, Hero, Services, ServiceCard, Footer, Logo, PageCta
    chauffeur/    hero + booking widget, fleet, occasions, standards
    itinerary/    hero, occasion rail, timeline, budget tiers, packages, gallery
    marketplace/  hero, filters, product grid/cards, spotlights, detail overlay
  pages/        Home, Chauffeur, Itinerary, Marketplace
  layouts/      MainLayout (navbar + footer shell)
  data/         services.js, chauffeur.js, itinerary.js, marketplace.js — page content
  hooks/        useScrollPosition — scroll tracking for nav blur + hero parallax
  styles/       Tailwind entry stylesheet
  assets/       drop local images/fonts here as you replace the placeholder imagery
```

## Brand

- Colors: `obsidian` #0F0F10, `accent` #FFFFFF, `ivory` #F4F4F5 — defined in `tailwind.config.js` (monochrome black & white)
- Type: Playfair Display (`font-display`) for headlines, Inter (`font-body`) for everything else
- Imagery: photos hotlinked from Unsplash, hero video from Mixkit — swap in real footage via
  `src/assets` before shipping

## Notes

- `prefers-reduced-motion` is respected globally (see `src/styles/index.css` and
  `useScrollPosition`).
- All interactive elements (ride quotes, budget tiers, filters, wishlists, product detail)
  are frontend state only — no backend, cart, or booking logic.
