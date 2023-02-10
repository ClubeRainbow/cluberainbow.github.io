/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    fontFamily: {
      "shrikhand": ["Shrikhand", "sans-serif"],
      "comic-neue": ["Comic Neue", "sans-serif"],
    },
    borderColor: {
      DEFAULT: 'cr-brown',
    },
    extend: {
      colors: {
      "cr-beige": "#e8ded4",
      "cr-off-white": "#f2efeb",
      "cr-brown": "#745952",
      "cr-light-brown": "#927f79",
      "cr-purple": "#9b59b6",
      "cr-orange": "#e67e22",
      "cr-teal": "#1abc9c",
      }
    }
  },
  plugins: [],
}
