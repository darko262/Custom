/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        rocket:['New Rocker']
      },
      keyframes:{
        reveal:{
          "from":{
            opacity:0,

          },
          "to":{
            opacity:1,
          }

        },
        moveUpDown:{
          "0% ": {
            transform: "translateY(-100%)",
            
            
          },
          
          "95%": {
            transform: "translateY(95%)",
            opacity: 0,
          },
          
          "100%": {
            transform: "translateY(-100%)",
            opacity: 0,
            
          },
        }
      },
      animation: {
        wiggle: 'moveUpDown 6s ease-out infinite',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}