/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/main.html',
    './src/*.js'],
  theme: {
    extend: {
      screens: {
        'xs': '475px',
      },
    },
  },
  plugins: [],
}

