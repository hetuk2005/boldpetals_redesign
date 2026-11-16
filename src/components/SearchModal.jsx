import React, { useState, useEffect } from 'react';
import { X, Search } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { playChime } from '../utils/sound';

export default function SearchModal({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    if (isOpen) {
      fetch('/data/products.json')
        .then((res) => res.json())
        .then((data) => setProducts(data))
        .catch((err) => console.error(err));
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const matches = query.trim()
    ? products.filter(
        (p) =>
          p.title.toLowerCase().includes(query.toLowerCase()) ||
          p.subtitle.toLowerCase().includes(query.toLowerCase()) ||
          p.category.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  const handleSelect = (item) => {
    playChime('unboxing');
    addToCart(item);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/85 backdrop-blur-md z-50 flex items-start justify-center pt-24 px-4">
      <div className="glass-card bg-atelier-obsidian text-atelier-pearl rounded-3xl max-w-xl w-full p-6 shadow-dramatic border border-white/15 space-y-5">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-white/10">
          <div>
            <span className="font-syne text-[9px] uppercase tracking-[0.3em] text-atelier-gold font-bold">
              Atelier Archive Index
            </span>
            <h4 className="font-italiana text-2xl text-atelier-pearl mt-0.5">
              Search The Catalog
            </h4>
          </div>
          <button
            onClick={() => { playChime('click'); onClose(); }}
            className="p-1 rounded-full text-atelier-sand hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Input */}
        <div className="relative">
          <input
            autoFocus
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search 'Light Wala Jhumka', 'Fairy Birthday Hamper', 'Butterfly'..."
            className="w-full bg-black/40 border border-white/15 rounded-2xl pl-11 pr-4 py-3.5 text-xs font-syne uppercase tracking-wider text-atelier-pearl placeholder-atelier-sand/40 focus:outline-none focus:border-atelier-rose"
          />
          <Search className="w-4 h-4 text-atelier-sand/40 absolute left-4 top-4" />
        </div>

        {/* Results */}
        <div className="max-h-64 overflow-y-auto space-y-2">
          {!query.trim() && (
            <div className="font-syne text-xs uppercase tracking-widest text-atelier-sand/40 text-center py-6">
              Popular: "Light Wala Jhumka", "Shinchan Box", "16 Jhumka Tray"
            </div>
          )}

          {query.trim() && matches.length === 0 && (
            <div className="font-syne text-xs uppercase tracking-widest text-atelier-sand/50 text-center py-6">
              No pieces found matching "{query}".
            </div>
          )}

          {matches.map((item) => (
            <div
              key={item.id}
              onClick={() => handleSelect(item)}
              className="flex items-center justify-between p-3 rounded-2xl hover:bg-white/5 cursor-pointer border border-white/5 hover:border-atelier-rose/30 transition-all"
            >
              <div className="flex items-center gap-3">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-12 h-12 object-cover rounded-xl border border-white/10"
                />
                <div>
                  <h5 className="font-italiana text-lg text-atelier-pearl">{item.title}</h5>
                  <span className="font-syne text-[10px] uppercase text-atelier-gold">{item.category}</span>
                </div>
              </div>
              <span className="font-syne text-xs font-bold text-atelier-pearl">
                ₹{item.price.toLocaleString('en-IN')}
              </span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
