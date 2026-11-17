import React from 'react';
import { Palette } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function AnnouncementBar() {
  const { theme, changeTheme } = useTheme();

  return (
    <div className="bg-theme-primary text-white text-xs py-2 px-4 sm:px-6 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1.5 sm:gap-4 text-center sm:text-left">
        
        {/* Left: Free Shipping & Offer Callout */}
        <div className="flex items-center gap-2 justify-center sm:justify-start">
          <span className="w-1.5 h-1.5 rounded-full bg-theme-accent animate-pulse"></span>
          <span className="font-medium text-[11px] sm:text-xs">
            ✨ <strong>FREE Express Shipping</strong> on ₹799+ | Code:{' '}
            <span className="bg-white/20 px-1.5 py-0.5 rounded font-bold tracking-wider">PETAL10</span> (10% OFF)
          </span>
        </div>

        {/* Right: Palette Switcher (Maroon & White OR Pastel Green & White) */}
        <div className="flex items-center gap-2 text-[10px] sm:text-[11px]">
          <span className="hidden md:inline opacity-85 flex items-center gap-1 font-medium">
            <Palette className="w-3 h-3" /> Palette:
          </span>
          <div className="flex bg-black/25 p-0.5 rounded-full border border-white/20">
            <button
              onClick={() => changeTheme('maroon')}
              className={`px-2.5 py-0.5 rounded-full transition-all font-bold ${
                theme === 'maroon'
                  ? 'bg-white text-theme-primary shadow-sm'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              🍷 Maroon & White
            </button>
            <button
              onClick={() => changeTheme('sage')}
              className={`px-2.5 py-0.5 rounded-full transition-all font-bold ${
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
