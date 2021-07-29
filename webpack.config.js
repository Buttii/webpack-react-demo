const {resolve} = require("path")

const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  mode: "development",
  devServer: {
    open: true,
    hot: true
  },

  entry: "./src/index.jsx",

  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(__dirname, "./src/index.html"),
    }),
  ],

  module: {
    rules: [

      {
        test: /\.(js|jsx)$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-react"],
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
        exclude: /node_modules/,
      },
    ],
  },

  resolve: {
    extensions: [".js", ".jsx"]
  },

  optimization: {
    minimize: true,
    splitChunks: {
      chunks: 'all'
    }
  },

  output: {
    filename: "[name].[contenthash:10].js",
    path: resolve(__dirname, "./dist"),
    clean: true
  },
};
