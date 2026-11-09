import { Link } from "react-router-dom";
import {
  brandConfig,
  products,
  getWhatsAppLink,
  whatsappMessages,
} from "../config/amyg";
import { ProductCard } from "../components/ProductCard";
import {
  CreditCard,
  Landmark,
  Truck,
  ShieldCheck,
  Sparkles,
  ShoppingBag,
  Lock,
  Gem,
  BadgeCheck,
  MessageCircle,
} from "lucide-react";

const values = [
  {
    icon: Gem,
    title: "Authentic Pieces",
    text: "Every piece is carefully sourced and quality-checked. We only sell what we'd proudly wear ourselves.",
  },
  {
    icon: BadgeCheck,
    title: "Affordable Luxury",
    text: "Looking expensive shouldn't break the bank — premium pieces at honest prices.",
  },
  {
    icon: Truck,
    title: "Nationwide Delivery",
    text: "From Lagos to Abuja, Port Harcourt to Kano — we deliver to your doorstep anywhere in Nigeria.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Checkout",
    text: "Pay by card or bank transfer through a smooth, secure checkout — with automatic totals.",
  },
];

const steps = [
  {
    number: "01",
    icon: ShoppingBag,
    title: "Browse & Add to Cart",
    text: "Explore the collection and add your favourite pieces — your cart and totals update automatically.",
  },
  {
    number: "02",
    icon: Lock,
    title: "Secure Checkout",
    text: "Pay the auto-calculated total with your card, or transfer directly from your bank app.",
  },
  {
    number: "03",
    icon: Sparkles,
    title: "Delivered & Shine",
    text: "Your order is confirmed and on its way — beautifully packaged and ready to wear.",
  },
];

export function HomePage() {
  return (
    <div className="pb-0">
      {/* Hero */}
      <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 px-4 overflow-hidden">
        {/* Decorative rings */}
        <div className="absolute top-16 right-[-90px] w-72 h-72 rounded-full border border-brand-champagne/20 animate-float-soft pointer-events-none" />
        <div className="absolute top-40 right-[-40px] w-72 h-72 rounded-full border border-brand-champagne/10 pointer-events-none" />
        <div className="absolute bottom-[-120px] left-[-80px] w-64 h-64 rounded-full bg-brand-cream/70 pointer-events-none" />

        <div className="relative max-w-4xl mx-auto text-center animate-fade-in-up">
          <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-brand-champagne mb-4">
            Luxury Jewellery · {brandConfig.location}
          </p>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold text-brand-charcoal leading-tight mb-6">
            Timeless Elegance,{" "}
            <span className="champagne-shimmer italic">Delivered</span>
          </h1>
          <p className="text-brand-mocha text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            {brandConfig.description}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#collection"
              className="w-full sm:w-auto px-8 py-3.5 bg-brand-charcoal hover:bg-brand-champagne text-brand-ivory font-medium rounded-full transition-colors touch-target flex items-center justify-center"
            >
              Explore the Collection
            </a>
            <Link
              to="/about"
              className="w-full sm:w-auto px-8 py-3.5 border border-brand-champagne text-brand-champagne hover:bg-brand-champagne hover:text-brand-white font-medium rounded-full transition-colors touch-target flex items-center justify-center"
            >
              Our Story
            </Link>
          </div>

          {/* Payment & delivery strip */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-brand-mocha">
            <span className="flex items-center gap-1.5">
              <CreditCard size={14} className="text-brand-champagne" /> Pay by
              Card
            </span>
            <span className="flex items-center gap-1.5">
              <Landmark size={14} className="text-brand-champagne" /> Pay by
              Bank Transfer
            </span>
            <span className="flex items-center gap-1.5">
              <Truck size={14} className="text-brand-champagne" /> Nationwide
              Delivery
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck size={14} className="text-brand-champagne" /> Secure
              Checkout
            </span>
          </div>
        </div>
      </section>

      {/* Collection */}
      <section id="collection" className="py-16 sm:py-20 px-4 bg-brand-cream/60">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.3em] text-brand-champagne mb-3">
              The Collection
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-charcoal">
              Curated Pieces, Honest Prices
            </h2>
          </div>

          {products.length === 0 ? (
            <div className="max-w-xl mx-auto text-center py-12 px-6 bg-brand-white rounded-3xl border border-brand-sand">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-brand-cream flex items-center justify-center">
                <Sparkles className="text-brand-champagne" size={32} />
              </div>
              <h3 className="font-serif text-2xl font-semibold text-brand-charcoal mb-3">
                The New Collection Is Coming
              </h3>
              <p className="text-brand-mocha leading-relaxed mb-2">
                We're carefully curating our next set of exquisite pieces. Our
                new collection — with a full cart and secure card or
                bank-transfer checkout — drops soon.
              </p>
              <p className="text-sm text-brand-mocha/80 mb-6">
                Chat with us on WhatsApp to be first in line when it lands.
              </p>
              <a
                href={getWhatsAppLink(
                  "Hi AmyG's, please notify me when the new collection drops!"
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-medium rounded-full transition-colors touch-target"
              >
                <MessageCircle size={18} />
                Notify Me on WhatsApp
              </a>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* How shopping works */}
      <section className="py-16 sm:py-20 px-4 bg-brand-white border-y border-brand-sand">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.3em] text-brand-champagne mb-3">
              How It Works
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-charcoal">
              Effortless, Start to Shine
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.number}
                  className="flex flex-col items-center text-center"
                >
                  <div className="relative w-20 h-20 rounded-full bg-brand-cream border border-brand-champagne/30 flex items-center justify-center mb-4">
                    <Icon size={30} className="text-brand-champagne" />
                    <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-brand-charcoal text-brand-ivory text-xs font-semibold flex items-center justify-center">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-brand-charcoal mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-brand-mocha max-w-[240px]">
                    {step.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why AmyG's */}
      <section className="py-16 sm:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.3em] text-brand-champagne mb-3">
              Why AmyG's
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-charcoal">
              Luxury You Can Trust
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="p-6 rounded-2xl bg-brand-white border border-brand-sand hover:border-brand-champagne/50 transition-colors"
                >
                  <div className="w-12 h-12 rounded-full bg-brand-cream flex items-center justify-center mb-4">
                    <Icon size={22} className="text-brand-champagne" />
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-brand-charcoal mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-brand-mocha leading-relaxed">
                    {value.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 px-4">
        <div className="max-w-3xl mx-auto text-center bg-brand-charcoal rounded-3xl px-6 py-12 sm:py-16">
          <p className="text-xs uppercase tracking-[0.3em] text-brand-champagne mb-3">
            Stay Close
          </p>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-brand-ivory mb-4">
            Ready to Shine?
          </h2>
          <p className="text-brand-ivory/70 mb-8 max-w-xl mx-auto">
            The new collection is almost here. Browse the site, add your
            favourites to the cart, and check out in seconds — by card or bank
            transfer.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#collection"
              className="w-full sm:w-auto px-8 py-3.5 bg-brand-champagne hover:bg-brand-champagne-light text-brand-charcoal font-semibold rounded-full transition-colors touch-target flex items-center justify-center"
            >
              View the Collection
            </a>
            <a
              href={getWhatsAppLink(whatsappMessages.general)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 border border-brand-ivory/30 hover:border-brand-champagne text-brand-ivory font-medium rounded-full transition-colors touch-target flex items-center justify-center gap-2"
            >
              <MessageCircle size={18} />
              Chat with Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
