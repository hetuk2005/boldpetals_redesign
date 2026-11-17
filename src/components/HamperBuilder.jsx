import React, { useState } from 'react';
import { Check, Sparkles, Gift } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function HamperBuilder() {
  const { addToCart } = useCart();

  const [boxOption, setBoxOption] = useState({
    name: 'Blush Satin Heart Box',
    price: 350,
    desc: 'Ribbon-tied keepsakes'
  });

  const [selectedItems, setSelectedItems] = useState([
    { id: 'jhumka', name: 'Light Wala Jhumka', price: 899, selected: true },
    { id: 'perfume', name: 'Bellavita Date Perfume (20ml)', price: 220, selected: false },
    { id: 'sipper', name: 'Aesthetic Sipper Bottle', price: 299, selected: false },
    { id: 'claws', name: '2 Metal Butterfly Hair Claws', price: 59, selected: false }
  ]);

  const [cardMessage, setCardMessage] = useState('Wishing you all the joy and magic in the world!');

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
      title: `Custom Hamper (${boxOption.name})`,
      price: grandTotal,
      image: 'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?auto=format&fit=crop&w=400&q=80'
    };
    addToCart(customProduct);
  };

  return (
    <section id="build-box" className="py-16 sm:py-24 bg-theme-tint border-y border-theme-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Explainer */}
          <div className="lg:col-span-5 space-y-5">
            <span className="inline-block text-xs uppercase tracking-wider font-bold text-theme-primary bg-white px-3 py-1 rounded-full border border-theme-border shadow-sm">
              Custom Hamper Studio
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-theme-dark leading-tight">
              Create a personalized gift box in <span className="text-theme-primary italic">3 simple steps.</span>
            </h2>
            <p className="text-theme-muted text-sm sm:text-base leading-relaxed">
              Don't settle for ordinary pre-packed gifts. Pick your favorite aesthetic box, add trending jewels & perfumes, and write a custom calligraphy note. We pack it by hand with silk ribbons and love.
            </p>

            <div className="space-y-3.5 pt-2">
              <div className="flex items-start gap-3">
                <span className="w-7 h-7 rounded-full bg-theme-primary text-white font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                  1
                </span>
                <div>
                  <h4 className="text-sm font-bold text-theme-dark">Choose Your Box Style</h4>
                  <p className="text-xs text-theme-muted">Blush Pink Heart, Velvet Trunk, or Floral Box</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="w-7 h-7 rounded-full bg-theme-primary text-white font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                  2
                </span>
                <div>
                  <h4 className="text-sm font-bold text-theme-dark">Fill with Goodies & Jewels</h4>
                  <p className="text-xs text-theme-muted">Jhumkas, Bellavita perfumes, sipper bottles & chocolates</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="w-7 h-7 rounded-full bg-theme-primary text-white font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                  3
                </span>
                <div>
                  <h4 className="text-sm font-bold text-theme-dark">Add Your Free Greeting Note</h4>
                  <p className="text-xs text-theme-muted">Calligraphy printed card included inside every box</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Interactive Builder Widget */}
          <div className="lg:col-span-7 bg-white text-theme-dark p-6 sm:p-8 rounded-3xl shadow-card-hover border border-theme-border">
            <div className="flex items-center justify-between border-b border-theme-border pb-4 mb-6">
              <div>
                <h3 className="font-serif text-xl font-bold text-theme-dark">
                  Hamper Builder
                </h3>
                <p className="text-xs text-theme-muted">Select items below to see live price preview</p>
              </div>
              <div className="text-right">
                <span className="text-xs text-theme-muted">Live Estimate:</span>
                <div className="text-2xl font-bold text-theme-primary">
                  ₹{grandTotal.toLocaleString('en-IN')}
                </div>
              </div>
            </div>

            <div className="space-y-5">
              
              {/* Step 1: Box Style */}
              <div>
                <label className="block text-xs font-bold text-theme-dark uppercase tracking-wider mb-2">
                  Step 1: Choose Your Box
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {[
                    { name: 'Blush Satin Heart Box', price: 350, desc: 'Ribbon Tied' },
                    { name: 'Luxe Gold Velvet Trunk', price: 450, desc: 'Reusable Chest' },
                    { name: 'Vintage Craft Floral', price: 250, desc: 'Eco Keepsake' }
                  ].map((box, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setBoxOption(box)}
                      className={`text-left p-3 rounded-xl transition-all text-xs ${
                        boxOption.name === box.name
                          ? 'border-2 border-theme-primary bg-theme-tint font-bold text-theme-primary shadow-sm'
                          : 'border border-theme-border hover:border-theme-primary/50 bg-white'
                      }`}
                    >
                      <div className="font-bold">{box.name}</div>
                      <div className="text-[10px] text-theme-muted">₹{box.price} • {box.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Add-in Delights */}
              <div>
                <label className="block text-xs font-bold text-theme-dark uppercase tracking-wider mb-2">
                  Step 2: Add Treats & Jewels (Select all that apply)
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {selectedItems.map((item) => (
                    <label
                      key={item.id}
                      className={`flex items-center gap-2.5 p-2.5 rounded-xl border cursor-pointer transition-colors ${
                        item.selected
                          ? 'bg-theme-tint/60 border-theme-primary text-theme-dark font-medium shadow-sm'
                          : 'border-theme-border hover:bg-stone-50 bg-white text-theme-muted'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={item.selected}
                        onChange={() => toggleItem(item.id)}
                        className="accent-theme-primary w-4 h-4 rounded"
                      />
                      <div className="flex-1">
                        <div className="font-semibold text-theme-dark">{item.name}</div>
                        <div className="text-[10px] text-theme-primary font-bold">+₹{item.price}</div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Step 3: Greeting Note */}
              <div>
                <label className="block text-xs font-bold text-theme-dark uppercase tracking-wider mb-1">
                  Step 3: Free Handwritten Calligraphy Note
                </label>
                <input
                  type="text"
                  value={cardMessage}
                  onChange={(e) => setCardMessage(e.target.value)}
                  placeholder="e.g. 'Happy Birthday my sunshine! Love always, Aanya'"
                  className="w-full text-xs px-3.5 py-3 rounded-xl border border-theme-border focus:outline-none focus:border-theme-primary bg-theme-light"
                />
              </div>

              {/* Action Button */}
              <button
                onClick={handleAddHamperToBag}
                className="w-full bg-theme-primary hover:bg-theme-primaryHover text-white font-bold py-3.5 rounded-xl text-xs sm:text-sm tracking-wide transition-all shadow-md flex items-center justify-center gap-2"
              >
                <Check className="w-4 h-4" />
                <span>Confirm & Add Custom Hamper to Bag</span>
              </button>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
