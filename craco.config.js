const sassResourcesLoader = require("craco-sass-resources-loader");

module.exports = {
  plugins: [
    {
      plugin: sassResourcesLoader,
      options: {
        resources: [
          "./src/scss/_variables.scss",
          "./src/scss/mixins/_mixins.scss",
        ],
      },
    },
  ],
};
