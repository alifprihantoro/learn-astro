const plugin = require('tailwindcss/plugin')
/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        'Lato': ['Lato', 'sans-serif'],
        'Rokkit': ['Rokkitt', 'serif'],
      },
      boxShadow: {
        'center': '0 0 15px 3px blur',
      },
    },
  },
  daisyui: {
    themes: [
      {
        ['dark-theme']: {
          'primary': '#4b5071',
          'secondary': '#282A36',
          'accent': '#5eead4',
          'neutral': '#dededf',
          'base-100': '#282A36',
          'info': '#374151',
          'success': '#50FA7B',
          'warning': '#F1FA8C',
          'error': '#FF5555',
        },
        ['light-theme']: {
          'primary': '#6E75A8',
          'secondary': '#8D91C7',
          'accent': '#175676',
          'neutral': '#0A1045',
          'base-100': '#cacaca',
          'base-200': '#dddeee',
          'base-300': '#8D91C7',
          'info': '#374151',
          'success': '#50FA7B',
          'warning': '#F1FA8C',
          'error': '#FF5555',
        },
      },
    ],
  },
  // eslint-disable-next-line no-undef
  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui'),
    plugin(function({ addComponents }) {
      addComponents({
        '.note-list': {
          '@apply bg-secondary m-5 py-3 px-5 rounded-md w-fit hover:-translate-y-3 transition-all duration-200 text-white/90': {},
        },
        '.content': {
          '@apply flex p-[15px] max-md:w-full w-[80%] shadow-md shadow-base-300 rounded-[5px] my-[25px] mx-auto [&>h3]:text-xl': {},
          '.date': {
            '@apply mr-[30px] w-[64px] text-center': {},
          },
          '.day': {
            '@apply font-semibold leading-[.45em] block text-[3em] my-5 mx-auto': {},
          },
        },
        '.myread': {
          '@apply w-full text-left': {},
          'div:hover': {
            '@apply translate-x-3 -translate-y-3': {},
          },
        },
      })
    }),
  ],
}
