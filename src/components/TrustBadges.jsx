import React from 'react';
import { ShieldCheck, Video, Smartphone, Sparkles } from 'lucide-react';

export default function TrustBadges() {
  const guarantees = [
    {
      icon: <Video className="w-6 h-6" />,
      title: 'Unboxing Guarantee',
      desc: 'Provide an unboxing video for instant free replacements. Zero questions asked.'
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: 'Damage-Proof Transit',
      desc: 'Multi-layer bubble cushioning & hard-bound keepsake boxes protect fragile jewels.'
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: 'WhatsApp Live Updates',
      desc: 'Direct dispatch confirmation and live tracking links sent straight to your phone.'
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: 'Lucknow Atelier Studio',
      desc: 'Founded 2023 in Lucknow, dedicated to handcrafted romantic aesthetic perfection.'
    }
  ];

  return (
    <section className="py-16 bg-white border-b border-brand-rose/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-gold">
            Peace of Mind
          </span>
          <h2 className="font-serif text-3xl font-bold text-brand-wine mt-1">
            Why Thousands Trust Bold Petals
          </h2>
          <p className="text-stone-500 text-sm mt-2">
            We treat every gift as if it were being delivered to our own loved ones.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {guarantees.map((item, idx) => (
            <div
              key={idx}
              className="text-center p-6 rounded-2xl bg-brand-cream/60 border border-brand-rose/10 space-y-3"
            >
              <div className="w-12 h-12 mx-auto rounded-full bg-brand-blush text-brand-deepRose flex items-center justify-center">
                {item.icon}
              </div>
              <h3 className="font-serif text-lg font-bold text-brand-wine">{item.title}</h3>
              <p className="text-xs text-stone-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
