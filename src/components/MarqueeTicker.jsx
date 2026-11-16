import React from 'react';

export default function MarqueeTicker({ reverse = false, textList = [] }) {
  const defaultList = [
    "HAUTE GIFT ATELIER",
    "THE FAIRY BIRTHDAY HAMPER",
    "LIGHT WALA JHUMKAS",
    "100% UNBOXING VIDEO SAFE",
    "HANDCRAFTED IN LUCKNOW",
    "ANTI-TARNISH JEWELLERY",
    "KOREAN BUTTERFLY CLAWS",
    "ESTABLISHED 2023",
  ];

  const items = textList.length > 0 ? textList : defaultList;

  return (
    <div className="relative w-full overflow-hidden py-3 border-y border-white/10 bg-atelier-void/50 select-none">
      <div className={`flex whitespace-nowrap gap-8 ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}>
        {[...items, ...items, ...items, ...items].map((item, idx) => (
          <div key={idx} className="flex items-center gap-6">
            <span className="font-syne text-[11px] uppercase tracking-[0.3em] text-atelier-pearl/70 hover:text-atelier-rose transition-colors">
              {item}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-atelier-gold/60"></span>
          </div>
        ))}
      </div>
    </div>
  );
}
