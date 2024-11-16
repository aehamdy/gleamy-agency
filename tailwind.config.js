/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        'marquee-gap': '2rem', // Adjust the gap size as needed
      },
      fontFamily: {
        'roboto': "Roboto, sans-serif",
      },
      colors: {
        'accent': '#FF7E21',
        'white': '#fff',
        'white-fa': '#FAFAFA',
        'white-03': 'rgba(255, 255, 255, 0.3)',
        'gray-21': '#212121',
      },
      transitionDuration: {
        'short': '300ms',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        'marquee': 'marquee 10s linear infinite',
      },
    },
  },
  plugins: [],
}
