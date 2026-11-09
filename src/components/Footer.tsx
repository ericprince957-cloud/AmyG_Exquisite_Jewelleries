import { Link } from "react-router-dom";
import { brandConfig, formatPrice, cartConfig } from "../config/amyg";
import {
  Instagram,
  Mail,
  MapPin,
  CreditCard,
  Landmark,
  Truck,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-brand-charcoal text-brand-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full border-2 border-brand-champagne flex items-center justify-center">
                <span className="font-serif text-brand-champagne font-bold text-lg">
                  {brandConfig.monogram}
                </span>
              </div>
              <span className="font-serif text-base font-medium tracking-wide">
                {brandConfig.name}
              </span>
            </div>
            <p className="text-sm text-brand-ivory/60 leading-relaxed max-w-xs">
              {brandConfig.tagline}. Affordable luxury for every Nigerian
              woman — with secure card and bank-transfer checkout.
            </p>
          </div>

          {/* Shop links */}
          <div>
            <h4 className="font-serif text-sm font-semibold uppercase tracking-widest text-brand-champagne mb-4">
              Shop
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/"
                  className="text-brand-ivory/70 hover:text-brand-champagne transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/cart"
                  className="text-brand-ivory/70 hover:text-brand-champagne transition-colors"
                >
                  Your Cart
                </Link>
              </li>
              <li>
                <Link
                  to="/checkout"
                  className="text-brand-ivory/70 hover:text-brand-champagne transition-colors"
                >
                  Checkout
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-brand-ivory/70 hover:text-brand-champagne transition-colors"
                >
                  Our Story
                </Link>
              </li>
            </ul>
          </div>

          {/* Payment & delivery */}
          <div>
            <h4 className="font-serif text-sm font-semibold uppercase tracking-widest text-brand-champagne mb-4">
              We Accept
            </h4>
            <ul className="space-y-3 text-sm text-brand-ivory/70">
              <li className="flex items-center gap-2">
                <CreditCard size={16} className="text-brand-champagne shrink-0" />
                Debit / Credit Card
              </li>
              <li className="flex items-center gap-2">
                <Landmark size={16} className="text-brand-champagne shrink-0" />
                Bank Transfer
              </li>
              <li className="flex items-start gap-2">
                <Truck size={16} className="text-brand-champagne shrink-0 mt-0.5" />
                <span>
                  Nationwide delivery — {formatPrice(cartConfig.deliveryFee)}
                  (free over {formatPrice(cartConfig.freeDeliveryThreshold)})
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact strip */}
        <div className="mt-10 pt-6 border-t border-brand-ivory/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-brand-ivory/60">
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            <span className="flex items-center gap-1.5">
              <MapPin size={14} className="text-brand-champagne" />
              {brandConfig.location}
            </span>
            <span className="flex items-center gap-1.5">
              <Instagram size={14} className="text-brand-champagne" />
              {brandConfig.instagram}
            </span>
            <span className="flex items-center gap-1.5">
              <Mail size={14} className="text-brand-champagne" />
              {brandConfig.email}
            </span>
          </div>
          <p>
            © {new Date().getFullYear()} {brandConfig.name}. Demo store — no
            real payments processed.
          </p>
        </div>
      </div>
    </footer>
  );
}
