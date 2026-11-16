import React from 'react';
import { Star, CheckCircle, Quote } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      name: 'Priya Sharma',
      city: 'New Delhi',
      initials: 'PS',
      piece: 'Fairy Birthday Hamper',
      text: "Ordered the Fairy Birthday Hamper for my best friend's 21st. The unboxing exceeded every expectation. The fairy lights were functioning, the calligraphy was flawless, and the jewellery felt like genuine heirloom quality. Unforgettable."
    },
    {
      name: 'Rhea Mathur',
      city: 'Bengaluru',
      initials: 'RM',
      piece: 'Light Wala Jhumka',
      text: "The Light Wala Jhumka is an absolute showstopper. Wore them to an evening sangeet in Bangalore and had at least 15 people inquire where I acquired them. Feather-light on the ears and radiates the warmest amber glow."
    },
    {
      name: 'Aniket Kulkarni',
      city: 'Mumbai',
      initials: 'AK',
      piece: '16 Jhumka Collector Box',
      text: "Acquired the 16 Jhumka Collector Box as an anniversary gift. The velvet exterior and assortment of Awadhi designs look exponentially more valuable than ₹1,099. Arrived safely in Mumbai with live WhatsApp tracking."
    }
  ];

  return (
    <section id="reviews" className="py-24 sm:py-32 bg-atelier-void border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-8 mb-12">
          <div>
            <span className="font-syne text-[10px] uppercase tracking-[0.35em] text-atelier-gold font-bold">
              The Unboxing Vault
            </span>
            <h2 className="font-italiana text-4xl sm:text-6xl text-atelier-pearl mt-2">
              Whispered Words
            </h2>
          </div>
          
          <div className="flex items-center gap-3 mt-4 md:mt-0 font-syne text-xs">
            <span className="text-atelier-sand/70 uppercase tracking-widest">Consensus:</span>
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="font-bold text-atelier-pearl">4.9/5 Across India</span>
          </div>
        </div>

        {/* 3 Editorial Review Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="glass-card p-8 rounded-3xl border border-white/10 flex flex-col justify-between space-y-6 hover:border-atelier-rose/40 transition-colors"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-syne text-[9px] uppercase tracking-widest text-atelier-gold px-2.5 py-1 rounded-full bg-white/5 border border-white/10">
                    Piece: {r.piece}
                  </span>
                  <Quote className="w-5 h-5 text-atelier-sand/30" />
                </div>
                
                <p className="font-serif italic text-base sm:text-lg text-atelier-pearl/90 leading-relaxed font-normal">
                  "{r.text}"
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <h5 className="font-italiana text-lg text-atelier-pearl">{r.name}</h5>
                  <p className="font-syne text-[10px] text-atelier-sand/50 uppercase tracking-wider">{r.city}</p>
                </div>
                
                <span className="text-[10px] font-syne text-emerald-400 uppercase tracking-wider flex items-center gap-1">
                  <CheckCircle className="w-3 h-3" />
                  Verified Unboxer
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
