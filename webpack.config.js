const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
	mode: "production",
	entry: {
		background: "./src/background/background.ts",
		content: "./src/content/content.ts",
		popup: "./src/popup/popup.ts",
		options: "./src/options/options.ts",
	},
	module: {
		rules: [
			{
				test: /\.ts$/,
				use: "ts-loader",
				exclude: /node_modules/,
			},
		],
	},
	resolve: {
		extensions: [".ts", ".js"],
	},
	output: {
		filename: "[name].js",
		path: path.resolve(__dirname, "dist"),
	},
	plugins: [
		new CopyPlugin({
			patterns: [
				{ from: "public", to: "." },
				{ from: "src/popup/popup.html", to: "popup.html" },
				{ from: "src/popup/popup.css", to: "popup.css" },
				{ from: "src/options/options.html", to: "options.html" },
				{ from: "src/options/options.css", to: "options.css" },
			],
		}),
	],
};
