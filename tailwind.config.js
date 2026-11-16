/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        atelier: {
          void: '#0B0407',
          obsidian: '#12070C',
          velvet: '#1E0B14',
          wine: '#3D0E20',
          crimson: '#7A1C3C',
          rose: '#E05375',
          blush: '#FBE8EC',
          champagne: '#F4E8D8',
          gold: '#D4AF37',
          goldLight: '#F3E5AB',
          sand: '#E7DEC8',
          pearl: '#FAF6F0'
        }
      },
      fontFamily: {
        italiana: ['"Italiana"', 'serif'],
        serif: ['"Cormorant Garamond"', 'serif'],
        display: ['"Playfair Display"', 'serif'],
        syne: ['"Syne"', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      animation: {
        'marquee': 'marquee 25s linear infinite',
        'marquee-reverse': 'marquee-reverse 25s linear infinite',
        'spin-slow': 'spin 20s linear infinite',
        'pulse-subtle': 'pulseSubtle 4s ease-in-out infinite',
        'float': 'floatSlow 7s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(1.5deg)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        }
      },
      boxShadow: {
        'glow-rose': '0 0 50px -10px rgba(224, 83, 117, 0.35)',
        'glow-gold': '0 0 40px -10px rgba(212, 175, 55, 0.3)',
        'dramatic': '0 25px 60px -15px rgba(0, 0, 0, 0.8)',
      }
    },
  },
  plugins: [],
}
