/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0px 10px 20px -5px rgba (0, 0, 0, 0.3)'
      }
    },
  },
  plugins: [],
}