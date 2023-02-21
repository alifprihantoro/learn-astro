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
    },
  },
  daisyui: {
    themes: [
      {
        dark: {
          'primary': '#4f46e5',
          'secondary': '#3b82f6',
          'accent': '#5eead4',
          'neutral': '#414558',
          'base-100': '#282A36',
          'info': '#374151',
          'success': '#50FA7B',
          'warning': '#F1FA8C',
          'error': '#FF5555',
        },
        light: {
          'primary': '#4f46e5',
          'secondary': '#3b82f6',
          'accent': '#5eead4',
          'neutral': '#414558',
          'base-100': '#cacaca',
          'base-300': '#282A36',
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
          '@apply bg-base-100 m-5 py-3 px-5 rounded-md w-fit hover:-translate-y-3 transition-all duration-200': {},
        },
      })
    }),
  ],
}
