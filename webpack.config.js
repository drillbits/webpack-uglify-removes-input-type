var webpack = require('webpack');
var path = require('path');

module.exports = {
  progress: true,
  entry: {
    'loadhtml': './<%= dirs.src %>/loadhtml.js',
    'embedhtml': './<%= dirs.src %>/embedhtml.js'
  },
  output: {
    path: '<%= dirs.dest %>',
    filename: '[name].bundle.js',
    chunkFilename: '[chunkhash].js'
  },
  module: {
    loaders: [
      {test: /\.html$/, loader: 'html-loader'},
      {test: /\.json$/, loader: 'json-loader'}
    ]
  },
  resolve: {
    root: path.join(__dirname, '<%= dirs.src %>'),
    modulesDirectories: [
      'node_modules',
      'bower_components'
    ],
    extensions: ['', '.coffee', '.js', '.json']
  },
  stats: {
    colors: true,
    modules: true,
    reasons: true
  },
  plugins: [
    new webpack.ResolverPlugin([
      new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin(
        ['bower.json'], ['main'])
    ])
  ]
}
