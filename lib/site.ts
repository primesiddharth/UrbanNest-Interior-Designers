export const siteConfig = {
  name: "UrbanNest",
  fullName: "UrbanNest Interior Designers",
  tagline: "Where Indian Homes Meet Modern Luxury",
  description:
    "Premium residential and commercial interior design studio crafting warm, modern luxury spaces across Bengaluru and India.",
  phone: "+91 9567890124",
  phoneHref: "+919567890124",
  email: "studio@urbannestdesign.in",
  address: {
    line1: "27 Design Studio Lane, Indiranagar",
    line2: "Bengaluru, Karnataka 560038",
    short: "Indiranagar, Bengaluru",
  },
  hours: "Mon – Sat · 10:00 AM – 7:00 PM",
  social: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    linkedin: "https://linkedin.com",
    pinterest: "https://pinterest.com",
  },
  foundedYear: 2014,
  mapEmbedUrl:
    "https://www.google.com/maps?q=Indiranagar,+Bengaluru,+Karnataka+560038&output=embed",
};

export const navLinks = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Services", href: "/services" },
  { title: "Portfolio", href: "/portfolio" },
  { title: "Projects", href: "/projects" },
  { title: "Testimonials", href: "/testimonials" },
  { title: "FAQ", href: "/faq" },
  { title: "Contact", href: "/contact" },
];

export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  features: string[];
  image: string;
  icon:
    | "home"
    | "kitchen"
    | "living"
    | "bed"
    | "office"
    | "commercial"
    | "sofa";
};

export const services: Service[] = [
  {
    slug: "residential-interiors",
    title: "Residential Interiors",
    short: "Complete home interiors crafted around the way your family lives.",
    description:
      "End-to-end interior design for apartments, villas and independent houses. We translate your lifestyle into cohesive, warm, functional spaces — from spatial planning and material selection to styling and final handover.",
    features: [
      "Full-home turnkey execution",
      "Space planning & 3D visualisation",
      "Material & palette curation",
      "Custom joinery and finishes",
    ],
    image:
      "https://images.pexels.com/photos/7148779/pexels-photo-7148779.jpeg?auto=compress&cs=tinysrgb&w=1200",
    icon: "home",
  },
  {
    slug: "modular-kitchen",
    title: "Modular Kitchen",
    short: "Smart, ergonomic kitchens built around the way you cook.",
    description:
      "Precision-engineered modular kitchens that balance beauty and utility. From straight-line to L-shaped and island layouts, every cabinet is designed for storage, workflow and effortless maintenance.",
    features: [
      "Hardened acrylic & PU finishes",
      "Soft-close BLUM hardware",
      "BIS-grade marine ply carcass",
      "Smart storage & appliance niches",
    ],
    image:
      "https://images.pexels.com/photos/7031879/pexels-photo-7031879.jpeg?auto=compress&cs=tinysrgb&w=1200",
    icon: "kitchen",
  },
  {
    slug: "living-room",
    title: "Living Room",
    short: "Statement living spaces that feel inviting and unmistakably yours.",
    description:
      "The heart of every Indian home deserves thoughtful design. We compose living rooms around natural light, conversation and entertainment — with feature walls, layered lighting and curated decor.",
    features: [
      "Feature walls & panelling",
      "Layered ambient lighting",
      "Custom seating & upholstery",
      "Curated art and styling",
    ],
    image:
      "https://images.pexels.com/photos/33688058/pexels-photo-33688058.jpeg?auto=compress&cs=tinysrgb&w=1200",
    icon: "living",
  },
  {
    slug: "bedroom",
    title: "Bedroom",
    short: "Restful retreats tuned for calm, comfort and storage.",
    description:
      "Bedrooms designed as private sanctuaries — warm palettes, plush textures and clever storage that keeps everyday clutter out of sight. Wardrobes, headboards and lighting are tailored to your routine.",
    features: [
      "Wardrobe & loft storage",
      "Upholstered headboards",
      "Mood lighting design",
      "Walk-in dressing options",
    ],
    image:
      "https://images.pexels.com/photos/3144580/pexels-photo-3144580.jpeg?auto=compress&cs=tinysrgb&w=1200",
    icon: "bed",
  },
  {
    slug: "office-interiors",
    title: "Office Interiors",
    short: "Productive, branded workspaces that teams are proud of.",
    description:
      "From boutique studios to corporate floors, we design offices that reflect your brand and energise your people. Acoustics, ergonomics, lighting and collaboration zones are planned as one system.",
    features: [
      "Workstation & cabin planning",
      "Acoustic & lighting design",
      "Brand-integrated theming",
      "Collaboration & break zones",
    ],
    image:
      "https://images.pexels.com/photos/7511755/pexels-photo-7511755.jpeg?auto=compress&cs=tinysrgb&w=1200",
    icon: "office",
  },
  {
    slug: "commercial-spaces",
    title: "Commercial Spaces",
    short: "Retail, café and hospitality interiors that draw people in.",
    description:
      "We design customer-facing spaces that are as memorable as your brand — restaurants, cafés, retail showrooms and clinics where ambience, flow and materiality create lasting first impressions.",
    features: [
      "Concept & mood development",
      "Guest flow & zoning",
      "Signature lighting & signage",
      "Durable, high-traffic finishes",
    ],
    image:
      "https://images.pexels.com/photos/17748651/pexels-photo-17748651.jpeg?auto=compress&cs=tinysrgb&w=1200",
    icon: "commercial",
  },
  {
    slug: "furniture-decor",
    title: "Furniture & Decor",
    short: "Bespoke furniture and curated decor that completes a space.",
    description:
      "In-house design and sourcing of furniture, lighting, rugs and accessories. Whether it is a single statement piece or a full styling package, we tie every element into one coherent narrative.",
    features: [
      "Custom furniture design",
      "Curated decor sourcing",
      "Lighting & rug selection",
      "Styling & photo-ready finishes",
    ],
    image:
      "https://images.pexels.com/photos/8135492/pexels-photo-8135492.jpeg?auto=compress&cs=tinysrgb&w=1200",
    icon: "sofa",
  },
];

