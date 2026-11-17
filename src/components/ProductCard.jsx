import React from 'react';
import { Heart, Plus, Eye, Star } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

export default function ProductCard({ product, onQuickView }) {
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const inWishlist = isInWishlist(product.id);

  const discountPercent = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : null;

  return (
    <div className="product-card group bg-white rounded-2xl overflow-hidden border border-theme-border shadow-clean hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between">
      
      {/* Top Image Frame */}
      <div className="relative overflow-hidden aspect-[4/5] bg-stone-100">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Badges */}
        <div className="absolute top-2.5 left-2.5 flex flex-col gap-1 items-start">
          {product.badge && (
            <span className="bg-theme-primary text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow-sm">
              {product.badge}
            </span>
          )}
          {discountPercent && (
            <span className="bg-emerald-700 text-white text-[9px] font-bold px-2 py-0.5 rounded-full uppercase shadow-sm">
              {discountPercent}% OFF
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleWishlist(product.id);
          }}
          className={`absolute top-2.5 right-2.5 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center transition-colors shadow-sm ${
            inWishlist ? 'text-theme-primary' : 'text-stone-400 hover:text-theme-primary'
          }`}
          title="Wishlist"
        >
          <Heart className="w-4 h-4" fill={inWishlist ? 'currentColor' : 'none'} />
        </button>

        {/* Quick View Button on Hover */}
        <div className="absolute bottom-2.5 inset-x-2.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={() => onQuickView(product)}
            className="w-full bg-white/95 text-theme-dark text-xs font-bold py-2.5 rounded-xl text-center shadow-md hover:bg-white flex items-center justify-center gap-1.5 transition-colors"
          >
            <Eye className="w-3.5 h-3.5 text-theme-primary" />
            <span>Quick View</span>
          </button>
        </div>
      </div>

      {/* Info Content */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between text-[11px] text-theme-muted mb-1">
            <span className="uppercase tracking-wider font-semibold text-theme-primary">
              {product.category}
            </span>
            <span className="flex items-center gap-0.5 text-amber-500 font-bold">
              <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
              <span>{product.rating}</span>
            </span>
          </div>

          <h3 className="font-serif text-lg font-bold text-theme-dark group-hover:text-theme-primary transition-colors line-clamp-1">
            {product.title}
          </h3>
          <p className="text-xs text-theme-muted mt-1 line-clamp-1">
            {product.subtitle}
          </p>
        </div>

        {/* Price & Add to Bag */}
        <div className="mt-4 pt-3 border-t border-theme-border/60 flex items-center justify-between">
          <div>
            <span className="text-base font-bold text-theme-dark">
              ₹{product.price.toLocaleString('en-IN')}
            </span>
            {product.originalPrice && (
              <span className="text-xs text-stone-400 line-through ml-1.5">
                ₹{product.originalPrice.toLocaleString('en-IN')}
              </span>
            )}
          </div>

          <button
            onClick={() => addToCart(product)}
            className="bg-theme-tint hover:bg-theme-primary hover:text-white text-theme-primary font-bold text-xs px-3.5 py-1.5 rounded-lg transition-colors flex items-center gap-1 shadow-sm"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add</span>
          </button>
        </div>
      </div>

    </div>
  );
}
