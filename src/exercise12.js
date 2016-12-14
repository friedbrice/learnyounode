'use strict'

/**
 * exercise12.js
 *
 * An HTTP server that receives only POST requests and converts
 * incoming POST body characters to upper-case and returns it to the client.
 *
 * Server listens on the port provided by the first argument to
 * the program.
 */

var http = require('http')

var port = parseInt(process.argv[2], 10)

var server = http.createServer(function (request, response) {

  if (request.method !== 'POST') {
    response.statusCode = 405
    response.end()
  }

  request.on('data', function (datum) {
    response.write(datum.toString().toUpperCase())
  })
})

server.listen(port)
