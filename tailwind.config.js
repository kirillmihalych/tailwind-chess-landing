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
        '2.5xl': '1.75rem',
      },
      container: {
        padding: '1.5rem',
      },
      backgroundImage: {
        'main-375': "url('src/assets/images/bg-chess-375.jpg')",
        'main-1366': "url('src/assets/images/bg-chess-1366.png')",
        'main-1920': "url('src/assets/images/bg-chess-1920.png')",
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
      },
    },
  },
  plugins: [require('tailwindcss-logical')],
}
