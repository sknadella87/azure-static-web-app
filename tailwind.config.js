/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{html,js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        magneta: {
          primary: '#BF08C0',
          secondary: '#B301FC',
        },
        purple: {
          primary: '#6F19F7',
          secondary: '#785C94',
          tertiary: '#32046E',
         
        },
        teal: {
          primary: '#1FE1D6',
          secondary:'#17A69F'
        },
        green: {
          primary: '#18CF15',
          secondary: '#CCEB0D', //lime green
          tertiary:'#6F8C6A', //medium warn green
          dark:'#1B461F' //dark
        },
        blue: {
          primary: '#42B5FC', // sky blue
          secondary: '#1965DE', //deep water blue
          tertiary: '#244579' //navy

        },
        orange: {
          primary: '#FC5913',
        
        },
        yellow: {
          primary: '#F9DC05', //bright
          secondary:'#E19F1F' //gold
        },
        red: {
          primary: '#FC2828', //bright
          secondary:'#851612', //dark
          tertiary : '#B17174' //Midtown red
        },
        gray: {
          primary: '#CECED1', //light
          secondary:'#8D9091', //medium
          tertiary : '#595959' //Dark Gray
        },
        black: {
          primary: '#020216', 
          secondary:'#1F1835', //dark
        },
      },
    },
  },
  plugins: [],
  safelist: [
    'border-magneta-primary'
  ]
}
