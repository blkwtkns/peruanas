const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const rootDir = path.resolve(__dirname, '..');

module.exports = {
	entry: path.resolve(rootDir, 'src'),
	output: {
		path: path.resolve(rootDir, 'dist'),
		filename: 'bundle.js',
		publicPath: '/'
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify('production'),
				WEBPACK: true
			}
		}),
		new webpack.optimize.UglifyJsPlugin({
			compressor: {
				warnings: false
			}
		}),
		new CopyWebpackPlugin([
			{
				from: path.resolve(rootDir, 'src', 'assets'),
				to: path.resolve(rootDir, 'dist', 'assets')
			}
		]),
		new ExtractTextPlugin('bundle.css')
	],
	module: {
		loaders: [
			{ 
				test: /\.js$/,
				loader: 'babel',
				include: path.resolve(rootDir, 'src')
			},
			{
				test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style', 'css!sass!postcss'),
        include: path.resolve(rootDir, 'src')
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
