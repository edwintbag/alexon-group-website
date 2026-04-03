export interface HeroSlide {
  img: string;
  label: string;
}


export const HERO_SLIDES: HeroSlide[] = [
  {
    img: "/images/alexon.JPG",
    label: "Building Infrastructure",
  },
  {
    img: "/images/alexon1.JPG",
    label: "Real Estate Development",
  },
  {
    img: "/images/alexon2.JPG",
    label: "Agribusiness Excellence",
  },
  {
    img: "/images/alexon3.JPG",
    label: "Logistics & Supply Chain",
  },
  {
    img: "/images/alexon4.JPG",
    label: "Logistics & Supply Chain",
  },
  {
    img: "/images/alexon5.JPG",
    label: "Logistics & Supply Chain",
  },
  {
    img: "/images/alexon6.JPG",
    label: "Logistics & Supply Chain",
  },
];

export interface ServiceItem {
  icon: string;
  title: string;
  desc: string;
  slug: string;
}

export const SERVICES: ServiceItem[] = [
  {
    icon: "🏗️",
    title: "Construction",
    slug: "construction",
    desc: "Full-cycle construction services from civil works to commercial developments. Our team manages projects of all scales with precision and craftsmanship.",
  },
  {
    icon: "🪨",
    title: "Quarry & Materials",
    slug: "quarry",
    desc: "Premium aggregates, granite, and sand sourced from our quarries. High-grade raw materials certified for major infrastructure projects.",
  },
  {
    icon: "🚜",
    title: "Equipment Hire",
    slug: "equipment",
    desc: "Modern construction equipment including excavators, cranes, mixers, and compactors available for short or long-term hire across Kenya.",
  },
  {
    icon: "🌾",
    title: "Agriculture",
    slug: "agriculture",
    desc: "Sustainable farming operations including livestock, poultry, and sugarcane. Modern agri-tech practices supporting regional food security.",
  },
  {
    icon: "🚛",
    title: "Logistics",
    slug: "logistics",
    desc: "Reliable supply chain solutions across Kenya and East Africa. Fleet-managed just-in-time delivery for construction sites and agri-products.",
  },
  {
    icon: "🏠",
    title: "Real Estate",
    slug: "real-estate",
    desc: "Modern residential, commercial, and mixed-use development. End-to-end from architecture through construction to final handover.",
  },
];

export interface ServiceDetail extends ServiceItem {
  img: string;
  fullDesc: string;
  features: string[];
}

export const SERVICES_DETAIL: ServiceDetail[] = [
 {
  icon: "🏗️",
  title: "Concrete Materials",
  slug: "concrete-materials",
  img: "/images/alexon13.jpg",
  desc: "High-quality concrete and construction materials for durable infrastructure.",
  fullDesc:
    "We supply high-quality concrete and construction materials essential for modern infrastructure development. Our solutions are designed to ensure durability, strength, and efficiency across residential, commercial, and large-scale projects.",
  features: [
  // Concrete Products
  "Concrete Blocks (Solid & Hollow)",
  "Paving Blocks (Cabro)",
  "Precast Concrete Products",

  // Road & Drainage Infrastructure
  "Concrete Culverts",
  "Road Kerbs",
  "Road Channels",

  // Structural Elements
  "Concrete Slabs",
  "Wall Capping",
  "Concrete Spindles",

  // Aggregates
  "Sand (Fine & Coarse)",
  "Ballast",
  "Gravel",
],
},
  {
    icon: "🏗️",
    title: "Construction Services",
    slug: "construction",
    img: "/images/con1.jpg",
    desc: "Full-cycle construction from civil works to commercial developments.",
    fullDesc:
      "Full-cycle construction from civil works to commercial developments. Our in-house team of architects, engineers, and project managers translates your vision into reliable, high-performance assets. We manage the complexity so you don't have to.",
    features: [
      "Residential & Commercial Construction",
      "Civil Works & Infrastructure",
      "Project Management",
      "Renovation & Asset Upgrade",
      "Architectural & Engineering Design",
    ],
  },
  {
    icon: "🪨",
    title: "Quarry & Materials",
    slug: "quarry",
    img: "/images/alexon4.JPG",
    desc: "Premium aggregates, granite, and sand sourced directly from our quarry operations.",
    fullDesc:
      "Premium aggregates, granite, and sand sourced directly from our quarry operations. We manufacture durable, certified precast concrete products that support East Africa's fast-paced development.",
    features: [
      "Crushed Granite & Aggregates",
      "Pre-Cast Concrete Products",
      "Cabro Paving Blocks",
      "Culverts & Drainage",
      "Building Blocks & Fencing Poles",
    ],
  },
  {
    icon: "🚜",
    title: "Equipment Hire",
    slug: "equipment",
    img: "/images/alexon7.JPG",
    desc: "Modern, well-maintained construction equipment for short or long-term hire.",
    fullDesc:
      "Modern, well-maintained construction equipment available for short or long-term hire. Our fleet supports contractors and developers across Kenya with reliable machinery and trained operators.",
    features: [
      "Excavators & Bulldozers",
      "Concrete Mixers & Vibrators",
      "Cranes & Aerial Platforms",
      "Compactors & Rollers",
      "Tipper Trucks & Tippers",
    ],
  },
  
  {
    icon: "🚛",
    title: "Supply Chain Logistics",
    slug: "logistics",
    img: "/images/alexon8.JPG",
    desc: "The operational backbone of our integrated model.",
    fullDesc:
      "The operational backbone of our integrated model. We manage precision delivery across Kenya and East Africa, using modern analytics to plan optimal routes and ensure timely delivery.",
    features: [
      "Construction Material Delivery",
      "Agricultural Product Transport",
      "Custom Freight Services",
      "Fleet Management",
      "Regional Supply Chain Solutions",
    ],
  },
  {
    icon: "🏠",
    title: "Real Estate Development",
    slug: "real-estate",
    img: "https://images.unsplash.com/photo-1448630360428-65456885c650?w=800&q=80",
    desc: "Specializing in modern, functional residential and commercial projects.",
    fullDesc:
      "Specializing in the design, development, and execution of modern, functional residential, commercial, and infrastructure projects. Our integrated material supply ensures quality control from day one.",
    features: [
      "Residential Developments",
      "Commercial Projects",
      "Mixed-Use Properties",
      "Infrastructure Projects",
      "Property Consulting",
    ],
  },
];

