/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          100: '#1f1f24',
          200: '#18181c',
          300: '#141418',
          400: '#0f0f12',
          500: '#0a0a0c',
        },
        accent: {
          400: '#404040',
          500: '#333333',
          600: '#262626',
        },
        surface: {
          100: 'rgba(255, 255, 255, 0.05)',
          200: 'rgba(255, 255, 255, 0.08)',
          300: 'rgba(255, 255, 255, 0.1)',
        },
      },
      backgroundImage: {
        'gradient-dark': 'linear-gradient(180deg, rgba(18, 18, 23, 0.9) 0%, rgba(23, 23, 28, 0.9) 100%)',
      },
    },
  },
  plugins: [],
};