/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        primary: "#64ffda",
        secondary: "rgba(13, 17, 23, 1)",
        primaryText: "rgba(255, 255, 255, 1)",
        secondaryText: "rgba(163, 179, 188, 1)",
        background: "rgba(13, 17, 23,1)",
        backgroundHeader: "rgba(13, 17, 23, 0.95)",
        card: "hsla(0,0%,100%,0.03)",
        cardHover: "hsla(0,0%,100%,0.05)",
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
