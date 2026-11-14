import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

export default function Footer() {
  const [email, setEmail] = useState('');
  const { showToast } = useCart();

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      showToast('Welcome to Petal VIP! Coupon PETAL10 is active.');
      setEmail('');
    }
  };

  return (
    <footer className="bg-brand-wine text-stone-300 pt-16 pb-12 border-t border-brand-rose/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-brand-gold text-brand-wine flex items-center justify-center font-serif font-bold">
                BP
              </div>
              <span className="font-display text-2xl font-bold text-white tracking-tight">
                Bold Petals
              </span>
            </div>
            <p className="text-xs text-stone-300 max-w-sm leading-relaxed">
              Bold Petals is more than a gift atelier—it is an emotion. Handcrafted custom gift hampers, royal jhumkas, and timeless aesthetics based in Lucknow, Uttar Pradesh.
            </p>
            <div className="text-xs text-stone-400">
              <p><strong>Studio:</strong> Lucknow, Uttar Pradesh, India</p>
              <p className="mt-1"><strong>Support:</strong> care@boldpetals.in | WhatsApp: +91 98765 43210</p>
            </div>
          </div>

          {/* Catalog Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-brand-gold uppercase tracking-widest">Collections</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#hampers" className="hover:text-white transition-colors">Curated Gift Hampers</a></li>
              <li><a href="#jewellery" className="hover:text-white transition-colors">Light Wala Jhumkas</a></li>
              <li><a href="#jewellery" className="hover:text-white transition-colors">16 Jhumka Collector Boxes</a></li>
              <li><a href="#accessories" className="hover:text-white transition-colors">Korean Butterfly Claws</a></li>
              <li><a href="#hampers" className="hover:text-white transition-colors">Shinchan Viral Box</a></li>
              <li><a href="#budget" className="hover:text-white transition-colors">Hampers Under ₹999</a></li>
            </ul>
          </div>

          {/* Care & Terms */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-brand-gold uppercase tracking-widest">Customer Care</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#" className="hover:text-white transition-colors">Track Your Order</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Shipping Policy (8-12 Days)</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Unboxing Video Terms</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Replacement & Refunds</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-brand-gold uppercase tracking-widest">Get 10% Off</h4>
            <p className="text-xs text-stone-300">
              Join our Petal VIP list for new hamper drops and secret festival discounts.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full bg-white/10 text-white placeholder-stone-400 text-xs px-3.5 py-2.5 rounded-xl border border-white/20 focus:outline-none focus:border-brand-gold"
              />
              <button
                type="submit"
                className="w-full bg-brand-gold hover:bg-brand-goldLight text-brand-wine font-bold text-xs py-2.5 rounded-xl transition-all shadow-sm"
              >
                Subscribe to Club
              </button>
            </form>
          </div>

        </div>

        {/* Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-stone-400 gap-4">
          <p>© 2026 Bold Petals India. All Rights Reserved. Handcrafted with love.</p>
          <div className="flex items-center gap-4">
            <span>UPI / GPay / NetBanking / Cards Accepted</span>
            <span>•</span>
            <span>100% Safe Checkout</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
