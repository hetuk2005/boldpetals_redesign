import React from 'react';
import { Video, ShieldCheck, Truck, HeartHandshake } from 'lucide-react';

export default function TrustBadges() {
  const perks = [
    {
      icon: <Video className="w-5 h-5 text-theme-primary" />,
      title: "100% Unboxing Proof",
      desc: "Instant replacements if continuous unboxing video provided"
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-theme-primary" />,
      title: "Damage-Proof Packaging",
      desc: "Hardbound boxes & multi-layer bubble wrap protect all jewels"
    },
    {
      icon: <Truck className="w-5 h-5 text-theme-primary" />,
      title: "Pan-India Express",
      desc: "Live tracking updates shared directly on your WhatsApp"
    },
    {
      icon: <HeartHandshake className="w-5 h-5 text-theme-primary" />,
      title: "Handcrafted in Lucknow",
      desc: "Every box packed with care, silk ribbons & fresh petals"
    }
  ];

  return (
    <section className="py-8 bg-white border-y border-theme-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {perks.map((p, idx) => (
            <div key={idx} className="flex items-start gap-3 p-3 sm:p-4 rounded-xl bg-theme-light border border-theme-border/60">
              <div className="w-10 h-10 rounded-lg bg-theme-tint flex items-center justify-center flex-shrink-0">
                {p.icon}
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-theme-dark">{p.title}</h4>
                <p className="text-[11px] text-theme-muted leading-tight mt-0.5">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
