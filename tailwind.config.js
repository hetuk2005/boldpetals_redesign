/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          wine: '#441220',
          deepRose: '#6D2036',
          rose: '#D87A8F',
          blush: '#FBECEE',
          cream: '#FDF9F6',
          gold: '#C99E58',
          goldLight: '#E8CA97',
          dark: '#1C1917',
          muted: '#78716C'
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        display: ['"Playfair Display"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 10px 30px -5px rgba(109, 32, 54, 0.08)',
        'hover': '0 20px 40px -10px rgba(109, 32, 54, 0.15)',
        'glow': '0 0 25px rgba(201, 158, 88, 0.35)',
      }
    },
  },
  plugins: [],
}
