module.exports = {
  entry: './src/index.js',
  output: {
    path: './js',
    filename: 'index.js'
  },
  module: {
    loaders: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query:{
          presets: ['es2015', 'react', 'stage-0']
        }
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
