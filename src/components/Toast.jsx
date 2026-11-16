import React from 'react';
import { Sparkles } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Toast() {
  const { toastMessage } = useCart();
  if (!toastMessage) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 glass-card bg-atelier-wine/90 text-atelier-pearl px-5 py-3 rounded-full shadow-glow-rose flex items-center gap-3 border border-atelier-rose/40 animate-bounce">
      <span className="w-5 h-5 rounded-full bg-atelier-rose text-white flex items-center justify-center font-bold text-xs">
        <Sparkles className="w-3 h-3 text-atelier-gold" />
      </span>
      <span className="font-syne text-xs uppercase tracking-wider font-semibold">
        {toastMessage}
      </span>
    </div>
  );
}
