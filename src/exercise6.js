'use strict'

/**
 * exercise6.js
 *
 * A program that prints a list of files in a given directory,
 * filtered by the extension of the files. The first argument is the
 * directory name and the second argument is the extension filter. Prints
 * the list of files (one file per line) to the console.
 */

var filterByExtension = require('./exercise6lib')

var dir = process.argv[2]
var ext = process.argv[3]

filterByExtension(dir, ext, function (error, files) {
  if (error) {
    return console.log(error)
  } else {
    return files.map(function (file) {
      return console.log(file)
    })
  }
})
