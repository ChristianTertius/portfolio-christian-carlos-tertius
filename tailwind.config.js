/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  darkMode: 'class',
  theme: {
    container:{
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
         primary: '#6775D5',
         secondary: '#64748b',
         dark: '#0f172a'
      },
      screens:{
        '2xl': '1920px',
      },
    },
  },
  plugins: [],
}

