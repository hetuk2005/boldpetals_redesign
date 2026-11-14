import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import { Gift, Sparkles, Loader2 } from 'lucide-react';

export default function ProductGrid({ activeCategory, setActiveCategory, onQuickView }) {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetching products dynamically from /data/products.json
  useEffect(() => {
    setIsLoading(true);
    fetch('/data/products.json')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to load products catalog');
        }
        return res.json();
      })
      .then((data) => {
        setProducts(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching products:', err);
        setError(err.message);
        setIsLoading(false);
      });
  }, []);

  // Filter based on activeCategory
  const filteredProducts = products.filter((p) => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'budget') return p.under999;
    return p.category === activeCategory;
  });

  const categories = [
    { id: 'all', label: 'All Creations' },
    { id: 'hampers', label: 'Gift Hampers' },
    { id: 'jewellery', label: 'Jewellery & Jhumkas' },
    { id: 'accessories', label: 'Clips & Essentials' },
    { id: 'budget', label: 'Under ₹999' }
  ];

  return (
    <section id="hampers" className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header & Category Filter Buttons */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-brand-rose/20 gap-4">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-brand-gold">
              The Bold Petals Atelier
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-wine mt-1">
              Our Signature Catalog
            </h2>
            <p className="text-stone-500 text-sm mt-1">
              Authentic handcrafted collections direct from our Lucknow studio.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                  activeCategory === cat.id
                    ? 'bg-brand-wine text-white shadow-sm'
                    : 'bg-white text-stone-600 hover:text-brand-wine border border-stone-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="py-20 text-center flex flex-col items-center justify-center space-y-3">
            <Loader2 className="w-8 h-8 text-brand-rose animate-spin" />
            <p className="text-stone-500 text-sm">Fetching authentic products from catalog...</p>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="py-16 text-center text-red-500 bg-red-50 rounded-2xl p-6">
            <p className="font-semibold">Unable to load products.</p>
            <p className="text-xs text-stone-500 mt-1">{error}</p>
          </div>
        )}

        {/* Product Cards Grid */}
        {!isLoading && !error && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onQuickView={onQuickView}
              />
            ))}
          </div>
        )}

        {/* Add-ons Mini Ribbon */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-brand-blush via-white to-amber-50 border border-brand-rose/20 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-brand-wine text-brand-goldLight flex items-center justify-center flex-shrink-0">
              <Gift className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif text-lg font-bold text-brand-wine">
                Popular Add-ons in Every Box
              </h4>
              <p className="text-xs text-stone-600">
                Bellavita Date Perfume (₹220) • Lakmé Lip Balm (₹210) • Bournville Chocolate (₹249) • Ferrero Rocher (₹299)
              </p>
            </div>
          </div>
          <a
            href="#build-box"
            className="text-xs font-bold text-brand-wine hover:text-brand-deepRose bg-white px-5 py-2.5 rounded-full border border-brand-rose/30 shadow-sm flex items-center gap-1.5 flex-shrink-0"
          >
            <span>Include In Custom Hamper</span>
            <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
          </a>
        </div>

      </div>
    </section>
  );
}
