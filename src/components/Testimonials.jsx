import React from 'react';
import { Star, CheckCircle } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      name: 'Priya Sharma',
      city: 'Delivered to New Delhi',
      initials: 'PS',
      text: "Ordered the Fairy Birthday Hamper for my bestie's 21st. The packaging blew her away! The fairy lights were functioning, the letter was neatly printed, and the jewellery felt so premium. 10/10 recommend Bold Petals!"
    },
    {
      name: 'Rhea Mathur',
      city: 'Delivered to Bengaluru',
      initials: 'RM',
      text: "The Light Wala Jhumka is unreal! Everyone at my cousin's sangeet asked where I got them from. It's so lightweight and glows softly. Also bought the 2 metal butterfly claws which hold thick hair easily."
    },
    {
      name: 'Aniket Kulkarni',
      city: 'Delivered to Mumbai',
      initials: 'AK',
      text: "I bought the 16 Jhumka Collector Box as a gift for my sister. The velvet finish and assortment of antique designs look way more expensive than ₹1,099. Arrived safely in Mumbai with proper tracking."
    }
  ];

  return (
    <section id="reviews" className="py-16 sm:py-24 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-brand-gold">
              Real Customer Love
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-wine mt-1">
              Unboxed & Adored Across India
            </h2>
            <p className="text-stone-500 text-sm mt-1">Verified reviews from sisters, besties, and partners.</p>
          </div>
          <div className="mt-4 md:mt-0 flex items-center gap-2">
            <span className="text-xs font-semibold text-stone-700">Overall Rating:</span>
            <div className="flex text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
              ))}
            </div>
            <span className="text-xs font-bold text-brand-wine">4.9/5 (1,480+ Reviews)</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="bg-white p-6 sm:p-7 rounded-2xl shadow-sm border border-brand-rose/15 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-500">
                    {[...Array(5)].map((_, starI) => (
                      <Star key={starI} className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                  <span className="text-[10px] bg-emerald-50 text-emerald-700 font-semibold px-2 py-0.5 rounded-full flex items-center gap-1">
                    <CheckCircle className="w-3 h-3" />
                    Verified Buyer
                  </span>
                </div>
                <p className="text-stone-700 text-sm italic leading-relaxed">
                  "{r.text}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-blush text-brand-wine font-bold text-xs flex items-center justify-center">
                  {r.initials}
                </div>
                <div>
                  <h5 className="text-xs font-bold text-brand-wine">{r.name}</h5>
                  <p className="text-[11px] text-stone-400">{r.city}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
