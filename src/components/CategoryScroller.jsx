import React from 'react';

export default function CategoryScroller({ onSelectCategory }) {
  const categories = [
    {
      id: 'hampers',
      name: 'Luxury Hampers',
      price: 'From ₹1,349',
      image: 'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?auto=format&fit=crop&w=250&q=80'
    },
    {
      id: 'jewellery',
      name: 'Jhumka Sets',
      price: '16-Piece Boxes',
      image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=250&q=80'
    },
    {
      id: 'accessories',
      name: 'Butterfly Claws',
      price: 'Starts ₹59',
      image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=250&q=80'
    },
    {
      id: 'jewellery',
      name: 'Earrings & Pendants',
      price: 'Anti-Tarnish',
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=250&q=80'
    },
    {
      id: 'budget',
      name: 'Under ₹999',
      price: 'Pocket Friendly',
      image: 'https://images.unsplash.com/photo-1512909006721-3d6018887383?auto=format&fit=crop&w=250&q=80'
    },
    {
      id: 'hampers',
      name: 'Shinchan Box',
      price: 'Theme Hampers',
      image: 'https://images.unsplash.com/photo-1582845512747-e42001c95638?auto=format&fit=crop&w=250&q=80'
    },
    {
      id: 'accessories',
      name: 'Bangle Organizers',
      price: '2-Row Velvet',
      image: 'https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&w=250&q=80'
    }
  ];

  return (
    <section className="py-6 border-y border-brand-rose/15 bg-white/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xs uppercase tracking-widest font-bold text-stone-400">Shop by Category</h2>
          <span className="text-xs text-brand-rose font-medium">Swipe to explore →</span>
        </div>
        
        <div className="flex items-center space-x-4 sm:space-x-6 overflow-x-auto no-scrollbar pb-2 pt-1">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => onSelectCategory(cat.id)}
              className="group flex flex-col items-center flex-shrink-0 text-center w-24 sm:w-28 focus:outline-none"
            >
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full p-1 bg-gradient-to-tr from-brand-rose/40 to-brand-gold/40 group-hover:from-brand-rose group-hover:to-brand-gold group-hover:scale-105 transition-all duration-300">
                <img src={cat.image} alt={cat.name} className="w-full h-full object-cover rounded-full" />
              </div>
              <span className="text-xs font-semibold text-brand-wine mt-2.5 group-hover:text-brand-deepRose">
                {cat.name}
              </span>
              <span className="text-[10px] text-stone-500">{cat.price}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
