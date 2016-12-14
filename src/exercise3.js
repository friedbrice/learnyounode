/**
 * exercise3.js
 *
 * A program that uses a single **synchronous** filesystem operation to
 * read a file and print the number of newlines (\n) it contains to the
 * console (stdout), similar to running `cat file | wc -l`.
 */

const Fs = require('fs')

const path = process.argv[2]
const contents = fs.readFileSync(path)

function countIfNewline(int, byte) {
  if (byte === 0xa) return int + 1
  else return int
}

const newlines = contents.reduce(countIfNewline, 0)

console.log(newlines)
