var webpack = require('webpack');
const autoprefixer = require('autoprefixer');
var path = require('path');
var BUILD_DIR = path.resolve(__dirname, 'dist');
var APP_DIR = path.resolve(__dirname, 'app');


// Appendix: Configuring a Sass Importer for Nested node_modules
function tryResolve_(url, sourceFilename) {
  // Put require.resolve in a try/catch to avoid node-sass failing with cryptic libsass errors
  // when the importer throws
  try {
    return require.resolve(url, {paths: [path.dirname(sourceFilename)]});
  } catch (e) {
    return '';
  }
}

function tryResolveScss(url, sourceFilename) {
  // Support omission of .scss and leading _
  const normalizedUrl = url.endsWith('.scss') ? url : `${url}.scss`;
  return tryResolve_(normalizedUrl, sourceFilename) ||
    tryResolve_(path.join(path.dirname(normalizedUrl), `_${path.basename(normalizedUrl)}`),
      sourceFilename);
}

function materialImporter(url, prev) {
  if (url.startsWith('@material')) {
    const resolved = tryResolveScss(url, prev);
    return {file: resolved || url};
  }
  return {file: url};
}
// //////// End Sass Importer Appendix //////////////

module.exports = [{
  entry: ['./app/app.scss', './app/index.jsx'],
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'bundle.css',
            },
          },
          { loader: 'extract-loader' },
          { loader: 'css-loader' },
          {
            loader: 'postcss-loader',
            options: {
               plugins: () => [autoprefixer()]
            }
          },
          {
            loader: 'sass-loader',
            options: {
              importer: materialImporter
            },
          }
        ]
      }, // scss rule
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader?url=false' ]
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015'],
          plugins: ['transform-object-assign']
        },
      }, // js rule
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel-loader',
        query:{
          presets:['react', ["es2015", {"modules": false}]]
        }
      },
    ]
  },
  // devtool: "#eval-source-map",
  // plugins: [
  //       new webpack.optimize.UglifyJsPlugin({
  //           compress: {
  //               warnings: false,
  //           },
  //           output: {
  //               comments: false,
  //           },
  //       }),
  // ],
}];