var browserify = require('browserify');

var exposeConfig = {
  expose: {
    moment: 'moment'
  }
}

browserify()
  .require(require.resolve('./main'), { entry: true })
  .transform('exposify', exposeConfig)
  .bundle({ debug: true })
  .pipe(fs.createWriteStream(path.join(__dirname, 'bundle.js'), 'utf8'))