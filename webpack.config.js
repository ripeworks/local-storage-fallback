const path = require("path");

module.exports = {
  mode: "production",
  entry: "./lib",
  output: {
    path: path.resolve(__dirname, "lib"),
    filename: "dist.min.js",
    library: {
      name: "localStorageFallback",
      type: "umd",
      export: "default",
    },
  },
};
