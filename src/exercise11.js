'use strict'

/**
 * exercise11.js
 *
 * An HTTP server that serves the same text file for each request it
 * receives.
 *
 * Server listens on the port provided by the first argument to
 * the program.
 *
 * Provided the location of the file to serve as the second
 * command-line argument. Uses the fs.createReadStream() method to
 * stream the file contents to the response.
 */

var fs = require('fs')
var http = require('http')

var port = parseInt(process.argv[2], 10)
var path = process.argv[3]

var server = http.createServer(function (request, response) {
  fs.createReadStream(path).pipe(response)
})

server.listen(port)
