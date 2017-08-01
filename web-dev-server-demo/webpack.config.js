var path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
	entry: {
		app: ["./modules/entrance/index.js"]
	},
	output: {
		path: path.resolve(__dirname, "build"),
		publicPath: "./",
		filename: "bundles.js"
	},
	plugins: [new HtmlWebpackPlugin({
		title:"server例子",
		filename:"main.html",
		inject:true,
		hash:true,
		chunks:["app"]}
	)],
	devServer:{
		inline:true,
		hot:true,
		contentBase:path.join(__dirname, "build")
	}
}