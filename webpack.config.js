const path = require("path");
const webpack = require("webpack");

const common = (isMinified = false) => ({
  context: path.resolve(__dirname),
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "scarlet" + (isMinified ? ".min" : "") + ".js",
    libraryTarget: "umd",
    library: "Scarlet"
  },
  resolve: {
    modules: ["node_modules"],
    extensions: [".js"]
  }
});

module.exports = [
  common(false),
  {
    ...common(true),
    plugins: [
      new webpack.optimize.UglifyJsPlugin({
        include: /\.min\.js$/,
        beautify: false,
        comments: false,
        compress: {
          warnings: false
        }  
      }),
      new webpack.DefinePlugin({
        "process.browser": JSON.stringify(true)
    })
    ]  
  }
];