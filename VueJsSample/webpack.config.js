const path = require("path");

module.exports = {
    entry: './WebClient/index.js',
    output:{
        filename:"bundle.js",
        path:path.resolve(__dirname,"wwwroot")
    },
    mode:"development",
    devtool:"source-map",
}