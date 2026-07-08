import { Plane, Briefcase, Gem, Cake, Sparkles } from "lucide-react";

const u = (id, w = 1200) =>
  `https://images.unsplash.com/${id}?q=80&w=${w}&auto=format&fit=crop`;

export const ITINERARY_HERO = {
  image: u("photo-1470071459604-3b5ec3a7fe05", 2000),
  imageSmall: u("photo-1470071459604-3b5ec3a7fe05", 900),
  kicker: "Itinerary & Events",
  headline: "The world, arranged.",
  subline:
    "Journeys and occasions composed to the hour — so you can be entirely present for them.",
};

export const OCCASIONS = [
  {
    id: "vacation",
    icon: Plane,
    title: "Vacation Planning",
    blurb: "Slow mornings in places that don't publish their address.",
    image: u("photo-1514282401047-d79a71a590e8", 900),
  },
  {
    id: "corporate",
    icon: Briefcase,
    title: "Corporate Events",
    blurb: "Offsites and launches that read like hospitality, not logistics.",
    image: u("photo-1511578314322-379afb476865", 900),
  },
  {
    id: "wedding",
    icon: Gem,
    title: "Wedding Planning",
    blurb: "One day, staged to the minute, remembered for decades.",
    image: u("photo-1519741497674-611481863552", 900),
  },
  {
    id: "birthday",
    icon: Cake,
    title: "Birthday Planning",
    blurb: "Another year, marked properly — from intimate to unreasonable.",
    image: u("photo-1530103862676-de8c9debad1d", 900),
  },
  {
    id: "experiences",
    icon: Sparkles,
    title: "Luxury Experiences",
    blurb: "Charters, closures, and doors that don't usually open.",
    image: u("photo-1567899378494-47b22a2ae96a", 900),
  },
];

export const TIMELINE = {
  kicker: "How it reads",
  title: "Santorini, composed.",
  subtitle:
    "A sample three-day itinerary — every stop confirmed before wheels down, every gap deliberate.",
  days: [
    {
      day: "Day 1",
      label: "Arrival",
      stops: [
        {
          time: "09:40",
          title: "Wheels down, Thira",
          note: "Met on the tarmac. Luggage travels separately.",
        },
        {
          time: "11:00",
          title: "Cliffside villa check-in",
          note: "Caldera-facing suite, private plunge pool.",
        },
        {
          time: "20:00",
          title: "Chef's table at sunset",
          note: "Six courses, no menu, one table.",
        },
      ],
    },
    {
      day: "Day 2",
      label: "The island",
      stops: [
        {
          time: "08:30",
          title: "Private yacht charter",
          note: "Volcanic springs, a cove without a name.",
        },
        {
          time: "13:00",
          title: "Vineyard lunch, Pyrgos",
          note: "Assyrtiko poured by the family that grows it.",
        },
        {
          time: "18:30",
          title: "Oia, after the crowds",
          note: "A photographer, an hour, the good light.",
        },
      ],
    },
    {
      day: "Day 3",
      label: "Departure",
      stops: [
        {
          time: "10:00",
          title: "Spa morning",
          note: "Nothing scheduled before noon. Deliberately.",
        },
        {
          time: "14:00",
          title: "Chauffeur to the airfield",
          note: "Checked out, checked in, never queued.",
        },
      ],
    },
  ],
};

export const BUDGET_TIERS = [
  {
    id: "refined",
    name: "Refined",
    from: "From $8,000 per traveler",
    description:
      "Boutique five-star stays, business-class flights, and one signature experience each day. Considered, never crowded.",
    includes: ["Five-star boutique stays", "Business-class flights", "Daily signature experience"],
  },
  {
    id: "elevated",
    name: "Elevated",
    from: "From $25,000 per traveler",
    description:
      "Suites and private villas, first or private aviation on key legs, and access that isn't advertised.",
    includes: ["Suites & private villas", "Private aviation on key legs", "Unadvertised access"],
  },
  {
    id: "unlimited",
    name: "Unlimited",
    from: "By conversation",
    description:
      "No brief too particular. Island buyouts, museum closures, residencies — composed entirely around you.",
    includes: ["Full buyouts & closures", "Resident chefs & crews", "Composed from a blank page"],
  },
];

export const PACKAGES = [
  {
    id: "aegean",
    name: "The Aegean Draft",
    route: "Athens · Santorini — 6 nights",
    from: "From $12,400",
    description: "Caldera villas, chartered coves, and dinners that outlast the sunset.",
    image: u("photo-1613395877344-13d4a8e0d49e", 900),
  },
  {
    id: "serengeti",
    name: "After the Rains",
    route: "Serengeti · Ngorongoro — 8 nights",
    from: "From $18,900",
    description: "Light aircraft between camps, guides who whisper, mornings that don't.",
    image: u("photo-1516426122078-c23e76319801", 900),
  },
  {
    id: "kyoto",
    name: "Kyoto, Quietly",
    route: "Tokyo · Kyoto — 7 nights",
    from: "From $15,200",
    description: "Machiya stays, temple mornings before opening, a knife maker's workshop.",
    image: u("photo-1493976040374-85c8e12f0c0e", 900),
  },
  {
    id: "gulf",
    name: "Desert Modern",
    route: "Dubai · Empty Quarter — 5 nights",
    from: "From $9,800",
    description: "Skyline suites, dune camps with linen sheets, falconry at first light.",
    image: u("photo-1512453979798-5ea266f8880c", 900),
  },
];

export const GALLERY = [
  {
    image: u("photo-1414235077428-338989a2e8c0", 1200),
    caption: "Private dining",
    span: "md:col-span-2",
  },
  {
    image: u("photo-1551882547-ff40c63fe5fa", 900),
    caption: "The villa",
    span: "",
  },
  {
    image: u("photo-1540962351504-03099e0a754b", 900),
    caption: "The flight",
    span: "",
  },
  {
    image: u("photo-1506377247377-2a5b3b417ebb", 1200),
    caption: "Vineyard afternoons",
    span: "md:col-span-2",
  },
  {
    image: u("photo-1544161515-4ab6ce6db874", 900),
    caption: "The reset",
    span: "",
  },
  {
    image: u("photo-1507525428034-b723cf961d3e", 900),
    caption: "Shorelines",
    span: "",
  },
];
