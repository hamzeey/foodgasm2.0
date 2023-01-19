/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.{html,js}"
  ],
  theme: {
    extend: {
      screens: {
        "sm": "480px"
      }
    },
  },
  plugins: [],
}
