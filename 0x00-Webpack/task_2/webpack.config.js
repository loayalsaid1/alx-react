const HTMLWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
	mode: 'production',
	entry: './js/dashboard_main.js',
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: 'bundle.js'
	},
	module: {

		rules: [
			{
				test: /\.css$/,
			use: ['style-loader', 'css-loader']
		},
		{
			test: /\.(gif|png|jpe?g|svg)$/i,
			use: [
				{
					loader: 'image-webpack-loader',
					options: {
							bypassOnDebug: true,
						},
					},
				],
			}
		]
	},
	plugins: [
		new HTMLWebpackPlugin({
			title: 'Task 2'
		})
	]
}
