'use-strict'

/**
 * exercise4.js
 * A program that uses a single **asynchronous** filesystem operation to
 * read a file and print the number of newlines it contains to the console
 * (stdout), similar to running `cat file | wc -l`.
 */

var fs = require('fs')

var path = process.argv[2]

var contents = fs.readFile(path, function (error, contents) {
  if (!error) {

    var countIfNewline = function (/*int*/n, /*byte*/b) {
      if (b === 0xa) return n + 1
      else return n
    }

    var newlines = contents.reduce(countIfNewline, 0)

    console.log(newlines)
  }
})
