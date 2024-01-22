/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html"],
  theme: {
    extend: {
      fontFamily: {
        ibm: ['IBM Plex Mono'],
        raleway: ['Raleway']
      }
    },
  },
  plugins: [],
}

