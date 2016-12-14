/**
 * exercise7.js
 *
 * A program that performs an HTTP GET request to a URL provided to you
 * as the first command-line argument. Write the String contents of
 * **each "data" event from the response to a new line on the console
 * (stdout).**
 */

const Http = require('http')

const url = process.argv[2]

Http.get(url, (response) => {
  response.on('error', console.error
  response.on('data', (data) => console.log(data.toString()))
}).on('error', console.error)
