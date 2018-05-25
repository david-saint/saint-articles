const path = require('path');
const tailwindcss = require('tailwindcss');

const config = {
	mode: 'development',
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'app.bundle.js'
	},
	devServer: {
		port: 3000,
		open: true,
		stats: "minimal",
		contentBase: path.join(__dirname, "dist")
	},
	plugins: [
		tailwindcss('./tailwind.js'),
		require('autoprefixer')
	]
};

module.exports = config;