import exteriors from "@/assets/cap/exteriors.jpg";
import interiors from "@/assets/cap/interiors.jpg";
import renovation from "@/assets/cap/renovation.jpg";
import flats from "@/assets/cap/flats.jpg";
import villas from "@/assets/cap/villas.jpg";
import farmhouse from "@/assets/cap/farmhouse.jpg";
import office from "@/assets/cap/office.jpg";
import hospitality from "@/assets/cap/hospitality.jpg";
import healthcare from "@/assets/cap/healthcare.jpg";
import kitchen from "@/assets/cap/kitchen.jpg";
import entertainment from "@/assets/cap/entertainment.jpg";
import luxuryCommercial from "@/assets/cap/luxury-commercial.jpg";
import styleModern from "@/assets/cap/style-modern.jpg";
import styleContemporary from "@/assets/cap/style-contemporary.jpg";
import styleMinimalist from "@/assets/cap/style-minimalist.jpg";
import styleClassic from "@/assets/cap/style-classic.jpg";
import kerala from "@/assets/cap/kerala.jpg";
import chettinad from "@/assets/cap/chettinad.jpg";
import rajasthan from "@/assets/cap/rajasthan.jpg";
import andhra from "@/assets/cap/andhra.jpg";
import rustic from "@/assets/cap/rustic.jpg";
import tropical from "@/assets/cap/tropical.jpg";

export type Capability = {
  id: string;
  title: string;
  subtitle?: string;
  image: string;
  shortDesc: string;
  longDesc: string;
  features: string[];
};

export type CapabilityCategory = {
  key: string;
  label: string;
  intro: string;
  items: Capability[];
};

