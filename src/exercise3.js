/**
 * exercise3.js
 *
 * A program that uses a single **synchronous** filesystem operation to
 * read a file and print the number of newlines (\n) it contains to the
 * console (stdout), similar to running `cat file | wc -l`.
 */

const Fs = require('fs')

const NEWLINE_BYTE = 0xa

const path = process.argv[2]
const contents = Fs.readFileSync(path)

function countIfNewline(num, byte) {
  if (byte === NEWLINE_BYTE) return num + 1
  else return num
}

const newlines = contents.reduce(countIfNewline, 0)

console.log(newlines)
