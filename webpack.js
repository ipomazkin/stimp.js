const path = require('path');

module.exports = {
  entry: './lib/index.js',
  output: {
    filename: 'stimp.js',
    path: path.resolve(__dirname, './dist'),
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
