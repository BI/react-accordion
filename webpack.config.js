module.exports = {
    entry: "./sample.jsx",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.jsx$/, loader: "jsx" },
            { test: /\.css$/, loader: "style!css" }
        ]
    }
};