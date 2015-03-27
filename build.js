'use strict';

process.env.BROWSERIFYSHIM_DIAGNOSTICS = 1;

var path       = require('path'),
    fs         = require('fs'),
    browserify = require('browserify');

(function bundle() {
  var builtFile = path.join(__dirname, 'bundle.js');

  browserify()
    .require(require.resolve('./main'), { entry: true })
    .bundle()
    .on('end', function() {
      console.log('Build succeeded, open index.html to see the result.');
    })
    .on('error', console.error.bind(console))
    .pipe(fs.createWriteStream(builtFile, 'utf8'))
})();