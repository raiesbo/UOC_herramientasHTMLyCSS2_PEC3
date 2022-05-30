module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
      },
      gridTemplateColumns: {
        'gallery': 'repeat(auto-fill, minmax(270px, 1fr))',
        'bands': 'repeat(auto-fill, minmax(300px, 1fr))',
      },
      spacing: {
        '1': '5px',
        '2': '10px',
        '3': '15px',
        '4': '20px',
        '5': '25px',
        '6': '30px',
        '7': '35px',
        '8': '50px',
        '9': '60px',
        '10': '90px',
        '11': '120px',
        '12': '300px',
        '20': '1100px'
      },
      screens: {
        'tablet': '480px',
        'desktop': '930px'
      }
    },
  },
  plugins: [],
}
