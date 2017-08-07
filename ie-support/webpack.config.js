var path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require("webpack");
var es3ifyPlugin = require('es3ify-webpack-plugin');
//var BUILD_PATH = path.resolve(ROOT_PATH, 'build');
module.exports = {
	entry: {
		app: ["babel-polyfill","es5-shim", "es5-shim/es5-sham","./modules/entrance/index.js"]
	},
	output: {
		path: path.resolve(__dirname, "build"),
		filename: "bundles.js"
	},
	module: {
		rules: [
		{
			test: /\.js$/,
			exclude: /node_modules/,
			use: [
				{
					loader: 'babel-loader',
					query: {
	                  presets: ["es2015-loose","stage-0"]
	               }
				}
			]
		}]
	},
	plugins: [
		new es3ifyPlugin(),
		new HtmlWebpackPlugin({
			title: "server例子",
			filename: "index.html",
			inject: "body",
			hash: true,
			chunks: ["app"],
			template: "./modules/pages/index.html"
		},
		new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify('development')
            }
        })
	)],
	devServer: {
		historyApiFallback: true,
		inline: true
	}
}