import { Link } from "react-router-dom";
import {
  brandConfig,
  getWhatsAppLink,
  whatsappMessages,
} from "../config/amyg";
import {
  MessageCircle,
  Phone,
  Instagram,
  MapPin,
  Mail,
  Gem,
  BadgeCheck,
  Truck,
  ShieldCheck,
  ShoppingBag,
  Lock,
  Sparkles,
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
    text: "Looking expensive shouldn't break the bank. We bring you premium pieces at honest prices.",
  },
  {
    icon: Truck,
    title: "Nationwide Delivery",
    text: "From Lagos to Abuja, Port Harcourt to Kano — we deliver to your doorstep anywhere in Nigeria.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Checkout",
    text: "A smooth cart and checkout that calculates your total automatically — pay by card or bank transfer.",
  },
];

const steps = [
  {
    icon: ShoppingBag,
    title: "Browse & Add to Cart",
    text: "Explore the collection and add the pieces that speak to you. Your cart totals update automatically.",
  },
  {
    icon: Lock,
    title: "Secure Checkout",
    text: "Pay your auto-calculated total by card, or transfer directly from your bank app — no stress.",
  },
  {
    icon: Sparkles,
    title: "Receive & Shine",
    text: "Your jewellery arrives beautifully packaged, ready to wear.",
  },
];

export function AboutPage() {
  const whatsappLink = getWhatsAppLink(whatsappMessages.general);

  return (
    <div className="pt-24 pb-20">
      {/* Hero */}
      <section className="py-12 sm:py-16 px-4 text-center">
        <div className="max-w-2xl mx-auto animate-fade-in-up">
          <img
            src={brandConfig.logo}
            alt={brandConfig.name}
            className="w-20 h-20 rounded-full object-cover border-2 border-brand-champagne mx-auto mb-6 bg-brand-white"
          />
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-brand-charcoal mb-4">
            Our Story
          </h1>
          <p className="text-brand-mocha text-base sm:text-lg leading-relaxed">
            {brandConfig.description}
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-brand-charcoal text-center mb-10">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
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

      {/* Process */}
      <section className="py-12 sm:py-16 px-4 bg-brand-white border-y border-brand-sand">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-brand-charcoal mb-10">
            How It Works
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.title} className="flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full bg-brand-cream border border-brand-champagne/30 flex items-center justify-center mb-4">
                    <Icon size={30} className="text-brand-champagne" />
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-brand-charcoal mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-brand-mocha max-w-[220px]">
                    {step.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-12 sm:py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-brand-charcoal mb-8">
            Get in Touch
          </h2>
          <div className="space-y-4">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full py-4 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-semibold rounded-full transition-colors touch-target"
            >
              <MessageCircle size={20} />
              <span>Chat on WhatsApp</span>
            </a>
            <a
              href={`tel:${brandConfig.phone.replace(/\s/g, "")}`}
              className="flex items-center justify-center gap-3 w-full py-4 border border-brand-champagne hover:bg-brand-champagne text-brand-champagne hover:text-brand-white font-medium rounded-full transition-colors touch-target"
            >
              <Phone size={20} />
              <span>{brandConfig.phone}</span>
            </a>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            <div className="flex flex-col items-center gap-2 p-4">
              <MapPin size={20} className="text-brand-champagne" />
              <span className="text-sm text-brand-mocha">
                {brandConfig.location}
              </span>
            </div>
            <div className="flex flex-col items-center gap-2 p-4">
              <Instagram size={20} className="text-brand-champagne" />
              <span className="text-sm text-brand-mocha">
                {brandConfig.instagram}
              </span>
            </div>
            <div className="flex flex-col items-center gap-2 p-4">
              <Mail size={20} className="text-brand-champagne" />
              <span className="text-sm text-brand-mocha">
                {brandConfig.email}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-brand-charcoal mb-4">
            Ready to Shine?
          </h2>
          <p className="text-brand-mocha mb-6">
            Browse the collection and find your perfect piece today.
          </p>
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-brand-charcoal hover:bg-brand-champagne text-brand-ivory font-semibold rounded-full transition-colors touch-target"
          >
            View Collection
          </Link>
        </div>
      </section>
    </div>
  );
}
