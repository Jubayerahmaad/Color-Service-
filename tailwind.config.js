/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*'],
  theme: {
    extend: {
      container: {
        center: true, // Centers the container by default
        padding: '1rem', // Sets default padding for all screens
        screens: {
          sm: '600px',
          md: '700px',
          lg: '900px',
          xl: '1200px',
          '2xl': '1240px', // Custom size for larger screens
        },
      },
    },
    fontFamily: {
      'sans': ['Public Sans', 'sans serif'],
    },
  },
  plugins: [],
}

