const HtmlWebpackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const Dotenv = require('dotenv-webpack');
const path = require("path")

module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, "./src/index.tsx"),
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "bundle.js"
    },
    devServer: {
        port: 3000,
        hot: true,
        static: "./dist"
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/preset-env",
                            "@babel/preset-react",
                            "@babel/preset-typescript",
                        ],
                    },
                },
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    {
                        loader: 'resolve-url-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true,
                        },
                    },
                ],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'images'
                        }
                    },
                ],
            },
        ]
    },
    resolve: {
        extensions: ["*", ".tsx", ".ts", ".js", ".scss"]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Clock",
            template: "./public/index.html"
        }),
        new CleanWebpackPlugin(),
        new Dotenv()
    ]
}
