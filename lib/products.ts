export interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  unit: string;
  img: string;
  desc: string;
  details?: string[];
}

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Cabro Blocks",
    category: "Paving",
    price: "KES 1100 per m²",
    unit: "min. 500 pcs",
    img: "/images/products/cabro.jpg",
    desc: "High-density interlocking paving blocks for driveways, walkways and public spaces.",
    details: [
      "Compressive strength: ≥ 40 MPa",
      "Standard size: 200 × 100 × 60 mm",
      "Available in grey, red, and charcoal",
      "KEBS certified",
      "Suitable for pedestrian and light vehicular traffic",
    ],
  },
  {
    id: 2,
    name: "Hollow Building Blocks",
    category: "Blocks",
    price: "KES 65 / pc",
    unit: "min. 200 pcs",
    img: "/images/products/hblock.jpg",
    desc: "Standard and custom hollow blocks for residential and commercial wall construction.",
    details: [
      "Standard size: 400 × 200 × 150 mm",
      "Compressive strength: ≥ 7 MPa",
      "Low thermal conductivity",
      "KEBS KS 1250 certified",
      "Available in 6\" and 9\" widths",
    ],
  },
  {
    id: 3,
    name: "Concrete Culverts",
    category: "Drainage",
    price: "KES 3,500 / pc",
    unit: "per piece",
    img: "/images/products/culverts.jpg",
    desc: "Reinforced precast culverts for road crossings, drainage channels, and stormwater systems.",
    details: [
      "Diameter options: 1ft, 1.5ft, 2ft, 3ft",
      "Standard length: 1 m",
      "Reinforced with high-tensile steel",
      "Class II & III available",
      "Suitable for road and highway use",
    ],
  },
  {
    id: 4,
    name: "Fencing Poles",
    category: "Security",
    price: "KES 1,450/ pc",
    unit: "min. 10 pcs",
    img: "/images/products/fencingpole.jpg",
    desc: "Durable precast concrete fencing poles for farms, estates, and industrial perimeters.",
    details: [
      "Standard height: 8ft,9ft,10ft",
      "Reinforced concrete core",
      "Corner, strainer, and line pole variants",
      "Compatible with standard barbed wire spacing",
      "Treated for weather resistance",
    ],
  },
  {
    id: 5,
    name: "Road Kerbs & Channels",
    category: "Roads",
    price: "KES 280 / pc",
    unit: "min. 100 pcs",
    img: "/images/products/roadkerb.jpg",
    desc: "Precision-cast road kerb stones and drainage channels for roads and parking areas.",
    details: [
      "Standard length: 1 m per piece",
      "Compressive strength: ≥ 35 MPa",
      "Raised, lay-flat, and channel variants",
      "KEBS KS 02-300 compliant",
      "Suitable for Class A roads",
    ],
  },
  {
    id: 6,
    name: "Washed Sharp Sand",
    category: "Aggregates",
    price: "KES 12,000 / tonne",
    unit: "per tonne",
    img: "/images/products/sand.jpg",
    desc: "Clean, graded washed sand suitable for plastering, block-laying, and concrete mixing.",
    details: [
      "Zone II grading (BS 882)",
      "Silt content < 3%",
      "Delivered in 5-tonne or 10-tonne loads",
      "Sourced from certified quarries",
      "Free from organic impurities",
    ],
  },
  {
    id: 7,
    name: "Crushed Granite 20mm",
    category: "Aggregates",
    price: "KES 15,000 / tonne",
    unit: "per tonne",
    img: "/images/products/dust.jpg",
    desc: "High-grade crushed granite aggregate for foundations, concrete production, and road base.",
    details: [
      "Nominal size: 20 mm",
      "10 mm and 40 mm also available",
      "Flakiness index < 25%",
      "Los Angeles Abrasion < 30%",
      "Ideal for structural concrete mixes",
    ],
  },
  {
    id: 8,
    name: "Precast Manhole Rings",
    category: "Drainage",
    price: "KES 8,500 / set",
    unit: "per set",
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
    desc: "Standard and heavy-duty precast concrete manhole rings and covers for utility infrastructure.",
    details: [
      "Internal diameter: 900 mm (standard)",
      "Cover slab included in set",
      "Class B & D loading options",
      "Watertight joint design",
      "Compatible with uPVC and HDPE pipes",
    ],
  },
];

export const SHOP_CATEGORIES = [
  "All",
  "Paving",
  "Blocks",
  "Drainage",
  "Security",
  "Roads",
  "Aggregates",
];

export function getProductById(id: number): Product | undefined {
  return PRODUCTS.find((p) => p.id === id);
}
