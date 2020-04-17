
const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const OUT_PATH = 'build_prod';

module.exports = {
  // モード値を production に設定すると最適化された状態で、
  // development に設定するとソースマップ有効でJSファイルが出力される
  mode: 'development',

  // メインとなるJavaScriptファイル（エントリーポイント）
  entry: [
    './src/main.js',
    '@babel/polyfill',
  ],
  // ファイルの出力設定
  output: {
    //  出力ファイルのディレクトリ名
    path: `${__dirname}/` + OUT_PATH + '/jsgame',
    // 出力ファイル名
    filename: 'pgame.js',
    publicPath:  path.resolve(__dirname, './')
  },
  module: {
    rules: [
      {
        // 拡張子 .ts の場合
        test: /\.ts$/,
        // 1. TypeScript をコンパイルする
        // 2. Babel して IE 対応
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
              ]
            },
          },
          {
            loader: 'ts-loader',
          }
        ],
      },
    ]
  },
  // import 文で .ts ファイルを解決するため
  resolve: {
    extensions: [
      '.ts',
      '.js'
    ],
  },
  // プラグイン
  plugins: [
    new CopyWebpackPlugin([
      {
        from: 'pgame_*.html',
        to: ''
      },
      {
        from: 'pgame_canvas_*.js',
        to: ''
      },
      {
        from: 'jsgame',
        to: ''
      }
    ]),
    new webpack.EnvironmentPlugin({
      BUILD_MODE: JSON.stringify('prod'),
    }),
  ],
  // webpack-dev-server
  devServer: {
    contentBase: path.resolve(__dirname, './' + OUT_PATH),
    port: 3000,
  }
};
