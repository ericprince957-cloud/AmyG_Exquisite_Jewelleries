import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { formatPrice } from "../config/amyg";
import {
  ShoppingBag,
  Minus,
  Plus,
  Trash2,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export function CartPage() {
  const {
    items,
    itemCount,
    subtotal,
    deliveryFee,
    total,
    freeDeliveryRemaining,
    updateQuantity,
    removeItem,
    clearCart,
  } = useCart();

  // Empty cart
  if (items.length === 0) {
    return (
      <div className="pt-32 pb-24 px-4">
        <div className="max-w-md mx-auto text-center bg-brand-white rounded-3xl border border-brand-sand p-10">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-brand-cream flex items-center justify-center">
            <ShoppingBag className="text-brand-champagne" size={32} />
          </div>
          <h1 className="font-serif text-2xl font-semibold text-brand-charcoal mb-3">
            Your Cart Is Empty
          </h1>
          <p className="text-brand-mocha leading-relaxed mb-8">
            Once the new collection drops, the pieces you pick will live here
            — with your total calculated automatically.
          </p>
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-brand-charcoal hover:bg-brand-champagne text-brand-ivory font-medium rounded-full transition-colors touch-target"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-28 pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between gap-4 mb-8">
          <div>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-brand-charcoal mb-2">
              Your Cart
            </h1>
            <p className="text-brand-mocha text-sm">
              {itemCount} {itemCount === 1 ? "item" : "items"} — totals
              calculated automatically
            </p>
          </div>
          <button
            onClick={clearCart}
            className="text-sm text-brand-mocha hover:text-red-600 transition-colors underline underline-offset-4 shrink-0"
          >
            Clear cart
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-8">
          {/* Items */}
          <div className="space-y-4">
            {items.map(({ product, quantity }) => (
              <div
                key={product.id}
                className="flex gap-4 bg-brand-white rounded-2xl border border-brand-sand p-4"
              >
                <Link
                  to={`/products/${product.id}`}
                  className="w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden bg-brand-cream shrink-0"
                >
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </Link>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0">
                      <Link
                        to={`/products/${product.id}`}
                        className="font-serif font-semibold text-brand-charcoal hover:text-brand-champagne transition-colors block truncate"
                      >
                        {product.name}
                      </Link>
                      <p className="text-xs text-brand-mocha">
                        {product.category} · {formatPrice(product.price)} each
                      </p>
                    </div>
                    <button
                      onClick={() => removeItem(product.id)}
                      className="text-brand-mocha hover:text-red-600 transition-colors shrink-0 p-1"
                      aria-label={`Remove ${product.name} from cart`}
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center border border-brand-sand rounded-full bg-brand-ivory">
                      <button
                        onClick={() => updateQuantity(product.id, quantity - 1)}
                        className="w-9 h-9 flex items-center justify-center text-brand-charcoal hover:text-brand-champagne"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="w-8 text-center text-sm font-semibold text-brand-charcoal">
                        {quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(product.id, quantity + 1)}
                        className="w-9 h-9 flex items-center justify-center text-brand-charcoal hover:text-brand-champagne"
                        aria-label="Increase quantity"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                    <span className="font-serif font-semibold text-brand-charcoal">
                      {formatPrice(product.price * quantity)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <aside className="h-fit bg-brand-white rounded-2xl border border-brand-sand p-6 lg:sticky lg:top-24">
            <h2 className="font-serif text-xl font-semibold text-brand-charcoal mb-5">
              Order Summary
            </h2>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-brand-mocha">Subtotal</span>
                <span className="font-medium text-brand-charcoal">
                  {formatPrice(subtotal)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-brand-mocha">Delivery</span>
                {deliveryFee === 0 ? (
                  <span className="font-medium text-green-700">FREE</span>
                ) : (
                  <span className="font-medium text-brand-charcoal">
                    {formatPrice(deliveryFee)}
                  </span>
                )}
              </div>
              {freeDeliveryRemaining > 0 && (
                <p className="text-xs text-brand-champagne-dark bg-brand-cream rounded-lg p-3 leading-relaxed">
                  Add {formatPrice(freeDeliveryRemaining)} more to unlock free
                  delivery.
                </p>
              )}
              <div className="border-t border-brand-sand pt-3 flex justify-between items-baseline">
                <span className="font-serif font-semibold text-brand-charcoal">
                  Total
                </span>
                <span className="font-serif text-2xl font-bold text-brand-charcoal">
                  {formatPrice(total)}
                </span>
              </div>
            </div>
            <Link
              to="/checkout"
              className="mt-6 w-full flex items-center justify-center gap-2 py-3.5 bg-brand-charcoal hover:bg-brand-champagne text-brand-ivory font-medium rounded-full transition-colors touch-target"
            >
              Proceed to Checkout
              <ArrowRight size={18} />
            </Link>
            <Link
              to="/"
              className="mt-3 block text-center text-sm text-brand-mocha hover:text-brand-champagne underline underline-offset-4 transition-colors"
            >
              Continue shopping
            </Link>
            <p className="mt-4 flex items-center justify-center gap-1.5 text-[11px] text-brand-mocha">
              <Sparkles size={12} className="text-brand-champagne" />
              Demo store — checkout is simulated, no real payments.
            </p>
          </aside>
        </div>
      </div>
    </div>
  );
}
