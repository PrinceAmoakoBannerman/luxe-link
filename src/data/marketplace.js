const u = (id, w = 900) =>
  `https://images.unsplash.com/${id}?q=80&w=${w}&auto=format&fit=crop`;

export const MARKET_HERO = {
  kicker: "Luxury Marketplace",
  headline: "Coveted, sourced, delivered.",
  subline:
    "Watches, fashion, and rare finds — authenticated by hand and delivered with discretion.",
};

export const CATEGORIES = [
  "All",
  "Sneakers",
  "Designer Clothing",
  "Watches",
  "Handbags",
  "Accessories",
];

export const PRODUCTS = [
  {
    id: "suede-low",
    name: "The Suede Low",
    brand: "Maison Vela",
    category: "Sneakers",
    price: 640,
    image: u("photo-1560343090-f0409e92791a"),
    description:
      "A derby-cut low in hand-dyed teal suede on a leather sole that ages like paper.",
  },
  {
    id: "runner-noir",
    name: "Runner Noir",
    brand: "Atelier Onze",
    category: "Sneakers",
    price: 580,
    image: u("photo-1491553895911-0055eca6402d"),
    description:
      "Blacked-out knit and suede runner, hand-lasted in Porto. No branding above a whisper.",
  },
  {
    id: "archive-trainer",
    name: "Archive Trainer",
    brand: "Maison Vela",
    category: "Sneakers",
    price: 720,
    image: u("photo-1560769629-975ec94e6a86"),
    description:
      "A nineties archive shape re-issued in mixed suede and mesh — an edition of four hundred pairs.",
  },
  {
    id: "meridian",
    name: "Meridian Chronograph",
    brand: "Ostra",
    category: "Watches",
    price: 12800,
    image: u("photo-1524592094714-0f0654e20314"),
    imageAlt: u("photo-1522312346375-d1a52e2b99b3"),
    description:
      "Column-wheel chronograph in brushed steel, 40mm, with a dial the color of overcast weather.",
  },
  {
    id: "heritage-auto",
    name: "Heritage Automatic",
    brand: "Lindqvist",
    category: "Watches",
    price: 9400,
    image: u("photo-1495856458515-0637185db551"),
    description:
      "In-house automatic movement, 38mm, on saddle-stitched leather. The watch you stop noticing and never take off.",
  },
  {
    id: "nocturne-40",
    name: "Nocturne 40",
    brand: "Cadence",
    category: "Watches",
    price: 21500,
    image: u("photo-1508057198894-247b23fe5ade"),
    description:
      "Brushed dark steel, 40mm, assembled by two hands over eleven weeks. Midnight, considered.",
  },
  {
    id: "petra-tote",
    name: "The Petra Tote",
    brand: "Noor",
    category: "Handbags",
    price: 4950,
    image: u("photo-1594223274512-ad4803739b7c"),
    description:
      "Petrol calfskin with hardware that doesn't announce itself. Structured enough for a boardroom, soft enough not to say so.",
  },
  {
    id: "scarlet-frame",
    name: "Scarlet Frame Bag",
    brand: "Maison Vela",
    category: "Handbags",
    price: 3200,
    image: u("photo-1584917865442-de89df76afd3"),
    description:
      "A rigid frame bag in lacquered scarlet — the one deliberate note of color in the room.",
  },
  {
    id: "weekend-duffle",
    name: "Weekend Duffle",
    brand: "Harlow & Frey",
    category: "Handbags",
    price: 2750,
    image: u("photo-1591561954557-26941169b49e"),
    description:
      "Full-grain leather duffle sized precisely for two nights away and nothing you don't need.",
  },
  {
    id: "db-suit",
    name: "Double-Breasted Suit",
    brand: "Sartoria Nove",
    category: "Designer Clothing",
    price: 3900,
    image: u("photo-1594938298603-c8148c4dae35"),
    description:
      "Half-canvassed in midnight wool, cut with a shoulder that works as hard at dinner as it does at ten a.m.",
  },
  {
    id: "camel-coat",
    name: "Camel Wool Coat",
    brand: "Harlow & Frey",
    category: "Designer Clothing",
    price: 2400,
    image: u("photo-1539533018447-63fcce2678e3"),
    description:
      "Double-faced camel hair, unlined, hand-finished seams. The coat that ends the search for one.",
  },
  {
    id: "silk-dress",
    name: "Silk Evening Dress",
    brand: "Noor",
    category: "Designer Clothing",
    price: 5600,
    image: u("photo-1566174053879-31528523f8ae"),
    description:
      "Bias-cut silk charmeuse that moves half a beat behind you. Made to order in three weeks.",
  },
  {
    id: "aviator-7",
    name: "Aviator No. 7",
    brand: "Atelier Onze",
    category: "Accessories",
    price: 890,
    image: u("photo-1572635196237-14b3f281503f"),
    description:
      "Hand-polished acetate and mineral glass lenses, in a case that outlasts the prescription.",
  },
  {
    id: "oud-parfum",
    name: "Oud Parfum, 50ml",
    brand: "Cadence",
    category: "Accessories",
    price: 420,
    image: u("photo-1541643600914-78b084683601"),
    description:
      "Smoked oud, iris, and cold stone. Applied sparingly, remembered entirely.",
  },
  {
    id: "sapphire-pendant",
    name: "Sapphire Pendant",
    brand: "Lindqvist",
    category: "Accessories",
    price: 7300,
    image: u("photo-1611652022419-a9419f74343d"),
    imageAlt: u("photo-1599643478518-a784e5dc4c8f"),
    description:
      "A single Ceylon sapphire on a hand-drawn white gold chain. Certificate and provenance included.",
  },
  {
    id: "billfold",
    name: "Grain Leather Billfold",
    brand: "Ostra",
    category: "Accessories",
    price: 510,
    image: u("photo-1627123424574-724758594e93"),
    description:
      "Eight pockets, six seams, zero logos. Shell cordovan that darkens honestly with use.",
  },
];

export const SPOTLIGHTS = [
  {
    id: "spot-watches",
    title: "The hour, considered.",
    body: "A macro study in patience — the Nocturne 40 in brushed dark steel, assembled by two hands over eleven weeks.",
    cta: "Explore watches",
    category: "Watches",
    image: u("photo-1508057198894-247b23fe5ade", 1400),
  },
  {
    id: "spot-handbags",
    title: "Carried quietly.",
    body: "The Petra Tote in petrol calfskin. No monogram, no hardware that announces itself — just proportion.",
    cta: "Explore handbags",
    category: "Handbags",
    image: u("photo-1594223274512-ad4803739b7c", 1400),
  },
];

export const REVIEWS = [
  {
    name: "A. M., London",
    rating: 5,
    text: "Authentication dossier arrived before the piece did. The piece arrived in thirty-one hours.",
  },
  {
    name: "K. O., Accra",
    rating: 5,
    text: "Discreet from enquiry to doorstep. Exactly as photographed, better in hand.",
  },
];
