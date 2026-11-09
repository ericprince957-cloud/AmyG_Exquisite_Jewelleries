import { brandConfig, whatsappMessages } from "../config/amyg";
import { MessageCircle, Phone, Instagram, MapPin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export function AboutPage() {
  const whatsappLink = `https://wa.me/${brandConfig.whatsapp}?text=${encodeURIComponent(
    whatsappMessages.general
  )}`;

  return (
    <div className="pt-16 pb-20 md:pb-0">
      {/* Hero */}
      <section className="py-16 sm:py-20 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="w-20 h-20 rounded-full border-2 border-brand-gold flex items-center justify-center mx-auto mb-6">
            <span className="font-serif text-brand-gold font-bold text-3xl">
              {brandConfig.monogram}
            </span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-brand-white mb-4">
            Our Story
          </h1>
          <p className="text-brand-white/70 text-base sm:text-lg leading-relaxed">
            {brandConfig.description}
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-12 px-4 border-t border-brand-gold/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-brand-white text-center mb-10">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-brand-gray border border-brand-gold/10">
              <span className="text-3xl mb-3 block">💎</span>
              <h3 className="font-serif text-lg font-semibold text-brand-white mb-2">
                Authentic Pieces
              </h3>
              <p className="text-sm text-brand-white/60">
                Every piece is carefully sourced and quality-checked. We only sell what we'd proudly wear ourselves.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-brand-gray border border-brand-gold/10">
              <span className="text-3xl mb-3 block">💰</span>
              <h3 className="font-serif text-lg font-semibold text-brand-white mb-2">
                Affordable Luxury
              </h3>
              <p className="text-sm text-brand-white/60">
                Looking expensive shouldn't break the bank. We bring you premium pieces at honest prices.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-brand-gray border border-brand-gold/10">
              <span className="text-3xl mb-3 block">📦</span>
              <h3 className="font-serif text-lg font-semibold text-brand-white mb-2">
                Nationwide Delivery
              </h3>
              <p className="text-sm text-brand-white/60">
                From Lagos to Abuja, Port Harcourt to Kano — we deliver to your doorstep anywhere in Nigeria.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-brand-gray border border-brand-gold/10">
              <span className="text-3xl mb-3 block">💬</span>
              <h3 className="font-serif text-lg font-semibold text-brand-white mb-2">
                Personal Service
              </h3>
              <p className="text-sm text-brand-white/60">
                No bots, no automated responses. Chat directly with us on WhatsApp for a personal shopping experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-12 sm:py-16 px-4 bg-brand-gray/50 border-t border-b border-brand-gold/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-brand-white mb-10">
            How It Works
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-brand-gold/10 border-2 border-brand-gold/30 flex items-center justify-center mb-4">
                <span className="text-3xl">🛍️</span>
              </div>
              <h3 className="font-serif text-lg font-semibold text-brand-white mb-2">
                Browse
              </h3>
              <p className="text-sm text-brand-white/60 max-w-[200px]">
                Explore our collection and find pieces that speak to you
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-brand-gold/10 border-2 border-brand-gold/30 flex items-center justify-center mb-4">
                <span className="text-3xl">💬</span>
              </div>
              <h3 className="font-serif text-lg font-semibold text-brand-white mb-2">
                Order via WhatsApp
              </h3>
              <p className="text-sm text-brand-white/60 max-w-[200px]">
                Send us a message — quick, easy, and personal
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-brand-gold/10 border-2 border-brand-gold/30 flex items-center justify-center mb-4">
                <span className="text-3xl">✨</span>
              </div>
              <h3 className="font-serif text-lg font-semibold text-brand-white mb-2">
                Receive & Shine
              </h3>
              <p className="text-sm text-brand-white/60 max-w-[200px]">
                Your jewelry arrives beautifully packaged, ready to wear
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-12 sm:py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-brand-white mb-8">
            Get in Touch
          </h2>
          <div className="space-y-4">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl transition-all touch-target"
            >
              <MessageCircle size={20} />
              <span>Chat on WhatsApp</span>
            </a>
            <a
              href={`tel:${brandConfig.phone.replace(/\s/g, "")}`}
              className="flex items-center justify-center gap-3 w-full py-4 border border-brand-gold/40 hover:border-brand-gold text-brand-gold font-medium rounded-xl transition-all touch-target"
            >
              <Phone size={20} />
              <span>{brandConfig.phone}</span>
            </a>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            <div className="flex flex-col items-center gap-2 p-4">
              <MapPin size={20} className="text-brand-gold" />
              <span className="text-sm text-brand-white/70">{brandConfig.location}</span>
            </div>
            <div className="flex flex-col items-center gap-2 p-4">
              <Instagram size={20} className="text-brand-gold" />
              <span className="text-sm text-brand-white/70">{brandConfig.instagram}</span>
            </div>
            <div className="flex flex-col items-center gap-2 p-4">
              <Mail size={20} className="text-brand-gold" />
              <span className="text-sm text-brand-white/70">{brandConfig.email}</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-4 border-t border-brand-gold/10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-brand-white mb-4">
            Ready to Shine?
          </h2>
          <p className="text-brand-white/60 mb-6">
            Browse our collection and find your perfect piece today.
          </p>
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-brand-gold hover:bg-brand-gold-light text-brand-black font-semibold rounded-xl transition-all duration-200 touch-target"
          >
            View Collection
          </Link>
        </div>
      </section>
    </div>
  );
}
