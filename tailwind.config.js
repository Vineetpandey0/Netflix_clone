// tailwind.config.js

module.exports = {
  content: [
    './src/**/*.html', // 👈 looks for all HTML files inside src/
    './src/**/*.{js,jsx,ts,tsx}', // 👈 if you have JS/TS files later
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar-hide') // 👈 include scrollbar-hide plugin
  ],
};