export type PortfolioItem = {
  id: number;
  title: string;
  category:
    | "Residential"
    | "Kitchen"
    | "Living"
    | "Bedroom"
    | "Office"
    | "Commercial";
  location: string;
  image: string;
  span?: boolean;
};

export const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Indiranagar Townhouse",
    category: "Residential",
    location: "Indiranagar, Bengaluru",
    image:
      "https://images.pexels.com/photos/7148779/pexels-photo-7148779.jpeg?auto=compress&cs=tinysrgb&w=900",
    span: true,
  },
  {
    id: 2,
    title: "Marble & Brass Kitchen",
    category: "Kitchen",
    location: "Koramangala, Bengaluru",
    image:
      "https://images.pexels.com/photos/7148841/pexels-photo-7148841.jpeg?auto=compress&cs=tinysrgb&w=900",
  },
  {
    id: 3,
    title: "Warm Minimal Living",
    category: "Living",
    location: "HSR Layout, Bengaluru",
    image:
      "https://images.pexels.com/photos/28853362/pexels-photo-28853362.jpeg?auto=compress&cs=tinysrgb&w=900",
  },
  {
    id: 4,
    title: "Serene Master Suite",
    category: "Bedroom",
    location: "Whitefield, Bengaluru",
    image:
      "https://images.pexels.com/photos/8134808/pexels-photo-8134808.jpeg?auto=compress&cs=tinysrgb&w=900",
  },
  {
    id: 5,
    title: "The Foundry Studio",
    category: "Office",
    location: "Domlur, Bengaluru",
    image:
      "https://images.pexels.com/photos/6794970/pexels-photo-6794970.jpeg?auto=compress&cs=tinysrgb&w=900",
  },
  {
    id: 6,
    title: "Saffron Dining Lounge",
    category: "Commercial",
    location: "UB City, Bengaluru",
    image:
      "https://images.pexels.com/photos/17748651/pexels-photo-17748651.jpeg?auto=compress&cs=tinysrgb&w=900",
    span: true,
  },
  {
    id: 7,
    title: "Sheesham Wood Living",
    category: "Living",
    location: "Jubilee Hills, Hyderabad",
    image:
      "https://images.pexels.com/photos/33559373/pexels-photo-33559373.jpeg?auto=compress&cs=tinysrgb&w=900",
  },
  {
    id: 8,
    title: "Island Kitchen by UrbanNest",
    category: "Kitchen",
    location: "Sarjapur Road, Bengaluru",
    image:
      "https://images.pexels.com/photos/8146160/pexels-photo-8146160.jpeg?auto=compress&cs=tinysrgb&w=900",
  },
  {
    id: 9,
    title: "The Linen Bedroom",
    category: "Bedroom",
    location: "Jayamahal, Bengaluru",
    image:
      "https://images.pexels.com/photos/6782578/pexels-photo-6782578.jpeg?auto=compress&cs=tinysrgb&w=900",
  },
  {
    id: 10,
    title: "The Earthy Living Room",
    category: "Living Room",
    location: "Indiranagar, Bengaluru",
    image:
      "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=900",
  },
];

