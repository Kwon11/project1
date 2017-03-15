module.exports = {
  context: __dirname + '/client/components',
  entry: './index.jsx',
  output: {
    path: __dirname + "/client/public/",
    filename: "bundle.js"
  }
}