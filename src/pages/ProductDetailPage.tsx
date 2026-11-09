import { useParams, Link } from "react-router-dom";
import { products, formatPrice, whatsappMessages, brandConfig } from "../config/amyg";
import { ArrowLeft, MessageCircle, Phone, Check, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

export function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === id);
  const [currentImage, setCurrentImage] = useState(0);

  if (!product) {
    return (
      <div className="pt-24 pb-20 px-4 text-center">
        <h1 className="font-serif text-2xl text-brand-white mb-4">Product Not Found</h1>
        <Link to="/" className="text-brand-gold hover:underline">
          ← Back to Collection
        </Link>
      </div>
    );
  }

  const whatsappOrderLink = `https://wa.me/${brandConfig.whatsapp}?text=${encodeURIComponent(
    whatsappMessages.order(product.name, product.price)
  )}`;

  const whatsappEnquiryLink = `https://wa.me/${brandConfig.whatsapp}?text=${encodeURIComponent(
    whatsappMessages.enquiry(product.name)
  )}`;

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  return (
    <div className="pt-16 pb-32 md:pb-16">
      {/* Back Button */}
      <div className="px-4 py-4">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-brand-white/70 hover:text-brand-gold transition-colors text-sm"
        >
          <ArrowLeft size={16} />
          Back to Collection
        </Link>
      </div>

      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Image Gallery */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-brand-gray border border-brand-gold/10">
              <img
                src={product.images[currentImage]}
                alt={product.name}
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>

            {/* Navigation Arrows */}
            {product.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-brand-black/60 backdrop-blur-sm border border-brand-white/20 flex items-center justify-center text-brand-white hover:text-brand-gold transition-colors touch-target"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-brand-black/60 backdrop-blur-sm border border-brand-white/20 flex items-center justify-center text-brand-white hover:text-brand-gold transition-colors touch-target"
                >
                  <ChevronRight size={20} />
                </button>
              </>
            )}

            {/* Image Dots */}
            {product.images.length > 1 && (
              <div className="flex justify-center gap-2 mt-4">
                {product.images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImage(idx)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      idx === currentImage
                        ? "bg-brand-gold w-6"
                        : "bg-brand-white/30 hover:bg-brand-white/50"
                    }`}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <span className="text-xs text-brand-gold/80 uppercase tracking-widest font-medium mb-2">
              {product.category}
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-brand-white mb-3">
              {product.name}
            </h1>
            <p className="text-brand-gold font-bold text-2xl sm:text-3xl mb-6">
              {formatPrice(product.price)}
            </p>
            <p className="text-brand-white/70 text-sm sm:text-base leading-relaxed mb-6">
              {product.description}
            </p>

            {/* Features */}
            <div className="mb-8">
              <h3 className="font-serif text-lg font-semibold text-brand-white mb-3">
                Key Features
              </h3>
              <ul className="space-y-2.5">
                {product.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm text-brand-white/70"
                  >
                    <Check size={16} className="text-brand-gold mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Desktop CTA Buttons */}
            <div className="hidden md:flex gap-3 mt-auto">
              <a
                href={whatsappOrderLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl transition-all duration-200 touch-target"
              >
                <MessageCircle size={18} />
                Order via WhatsApp
              </a>
              <a
                href={`tel:${brandConfig.whatsapp}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-brand-gold/40 hover:border-brand-gold text-brand-gold font-medium rounded-xl transition-all duration-200 touch-target"
              >
                <Phone size={18} />
                Call
              </a>
            </div>
          </div>
        </div>

        {/* Testimonial */}
        {product.testimonial && (
          <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-brand-gray border border-brand-gold/10">
            <div className="flex items-center gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="text-brand-gold fill-brand-gold" />
              ))}
            </div>
            <p className="text-brand-white/80 text-sm sm:text-base italic leading-relaxed mb-4">
              "{product.testimonial.text}"
            </p>
            <p className="text-brand-gold text-sm font-medium">
              — {product.testimonial.author}, {product.testimonial.location}
            </p>
          </div>
        )}

        {/* Related Products */}
        <div className="mt-12">
          <h2 className="font-serif text-2xl font-bold text-brand-white mb-6">
            You May Also Love
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {products
              .filter((p) => p.id !== product.id)
              .map((p) => (
                <Link
                  key={p.id}
                  to={`/products/${p.id}`}
                  className="group block"
                >
                  <div className="rounded-xl overflow-hidden bg-brand-gray border border-brand-gold/10 hover:border-brand-gold/30 transition-all">
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={p.images[0]}
                        alt={p.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-3">
                      <h3 className="font-serif text-sm sm:text-base text-brand-white group-hover:text-brand-gold transition-colors truncate">
                        {p.name}
                      </h3>
                      <p className="text-brand-gold font-bold text-sm mt-1">
                        {formatPrice(p.price)}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>

      {/* Mobile Sticky CTA Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden">
        <div className="bg-brand-black/95 backdrop-blur-md border-t border-brand-gold/20 px-4 py-3">
          <div className="flex gap-2">
            <a
              href={whatsappOrderLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl transition-all touch-target text-sm"
            >
              <MessageCircle size={16} />
              Order via WhatsApp
            </a>
            <a
              href={`tel:${brandConfig.whatsapp}`}
              className="inline-flex items-center justify-center gap-2 px-4 py-3.5 border border-brand-gold/40 text-brand-gold font-medium rounded-xl transition-all touch-target text-sm"
            >
              <Phone size={16} />
              Call
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
