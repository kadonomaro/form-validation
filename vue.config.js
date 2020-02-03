module.exports = {
  outputDir: 'docs',
  assetsDir: 'assets',
  runtimeCompiler: true,
	parallel: false,
	publicPath: process.env.NODE_ENV === 'production' ? '/form-validation/' : '/'
}
