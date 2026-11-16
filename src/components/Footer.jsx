import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { ArrowUpRight } from 'lucide-react';
import { playChime } from '../utils/sound';

export default function Footer() {
  const [email, setEmail] = useState('');
  const { showToast } = useCart();

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      playChime('unboxing');
      showToast('Welcome to Petal Club. Secret code PETAL10 is activated.');
      setEmail('');
    }
  };

  return (
    <footer className="bg-atelier-void text-atelier-sand pt-20 pb-12 border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Newsletter & Atelier Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          <div className="lg:col-span-6 space-y-4">
            <span className="font-syne text-[10px] uppercase tracking-[0.35em] text-atelier-gold font-bold">
              Private Salon Invitation
            </span>
            <h3 className="font-italiana text-3xl sm:text-5xl text-atelier-pearl">
              Never Miss A Limited Hamper Release
            </h3>
            <p className="text-xs text-atelier-sand/70 font-sans font-light max-w-md">
              Receive private previews for festival editions, royal Awadhi filigree jhumka batches, and member-only 10% privileges.
            </p>

            <form onSubmit={handleSubscribe} className="flex max-w-md gap-2 pt-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your personal email"
                className="flex-1 bg-white/5 border border-white/15 rounded-full px-5 py-3 text-xs text-atelier-pearl placeholder-atelier-sand/40 focus:outline-none focus:border-atelier-rose font-sans"
              />
              <button
                type="submit"
                className="bg-atelier-rose hover:bg-atelier-crimson text-white font-syne text-[11px] uppercase tracking-wider font-bold px-6 py-3 rounded-full transition-all shadow-glow-rose flex-shrink-0"
              >
                Join
              </button>
            </form>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-8 text-xs font-syne uppercase tracking-wider">
            <div className="space-y-3">
              <div className="text-atelier-gold font-bold text-[10px]">The Archive</div>
              <ul className="space-y-2 text-atelier-sand/70">
                <li><a href="#curated-edit" className="hover:text-atelier-rose transition-colors">Couture Hampers</a></li>
                <li><a href="#curated-edit" className="hover:text-atelier-rose transition-colors">Light Wala Jhumkas</a></li>
                <li><a href="#curated-edit" className="hover:text-atelier-rose transition-colors">16-Jhumka Trays</a></li>
                <li><a href="#curated-edit" className="hover:text-atelier-rose transition-colors">Butterfly Claws</a></li>
                <li><a href="#curated-edit" className="hover:text-atelier-rose transition-colors">Under ₹999 Edit</a></li>
              </ul>
            </div>

            <div className="space-y-3">
              <div className="text-atelier-gold font-bold text-[10px]">Concierge</div>
              <ul className="space-y-2 text-atelier-sand/70">
                <li><a href="#" className="hover:text-atelier-rose transition-colors">Transit Tracking</a></li>
                <li><a href="#" className="hover:text-atelier-rose transition-colors">Unboxing Video Terms</a></li>
                <li><a href="#" className="hover:text-atelier-rose transition-colors">Damage-Proof Policy</a></li>
                <li><a href="#" className="hover:text-atelier-rose transition-colors">Studio Dispatch</a></li>
              </ul>
            </div>

            <div className="space-y-3">
              <div className="text-atelier-gold font-bold text-[10px]">The Atelier</div>
              <ul className="space-y-2 text-atelier-sand/70">
                <li>Lucknow, UP, India</li>
                <li>care@boldpetals.in</li>
                <li><a href="https://wa.me/919999999999" target="_blank" rel="noreferrer" className="text-atelier-rose font-bold">WhatsApp Studio →</a></li>
              </ul>
            </div>
          </div>

        </div>

        {/* Monumental Editorial Brand Wordmark */}
        <div className="py-12 border-b border-white/10 text-center overflow-hidden">
          <span className="font-italiana text-5xl sm:text-8xl lg:text-[130px] tracking-[0.1em] text-white/5 select-none leading-none block hover:text-white/10 transition-colors duration-700">
            BOLD PETALS
          </span>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] font-syne text-atelier-sand/50 tracking-wider uppercase gap-4">
          <p>© 2026 Bold Petals Haute Atelier. Handcrafted in Lucknow.</p>
          <div className="flex items-center gap-4">
            <span>Encrypted UPI / Card Checkout</span>
            <span>•</span>
            <span>100% Unboxing Video Protection</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
