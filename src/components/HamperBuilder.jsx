import React, { useState } from 'react';
import { Sparkles, Check, Gift, Feather, ShieldCheck } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { playChime } from '../utils/sound';

export default function HamperBuilder() {
  const { addToCart } = useCart();

  const [boxOption, setBoxOption] = useState({
    name: 'Royal Crimson Velvet Trunk',
    price: 450,
    accent: 'bg-[#3D0E20]',
    desc: 'Heavyweight velvet with gold hardware & silk lining'
  });

  const [selectedItems, setSelectedItems] = useState([
    { id: 'jhumka', name: 'Light Wala Jhumka', price: 899, selected: true, icon: '✨' },
    { id: 'perfume', name: 'Bellavita Date Perfume (20ml)', price: 220, selected: false, icon: '🌹' },
    { id: 'sipper', name: 'Aesthetic Glass Sipper Tumbler', price: 299, selected: false, icon: '🫧' },
    { id: 'claws', name: '2 Metal Butterfly Hair Claws', price: 59, selected: false, icon: '🦋' }
  ]);

  const [cardMessage, setCardMessage] = useState('To the sweetest soul, wishing you endless magic on your special day.');

  const toggleItem = (id) => {
    playChime('click');
    setSelectedItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, selected: !item.selected } : item
      )
    );
  };

  const itemsTotal = selectedItems
    .filter((i) => i.selected)
    .reduce((sum, i) => sum + i.price, 0);

  const grandTotal = boxOption.price + itemsTotal;

  const handleCreateHamper = () => {
    playChime('unboxing');
    const customProduct = {
      id: `custom-hamper-${Date.now()}`,
      title: `Bespoke Hamper (${boxOption.name})`,
      price: grandTotal,
      image: 'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?auto=format&fit=crop&w=400&q=80'
    };
    addToCart(customProduct);
  };

  return (
    <section id="unboxing-lab" className="py-24 sm:py-32 bg-atelier-void relative overflow-hidden border-t border-white/10">
      
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-atelier-wine/20 rounded-full blur-[180px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Headline */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="font-syne text-[10px] uppercase tracking-[0.4em] text-atelier-gold font-bold">
            The Haute Atelier Lab
          </span>
          <h2 className="font-italiana text-4xl sm:text-6xl text-atelier-pearl">
            Curate Your Own Unboxing Rite
          </h2>
          <p className="text-atelier-sand/70 text-sm font-sans font-light">
            Every bespoke box is assembled by hand in our Lucknow atelier, laced with satin ribbons, preserved petals, and your handwritten calligraphed letter.
          </p>
        </div>

        {/* 2-Column Lab Experience */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Interactive Box Customizer Controls */}
          <div className="lg:col-span-7 space-y-8 glass-card p-6 sm:p-10 rounded-3xl border border-white/10">
            
            {/* Step 1: Box Style */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-syne text-xs uppercase tracking-widest text-atelier-gold font-bold">
                  01 / Select Your Keepsake Chest
                </span>
                <span className="font-syne text-xs text-atelier-sand/60">Stage 1 of 3</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { name: 'Royal Crimson Velvet Trunk', price: 450, desc: 'Velvet trunk with brass clasp' },
                  { name: 'Blush Satin Heart Box', price: 350, desc: 'Ribbon-tied romantic heart' },
                  { name: 'Vintage Botanical Pine', price: 250, desc: 'Raw pine wood keepsake' }
                ].map((b, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => { playChime('click'); setBoxOption(b); }}
                    className={`text-left p-4 rounded-2xl transition-all duration-300 flex flex-col justify-between ${
                      boxOption.name === b.name
                        ? 'border-2 border-atelier-rose bg-atelier-wine/50 shadow-glow-rose'
                        : 'border border-white/10 bg-white/5 hover:border-white/20'
                    }`}
                  >
                    <div>
                      <div className="font-italiana text-lg text-atelier-pearl">{b.name}</div>
                      <div className="text-[11px] text-atelier-sand/60 mt-1 font-sans">{b.desc}</div>
                    </div>
                    <div className="font-syne text-xs font-bold text-atelier-gold mt-4">
                      ₹{b.price}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Add-in Delights */}
            <div className="space-y-3">
              <span className="font-syne text-xs uppercase tracking-widest text-atelier-gold font-bold">
                02 / Handpick Delights & Jewels
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {selectedItems.map((item) => (
                  <label
                    key={item.id}
                    className={`flex items-center gap-3 p-3.5 rounded-xl border transition-all cursor-pointer ${
                      item.selected
                        ? 'border-atelier-rose/80 bg-atelier-wine/40 text-atelier-pearl'
                        : 'border-white/10 bg-white/5 text-atelier-sand/70 hover:border-white/20'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={item.selected}
                      onChange={() => toggleItem(item.id)}
                      className="accent-atelier-rose w-4 h-4 rounded"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span>{item.icon}</span>
                        <span className="font-syne text-xs font-semibold truncate">{item.name}</span>
                      </div>
                      <span className="text-[11px] text-atelier-gold font-syne font-bold">+₹{item.price}</span>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Step 3: Real-Time Calligraphy Letter */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Feather className="w-3.5 h-3.5 text-atelier-gold" />
                <span className="font-syne text-xs uppercase tracking-widest text-atelier-gold font-bold">
                  03 / Free Calligraphy Note Inside Box
                </span>
              </div>
              
              <textarea
                rows={2}
                value={cardMessage}
                onChange={(e) => setCardMessage(e.target.value)}
                placeholder="Write your custom heartfelt note..."
                className="w-full bg-black/40 border border-white/15 rounded-xl p-3 text-xs text-atelier-pearl font-serif italic focus:outline-none focus:border-atelier-rose tracking-wide resize-none"
              ></textarea>
            </div>

          </div>

          {/* Right Column: Live Visual Unboxing Stage Preview */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="glass-card p-8 rounded-3xl border border-white/10 relative overflow-hidden space-y-6">
              
              {/* Box Stage Visual */}
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-gradient-to-tr from-atelier-wine via-atelier-obsidian to-black p-6 flex flex-col justify-between border border-white/10 shadow-dramatic">
                <div className="flex items-center justify-between">
                  <span className="font-syne text-[10px] uppercase tracking-widest text-atelier-gold font-bold">
                    [ ATELIER MOCKUP: STAGE 01 ]
                  </span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                </div>

                <div className="text-center space-y-1">
                  <div className="font-italiana text-2xl text-atelier-pearl">
                    {boxOption.name}
                  </div>
                  <div className="text-xs text-atelier-sand/70 font-sans">
                    {selectedItems.filter((i) => i.selected).length} Delights Selected
                  </div>
                </div>

                {/* Selected item chips inside preview */}
                <div className="flex flex-wrap items-center justify-center gap-1.5 pt-2">
                  {selectedItems
                    .filter((i) => i.selected)
                    .map((item) => (
                      <span
                        key={item.id}
                        className="bg-white/10 backdrop-blur-md px-2 py-0.5 rounded-full text-[10px] font-syne text-atelier-pearl border border-white/15"
                      >
                        {item.icon} {item.name.split(' ')[0]}
                      </span>
                    ))}
                </div>
              </div>

              {/* Calligraphy Card Live Rendering */}
              <div className="bg-[#F8F2E8] text-[#241712] p-6 rounded-xl shadow-lg border border-[#E0D4C3] space-y-2 transform -rotate-1 relative">
                <div className="font-syne text-[8px] uppercase tracking-[0.25em] text-[#8C6D58] border-b border-[#E0D4C3] pb-1">
                  Hand-Calligraphed Parchment Note
                </div>
                <p className="font-serif italic text-sm leading-relaxed min-h-[50px]">
                  "{cardMessage || 'Your message will appear here in ink...'}"
                </p>
                <div className="text-right font-serif text-[11px] text-[#8C6D58]">
                  — Sealed with Red Wax in Lucknow
                </div>
              </div>

              {/* Price Calculation & Checkout Trigger */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <div className="font-syne text-[10px] uppercase tracking-widest text-atelier-sand/60">
                    Bespoke Estimate
                  </div>
                  <div className="font-syne text-2xl font-bold text-atelier-pearl">
                    ₹{grandTotal.toLocaleString('en-IN')}
                  </div>
                </div>

                <button
                  onClick={handleCreateHamper}
                  className="bg-gradient-to-r from-atelier-rose to-atelier-crimson hover:from-atelier-crimson hover:to-atelier-rose text-white font-syne text-xs uppercase tracking-widest font-bold px-6 py-3.5 rounded-full shadow-glow-rose transition-all flex items-center gap-2 hover:scale-[1.02]"
                >
                  <Check className="w-4 h-4 text-atelier-gold" />
                  <span>Encase in Bag</span>
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
