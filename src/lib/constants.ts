
import type { LucideIcon } from "lucide-react";
import { Wrench, Home as HomeIcon, Paintbrush, Building, ShieldCheck, Clock, Users, Facebook, Twitter, Instagram, Linkedin, Map, PencilRuler, KeyRound, Smile, CreditCard, FileText, Compass, Timer } from "lucide-react";

export const NAV_LINKS = [
  { href: "/projects", label: "Our Projects" },
  { href: "/packages", label: "Packages" },
  { href: "/floor-plans", label: "Floor Plans", isNew: false },
  { href: "/sell-property", label: "Sell Property" },
  { href: "/cost-calculator", label: "Cost Estimator" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/more", label: "More" },
];

export const HOW_IT_WORKS_STEPS = [
  {
    icon: Map,
    title: "Initial Consultation & Site Visit",
    description: "We start by understanding your vision, requirements, and budget. Our team conducts a thorough site visit to assess feasibility and gather essential data for planning.",
  },
  {
    icon: PencilRuler,
    title: "Design & Planning",
    description: "Our architects and designers collaborate with you to create detailed floor plans and 3D models. We refine the design until it perfectly matches your dream home.",
  },
  {
    icon: Building,
    title: "Construction & Execution",
    description: "With approved plans, our skilled construction team gets to work. We use tech-enabled project management to ensure on-time progress and high-quality standards.",
  },
  {
    icon: KeyRound,
    title: "Finishing & Handover",
    description: "We focus on the final touches that make a house a home. After a final quality check, we hand over the keys to your brand-new, ready-to-move-in property.",
  },
];

export const SERVICES = [
  {
    icon: Wrench,
    title: "General Construction",
    description: "High-quality construction services for all types of buildings, ensuring durability and compliance.",
  },
  {
    icon: HomeIcon,
    title: "Home Renovation",
    description: "Transform your living space with our expert renovation services, from kitchens to full home makeovers.",
  },
  {
    icon: Paintbrush,
    title: "Interior Design",
    description: "Our creative designers craft beautiful and functional interiors tailored to your personal style.",
  },
  {
    icon: Building,
    title: "Commercial Projects",
    description: "Specialized solutions for commercial properties, including office spaces, retail, and more.",
  },
];

export const FEATURES = [
  {
    title: "Safe Money Transaction",
    description: "No Advance. Contractor is paid only once the work is complete",
    imageUrl: "/next_era_why/note.png"
  },
  {
    title: "Absolute Transparency",
    description: "Clear and Detailed Quotation. Online tracking of projects",
    imageUrl: "/next_era_why/card_secure.png"
  },
  {
    title: "Assured Quality Control",
    description: "470+ Quality (QASCON) Checks performed by team of experts",
    imageUrl: "/next_era_why/secure.png"
  },
  {
    title: "Zero Delays",
    description: "Zero tolerance for delays",
    imageUrl: "/next_era_why/time.png"
  },
];

export type Project = {
  id: number;
  category: "Renovation" | "Construction" | "Interiors";
  title: string;
  description: string;
  imageUrl: string;
  aiHint: string;
  city: "Varanasi" | "Bengaluru" | "Gurugram";
  area: string;
  timeline: string;
  status: "Completed" | "Ongoing";
  crn: string;
  featured?: boolean;
};

export const PROJECTS: Project[] = [
  {
    id: 1,
    category: "Construction",
    title: "Modern Villa in Sarjapur",
    description: "A stunning 4-bedroom villa with a focus on open-plan living and seamless indoor-outdoor integration, perfect for a modern family.",
    imageUrl: "/project/banglore/Modern Villa in Sarjapur.jpg",
    aiHint: "modern villa exterior",
    city: "Bengaluru",
    area: "3,200 sq.ft.",
    timeline: "11 Months",
    status: "Completed",
    crn: "CRN211861",
    featured: true,
  },
  {
    id: 2,
    category: "Construction",
    title: "Luxury Duplex on Golf Course Road",
    description: "An opulent duplex featuring premium marble flooring, smart home automation, and panoramic city views.",
    imageUrl: "/project/gurugram/Luxury Duplex on Golf Course Road.jpeg",
    aiHint: "luxury apartment interior",
    city: "Gurugram",
    area: "4,500 sq.ft.",
    timeline: "14 Months",
    status: "Completed",
    crn: "CRN211862",
    featured: true,
  },
  {
    id: 3,
    category: "Interiors",
    title: "Ghat View Apartment, Varanasi",
    description: "Interior design that blends traditional Banarasi elements with modern comforts, offering serene views of the Ganges.",
    imageUrl: "/project/varanasi/ghat view apartment.jpg",
    aiHint: "apartment interior ganges",
    city: "Varanasi",
    area: "1,800 sq.ft.",
    timeline: "3 Months",
    status: "Completed",
    crn: "CRN211863",
    featured: true,
  },
  {
    id: 4,
    category: "Renovation",
    title: "Historic Haveli Restoration, Shivala Ghat",
    description: "Careful restoration of a century-old haveli, preserving its architectural heritage while integrating modern amenities.",
    imageUrl: "/project/varanasi/Hestorical haveli restoration, shivala ghat.jpg",
    aiHint: "historic indian haveli",
    city: "Varanasi",
    area: "3,200 sq.ft.",
    timeline: "9 Months",
    status: "Completed",
    crn: "CRN211864",
    featured: true,
  },
  {
    id: 5,
    category: "Construction",
    title: "Suburban Family Home, Sohna Road",
    description: "New construction of a 4-bedroom family home with a vastu-compliant design and a beautifully landscaped garden.",
    imageUrl: "/project/gurugram/Suburban Family Home, Sohna Road.jpg",
    aiHint: "suburban family home",
    city: "Gurugram",
    area: "2,800 sq.ft.",
    timeline: "10 Months",
    status: "Completed",
    crn: "CRN211865",
    featured: true,
  },
  {
    id: 6,
    category: "Interiors",
    title: "Minimalist Cafe Design, Koramangala",
    description: "A calm and inviting space for a local cafe, using natural materials like wood and stone to create a minimalist aesthetic.",
    imageUrl: "/project/banglore/Minimalist Cafe Design, Koramangala.jpg",
    aiHint: "minimalist cafe interior",
    city: "Bengaluru",
    area: "800 sq.ft.",
    timeline: "6 Weeks",
    status: "Completed",
    crn: "CRN211866",
    featured: true,
  },
  {
    id: 7,
    category: "Construction",
    title: "Eco-Friendly Office, Electronic City",
    description: "A sustainable office building with solar panels, rainwater harvesting, and green materials, designed for a leading tech startup.",
    imageUrl: "/project/banglore/Eco-Friendly Office, Electronic City.jpg",
    aiHint: "modern office building",
    city: "Bengaluru",
    area: "15,000 sq.ft.",
    timeline: "18 Months",
    status: "Completed",
    crn: "CRN211867",
    featured: true
  },
  {
    id: 8,
    category: "Renovation",
    title: "Bathroom Remodel, DLF Phase 3",
    description: "Transforming an outdated bathroom into a spa-like retreat with modern fixtures, a walk-in shower, and ambient lighting.",
    imageUrl: "/project/gurugram/Bathroom Remodel, DLF Phase 3.jpg",
    aiHint: "luxury bathroom remodel",
    city: "Gurugram",
    area: "150 sq.ft.",
    timeline: "4 Weeks",
    status: "Completed",
    crn: "CRN211868",
    featured: true,
  },
  {
    id: 9,
    category: "Interiors",
    title: "Boutique Retail Store, Lanka",
    description: "Designing a unique and engaging retail space for a fashion boutique, focusing on brand identity and customer experience.",
    imageUrl: "/project/varanasi/Boutique retail store, lanka.jpg",
    aiHint: "boutique store interior",
    city: "Varanasi",
    area: "600 sq.ft.",
    timeline: "1 Month",
    status: "Completed",
    crn: "CRN211869",
    featured: true,
  },
  {
    id: 10,
    category: "Construction",
    title: "Modern Farmhouse, Whitefield",
    description: "A spacious farmhouse blending rustic charm with modern amenities, set on a large plot in a serene part of Bengaluru.",
    imageUrl: "/project/banglore/Construction Modern Farmhouse, Whitefield.jpg",
    aiHint: "modern farmhouse exterior",
    city: "Bengaluru",
    area: "3,500 sq.ft.",
    timeline: "11 Months",
    status: "Completed",
    crn: "CRN211870",
  },
  {
    id: 11,
    category: "Renovation",
    title: "Ghat-side Guest House Upgrade",
    description: "Full renovation and modernization of a guest house near Dashashwamedh Ghat to enhance the tourist experience.",
    imageUrl: "/project/varanasi/Ghat side guest house.jpg",
    aiHint: "guesthouse exterior india",
    city: "Varanasi",
    area: "5,000 sq.ft.",
    timeline: "6 Months",
    status: "Ongoing",
    crn: "CRN211872",
  },
];


export const CITIES_COVERED = [
  "Bengaluru", "Varanasi", "Gurugram"
];

export type Testimonial = {
  name: string;
  city: "Varanasi" | "Bengaluru" | "Gurugram";
  text: string;
  rating: number;
  image: string;
  package: "Basic Package" | "Premium Package";
  crn: string;
  year: number;
  projectType: string;
}

export const TESTIMONIALS: Testimonial[] = [
  { name: 'Akshat Singh', city: 'Varanasi', text: "After a Lifetime of service, we needed someone we could rely on-and we found utkarsh next era. Their team handled everything with such care.", rating: 4, image: "/happy_customers/happy_customers(3).jpg", package: "Premium Package", crn: "211861", year: 2024, projectType: "4BHK House Construction" },
  { name: 'Lucky Pandey', city: 'Varanasi', text: "Building by the ghats was complex, but utkarsh next era handled it flawlessly. Their respect for local heritage and modern needs is commendable.", rating: 5, image: "/happy_customers/happy_customers(4).jpg", package: "Premium Package", crn: "211862", year: 2024, projectType: "Haveli Restoration" },
  { name: 'Dr. Akhand Rai', city: 'Varanasi', text: "As a doctor, I value precision and trust. utkarsh next era delivered on both. Our clinic was completed on schedule and to the highest standards.", rating: 5, image: "/happy_customers/happy_customers(5).jpg", package: "Basic Package", crn: "211863", year: 2023, projectType: "Clinic Interior" },

  { name: 'Hardik Hegde', city: 'Bengaluru', text: "May 10th, the day I can never forget. The day we moved into our beautiful new home. Thank you, utkarsh next era, for making our dream a reality.", rating: 5, image: "/happy_customers/happy_customers(6).jpg", package: "Premium Package", crn: "178346", year: 2024, projectType: "3BHK Villa Construction" },
  { name: 'Sujeet Singhania', city: 'Bengaluru', text: "The transparency and professionalism shown by Utkarsh Next Era was exceptional. The app tracking feature gave us peace of mind throughout the construction process. Our dream home was completed on time and within budget.", rating: 5, image: "/happy_customers/happy_customers(7).jpg", package: "Basic Package", crn: "178347", year: 2023, projectType: "2BHK Apartment Renovation" },
  { name: 'Akanksha Singh', city: 'Bengaluru', text: "Their interior design team is phenomenal. They understood my style perfectly and created a home that's both beautiful and functional.", rating: 4, image: "/happy_customers/happy_customers(8).jpg", package: "Basic Package", crn: "178348", year: 2024, projectType: "Full Home Interior" },

  { name: 'Priya Rajan', city: 'Gurugram', text: "We looked at so many apartments, but nothing felt like home. utkarsh next era built us a home that feels like it was made just for us.", rating: 5, image: "/happy_customers/happy_customers(2).jpg", package: "Premium Package", crn: "62781", year: 2024, projectType: "5BHK Duplex Construction" },
  { name: 'Sneha Chaturvedi', city: 'Gurugram', text: "We were impressed with the quality of materials and the speed of construction. Our dream home was ready before we expected!", rating: 5, image: "/happy_customers/happy_customers(1).jpg", package: "Basic Package", crn: "62782", year: 2023, projectType: "Independent House" },
  { name: 'Jay Mangal', city: 'Gurugram', text: "They constructed our new co-working hub. The project was large-scale, but their team managed it with efficiency and expertise.", rating: 5, image: "/happy_customers/happy_customers(9).jpg", package: "Premium Package", crn: "62783", year: 2022, projectType: "Commercial Space" },
];

export const FOOTER_LINKS = {
  services: [
    { href: "/projects", label: "Home Construction" },
    { href: "/sell-property", label: "Property Buying/Selling" },
    { href: "/projects", label: "Interior Design" },
    { href: "/how-it-works", label: "Our Process" },
  ],
  resources: [
    { href: "/cost-calculator", label: "Cost Calculator" },
    { href: "/floor-plans", label: "Floor Plans" },
    { href: "/projects", label: "Project Gallery" },
    { href: "/blog", label: "Blog" },
  ],
  company: [
    { href: "/contact", label: "About Us" },
    { href: "/careers", label: "Careers" },
    { href: "/contact", label: "Contact" },
  ],
  support: [
    { href: "/smart-faq", label: "Smart FAQ" },
    { href: "/contact", label: "Contact Support" },
  ],
  legal: [
    { href: "#", label: "Privacy Policy" },
    { href: "#", label: "Terms of Service" },
  ],
};


export const SOCIAL_LINKS: { name: string; icon: LucideIcon; href: string }[] = [
  { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/utkarshproperties' },
];

// --- PACKAGES DATA REFACTORED ---

export type Package = {
  name: "Basic" | "Classic" | "Premium" | "Royale" | "Luxe" | "Elegance" | "Opulence" | "Imperial";
  price: number; // This will now be a base price, city-specific prices will be applied separately
  description: string;
  highlights: string[];
  isPopular?: boolean;
  brands: { name: string; logoUrl: string }[];
};

export type PackageType = "Homes" | "Luxury Homes";

const packageBaseData: Record<PackageType, Omit<Package, 'price'>[]> = {
  "Homes": [
    {
      name: "Basic",
      description: "A budget package with no compromise on quality that includes all construction essentials.",
      highlights: ["Trusted brand steel & cement", "Standard floor tiles upto ₹50/sqft", "Standard flush doors and window finish", "Tractor Emulsion finish", "Essential kitchen & bathroom fittings"],
      brands: [
        { name: "Sunvik", logoUrl: "https://res.cloudinary.com/det1mbp5s/image/upload/v1722244265/sunvik-steel-logo_pkldxl.png" },
        { name: "Dalmia", logoUrl: "https://res.cloudinary.com/det1mbp5s/image/upload/v1722244264/dalmia-cement-logo_x9p4qc.png" },
        { name: "Asian Paints", logoUrl: "https://res.cloudinary.com/det1mbp5s/image/upload/v1722244263/asian-paints-logo_yv8tnj.png" },
        { name: "Cera", logoUrl: "https://res.cloudinary.com/det1mbp5s/image/upload/v1722244264/cera-logo_b7h2ks.png" },
      ]
    },
    {
      name: "Classic",
      description: "Our best seller with upgraded brands like Jindal Steels, Hindware etc at a considerable price.",
      highlights: ["Superior brand steel & cement", "Refined floor tiles upto ₹100/sqft", "Elegant teak doors and window finish", "Tractor Shyne Emulsion finish", "Stylish kitchen & bathroom"],
      isPopular: true,
      brands: [
        { name: "Jindal", logoUrl: "https://res.cloudinary.com/det1mbp5s/image/upload/v1722244264/jindal-steel-logo_j4sk7u.png" },
        { name: "Dalmia", logoUrl: "https://res.cloudinary.com/det1mbp5s/image/upload/v1722244264/dalmia-cement-logo_x9p4qc.png" },
        { name: "Asian Paints", logoUrl: "https://res.cloudinary.com/det1mbp5s/image/upload/v1722244263/asian-paints-logo_yv8tnj.png" },
        { name: "Hindware", logoUrl: "https://res.cloudinary.com/det1mbp5s/image/upload/v1722244264/hindware-logo_z0j5rs.png" },
      ]
    },
    {
      name: "Premium",
      description: "An elegant package for modern living with extra provisions like solar heater setup, puja room door etc.",
      highlights: ["Superior Brand steel & cement", "Premium floor tiles upto ₹140/sqft", "Designer teak doors and window finish", "Apcolite Premium finish", "Quality kitchen & bathroom"],
      brands: [
        { name: "Jindal", logoUrl: "https://res.cloudinary.com/det1mbp5s/image/upload/v1722244264/jindal-steel-logo_j4sk7u.png" },
        { name: "UltraTech", logoUrl: "https://res.cloudinary.com/det1mbp5s/image/upload/v1722244265/ultratech-cement-logo_cjwq0z.png" },
        { name: "Asian Paints", logoUrl: "https://res.cloudinary.com/det1mbp5s/image/upload/v1722244263/asian-paints-logo_yv8tnj.png" },
        { name: "Jaquar", logoUrl: "https://res.cloudinary.com/det1mbp5s/image/upload/v1722244264/jaquar-logo_a9zvye.png" },
      ]
    },
    {
      name: "Royale",
      description: "An ultimate plan with high-end finishes and amenities like EV charging, copper gas connection etc.",
      highlights: ["Superior brand steel & cement", "Lavish floor tiles upto ₹160/sqft", "Designer teak doors and window finish", "Apex Ultima Exterior finish", "Lavish Fittings for kitchen & bathroom"],
      brands: [
        { name: "Jindal", logoUrl: "https://res.cloudinary.com/det1mbp5s/image/upload/v1722244264/jindal-steel-logo_j4sk7u.png" },
        { name: "UltraTech", logoUrl: "https://res.cloudinary.com/det1mbp5s/image/upload/v1722244265/ultratech-cement-logo_cjwq0z.png" },
        { name: "Asian Paints", logoUrl: "https://res.cloudinary.com/det1mbp5s/image/upload/v1722244263/asian-paints-logo_yv8tnj.png" },
        { name: "Kohler", logoUrl: "https://res.cloudinary.com/det1mbp5s/image/upload/v1722244264/kohler-logo_kcrzwr.png" },
      ]
    },
  ],
  "Luxury Homes": [
    {
      name: "Luxe",
      description: "Entry-level luxury with premium fittings and enhanced architectural design for a sophisticated lifestyle.",
      highlights: ["Italian Marble Flooring", "Smart Home Automation (Basic)", "Designer Modular Kitchen", "VRV/VRF Air Conditioning", "Premium Landscaping"],
      brands: [],
    },
    {
      name: "Elegance",
      description: "A step-up in luxury with bespoke interiors and superior finishes.",
      highlights: ["Advanced Home Automation", "Imported Bathroom Fixtures", "Private Elevator Provision", "Custom Wardrobes", "High-end Security Systems"],
      isPopular: true,
      brands: [],
    },
    {
      name: "Opulence",
      description: "Uncompromised luxury with top-of-the-line materials and exclusive features.",
      highlights: ["Temperature-controlled Pool", "Home Theatre System", "Fully-equipped Gym", "Sauna & Steam Room", "Centralized HVAC"],
      brands: [],
    },
    {
      name: "Imperial",
      description: "The pinnacle of luxury living with unparalleled craftsmanship and state-of-the-art technology.",
      highlights: ["Bespoke Architectural Design", "Fully Automated Smart Home", "Private Rooftop Garden", "Concierge Services", "Climate-controlled Wine Cellar"],
      brands: [],
    },
  ]
};

const cityPackagePrices: Record<string, Record<PackageType, Record<Package['name'], number>>> = {
  "Bengaluru": {
    "Homes": { Basic: 1900, Classic: 2030, Premium: 2350, Royale: 2585, Luxe: 0, Elegance: 0, Opulence: 0, Imperial: 0 },
    "Luxury Homes": { Luxe: 3910, Elegance: 4500, Opulence: 5200, Imperial: 6000, Basic: 0, Classic: 0, Premium: 0, Royale: 0 }
  },
  "Varanasi": {
    "Homes": { Basic: 1850, Classic: 1980, Premium: 2250, Royale: 2485, Luxe: 0, Elegance: 0, Opulence: 0, Imperial: 0 },
    "Luxury Homes": { Luxe: 3810, Elegance: 4400, Opulence: 5100, Imperial: 5900, Basic: 0, Classic: 0, Premium: 0, Royale: 0 }
  },
  "Gurugram": {
    "Homes": { Basic: 1950, Classic: 2100, Premium: 2400, Royale: 2650, Luxe: 0, Elegance: 0, Opulence: 0, Imperial: 0 },
    "Luxury Homes": { Luxe: 4010, Elegance: 4600, Opulence: 5300, Imperial: 6100, Basic: 0, Classic: 0, Premium: 0, Royale: 0 }
  }
};

type PackagesByCity = Record<string, Record<PackageType, Package[]>>;

export const PACKAGES_DATA: PackagesByCity = Object.keys(cityPackagePrices).reduce((acc, city) => {
  acc[city] = {
    "Homes": packageBaseData["Homes"].map(pkg => ({
      ...pkg,
      price: cityPackagePrices[city]["Homes"][pkg.name]
    })),
    "Luxury Homes": packageBaseData["Luxury Homes"].map(pkg => ({
      ...pkg,
      price: cityPackagePrices[city]["Luxury Homes"][pkg.name]
    }))
  };
  return acc;
}, {} as PackagesByCity);


export type PackageComparisonData = {
  features: {
    feature: string;
    packages: {
      Basic: string | boolean;
      Classic: string | boolean;
      Premium: string | boolean;
      Royale: string | boolean;
    }
  }[];
}

export const packageComparisonData: PackageComparisonData = {
  features: [
    { feature: "Structure", packages: { Basic: "TMT Steel: Sunvik/Equivalent", Classic: "TMT Steel: JSW/Jindal/Equivalent", Premium: "TMT Steel: JSW/Jindal/Equivalent", Royale: "TMT Steel: JSW/Jindal/Equivalent" } },
    { feature: "Kitchen", packages: { Basic: "Granite top (20mm)", Classic: "Granite top (20mm)", Premium: "Granite top (25mm)", Royale: "Granite top (30mm)" } },
    { feature: "Bathroom", packages: { Basic: "CP fittings: Cera/Equivalent", Classic: "CP fittings: Hindware/Equivalent", Premium: "CP fittings: Jaquar/Equivalent", Royale: "CP fittings: Kohler/Equivalent" } },
    { feature: "Doors & Windows", packages: { Basic: "Standard flush doors", Classic: "Teak wood frame with flush shutter", Premium: "Designer teak wood doors", Royale: "Designer teak wood doors" } },
    { feature: "Painting", packages: { Basic: "Tractor Emulsion", Classic: "Tractor Shyne Emulsion", Premium: "Apcolite Premium Emulsion", Royale: "Royale Aspira Emulsion" } },
    { feature: "Flooring", packages: { Basic: "Upto ₹50/sqft", Classic: "Upto ₹100/sqft", Premium: "Upto ₹140/sqft", Royale: "Upto ₹160/sqft" } },
    { feature: "Electrical", packages: { Basic: "Anchor/Equivalent switches", Classic: "Anchor/Equivalent modular switches", Premium: "Legrand/Equivalent modular switches", Royale: "Schneider/Equivalent modular switches" } },
    { feature: "EV Charging Point", packages: { Basic: false, Classic: false, Premium: true, Royale: true } },
    { feature: "Solar Water Heater", packages: { Basic: false, Classic: false, Premium: true, Royale: true } },
  ]
};
export const JobOpenings = [
  {
    id: 1,
    title: "Senior Civil Engineer",
    department: "Engineering",
    location: "Varanasi, Uttar Pradesh",
    type: "Full-time",
    experience: "5+ years",
    description: "Lead civil engineering projects from conception to completion. Oversee structural design, project planning, and construction management.",
    requirements: ["Bachelor's degree in Civil Engineering", "5+ years of experience", "AutoCAD proficiency", "Project management skills"],
    posted: "2 days ago"
  },
  {
    id: 2,
    title: "Project Manager",
    department: "Construction",
    location: "Varanasi, Uttar Pradesh",
    type: "Full-time",
    experience: "3-5 years",
    description: "Manage construction projects from start to finish, ensuring timely delivery, quality standards, and budget adherence.",
    requirements: ["PMP certification preferred", "Construction industry experience", "Strong leadership skills", "Budget management experience"],
    posted: "1 week ago"
  },
  {
    id: 3,
    title: "Architectural Designer",
    department: "Design",
    location: "Varanasi, Uttar Pradesh",
    type: "Full-time",
    experience: "2-4 years",
    description: "Create innovative architectural designs for residential and commercial projects. Collaborate with clients and engineering teams.",
    requirements: ["Architecture degree", "Proficiency in Revit/AutoCAD", "Creative problem-solving", "Client communication skills"],
    posted: "3 days ago"
  },
  {
    id: 4,
    title: "Construction Foreman",
    department: "Construction",
    location: "Varanasi, Uttar Pradesh",
    type: "Full-time",
    experience: "7+ years",
    description: "Supervise construction crews, ensure safety compliance, and maintain quality standards on active job sites.",
    requirements: ["Construction industry experience", "Leadership skills", "Safety certification", "Problem-solving abilities"],
    posted: "5 days ago"
  },
  {
    id: 5,
    title: "Marketing Specialist",
    department: "Marketing",
    location: "Remote",
    type: "Full-time",
    experience: "2-3 years",
    description: "Develop and execute marketing strategies to promote our construction services and build brand awareness.",
    requirements: ["Marketing degree", "Digital marketing experience", "Content creation skills", "Analytics proficiency"],
    posted: "1 week ago"
  },
  {
    id: 6,
    title: "Safety Coordinator",
    department: "Safety",
    location: "Varanasi, Uttar Pradesh",
    type: "Full-time",
    experience: "3+ years",
    description: "Develop and implement safety programs, conduct site inspections, and ensure OSHA compliance across all projects.",
    requirements: ["Safety certification", "OSHA training", "Construction experience", "Attention to detail"],
    posted: "4 days ago"
  }
];


export const BlogPosts = [
  {
    id: 1,
    title: "Top 10 Home Renovation Trends for 2025",
    description: "Discover the latest home renovation trends that are transforming modern living spaces this year.",
    image: "/blogs/Top 10 Home Renovation Trends for 2025 .png",
    author: "Priya Sharma",
    date: "March 15, 2025",
    category: "Design Trends",
    slug: "home-renovation-trends-2025"
  },
  {
    id: 2,
    title: "Sustainable Construction: Building for the Future",
    description: "Learn how eco-friendly construction practices are revolutionizing the building industry.",
    image: "/blogs/Sustainable Construction Building for the Future.png",
    author: "Arjun Patel",
    date: "March 10, 2025",
    category: "Sustainability",
    slug: "sustainable-construction-future"
  },
  {
    id: 3,
    title: "Smart Home Integration in New Constructions",
    description: "Explore how smart technology is being seamlessly integrated into modern construction projects.",
    image: "/blogs/Smart Home Integration in New Constructions.png",
    author: "Kavya Reddy",
    date: "March 5, 2025",
    category: "Technology",
    slug: "smart-home-integration"
  },
  {
    id: 4,
    title: "Budget-Friendly Kitchen Renovation Ideas",
    description: "Transform your kitchen without breaking the bank with these creative and cost-effective renovation tips.",
    image: "/blogs/Budget-Friendly Kitchen Renovation Ideas.png",
    author: "Rohit Gupta",
    date: "February 28, 2025",
    category: "Renovation",
    slug: "budget-kitchen-renovation"
  },
  {
    id: 5,
    title: "The Ultimate Guide to Bathroom Remodeling",
    description: "Everything you need to know about planning and executing a successful bathroom renovation project.",
    image: "/blogs/The Ultimate Guide to Bathroom Remodeling.png",
    author: "Ananya Singh",
    date: "February 22, 2025",
    category: "Renovation",
    slug: "bathroom-remodeling-guide"
  },
  {
    id: 6,
    title: "Energy-Efficient Building Materials: A Complete Guide",
    description: "Discover the best energy-efficient materials for your next construction or renovation project.",
    image: "/blogs/Energy-Efficient Building Materials A Complete Guide.png",
    author: "Vikram Nair",
    date: "February 18, 2025",
    category: "Materials",
    slug: "energy-efficient-materials-guide"
  }
];

export type CloserLookPackage = {
  name: "Basic" | "Classic" | "Premium" | "Royale";
  mainImage: string;
  title: string;
  description: string;
};

export const CLOSER_LOOK_DATA: CloserLookPackage[] = [
  {
    name: "Basic",
    mainImage: "/closer_look/Foundation%20of%20Qualit.jpg",
    title: "Foundation of Quality",
    description: "Our Basic package provides a strong, reliable foundation for your dream home, using trusted materials for lasting quality."
  },
  {
    name: "Classic",
    mainImage: "/closer_look/Enhanced%20for%20Modern%20.png",
    title: "Enhanced for Modern Living",
    description: "The Classic package elevates your home with superior materials and refined finishes, blending durability with style."
  },
  {
    name: "Premium",
    mainImage: "/closer_look/Elegance%20in%20Every%20De.png",
    title: "Elegance in Every Detail",
    description: "Experience superior craftsmanship with our Premium package, featuring top-tier brands and future-ready amenities."
  },
  {
    name: "Royale",
    mainImage: "/closer_look/The%20Ultimate%20in%20Luxu.png",
    title: "The Ultimate in Luxury",
    description: "Indulge in unparalleled luxury. The Royale package offers world-class fittings and exclusive features for a truly exceptional home."
  }
];


export const CATEGORIZED_FAQ_DATA: Record<string, { question: string; answer: string }[]> = {
  "General & Company": [
    {
      question: "What types of construction projects do you handle?",
      answer: "We handle a wide range of projects including residential homes, commercial buildings, renovations, and interior design. Our team is equipped to manage projects of all sizes and complexities."
    },
    {
      question: "In which cities do you operate?",
      answer: "We currently offer our construction and renovation services in Bengaluru, Varanasi, and Gurugram. We are continuously expanding our operations to new locations."
    },
    {
      question: "Do you offer a warranty for your construction work?",
      answer: "Absolutely. We stand by the quality of our work with a 10-year structural warranty on all our construction projects. We also provide a one-year warranty on workmanship for interiors and renovations."
    },
  ],
  "Our Process": [
    {
      question: "What is the typical timeline for a construction project?",
      answer: "The timeline for a construction project varies greatly depending on the scope and complexity. A standard home renovation might take 3-6 months, while a new custom home construction can take anywhere from 12 to 18 months. We provide a detailed project schedule before we begin."
    },
    {
      question: "Can I make changes to the project after construction has started?",
      answer: "Yes, you can make changes. We use a formal change order process to document any modifications. This ensures that you are aware of how the change will affect the project's timeline and budget before you approve it."
    },
    {
      question: "How do you keep clients updated on the project's progress?",
      answer: "We believe in complete transparency. We provide regular updates through our online project tracking portal, conduct scheduled site visits with clients, and have a dedicated project manager as a single point of contact for all your queries."
    },
  ],
  "Quality & Materials": [
    {
      question: "How do you ensure the quality of materials and workmanship?",
      answer: "We have a rigorous quality assurance process. We source materials from trusted suppliers who meet our high standards, and our construction team consists of skilled, experienced professionals. We conduct over 470 quality checks (QASCON) throughout the project lifecycle."
    },
    {
      question: "Can I choose my own brands for materials and fittings?",
      answer: "Yes. While our packages come with a list of reputed brands, we are flexible. You can customize the brands and materials based on your preferences, and we will adjust the budget accordingly."
    },
  ],
  "Budget & Payments": [
    {
      question: "How is the project budget managed?",
      answer: "We provide a detailed and transparent budget at the outset. All costs are tracked meticulously, and we provide regular financial updates. Any potential changes to the budget are communicated and approved by you in advance, so there are no surprises."
    },
    {
      question: "What is your payment schedule?",
      answer: "Our payment schedule is tied to construction milestones. You only pay for the work that is completed, ensuring your investment is secure. We do not require a large up-front advance."
    }
  ]
};
