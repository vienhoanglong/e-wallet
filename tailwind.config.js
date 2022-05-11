module.exports = {
  mode:'jit',
  purge:["./**/*.html"],
  plugins: [
    require('tailwindcss-textshadow')
  ],
  theme: {
    fontFamily:{
      poppins: ["Poppins"],
    },
    extend: {
      spacing:{
        35:'35px',
      }
    },
    boxShadow:{
      "3d": "6px 6px 16px 0 rgba(0, 0, 0, 0.25), -4px -4px 12px 0 rgba(255, 255, 255, 0.3);",
    },
    textShadow:{
      't1': '0 2px 0 #000',
      't2': '5px 7px #000000'
    }
  },
}
