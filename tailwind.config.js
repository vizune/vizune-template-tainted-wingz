/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",  
  ],
  theme: {
    colors: {
      'slate': '#22293c',
      'gold': '#fe9b56'
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '2rem',
        sm: '1rem'
      },
      maxWidth: '1456px'
    },
    extend: {},
  },
  plugins: [],
}