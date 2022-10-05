/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend:{
      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
        //'md': {'min': '768px', 'max': '1023px'},
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
  
        '1.5xl': '1440px',
        // => @media (min-width: 1440px) { ... }
      },
      width: {
        'pc': '1440px',
        'test': '1800px',
        '30': '120px',
        '75': '300px',
      },
      height:{
        'px-720': '720px',
      },
      backgroundImage:{
        'img-MV':"url('./assets/img/MV.png')",
        'img-Kanata':"url('./assets/img/kanata.jpg')",
      },
    },
  },
  plugins: [],
}