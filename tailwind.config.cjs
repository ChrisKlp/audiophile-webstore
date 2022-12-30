/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      sm: [
        '1.3rem',
        {
          lineHeight: '1.8rem',
          letterSpacing: '0.1rem',
          fontWeight: '700',
        },
      ],
      base: [
        '1.5rem',
        {
          lineHeight: '2.5rem',
          fontWeight: '500',
        },
      ],
      xl: [
        '1.8rem',
        {
          lineHeight: '2.5rem',
          letterSpacing: '0.12rem',
          fontWeight: '700',
        },
      ],
      '2xl': [
        '2.4rem',
        {
          lineHeight: '3.3rem',
          letterSpacing: '0.17rem',
          fontWeight: '700',
        },
      ],
      '3xl': [
        '2.8rem',
        {
          lineHeight: '3.8rem',
          letterSpacing: '0.2rem',
          fontWeight: '700',
        },
      ],
      '4xl': [
        '3.2rem',
        {
          lineHeight: '3.6rem',
          letterSpacing: '0.17rem',
          fontWeight: '700',
        },
      ],
      '5xl': [
        '4rem',
        {
          lineHeight: '4.4rem',
          letterSpacing: '0.14rem',
          fontWeight: '700',
        },
      ],
    },
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
      fontSize: {
        overline: [
          '1.4rem',
          {
            lineHeight: '1.9rem',
            letterSpacing: '1rem',
            fontWeight: '400',
          },
        ],
        '6xl': [
          '5.6rem',
          {
            lineHeight: '5.8rem',
            letterSpacing: '0.2rem',
            fontWeight: '700',
          },
        ],
      },
    },
  },
  plugins: [],
};
