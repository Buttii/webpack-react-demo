const {merge} = require("webpack-merge")

const commonConfig = require("./webpack.common")

module.exports = merge(commonConfig, {
    mode: "production",
    output: {
        path: "dist",
        filename: "js/[name][contenthash:8].js",
        clean: true
    }
})