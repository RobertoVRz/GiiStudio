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
