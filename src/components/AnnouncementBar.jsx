import React from 'react';
import { Sparkles, Palette } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function AnnouncementBar() {
  const { theme, changeTheme } = useTheme();

  return (
    <div className="bg-theme-primary text-white text-xs py-2 px-4 sm:px-6 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Left: Free Shipping Callout */}
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-theme-accent animate-pulse"></span>
          <span className="font-medium">
            ✨ <strong>FREE Express Shipping</strong> on orders above ₹799 | Use Code:{' '}
            <span className="bg-white/20 px-1.5 py-0.5 rounded font-bold tracking-wider">PETAL10</span>
          </span>
        </div>

        {/* Right: Color Scheme Switcher (Requested: Maroon & White OR Pastel Green & White) */}
        <div className="flex items-center gap-2 text-[11px]">
          <span className="hidden md:inline opacity-80 flex items-center gap-1">
            <Palette className="w-3 h-3" /> Palette:
          </span>
          <div className="flex bg-black/20 p-0.5 rounded-full border border-white/20">
            <button
              onClick={() => changeTheme('maroon')}
              className={`px-2.5 py-0.5 rounded-full transition-all text-[10px] font-bold ${
                theme === 'maroon'
                  ? 'bg-white text-theme-primary shadow-sm'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              🍷 Maroon & White
            </button>
            <button
              onClick={() => changeTheme('sage')}
              className={`px-2.5 py-0.5 rounded-full transition-all text-[10px] font-bold ${
                theme === 'sage'
                  ? 'bg-white text-theme-primary shadow-sm'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              🌿 Pastel Green & White
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
