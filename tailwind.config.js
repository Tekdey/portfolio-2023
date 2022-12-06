/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "t-light-black": "#f3f3f3",
        "t-black": "#f3f3f3",
        "t-orange": "#FFA400",
        "t-white": "black",
      },
    },
  },
  plugins: [],
};
