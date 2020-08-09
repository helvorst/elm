const path = require('path');
const HTMLWebpackPlugin = require("html-webpack-plugin");


module.exports = {
    entry: './index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new HTMLWebpackPlugin({
            // Use this template to get basic responsive meta tags
            template: "index.html",
            // inject details of output file at end of body
            inject: "body"
        })
    ],
    // resolve: {
    //     modules: [path.join(__dirname, "src"), "node_modules"],
    //     extensions: [".elm"]
    // },
    module: {
        rules: [{
            test: /\.elm$/,
            exclude: [/elm-stuff/, /node_modules/],
            use: [
                { loader: "elm-hot-webpack-loader" }, {
                    loader: 'elm-webpack-loader',
                    options: {}
                }]
        }]
    }
};