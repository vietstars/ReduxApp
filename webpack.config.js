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
	resolve:{
		alias:{
			store: SRC_DIR + '/StoreConf.js',
			action: SRC_DIR + '/Action.js',
			reducer: SRC_DIR + '/reducers/reducer.js',
			List: SRC_DIR + '/components/List.js',
			Note: SRC_DIR + '/components/Note.js',
			NoteForm: SRC_DIR + '/components/NoteForm.js'
		}
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