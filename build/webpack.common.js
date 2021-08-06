const path = require("path")

const HtmlWebpackPlugin = require("html-webpack-plugin")


module.exports = {
    entry: path.resolve("src/index.tsx"),
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx"]
    },

    module: {
        rules: [
            {test: /\.tsx?$/, use: [
                {loader: "ts-loader"},
                {loader: "babel-loader"}
            ]},
            {test: /\.less$/, use: [
                {loader: "style-loader"},
                {loader: "css-loader"},
                {
                    loader: "less-loader",
                    options: {
                        lessOptions: {
                            javascriptEnabled: true
                        }
                    }
                }
            ]}

        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: "index.html"
        })
    ]
}