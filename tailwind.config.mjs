/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        landing: "url('https://placehold.co/1280x720/171717/404040')",
      },
      colors: {
        whs: {
          primary: "#FF3A3A",
        },
      },
    },
  },
  plugins: [],
};
