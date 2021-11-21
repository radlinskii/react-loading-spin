// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')

module.exports = {
    mode: 'production',
    entry: {
        index: path.join(__dirname, 'src', 'index.tsx'),
    },
    context: path.resolve(__dirname, 'src'),
    target: 'web',
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'babel-loader',
                exclude: '/node_modules/',
            },
        ],
    },
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'lib'),
        library: {
            type: 'commonjs',
        },
    },
}
