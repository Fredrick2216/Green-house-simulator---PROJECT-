module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'farm-pattern': "url('/src/assets/background.jpg')",
      }
    },
  },
  plugins: [require('@tailwindcss/forms')],
}