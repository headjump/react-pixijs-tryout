var
  path = require("path");

module.exports = {
  node: { fs: "empty" },
  entry: {
    bundle: "entry.js",
    test: "mocha!test.js"
  },
  output: {
    path: path.join(__dirname, "release"),
    filename: "[name].js"
  },
  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      { test: /\.sass$/, loader: "style!css!sass?indentedSyntax" },
      { test: /\.html/, loader: 'file?name=[name].[ext]' },
      { test: /\.jsx/, loader: 'jsx-loader?harmony' }
    ]
  },
  resolve: {
    modulesDirectories: [
      "node_modules", "source", "test"
    ],
    extensions: [
      "", ".js", ".json", ".jsx", ".min.js"
    ]
  }
};
