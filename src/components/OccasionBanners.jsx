import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function OccasionBanners({ onSelectCategory }) {
  const occasions = [
    {
      title: "Birthday Bash Specials",
      subtitle: "Fairy lights, tiaras & curated goodies",
      categoryId: "hampers",
      buttonText: "Shop Birthday",
      bgGradient: "from-pink-500/10 via-rose-500/5 to-white",
      image: "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Lovers & Anniversary",
      subtitle: "Heart boxes, wing pendants & fragrances",
      categoryId: "hampers",
      buttonText: "Shop Romantic",
      bgGradient: "from-amber-500/10 via-orange-500/5 to-white",
      image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Festive Glam & Jhumkas",
      subtitle: "Glowing festive jhumkas & velvet chests",
      categoryId: "jewellery",
      buttonText: "Shop Festive",
      bgGradient: "from-emerald-500/10 via-teal-500/5 to-white",
      image: "https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=400&q=80"
    }
  ];

  return (
    <section className="py-12 bg-theme-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex items-center justify-between mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-theme-primary">
              Curated For Every Milestone
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-theme-dark mt-0.5">
              Shop by Occasion
            </h2>
          </div>
          <span className="text-xs text-theme-muted hidden sm:inline">
            Handpicked with matching greeting cards
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {occasions.map((occ, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-2xl border border-theme-border bg-gradient-to-br ${occ.bgGradient} bg-white shadow-clean hover:shadow-card-hover transition-all flex flex-col justify-between`}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <h3 className="font-serif text-xl font-bold text-theme-dark">{occ.title}</h3>
                  <p className="text-xs text-theme-muted">{occ.subtitle}</p>
                </div>
                <img
                  src={occ.image}
                  alt={occ.title}
                  className="w-16 h-16 rounded-xl object-cover shadow-sm flex-shrink-0"
                />
              </div>

              <div className="mt-6 pt-4 border-t border-theme-border/60">
                <button
                  onClick={() => onSelectCategory(occ.categoryId)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-theme-primary hover:text-theme-primaryHover group"
                >
                  <span>{occ.buttonText}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
