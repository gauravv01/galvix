import path from "path";

const config = {
  entry: "./scripts/index.js", // Entry point of your application
  output: {
    filename: "bundle.js",
    path: path.resolve(path.dirname(new URL(import.meta.url).pathname), "dist"),
  },
  module: {
    rules: [
      // Rules for handling JavaScript files
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader", // You can use babel-loader for transpiling JavaScript
        },
      },
      // Rules for handling image files
      {
        test: /\.(jpg|png|webp|gif)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "images/",
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};

export default config;
