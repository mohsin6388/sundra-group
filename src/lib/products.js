

// ── Company Info ──────────────────────────────────────────────────────────────
export const COMPANY = {
  name: "Barsana Pashu Aahar",
  brand: "Barsana Pashu Aahar",
  group: "Sundra Group",
  founder: "Founder Name",
  established: "2010",
  tagline: "Madhur Swad, Behti Doodh Dhar",
  taglineHi: "मधुर स्वाद, बहती दूध धार",
  regOffice: "Kanpur, Uttar Pradesh, India",
  unit: "Kanpur Dehat, Uttar Pradesh, India",
  email: "info@barsana.com",
  phones: ["+91 9876543210", "+91 9876543211"],
  whatsapp: "919876543210",
};

// ── Gallery Images ─────────────────────────────────────────────────────────────
// Using Unsplash placeholder images for cattle / farm / feed themes
export const GALLERY_IMAGES = [
  "https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?w=800&q=80", // cow farm
  "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=800&q=80", // feed bags
  "https://images.unsplash.com/photo-1560493676-04071c5f467b?w=800&q=80", // dairy farm
  "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80", // grain field
  "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80", // farm field
  "https://images.unsplash.com/photo-1589923188900-85dae523342b?w=800&q=80", // cows grazing
  "https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=800&q=80", // wheat
  "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80", // farm sunrise
  "https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?w=800&q=80", // cows
  "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=800&q=80", // cattle
  "https://images.unsplash.com/photo-1570459027562-4a916cc6113f?w=800&q=80", // farmer
  "https://images.unsplash.com/photo-1537685977599-f369a15da60e?w=800&q=80", // green field
];

