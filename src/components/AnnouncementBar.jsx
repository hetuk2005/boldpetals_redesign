import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Sparkles, MapPin } from 'lucide-react';
import { toggleAudio, isAudioEnabled, playChime } from '../utils/sound';

export default function AnnouncementBar() {
  const [audioActive, setAudioActive] = useState(false);
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString('en-IN', {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          hour12: true
        }).toUpperCase()
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 30000);
    return () => clearInterval(interval);
  }, []);

  const handleSoundToggle = () => {
    const newState = toggleAudio();
    setAudioActive(newState);
    if (newState) {
      playChime('unboxing');
    }
  };

  return (
    <div className="bg-atelier-obsidian border-b border-atelier-champagne/10 text-atelier-sand text-[11px] py-2 px-4 sm:px-8 font-syne tracking-widest uppercase flex items-center justify-between relative overflow-hidden z-50">
      
      {/* Left: Atelier Location & Live Clock */}
      <div className="flex items-center gap-2.5">
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-atelier-rose animate-ping"></span>
        <span className="hidden sm:inline text-atelier-pearl/70">Atelier: Lucknow, UP</span>
        <span className="text-atelier-gold font-semibold">• {currentTime || '10:48 AM IST'}</span>
      </div>

      {/* Center: Running Promo Statement */}
      <div className="hidden md:flex items-center gap-2 text-atelier-pearl">
        <Sparkles className="w-3.5 h-3.5 text-atelier-gold" />
        <span>Pan-India Haute Gifting • Code: <strong className="text-atelier-rose tracking-wider">PETAL10</strong> (10% Off)</span>
        <span className="text-atelier-pearl/40">• Free Courier on ₹799+</span>
      </div>

      {/* Right: Sound FX Ambience Toggle */}
      <div className="flex items-center gap-4">
        <button
          onClick={handleSoundToggle}
          className="flex items-center gap-1.5 hover:text-atelier-rose transition-colors text-[10px] bg-white/5 border border-white/10 px-2.5 py-1 rounded-full"
          title="Toggle Ambient Sensory Audio"
        >
          {audioActive ? (
            <>
              <Volume2 className="w-3 h-3 text-atelier-rose" />
              <span>Audio: On</span>
            </>
          ) : (
            <>
              <VolumeX className="w-3 h-3 text-atelier-sand/50" />
              <span>Audio: Off</span>
            </>
          )}
        </button>
      </div>

    </div>
  );
}
