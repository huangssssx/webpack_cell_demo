var path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require("webpack");
//var BUILD_PATH = path.resolve(ROOT_PATH, 'build');
module.exports = {
	entry: {
		index: ["./modules/entrance/index.js"],
		index2: ["./modules/entrance/index2.js"]
	},
	output: {
		path: path.resolve(__dirname, "build"),
		filename: "[name].js"
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: "入口1",
			filename: "index.html",
			inject: true,
			hash: true,
			chunks: ["index"],
			template: "./modules/pages/index.html"
		}),
		new HtmlWebpackPlugin({
			title: "入口2",
			filename: "index2.html",
			inject: true,
			hash: true,
			chunks: ["index2"],
			template: "./modules/pages/index2.html"
		})
	],
	devServer: {
		historyApiFallback: true,
		inline: true,
		hot: true
	}
}