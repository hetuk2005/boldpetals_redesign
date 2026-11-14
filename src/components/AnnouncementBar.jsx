import React from 'react';

export default function AnnouncementBar() {
  return (
    <div className="bg-brand-wine text-white text-xs py-2 px-4 text-center font-medium tracking-wide flex items-center justify-center gap-2 relative overflow-hidden">
      <span className="inline-block w-2 h-2 rounded-full bg-brand-gold animate-pulse"></span>
      <span>
        ✨ <strong>FREE Express Shipping</strong> on all orders above ₹799 | Use Code:{' '}
        <span className="bg-white/20 px-2 py-0.5 rounded text-brand-goldLight font-bold tracking-wider">
          PETAL10
        </span>{' '}
        for 10% OFF
      </span>
      <span className="hidden md:inline text-white/50">• 50,000+ Happy Hampers Delivered Pan-India</span>
    </div>
  );
}
