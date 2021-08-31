const path = require("path")

const HtmlWebpackPlugin = require("html-webpack-plugin")

const tsImportPluginFactory = require("ts-import-plugin")


module.exports = {
    entry: path.resolve("src/index.tsx"),
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        mainFiles: ["index"]
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [{
                    loader: "ts-loader",
                    options: {
                        transpileOnly: true,
                        getCustomTransformers: () => ({
                            before: [
                                tsImportPluginFactory([
                                    {
                                        libraryName: "antd",
                                        style: true
                                    }
                                ])
                            ]
                        })
                    }
                }],
                exclude: /node_modules/
            },
            {
                test: /\.less$/,
                use: ["style-loader", "css-loader", {
                    loader: "less-loader",
                    options: {
                        lessOptions: {
                            javascriptEnabled: true
                        }
                    }
                }]
            }

        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: "index.html"
        })
    ]
}