/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'barlow': ["'Barlow', sans-serif"],
        'fraunces': ["'Fraunces', serif"]
      },
      colors: {
        "soft-red": 'hsl(7, 99 %, 70 %)',
        "yellow": 'hsl(51, 100%, 49%)',
        "dark-desaturated-cyan": 'hsl(167, 40%, 24%)',
        "dark-blue": 'hsl(198, 62%, 26%)',
        "dark-moderate-cyan": 'hsl(168, 34%, 41%)',
        "very-dark-desaturated-blue": 'hsl(212, 27%, 19%)',
        "very-dark-grayish-blue": 'hsl(213, 9%, 39%)',
        "dark-grayish-blue": 'hsl(232, 10%, 55%)',
        "grayish-blue": 'hsl(210, 4%, 67%)',
        "dark-yellow": "#fad4004d",
        "light-green": "#90d4c6",
        "background-clients": "rgb(255, 251, 248)"
      },
      backgroundImage: {
        'background-header': "url('./assets/img/desktop/image-header.jpg')",
        'background-header-mobile': "url('./assets/img/mobile/image-header.jpg')"
      },
      fontSize: {
        '2.7': ["2.7rem", "3.5rem"]
      },
      margin: {
        '10-per': '10%'
      },
      letterSpacing: {
        'more-wide': '5px',
      },
      keyframes: {
        'move-arrow': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' }
        }
      },
      animation: {
        'custom': 'move-arrow 1.5s linear infinite'
      },
      screens: {
        'xs': '425px'
      }
    },
  },
  plugins: [],
}

