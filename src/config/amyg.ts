// ============================================================
// AmyG's Exquisite Jewelleries – Brand & Product Configuration
// ============================================================
// HOW TO CUSTOMIZE FOR NEXT CLIENT:
// 1. Update brand info below
// 2. Replace products array with new product data
// 3. Swap WhatsApp number
// 4. Update images (use high-quality product photos)
// ============================================================

export const brandConfig = {
  name: "AmyG's Exquisite Jewelleries",
  shortName: "AmyG's",
  monogram: "AG",
  tagline: "Timeless Elegance, Delivered",
  description:
    "AmyG's Exquisite Jewelleries brings affordable luxury to every Nigerian woman. From stunning watches to elegant boxed sets, we curate pieces that make you shine.",
  whatsapp: "2348012345678", // Replace with actual WhatsApp number (international format, no +)
  phone: "+234 801 234 5678",
  instagram: "@amys_exquisite_jewelleries",
  email: "amysjewelleries@gmail.com",
  location: "Lagos, Nigeria",
  colors: {
    black: "#0A0A0A",
    gold: "#D4AF37",
    white: "#FFFFFF",
  },
};

export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  features: string[];
  images: string[];
  category: string;
  inStock: boolean;
  testimonial?: {
    text: string;
    author: string;
    location: string;
  };
}

export const products: Product[] = [
  {
    id: "valenzo-watch",
    name: "Valenzo Watch",
    price: 45000,
    description:
      "A statement of sophistication. The Valenzo Watch combines precision engineering with luxurious design, featuring a sleek gold-tone case and premium leather strap. Perfect for the modern Nigerian woman who demands elegance in every detail.",
    features: [
      "Premium gold-tone stainless steel case",
      "Japanese quartz movement",
      "Genuine leather strap",
      "Water-resistant (3ATM)",
      "Gift box included",
      "1-Year Warranty",
    ],
    images: [
      "https://image.qwenlm.ai/generated-images/f226b5d2-c0a6-4750-a995-be5a1a71b8a2/_result.png",
    ],
    category: "Watches",
    inStock: true,
    testimonial: {
      text: "This watch is absolutely stunning! I wore it to my friend's wedding and everyone kept asking where I got it. AmyG's never disappoints!",
      author: "Adaeze",
      location: "Lagos",
    },
  },
  {
    id: "chunky-bangles",
    name: "Chunky Bangles",
    price: 6000,
    description:
      "Bold, beautiful, and unapologetically you. These chunky gold bangles add instant glamour to any outfit. Stack them or wear solo — either way, you'll turn heads.",
    features: [
      "Hypoallergenic gold-plated brass",
      "Comfortable fit for all wrist sizes",
      "Tarnish-resistant coating",
      "Set of 3 bangles",
      "Gift-ready packaging",
      "Perfect for daily wear",
    ],
    images: [
      "https://image.qwenlm.ai/generated-images/fe3ca854-8ecc-473a-9699-db5a50d4a569/_result.png",
    ],
    category: "Bracelets & Bangles",
    inStock: true,
    testimonial: {
      text: "I ordered these for my birthday and they are PERFECT. The quality is amazing for the price. Already planning to get matching ones for my bridesmaids!",
      author: "Funke",
      location: "Abuja",
    },
  },
  {
    id: "pretty-ladies-boxed-set",
    name: "Pretty Ladies Boxed Set",
    price: 35000,
    description:
      "The ultimate gift of luxury. This exquisite boxed set includes a stunning necklace, matching earrings, and a delicate bracelet — all presented in a premium gift box. Ideal for weddings, birthdays, or treating yourself.",
    features: [
      "Complete 3-piece jewelry set",
      "Hypoallergenic materials",
      "Premium velvet gift box",
      "Rhodium-plated for lasting shine",
      "Perfect for gifting",
      "1-Year Warranty",
    ],
    images: [
      "https://image.qwenlm.ai/generated-images/40637dc5-38bb-4860-b5d4-53e83d541e4c/_result.png",
    ],
    category: "Gift Sets",
    inStock: true,
    testimonial: {
      text: "The boxed set was perfect for my sister's wedding! She cried when she opened it. Thank you AmyG's for making her day so special.",
      author: "Chioma",
      location: "Abuja",
    },
  },
];

export const trustBadges = [
  { icon: "✅", text: "Authentic Pieces" },
  { icon: "🚚", text: "Nationwide Delivery" },
  { icon: "💬", text: "WhatsApp Orders" },
  { icon: "🎁", text: "Gift-Ready Packaging" },
];

export const heroImage =
  "https://image.qwenlm.ai/generated-images/d082b4c5-0061-4cdd-94c2-f2e6e9d22807/_result.png";

// Helper to format Nigerian Naira prices
export const formatPrice = (price: number): string => {
  return `₦${price.toLocaleString("en-NG")}`;
};

// Helper to generate WhatsApp link with pre-filled message
export const getWhatsAppLink = (message: string): string => {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${brandConfig.whatsapp}?text=${encoded}`;
};

// Pre-filled messages
export const whatsappMessages = {
  general: `Hi ${brandConfig.shortName}, I'm interested in your jewelry collection!`,
  order: (productName: string, price: number) =>
    `Hi, I want to order ${productName} at ${formatPrice(price)}. Is it available?`,
  enquiry: (productName: string) =>
    `Hi, I'd like to enquire about the ${productName}. Can you share more details?`,
};
