/** @type {import('tailwindcss').Config} */
export default {
  content: [
    'index.html',
    './src/**/*.jsx'
  ],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ['Ubuntu', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif']
      }
    }
  },
  plugins: []
}
