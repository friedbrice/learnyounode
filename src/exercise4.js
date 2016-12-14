/**
 * exercise4.js
 *
 * A program that uses a single **asynchronous** filesystem operation to
 * read a file and print the number of newlines it contains to the
 * console (stdout), similar to running `cat file | wc -l`.
 */

const Fs = require('fs')

const path = process.argv[2]

Fs.readFile(path, (error, contents) => {
  if (!error) {

    function countIfNewline(int, byte) {
      if (byte === 0xa) return int + 1
      else return int
    }

    const newlines = contents.reduce(countIfNewline, 0)

    console.log(newlines)
  }
})
