const path = require("path");

module.exports = {
  mode: "development",
  devtool: "eval-source-map",
  entry: ["./src"],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  resolve: {
    fallback: {
      fs: false,
      tls: false,
      net: false,
      path: false,
      zlib: false,
      http: false,
      https: false,
      stream: false,
      crypto: false,
      "crypto-browserify": require.resolve("crypto-browserify") //if you want to use this module also don't forget npm i crypto-browserify
    }
  },
  externals: {
    "@hubspot/api-client": "@hubspot/api-client"
  },

  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: ["@babel/transform-runtime"]
          }
        }
      },
      {
        test: /\.ts$/i,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  }
};
