var webpack = require("webpack")
var path 	= require("path")

var DIST_DIR = path.resolve(__dirname,"public/dist")
var SRC_DIR = path.resolve(__dirname,"app")

var config = {
	mode:"development",
	entry: SRC_DIR + "/index.js",
	output: {
		path: DIST_DIR,
		filename: "bundle.js",
		publicPath: "/"
	},
	module: {
		rules: [
			{
				test: /\.js?$/,
				include: SRC_DIR,
				loader: "babel-loader",
				options: {
					presets: ["react","env","stage-2"]
				},
			}
		]
	}
}

module.exports = config