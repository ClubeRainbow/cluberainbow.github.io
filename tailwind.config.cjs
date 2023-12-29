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
        "cr-beige": "#e8ded4",
        "cr-brown": "#745952",
        "cr-red-beige": "#e9c9b7",
        "cr-off-white": "#f8f5f2",
        "cr-purple": "#9b59b6",
        "cr-light-purple": "#dfcae7",
        "cr-orange": "#e67e22",
        "cr-light-orange": "#f6d1b1",
        "cr-teal": "#1abc9c",
        "cr-light-teal": "#c6f6ee"
      },
      screens: {
        "sm": "500px",
        "xl-topbar": "1300px",
      }
    }
  },
  plugins: [],
}
