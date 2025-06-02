/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'firstgreen': '#c8d6cf',
        'secgreen': '#9cb0a7',
        'thirdwhite': '#f3f4e7',
        'lastgreen': '#ecf0e6',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        satoshi: ['Satoshi', 'sans-serif']
      }
    },
  },
  plugins: [],
}

