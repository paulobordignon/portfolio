/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
      colors: {
        primary: "#8FE3CF",
        secondary: "#060b28",
        text: "#DFF6FF",
        // "#0A192F" "#060b28" #DFF6FF #ccd6f6 #6886de
      },
    },
  },
  plugins: [],
};
