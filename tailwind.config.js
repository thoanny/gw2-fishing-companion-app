/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./splashscreen.html",
    "./src/**/*.{vue,js}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        fishingcompanion: {
          "primary": "#053849",
          "secondary": "#16B6C5",
          "accent": "#E6C78D",
          "neutral": "#fff",
          "base-100": "#002128",
          "info": "#16B6C5",
          "success": "#2ecc71",
          "warning": "#f1c40f",
          "error": "#e74c3c",
        },
      },
    ],
  },
}