export interface ProjectItem {
  title: string;
  tag: string;
  img: string;
  status: "Completed" | "Ongoing" | "Planned";
}

export const PROJECTS: ProjectItem[] = [
  {
    title: "Ukwala Residential Project",
    tag: "Residential Construction",
    img: "/images/ukwala.jpg",
    status: "Planned",
  },
  {
    title: "Siaya County Road Works",
    tag: "Civil Infrastructure",
    img: "/images/road.jpg",
    status: "Completed",
  },
  {
    title: "Residential Estate — Phase 1",
    tag: "Real Estate Development",
    img: "https://images.unsplash.com/photo-1448630360428-65456885c650?w=800&q=80",
    status: "Ongoing",
  },
  {
    title: "Sugarcane Farm Expansion",
    tag: "Agribusiness",
    img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80",
    status: "Completed",
  },
  {
    title: "Quarry Operations — Granite",
    tag: "Quarry & Mining",
    img: "/images/alexon1.JPG",
    status: "Ongoing",
  },
  {
    title: "East Africa Logistics Hub",
    tag: "Supply Chain",
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
    status: "Planned",
  },
];

export interface Testimonial {
  text: string;
  author: string;
  role: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    text: "Alexon Group delivered our office complex ahead of schedule with exceptional quality. Their integrated approach—using their own materials and logistics—kept costs down and quality high.",
    author: "James Omondi",
    role: "CEO, Lakeside Properties Ltd",
  },
  {
    text: "As a contractor, having a reliable single supplier for blocks, aggregates, and delivery has transformed our operations. Alexon is the partner we always needed in western Kenya.",
    author: "Mercy Atieno",
    role: "Director, MCA Builders & Contractors",
  },
  {
    text: "Their sugarcane outgrower program gave our farm a stable market and technical support. We've doubled our yield in two seasons. Truly invested in our success.",
    author: "Peter Ochieng",
    role: "Smallholder Farmer, Siaya",
  },
];

export interface Job {
  title: string;
  dept: string;
  location: string;
  type: "Full-Time" | "Contract" | "Part-Time";
  desc: string;
}

export const JOBS: Job[] = [
  
  {
    title: "Company Secretary / Legal Advisor",
    dept: "Legal",
    location: "Ugunja HQ",
    type: "Full-Time",
    desc: "Oversee legal, compliance, and corporate governance functions of the organization.",
  },
  {
    title: "Operations Manager",
    dept: "Operations",
    location: "Ugunja HQ",
    type: "Full-Time",
    desc: "Lead logistics, fleet, and operational systems across all divisions.",
  },
  {
    title: "Finance & Administration Manager",
    dept: "Finance",
    location: "Ugunja HQ",
    type: "Full-Time",
    desc: "Manage financial operations, reporting, and administrative systems.",
  },
  {
    title: "Finance & Admin Officer",
    dept: "Finance",
    location: "Ugunja HQ",
    type: "Full-Time",
    desc: "Support financial processes, record keeping, and compliance activities.",
  },
  {
    title: "Concrete Products Supervisor",
    dept: "Production",
    location: "Ugunja",
    type: "Full-Time",
    desc: "Oversee concrete production processes and ensure quality standards are met.",
  },
  {
    title: "Office Administrator / Receptionist",
    dept: "Administration",
    location: "Ugunja HQ",
    type: "Full-Time",
    desc: "Manage front office operations and administrative coordination.",
  },
  {
    title: "Marketing Executives",
    dept: "Marketing",
    location: "Ugunja / Field",
    type: "Full-Time",
    desc: "Execute campaigns, generate leads, and support product promotions.",
  },
  {
    title: "Sales & Marketing Manager",
    dept: "Marketing",
    location: "Ugunja HQ",
    type: "Full-Time",
    desc: "Lead marketing strategy, branding, and growth initiatives.",
  },
  {
    title: "Tea Girl / Office Cleaner",
    dept: "Support Services",
    location: "Ugunja HQ",
    type: "Full-Time",
    desc: "Maintain office cleanliness and provide hospitality support services.",
  },
];

export const STATS = [
  { num: "4+", label: "Business Divisions" },
  { num: "100+", label: "Projects Delivered" },
  { num: "500+", label: "Clients Served" },
  { num: "2025", label: "Founded in Kenya" },
];

export const TRUST_ITEMS = [
  { icon: "✅", text: "Certified Quality" },
  { icon: "🌍", text: "East Africa Coverage" },
  { icon: "⚡", text: "Fast Delivery" },
  { icon: "🔒", text: "Trusted & Insured" },
  { icon: "♻️", text: "Eco-Friendly Practices" },
];
