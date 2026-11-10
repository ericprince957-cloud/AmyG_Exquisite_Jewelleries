import { Link, useLocation } from "react-router-dom";
import { brandConfig } from "../config/amyg";
import { useCart } from "../context/CartContext";
import { Menu, X, ShoppingBag } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const { itemCount } = useCart();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/#collection", label: "Collection" },
    { path: "/about", label: "About" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-brand-ivory/90 backdrop-blur-md border-b border-brand-sand">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src={brandConfig.logo}
              alt={brandConfig.name}
              className="w-10 h-10 rounded-full object-cover border border-brand-champagne/40"
            />
            <span className="hidden sm:block font-serif text-brand-charcoal text-sm font-medium tracking-wide">
              {brandConfig.name}
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors duration-200 ${
                  location.pathname === link.path
                    ? "text-brand-champagne"
                    : "text-brand-mocha hover:text-brand-champagne"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-1">
            {/* Cart */}
            <Link
              to="/cart"
              aria-label={`Cart, ${itemCount} item${itemCount === 1 ? "" : "s"}`}
              className="relative touch-target flex items-center justify-center text-brand-charcoal hover:text-brand-champagne transition-colors"
            >
              <ShoppingBag size={22} />
              {itemCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 min-w-[20px] h-5 px-1 rounded-full bg-brand-charcoal text-brand-ivory text-[11px] font-semibold flex items-center justify-center">
                  {itemCount > 99 ? "99+" : itemCount}
                </span>
              )}
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden touch-target flex items-center justify-center text-brand-charcoal"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-brand-ivory/95 backdrop-blur-md border-t border-brand-sand">
          <nav className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={`block py-2 text-base font-medium transition-colors ${
                  location.pathname === link.path
                    ? "text-brand-champagne"
                    : "text-brand-mocha"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
