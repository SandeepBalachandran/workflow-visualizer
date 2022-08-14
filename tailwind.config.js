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
      },
      animation: {
        zoomIn: 'zoomIn 0.5s ease-in-out',
        shake: 'shake 0.5s infinite',
      },
    },
  },
  plugins: [],
};
