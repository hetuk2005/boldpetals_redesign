import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import { LayoutGrid, Rows, Loader2, Sparkles, Gift } from 'lucide-react';
import { playChime } from '../utils/sound';

export default function ProductGrid({ activeCategory, setActiveCategory, onQuickView }) {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'editorial'

  useEffect(() => {
    setIsLoading(true);
    fetch('/data/products.json')
      .then((res) => {
        if (!res.ok) throw new Error('Could not load catalog');
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
    { id: 'all', label: 'All Pieces' },
    { id: 'hampers', label: 'Couture Hampers' },
    { id: 'jewellery', label: 'Royal Filigree & Jhumkas' },
    { id: 'accessories', label: 'Korean Hair Keepsakes' },
    { id: 'budget', label: 'The Petite Edit (<₹999)' }
  ];

  return (
    <section id="curated-edit" className="py-20 sm:py-28 bg-atelier-obsidian relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between border-b border-white/10 pb-8 mb-12 gap-6">
          <div>
            <span className="font-syne text-[10px] uppercase tracking-[0.35em] text-atelier-gold font-bold">
              The Permanent Archive
            </span>
            <h2 className="font-italiana text-4xl sm:text-6xl text-atelier-pearl mt-2">
              The Curated Edit
            </h2>
            <p className="text-atelier-sand/70 text-xs sm:text-sm font-sans font-light mt-1 max-w-md">
              Every item is inspected, hand-polished, and encased in luxury protective presentation packaging in Lucknow.
            </p>
          </div>

          {/* Controls: Filter Pills + View Mode */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => { playChime('click'); setActiveCategory(cat.id); }}
                  className={`px-4 py-2 rounded-full text-xs font-syne tracking-wider uppercase transition-all duration-300 ${
                    activeCategory === cat.id
                      ? 'bg-atelier-rose text-white shadow-glow-rose font-bold'
                      : 'glass-card text-atelier-sand/70 hover:text-atelier-pearl'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* View Mode Toggle */}
            <div className="hidden sm:flex items-center gap-1 glass-card p-1 rounded-full border border-white/10">
              <button
                onClick={() => { playChime('click'); setViewMode('grid'); }}
                className={`p-1.5 rounded-full transition-colors ${
                  viewMode === 'grid' ? 'bg-white/15 text-atelier-rose' : 'text-atelier-sand/40 hover:text-atelier-sand'
                }`}
                title="Grid Catalog View"
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button
                onClick={() => { playChime('click'); setViewMode('editorial'); }}
                className={`p-1.5 rounded-full transition-colors ${
                  viewMode === 'editorial' ? 'bg-white/15 text-atelier-rose' : 'text-atelier-sand/40 hover:text-atelier-sand'
                }`}
                title="Editorial Lookbook View"
              >
                <Rows className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="py-24 text-center flex flex-col items-center justify-center space-y-4">
            <Loader2 className="w-8 h-8 text-atelier-rose animate-spin" />
            <p className="font-syne text-xs uppercase tracking-widest text-atelier-sand/60">
              Consulting the Atelier Vault...
            </p>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="py-16 text-center text-red-400 glass-card rounded-2xl p-6 border-red-500/20">
            <p className="font-syne text-sm uppercase">Unable to retrieve catalog data</p>
            <p className="text-xs text-atelier-sand/60 mt-1">{error}</p>
          </div>
        )}

        {/* Products Rendering */}
        {!isLoading && !error && (
          <>
            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onQuickView={onQuickView}
                  />
                ))}
              </div>
            ) : (
              /* Asymmetric Editorial Lookbook Mode */
              <div className="space-y-12">
                {filteredProducts.map((product, idx) => (
                  <div
                    key={product.id}
                    className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10 rounded-3xl glass-card border border-white/10 ${
                      idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
                    }`}
                  >
                    <div className={`lg:col-span-5 ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden group">
                        <img
                          src={product.image}
                          alt={product.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-atelier-obsidian/80 via-transparent to-transparent"></div>
                        {product.badge && (
                          <span className="absolute top-4 left-4 bg-atelier-wine font-syne text-[10px] uppercase font-bold tracking-widest text-atelier-pearl px-3 py-1 rounded-full border border-white/10">
                            {product.badge}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className={`lg:col-span-7 space-y-4 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                      <span className="font-syne text-[10px] uppercase tracking-[0.3em] text-atelier-gold font-bold">
                        Piece 0{idx + 1} — {product.category}
                      </span>
                      <h3 className="font-italiana text-3xl sm:text-5xl text-atelier-pearl">
                        {product.title}
                      </h3>
                      <p className="text-atelier-sand/80 text-sm font-sans font-light leading-relaxed max-w-xl">
                        {product.description}
                      </p>
                      
                      <div className="pt-4 flex items-center justify-between max-w-md">
                        <div>
                          <span className="font-syne text-2xl font-bold text-atelier-pearl">
                            ₹{product.price.toLocaleString('en-IN')}
                          </span>
                          {product.originalPrice && (
                            <span className="text-sm text-atelier-sand/40 line-through ml-2 font-syne">
                              ₹{product.originalPrice.toLocaleString('en-IN')}
                            </span>
                          )}
                        </div>

                        <button
                          onClick={() => onQuickView(product)}
                          className="font-syne text-xs uppercase tracking-widest text-atelier-rose hover:text-white border-b border-atelier-rose pb-1"
                        >
                          Examine Details →
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        )}

        {/* Add-on Delights Ribbon */}
        <div className="mt-16 p-6 sm:p-8 rounded-2xl glass-card border border-atelier-gold/20 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-atelier-wine text-atelier-gold flex items-center justify-center flex-shrink-0">
              <Gift className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-italiana text-2xl text-atelier-pearl">
                The Curated Add-on Cellar
              </h4>
              <p className="text-xs text-atelier-sand/70 font-sans mt-0.5">
                Bellavita Date Perfume (₹220) • Lakmé Tinted Balm (₹210) • Bournville Dark Chocolate (₹249) • Ferrero Rocher (₹299)
              </p>
            </div>
          </div>
          <a
            href="#unboxing-lab"
            className="text-xs font-syne uppercase tracking-widest font-bold text-atelier-obsidian bg-atelier-gold hover:bg-atelier-goldLight px-6 py-3 rounded-full transition-all shadow-glow-gold flex items-center gap-2 flex-shrink-0"
          >
            <span>Design Custom Hamper</span>
            <Sparkles className="w-3.5 h-3.5 text-atelier-obsidian" />
          </a>
        </div>

      </div>
    </section>
  );
}
