import { Link } from "react-router-dom";
import { type Product, formatPrice } from "../config/amyg";
import { useCart } from "../context/CartContext";
import { ShoppingBag } from "lucide-react";

export function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();

  return (
    <div className="group bg-brand-white rounded-2xl overflow-hidden border border-brand-sand hover:border-brand-champagne/50 hover:shadow-[0_20px_40px_-20px_rgba(41,36,30,0.25)] transition-all duration-300">
      <Link
        to={`/products/${product.id}`}
        className="block aspect-square overflow-hidden bg-brand-cream"
      >
        <img
          src={product.images[0]}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </Link>
      <div className="p-5">
        {product.badge && (
          <span className="inline-block text-[11px] uppercase tracking-widest text-brand-champagne mb-2">
            {product.badge}
          </span>
        )}
        <Link to={`/products/${product.id}`}>
          <h3 className="font-serif text-lg font-semibold text-brand-charcoal hover:text-brand-champagne transition-colors">
            {product.name}
          </h3>
        </Link>
        <p className="text-sm text-brand-mocha mt-1">{product.category}</p>
        <div className="flex items-center justify-between mt-4 gap-3">
          <span className="font-serif text-lg font-semibold text-brand-charcoal">
            {formatPrice(product.price)}
          </span>
          <button
            onClick={() => addItem(product)}
            disabled={!product.inStock}
            className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-brand-charcoal text-brand-ivory text-sm font-medium hover:bg-brand-champagne transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <ShoppingBag size={16} />
            {product.inStock ? "Add to Cart" : "Sold Out"}
          </button>
        </div>
      </div>
    </div>
  );
}
