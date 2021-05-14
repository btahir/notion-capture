const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {    
      colors: {
        palette: {
          light: '#F5F3FF',
          primary: '#7C3AED',
          dark: '#6D28D9',
        },
      },
      fontFamily: {
        primary: ['Poppins'],
        secondary: ['"Open Sans"'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
