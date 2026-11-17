import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import { Loader2, Gift, Sparkles } from 'lucide-react';

export default function ProductGrid({ activeCategory, setActiveCategory, onQuickView }) {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetch('/data/products.json')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to load products');
        return res.json();
      })
      .then((data) => {
        setProducts(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, []);

  const filteredProducts = products.filter((p) => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'budget') return p.under999;
    return p.category === activeCategory;
  });

  const categories = [
    { id: 'all', label: 'All Creations' },
    { id: 'hampers', label: 'Curated Hampers' },
    { id: 'jewellery', label: 'Glowing Jhumkas' },
    { id: 'accessories', label: 'Hair Claws & Trays' },
    { id: 'budget', label: 'Under ₹999 Deals' }
  ];

  return (
    <section id="hampers" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-theme-border pb-6 mb-10 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-theme-primary">
              Handcrafted With Love
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-theme-dark mt-1">
              Trending Best Sellers
            </h2>
            <p className="text-xs text-theme-muted mt-1">
              Authentic products from our Lucknow studio. Inspected & damage-safe packed.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                  activeCategory === cat.id
                    ? 'bg-theme-primary text-white shadow-sm'
                    : 'bg-theme-light text-theme-dark hover:text-theme-primary border border-theme-border'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Loading Spinner */}
        {isLoading && (
          <div className="py-20 text-center flex flex-col items-center justify-center space-y-3">
            <Loader2 className="w-8 h-8 text-theme-primary animate-spin" />
            <p className="text-xs text-theme-muted font-medium">Fetching authentic collection...</p>
          </div>
        )}

        {/* Error Fallback */}
        {error && (
          <div className="py-12 text-center text-red-500 bg-red-50 rounded-2xl p-6">
            <p className="font-bold text-sm">Unable to load catalog.</p>
            <p className="text-xs text-stone-500 mt-1">{error}</p>
          </div>
        )}

        {/* Product Cards Grid */}
        {!isLoading && !error && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onQuickView={onQuickView}
              />
            ))}
          </div>
        )}

        {/* Add-on Mini Ribbon (Perfumes, Chocolates, Lip Balms) */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-theme-tint via-theme-light to-white border border-theme-border flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-theme-primary text-white flex items-center justify-center flex-shrink-0 shadow-sm">
              <Gift className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="font-serif text-lg font-bold text-theme-dark">
                Popular Goodies Inside Every Hamper
              </h4>
              <p className="text-xs text-theme-muted">
                Bellavita Date Perfume (₹220) • Lakmé Lip Balm (₹210) • Bournville Chocolate (₹249) • Sipper Tumbler (₹299)
              </p>
            </div>
          </div>
          <a
            href="#build-box"
            className="text-xs font-bold text-theme-primary hover:text-white hover:bg-theme-primary bg-white px-5 py-2.5 rounded-full border border-theme-border shadow-sm flex items-center gap-1.5 transition-colors flex-shrink-0"
          >
            <span>Custom Box Builder</span>
            <Sparkles className="w-3.5 h-3.5 text-theme-accent" />
          </a>
        </div>

      </div>
    </section>
  );
}
