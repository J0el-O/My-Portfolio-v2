/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html"],
  theme: {
    extend: {
      fontFamily: {
        ibm: ['IBM Plex Mono'],
        raleway: ['Raleway'],
        archivo: ['Archivo']
      },
      screens: {
        'widescreen':{ 'raw': '(min-aspect-ratio: 3/2)'}, 
        'tallscreen':{ 'raw': '(min-aspect-ratio: 1/2)'}, 
      }
    },
  },
  plugins: [],
}

