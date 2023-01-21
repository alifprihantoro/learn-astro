/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        dracula: {
          'primary': '#4f46e5',
          'secondary': '#3b82f6',
          'accent': '#5eead4',
          'neutral': '#414558',
          'base-100': '#282A36',
          'info': '#8BE9FD',
          'success': '#50FA7B',
          'warning': '#F1FA8C',
          'error': '#FF5555',
        },
      },
      'cupcake',
    ],
  },
  // eslint-disable-next-line no-undef
  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui'),
  ],
}