// ── Products ───────────────────────────────────────────────────────────────────
export const PRODUCTS = [
  {
    slug: "barsana-super",
    name: "Barsana Super",
    nameHi: "बरसाना सुपर",
    tag: "Bestseller",
    accent: "#1f4d2c",
    image: `src/assets/sundra-product-packet.webp`,
    summary:
      "Our flagship cattle feed for high-yielding cows and buffaloes. Balanced energy, protein and minerals for peak daily production.",
    yield: "20–25 L/day",
    protein: "24%",
    fat: "5%",
    benefits: [
      "Up to +22% milk yield increase",
      "Optimised protein-energy ratio",
      "Steam cooked for better digestion",
      "Rich in Vitamin A, D & E",
      "Zero artificial colours",
      "Ideal for HF, Sahiwal & Murrah",
    ],
  },
  {
    slug: "barsana-gold",
    name: "Barsana Gold",
    nameHi: "बरसाना गोल्ड",
    tag: "Premium",
    accent: "#c9871f",
    image: "src/assets/sundra-product-packet-1.jpeg",
    summary:
      "Premium formulation for elite dairy herds targeting 25+ litres per day with enriched micro-nutrient profile.",
    yield: "25–30 L/day",
    protein: "26%",
    fat: "6%",
    benefits: [
      "Boosts butterfat content",
      "Mineral-chelate technology",
      "Supports reproductive health",
      "Enhanced rumen buffering",
      "Reduces somatic cell count",
      "For top-performing animals",
    ],
  },
  {
    slug: "barsana-8000",
    name: "Barsana 8000",
    nameHi: "बरसाना 8000",
    tag: "Elite",
    accent: "#8a2a1a",
    image: "src/assets/sundra-product-packet-2.jpeg",
    summary:
      "Our elite formula engineered for breeds targeting 8,000+ kg annual lactation. Scientifically balanced for maximum output.",
    yield: "30+ L/day",
    protein: "28%",
    fat: "7%",
    benefits: [
      "Targets 8000 kg/year lactation",
      "Advanced amino-acid profile",
      "Rumen-protected fat inclusion",
      "High energy density",
      "Supports transition cow health",
      "For HF cross & elite buffaloes",
    ],
  },

  {
    slug: "barsana-shakti",
    name: "Royal Mixture",
    nameHi: "बरसाना शक्ति",
    tag: "Buffalo Specialist",
    accent: "#2d6a3e",
    image: "src/assets/royal-mixture.jpeg",
    summary:
      "Formulated specifically for Murrah, Surti and other buffalo breeds to maximise fat-rich milk production.",
    yield: "15–22 L/day",
    protein: "22%",
    fat: "6.5%",
    benefits: [
      "Buffalo-optimised mineral mix",
      "Higher butterfat yield",
      "Improves coat and health",
      "Supports heavy body buffaloes",
      "Reduces heat stress",
      "Proven across U.P. & Punjab farms",
    ],
  },
  {
    slug: "barsana-supreme-plus",
    name: "Supreme+",
    nameHi: "सुप्रीम प्लस",
    tag: "Value",
    accent: "#c9871f",
    image: "src/assets/supreme-plus.jpeg",
    summary:
      "Everyday ration for small dairy farmers — reliable nutrition at accessible price points without compromising on quality.",
    yield: "12–18 L/day",
    protein: "20%",
    fat: "3.5%",
    benefits: [
      "Cost-effective daily feed",
      "Complete vitamin inclusion",
      "Suitable for mixed herds",
      "Easy on digestion",
      "Available in 25 & 50 KG bags",
      "Trusted across 10,000+ farms",
    ],
  },
  {
    slug: "barsana-calf-starter",
    name: "Calf Starter",
    nameHi: "काफ स्टार्टर",
    tag: "Young Stock",
    accent: "#6d4c41",
    image: "src/assets/buff-special.jpeg",
    summary:
      "Purpose-built starter feed for calves from 2 weeks to 3 months. Supports rumen development and healthy early growth.",
    yield: "—",
    protein: "22%",
    fat: "4%",
    benefits: [
      "Accelerates rumen development",
      "High palatability for young stock",
      "Probiotics for gut health",
      "Reduces weaning stress",
      "Pellet form for easy intake",
      "For calves 2 weeks–3 months",
    ],
  },
  {
    slug: "barsana-mineral-mix",
    name: "Mineral Mix",
    nameHi: "मिनरल मिक्स",
    tag: "Supplement",
    accent: "#1565c0",
    image: "src/assets/churi.jpeg",
    summary:
      "Concentrated mineral and vitamin supplement to correct deficiencies and maintain year-round herd health.",
    yield: "Supplement",
    protein: "—",
    fat: "—",
    benefits: [
      "Corrects calcium & phosphorus imbalances",
      "Prevents milk fever",
      "Improves conception rates",
      "Zinc & copper for hoof health",
      "Daily 50–80g dosing",
      "Compatible with all Barsana feeds",
    ],
  },
  {
    slug: "barsana-organic",
    name: "Barsana Organic",
    nameHi: "बरसाना ऑर्गेनिक",
    tag: "Organic",
    accent: "#558b2f",
    image: "src/assets/daily-special.jpeg",
    summary:
      "Certified organic cattle feed for farms targeting organic dairy certification. No synthetic additives or preservatives.",
    yield: "16–22 L/day",
    protein: "21%",
    fat: "4.5%",
    benefits: [
      "Organic India certified",
      "Zero synthetic additives",
      "Non-GMO ingredients",
      "Ideal for organic dairy farms",
      "Supports premium milk pricing",
      "Sustainably sourced grains",
    ],
  },
  {
    slug: "barsana-pro-buffalo",
    name: "Pro Buffalo",
    nameHi: "प्रो बफैलो",
    tag: "New",
    accent: "#4a148c",
    image: "src/assets/eight.jpeg",
    summary:
      "Our newest formulation for high-potential Murrah buffaloes — specially calibrated energy and fat profile for A2 fat-rich milk.",
    yield: "18–26 L/day",
    protein: "23%",
    fat: "7%",
    benefits: [
      "Maximises A2 fat output",
      "Rumen-protected bypass fat",
      "Supports heavy lactation",
      "Improved body condition score",
      "New chelated zinc complex",
      "Launching across U.P. & Bihar",
    ],
  },
  {
    slug: "barsana-pro-buffalo",
    name: "Pro Buffalo",
    nameHi: "प्रो बफैलो",
    tag: "New",
    accent: "#4a148c",
    image: "src/assets/multi-gran-chukar.jpeg",
    summary:
      "Our newest formulation for high-potential Murrah buffaloes — specially calibrated energy and fat profile for A2 fat-rich milk.",
    yield: "18–26 L/day",
    protein: "23%",
    fat: "7%",
    benefits: [
      "Maximises A2 fat output",
      "Rumen-protected bypass fat",
      "Supports heavy lactation",
      "Improved body condition score",
      "New chelated zinc complex",
      "Launching across U.P. & Bihar",
    ],
  },
  {
    slug: "barsana-pro-buffalo",
    name: "Pro Buffalo",
    nameHi: "प्रो बफैलो",
    tag: "New",
    accent: "#4a148c",
    image: "src/assets/super.jpeg",
    summary:
      "Our newest formulation for high-potential Murrah buffaloes — specially calibrated energy and fat profile for A2 fat-rich milk.",
    yield: "18–26 L/day",
    protein: "23%",
    fat: "7%",
    benefits: [
      "Maximises A2 fat output",
      "Rumen-protected bypass fat",
      "Supports heavy lactation",
      "Improved body condition score",
      "New chelated zinc complex",
      "Launching across U.P. & Bihar",
    ],
  },
];

// ── Helper ─────────────────────────────────────────────────────────────────────
export function findProduct(slug) {
  return PRODUCTS.find((p) => p.slug === slug) || null;
}
