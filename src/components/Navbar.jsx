import React, { useState } from 'react';
import { ShoppingBag, Heart, Search, Menu, X, ArrowUpRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { playChime } from '../utils/sound';

export default function Navbar({ onOpenSearch, onOpenWishlist }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { totalItems, setIsCartOpen } = useCart();
  const { wishlistCount } = useWishlist();

  const handleCartOpen = () => {
    playChime('unboxing');
    setIsCartOpen(true);
  };

  return (
    <header className="sticky top-0 z-40 transition-all duration-300 glass-editorial border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 sm:h-24">
          
          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-atelier-pearl hover:text-atelier-rose transition-colors"
            aria-label="Toggle Navigation"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Left Navigation Links (Editorial Minimal) */}
          <nav className="hidden lg:flex items-center space-x-8 text-xs font-syne tracking-widest uppercase text-atelier-sand/80">
            <a href="#curated-edit" className="hover:text-atelier-rose transition-colors flex items-center gap-1 group">
              <span>The Catalog</span>
              <span className="text-[9px] text-atelier-gold opacity-60 group-hover:opacity-100">08</span>
            </a>
            <a href="#unboxing-lab" className="hover:text-atelier-rose transition-colors flex items-center gap-1 text-atelier-rose">
              <span>Custom Studio</span>
              <span className="w-1.5 h-1.5 rounded-full bg-atelier-rose"></span>
            </a>
            <a href="#philosophy" className="hover:text-atelier-rose transition-colors">
              Philosophy
            </a>
            <a href="#reviews" className="hover:text-atelier-rose transition-colors">
              Unboxings
            </a>
          </nav>

          {/* Central Logo Identity (High-Fashion Typography) */}
          <div className="flex items-center text-center">
            <a href="#" className="group flex flex-col items-center">
              <span className="font-italiana text-3xl sm:text-4xl lg:text-5xl tracking-[0.08em] text-atelier-pearl group-hover:text-atelier-rose transition-colors duration-500 font-normal">
                BOLD PETALS
              </span>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="h-[1px] w-4 bg-atelier-gold/40"></span>
                <span className="font-syne text-[9px] uppercase tracking-[0.35em] text-atelier-gold">
                  HAUTE GIFT ATELIER
                </span>
                <span className="h-[1px] w-4 bg-atelier-gold/40"></span>
              </div>
            </a>
          </div>

          {/* Right Action Icons & Bag Pill */}
          <div className="flex items-center space-x-3 sm:space-x-5">
            <button
              onClick={() => { playChime('click'); onOpenSearch(); }}
              className="p-2 text-atelier-pearl hover:text-atelier-rose transition-colors"
              title="Search Catalog"
            >
              <Search className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            <button
              onClick={() => { playChime('click'); onOpenWishlist(); }}
              className="p-2 text-atelier-pearl hover:text-atelier-rose relative transition-colors"
              title="Saved Keepsakes"
            >
              <Heart className="w-4 h-4 sm:w-5 sm:h-5" />
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-atelier-rose text-white text-[9px] font-syne font-bold rounded-full flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* Awwwards Style Magnetic Bag Pill */}
            <button
              onClick={handleCartOpen}
              className="flex items-center gap-2 bg-gradient-to-r from-atelier-wine to-atelier-crimson hover:from-atelier-crimson hover:to-atelier-rose text-atelier-pearl px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs font-syne tracking-wider uppercase transition-all duration-300 border border-atelier-rose/30 shadow-glow-rose hover:scale-[1.03]"
            >
              <ShoppingBag className="w-3.5 h-3.5 text-atelier-gold" />
              <span className="hidden sm:inline">Bag</span>
              <span className="bg-atelier-pearl text-atelier-obsidian text-[10px] font-bold px-1.5 py-0.2 rounded-full">
                {totalItems}
              </span>
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-atelier-obsidian/95 backdrop-blur-2xl border-t border-white/10 px-6 py-6 font-syne tracking-widest text-xs uppercase space-y-4">
          <a href="#curated-edit" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-atelier-pearl hover:text-atelier-rose">
            01 / The Catalog Archive
          </a>
          <a href="#unboxing-lab" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-atelier-rose font-bold">
            02 / Custom Hamper Studio
          </a>
          <a href="#philosophy" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-atelier-pearl hover:text-atelier-rose">
            03 / Atelier Philosophy
          </a>
          <a href="#reviews" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-atelier-pearl hover:text-atelier-rose">
            04 / 50k+ Unboxing Proof
          </a>
          <div className="pt-4 border-t border-white/10 text-[10px] text-atelier-sand/60 flex justify-between items-center">
            <span>Direct Lucknow Studio Concierge</span>
            <a href="https://wa.me/919999999999" target="_blank" rel="noreferrer" className="text-atelier-rose font-bold">
              WhatsApp Support →
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
