/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.{html,js}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#C42100',
        white: '#FFFFFF',
        black: '#000000',
        'light-red': '#FFCCC4',
      },
      fontFamily: {
        ubuntu: ['Ubuntu', 'sans-serif'],
        redhat: ['Red Hat Display', 'sans-serif'],
      },
    },
  },
  plugins: [
    function({ addComponents }) {
      addComponents({
        '.btn-primary': {
          '@apply inline-flex items-center justify-center px-8 py-3 bg-[#C42100] text-white font-bold rounded-md text-lg shadow-xl uppercase tracking-wider transition-all duration-300': {},
          '&:hover': {
            '@apply bg-[#a01b00] shadow-2xl scale-105': {},
          },
        },
      })
    },
  ],
}
