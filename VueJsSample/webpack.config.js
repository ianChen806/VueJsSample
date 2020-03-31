const Path = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin")

module.exports = {
    entry: './WebClient/index.ts',
    output: {
        filename: "bundle.js",
        path: Path.resolve(__dirname, "wwwroot")
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
                options:{
                    appendTsSuffixTo:[/\.vue/]
                }
            },
            {
                test: /\.vue$/,
                loader: "vue-loader",
                include: /WebClient/,
            },
        ]
    },
    plugins:[
        new VueLoaderPlugin()
    ]
}