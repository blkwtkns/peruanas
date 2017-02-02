const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');

const webpackIsomorphicToolsConfig = require('./webpack-isomorphic-tools');
const WebpackIsomorphicToolsPlugin = require('webpack-isomorphic-tools/plugin');

const webpackIsomorphicToolsPlugin = new WebpackIsomorphicToolsPlugin(webpackIsomorphicToolsConfig);

/* const ExtractTextPlugin = require('extract-text-webpack-plugin'); */

module.exports = {
	entry: [
		'webpack-hot-middleware/client',
		path.resolve(__dirname, 'src')
	],
	output: {
		path: path.resolve(__dirname, 'src'),
		filename: 'bundle.js',
		publicPath: '/'
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin(),
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify('development'),
				WEBPACK: true
			}
    })
	],
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel',
				include: path.resolve(__dirname, 'src'),
				query: {
					presets: [ 'react-hmre' ]
				}
			},
			{
				test: /\.scss/,
				loader: 'style!css!sass!postcss',
				include: path.resolve(__dirname, 'src')
			},
      {
        test: /\.(ico|png|gif|jpg|svg)$/,
        loader: "file?name=[name].[ext]?[hash:5]" 
      }
		]
	},
    postcss: function() {
        return [autoprefixer];
    }
};
