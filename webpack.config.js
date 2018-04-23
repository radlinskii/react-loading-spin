const webpack = require("webpack");
const path = require("path");

const SRC = path.resolve(__dirname, "src");
const OUTPUT = path.resolve(__dirname, "lib");

const config = {
    entry: {
        Index: SRC + "/index.js"
    },

    output: {
        path: OUTPUT,
        filename: "index.js",
        libraryTarget: "umd"
    },

    devtool: 'source-map',

    module: {
        rules: [
            {
                include: SRC,
                test: /\.js$/,
                exclude: /(node_modules|lib)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'react']
                    }
                }
            }, {
                include: SRC,
                test: /\.css$/,
                exclude: /(node_modules|lib)/,
                use: ["style-loader", "css-loader"],
            }
        ]
    },
    mode: 'development',
    externals: {
        'react': 'commonjs react'
    }
};

module.exports = config;