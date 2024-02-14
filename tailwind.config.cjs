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
      "source-sans-pro": ["Source Sans Pro", "sans-serif"]
    },
    borderColor: {
      DEFAULT: 'currentColor',
    },
    extend: {
      colors: {
        "cr-beige": "#e4ddd3",
        "cr-brown": "#745854",
        "cr-medium-brown": "#d4b9a5",
        "cr-light-brown": "#e0cdbc",
        "cr-off-white": "#f8f5f2",
        "cr-purple": "#9b59b6",
        "cr-light-purple": "#c09bc5",
        "cr-orange": "#e67e22",
        "cr-light-orange": "#e5ae7b",
        "cr-teal": "#1abc9c",
        "cr-light-teal": "#99d1bf"
      },
      screens: {
        "sm": "500px",
        "xl-topbar": "1300px",
      }
    }
  },
  plugins: [],
}
