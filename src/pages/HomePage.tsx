import { Link } from "react-router-dom";
import { products, heroImage, brandConfig, trustBadges, formatPrice, whatsappMessages } from "../config/amyg";
import { ArrowRight, ShoppingBag } from "lucide-react";

export function HomePage() {
  return (
    <div className="pt-16 pb-20 md:pb-0">
      {/* Hero Section */}
      <section className="relative h-[85vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Luxury jewelry collection"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-black/60 via-brand-black/40 to-brand-black/80" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-2xl mx-auto animate-fade-in-up">
          <div className="mb-4">
            <span className="inline-block px-4 py-1.5 border border-brand-gold/40 rounded-full text-brand-gold text-xs font-medium tracking-widest uppercase">
              {brandConfig.name}
            </span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-brand-white leading-tight mb-4">
            Timeless Elegance,
            <br />
            <span className="gold-shimmer">Delivered</span>
          </h1>
          <p className="text-brand-white/70 text-base sm:text-lg mb-8 max-w-md mx-auto">
            Curated luxury jewelry for the modern Nigerian woman. Affordable pieces that make every moment extraordinary.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="#collection"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-brand-gold hover:bg-brand-gold-light text-brand-black font-semibold rounded-xl transition-all duration-200 touch-target"
            >
              <ShoppingBag size={18} />
              Shop Collection
            </a>
            <Link
              to="/about"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-brand-white/30 hover:border-brand-gold text-brand-white hover:text-brand-gold font-medium rounded-xl transition-all duration-200 touch-target"
            >
              Our Story
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-brand-white/30 rounded-full flex items-start justify-center p-1.5">
            <div className="w-1.5 h-3 bg-brand-gold rounded-full" />
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-8 border-b border-brand-gold/10">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {trustBadges.map((badge) => (
              <div
                key={badge.text}
                className="flex flex-col items-center text-center gap-2 py-3"
              >
                <span className="text-2xl">{badge.icon}</span>
                <span className="text-xs sm:text-sm text-brand-white/80 font-medium">
                  {badge.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="collection" className="py-12 sm:py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-white mb-3">
              Our Collection
            </h2>
            <p className="text-brand-white/60 text-sm sm:text-base max-w-md mx-auto">
              Handpicked pieces that blend luxury with affordability
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {products.map((product, index) => (
              <Link
                key={product.id}
                to={`/products/${product.id}`}
                className="group block"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="relative overflow-hidden rounded-2xl bg-brand-gray border border-brand-gold/10 hover:border-brand-gold/30 transition-all duration-300">
                  {/* Image */}
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>

                  {/* Info Overlay */}
                  <div className="p-4 sm:p-5">
                    <span className="text-xs text-brand-gold/80 uppercase tracking-wider font-medium">
                      {product.category}
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl font-semibold text-brand-white mt-1 group-hover:text-brand-gold transition-colors">
                      {product.name}
                    </h3>
                    <div className="flex items-center justify-between mt-3">
                      <span className="text-brand-gold font-bold text-lg">
                        {formatPrice(product.price)}
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs text-brand-white/60 group-hover:text-brand-gold transition-colors">
                        View Details <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 sm:py-16 px-4 bg-brand-gray/50 border-t border-b border-brand-gold/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-white mb-10">
            How to Order
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-brand-gold/10 border border-brand-gold/30 flex items-center justify-center mb-4">
                <span className="text-2xl">🛍️</span>
              </div>
              <h3 className="font-serif text-lg font-semibold text-brand-white mb-2">
                1. Browse
              </h3>
              <p className="text-sm text-brand-white/60">
                Explore our curated collection of luxury pieces
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-brand-gold/10 border border-brand-gold/30 flex items-center justify-center mb-4">
                <span className="text-2xl">💬</span>
              </div>
              <h3 className="font-serif text-lg font-semibold text-brand-white mb-2">
                2. Order via WhatsApp
              </h3>
              <p className="text-sm text-brand-white/60">
                Chat with us directly — no complicated checkout
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-brand-gold/10 border border-brand-gold/30 flex items-center justify-center mb-4">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="font-serif text-lg font-semibold text-brand-white mb-2">
                3. Receive & Shine
              </h3>
              <p className="text-sm text-brand-white/60">
                Nationwide delivery right to your doorstep
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-4 border-t border-brand-gold/10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-12 h-12 rounded-full border-2 border-brand-gold flex items-center justify-center mx-auto mb-4">
            <span className="font-serif text-brand-gold font-bold text-xl">
              {brandConfig.monogram}
            </span>
          </div>
          <p className="font-serif text-brand-white text-lg mb-2">
            {brandConfig.name}
          </p>
          <p className="text-brand-white/50 text-sm mb-4">
            {brandConfig.location} • {brandConfig.phone}
          </p>
          <p className="text-brand-white/30 text-xs">
            © {new Date().getFullYear()} {brandConfig.name}. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
