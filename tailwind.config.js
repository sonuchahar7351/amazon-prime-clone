/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    function ({addUtilities}){
      const newUtilities = {
        ".no-amazon-scollbar::-webkit-scrollbar":{
          display: "none"
        }
      }
      addUtilities(newUtilities)
    }
  ],
}