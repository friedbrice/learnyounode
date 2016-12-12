'use-strict'

/**
 * exercise7.js
 *
 * A program that performs an HTTP GET request to a URL provided to you
 * as the first command-line argument. Write the String contents of **each
 * "data" event from the response to a new line on the console (stdout).**
 */

var http = require('http')

var url = process.argv[2]

http.get(url, function (res) {
  res.on('data', function (datum) {
    console.log(datum.toString())
  })
  res.on('error', function (error) {
    console.log(error)
  })
}).on('error', function (error) {
  console.log(error)
})
