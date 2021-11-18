module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'glazeblue': "url('./img/color-blue.png')",
        'glazewhite': "url('./img/color-white.png')",
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
