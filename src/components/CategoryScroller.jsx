import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { playChime } from '../utils/sound';

export default function CategoryScroller({ onSelectCategory }) {
  const collections = [
    {
      num: '01',
      id: 'hampers',
      title: 'Couture Hampers',
      desc: 'Bespoke celebratory boxes with fairy illumination',
      price: 'From ₹1,349',
      image: 'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?auto=format&fit=crop&w=600&q=80',
    },
    {
      num: '02',
      id: 'jewellery',
      title: 'Illuminated Jhumkas',
      desc: 'Micro-LED glowing antique filigree earrings',
      price: 'Trending ₹899',
      image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=600&q=80',
    },
    {
      num: '03',
      id: 'accessories',
      title: 'Korean Hair Accessories',
      desc: 'Sculptural metallic butterfly claws & silk ribbons',
      price: 'Starts ₹59',
      image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=600&q=80',
    },
    {
      num: '04',
      id: 'budget',
      title: 'The Petite Edit',
      desc: 'Thoughtful aesthetic gifts curated under ₹999',
      price: 'Under ₹999',
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=600&q=80',
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-atelier-void border-y border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-white/10 pb-6">
          <div>
            <span className="font-syne text-[10px] uppercase tracking-[0.3em] text-atelier-gold">
              Curated Disciplines
            </span>
            <h2 className="font-italiana text-3xl sm:text-5xl text-atelier-pearl mt-1">
              Select Your Aesthetic Mood
            </h2>
          </div>
          <span className="text-xs font-syne uppercase tracking-widest text-atelier-sand/60 mt-2 md:mt-0">
            Handcrafted for Unforgettable Memories
          </span>
        </div>

        {/* 4 Architectural Collection Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {collections.map((col) => (
            <div
              key={col.num}
              onClick={() => { playChime('click'); onSelectCategory(col.id); }}
              className="group relative h-[420px] rounded-2xl overflow-hidden cursor-pointer border border-white/10 glass-card transition-all duration-500 hover:border-atelier-rose/50 hover:-translate-y-2 flex flex-col justify-between p-6"
            >
              {/* Background Image with Opacity transition */}
              <div className="absolute inset-0 z-0">
                <img
                  src={col.image}
                  alt={col.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter brightness-[0.55] group-hover:brightness-[0.7]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-atelier-obsidian via-atelier-obsidian/40 to-transparent"></div>
              </div>

              {/* Top Number & Tag */}
              <div className="relative z-10 flex items-center justify-between">
                <span className="font-syne text-xs uppercase tracking-widest text-atelier-gold font-bold">
                  {col.num}
                </span>
                <div className="w-8 h-8 rounded-full border border-white/20 glass-card flex items-center justify-center text-atelier-pearl group-hover:border-atelier-rose group-hover:text-atelier-rose transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              {/* Bottom Information */}
              <div className="relative z-10 space-y-2">
                <div className="font-syne text-[10px] uppercase tracking-widest text-atelier-rose font-bold">
                  {col.price}
                </div>
                <h3 className="font-italiana text-2xl text-atelier-pearl group-hover:text-atelier-rose transition-colors">
                  {col.title}
                </h3>
                <p className="text-xs text-atelier-sand/70 font-sans font-light line-clamp-2 leading-relaxed">
                  {col.desc}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
