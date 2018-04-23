const webpack = require("webpack");
const path = require("path");

const SRC = path.resolve(__dirname, "src");
const OUTPUT = path.resolve(__dirname, "lib");

const config = {
    entry: {
        Index : SRC + "/index.js"
    },

    output: {
        path: OUTPUT,
        filename: "index.js",
        libraryTarget: "umd"
    },

    devtool: 'source-map',

    module: {
        rules: [{
            include: SRC,
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader",
            query: {
                presets: ['env', 'react']
            }
        }]
    },
    mode: 'development'
};

module.exports = config;