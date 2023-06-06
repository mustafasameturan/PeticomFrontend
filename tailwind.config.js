/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'black': '#000000',
        'green': '#2da44e',
        'orange': '#F7813A',
        'orange-hover': '#f9ac86'
      },
      animation: {
        fadeIn: 'fadeIn 500ms forwards',
        fadeOut: 'fadeOut 500ms forwards',
        slideIn: 'slideIn 500ms forwards',
        slideOut: 'slideOut 500ms forwards',
      },
    },
  },
  plugins: [],
}

