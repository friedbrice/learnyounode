/**
 * exercise2.js
 *
 * A program that accepts one or more numbers as command-line arguments
 * and prints the sum of those numbers to the console (stdout).
 */

const args = process.argv.slice(2, process.argv.length)
const sum = args.reduce((num, str) => num + Number(str), 0)
console.log(sum)
