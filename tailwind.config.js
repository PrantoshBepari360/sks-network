/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "regal-blue": "#243c5a",
      },
      margin: {
        "5px": "5px",
      },
      zIndex: {
        100: "100",
      },
      screens: {
        'lg': '1100px',
      }
    }
  },
  plugins: [],
};
