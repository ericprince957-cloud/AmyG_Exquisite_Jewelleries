import { Link, useParams, useNavigate } from "react-router-dom";
import {
  products,
  formatPrice,
  getWhatsAppLink,
  whatsappMessages,
} from "../config/amyg";
import { useCart } from "../context/CartContext";
import { useState } from "react";
import {
  ShoppingBag,
  Minus,
  Plus,
  Zap,
  Check,
  ArrowLeft,
  PackageX,
  MessageCircle,
} from "lucide-react";

export function ProductDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [added, setAdded] = useState(false);

  const product = products.find((p) => p.id === id);

  // Piece not found (e.g. old link or removed product)
  if (!product) {
    return (
      <div className="pt-32 pb-20 px-4">
        <div className="max-w-md mx-auto text-center bg-brand-white rounded-3xl border border-brand-sand p-10">
          <PackageX className="mx-auto text-brand-champagne mb-4" size={40} />
          <h1 className="font-serif text-2xl font-semibold text-brand-charcoal mb-2">
            Piece Not Found
          </h1>
          <p className="text-brand-mocha mb-6">
            This piece is no longer part of the collection.
          </p>
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 px-7 py-3 bg-brand-charcoal hover:bg-brand-champagne text-brand-ivory font-medium rounded-full transition-colors touch-target"
          >
            <ArrowLeft size={18} />
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!product.inStock) return;
    addItem(product, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const handleBuyNow = () => {
    if (!product.inStock) return;
    addItem(product, quantity);
    navigate("/checkout");
  };

  return (
    <div className="pt-24 pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Breadcrumb */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-brand-mocha hover:text-brand-champagne transition-colors mb-8"
        >
          <ArrowLeft size={16} />
          Back to the collection
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Gallery */}
          <div className="animate-fade-in-up">
            <div className="aspect-square rounded-3xl overflow-hidden bg-brand-cream border border-brand-sand">
              <img
                src={product.images[activeImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {product.images.length > 1 && (
              <div className="flex gap-2 mt-3 flex-wrap">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImage(index)}
                    className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-colors ${
                      activeImage === index
                        ? "border-brand-champagne"
                        : "border-brand-sand hover:border-brand-champagne/50"
                    }`}
                    aria-label={`View image ${index + 1}`}
                  >
                    <img
                      src={image}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Details */}
          <div className="animate-fade-in-up">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs uppercase tracking-widest text-brand-champagne">
                {product.category}
              </span>
              <span
                className={`inline-flex items-center gap-1.5 text-xs font-medium ${
                  product.inStock ? "text-green-700" : "text-red-600"
                }`}
              >
                <span
                  className={`w-2 h-2 rounded-full ${
                    product.inStock ? "bg-green-600" : "bg-red-500"
                  }`}
                />
                {product.inStock ? "In stock" : "Sold out"}
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-brand-charcoal mb-4">
              {product.name}
            </h1>
            <p className="font-serif text-2xl sm:text-3xl font-semibold text-brand-champagne mb-6">
              {formatPrice(product.price)}
            </p>

            <p className="text-brand-mocha leading-relaxed mb-6">
              {product.description}
            </p>

            {/* Features */}
            {product.features.length > 0 && (
              <ul className="space-y-2 mb-8">
                {product.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-brand-charcoal">
                    <Check size={16} className="text-brand-champagne mt-0.5 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            )}

            {/* Quantity + actions */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <span className="text-sm font-medium text-brand-charcoal">
                  Quantity
                </span>
                <div className="flex items-center border border-brand-sand rounded-full bg-brand-white">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 flex items-center justify-center text-brand-charcoal hover:text-brand-champagne"
                    aria-label="Decrease quantity"
                  >
                    <Minus size={14} />
                  </button>
                  <span className="w-10 text-center text-sm font-semibold">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 flex items-center justify-center text-brand-charcoal hover:text-brand-champagne"
                    aria-label="Increase quantity"
                  >
                    <Plus size={14} />
                  </button>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                  className="flex-1 flex items-center justify-center gap-2 py-4 border border-brand-charcoal text-brand-charcoal hover:bg-brand-charcoal hover:text-brand-ivory font-medium rounded-full transition-colors touch-target disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  {added ? (
                    <>
                      <Check size={18} className="text-green-600" />
                      Added to Cart
                    </>
                  ) : (
                    <>
                      <ShoppingBag size={18} />
                      Add to Cart
                    </>
                  )}
                </button>
                <button
                  onClick={handleBuyNow}
                  disabled={!product.inStock}
                  className="flex-1 flex items-center justify-center gap-2 py-4 bg-brand-charcoal hover:bg-brand-champagne text-brand-ivory font-semibold rounded-full transition-colors touch-target disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  <Zap size={18} />
                  Buy Now
                </button>
              </div>

              {/* WhatsApp enquiry */}
              <a
                href={getWhatsAppLink(whatsappMessages.enquiry(product.name))}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 text-sm text-brand-mocha hover:text-[#25D366] transition-colors underline underline-offset-4"
              >
                <MessageCircle size={16} />
                Questions? Ask about this piece on WhatsApp
              </a>
            </div>

            {/* Testimonial */}
            {product.testimonial && (
              <div className="mt-8 bg-brand-cream rounded-2xl p-5 border border-brand-sand">
                <p className="italic text-brand-mocha leading-relaxed">
                  &ldquo;{product.testimonial.text}&rdquo;
                </p>
                <p className="text-sm text-brand-charcoal mt-2">
                  — {product.testimonial.author}, {product.testimonial.location}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
