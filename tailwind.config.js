/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'views/**/*.pug'
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['"Varela Round"', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: ["cupcake","dark"],
  }
}

