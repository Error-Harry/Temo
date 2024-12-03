const { resolve } = require("path");
const webpack = require("webpack");
const { merge } = require("webpack-merge");
const dotenv = require("dotenv");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { getTSConfig } = require("./webpackDeps");

const modeConfiguration = (env) =>
  require(`./build-utils/webpack.${
    env === "prod" ? "production" : "development"
  }`)(env === "prod" ? "production" : "development");

module.exports = ({ mode } = { mode: "production" }) => {
  const env = dotenv.config({ path: `./.env.${mode}` }).parsed;
  const envKeys = Object.keys(env).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(env[next]);
    return prev;
  }, {});

  return merge(
    {
      mode: mode === "prod" ? "production" : "development",
      entry: "./src/index.tsx",
      devServer: {
        open: true,
        historyApiFallback: true,
        port: "3000",
      },
      resolve: {
        alias: {
          "@assets": resolve(__dirname, "src/assets"),
          "@hooks": resolve(__dirname, "src/hooks"),
          "@components": resolve(__dirname, "src/components"),
          "@screens": resolve(__dirname, "src/screens"),
          "@store": resolve(__dirname, "src/store"),
          "@services": resolve(__dirname, "src/services"),
          "@utils": resolve(__dirname, "src/utils"),
          "@routes": resolve(__dirname, "src/routes"),
          "@constants": resolve(__dirname, "src/constants"),
          "@types": resolve(__dirname, "src/types"),
        },
        // fallback: { stream: false },
        extensions: [".ts", ".tsx", ".js", ".svg", ".png", ".scss"],
      },
      output: {
        publicPath: "/",
        path: resolve(__dirname, "build"),
      },
      module: {
        rules: [
          {
            test: /\.(ts|tsx|js)$/,
            exclude: /node_modules/,
            use: getTSConfig(mode),
          },
        ],
      },

      plugins: [
        new HtmlWebpackPlugin({
          template: "./public/index.html",
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin(envKeys),
        new webpack.ProvidePlugin({
          process: "process/browser.js",
        }),
      ],
    },
    modeConfiguration(mode)
  );
};
