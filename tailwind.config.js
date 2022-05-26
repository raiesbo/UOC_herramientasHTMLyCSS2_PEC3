module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {},
  },
  plugins: {
    tailwindcss: { config: './tailwindcss-config.js' },
  }
}
