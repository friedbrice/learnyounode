/**
 * exercise6lib.js
 *
 * A module that export a single function that takes three arguments:
 * the directory name, the filename extension string and a callback
 * function, in that order.
 */

module.exports = (directory, extension, callback) => {

  const Fs = require('fs')

  Fs.readdir(directory, (error, files) => {
    if (error !== null) callback(error, null)
    else {

      const filtered = files.filter((filename) => {
        const parts = filename.split('.')
        const length = parts.length

        return length > 1 && parts[length - 1] === extension
      })

      callback(null, filtered)
    }
  })
}
