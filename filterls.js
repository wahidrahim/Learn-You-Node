module.exports = function(dir, ext, callback) {
  var fs = require('fs')
  var path = require('path')

  fs.readdir(dir, function(err, files) {
    if (err)
      return callback(err)

    var filtered_files = files.filter(function(file) {
      return path.extname(file) === '.' + ext
    })

    return callback(null, filtered_files)
  })
}
