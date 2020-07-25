const path = require('path');

module.exports = {
    entry: './src/js/index.js',
    output: {
        path: path.resolve(__dirname, 'dist/js'),
        filename: 'bundle.js',
        mode: 'development'
    }
}


const path = require('path');
module.exports = {
 entry: './src/js/index.js',
 output: {
 path: path.resolve(__dirname, 'dist'),
 filename: 'js/bundle.js'
},
 mode: "development"
};