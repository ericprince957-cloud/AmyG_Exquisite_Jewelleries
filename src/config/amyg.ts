// ============================================================
// AmyG's Exquisite Jewelleries – Brand, Catalog & Payment Config
// ============================================================
// HOW TO ADD PRODUCTS:
// Add entries to the `products` array below following the
// Product interface. The shop, cart and checkout update
// automatically — no other code changes needed.
// ============================================================

export const brandConfig = {
  name: "AmyG's Exquisite Jewelleries",
  shortName: "AmyG's",
  monogram: "AG",
  logo: "https://i.supaimg.com/1de2246f-c5c0-49ee-90b4-e66f91808884/1396d133-d959-41d1-8135-49ae0ec2adfc.jpg",
  tagline: "Timeless Elegance, Delivered",
  description:
    "AmyG's Exquisite Jewelleries brings affordable luxury to every Nigerian woman. From stunning watches to elegant boxed sets, we curate pieces that make you shine.",
  whatsapp: "2348012345678", // Replace with actual WhatsApp number (international format, no +)
  phone: "+234 801 234 5678",
  instagram: "@amys_exquisite_jewelleries",
  email: "amysjewelleries@gmail.com",
  location: "Lagos, Nigeria",
  colors: {
    ivory: "#FAF6EF",
    champagne: "#B08D57",
    charcoal: "#29241E",
  },
};

// ------------------------------------------------------------
// Product catalog
// ------------------------------------------------------------
// Six demo products are included below so the shop, cart and
// checkout can be tested end-to-end. Replace or remove them
// when the real collection is ready — three of the images are
// SVG illustrations in /public/images you can swap for photos.

export interface Product {
  id: string;
  name: string;
  price: number; // in Naira
  description: string;
  features: string[];
  images: string[];
  category: string;
  inStock: boolean;
  badge?: string;
  testimonial?: {
    text: string;
    author: string;
    location: string;
  };
}

