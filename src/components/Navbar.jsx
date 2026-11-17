import React, { useState } from 'react';
import { ShoppingBag, Heart, Search, Menu, X, Sparkles, Gift } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

export default function Navbar({ onOpenSearch, onOpenWishlist }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { totalItems, subtotal, setIsCartOpen } = useCart();
  const { wishlistCount } = useWishlist();

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-theme-border shadow-sm transition-colors duration-300">
      
      {/* Top Main Navbar Row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4 lg:gap-8">
          
          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 -ml-2 text-theme-dark hover:text-theme-primary transition-colors focus:outline-none"
              aria-label="Toggle Navigation"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
            <button
              onClick={onOpenSearch}
              className="p-2 text-theme-muted hover:text-theme-primary transition-colors"
              title="Search"
            >
              <Search className="w-5 h-5" />
            </button>
          </div>

          {/* Brand Logo */}
          <div className="flex items-center">
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-full bg-theme-tint text-theme-primary flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform flex-shrink-0">
                <Sparkles className="w-5 h-5 text-theme-primary" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-theme-primary leading-none">
                  Bold Petals
                </span>
                <span className="text-[10px] uppercase tracking-[0.22em] text-theme-muted font-bold mt-1">
                  Aesthetic Gifting Atelier
                </span>
              </div>
            </a>
          </div>

          {/* Center: Integrated E-Commerce Search Input (Desktop) */}
          <div className="hidden lg:flex flex-1 max-w-md mx-4">
            <div
              onClick={onOpenSearch}
              className="w-full flex items-center gap-3 px-4 py-2.5 rounded-full border border-theme-border bg-theme-light/70 hover:bg-white hover:border-theme-primary transition-all cursor-pointer shadow-sm group"
            >
              <Search className="w-4 h-4 text-theme-muted group-hover:text-theme-primary transition-colors" />
              <span className="text-xs text-theme-muted/80 select-none">
                Search jhumkas, fairy hampers, butterfly claws...
              </span>
            </div>
          </div>

          {/* Right: Quick Actions (Wishlist, Bag) */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            
            {/* Wishlist Button */}
            <button
              onClick={onOpenWishlist}
              className="p-2 text-theme-muted hover:text-theme-primary relative transition-colors rounded-full hover:bg-theme-light"
              title="Saved Wishlist"
            >
              <Heart className="w-5 h-5" />
              {wishlistCount > 0 && (
                <span className="absolute 0 top-0.5 right-0.5 w-4 h-4 bg-theme-primary text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* Shopping Bag CTA */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="flex items-center gap-2.5 bg-theme-primary hover:bg-theme-primaryHover text-white px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all shadow-sm hover:shadow-md"
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="hidden sm:inline">Bag</span>
              <span className="bg-white text-theme-primary text-xs px-1.5 py-0.2 rounded-full font-bold">
                {totalItems}
              </span>
            </button>
          </div>

        </div>
      </div>

      {/* Secondary Bottom Navigation Row (Clean Category Navigation on Desktop) */}
      <div className="hidden lg:block border-t border-theme-border/60 bg-theme-light/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between py-2.5 text-xs font-semibold text-theme-dark">
            <div className="flex items-center space-x-7">
              <a href="#hampers" className="hover:text-theme-primary transition-colors">
                🎁 All Hampers
              </a>
              <a href="#jewellery" className="hover:text-theme-primary transition-colors">
                ✨ Glowing Jhumkas
              </a>
              <a href="#accessories" className="hover:text-theme-primary transition-colors">
                🦋 Hair Accessories
              </a>
              <a href="#jewellery" className="hover:text-theme-primary transition-colors">
                💎 Anti-Tarnish Sets
              </a>
              <a href="#budget" className="hover:text-theme-primary transition-colors">
                💰 Deals Under ₹999
              </a>
              <a href="#reviews" className="hover:text-theme-primary transition-colors">
                💖 Customer Stories
              </a>
            </div>

            {/* Make Your Own Box Featured Button */}
            <a
              href="#build-box"
              className="bg-theme-tint hover:bg-theme-primary hover:text-white text-theme-primary font-bold px-3.5 py-1 rounded-full border border-theme-border flex items-center gap-1.5 transition-all shadow-sm"
            >
              <Gift className="w-3.5 h-3.5" />
              <span>Make Your Own Box</span>
              <span className="bg-theme-primary text-white text-[9px] px-1.5 py-0.2 rounded-full font-bold group-hover:bg-white group-hover:text-theme-primary">
                Custom
              </span>
            </a>
          </nav>
        </div>
      </div>

      {/* Mobile Slide-Down Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-theme-border px-5 py-5 space-y-4 shadow-xl">
          {/* Mobile Search Bar */}
          <div
            onClick={() => {
              setIsMobileMenuOpen(false);
              onOpenSearch();
            }}
            className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl border border-theme-border bg-theme-light text-xs text-theme-muted"
          >
            <Search className="w-4 h-4 text-theme-muted" />
            <span>Search all gifts & jhumkas...</span>
          </div>

          {/* Links */}
          <div className="space-y-2.5 text-sm font-semibold text-theme-dark pt-1">
            <a
              href="#hampers"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-between py-1.5 hover:text-theme-primary border-b border-theme-border/40"
            >
              <span>🎁 Curated Gift Hampers</span>
              <span className="text-xs text-theme-muted">Explore →</span>
            </a>
            <a
              href="#jewellery"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-between py-1.5 hover:text-theme-primary border-b border-theme-border/40"
            >
              <span>✨ Light Wala Jhumkas & Jewels</span>
              <span className="text-xs text-theme-muted">Explore →</span>
            </a>
            <a
              href="#accessories"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-between py-1.5 hover:text-theme-primary border-b border-theme-border/40"
            >
              <span>🦋 Hair Claws & Scrunchies</span>
              <span className="text-xs text-theme-muted">Explore →</span>
            </a>
            <a
              href="#budget"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-between py-1.5 hover:text-theme-primary border-b border-theme-border/40"
            >
              <span>💰 Budget Deals Under ₹999</span>
              <span className="text-xs text-theme-muted">Explore →</span>
            </a>
            <a
              href="#build-box"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-between py-2 text-theme-primary bg-theme-tint px-3 rounded-xl font-bold"
            >
              <span>📦 Make Your Own Gift Box</span>
              <span className="text-xs bg-theme-primary text-white px-2 py-0.5 rounded-full">Custom</span>
            </a>
            <a
              href="#reviews"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-1.5 hover:text-theme-primary"
            >
              💖 50,000+ Customer Reviews
            </a>
          </div>

          {/* Contact / Studio note */}
          <div className="pt-3 border-t border-theme-border text-xs text-theme-muted flex justify-between items-center">
            <span>Studio: Lucknow, UP</span>
            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noreferrer"
              className="text-theme-primary font-bold hover:underline"
            >
              WhatsApp Us →
            </a>
          </div>
        </div>
      )}

    </header>
  );
}