export const categories: CapabilityCategory[] = [
  {
    key: "project-types",
    label: "Project Types",
    intro: "End-to-end design and build across every kind of space.",
    items: [
      {
        id: "exteriors",
        title: "Exteriors",
        subtitle: "Facades, landscapes & curb appeal",
        image: exteriors,
        shortDesc: "Striking facades, elevations and outdoor spaces.",
        longDesc:
          "We craft exteriors that make a lasting first impression — from material-rich facades and elegant elevations to landscaping, hardscaping and outdoor lighting. Every exterior is engineered for climate, light and longevity.",
        features: ["Facade Design", "Landscaping", "Outdoor Lighting", "Hardscape & Paving"],
      },
      {
        id: "interiors",
        title: "Interiors",
        subtitle: "Spaces that feel as good as they look",
        image: interiors,
        shortDesc: "Tailored interiors blending function, comfort and style.",
        longDesc:
          "From mood boards to the final cushion, we design interiors that reflect your lifestyle and brand. Layouts, materials, finishes, lighting and styling — handled cohesively under one roof.",
        features: ["Space Planning", "Material Curation", "Lighting Design", "Styling & Décor"],
      },
      {
        id: "renovation",
        title: "Renovation",
        subtitle: "Reimagine the spaces you already love",
        image: renovation,
        shortDesc: "Transform existing spaces with minimum disruption.",
        longDesc:
          "We refresh and rebuild existing homes and offices — from cosmetic upgrades to full structural reworks — with disciplined site management, transparent costing and minimal downtime.",
        features: ["Structural Upgrades", "Modular Refits", "Finish Renewals", "Heritage Restoration"],
      },
    ],
  },
  {
    key: "residential",
    label: "Residential",
    intro: "Homes designed around how you actually live.",
    items: [
      {
        id: "flats",
        title: "Flats & Apartments",
        subtitle: "Smart, flexible city living",
        image: flats,
        shortDesc: "Maximise every square foot of urban living.",
        longDesc:
          "Apartments and flats designed for the realities of city life — clever storage, flexible zones, refined finishes and lighting that makes compact homes feel expansive.",
        features: ["Modular Storage", "Open Plans", "Smart Lighting", "Compact Luxury"],
      },
      {
        id: "villas",
        title: "Villas",
        subtitle: "Private residences crafted in detail",
        image: villas,
        shortDesc: "Bespoke villas built around your lifestyle.",
        longDesc:
          "From grand entrances to private courtyards and pool decks, we design villas as unified architectural statements — every façade, room and finish curated to feel distinctly yours.",
        features: ["Custom Architecture", "Pool & Decks", "Landscape Integration", "Premium Finishes"],
      },
      {
        id: "farmhouse",
        title: "Farm Houses",
        subtitle: "Retreats rooted in nature",
        image: farmhouse,
        shortDesc: "Country homes that breathe with the land.",
        longDesc:
          "Farm houses designed for slow living — wide verandahs, courtyards, natural materials and passive cooling, balanced with refined modern comfort.",
        features: ["Verandahs", "Courtyards", "Natural Materials", "Passive Cooling"],
      },
    ],
  },
  {
    key: "commercial",
    label: "Commercial",
    intro: "Workspaces, retail and hospitality that drive business outcomes.",
    items: [
      {
        id: "office",
        title: "Office Design",
        subtitle: "Corporate · Start-ups · Co-working",
        image: office,
        shortDesc: "Productive, brand-aligned workplaces.",
        longDesc:
          "Corporate HQs, agile start-up studios and co-working hubs — we design workspaces that balance focus, collaboration and brand storytelling, with acoustics, lighting and ergonomics built in.",
        features: ["Corporate HQs", "Start-up Studios", "Co-working Hubs", "Boardrooms"],
      },
      {
        id: "hospitality",
        title: "Hospitality Design",
        subtitle: "Showrooms · Restaurants · Cafés · Resorts",
        image: hospitality,
        shortDesc: "Spaces guests want to return to.",
        longDesc:
          "From intimate cafés to resort lobbies, we design hospitality interiors that translate brand into atmosphere — with durable specifications that survive heavy footfall.",
        features: ["Showrooms", "Restaurants", "Cafés", "Resorts"],
      },
      {
        id: "healthcare",
        title: "Healthcare",
        subtitle: "Hospitals · Clinics · Diagnostic Centres",
        image: healthcare,
        shortDesc: "Calming, hygienic, regulation-ready spaces.",
        longDesc:
          "Healthcare interiors that prioritise patient comfort, infection control, signage clarity and operational flow — designed in coordination with medical planners.",
        features: ["Patient-First Layouts", "Hygienic Materials", "Wayfinding", "Compliance"],
      },
      {
        id: "kitchen",
        title: "Commercial Kitchen & Food Spaces",
        subtitle: "Restaurant kitchens · Cloud kitchens · Bakeries · Food courts",
        image: kitchen,
        shortDesc: "High-performance kitchens engineered for volume.",
        longDesc:
          "Workflow-driven kitchen layouts with the right equipment zoning, ventilation, drainage and safety compliance — for restaurants, cloud kitchens, bakeries and food courts.",
        features: ["Workflow Zoning", "Ventilation", "Equipment Layouts", "Food Safety"],
      },
      {
        id: "entertainment",
        title: "Entertainment & Recreation",
        subtitle: "Private cinemas · Game zones · Gyms · Salons & Spa",
        image: entertainment,
        shortDesc: "Immersive spaces for leisure and wellness.",
        longDesc:
          "Acoustically-tuned cinemas, energetic game zones, performance gyms and tranquil spas — every detail dialled in for the experience you want guests to feel.",
        features: ["Acoustics", "Mood Lighting", "Equipment Planning", "Wellness Zones"],
      },
      {
        id: "luxury-commercial",
        title: "Luxury Commercial",
        subtitle: "Boutiques · Premium offices · Designer salons · VIP lounges",
        image: luxuryCommercial,
        shortDesc: "High-end commercial spaces with unmistakable presence.",
        longDesc:
          "Luxury retail and premium commercial environments built with rare materials, signature lighting and meticulous detailing that signal status from the moment guests arrive.",
        features: ["Rare Materials", "Signature Lighting", "Bespoke Joinery", "Concierge Zones"],
      },
    ],
  },
  {
    key: "styles",
    label: "Styles",
    intro: "A curated language of design — refined to suit your sensibility.",
    items: [
      {
        id: "modern",
        title: "Modern",
        subtitle: "Clean lines, honest materials",
        image: styleModern,
        shortDesc: "Stripped-back, light-filled, function-led.",
        longDesc:
          "Open layouts, large glazing, considered material palettes and an emphasis on natural light. Modern design that ages with quiet confidence.",
        features: ["Open Plans", "Large Glazing", "Honest Materials", "Neutral Palettes"],
      },
      {
        id: "contemporary",
        title: "Contemporary",
        subtitle: "Of-the-moment, layered, expressive",
        image: styleContemporary,
        shortDesc: "Today's design language — with longevity.",
        longDesc:
          "Contemporary interiors blend current trends with timeless detailing — mixed textures, curated art and warm neutrals layered for depth.",
        features: ["Mixed Textures", "Curated Art", "Warm Neutrals", "Statement Pieces"],
      },
      {
        id: "minimalist",
        title: "Minimalist",
        subtitle: "Less, but better",
        image: styleMinimalist,
        shortDesc: "Quiet spaces with intentional restraint.",
        longDesc:
          "Pared-back palettes, hidden storage and meticulous detailing. Every element earns its place — and the empty space does the heavy lifting.",
        features: ["Restrained Palette", "Hidden Storage", "Precise Detailing", "Negative Space"],
      },
      {
        id: "classic",
        title: "Classic Luxury",
        subtitle: "Timeless grandeur, refined opulence",
        image: styleClassic,
        shortDesc: "Heritage detailing in a luxurious key.",
        longDesc:
          "Ornate moldings, marble, crystal, brass and rich woods — composed with discipline so the result feels sumptuous, never excessive.",
        features: ["Ornate Moldings", "Marble & Brass", "Crystal Lighting", "Heritage Detailing"],
      },
    ],
  },
  {
    key: "specialized",
    label: "Specialized",
    intro:
      "Vernacular, heritage and sustainable interiors — our deepest area of craft.",
    items: [
      {
        id: "kerala",
        title: "Kerala Nalukettu",
        subtitle: "Vernacular Kerala",
        image: kerala,
        shortDesc: "Traditional Nalukettu with central courtyards.",
        longDesc:
          "Authentic Nalukettu homes designed around the nadumuttam courtyard — sloping tiled roofs, carved teak pillars, brass detailing and natural cross-ventilation crafted by skilled artisans.",
        features: ["Nadumuttam Courtyard", "Carved Teak", "Tiled Roof", "Cross-Ventilation"],
      },
      {
        id: "chettinad",
        title: "Chettinad Style",
        subtitle: "South Indian heritage",
        image: chettinad,
        shortDesc: "Athangudi tiles, teak pillars, antique grandeur.",
        longDesc:
          "Chettinad mansions reborn — towering teak columns, hand-laid Athangudi tile floors, Burma teak doors and curated antiques that honour the region's heritage.",
        features: ["Athangudi Tiles", "Teak Columns", "Antique Doors", "Heritage Finishes"],
      },
      {
        id: "rajasthan",
        title: "Rajasthan Haveli",
        subtitle: "Royal Rajputana",
        image: rajasthan,
        shortDesc: "Jharokhas, sandstone carvings, royal arches.",
        longDesc:
          "Haveli-style interiors with intricate jharokha windows, jali screens, sandstone carvings and inner courtyards — all the romance of Rajasthan, executed with modern comfort.",
        features: ["Jharokhas", "Jali Screens", "Sandstone", "Inner Courtyards"],
      },
      {
        id: "andhra",
        title: "Andhra Courtyard Homes",
        subtitle: "Telugu vernacular",
        image: andhra,
        shortDesc: "Open courtyards, terracotta floors, wooden pillars.",
        longDesc:
          "Traditional Andhra homes built around an open courtyard with the tulasi plant at the centre — terracotta floors, carved wooden pillars and breezy verandahs.",
        features: ["Open Courtyard", "Terracotta", "Wooden Pillars", "Verandahs"],
      },
      {
        id: "rustic",
        title: "Rustic & Mud Houses",
        subtitle: "Village-inspired interiors",
        image: rustic,
        shortDesc: "Mud, lime plaster and handmade craft.",
        longDesc:
          "Earthy, grounded homes finished in mud and lime plaster, with terracotta floors, handcrafted wooden furniture and indigenous textiles — beautifully imperfect and deeply sustainable.",
        features: ["Mud Walls", "Lime Plaster", "Terracotta", "Handcrafted Furniture"],
      },
      {
        id: "tropical",
        title: "Tropical & Heritage Sustainable",
        subtitle: "Eco-luxury, climate-tuned",
        image: tropical,
        shortDesc: "Bamboo, teak, plants and natural ventilation.",
        longDesc:
          "Tropical interiors designed for breeze, light and biophilia — bamboo and teak, indoor planting, deep eaves and passive ventilation for year-round comfort without heavy energy use.",
        features: ["Biophilic Design", "Natural Ventilation", "Bamboo & Teak", "Passive Cooling"],
      },
    ],
  },
];

