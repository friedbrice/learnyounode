'use strict'

/**
 * exercise6lib.js
 *
 * A module that export a single function that takes three arguments:
 * the directory name, the filename extension string and a callback
 * function, in that order.
 */

module.exports = function (
  /*str*/directory,
  /*str*/extension,
  /*fnc*/callback
) {

  var fs = require('fs')

  return fs.readdir(directory, function (error, files) {
    if (error) {
      return callback(error, null)
    } else {

      var filtered = files.filter(function (filename) {
        var parts = filename.split('.')
        var length = parts.length

        return length > 1 && parts[length - 1] === extension
      })

      return callback(null, filtered)
    }
  })
}
