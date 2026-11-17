import React from 'react';
import { Home, Grid, Gift, ShoppingBag, Heart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

export default function MobileBottomNav({ onOpenWishlist }) {
  const { totalItems, setIsCartOpen } = useCart();
  const { wishlistCount } = useWishlist();

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="lg:hidden fixed bottom-0 inset-x-0 bg-white/95 backdrop-blur-lg border-t border-theme-border z-40 py-2 px-4 shadow-[0_-4px_20px_rgba(0,0,0,0.06)]">
      <div className="flex items-center justify-around">
        
        {/* Home */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex flex-col items-center gap-1 text-theme-muted hover:text-theme-primary transition-colors py-1"
        >
          <Home className="w-5 h-5" />
          <span className="text-[10px] font-bold">Home</span>
        </button>

        {/* Categories / Shop */}
        <button
          onClick={() => scrollToSection('hampers')}
          className="flex flex-col items-center gap-1 text-theme-muted hover:text-theme-primary transition-colors py-1"
        >
          <Grid className="w-5 h-5" />
          <span className="text-[10px] font-bold">Shop</span>
        </button>

        {/* Custom Hamper Box */}
        <button
          onClick={() => scrollToSection('build-box')}
          className="flex flex-col items-center gap-1 text-theme-primary transition-colors py-1 relative"
        >
          <div className="w-9 h-9 -mt-5 rounded-full bg-theme-primary text-white flex items-center justify-center shadow-md border-2 border-white">
            <Gift className="w-4 h-4" />
          </div>
          <span className="text-[10px] font-bold text-theme-primary">Custom Box</span>
        </button>

        {/* Wishlist */}
        <button
          onClick={onOpenWishlist}
          className="flex flex-col items-center gap-1 text-theme-muted hover:text-theme-primary transition-colors py-1 relative"
        >
          <Heart className="w-5 h-5" />
          {wishlistCount > 0 && (
            <span className="absolute top-0 right-3 w-3.5 h-3.5 bg-theme-primary text-white text-[9px] font-bold rounded-full flex items-center justify-center">
              {wishlistCount}
            </span>
          )}
          <span className="text-[10px] font-bold">Saved</span>
        </button>

        {/* Bag */}
        <button
          onClick={() => setIsCartOpen(true)}
          className="flex flex-col items-center gap-1 text-theme-muted hover:text-theme-primary transition-colors py-1 relative"
        >
          <ShoppingBag className="w-5 h-5" />
          {totalItems > 0 && (
            <span className="absolute top-0 right-2 w-3.5 h-3.5 bg-theme-primary text-white text-[9px] font-bold rounded-full flex items-center justify-center">
              {totalItems}
            </span>
          )}
          <span className="text-[10px] font-bold">Bag</span>
        </button>

      </div>
    </div>
  );
}
