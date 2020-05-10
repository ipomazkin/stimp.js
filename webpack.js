const path = require('path');

module.exports = {
  entry: './lib/index.js',
  output: {
    filename: 'stimp.js',
    path: path.resolve(__dirname, './dist'),
    libraryTarget: 'umd',
    globalObject: 'this'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader'
      },
    ]
  },
  mode: 'production',
};
