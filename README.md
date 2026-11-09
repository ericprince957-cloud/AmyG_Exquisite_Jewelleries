# AmyG's Exquisite Jewelleries — Luxury E-Commerce Storefront

A light, champagne-and-ivory luxury jewellery storefront with a full shopping cart and a demo payment checkout (card or bank transfer). Built with React + Vite + Tailwind CSS v4.

## ✨ Features

- **Fresh redesign** — elegant light champagne/ivory theme with Playfair Display serif accents
- **Ready-to-fill catalog** — the product list is currently empty (the new collection is being curated); the shop shows a graceful "coming soon" state until products are added
- **Full cart system** — add to cart, quantity stepper, remove items, and persistent storage in `localStorage`
- **Automatic totals** — subtotal, delivery fee (free above ₦150,000) and total are calculated automatically on every change
- **Demo checkout** — pay by **card** (simulated payment with a test card form) or **bank transfer** (demo bank details, auto-generated order reference, copy buttons)
- **No personal details collected** — this is a demo; no names, addresses, phone numbers or real card data are requested
- WhatsApp contact button, fully responsive, sticky header with live cart badge

## 🛍️ Adding products

Add entries to the `products` array in `src/config/amyg.ts`:

```ts
export const products: Product[] = [
  {
    id: "gold-hoop-earrings",
    name: "Gold Hoop Earrings",
    price: 12000,
    description: "Classic 18k gold-plated hoops for everyday elegance.",
    features: ["18k gold plated", "Hypoallergenic", "Gift box included"],
    images: ["https://example.com/photo.jpg"],
    category: "Earrings",
    inStock: true,
  },
];
```

The shop grid, product detail page, cart and checkout all pick it up automatically — no other code changes needed.

## 💳 Payment configuration

`paymentConfig` in `src/config/amyg.ts` holds the demo bank details and test card. Before going live:

1. Replace the placeholder bank details with the real account.
2. Wire up a real payment processor (e.g. Paystack or Flutterwave) for the card flow.
3. Remove the demo notices.

The current checkout **simulates** payment and collects **no personal data**.

## 🚀 Running locally

```bash
npm install
npm run dev
```

Then open the printed local URL (default `http://localhost:5173`).

## 🗺️ Routes

| Route | Page |
| --- | --- |
| `/` | Home — hero, collection (or coming-soon state), how it works |
| `/products/:id` | Product detail with gallery, quantity and Add to Cart / Buy Now |
| `/cart` | Cart with auto-calculated totals |
| `/checkout` | Demo checkout — card or bank transfer |
| `/about` | Our story, values and contact |
