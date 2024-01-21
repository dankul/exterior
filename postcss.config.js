module.exports = {
  plugins: {
    tailwindcss: require("./tailwind.config.js"),
    autoprefixer: require("autoprefixer"),
    "postcss-preset-env": {
      browsers: "last 2 versions",
      features: {
        "focus-within-pseudo-class": false,
      },
    },
    cssnano: {},
  },
};
