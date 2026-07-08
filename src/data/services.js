import { Car, Compass, ShoppingBag } from "lucide-react";

export const SERVICES = [
  {
    id: "chauffeur",
    numeral: "I",
    icon: Car,
    title: "Luxury Chauffeur",
    description:
      "Arrive exactly as you intend to be received, in a fleet maintained to the smallest detail, driven by professionals who anticipate rather than ask.",
    tags: ["Airport Transfers", "VIP Chauffeur", "Wedding Chauffeur", "Hourly Hire"],
    cta: "Book Now",
    href: "/chauffeur",
    image:
      "https://images.unsplash.com/photo-1764605206511-7a649d9df63b?q=80&w=1400&auto=format&fit=crop",
  },
  {
    id: "itinerary",
    numeral: "II",
    icon: Compass,
    title: "Itinerary & Events",
    description:
      "Every journey planned to the hour, every occasion staged to the last detail — vacations, weddings, and corporate events curated by people who have done it before.",
    tags: ["Vacation Planning", "Corporate Events", "Wedding Planning", "Bespoke Experiences"],
    cta: "Plan My Trip",
    href: "/itinerary",
    image:
      "https://images.unsplash.com/photo-1762254923872-5bdc4210eb90?q=80&w=1400&auto=format&fit=crop",
  },
  {
    id: "marketplace",
    numeral: "III",
    icon: ShoppingBag,
    title: "Luxury Marketplace",
    description:
      "The world's most coveted watches, bags, and fashion, sourced, authenticated, and delivered with the discretion they deserve.",
    tags: ["Watches", "Handbags", "Sneakers", "Designer Fashion"],
    cta: "Shop Now",
    href: "/marketplace",
    image:
      "https://images.unsplash.com/photo-1760532466984-39c3eb7f1254?q=80&w=1400&auto=format&fit=crop",
  },
];

export const NAV_LINKS = [
  { label: "Chauffeur", href: "/#chauffeur" },
  { label: "Itinerary", href: "/#itinerary" },
  { label: "Marketplace", href: "/#marketplace" },
];
