const HtmlWebpackPlugin = require('html-webpack-plugin');
const port = process.env.PORT || 3000;

module.exports = {
  mode: 'development', // 현재 모드를 개발 모드로 설정
  entry: './src/index.js', // 애플리케이션 진입점
  output: { // 번들된 파일 저장할 경로
    filename: 'bundle.[hash].js' // 번들된 파일 이름
  },
  module: {
    rules: [
      { // 1
        test: /\.(js|jsx)$/, // 빌드할 파일 확장자 정규식
        exclude: /node_modules/, // 제외할 파일 정규식
        use: {
          loader: 'babel-loader', // 사용할 로더 이름
          options: { presets: ['@babel/env','@babel/preset-react'] }, //solved
        },
      },
      { // 2
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { // 로더 옵션
              minimize: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
    })
  ],
  devServer: {
    host: 'localhost',
    port: port,
    open: true,
  },
};