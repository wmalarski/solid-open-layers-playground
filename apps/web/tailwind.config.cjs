/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "../../packages/ui/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: ["business"],
  },
  plugins: [require("@kobalte/tailwindcss"), require("daisyui")],
  theme: {
    extend: {},
  },
};
