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
        shake: {
          '0% ': { transform: 'translate(1px, 1px) rotate(0deg)' },
          '10%': { transform: 'translate(-1px, -2px) rotate(- 1deg)' },
          '20%': { transform: 'translate(-3px, 0px) rotate(1deg)' },
          '30%': { transform: ' translate(3px, 2px) rotate(0deg)' },
          '40%': { transform: 'translate(1px, -1px) rotate(1deg)' },
          '50%': { transform: 'translate(-1px, 2px) rotate(- 1deg)' },
          '60%': { transform: 'translate(-3px, 1px) rotate(0deg)' },
          '70%': { transform: ' translate(3px, 1px) rotate(- 1deg)' },
          '80%': { transform: 'translate(-1px, -1px) rotate(1deg)' },
          '90%': { transform: 'translate(1px, 2px) rotate(0deg)' },
          '100%': { transform: ' translate(1px, -2px) rotate(- 1deg)' },
        },
        dropdown: {
          '0%': {
            transform: 'scale(0.1) ',
          },
          // '10%': {
          //    transform: 'scale(0.2) '
          // },
          // '20%': {
          //    transform: 'scale(0.3) ',
          // },
          // '30%': {
          //    transform: 'scale(0.4) ',
          // },
          // '40%': {
          //    transform: 'scale(0.5) ',
          // },
          // '50%': {
          //    transform: 'scale(0.6) ',
          // },
          // '60%': {
          //    transform: 'scale(0.7) ',
          // },
          // '70%': {
          //    transform: 'scale(0.8) ',
          // },
          // '80%': {
          //    transform: 'scale(0.9) ',
          // },
          // '90%': {
          //    transform: 'scale(1) ',
          // },
          '100%': {
            transform: 'scale(1) ',
          },
        },
      },
      animation: {
        zoomIn: 'zoomIn 0.5s ease-in-out',
        shake: 'shake 0.5s infinite',
        dropdown: 'dropdown 0.1s ease-in-out',
      },
    },
  },
  plugins: [],
};
