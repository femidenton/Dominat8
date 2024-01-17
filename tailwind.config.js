/** @type {import('tailwindcss').Config} */
module.exports = {
  //tells tailwind where to look for utilitiy class. in this case, look for it in the root directory
  content: ['./*html'], 
  theme: {
    screens:{
      sm: '480px',
      md:'768px',
      lg: '976px',
      xl:'1440px'
    },
    extend: {
      colors: {
        heroBackground: 'radial-gradient(50% 50% at 50% 50%, #134E78 0%, #111A1F 100%);',
        underlineText: '#5DC21E',
        primaryBlueText: '#124E78',
        brightRedSupLight: 'hsl(12, 88%, 95%)',
        darkBlue: 'hsl(228, 39%, 23%)',
        darkGrayishBlue: 'hsl(227, 12%, 61%)',
        lightGray: '#8A8585',
        veryLightGray: '#D4D4D8;',


      }
    },
  },
  plugins: [],
}

