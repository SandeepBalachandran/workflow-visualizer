/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      keyframes: {
        zoomIn: {
          '0%': {
            transform: 'scale(0.8) ',
          },

          // '60%': {
          //   transform: 'scale(0.6) '
          // },

          // '80%': {
          //   transform: 'scale(0.8) '
          // },

          '100%': {
            transform: 'scale(1) ',
          },
        },
      },
      animation: {
        zoomIn: 'zoomIn 0.5s ease-in-out',
      },
    },
  },
  plugins: [],
};
