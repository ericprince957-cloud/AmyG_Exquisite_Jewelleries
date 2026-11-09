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
// The catalog is intentionally empty right now — the new
// collection is being curated. Add products below and they
// will appear on the site with full cart + checkout support.

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

export const products: Product[] = [];

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
