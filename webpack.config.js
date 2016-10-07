const path = require('path');
const webpack = require('webpack');

const PATHS = {
  compiled: path.join(__dirname, 'client/public/scripts'),
  src: path.join(__dirname, 'client/src/main.js')
};

module.exports = {
  entry: [
    PATHS.src
  ],
  output: {
    path: PATHS.compiled,
    filename: 'app.bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        //exclude: /scripts/,
        include: __dirname + '/client/src',
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  },
  resolveLoaders: {
    modulesDirectories: ['node_modules']
  },
  resolve: { // in import statements default to these file types if none specified
    extensions: ['', '.js', '.jsx'],
    modulesDirectories: ['node_modules']
  },
  devServer: {
    contentBase: PATHS.compiled,
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true
  },
  plugins: [
    // new webpack.HotModuleReplacementPlugin()
  ]
};
