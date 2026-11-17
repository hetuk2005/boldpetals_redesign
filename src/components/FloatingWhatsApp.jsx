import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/919999999999?text=Hi%20Bold%20Petals!%20I%20have%20a%20question%20about%20your%20hampers"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-20 sm:bottom-6 left-4 sm:left-6 z-40 bg-[#25D366] hover:bg-[#20bd5a] text-white p-3 sm:p-3.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 group hover:scale-105"
      title="Chat on WhatsApp"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-5 h-5 fill-white text-white" />
      <span className="hidden md:inline font-bold text-xs pr-1">
        WhatsApp Us
      </span>
    </a>
  );
}
