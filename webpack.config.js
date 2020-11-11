module.exports = {
  entry: './src/index.tsx',
  output: {
    path: `${__dirname}/dist`,
    filename: 'render/index.js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'ts-loader' },
      {
        test: /\.(s[ac]ss|css)$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { url: false } },
          'sass-loader',
        ],
        exclude: /\.module\.(s[ac]ss|css)$/,
      },
    ],
  },
  devtool: 'eval-source-map',
  devServer: {
    contentBase: './dist',
    port: 8081
  },
};