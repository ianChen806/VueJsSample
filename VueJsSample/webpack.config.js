const path = require("path");

module.exports = {
    entry: './WebClient/index.ts',
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "wwwroot")
    },
    mode: "development",
    devtool: "source-map",
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.js'
        }
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: "ts-loader",
                include: /WebClient/,
            }
        ]
    }
}