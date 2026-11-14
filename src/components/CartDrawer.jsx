import React from 'react';
import { X, Plus, Minus, Trash2, ShoppingBag, ShieldCheck } from 'lucide-react';
import { useCart } from '../context/CartContext';

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

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-brand-dark/50 backdrop-blur-sm z-50 transition-opacity"
        onClick={() => setIsCartOpen(false)}
      ></div>

      {/* Slide Drawer */}
      <div className="fixed inset-y-0 right-0 max-w-md w-full bg-white z-50 shadow-2xl transition-transform duration-300 ease-in-out flex flex-col">
        
        {/* Header */}
        <div className="p-5 border-b border-stone-200 flex items-center justify-between bg-brand-cream">
          <div className="flex items-center gap-2">
            <h3 className="font-serif text-xl font-bold text-brand-wine">Your Gift Bag</h3>
            <span className="text-xs bg-brand-rose text-white px-2 py-0.5 rounded-full font-bold">
              {totalItems} {totalItems === 1 ? 'Item' : 'Items'}
            </span>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-1 text-stone-400 hover:text-stone-700"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free Shipping Meter */}
        <div className="bg-brand-blush/60 px-5 py-3 border-b border-brand-rose/20 text-xs">
          <div className="flex justify-between items-center text-brand-wine font-semibold mb-1.5">
            <span>
              {isFreeShipping
                ? '🎉 You unlocked FREE Express Shipping!'
                : `Add ₹${freeShippingThreshold - subtotal} more for FREE shipping`}
            </span>
            <span className="text-[10px] bg-brand-wine text-white px-1.5 py-0.5 rounded font-bold">
              {isFreeShipping ? 'Unlocked' : `${progressPercent}%`}
            </span>
          </div>
          <div className="w-full bg-white rounded-full h-1.5 overflow-hidden">
            <div
              className="bg-gradient-to-r from-brand-rose to-brand-gold h-full rounded-full transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            ></div>
          </div>
        </div>

        {/* Items List */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {cart.length === 0 ? (
            <div className="text-center py-12 text-stone-400 space-y-3">
              <ShoppingBag className="w-12 h-12 mx-auto text-stone-300" />
              <p className="text-sm">Your gift bag is currently empty.</p>
              <button
                onClick={() => setIsCartOpen(false)}
                className="inline-block text-xs bg-brand-wine text-white px-4 py-2 rounded-full font-bold"
              >
                Discover Hampers
              </button>
            </div>
          ) : (
            cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-3 p-3 bg-brand-cream/60 rounded-xl border border-stone-200"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-14 h-14 object-cover rounded-lg border border-stone-200"
                />
                <div className="flex-1 min-w-0">
                  <h4 className="text-xs font-bold text-brand-wine truncate">{item.title}</h4>
                  <div className="text-xs font-semibold text-stone-700 mt-0.5">
                    ₹{item.price.toLocaleString('en-IN')}
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="flex items-center border border-stone-300 rounded bg-white text-xs">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="px-2 py-0.5 text-stone-500 hover:bg-stone-100"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="px-2 py-0.5 font-bold">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="px-2 py-0.5 text-stone-500 hover:bg-stone-100"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-stone-400 hover:text-red-500 transition-colors"
                      title="Remove"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer Checkout */}
        {cart.length > 0 && (
          <div className="p-5 border-t border-stone-200 bg-brand-cream/60 space-y-3">
            <div className="space-y-1.5 text-xs">
              <div className="flex justify-between text-stone-600">
                <span>Subtotal</span>
                <span className="font-semibold text-stone-800">₹{subtotal.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between text-stone-600">
                <span>Standard Delivery</span>
                <span className="text-emerald-700 font-bold">{isFreeShipping ? 'FREE' : '₹99'}</span>
              </div>
              <div className="flex justify-between text-stone-600">
                <span>Applied Discount (PETAL10)</span>
                <span className="text-brand-rose font-bold">-₹{discount.toLocaleString('en-IN')}</span>
              </div>
              <div className="pt-2 border-t border-stone-200 flex justify-between text-base font-bold text-brand-wine">
                <span>Total To Pay</span>
                <span>₹{finalTotal.toLocaleString('en-IN')}</span>
              </div>
            </div>

            <button
              onClick={() => alert("Proceeding to Razorpay / UPI secure checkout. Fragile packaging guaranteed.")}
              className="w-full bg-brand-wine hover:bg-brand-deepRose text-white font-bold py-3.5 rounded-xl text-sm transition-all shadow-md flex items-center justify-center gap-2"
            >
              <ShieldCheck className="w-4 h-4 text-brand-gold" />
              <span>Proceed to Secure Checkout</span>
            </button>

            <p className="text-[10px] text-center text-stone-500">
              🔒 256-Bit SSL Encrypted • All UPI & Cards Accepted
            </p>
          </div>
        )}

      </div>
    </>
  );
}
