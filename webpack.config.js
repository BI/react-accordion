module.exports = {
    entry: "./sample.jsx",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    devtool: 'source-map',
    module: {
        loaders: [
            { test: /\.jsx$/, loader: "jsx" },
            { test: /\.css$/, loader: "style!css" }
        ]
    }
};
