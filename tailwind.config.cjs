/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    borderRadius: {
      DEFAULT: '0.8rem',
    },
    fontSize: {
      base: [
        '1.5rem',
        {
          lineHeight: '2.5rem',
          fontWeight: '500',
        },
      ],
    },
    extend: {
      colors: {
        white: '#ffffff',
        black: '#000000',
        gray: '#4C4C4C',
        gray100: '#CFCFCF',
        light100: '#FAFAFA',
        light200: '#F1F1F1',
        dark100: '#101010',
        metal: '#565584',
        orange: '#D87D4A',
        lightOrange: '#fbaf85',
        red: '#CD2C2C',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '100%' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.2s ease-in-out',
      },
    },
  },
  plugins: [],
};
