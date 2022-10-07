/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        primary: "#64ffda",
        secondary: "#060b28",
        primaryText: "rgb(255 255 255/1)",
        secondaryText: "rgb(163 179 188/1)",
        dark: "rgb(13 17 23/1)",
        hover: "#b3ffed",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      screens: {
        xs: "475px",
      },
    },
  },
  plugins: [],
};
