var path = require('path');
var webpack = require('webpack');
module.exports = {
    entry: ["@babel/polyfill","./src/index.js"],  // index.js ilk bakacağı dosya - polyfill async kullanabilmek için 
    output: {
        path: path.resolve(__dirname, 'bundles'), // dosyanın nereye oluşturulacağı - __dirname çalışma dizininimizin path ini belirtir.
        filename: 'bundle.js' // hangi isimle oluştrulacak
    },
    mode: "development",  // mod :)
    
    module: {
        rules: [
            {
              test: /\.js$/,
              exclude: /(node_modules)/,
              use: {
                loader: 'babel-loader', // webpack - babel arasındaki ilişki için 
                options: {
                  presets: ["@babel/preset-env"]
                }
              }
            }
          ]
    }
};