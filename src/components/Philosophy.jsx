import React from 'react';
import { ShieldCheck, Video, Clock, Award } from 'lucide-react';

export default function Philosophy() {
  const stats = [
    { number: '50K+', label: 'Happy Unboxings Pan-India', icon: <Award className="w-5 h-5 text-atelier-gold" /> },
    { number: '100%', label: 'Transit Video Safe Guarantee', icon: <Video className="w-5 h-5 text-atelier-rose" /> },
    { number: '48h', label: 'Bespoke Atelier Dispatch', icon: <Clock className="w-5 h-5 text-atelier-sand" /> },
    { number: '4.9★', label: 'Verified Customer Consensus', icon: <ShieldCheck className="w-5 h-5 text-emerald-400" /> },
  ];

  return (
    <section id="philosophy" className="py-24 sm:py-32 bg-atelier-obsidian border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Massive Editorial Manifesto */}
        <div className="max-w-4xl space-y-8">
          <span className="font-syne text-[10px] uppercase tracking-[0.4em] text-atelier-gold font-bold">
            The Atelier Manifesto
          </span>
          <h2 className="font-italiana text-4xl sm:text-6xl lg:text-7xl text-atelier-pearl leading-[1.05]">
            "We don't just ship boxes. <br />
            <span className="italic font-serif text-atelier-rose font-normal">We capture the millisecond</span> someone's heart skips a beat."
          </h2>
          <p className="text-atelier-sand/70 text-sm sm:text-base font-sans font-light leading-relaxed max-w-2xl">
            Born in 2023 as an online aesthetic atelier, Bold Petals was built on a simple conviction: ordinary gifting is forgotten in minutes. True luxury lies in the sensory rush—the velvet touch, the warm glow of a micro-LED jhumka, and the scent of fresh rose petals that lingers forever. Delivering all across India.
          </p>
        </div>

        {/* 4 Architectural Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-16 mt-16 border-t border-white/10">
          {stats.map((s, idx) => (
            <div key={idx} className="glass-card p-6 rounded-2xl border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                {s.icon}
              </div>
              <div className="font-italiana text-4xl sm:text-5xl text-atelier-pearl">
                {s.number}
              </div>
              <div className="font-syne text-[11px] uppercase tracking-wider text-atelier-sand/70">
                {s.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
