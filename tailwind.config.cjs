/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        white: '#ffffff',
        black: '#000000',
        light100: '#FAFAFA',
        light200: '#F1F1F1',
        dark100: '#101010',
        metal: '#565584',
        orange: '#D87D4A',
        lightOrange: '#fbaf85',
      },
    },
  },
  plugins: [],
};
