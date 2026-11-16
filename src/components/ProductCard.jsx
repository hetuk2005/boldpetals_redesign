import React from 'react';
import { Heart, Plus, Eye, Sparkles } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { playChime } from '../utils/sound';

export default function ProductCard({ product, onQuickView }) {
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const inWishlist = isInWishlist(product.id);

  const handleAdd = (e) => {
    e.stopPropagation();
    playChime('unboxing');
    addToCart(product);
  };

  const handleWishlist = (e) => {
    e.stopPropagation();
    playChime('click');
    toggleWishlist(product.id);
  };

  return (
    <div className="product-card group relative bg-atelier-velvet/60 rounded-2xl overflow-hidden border border-white/10 hover:border-atelier-rose/40 transition-all duration-500 flex flex-col justify-between hover:shadow-glow-rose">
      
      {/* Top Image Box */}
      <div className="relative overflow-hidden aspect-[4/5] bg-atelier-obsidian">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108 filter brightness-95 group-hover:brightness-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-atelier-obsidian/80 via-transparent to-transparent"></div>

        {/* Badge */}
        {product.badge && (
          <span className="absolute top-3 left-3 bg-atelier-wine/90 backdrop-blur-md text-atelier-pearl font-syne text-[9px] font-bold px-2.5 py-1 rounded-full uppercase tracking-widest border border-white/10">
            {product.badge}
          </span>
        )}

        {/* Wishlist Button */}
        <button
          onClick={handleWishlist}
          className={`absolute top-3 right-3 w-8 h-8 rounded-full glass-card flex items-center justify-center transition-all ${
            inWishlist ? 'text-atelier-rose border-atelier-rose' : 'text-atelier-sand hover:text-atelier-rose'
          }`}
          title="Save to Wishlist"
        >
          <Heart className="w-3.5 h-3.5" fill={inWishlist ? 'currentColor' : 'none'} />
        </button>

        {/* Quick View Button on Hover */}
        <div className="absolute bottom-3 inset-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={() => { playChime('click'); onQuickView(product); }}
            className="w-full py-2.5 rounded-xl glass-editorial text-atelier-pearl font-syne text-xs uppercase tracking-widest font-semibold hover:border-atelier-gold transition-colors flex items-center justify-center gap-1.5"
          >
            <Eye className="w-3.5 h-3.5 text-atelier-gold" />
            <span>Examine Piece</span>
          </button>
        </div>
      </div>

      {/* Info Container */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <div className="flex items-center justify-between">
            <span className="font-syne text-[9px] uppercase tracking-[0.25em] text-atelier-gold font-bold">
              {product.category}
            </span>
            <div className="flex items-center text-[10px] text-amber-400 font-syne">
              ★ {product.rating}
            </div>
          </div>

          <h3 className="font-italiana text-2xl text-atelier-pearl mt-1 group-hover:text-atelier-rose transition-colors line-clamp-1">
            {product.title}
          </h3>
          <p className="text-xs text-atelier-sand/70 font-sans font-light mt-1 line-clamp-1">
            {product.subtitle}
          </p>
        </div>

        {/* Price & Action */}
        <div className="pt-3 border-t border-white/10 flex items-center justify-between">
          <div>
            <span className="font-syne text-base font-bold text-atelier-pearl">
              ₹{product.price.toLocaleString('en-IN')}
            </span>
            {product.originalPrice && (
              <span className="text-xs text-atelier-sand/40 line-through ml-2 font-syne">
                ₹{product.originalPrice.toLocaleString('en-IN')}
              </span>
            )}
          </div>

          <button
            onClick={handleAdd}
            className="bg-white/5 hover:bg-atelier-rose text-atelier-pearl hover:text-white border border-white/10 hover:border-atelier-rose px-3.5 py-1.5 rounded-lg text-xs font-syne uppercase tracking-wider transition-all duration-300 flex items-center gap-1 shadow-sm"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Bag</span>
          </button>
        </div>

      </div>

    </div>
  );
}
