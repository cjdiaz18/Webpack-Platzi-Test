const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    home: path.resolve(__dirname, "src/js/index.js"),
    precios: path.resolve(__dirname, "src/js/precios.js"),
    contacto: path.resolve(__dirname, "src/js/contacto.js")
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].js"
  },
  module: {
    rules: [
      // Aqui van los loaders
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
