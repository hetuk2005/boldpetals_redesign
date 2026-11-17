import React, { useState, useEffect } from 'react';
import { X, Search } from 'lucide-react';
import { useCart } from '../context/CartContext';

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

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-start justify-center pt-20 px-4">
      <div className="bg-white text-theme-dark rounded-2xl max-w-lg w-full p-5 shadow-2xl border border-theme-border space-y-4">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-2 border-b border-theme-border">
          <h4 className="font-serif text-lg font-bold text-theme-dark">
            Search Bold Petals Catalog
          </h4>
          <button onClick={onClose} className="text-theme-muted hover:text-theme-dark">
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
            placeholder="Search jhumka, hampers, butterfly clips, scrunchies..."
            className="w-full text-xs sm:text-sm pl-10 pr-4 py-3 rounded-xl border border-theme-border focus:outline-none focus:border-theme-primary bg-theme-light"
          />
          <Search className="w-5 h-5 text-stone-400 absolute left-3 top-3" />
        </div>

        {/* Results */}
        <div className="max-h-60 overflow-y-auto space-y-2 text-xs">
          {!query.trim() && (
            <div className="text-stone-400 text-center py-4">
              Try: "Light Wala Jhumka", "Fairy Birthday Hamper", "Butterfly Claws", "Shinchan"
            </div>
          )}

          {query.trim() && matches.length === 0 && (
            <div className="text-stone-500 text-center py-3">
              No products found matching "{query}". Try searching "jhumka" or "hamper".
            </div>
          )}

          {matches.map((item) => (
            <div
              key={item.id}
              onClick={() => {
                addToCart(item);
                onClose();
              }}
              className="flex items-center justify-between p-2.5 hover:bg-theme-tint/40 rounded-xl cursor-pointer border border-theme-border transition-colors"
            >
              <div className="flex items-center gap-2.5">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-10 h-10 object-cover rounded-lg border border-theme-border"
                />
                <span className="font-bold text-theme-dark">{item.title}</span>
              </div>
              <span className="font-bold text-theme-primary">
                ₹{item.price.toLocaleString('en-IN')}
              </span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
