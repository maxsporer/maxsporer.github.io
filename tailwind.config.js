/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "black": "#000000",
        "primary": "var(--primary)",
        "secondary": "var(--secondary)",
        "tertiary": "var(--tertiary)",
        "bg": "var(--bg)",
      },
      fontFamily: {
        body: ['Spectral','sans-serif'],
        head: ['Spectral','serif'],
      }
    },
  },
  plugins: [],
}