export const processSteps: { title: string; desc: string }[] = [
  { title: "Client Meet", desc: "Understanding vision, lifestyle, brand and budget." },
  { title: "Site Visit & Measurements", desc: "Detailed survey and accurate measurements." },
  { title: "Space Planning", desc: "Functional, intuitive layouts." },
  { title: "Theme Selection", desc: "Choosing the design direction together." },
  { title: "2D Drawings", desc: "Precise plans, elevations and sections." },
  { title: "3D Visualizations", desc: "Photorealistic walkthroughs of your space." },
  { title: "Color Palette", desc: "Curated tones across walls, fabrics and finishes." },
  { title: "Material Ideas", desc: "Sustainable, durable and beautiful selections." },
  { title: "Mood Boards", desc: "Style, texture and atmosphere in one frame." },
  { title: "Design Style Selection", desc: "Locking the final aesthetic direction." },
  { title: "HVAC Coordination", desc: "Climate, airflow and comfort engineered in." },
  { title: "Furniture Layout", desc: "Loose and built-in furniture planning." },
  { title: "Lighting Design", desc: "Layered ambient, task and accent lighting." },
  { title: "Working Drawings", desc: "Construction-ready technical documentation." },
  { title: "BOQ & Cost Estimation", desc: "Transparent, line-item budgeting." },
  { title: "Site Supervision", desc: "On-site quality and timeline management." },
  { title: "Turnkey Execution", desc: "Single-point delivery of the full project." },
  { title: "Styling & Décor", desc: "Final layering of art, accessories and soft goods." },
  { title: "Handover", desc: "Walkthrough, snag list and the keys to your space." },
];

export const sustainabilityPillars = [
  {
    title: "Environmental Conscious Design",
    desc: "Climate-aware orientation, daylighting and low-impact specifications.",
  },
  {
    title: "Complete Theme Based",
    desc: "Cohesive narratives carried from architecture through to décor.",
  },
  {
    title: "Natural Materials",
    desc: "Wood, stone, lime, terracotta and locally-sourced finishes.",
  },
  {
    title: "Ventilation Planning",
    desc: "Passive cooling, courtyards and engineered airflow.",
  },
];
