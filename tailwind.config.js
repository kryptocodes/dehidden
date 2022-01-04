module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        gm: {
          'pink': '#FF2D62',
          'blue': '#81A1FF'
        }
      },
      fontFamily: {
        'gm-black': ['Causten-round-black'],
        'gm-bold': ['Causten-round-bold'],
        'gm-regular': ['Causten-round-regular'],
      },
    },
  },
  plugins: [],
}
