/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        "rich-black": '#0D1B2A',
        "oxford-blue": '#1B263B', 
        "light-blue" : '#415a77',
        "flame-orange": '#eb5e28',
      },
    },
  },
  plugins: [],
}
