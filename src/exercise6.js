/**
 * exercise6.js
 *
 * A program that prints a list of files in a given directory, filtered
 * by the extension of the files. The first argument is the directory
 * name and the second argument is the extension filter. Prints the list
 * of files (one file per line) to the console.
 */

const FilterByExtension = require('./exercise6lib')

const directory = process.argv[2]
const extension = process.argv[3]

FilterByExtension(directory, extension, (error, files) => {
  if (error !== null) console.error(error)
  else files.map((file) => console.log(file))
})
