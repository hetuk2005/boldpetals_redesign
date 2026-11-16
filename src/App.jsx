import React, { useState } from 'react';
import AnnouncementBar from './components/AnnouncementBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MarqueeTicker from './components/MarqueeTicker';
import CategoryScroller from './components/CategoryScroller';
import ProductGrid from './components/ProductGrid';
import HamperBuilder from './components/HamperBuilder';
import Philosophy from './components/Philosophy';
import Testimonials from './components/Testimonials';
import InstagramGrid from './components/InstagramGrid';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import QuickViewModal from './components/QuickViewModal';
import SearchModal from './components/SearchModal';
import Toast from './components/Toast';
import { useCart } from './context/CartContext';
import { useWishlist } from './context/WishlistContext';

export default function App() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { showToast } = useCart();
  const { wishlistCount } = useWishlist();

  const handleOpenWishlist = () => {
    showToast(`${wishlistCount} Keepsakes Vaulted in Wishlist`);
  };

  const handleSelectCategory = (categoryId) => {
    setActiveCategory(categoryId);
    const element = document.getElementById('curated-edit');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-atelier-void text-atelier-pearl font-sans selection:bg-atelier-rose selection:text-white antialiased">
      <AnnouncementBar />
      <Navbar
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenWishlist={handleOpenWishlist}
      />
      
      <main className="flex-1">
        <Hero />
        <MarqueeTicker />
        <CategoryScroller onSelectCategory={handleSelectCategory} />
        <ProductGrid
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          onQuickView={(product) => setQuickViewProduct(product)}
        />
        <MarqueeTicker reverse={true} textList={[
          "LUCKNOW BESPOKE ATELIER",
          "UNBOXING VIDEO REQUIRED FOR REPLACEMENTS",
          "AUTHENTIC KOREAN AESTHETIC",
          "HANDMADE LUXURY CHESTS",
          "HAUTE PERFUMERY & JEWELS",
          "DIRECT DISPATCH FROM UTTAR PRADESH"
        ]} />
        <HamperBuilder />
        <Philosophy />
        <Testimonials />
        <InstagramGrid />
      </main>

      <Footer />

      {/* Global Modals & Drawers */}
      <CartDrawer />
      <QuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
      />
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
      <Toast />
    </div>
  );
}
