/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['PT Sans', ...defaultTheme.fontFamily.sans],
        serif: ['PT Serif', ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [],
}