export const portfolioCategories = [
  "All",
  "Residential",
  "Kitchen",
  "Living",
  "Bedroom",
  "Office",
  "Commercial",
] as const;

export type Project = {
  slug: string;
  title: string;
  type: string;
  location: string;
  year: string;
  area: string;
  duration: string;
  image: string;
  gallery: string[];
  summary: string;
  highlights: string[];
};

export const projects: Project[] = [
  {
    slug: "indiranagar-townhouse",
    title: "The Indiranagar Townhouse",
    type: "Full-Home Residential",
    location: "Indiranagar, Bengaluru",
    year: "2024",
    area: "3,200 sq ft",
    duration: "16 weeks",
    image:
      "https://images.pexels.com/photos/7148779/pexels-photo-7148779.jpeg?auto=compress&cs=tinysrgb&w=1200",
    gallery: [
      "https://images.pexels.com/photos/7148779/pexels-photo-7148779.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/7148849/pexels-photo-7148849.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/5998031/pexels-photo-5998031.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/6908357/pexels-photo-6908357.jpeg?auto=compress&cs=tinysrgb&w=1200",
    ],
    summary:
      "A four-bedroom townhouse for a multi-generational family, blending warm sheesham wood with soft beige stone and brass accents. The ground floor opens into a double-height living space that flows into a formal dining and an open kitchen.",
    highlights: [
      "Double-height living with skylight",
      "Sheesham wood panelling & joinery",
      "Marble-and-brass modular kitchen",
      "Four bedrooms with custom wardrobes",
    ],
  },
  {
    slug: "koramangala-apartment",
    title: "Koramangala Sky Apartment",
    type: "3BHK Apartment",
    location: "Koramangala, Bengaluru",
    year: "2024",
    area: "1,850 sq ft",
    duration: "12 weeks",
    image:
      "https://images.pexels.com/photos/28853362/pexels-photo-28853362.jpeg?auto=compress&cs=tinysrgb&w=1200",
    gallery: [
      "https://images.pexels.com/photos/28853362/pexels-photo-28853362.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/33688058/pexels-photo-33688058.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/7148846/pexels-photo-7148846.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/8082243/pexels-photo-8082243.jpeg?auto=compress&cs=tinysrgb&w=1200",
    ],
    summary:
      "A contemporary 3BHK for a young couple who love to host. Warm minimalism with a beige-and-charcoal palette, fluted feature walls, and a seamless kitchen-living flow designed for gatherings.",
    highlights: [
      "Open kitchen-living entertaining flow",
      "Fluted wall panelling in charcoal",
      "Smart-home lighting integration",
      "Curated art and styling package",
    ],
  },
  {
    slug: "whitefield-villa",
    title: "The Whitefield Garden Villa",
    type: "Luxury Villa",
    location: "Whitefield, Bengaluru",
    year: "2023",
    area: "5,400 sq ft",
    duration: "22 weeks",
    image:
      "https://images.pexels.com/photos/8134808/pexels-photo-8134808.jpeg?auto=compress&cs=tinysrgb&w=1200",
    gallery: [
      "https://images.pexels.com/photos/8134808/pexels-photo-8134808.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/6782578/pexels-photo-6782578.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/26886914/pexels-photo-26886914.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/34672503/pexels-photo-34672503.jpeg?auto=compress&cs=tinysrgb&w=1200",
    ],
    summary:
      "A five-bedroom garden villa designed as a quiet, sun-filled retreat. Natural lime-plaster walls, large windows framing greenery, and a material palette of oak, travertine and linen throughout.",
    highlights: [
      "Natural lime-plaster finish walls",
      "Travertine and oak flooring",
      "Indoor-outdoor garden connection",
      "Home theatre and bar lounge",
    ],
  },
  {
    slug: "domlur-studio-office",
    title: "The Foundry — Domlur Studio",
    type: "Boutique Office",
    location: "Domlur, Bengaluru",
    year: "2023",
    area: "2,600 sq ft",
    duration: "10 weeks",
    image:
      "https://images.pexels.com/photos/7511755/pexels-photo-7511755.jpeg?auto=compress&cs=tinysrgb&w=1200",
    gallery: [
      "https://images.pexels.com/photos/7511755/pexels-photo-7511755.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/6794970/pexels-photo-6794970.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/7511754/pexels-photo-7511754.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/36631701/pexels-photo-36631701.jpeg?auto=compress&cs=tinysrgb&w=1200",
    ],
    summary:
      "A creative studio office for a design agency, built around collaboration and focus. Exposed concrete, warm wood Battens, acoustic panels and a central amphitheatre-style brainstorming zone.",
    highlights: [
      "Amphitheatre brainstorming zone",
      "Acoustic batten wall system",
      "Brand-integrated colour cues",
      "Focus cabins & phone booths",
    ],
  },
  {
    slug: "ub-city-dining-lounge",
    title: "Saffron Dining Lounge",
    type: "Fine-Dining Restaurant",
    location: "UB City, Bengaluru",
    year: "2024",
    area: "3,100 sq ft",
    duration: "14 weeks",
    image:
      "https://images.pexels.com/photos/17748651/pexels-photo-17748651.jpeg?auto=compress&cs=tinysrgb&w=1200",
    gallery: [
      "https://images.pexels.com/photos/17748651/pexels-photo-17748651.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/13088696/pexels-photo-13088696.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/7508750/pexels-photo-7508750.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/27669089/pexels-photo-27669089.png?auto=compress&cs=tinysrgb&w=1200",
    ],
    summary:
      "A contemporary Indian fine-dining lounge with layered textural finishes — hand-troweled walls, brass inlay, banquette seating and a sculptural bar that anchors the room.",
    highlights: [
      "Sculptural brass-inlay bar",
      "Banquette & private dining nooks",
      "Hand-troweled feature walls",
      "Layered warm dimmable lighting",
    ],
  },
  {
    slug: "hsr-penthouse",
    title: "HSR Skyline Penthouse",
    type: "Penthouse",
    location: "HSR Layout, Bengaluru",
    year: "2023",
    area: "4,100 sq ft",
    duration: "20 weeks",
    image:
      "https://images.pexels.com/photos/20653888/pexels-photo-20653888.jpeg?auto=compress&cs=tinysrgb&w=1200",
    gallery: [
      "https://images.pexels.com/photos/20653888/pexels-photo-20653888.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/8135492/pexels-photo-8135492.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/17947890/pexels-photo-17947890.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/34688219/pexels-photo-34688219.jpeg?auto=compress&cs=tinysrgb&w=1200",
    ],
    summary:
      "A double-storey penthouse with panoramic city views. A muted, gallery-like interior lets the skyline take centre stage, with a sculptural staircase, private bar and rooftop deck.",
    highlights: [
      "Sculptural floating staircase",
      "Panoramic skyline living room",
      "Private bar & wine wall",
      "Rooftop deck with lounge",
    ],
  },
];

