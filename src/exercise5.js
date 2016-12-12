'use-strict'

/**
 * exercise5.js
 *
 * A program that prints a list of files in a given directory,
 * filtered by the extension of the files. You will be provided a directory
 * name as the first argument to your program (e.g. '/path/to/dir/') and a
 * file extension to filter by as the second argument.
 */

var fs = require('fs')

var dir = process.argv[2]
var ext = process.argv[3]

fs.readdir(dir, function (error, files) {
  if (!error) {

    var hasRightExt = function (/*str*/filename) {
      var parts = filename.split('.')
      var length = parts.length

      return length > 1 && parts[length - 1] === ext
    }

    files.map(function (filename) {
      if (hasRightExt(filename)) return console.log(filename)
    })
  }
})
