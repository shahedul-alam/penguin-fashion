/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      fontFamily: {
        'roboto': ["Roboto", "sans-serif"],
        'bebas': ["Bebas Neue", "sans-serif"],
      },
    },
  },
  plugins: [],
}

