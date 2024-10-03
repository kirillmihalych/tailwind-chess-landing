/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx, css, config}'],
  theme: {
    extend: {
      fontFamily: {
        golos: ['Golos text', 'sans-serif'],
        merriweather: ['Merriweather'],
      },
      fontSize: {
        // Perfect fourth scale
        300: 'clamp(0.7rem, 0.66rem + 0.2vw, 0.8rem)',
        400: 'clamp(0.88rem, 0.83rem + 0.24vw, 1rem)',
        500: 'clamp(1.09rem, 1rem + 0.47vw, 1.33rem)',
        600: 'clamp(1.37rem, 1.21rem + 0.8vw, 1.78rem)',
        700: 'clamp(1.71rem, 1.45rem + 1.29vw, 2.37rem)',
        800: 'clamp(2.14rem, 1.74rem + 1.99vw, 3.16rem)',
        900: 'clamp(2.67rem, 2.07rem + 3vw, 4.21rem)',
        1000: 'clamp(3.34rem, 2.45rem + 4.43vw, 5.61rem)',
      },
      container: {
        padding: '1.5rem',
      },
      backgroundImage: {
        'main-375': "url('src/assets/images/bg-chess-375.jpg')",
        'main-1366': "url('src/assets/images/bg-chess-1366.png')",
        'main-1920': "url('src/assets/images/bg-chess-1920.png')",
        polotno: "url('src/assets/images/polotno.png')",
      },
      backgroundPosition: {
        'bottom-center': 'bottom center',
      },
      lineHeight: {
        small: '1.1',
        regular: '1.3',
      },
      colors: {
        'main-100': '#595653',
        'main-200': '#313131',
        black: '#1F1F1F',
        white: '#FFFFFF',
        highlight: '#F54932',
        link: '#3057A2',
      },
      padding: {
        3.5: '0.625rem',
        18: '4.5rem',
        88: '21.75rem',
      },
      margin: {
        15: '3.875rem',
      },
      screen: {
        'extra-sm': '480px',
      },
      gridTemplateColumns: {
        'auto-1fr': 'auto, 1fr',
        '1fr-1fr-auto': '1fr, 1fr, auto',
      },
    },
  },
  plugins: [require('tailwindcss-logical')],
}
