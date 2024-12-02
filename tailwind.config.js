/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        'marquee-gap': '2rem',
        'spacing-sm': '30%',
        'spacing-md': '15%',
        'spacing-lg': '2%',
      },
      fontSize: {
        navItemClamp: 'clamp(2rem, 3vw, 2.2rem)',
        sectionHeadingClamp: 'clamp(2rem, 3vw, 3.5rem)',
        headingClamp: 'clamp(1.6rem, 4vw, 2.25rem)',
        paragraphClamp: 'clamp(1.3rem, 2.5vw, 2rem)',
        projectTextClamp: 'clamp(1.3rem, 5vw, 2.5rem)',
      },
      fontFamily: {
        'roboto': "Roboto, sans-serif",
      },
      colors: {
        // 'accent': '#FF7E21',
        'accent': '#ff8d3c',
        'white': '#fff',
        'white-fa': '#FAFAFA',
        // 'paragraph-color': '#CBCBCB',
        'paragraph-color': 'rgb(157, 157, 157)',
        'white-03': 'rgba(255, 255, 255, 0.3)',
        'gray-21': '#212121',
      },
      transitionProperty: {
        'transform': 'transform',
      },
      transitionTimingFunction: {
        'ease-out': 'ease-out',
      },
      transitionDuration: {
        'short': '300ms',
        '500': '500ms',
      },
      keyframes: {
        'rotate-slow': {
          '0%': {transform: 'rotate(0deg)'},
          '100%': {transform: 'rotate(360deg)'},
        },
        'marquee-move-text': {
          'to': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'rotate-slow': 'rotate-slow 5s linear infinite',
        'marquee-move-text': 'marquee-move-text 10s linear infinite',
      },
    },
  },
  plugins: [],
}
