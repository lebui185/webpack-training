const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: './app/index.js',

    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: 'app/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
        })
    ],

    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true,
                        },
                    },
                ],
            },
        ],
    },

    devServer: {
        contentBase: path.join(__dirname, 'app'),
        watchContentBase: true,
    },
}