/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto': "Roboto, sans-serif",
      },
      colors: {
        'white': '#fff',
        'white-03': 'rgba(255, 255, 255, 0.3)',
        'accent': '#FF7E21',
      },
      transitionDuration: {
        'short': '300ms',
      },
      keyframes: {
        rotate: {
          '0%': {transform: 'rotate(360deg)'},
          '100%': {transform: 'rotate(0deg)'},
        },
      },
      animation: {
        'rotate-slow': 'rotate 5s linear infinite',
      }
    },
  },
  plugins: [],
}