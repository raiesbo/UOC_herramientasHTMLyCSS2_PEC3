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
        '6': '50px',
        '7': '60px',
        '8': '90px',
        '9': '120px'
      },
      screens: {
        'tablet': '640px',
        'desktop': '1280px'
      }
    },
  },
  plugins: [],
}
