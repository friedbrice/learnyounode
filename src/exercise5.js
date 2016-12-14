/**
 * exercise5.js
 *
 * A program that prints a list of files in a given directory, filtered
 * by the extension of the files. You will be provided a directory name
 * as the first argument to your program (e.g. '/path/to/dir/') and a
 * file extension to filter by as the second argument.
 */

const Fs = require('fs')

const directory = process.argv[2]
const extension = process.argv[3]

Fs.readdir(directory, (error, files) => {
  if (!error) {

    function hasRightExt(filename) {
      const parts = filename.split('.')
      const length = parts.length

      return length > 1 && parts[length - 1] === extension
    }

    files.map((filename) => {
      if (hasRightExt(filename)) console.log(filename)
    })
  }
})