export type Testimonial = {
  name: string;
  role: string;
  location: string;
  quote: string;
  rating: number;
  avatar?: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Ananya & Rohit Sharma",
    role: "Homeowners · 3BHK Apartment",
    location: "Koramangala, Bengaluru",
    quote:
      "UrbanNest turned our blank apartment into a home that feels exactly like us. The warm tones, the lighting, the little details — every guest who walks in is stunned. They were meticulous, on time, and a joy to work with.",
    rating: 5,
  },
  {
    name: "Meera Iyer",
    role: "Founder · The Foundry Studio",
    location: "Domlur, Bengaluru",
    quote:
      "We needed an office that reflected our creative DNA and UrbanNest delivered beyond the renders. The team understood our brand instantly and built a space our team genuinely loves coming to every day.",
    rating: 5,
  },
  {
    name: "Vikram Reddy",
    role: "Restaurateur · Saffron Dining",
    location: "UB City, Bengaluru",
    quote:
      "From concept to handover, the attention to detail was remarkable. The brass bar they designed has become the most photographed corner of our restaurant. Worth every rupee.",
    rating: 5,
  },
  {
    name: "Priya Nair",
    role: "Homeowner · Garden Villa",
    location: "Whitefield, Bengaluru",
    quote:
      "What I loved most was how they listened. They designed our villa around the way our family actually lives — nothing felt forced or showroom-like. The garden connection is pure magic.",
    rating: 5,
  },
  {
    name: "Karthik & Divya Menon",
    role: "Homeowners · Townhouse",
    location: "Indiranagar, Bengaluru",
    quote:
      "Managing a four-generation household in one design brief is no small feat. UrbanNest balanced everyone's needs and still delivered something cohesive and luxurious. Truly a class act.",
    rating: 5,
  },
  {
    name: "Arjun Gupta",
    role: "CEO · Tech Startup",
    location: "HSR Layout, Bengaluru",
    quote:
      "The penthouse is a dream. UrbanNest managed everything end-to-end and kept us updated with zero stress on our end. The skyline living room is worth the move all on its own.",
    rating: 5,
  },
];

