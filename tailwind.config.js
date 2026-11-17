/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        theme: {
          primary: 'var(--color-primary)',
          primaryHover: 'var(--color-primary-hover)',
          secondary: 'var(--color-secondary)',
          light: 'var(--color-light)',
          tint: 'var(--color-tint)',
          accent: 'var(--color-accent)',
          dark: 'var(--color-dark)',
          muted: 'var(--color-muted)',
          surface: 'var(--color-surface)',
          border: 'var(--color-border)',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        display: ['"Cormorant Garamond"', 'serif'],
        sans: ['"Plus Jakarta Sans"', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'clean': '0 2px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.02)',
        'card-hover': '0 12px 30px -4px rgba(0, 0, 0, 0.08), 0 4px 10px -2px rgba(0, 0, 0, 0.03)',
        'pill': '0 4px 20px -2px rgba(0, 0, 0, 0.06)',
      }
    },
  },
  plugins: [],
}
