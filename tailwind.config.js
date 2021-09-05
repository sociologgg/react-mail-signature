const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        height : {
          base : "600px",
          '100%':'100%'
        },
        width:{
          '475px':'475px',
          '300px':'300px',
          '100%':'100%',
          '350px':'350px'
        },
        margin : {
          '18' : "4.5rem"
        },
        backgroundColor : {
          'mail-gray' : "#E5E5E5",
          'login-red':'#E74825',
          'login-red-hover':'#CD3716'
        },
        textColor:
        {
          'label':'#50565F',

          'login-red':'#E74825',
        },
        borderColor:
        {
          'input':'#D3D7DF',
          'login-red':'#ED9319'
        }
      },
      fontFamily : {
        'poppins': ['Poppins'],
        'inter' : ['Inter']
      }
      
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }