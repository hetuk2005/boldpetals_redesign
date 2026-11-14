import React from 'react';
import { Check } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Toast() {
  const { toastMessage } = useCart();
  if (!toastMessage) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 bg-brand-wine text-white px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-3 animate-bounce">
      <span className="w-6 h-6 rounded-full bg-brand-gold text-brand-wine flex items-center justify-center font-bold text-xs">
        <Check className="w-3.5 h-3.5" />
      </span>
      <span className="text-xs font-semibold">{toastMessage}</span>
    </div>
  );
}
