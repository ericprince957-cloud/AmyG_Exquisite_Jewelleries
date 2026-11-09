import { Link, useLocation } from "react-router-dom";
import { brandConfig } from "../config/amyg";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/#collection", label: "Collection" },
    { path: "/about", label: "About" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-brand-black/90 backdrop-blur-md border-b border-brand-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border-2 border-brand-gold flex items-center justify-center">
              <span className="font-serif text-brand-gold font-bold text-lg">
                {brandConfig.monogram}
              </span>
            </div>
            <span className="hidden sm:block font-serif text-brand-white text-sm font-medium tracking-wide">
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
                    ? "text-brand-gold"
                    : "text-brand-white/80 hover:text-brand-gold"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden touch-target flex items-center justify-center text-brand-white"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-brand-black/95 backdrop-blur-md border-t border-brand-gold/10">
          <nav className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={`block py-2 text-base font-medium transition-colors ${
                  location.pathname === link.path
                    ? "text-brand-gold"
                    : "text-brand-white/80"
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
