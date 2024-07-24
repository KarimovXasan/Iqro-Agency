/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth:{
        '1240' : '1240px', 
      },
      colors:{
        'Light-blue' : '#64CCC5',
        'black' : '#0C0C0C',
        'light-dark' : '#121212',
        'white' : '#FFFFFF',
        'gray100' : '#F4F4F4',
        'gray200' : '#DFDFDF',
      },
    },
  },
  plugins: [],
}