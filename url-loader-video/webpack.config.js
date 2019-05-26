const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: path.resolve(__dirname, "src/js/index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "./dist/"
  },
  module: {
    rules: [
      // Aqui van los loaders
      {
        // test: que tipo de archivo quero reconocer
        // use: que loader se va a encargar del archivo
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            // presets: ["latest"]
          }
        }
      },
      {
        test: /\.(jpg|png|gif|woff|eot|ttf|svg)$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 100000
          }
        }
      },
      {
        test: /\.(mp4|webm)$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 1000000,
            name: "videos/[name].[hash].[ext]"
          }
        }
      },

      {
        // test: que tipo de archivo quero reconocer
        // use: que loader se va a encargar del archivo
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
        // ["style-loader", "css-loader"]
        // fallback:'style-loader',
        // use: "css-loader"
      }
    ]
  },
  plugins: [
    // aqui van los plugins
    new MiniCssExtractPlugin({
      filename: "css/[name].css"
    })
  ]
};
