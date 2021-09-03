const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        height : {
          base : "600px"
        },

        margin : {
          '18' : "4.5rem"
        }
      },
      fontFamily : {
        'poppins': ['Poppins'],
        'inter' : ['Inter']
      },
      backgroundColor : {
        'mail-gray' : "#E5E5E5"
      }
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }