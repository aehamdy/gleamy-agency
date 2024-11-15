/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'white': '#fff',
        'white-03': 'rgba(255, 255, 255, 0.3)',
        'accent': '#FF7E21',
      },
      transitionDuration: {
        'short': '300ms',
      }
    },
  },
  plugins: [],
}