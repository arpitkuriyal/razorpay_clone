/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend:{
      fontFamily:{
        arpit:["fira sans", "sans-serif"],
        mullish: ["Mulish", "sans-serif"],
      },
      colors: {
        deepBlue: "#02042a",
        lightBlue: "#2b84ea",
        lightBlue300: "#4b94ed",
        lightBlue500: "#0b72e7",
        greenLight: "#61cea6",
        grayText: "#818597",
        lightGray: "#e2e2e2",
        grayBlue: "#344a6c",
        deepBlueHead: "#162f56",
        gray2: "#525a76",
      },
      animation:{
        'companiesList':'companiesList 10s infinite linear ',
      },
      keyframes:{
        companiesList:{
          '0%':{top:'0'},
          '100%':{top:'-100px'},
        }
      }
    },
  },
  plugins: [],
}

