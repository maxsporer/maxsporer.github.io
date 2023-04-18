/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "black": "#000000",
        "green-1": "var(--green-1)",
        "green-2": "var(--green-2)",
        "orange": "var(--orange)",
        "offwhite": "var(--offwhite)",
      },
      fontFamily: {
        ptsans: ['PTSans','sans-serif'],
        josefin: ['Josefin','serif'],
      }
    },
  },
  plugins: [],
}

