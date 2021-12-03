const defaultTheme = require("tailwindcss/defaultTheme");
function forLoop() {
  var obj = {};
  for (let i = 0; i <= 1000; i += 2) {
    if (i % 2 == 0) obj[`${i}px`] = `${i}px`;
  }
  return obj;
}

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        base: "600px",
        ...forLoop(),
        "100%": "100%",
      },
      width: {
        ...forLoop(),
        w31px: "w31px",
        "50%": "50%",
        "100%": "100%",
        '33%':'33%',
        '60%':'60%',
        '65%':'65%',
        '70%':'70%',
        "215px": "215px",
        "620px": "620px",
        "760px": "760px",
      },
      margin: {
        'n90px':'-90px',
        18: "4.5rem",
        ...forLoop(),
      },

      padding: { 100: "32.5rem", ...forLoop(), "10%": "10%" },
      backgroundColor: {
        "janus-site-blue": "#167FFC",
        "janus-blue-hover": "#0470F0",
        "janus-site-bluef": "#1061c4",
        success: "#36A54926",
        compOrange: "#FCB20E",
        "compOrange-hover": "#FBAD17",
        "mail-gray": "#E5E5E5",
        "login-red": "#E74825",
        "login-red-hover": "#CD3716",
        "janus-blue": "#3CABDB",
        "dark-blue": "#8833FF",
        "hover-dark-blue ": "#720EFF",
        hubspot: "#FF7A59",
        gmail: "#36A549",
        "janus-gray": "#6A6B6D",
        yahoo: "#6C489E",
        apple: "#979797",
        nfcBg: "#FAFAFA",
        grayf3: "#f3f3f3",
        footer: "#9FCBFF",
      },
      backgroundImage: {
        landpagebg: "url(/src/images/landpagebg.jpg)",
        bubbles: "url(/src/images/bubbles.png)"
      },
   
      maxWidth: {
        "1/4": "25%",
        "1/2": "50%",
        
        "3/4": "75%",
        "100%": "100%",
        ...forLoop(),
      },
      minWidth: {
        "1/4": "25%",
        "1/2": "50%",
        "1300px": "1300px",
        "3/4": "75%",
        "100%": "100%",
        "1200px": "1200px",
        ...forLoop(),
      },
      minHeight: {
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
        "100%": "100%",
        ...forLoop(),
      },
      maxHeight: {
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
        "100%": "100%",
        ...forLoop(),
      },

      textColor: {
        label: "#50565F",
        "janus-blue2": "#2593FA",
        "janus-red": "#D63835",
        "dark-blue": "#6EA4BF",
        "error-red": "#D63835",
        "login-red": "#E74825",
        "janus-dark-blue": "#167FFC",
        "input-gray": "#545454",
        "rstpsw-gray": "#979797",
        "janus-purple": "#6C489E",
        "line-gray": "#7B7B7B",
        "mail-gray": "#656565",
        "light-blue": "#3CADBD",
        hubspot: "#FF7A59",
        gmail: "#36A549",
        yahoo: "#6C489E",
        apple: "#979797",
        "info-red": "#D63835",
        bigJanus: "#36A9F8",
      },
      fontSize: {
        ...forLoop(),
      },
      bottom: {
        ...forLoop(),
      },
      left:
      {
'50%':'50%'
      },

      boxShadow: {
        input: "1px 1px 5px rgba(0, 49, 108, 0.15)",
        card: "0 1px 2px 4px rgba(0, 0, 0, 0.05)",
        "sign-input": "1px 1px 5px 0px rgba(0, 49, 108, 0.15)",
        hicard: "0px 4px 12px rgba(0,0,0,0.25)",
      },
      inset: {
        ...forLoop(),
        minus16px: "-16px",
        '50%':'50%'
      },
      borderColor: {
        input: "#D3D7DF",
        "login-red": "#ED9319",
        "janus-focus-blue": "#167FFC",
        "line-gray": "#7B7B7B",
        "error-red": "#D63835",
        signborder: "#ebe9e6",
        apple: "#979797",
        "janus-purple": "#6C489E",
      },
      borderWidth: {
        0.5: "0.5px",
      },
    },

    fontFamily: {
      poppins: ["Poppins"],
      inter: ["Inter"],
      sacramento: ["Sacramento"],
      roboto: ["Roboto"],
    },
  },
  variants: {
    extend: {
      opacity: ["disabled"],
      borderWidth: ["hover", "focus"],
      borderColor: ["hover", "focus"],
    },
  },
  plugins: [],
};
