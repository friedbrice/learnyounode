'use-strict'

/**
 * exercise8.js
 *
 * A program that performs an HTTP GET request to a URL provided to you
 * as the first command-line argument. Collect **all** data from the server
 * (not just the first "data" event) and then write two lines to the console
 * (stdout).
 *
 * The first line is an integer representing the number of characters
 * received from the server. The second line is the complete String of
 * characters sent by the server.
 */

var http = require('http')

var url = process.argv[2]

http.get(url, function (res) {

  var buffer = ''

  res.on('data', function (datum) {
    buffer += datum
  })

  res.on('end', function () {
    console.log(buffer.length)
    console.log(buffer.toString())
  })

  res.on('error', console.error)

}).on('error', console.error)
