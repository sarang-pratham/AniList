/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        "floral-white": '#FFFCF2',
        "pale-silver":'#CCC5B9',
        "black-olive": '#403D39',
        "eerie-black": '#252422',
        "flame-orange": '#EB5E28'
      },
      gridTemplateColumns: {
        "auto-fit": "repeat(auto-fit, minmax(100px, 1fr))",
        "auto-fill": "repeat(auto-fit, minmax(100px, 1fr))",
      },
      gridTemplateRows: {
        "auto-fit": "repeat(auto-fit, minmax(0, 1fr))",
        "auto-fill": "repeat(auto-fit, minmax(0, 1fr))",
      }
    },
  },
  plugins: [],
}
