/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Quicksand', 'sans-serif'],
        text: ['Source Sans Pro', 'sans-serif'],
      },
      colors: {
        mainColor: '#377FF',
        accentColor: '#4CE0B3',
        redColor: '#FF354D',
      }

    },
  },
  plugins: [],
}
