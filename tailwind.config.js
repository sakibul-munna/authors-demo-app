/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0C1222",
        secondary: "#38BDF8",
        ternary: "#E2E8F0",
        "dark-purple": "#081A51",
        "light-white": "rgba(255, 255, 255, 0.5)",
        lightGray: "#D3D3D3",
        purple: "#6842EF",
      },
      screens: {
        xs: "480px",
        sm: "768px",
        md: "1060px",
      },
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
