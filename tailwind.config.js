const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{html,ts}"],
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      letterSpacing: {
        forPassword: "0.2em",
      },
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      red: colors.red,
      blue: colors.blue,
      green: colors.green,
      violet: colors.violet,
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
