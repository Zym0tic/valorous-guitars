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
          header: '#01725A',
          accent: '#ef8b00',
          accent2: '#E3462A',
          grey: {
            DEFAULT: '#555555',
          },
        },
        backgroundImage: {
          hero: "url('/src/img/hero/bg.jpg')",
          about: "url('/src/img/about/image.png')",
        },
      },
    },
    plugins: [],
  };