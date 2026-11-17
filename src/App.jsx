import React, { useState } from 'react';
import AnnouncementBar from './components/AnnouncementBar';
import Navbar from './components/Navbar';
import StoryCategories from './components/StoryCategories';
import Hero from './components/Hero';
import TrustBadges from './components/TrustBadges';
import OccasionBanners from './components/OccasionBanners';
import ProductGrid from './components/ProductGrid';
import HamperBuilder from './components/HamperBuilder';
import Testimonials from './components/Testimonials';
import InstagramReels from './components/InstagramReels';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
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
    showToast(`You have ${wishlistCount} saved keepsakes in Wishlist!`);
  };

  const handleSelectCategory = (categoryId) => {
    setActiveCategory(categoryId);
    const element = document.getElementById('hampers');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-theme-light text-theme-dark font-sans selection:bg-theme-primary selection:text-white antialiased transition-colors duration-300">
      <AnnouncementBar />
      <Navbar
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenWishlist={handleOpenWishlist}
      />
      
      <main className="flex-1">
        {/* Instagram-style Category Story Highlights (Inspired by Aesthetic Magic by Anu) */}
        <StoryCategories onSelectCategory={handleSelectCategory} />
        
        {/* Hero Banner */}
        <Hero />

        {/* Shop by Occasion */}
        <OccasionBanners onSelectCategory={handleSelectCategory} />

        {/* Trending Catalog & Products */}
        <ProductGrid
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          onQuickView={(product) => setQuickViewProduct(product)}
        />

        {/* Interactive Custom Hamper Studio */}
        <HamperBuilder />

        {/* Real Customer Unboxing Reviews */}
        <Testimonials />

        {/* Community & Instagram Showcase */}
        <InstagramReels />

        {/* Trust & Guarantee Badges (100% Unboxing Proof, Damage-Proof Packing, Express, Lucknow) */}
        <TrustBadges />
      </main>

      <Footer />

      {/* Floating WhatsApp Support Button */}
      <FloatingWhatsApp />

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
