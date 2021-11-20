/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')

const SRC = path.resolve(__dirname, 'src')
const OUTPUT = path.resolve(__dirname, 'lib')

const config = {
    entry: {
        index: `${SRC}/index.ts`,
    },

    context: path.resolve(__dirname, 'src'),

    output: {
        path: OUTPUT,
        filename: 'index.js',
        library: {
            type: 'commonjs',
        },
    },

    devtool: 'source-map',

    module: {
        rules: [
            {
                include: SRC,
                test: /\.tsx?$/,
                exclude: /(node_modules|lib)/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                include: SRC,
                test: /\.css$/,
                exclude: /(node_modules|lib)/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    mode: 'production',
    externals: {
        react: 'commonjs react',
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
    },
}

module.exports = config
