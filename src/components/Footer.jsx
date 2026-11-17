import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

export default function Footer() {
  const [email, setEmail] = useState('');
  const { showToast } = useCart();

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      showToast('Welcome to Petal Club! Secret code PETAL10 is active.');
      setEmail('');
    }
  };

  return (
    <footer className="bg-white text-theme-dark pt-16 pb-12 border-t border-theme-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-theme-border">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-theme-tint text-theme-primary flex items-center justify-center font-serif font-bold">
                BP
              </div>
              <span className="font-serif text-2xl font-bold text-theme-primary tracking-tight">
                Bold Petals
              </span>
            </div>
            <p className="text-xs text-theme-muted max-w-sm leading-relaxed">
              Bold Petals is more than a gift brand—it is an emotion. Handcrafted custom gift hampers, illuminated jhumkas, and timeless aesthetic pieces crafted for special celebrations across India.
            </p>
            <div className="text-xs text-theme-muted space-y-1">
              <p><strong>Operations:</strong> Online Atelier with All-India Express Delivery</p>
              <p><strong>Support:</strong> care@boldpetals.in | WhatsApp: +91 98765 43210</p>
            </div>
          </div>

          {/* Collections */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-theme-primary uppercase tracking-wider">Collections</h4>
            <ul className="space-y-2 text-xs text-theme-muted">
              <li><a href="#hampers" className="hover:text-theme-primary transition-colors">Curated Gift Hampers</a></li>
              <li><a href="#jewellery" className="hover:text-theme-primary transition-colors">Light Wala Jhumkas</a></li>
              <li><a href="#jewellery" className="hover:text-theme-primary transition-colors">16 Jhumka Collector Boxes</a></li>
              <li><a href="#accessories" className="hover:text-theme-primary transition-colors">Korean Butterfly Claws</a></li>
              <li><a href="#hampers" className="hover:text-theme-primary transition-colors">Shinchan Viral Box</a></li>
              <li><a href="#budget" className="hover:text-theme-primary transition-colors">Deals Under ₹999</a></li>
            </ul>
          </div>

          {/* Customer Care */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-theme-primary uppercase tracking-wider">Customer Care</h4>
            <ul className="space-y-2 text-xs text-theme-muted">
              <li><a href="#" className="hover:text-theme-primary transition-colors">Track Your Order</a></li>
              <li><a href="#" className="hover:text-theme-primary transition-colors">Shipping Policy (2-4 Days)</a></li>
              <li><a href="#" className="hover:text-theme-primary transition-colors">Continuous Unboxing Video Terms</a></li>
              <li><a href="#" className="hover:text-theme-primary transition-colors">Replacement Guarantee</a></li>
              <li><a href="#" className="hover:text-theme-primary transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-theme-primary uppercase tracking-wider">Get 10% Off</h4>
            <p className="text-xs text-theme-muted">
              Join our VIP list for new hamper drops and secret festival discounts.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full bg-theme-light text-theme-dark placeholder-stone-400 text-xs px-3.5 py-2.5 rounded-xl border border-theme-border focus:outline-none focus:border-theme-primary"
              />
              <button
                type="submit"
                className="w-full bg-theme-primary hover:bg-theme-primaryHover text-white font-bold text-xs py-2.5 rounded-xl transition-all shadow-sm"
              >
                Subscribe to Club
              </button>
            </form>
          </div>

        </div>

        {/* Disclaimer Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-theme-muted gap-4">
          <p>© 2026 Bold Petals India. Handcrafted with love • Delivering All Over India.</p>
          <div className="flex items-center gap-4">
            <span>UPI / GPay / NetBanking / Cards Accepted</span>
            <span>•</span>
            <span>100% Unboxing Protected</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
