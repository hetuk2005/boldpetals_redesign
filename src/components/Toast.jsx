import React from 'react';
import { Sparkles } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Toast() {
  const { toastMessage } = useCart();
  if (!toastMessage) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 bg-theme-primary text-white px-5 py-3 rounded-2xl shadow-xl flex items-center gap-3 animate-bounce">
      <span className="w-5 h-5 rounded-full bg-white text-theme-primary flex items-center justify-center font-bold text-xs">
        <Sparkles className="w-3 h-3 text-theme-primary" />
      </span>
      <span className="text-xs font-bold">{toastMessage}</span>
    </div>
  );
}
