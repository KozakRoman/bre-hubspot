module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        useBuiltIns: "usage",
        corejs: { version: 3 },
        targets: ["node 16"]
      }
    ]
  ],
  plugins: [
    "@babel/plugin-proposal-class-properties",
    "@babel/syntax-dynamic-import",
    "@babel/transform-runtime"
  ]
  // env: {
  //   development: {
  //     plugins: ["react-hot-loader/babel"]
  //   }
  // }
};
