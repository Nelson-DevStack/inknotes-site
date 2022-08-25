/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Quicksand', 'sans-serif'],
        text: ['Source Sans Pro', 'sans-serif'],
        textVariable: ['Karla', 'sans-serif'],
      },
      colors: {
        mainColor: '#3777FF',
        accentColor: '#4CE0B3',
        customRed: '#e8485b',
        hoverRed: '#cf4051',
      },
    },
  },
  plugins: [],
};
