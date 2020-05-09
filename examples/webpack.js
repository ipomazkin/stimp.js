const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const items = [
  '1-basic',
  '2-dom',
];

module.exports = {
  entry: (function () {
    let out = {};
    items.map(el => {
      out[el] = `./examples/apps/${el}.js`;
    });
    return out;
  })(),
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, './build'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader'
      },
    ]
  },
  mode: 'development',
  plugins: [
    ...(items.map(el => {
      return new HtmlWebpackPlugin({
        title: 'Stimp examples - ' + el,
        template: path.resolve(__dirname, `./apps/${el}.html`),
        filename: el + '.html',
        chunks: [el]
      });
    }))
  ],
};
