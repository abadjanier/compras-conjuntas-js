/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'stripe-purple': '#635bff',
        'stripe-dark': '#0a2540',
        'stripe-light': '#f6f9fc',
        'stripe-text': '#425466',
      },
      fontFamily: {
        'stripe': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};