export type FAQItem = { q: string; a: string };

export const faqItems: FAQItem[] = [
  {
    q: "What areas do you serve?",
    a: "We are based in Indiranagar, Bengaluru and take on projects across the city. For larger residential and commercial projects we also work in other major Indian metros — please reach out with your location and we will confirm.",
  },
  {
    q: "How much does a full-home interior cost?",
    a: "Every home is unique, so we quote after understanding your space, scope and material preferences. As a guide, a full 3BHK turnkey interior typically starts from around ₹12–18 lakhs. Book a consultation for a tailored estimate.",
  },
  {
    q: "Do you work with existing furniture and decor?",
    a: "Absolutely. We frequently integrate pieces you already love — heirlooms, artwork or furniture — into the new design. A site visit helps us assess what to retain, refinish or replace.",
  },
  {
    q: "How long does a typical project take?",
    a: "A 2–3BHK apartment usually takes 10–14 weeks from design freeze to handover. Villas and larger commercial spaces range from 16–24 weeks. We share a detailed project timeline before execution begins.",
  },
  {
    q: "What is included in your turnkey service?",
    a: "Design, 3D visualisation, material procurement, civil works, carpentry, electricals, plumbing, false ceiling, flooring, painting, furniture, decor styling and final handover — a single point of accountability from start to finish.",
  },
  {
    q: "Do you offer modular kitchen-only or single-room projects?",
    a: "Yes. Alongside full-home projects we take on modular kitchens, single rooms and standalone furniture & decor commissions, subject to our current availability.",
  },
  {
    q: "Will I get 3D renders before execution?",
    a: "Yes. Every project includes photorealistic 3D renders of the key spaces so you can review layouts, materials and lighting before any work begins on site.",
  },
  {
    q: "How do we get started?",
    a: "It begins with a consultation. Share your space and aspirations via the contact form or call us at +91 9567890124. We will schedule a site visit, understand your brief, and send a tailored proposal.",
  },
];

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
  icon: "consultation" | "design" | "execution" | "handover";
};

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Consultation",
    description:
      "We meet on-site, understand your lifestyle, taste and budget, and capture measurements. You receive a clear scope, timeline and transparent quotation.",
    icon: "consultation",
  },
  {
    number: "02",
    title: "Design",
    description:
      "Mood boards, layouts and photorealistic 3D renders bring the concept to life. We refine every material, finish and detail with you until it feels right.",
    icon: "design",
  },
  {
    number: "03",
    title: "Execution",
    description:
      "Our in-house craftsmen and project managers bring the design to life on site — civil, carpentry, finishes and styling, with weekly progress updates.",
    icon: "execution",
  },
  {
    number: "04",
    title: "Handover",
    description:
      "A meticulous quality check, styling pass and walkthrough. We hand over a ready-to-live-in space and stay available for any snag fixes after move-in.",
    icon: "handover",
  },
];

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  image: string;
  social: { linkedin?: string; instagram?: string };
};

