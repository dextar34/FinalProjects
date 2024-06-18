/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    fontFamily: {
      'Cormorant': ['Cormorant Upright'],
      'Open': ['Open Sans']
    },
    extend: {
      animation: {
        'spin-slow': 'spin 10s linear infinite'
      },
    },
  },
  plugins: [],
}