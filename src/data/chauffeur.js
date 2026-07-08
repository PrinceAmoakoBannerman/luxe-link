import { Plane, Timer, Star, Gem, ShieldCheck, Clock, EyeOff } from "lucide-react";

const u = (id, w = 1200) =>
  `https://images.unsplash.com/${id}?q=80&w=${w}&auto=format&fit=crop`;

export const CHAUFFEUR_HERO = {
  image: u("photo-1449965408869-eaa3f722e40d", 2000),
  imageSmall: u("photo-1449965408869-eaa3f722e40d", 900),
  kicker: "Luxury Chauffeur",
  headline: "Arrive as intended.",
  subline:
    "Fixed, all-inclusive pricing. Professionals who anticipate rather than ask. Doors opened before you reach them.",
};

export const RIDE_CLASSES = [
  {
    id: "executive",
    name: "Executive Sedan",
    from: 120,
    capacity: "3 passengers · 2 cases",
    blurb: "The daily standard — quiet, immaculate, always five minutes early.",
    image: u("photo-1503376780353-7e6692767b70", 900),
  },
  {
    id: "first",
    name: "First Class",
    from: 220,
    capacity: "3 passengers · 2 cases",
    blurb: "Flagship sedans for the days that carry weight. Privacy glass as standard.",
    image: u("photo-1764605206511-7a649d9df63b", 900),
  },
  {
    id: "suv",
    name: "Luxury SUV",
    from: 180,
    capacity: "5 passengers · 5 cases",
    blurb: "Presence and room to spare — families, teams, and long-haul luggage.",
    image: u("photo-1563720223185-11003d516935", 900),
  },
];

export const SERVICES = [
  {
    icon: Plane,
    title: "Airport Transfers",
    blurb: "Flight-tracked pickups with sixty minutes of complimentary wait time.",
  },
  {
    icon: Timer,
    title: "Hourly Hire",
    blurb: "A car and chauffeur held at your disposal, by the hour or the day.",
  },
  {
    icon: Star,
    title: "VIP & Events",
    blurb: "Red carpets, road shows, and itineraries that change mid-sentence.",
  },
  {
    icon: Gem,
    title: "Weddings",
    blurb: "The one day the car in the photographs has to be perfect.",
  },
];

export const STANDARDS = [
  {
    icon: EyeOff,
    title: "Discretion",
    blurb: "Your chauffeur speaks when spoken to and remembers nothing you'd rather they didn't.",
  },
  {
    icon: Clock,
    title: "Punctuality",
    blurb: "We plan the route, the traffic, and the margin. Early is our on time.",
  },
  {
    icon: ShieldCheck,
    title: "Security",
    blurb: "Vetted professionals, tracked journeys, and close-protection options on request.",
  },
];
