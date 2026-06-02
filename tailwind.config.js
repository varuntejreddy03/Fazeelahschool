/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#0D1B2A',
          blue: '#1A3A5C',
          sky: '#2D7DD2',
          gold: '#C9A84C',
          cream: '#F7F3ED',
          white: '#FFFFFF',
          muted: '#6B7A8D',
          light: '#E8EFF7',
        }
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['"DM Sans"', 'sans-serif'],
        serif: ['"Cormorant Garamond"', 'serif'],
      },
      boxShadow: {
        'brand': '0 10px 40px -10px rgba(45, 125, 210, 0.1)',
      }
    },
  },
  plugins: [],
}
