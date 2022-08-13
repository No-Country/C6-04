/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./public/index.html", "./src/**/*.{js,jsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      blue: colors.blue,
      cyan: colors.cyan,
      emerald: colors.emerald,
      gray: colors.gray,
      green: colors.green,
      indigo: colors.indigo,
      orange: colors.orange,
      pink: colors.pink,
      purple: colors.purple,
      red: colors.red,
      sky: colors.sky,
      stone: colors.stone,
      violet: colors.violet,
      white: colors.white,
      yellow: colors.yellow,
      "main-blue": "#205EA9",
      "main-yellow": "#FCBF29",
      "main-white": "#FFFEFF",
      "main-black": "#202A25",
      'main-gray': '#D9D9D9',
      "second-blue": "#618AC9",
      "second-yellow": "#F6B138",
      "second-green": "#31968E",
      "second-red": "#CE433F",
    },
    extend: {},
  },
  plugins: [],
};
