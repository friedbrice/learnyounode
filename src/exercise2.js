/**
 * exercise2.js
 *
 * A program that accepts one or more numbers as command-line arguments
 * and prints the sum of those numbers to the console (stdout).
 */

const args = process.argv.slice(2, process.argv.length)
const sum = args.reduce((int, str) => int + parseInt(str, 10), 0)
console.log(sum)
