import React from 'react';
import { X, Plus, ShieldCheck, Truck, Sparkles } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { playChime } from '../utils/sound';

export default function QuickViewModal({ product, onClose }) {
  const { addToCart } = useCart();
  if (!product) return null;

  const handleAdd = () => {
    playChime('unboxing');
    addToCart(product);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/85 backdrop-blur-md z-50 flex items-center justify-center p-4">
      <div className="glass-card bg-atelier-obsidian text-atelier-pearl rounded-3xl max-w-2xl w-full overflow-hidden shadow-dramatic relative border border-white/15 max-h-[90vh] flex flex-col md:flex-row">
        
        {/* Close Button */}
        <button
          onClick={() => { playChime('click'); onClose(); }}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full glass-card text-atelier-sand hover:text-white flex items-center justify-center shadow"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Product Image Frame */}
        <div className="md:w-1/2 aspect-square md:aspect-auto bg-atelier-velvet relative overflow-hidden">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover filter brightness-95"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-atelier-obsidian/70 to-transparent"></div>
        </div>

        {/* Info Column */}
        <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between space-y-6">
          <div className="space-y-3">
            <span className="font-syne text-[9px] uppercase tracking-[0.3em] text-atelier-gold font-bold">
              {product.category}
            </span>
            <h3 className="font-italiana text-3xl text-atelier-pearl leading-snug">
              {product.title}
            </h3>

            <div className="flex items-baseline gap-2 pt-1">
              <span className="font-syne text-2xl font-bold text-atelier-pearl">
                ₹{product.price.toLocaleString('en-IN')}
              </span>
              {product.originalPrice && (
                <span className="text-xs text-atelier-sand/40 line-through font-syne">
                  ₹{product.originalPrice.toLocaleString('en-IN')}
                </span>
              )}
              <span className="text-[10px] font-syne uppercase tracking-wider bg-atelier-wine text-atelier-rose px-2 py-0.5 rounded border border-white/10 font-bold ml-2">
                Atelier Handcrafted
              </span>
            </div>

            <p className="text-xs text-atelier-sand/80 font-sans font-light leading-relaxed pt-2 border-t border-white/10">
              {product.description}
            </p>

            <div className="space-y-1.5 text-[11px] font-syne uppercase tracking-wider text-atelier-sand/60 pt-2">
              <p className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>100% Continuous Unboxing Protection</span>
              </p>
              <p className="flex items-center gap-2">
                <Truck className="w-3.5 h-3.5 text-atelier-gold" />
                <span>Dispatches from Lucknow (48-72 Hours)</span>
              </p>
            </div>
          </div>

          <div>
            <button
              onClick={handleAdd}
              className="w-full bg-gradient-to-r from-atelier-rose to-atelier-crimson hover:from-atelier-crimson hover:to-atelier-rose text-white font-syne text-xs uppercase tracking-widest font-bold py-4 rounded-full shadow-glow-rose transition-all flex items-center justify-center gap-2"
            >
              <Plus className="w-4 h-4" />
              <span>Acquire & Encase in Bag</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
