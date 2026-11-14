import React, { useState } from 'react';
import { Check, Sparkles } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function HamperBuilder() {
  const { addToCart } = useCart();

  const [boxOption, setBoxOption] = useState({
    name: 'Blush Satin Heart Box',
    price: 350,
    desc: 'Ribbon Tied Keepsake'
  });

  const [selectedItems, setSelectedItems] = useState([
    { id: 'jhumka', name: 'Light Wala Jhumka', price: 899, selected: true },
    { id: 'perfume', name: 'Bellavita Date Perfume', price: 220, selected: false },
    { id: 'sipper', name: 'Aesthetic Sipper Bottle', price: 299, selected: false },
    { id: 'claws', name: 'Butterfly Hair Claws', price: 59, selected: false }
  ]);

  const [cardMessage, setCardMessage] = useState('');

  const toggleItem = (id) => {
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

  const handleAddHamperToBag = () => {
    const customProduct = {
      id: `custom-hamper-${Date.now()}`,
      title: `Personalized Hamper (${boxOption.name})`,
      price: grandTotal,
      image: 'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?auto=format&fit=crop&w=300&q=80'
    };
    addToCart(customProduct);
  };

  return (
    <section id="build-box" className="py-16 sm:py-20 bg-brand-wine text-white relative overflow-hidden">
      <div className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full bg-brand-deepRose blur-3xl opacity-50 pointer-events-none"></div>
      <div className="absolute -left-20 -top-20 w-96 h-96 rounded-full bg-brand-rose blur-3xl opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Explainer */}
          <div className="lg:col-span-5 space-y-6">
            <span className="inline-block text-xs uppercase tracking-widest font-bold text-brand-goldLight">
              Customization Studio
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold leading-tight">
              Craft a Gift That Feels Like <span className="text-brand-rose italic">Pure Poetry.</span>
            </h2>
            <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
              Never settle for off-the-shelf. In three quick steps, handpick every jewel, fragrance, chocolate, and handwritten card. We wrap it in velvet ribbon and seal it with love in Lucknow.
            </p>

            {/* 3 Steps */}
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3">
                <span className="w-7 h-7 rounded-full bg-brand-gold text-brand-wine font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                  1
                </span>
                <div>
                  <h4 className="text-sm font-bold text-white">Choose Your Aesthetic Box</h4>
                  <p className="text-xs text-stone-300">Blush Pink, Royal Velvet Trunk, or Vintage Pine Keepsake</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="w-7 h-7 rounded-full bg-brand-gold text-brand-wine font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                  2
                </span>
                <div>
                  <h4 className="text-sm font-bold text-white">Fill with Treats & Jewels</h4>
                  <p className="text-xs text-stone-300">Mix jhumkas, butterfly claws, chocolates & Bellavita perfumes</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="w-7 h-7 rounded-full bg-brand-gold text-brand-wine font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                  3
                </span>
                <div>
                  <h4 className="text-sm font-bold text-white">Add Your Message & Polaroids</h4>
                  <p className="text-xs text-stone-300">Free calligraphy note card with each custom hamper</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Interactive Hamper Builder Widget */}
          <div className="lg:col-span-7 bg-white text-brand-dark p-6 sm:p-8 rounded-3xl shadow-2xl border border-white/20">
            <div className="flex items-center justify-between border-b border-stone-200 pb-4 mb-6">
              <div>
                <h3 className="font-serif text-xl font-bold text-brand-wine">
                  Interactive Hamper Builder
                </h3>
                <p className="text-xs text-stone-500">Pick items to see live preview & estimate</p>
              </div>
              <div className="text-right">
                <span className="text-xs text-stone-400">Total Estimate:</span>
                <div className="text-xl font-bold text-brand-wine">
                  ₹{grandTotal.toLocaleString('en-IN')}
                </div>
              </div>
            </div>

            <div className="space-y-5">
              
              {/* Step 1: Base Box */}
              <div>
                <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2">
                  Step 1: Choose Box Style
                </label>
                <div className="grid grid-cols-3 gap-2.5">
                  {[
                    { name: 'Blush Satin Heart Box', price: 350, desc: 'Ribbon Tied' },
                    { name: 'Luxe Gold Velvet Trunk', price: 450, desc: 'Reusable' },
                    { name: 'Vintage Craft Floral', price: 250, desc: 'Eco Chic' }
                  ].map((box, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setBoxOption(box)}
                      className={`text-left p-2.5 rounded-xl transition-all text-xs ${
                        boxOption.name === box.name
                          ? 'border-2 border-brand-wine bg-brand-blush/40 font-bold text-brand-wine'
                          : 'border border-stone-200 hover:border-brand-rose'
                      }`}
                    >
                      <div className="font-bold">{box.name}</div>
                      <div className="text-[10px] text-stone-500">₹{box.price} • {box.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Add-in Delights */}
              <div>
                <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2">
                  Step 2: Add Delights & Jewels
                </label>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {selectedItems.map((item) => (
                    <label
                      key={item.id}
                      className={`flex items-center gap-2.5 p-2 rounded-lg border cursor-pointer transition-colors ${
                        item.selected ? 'bg-brand-blush/30 border-brand-rose' : 'border-stone-200 hover:bg-stone-50'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={item.selected}
                        onChange={() => toggleItem(item.id)}
                        className="accent-brand-wine w-4 h-4 rounded"
                      />
                      <div className="flex-1">
                        <div className="font-medium text-stone-800">{item.name}</div>
                        <div className="text-[10px] text-stone-500">+₹{item.price}</div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Step 3: Greeting Note */}
              <div>
                <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">
                  Step 3: Free Handwritten Card Message
                </label>
                <input
                  type="text"
                  value={cardMessage}
                  onChange={(e) => setCardMessage(e.target.value)}
                  placeholder="e.g. 'Happy Birthday sunshine! Love always, Aanya'"
                  className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-stone-200 focus:outline-none focus:border-brand-wine"
                />
              </div>

              {/* Action Button */}
              <button
                onClick={handleAddHamperToBag}
                className="w-full bg-brand-wine hover:bg-brand-deepRose text-white font-semibold py-3.5 rounded-xl text-xs sm:text-sm tracking-wide transition-all shadow-md flex items-center justify-center gap-2"
              >
                <Check className="w-4 h-4 text-brand-gold" />
                <span>Confirm & Add Custom Hamper to Bag</span>
              </button>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
