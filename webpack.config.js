const path = require('path');
const webpack = require('webpack');
const merge = require("webpack-merge");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

const commonConfig = merge([{
    entry: './app/index.js',

    plugins: [
        new HtmlWebpackPlugin({
            template: 'app/index.html'
        }),
    ],

    module: {
        rules: [
            {
                test: /\.html$/,
                use: [
                    'html-loader'
                ],
            },
        ],
    },
}]);

const productionConfig = merge([{

    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css",
        }),
        new CleanWebpackPlugin(path.join(__dirname, './dist')),
    ],

    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                ],
            },
        ],
    },
}]);

const developmentConfig = merge([{

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.HotModuleReplacementPlugin(),
    ],

    devServer: {
        contentBase: path.join(__dirname, 'app'),
        watchContentBase: true,
        port: 4200,
        hot: true,
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    "style-loader",
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
}]);

module.exports = mode => {
    if (mode === "production") {
        return merge(commonConfig, productionConfig, { mode });
    }

    return merge(commonConfig, developmentConfig, { mode });
};