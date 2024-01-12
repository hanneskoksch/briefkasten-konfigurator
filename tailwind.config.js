/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        glazeblue: "url('./img/color-blue.png')",
        glazewhite: "url('./img/color-white.png')",
        glazegrey: "url('./img/color-grey.png')",
        glazegreen: "url('./img/color-green.png')",
      },
    },
  },
  plugins: [],
};
