const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');

const webpackIsomorphicToolsConfig = require('./webpack-isomorphic-tools');
const WebpackIsomorphicToolsPlugin = require('webpack-isomorphic-tools/plugin');

const webpackIsomorphicToolsPlugin = new WebpackIsomorphicToolsPlugin(webpackIsomorphicToolsConfig);

const rootDir = path.resolve(__dirname, '..');
/* const ExtractTextPlugin = require('extract-text-webpack-plugin'); */

module.exports = {
	entry: [
		'webpack-hot-middleware/client',
    path.resolve(rootDir, 'src')
	],
	output: {
		path: path.resolve(rootDir, 'src'),
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
    }),
    webpackIsomorphicToolsPlugin.development(),
	],
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel',
				include: path.resolve(rootDir, 'src'),
				query: {
					presets: [ 'react-hmre' ]
				}
			},
			/* {
			 *   test: /\.scss/,
			 *   loader: 'style!css!sass!postcss',
			 *   include: path.resolve(__dirname, 'src')
			 * }, */
      /* {
       *   test: /\.(ico|png|gif|jpg|svg)$/,
       *   loader: "file?name=[name].[ext]?[hash:5]" 
       * }, */
      {
        test: /\.css$/,
        loader: 'style!css?modules&importLoaders=2&sourceMap&localIdentName=[local]___[hash:base64:5]!postcss',
      },
      {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/font-woff',
      },
      {
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/font-woff',
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/octet-stream',
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file',
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=image/svg+xml',
      },
      {
        test: webpackIsomorphicToolsPlugin.regular_expression('images'),
        loader: 'url-loader?limit=10240',
      }
		]
	},
    postcss: function() {
        return [autoprefixer];
    }
};
