import React from 'react';
import { X, Plus, Minus, Trash2, ShoppingBag, ShieldCheck, Sparkles } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { playChime } from '../utils/sound';

export default function CartDrawer() {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
    totalItems,
    subtotal,
    discount,
    finalTotal,
    isFreeShipping,
    freeShippingThreshold
  } = useCart();

  if (!isCartOpen) return null;

  const progressPercent = Math.min(100, Math.round((subtotal / freeShippingThreshold) * 100));

  const handleClose = () => {
    playChime('click');
    setIsCartOpen(false);
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 transition-opacity"
        onClick={handleClose}
      ></div>

      {/* Slide Drawer */}
      <div className="fixed inset-y-0 right-0 max-w-md w-full bg-atelier-obsidian text-atelier-pearl z-50 shadow-2xl transition-transform duration-500 ease-in-out flex flex-col border-l border-white/10">
        
        {/* Header */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between bg-atelier-void">
          <div className="flex items-center gap-3">
            <h3 className="font-italiana text-2xl text-atelier-pearl">The Gift Bag</h3>
            <span className="font-syne text-[10px] bg-atelier-rose text-white px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider">
              {totalItems} {totalItems === 1 ? 'Piece' : 'Pieces'}
            </span>
          </div>
          <button
            onClick={handleClose}
            className="p-1.5 rounded-full text-atelier-sand hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free Express Shipping Meter */}
        <div className="bg-atelier-velvet px-6 py-3.5 border-b border-white/10 text-xs font-syne">
          <div className="flex justify-between items-center text-atelier-sand mb-2">
            <span className="text-[11px] uppercase tracking-wider">
              {isFreeShipping
                ? '🎉 Unlocked: Pan-India Free Express Shipping'
                : `Add ₹${freeShippingThreshold - subtotal} for Complimentary Shipping`}
            </span>
            <span className="text-[10px] font-bold text-atelier-gold">
              {isFreeShipping ? 'Unlocked' : `${progressPercent}%`}
            </span>
          </div>
          <div className="w-full bg-white/10 rounded-full h-1.5 overflow-hidden">
            <div
              className="bg-gradient-to-r from-atelier-rose to-atelier-gold h-full rounded-full transition-all duration-500"
              style={{ width: `${progressPercent}%` }}
            ></div>
          </div>
        </div>

        {/* Items Container */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {cart.length === 0 ? (
            <div className="text-center py-16 text-atelier-sand/50 space-y-4">
              <ShoppingBag className="w-12 h-12 mx-auto text-atelier-sand/30" />
              <p className="font-syne text-xs uppercase tracking-widest">Your atelier bag is vacant.</p>
              <button
                onClick={handleClose}
                className="inline-block font-syne text-xs uppercase tracking-widest font-bold bg-atelier-rose text-white px-6 py-2.5 rounded-full shadow-glow-rose"
              >
                Browse Curated Pieces
              </button>
            </div>
          ) : (
            cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 p-3.5 glass-card rounded-2xl border border-white/10"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-16 h-16 object-cover rounded-xl border border-white/10 flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <h4 className="font-italiana text-lg text-atelier-pearl truncate">{item.title}</h4>
                  <div className="font-syne text-xs font-bold text-atelier-gold mt-0.5">
                    ₹{item.price.toLocaleString('en-IN')}
                  </div>
                  
                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center border border-white/15 rounded-lg bg-black/40 text-xs">
                      <button
                        onClick={() => { playChime('click'); updateQuantity(item.id, -1); }}
                        className="px-2.5 py-1 text-atelier-sand hover:text-white"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="px-2 py-1 font-syne font-bold">{item.quantity}</span>
                      <button
                        onClick={() => { playChime('click'); updateQuantity(item.id, 1); }}
                        className="px-2.5 py-1 text-atelier-sand hover:text-white"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    <button
                      onClick={() => { playChime('click'); removeFromCart(item.id); }}
                      className="text-atelier-sand/40 hover:text-red-400 transition-colors"
                      title="Remove Piece"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer Billing */}
        {cart.length > 0 && (
          <div className="p-6 border-t border-white/10 bg-atelier-void space-y-4">
            <div className="space-y-2 text-xs font-syne">
              <div className="flex justify-between text-atelier-sand/70">
                <span>Subtotal</span>
                <span className="font-bold text-atelier-pearl">₹{subtotal.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between text-atelier-sand/70">
                <span>Express Courier</span>
                <span className="text-emerald-400 font-bold">{isFreeShipping ? 'COMPLIMENTARY' : '₹99'}</span>
              </div>
              <div className="flex justify-between text-atelier-sand/70">
                <span>Privilege Code (PETAL10)</span>
                <span className="text-atelier-rose font-bold">-₹{discount.toLocaleString('en-IN')}</span>
              </div>
              <div className="pt-2 border-t border-white/10 flex justify-between text-base font-bold text-atelier-pearl">
                <span>Grand Total</span>
                <span className="text-atelier-gold text-lg">₹{finalTotal.toLocaleString('en-IN')}</span>
              </div>
            </div>

            <button
              onClick={() => alert("Proceeding to 256-bit Encrypted Checkout. All pieces dispatched with continuous unboxing video guarantee.")}
              className="w-full bg-gradient-to-r from-atelier-rose via-atelier-crimson to-atelier-wine hover:from-atelier-crimson hover:to-atelier-rose text-white font-syne text-xs uppercase tracking-widest font-bold py-4 rounded-full shadow-glow-rose transition-all flex items-center justify-center gap-2"
            >
              <ShieldCheck className="w-4 h-4 text-atelier-gold" />
              <span>Checkout Safely — Instant Dispatch</span>
            </button>

            <div className="text-[10px] text-center text-atelier-sand/50 font-syne uppercase tracking-wider">
              Protected by 100% Video Unboxing Safe Protocol
            </div>
          </div>
        )}

      </div>
    </>
  );
}
