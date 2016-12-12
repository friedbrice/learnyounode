'use-strict'

/**
 * exercise2.js
 *
 * A program that accepts one or more numbers as command-line arguments
 * and prints the sum of those numbers to the console (stdout).
 */

var args = process.argv.slice()
args.shift() // remove 'node'
args.shift() // remove the file name

var sum = args.reduce(function (/*int*/n, /*str*/s) {
  return n + parseInt(s, 10)
}, 0)

console.log(sum)
