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
      DEFAULT: 'currentColor',
    },
    extend: {
      colors: {
      "cr-beige": "#e8ded4",
      "cr-brown": "#745952",
      "cr-red-beige": "#e9c9b7",
      "cr-off-white": "#f8f5f2",
      "cr-purple": "#9b59b6",
      "cr-orange": "#e67e22",
      "cr-teal": "#1abc9c",
      },
      screens: {
        "lg-topbar": "1200px",
        "xs": "400px",
      }
    }
  },
  plugins: [],
}
