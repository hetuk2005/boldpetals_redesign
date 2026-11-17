import React, { useState } from 'react';
import { ShoppingBag, Heart, Search, Menu, X, Sparkles } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

export default function Navbar({ onOpenSearch, onOpenWishlist }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { totalItems, setIsCartOpen } = useCart();
  const { wishlistCount } = useWishlist();

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-theme-border transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-theme-dark hover:text-theme-primary transition-colors"
            aria-label="Toggle Navigation"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Brand Logo (Inspired by Aesthetic Magic by Anu style) */}
          <div className="flex items-center gap-3">
            <a href="#" className="group flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-full bg-theme-tint text-theme-primary flex items-center justify-center font-serif text-lg font-bold shadow-sm group-hover:scale-105 transition-transform">
                <Sparkles className="w-5 h-5 text-theme-primary" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-theme-primary leading-none">
                  Bold Petals
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-theme-muted font-semibold mt-1">
                  Aesthetic Gifting Atelier
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7 text-sm font-medium text-theme-dark">
            <a href="#hampers" className="hover:text-theme-primary transition-colors">
              Gift Hampers
            </a>
            <a href="#jewellery" className="hover:text-theme-primary transition-colors">
              Jhumkas & Jewels
            </a>
            <a href="#accessories" className="hover:text-theme-primary transition-colors">
              Hair Claws
            </a>
            <a href="#budget" className="hover:text-theme-primary transition-colors">
              Under ₹999
            </a>
            <a
              href="#build-box"
              className="text-theme-primary font-bold hover:text-theme-primaryHover flex items-center gap-1.5"
            >
              <span>Make Your Own Box</span>
              <span className="text-[10px] bg-theme-tint text-theme-primary px-2 py-0.5 rounded-full border border-theme-border font-bold">
                Custom
              </span>
            </a>
            <a href="#reviews" className="hover:text-theme-primary transition-colors">
              Real Reviews
            </a>
          </nav>

          {/* Right Action Icons */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            <button
              onClick={onOpenSearch}
              className="p-2 text-theme-muted hover:text-theme-primary transition-colors rounded-full hover:bg-theme-light"
              title="Search catalog"
            >
              <Search className="w-5 h-5" />
            </button>

            <button
              onClick={onOpenWishlist}
              className="p-2 text-theme-muted hover:text-theme-primary relative transition-colors rounded-full hover:bg-theme-light"
              title="Wishlist"
            >
              <Heart className="w-5 h-5" />
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-theme-primary text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setIsCartOpen(true)}
              className="flex items-center gap-2 bg-theme-primary hover:bg-theme-primaryHover text-white px-4 py-2 sm:px-4 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all shadow-sm hover:shadow-md"
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

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-theme-border px-6 py-5 space-y-3 text-sm font-medium text-theme-dark shadow-lg">
          <a href="#hampers" onClick={() => setIsMobileMenuOpen(false)} className="block py-1 hover:text-theme-primary">
            Curated Gift Hampers
          </a>
          <a href="#jewellery" onClick={() => setIsMobileMenuOpen(false)} className="block py-1 hover:text-theme-primary">
            Light Wala Jhumkas & Jewellery
          </a>
          <a href="#accessories" onClick={() => setIsMobileMenuOpen(false)} className="block py-1 hover:text-theme-primary">
            Hair Accessories & Butterfly Claws
          </a>
          <a href="#budget" onClick={() => setIsMobileMenuOpen(false)} className="block py-1 hover:text-theme-primary">
            Budget Gifts Under ₹999
          </a>
          <a href="#build-box" onClick={() => setIsMobileMenuOpen(false)} className="block py-1 text-theme-primary font-bold">
            Make Your Own Box 🎁
          </a>
          <a href="#reviews" onClick={() => setIsMobileMenuOpen(false)} className="block py-1 hover:text-theme-primary">
            Customer Unboxing Reviews (50k+)
          </a>
        </div>
      )}
    </header>
  );
}
