/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      keyframes: ({ theme }) => ({
        mutation: {
          '0%': {
            background: theme('colors.neutral.600 / 0%'),
            color: 'transparent'
          },
          '50%': {
            background: theme('colors.neutral.600 / 10%'),
          },
          '100%': {
            background: theme('colors.neutral.600 / 0%'),
          },
        },
        loading: {
          '0%': {
            opacity: '.2',
          },
          '20%': {
            opacity: '1',
            transform: 'translateX(1px)',
          },
          to: {
            opacity: '.2',
          },
        },
        shimmer: {
          '100%': {
            transform: 'translateX(100%)',
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
