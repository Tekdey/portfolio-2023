/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "t-light-black": "#393E46",
        "t-black": "#222831",
        "t-orange": "#FF5722",
        "t-white": "#EEEEEE",
      },
    },
  },
  plugins: [],
};
