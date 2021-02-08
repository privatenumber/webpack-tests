const path = require('path');
const DependencySize = require('webpack-dependency-size');
const RecordAssetSizes = require('../../utils/record-asset-sizes');

module.exports = {
	context: __dirname,

	mode: 'production',

	optimization: {
		minimize: false,
	},

	entry: './src/index.js',

	output: {
		path: path.resolve(__dirname, `./dist/`),
		filename: '[name].[contenthash].js',
		chunkFilename: '[id].[contenthash].js',
	},

	plugins: [
		new DependencySize(),
		new RecordAssetSizes(),
	],
};
