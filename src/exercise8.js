/**
 * exercise8.js
 *
 * A program that performs an HTTP GET request to a URL provided to you
 * as the first command-line argument. Collect **all** data from the
 * server (not just the first "data" event) and then write two lines to
 * the console (stdout).
 *
 * The first line is an integer representing the number of characters
 * received from the server. The second line is the complete String of
 * characters sent by the server.
 */

const Http = require('http')

const url = process.argv[2]

Http.get(url, (response) => {

  var buffer = ''

  response.on('error', console.error)

  response.on('data', (data) => buffer += data)

  response.on('end', () => {
    console.log(buffer.length)
    console.log(buffer.toString())
  })


}).on('error', console.error)
