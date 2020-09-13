const commonPaths = require("./common-paths");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const config = {
  mode: "production",
  entry: {
    app: [`${commonPaths.appEntry}/index.js`],
  },
  output: {
    filename: "static/[name].js",
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "styles/[name].css",
    }),
    new HtmlWebpackPlugin({
      template: `public/index.html`,
      favicon: `public/favicon.ico`,
    }),
  ],
};

module.exports = config;
