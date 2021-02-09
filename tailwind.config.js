/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  important: true,
  theme: {
    fontFamily: {
      display: ['Spartan', 'sans-serif'],
      body: ['Spartan', 'sans-serif'],
    },
    extend: {
      colors: {
        dorado: '#B7A187',
      },
      spacing: {
        sm: '24rem',
      },
      screens: {
        xxl: '1400px',
      },
    },
    animation: {
      'spin': 'spin 10s linear infinite',
      'bounce': 'bounce 10s linear infinite'
     },/*
     keyframes:{
      bounce: {
        '0%, 100%': {
          transform: 'translateY(-50%) rotate(360deg)',
          animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)'
        },
        '50%': {
          transform: 'translateY(0) rotate(0deg)',
          animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)'
        }
      }
     },*/
    container: {
      center: true,
      padding: '1rem',
    },
  },
  variants: {},
  plugins: [],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
    ],
  },
}
