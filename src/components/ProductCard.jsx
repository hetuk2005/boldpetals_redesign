import React from 'react';
import { Heart, Plus, Eye } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

export default function ProductCard({ product, onQuickView }) {
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const inWishlist = isInWishlist(product.id);

  return (
    <div className="product-card group bg-white rounded-2xl overflow-hidden border border-brand-rose/15 shadow-sm hover:shadow-hover transition-all duration-300 flex flex-col justify-between">
      {/* Top Image Box */}
      <div className="relative overflow-hidden aspect-[4/5] bg-stone-100">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        
        {/* Badge */}
        {product.badge && (
          <span className="absolute top-3 left-3 bg-brand-wine text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
            {product.badge}
          </span>
        )}

        {/* Wishlist Button */}
        <button
          onClick={() => toggleWishlist(product.id)}
          className={`absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center transition-colors shadow-sm ${
            inWishlist ? 'text-brand-rose' : 'text-stone-500 hover:text-brand-rose'
          }`}
          title="Wishlist"
        >
          <Heart className="w-4 h-4" fill={inWishlist ? 'currentColor' : 'none'} />
        </button>

        {/* Hover Quick View Trigger */}
        <div className="absolute bottom-3 inset-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-2">
          <button
            onClick={() => onQuickView(product)}
            className="flex-1 bg-white/95 text-brand-wine text-xs font-semibold py-2.5 rounded-xl text-center shadow-md hover:bg-white flex items-center justify-center gap-1.5"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Quick View</span>
          </button>
        </div>
      </div>

      {/* Info Content */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          <span className="text-[11px] font-semibold text-brand-gold uppercase tracking-wider">
            {product.category}
          </span>
          <h3 className="font-serif text-lg font-bold text-brand-wine mt-1 group-hover:text-brand-deepRose transition-colors line-clamp-1">
            {product.title}
          </h3>
          <p className="text-xs text-stone-500 mt-1 line-clamp-1">{product.subtitle}</p>
        </div>

        {/* Bottom Price & Add CTA */}
        <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between">
          <div>
            <span className="text-base font-bold text-brand-wine">
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
            className="bg-brand-blush hover:bg-brand-rose hover:text-white text-brand-wine text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1 shadow-sm"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add</span>
          </button>
        </div>
      </div>
    </div>
  );
}
