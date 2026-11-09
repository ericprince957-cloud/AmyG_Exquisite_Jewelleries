# AmyG's Exquisite Jewelleries – Digital Showroom

A luxury mobile-first jewelry catalog built for Nigerian WhatsApp commerce.

## 🎯 Overview

This is a premium, mobile-first jewelry e-commerce demo designed for the Nigerian market. It integrates seamlessly with WhatsApp for ordering — no complex checkout needed.

## 🚀 Features

- **Mobile-First Design**: Optimized for Nigerian smartphones (Tecno, Infinix, etc.)
- **WhatsApp Commerce**: All ordering happens via WhatsApp with pre-filled messages
- **Luxury Aesthetic**: Cartier-inspired design with Lagos market accessibility
- **Fast Performance**: Lightweight, optimized images, smooth animations
- **Offline Resilient**: Minimal dependencies, works on spotty networks
- **Touch Optimized**: 48px+ touch targets for easy one-handed use

## 🛠️ Tech Stack

- React 18 + TypeScript
- React Router v6
- Tailwind CSS v4
- Framer Motion (animations)
- Lucide React (icons)
- Vite (build tool)

## 📁 Project Structure

```
src/
├── config/
│   └── amyg.ts          # Brand & product configuration (EDIT THIS)
├── components/
│   ├── Header.tsx        # Navigation header
│   └── StickyWhatsApp.tsx # Mobile sticky CTA bar
├── pages/
│   ├── HomePage.tsx      # Homepage with hero, products, trust badges
│   ├── ProductDetailPage.tsx # Individual product view
│   └── AboutPage.tsx     # Brand story & contact
├── App.tsx               # Router setup
├── main.tsx              # Entry point
└── index.css             # Tailwind + custom styles
```

## 🎨 How to Customize for Next Client

All content is controlled from **ONE file**: `src/config/amyg.ts`

### Step 1: Update Brand Info
```typescript
export const brandConfig = {
  name: "Your Brand Name",
  shortName: "YourBrand",
  monogram: "YB",
  tagline: "Your Tagline Here",
  description: "Your brand description...",
  whatsapp: "234XXXXXXXXXX", // International format, no +
  phone: "+234 XXX XXX XXXX",
  instagram: "@yourhandle",
  email: "your@email.com",
  location: "City, Country",
};
```

### Step 2: Add Products
```typescript
export const products: Product[] = [
  {
    id: "unique-product-id",
    name: "Product Name",
    price: 25000,
    description: "Detailed product description...",
    features: ["Feature 1", "Feature 2", "Feature 3"],
    images: ["path/to/image.jpg"],
    category: "Category Name",
    inStock: true,
    testimonial: {
      text: "Customer review text",
      author: "Customer Name",
      location: "City",
    },
  },
];
```

### Step 3: Update Colors (Optional)
Edit the `@theme` block in `src/index.css`:
```css
@theme {
  --color-brand-gold: #D4AF37;  /* Change accent color */
  --color-brand-black: #0A0A0A; /* Change background */
}
```

### Step 4: Replace Images
- Replace product images in the `images` array of each product
- Replace the hero image URL in `heroImage` export
- Recommended: WebP format, max 100KB each, 800x800px for products

## 📱 WhatsApp Integration

All CTAs use `wa.me` links with pre-filled messages:
- **General enquiry**: Opens WhatsApp with greeting message
- **Order**: Pre-fills product name and price
- **Enquiry**: Pre-fills product name for questions

To test on a real phone, simply tap any WhatsApp button.

## 🚢 Deployment

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
```bash
npm run build
# Upload the dist/ folder
```

## 📋 Deliverables Checklist

- [x] Mobile-first responsive design
- [x] WhatsApp links with correct pre-fill messages
- [x] Touch targets ≥ 48px
- [x] No login required — frictionless browsing
- [x] Config file for easy rebranding
- [x] Performance optimized (lazy loading, minimal JS)
- [x] Nigerian Naira pricing format
- [x] Trust badges and social proof

## 📝 Notes

- Product images are AI-generated placeholders. Replace with actual client photos.
- WhatsApp number in config is a placeholder. Update with real business number.
- Test on actual Nigerian devices (Tecno, Infinix) before going live.
- Consider adding a service worker for offline support in production.

## License

© 2024 AmyG's Exquisite Jewelleries. All rights reserved.