export const products: Product[] = [
  {
    id: "aurelia-gold-watch",
    name: "Aurelia Gold Watch",
    price: 45000,
    description:
      "A statement of quiet sophistication. The Aurelia pairs a slim champagne-gold case with a mother-of-pearl dial and a soft cream leather strap — the kind of piece that quietly finishes every outfit.",
    features: [
      "Champagne-gold stainless steel case",
      "Mother-of-pearl dial",
      "Genuine leather strap",
      "Water-resistant (3ATM)",
      "Gift box included",
      "1-year warranty",
    ],
    images: ["https://mistralaichatupprodswe.blob.core.windows.net/chat-images/assistant/0c/20/c7/0c20c743-397b-4b89-a8c4-6def174c6a4e/1c335166-c661-4519-98bf-3ad82b607ec8/3adf1109-2a36-4336-ae44-09042dae52b6/91d0f8b6-b638-4212-80e0-fc2c86e5b301.jpg"],
    category: "Watches",
    inStock: true,
    badge: "Bestseller",
    testimonial: {
      text: "I wore it to a wedding and everyone kept asking where I got it. AmyG's never disappoints!",
      author: "Adaeze",
      location: "Lagos",
    },
  },
  {
    id: "chunky-gold-bangles",
    name: "Chunky Gold Bangles",
    price: 18000,
    description:
      "Bold, beautiful, unapologetically you. Stack all three or wear them solo — either way, they turn heads.",
    features: [
      "Hypoallergenic gold-plated brass",
      "Tarnish-resistant coating",
      "Comfortable fit for all wrist sizes",
      "Set of 3 bangles",
      "Gift-ready packaging",
    ],
    images: ["https://mistralaichatupprodswe.blob.core.windows.net/chat-images/assistant/0c/20/c7/0c20c743-397b-4b89-a8c4-6def174c6a4e/1c335166-c661-4519-98bf-3ad82b607ec8/55ac2d81-e1c8-4d65-a205-0a94a9060b8c/49afc52e-6e85-4034-b06b-c5e570ee018d.jpg"],
    category: "Bangles",
    inStock: true,
    badge: "New",
  },
  {
    id: "isadora-pearl-pendant",
    name: "Isadora Pearl Pendant",
    price: 25000,
    description:
      "One perfect pearl on a delicate gold chain. Understated elegance for office days, dinner dates and everything in between.",
    features: [
      "Lustrous freshwater pearl",
      "18k gold-plated chain",
      "Adjustable length",
      "Tarnish-resistant finish",
      "Gift box included",
    ],
    images: ["https://mistralaichatupprodswe.blob.core.windows.net/chat-images/assistant/0c/20/c7/0c20c743-397b-4b89-a8c4-6def174c6a4e/1c335166-c661-4519-98bf-3ad82b607ec8/74d4cb90-f3e6-4a06-b1a2-bfa4d09babd9/4a07c144-ae79-46ad-9750-8dd65466eff3.jpg"],
    category: "Necklaces",
    inStock: true,
  },
  {
    id: "lumiere-hoop-earrings",
    name: "Lumière Hoop Earrings",
    price: 12500,
    description:
      "Polished gold hoops with a subtle textured shine. Light enough to wear all day, luminous enough for all night.",
    features: [
      "Lightweight polished hoops",
      "Hypoallergenic posts",
      "Secure clasp",
      "Tarnish-resistant finish",
    ],
    images: ["/images/demo-hoop-earrings.svg"],
    category: "Earrings",
    inStock: true,
  },
  {
    id: "rose-crystal-ring",
    name: "Rosé Crystal Cocktail Ring",
    price: 9800,
    description:
      "A pale-pink crystal set in a warm gold band — your new go-to for owambe Saturdays and dinner dates alike.",
    features: [
      "Pale pink crystal center stone",
      "Gold-tone band",
      "Eye-catching yet comfortable",
      "Sizes 6–9 available",
    ],
    images: ["/images/demo-cocktail-ring.svg"],
    category: "Rings",
    inStock: true,
  },
  {
    id: "bella-boxed-gift-set",
    name: "Bella Boxed Gift Set",
    price: 65000,
    description:
      "Necklace, earrings and a tennis bracelet in one cream satin gift box. The easiest yes when you want to spoil someone — including yourself.",
    features: [
      "3-piece matching set",
      "Necklace, earrings & bracelet",
      "Cream satin gift box",
      "Tarnish-resistant finish",
      "Ready to gift — no wrapping needed",
    ],
    images: ["/images/demo-gift-set.svg"],
    category: "Gift Sets",
    inStock: true,
    badge: "Gift-ready",
    testimonial: {
      text: "Bought this for my sister's birthday and she almost cried. The packaging is so gorgeous I didn't even need wrapping paper.",
      author: "Chiamaka",
      location: "Abuja",
    },
  },
];

// ------------------------------------------------------------
// Cart & delivery
// ------------------------------------------------------------
export const cartConfig = {
  deliveryFee: 3500, // flat nationwide delivery fee (₦)
  freeDeliveryThreshold: 150000, // free delivery above this subtotal (₦)
};

// ------------------------------------------------------------
// Payment (DEMO ONLY)
// ------------------------------------------------------------
// This checkout is a demo: no personal details are collected
// and no real payment is processed. Replace these placeholder
// bank details (and wire up a real payment processor) before
// launching for real customers.
export const paymentConfig = {
  demoMode: true,
  testCard: "4242 4242 4242 4242",
  bankTransfer: {
    bankName: "Demo Bank Nigeria", // replace with real bank
    accountName: "AmyG's Exquisite Jewelleries",
    accountNumber: "0123456789", // replace with real account number
  },
};

// ------------------------------------------------------------
// Helpers
// ------------------------------------------------------------

// Format Nigerian Naira prices
export const formatPrice = (price: number): string => {
  return `₦${price.toLocaleString("en-NG")}`;
};

// Generate a short, unique-looking order reference (demo)
export const generateOrderRef = (): string => {
  const random = Math.random().toString(36).substring(2, 8).toUpperCase();
  return `AMYG-${random}`;
};

// Generate a WhatsApp link with a pre-filled message
export const getWhatsAppLink = (message: string): string => {
  return `https://wa.me/${brandConfig.whatsapp}?text=${encodeURIComponent(message)}`;
};

// Pre-filled messages
export const whatsappMessages = {
  general: `Hi ${brandConfig.shortName}, I'm interested in your jewellery collection!`,
  order: (productName: string, price: number) =>
    `Hi, I want to order ${productName} at ${formatPrice(price)}. Is it available?`,
  enquiry: (productName: string) =>
    `Hi, I'd like to enquire about the ${productName}. Can you share more details?`,
};
