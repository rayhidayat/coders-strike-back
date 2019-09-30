const path = require('path');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const mode = 'production';

const agentConfig = {
  entry: './src/agent/index.ts',
  mode,
  resolve: {
    extensions: [".ts"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        options: {
          transpileOnly: true,
          experimentalWatchApi: true,
        },
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'agent.js'
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin()
  ],
};

module.exports = [ agentConfig ];
