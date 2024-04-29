/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
      fontFamily: {
        primary: 'IM Fell English',
        secondary: 'IM Fell English SC',
        tertiary: 'IM Fell English',
      },
      container: {
        padding: {
          DEFAULT: '20px',
          lg: '0',
        },
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1300px',
      },
      extend: {
        colors: {
          dark: '#111111',
          header: '#1D0000',
          accent: '#790000',
          accent2: '#FFA644',
          grey: {
            DEFAULT: '#555555',
          },
        },
        backgroundImage: {
          hero: "url('/src/img/hero/bg.jpg')",
          headerImg: "url('/src/img/header/header-img.jpg')",
          about: "url('/src/img/about/image.png')",
        },
      },
    },
    plugins: [],
  };