/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:"class",
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textColor:{
        skin:{
          base: 'var(--color-text-base)',
          muted: 'var(--color-text-muted)',
          inverted: 'var(--color-text-inverted)',
        }
      },
      backgroundColor:{
        skin:{
          fill: 'var(--color-fill)',
          'img-accent': 'var(--color-img-accent)',
          'img-accent-hover': 'var(--color-img-accent-hover)',
          'button-muted': 'var(--color-button-muted)',
        }
      },
      gredientColorStops: {
        skin:{
          hue: 'var(--color-fill)'
        }
      }
    },
  },
  plugins: [],
}

