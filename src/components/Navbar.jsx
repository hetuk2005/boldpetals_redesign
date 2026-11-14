import React, { useState } from 'react';
import { ShoppingBag, Heart, Search, Menu, X, Sparkles } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

export default function Navbar({ onOpenSearch, onOpenWishlist }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { totalItems, setIsCartOpen } = useCart();
  const { wishlistCount } = useWishlist();

  return (
    <header className="sticky top-0 z-40 transition-all duration-300 glass-nav border-b border-brand-rose/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-brand-wine hover:text-brand-rose focus:outline-none"
            aria-label="Toggle Navigation"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Logo */}
          <div className="flex items-center gap-3">
            <a href="#" className="group flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-brand-wine to-brand-rose flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-300">
                <Sparkles className="w-5 h-5 text-brand-goldLight" />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-brand-wine leading-none">
                  Bold Petals
                </span>
                <span className="font-sans text-[10px] uppercase tracking-[0.22em] text-brand-gold font-semibold mt-1">
                  Curated Gift Atelier
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-8 text-sm font-medium text-stone-700">
            <a href="#hampers" className="hover:text-brand-deepRose transition-colors">Gift Hampers</a>
            <a href="#jewellery" className="hover:text-brand-deepRose transition-colors">Royal Jewellery</a>
            <a href="#accessories" className="hover:text-brand-deepRose transition-colors">Hair & Clips</a>
            <a href="#budget" className="hover:text-brand-deepRose transition-colors">Under ₹999</a>
            <a href="#build-box" className="text-brand-deepRose font-semibold hover:text-brand-wine flex items-center gap-1.5">
              <span>Make Your Own Box</span>
              <span className="text-[10px] bg-brand-blush text-brand-deepRose px-2 py-0.5 rounded-full border border-brand-rose/30">
                Custom
              </span>
            </a>
            <a href="#reviews" className="hover:text-brand-deepRose transition-colors">Real Reviews</a>
          </nav>

          {/* Action Icons */}
          <div className="flex items-center space-x-3 sm:space-x-5">
            <button
              onClick={onOpenSearch}
              className="p-2 text-stone-600 hover:text-brand-wine transition-colors"
              title="Search catalog"
            >
              <Search className="w-5 h-5" />
            </button>

            <button
              onClick={onOpenWishlist}
              className="p-2 text-stone-600 hover:text-brand-wine relative transition-colors"
              title="Wishlist"
            >
              <Heart className="w-5 h-5" />
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-brand-rose text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setIsCartOpen(true)}
              className="flex items-center gap-2 bg-brand-wine hover:bg-brand-deepRose text-white px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 shadow-sm hover:shadow-glow"
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="hidden sm:inline">Bag</span>
              <span className="bg-brand-gold text-brand-wine text-xs px-1.5 py-0.2 rounded-full font-bold">
                {totalItems}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Slide Down */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-brand-cream/98 backdrop-blur-xl border-t border-brand-rose/15 px-6 py-5">
          <div className="flex flex-col space-y-4 text-base font-medium text-brand-dark">
            <a href="#hampers" onClick={() => setIsMobileMenuOpen(false)} className="py-1 hover:text-brand-deepRose">
              Gift Hampers & Combos
            </a>
            <a href="#jewellery" onClick={() => setIsMobileMenuOpen(false)} className="py-1 hover:text-brand-deepRose">
              Royal Jhumka & Jewellery Boxes
            </a>
            <a href="#accessories" onClick={() => setIsMobileMenuOpen(false)} className="py-1 hover:text-brand-deepRose">
              Hair Accessories & Scrunchies
            </a>
            <a href="#budget" onClick={() => setIsMobileMenuOpen(false)} className="py-1 hover:text-brand-deepRose">
              Budget Gifts Under ₹999
            </a>
            <a href="#build-box" onClick={() => setIsMobileMenuOpen(false)} className="py-1 text-brand-wine font-semibold flex items-center justify-between">
              <span>Make Your Own Hamper</span>
              <span className="text-xs bg-brand-blush px-2 py-0.5 rounded text-brand-deepRose">Customize</span>
            </a>
            <a href="#reviews" onClick={() => setIsMobileMenuOpen(false)} className="py-1 hover:text-brand-deepRose">
              Customer Stories (50k+)
            </a>
            <div className="pt-3 border-t border-brand-rose/20 text-xs text-stone-500 flex justify-between items-center">
              <span>Studio: Lucknow Atelier</span>
              <a href="https://wa.me/919999999999" target="_blank" rel="noreferrer" className="text-brand-deepRose font-semibold">
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
