// postcss.config.cjs
module.exports = {
  plugins: [
    require('@tailwindcss/postcss'), // required for Tailwind 4+
    require('autoprefixer')
  ]
};