export const team: TeamMember[] = [
  {
    name: "Aarav Mehta",
    role: "Founder & Principal Designer",
    bio: "16 years shaping warm, modern Indian homes. Aarav leads design direction and client relationships with an obsession for material and light.",
    image:
      "https://images.pexels.com/photos/17049771/pexels-photo-17049771.jpeg?auto=compress&cs=tinysrgb&w=800",
    social: { linkedin: "#", instagram: "#" },
  },
  {
    name: "Saanvi Kapoor",
    role: "Lead Interior Architect",
    bio: "Saanvi translates briefs into spatial poetry — floor plans, 3D renders and material schemes that feel inevitable once you see them.",
    image:
      "https://images.pexels.com/photos/38197025/pexels-photo-38197025.jpeg?auto=compress&cs=tinysrgb&w=800",
    social: { linkedin: "#", instagram: "#" },
  },
  {
    name: "Rohan Desai",
    role: "Head of Execution",
    bio: "A second-generation contractor turned project head, Rohan ensures every drawing becomes reality — on time, on budget, flawless.",
    image:
      "https://imgs.search.brave.com/0uGt2bAW--4M-yyoqaO6lles8D4yRby_bRgbWGQSuVg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuYXJjaGl0ZWN0/dXJlcGx1c2Rlc2ln/bi5pbi93cC1jb250/ZW50L3VwbG9hZHMv/MjAyNC8wNS8yMjA5/NTQxNS9Bc2hpZXNo/LVNoYWhfMDEtRmVh/dHVyZS1pbWFnZS10/ZW1wbGF0ZS0xMzM3/LXgtNjU3LmpwZz90/cj13LTEyMDAsaC05/MDA",
    social: { linkedin: "#", instagram: "#" },
  },
  {
    name: "Ishita Rao",
    role: "Styling & Decor Lead",
    bio: "Ishita sources and styles the finishing layer — furniture, art, textiles and objects that give each space its quiet personality.",
    image:
      "https://imgs.search.brave.com/W339Nr5PnWYBnyi2r70IKHFCsBSWgg2PTxXShwzfqb0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90b3Bp/bnRlcmlvcnNpbmRp/YS5jb20vd3AtY29u/dGVudC91cGxvYWRz/LzIwMjUvMDMvVHdp/bmtsZS1LaGFubmEt/SW50ZXJpb3ItRGVz/aWduZXItaW4tSW5k/aWEtZTE3NDExNjY4/Mzg1NzQud2VicA",
    social: { linkedin: "#", instagram: "#" },
  },
];

export type Stat = { value: string; label: string };

export const stats: Stat[] = [
  { value: "320+", label: "Projects Delivered" },
  { value: "11", label: "Years of Craft" },
  { value: "48", label: "Cities Served" },
  { value: "98%", label: "Client Satisfaction" },
];

export const whyChooseUs = [
  {
    title: "End-to-End Turnkey Delivery",
    description:
      "One team, one accountability — from first sketch to final styling. You never juggle multiple vendors or chase deadlines.",
    icon: "layers",
  },
  {
    title: "In-House Craftsmen",
    description:
      "Our carpenters, painters and finishers are on our payroll, not subcontracted. That is how we guarantee quality at every joint.",
    icon: "hammer",
  },
  {
    title: "Material Honesty",
    description:
      "We specify genuine BIS-grade plywood, real veneers and branded hardware — and show you the samples before we build.",
    icon: "leaf",
  },
  {
    title: "Transparent Pricing",
    description:
      "Itemised, fixed quotations with no surprise additions. You see exactly what every rupee is buying before we begin.",
    icon: "receipt",
  },
  {
    title: "On-Time Handover",
    description:
      "Weekly milestones, a dedicated project manager and a penalty-backed timeline clause. Your handover date is a promise.",
    icon: "clock",
  },
  {
    title: "2-Year Service Warranty",
    description:
      "Every project comes with a two-year workmanship warranty and a snag-fix window after move-in, no questions asked.",
    icon: "shield",
  },
] as const;

export const certifications = [
  "ISO 9001:2015 Quality",
  "IIDA Member Studio",
  "BIS-Grade Material Practice",
  "Make in India Partner",
];
