const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./data/**/*.mdx"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...fontFamily.sans],
      },
    },
  },
  variants: {
    typography: ["dark"],
  },
  plugins: [
    require("@tailwindcss/typography"),
    function ({ addBase }) {
      addBase([
        {
          "@font-face": {
            fontFamily: `Inter var`,
            fontWeight: `100 900`,
            fontDisplay: `swap`,
            fontStyle: `normal`,
            fontNamedInstance: `Regular`,
            src: `url("/fonts/Inter-roman-latin.var.woff2?v=3.19") format("woff2")`,
          },
        },
      ]);
    },
  ],
};
