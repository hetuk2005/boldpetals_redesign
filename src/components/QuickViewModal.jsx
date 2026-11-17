import React from 'react';
import { X, Plus, ShieldCheck, Truck } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function QuickViewModal({ product, onClose }) {
  const { addToCart } = useCart();
  if (!product) return null;

  const handleAdd = () => {
    addToCart(product);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white text-theme-dark rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl relative border border-theme-border max-h-[90vh] flex flex-col md:flex-row">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm text-theme-muted hover:text-theme-primary flex items-center justify-center shadow"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Product Image Frame */}
        <div className="md:w-1/2 aspect-square md:aspect-auto bg-stone-100 relative">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Details Column */}
        <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <span className="text-[10px] uppercase font-bold tracking-wider text-theme-primary">
              {product.category}
            </span>
            <h3 className="font-serif text-2xl font-bold text-theme-dark leading-snug">
              {product.title}
            </h3>

            <div className="flex items-baseline gap-2">
              <span className="text-xl font-bold text-theme-dark">
                ₹{product.price.toLocaleString('en-IN')}
              </span>
              {product.originalPrice && (
                <span className="text-xs text-stone-400 line-through">
                  ₹{product.originalPrice.toLocaleString('en-IN')}
                </span>
              )}
              <span className="text-[10px] bg-theme-tint text-theme-primary font-bold px-2 py-0.5 rounded">
                Limited Offer
              </span>
            </div>

            <p className="text-xs text-theme-muted leading-relaxed pt-2 border-t border-theme-border">
              {product.description}
            </p>

            <div className="space-y-1.5 text-[11px] text-theme-muted pt-2">
              <p className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>100% Unboxing Video Safe Guarantee</span>
              </p>
              <p className="flex items-center gap-1.5">
                <Truck className="w-3.5 h-3.5 text-theme-primary" />
                <span>All India Express Delivery (2-4 Days)</span>
              </p>
            </div>
          </div>

          <div className="pt-4">
            <button
              onClick={handleAdd}
              className="w-full bg-theme-primary hover:bg-theme-primaryHover text-white font-bold py-3 rounded-xl text-xs sm:text-sm transition-all shadow-md flex items-center justify-center gap-2"
            >
              <Plus className="w-4 h-4" />
              <span>Add to Gift Bag</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
