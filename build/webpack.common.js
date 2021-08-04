const path = require("path")

const htmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    entry: path.resolve('src/index.tsx'),
    output: {
        path: path.resolve("dist/js"),
        filename: "[name].[contenthash:10].js"
    },

    resolve: {
        mainFiles: ['index'],
        extensions: [".js", ".jsx", ".ts", ".tsx"]
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: ["ts-loader"]
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: path.resolve("src/index.html")
        })
    ]




}