// tailwind.config.js
module.exports = {
  mode: "jit",
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  theme: {
    container: {
      center: true,
      padding: {
        default: "15px",
        xl: "0",
      },
    },
    extend: {
      colors: {
        orange: '#FA9706',
      },
      backgroundColor: {
        orange: '#FA9706',
      },
      textColor: {
        orange: '#FA9706',
      },
      fill: {
        orange: '#FA9706',
      },
      stroke: {
        orange: '#FA9706',
      },
    },
  },
  variants: {},
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen md': {
            maxWidth: '700px',
          },
          '@screen lg': {
            maxWidth: '976px',
          },
          '@screen xl': {
            maxWidth: '1240px',
          },
        }
      })
    }
  ],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === "production",
    content: ["src/html/**/*.html", "src/js/**/*.js"],
  },
};
