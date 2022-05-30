module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
      },
      spacing: {
        '1': '5px',
        '2': '10px',
        '3': '15px',
        '4': '20px',
        '5': '25px',
        '6': '30px',
        '6': '35px',
        '7': '50px',
        '8': '60px',
        '9': '90px',
        '10': '120px',
        '11': '300px',
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
