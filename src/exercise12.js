/**
 * exercise12.js
 *
 * An HTTP server that receives only POST requests and converts incoming
 * POST body characters to upper-case and returns it to the client.
 *
 * Server listens on the port provided by the first argument to the
 * program.
 */

const Http = require('http')

const OK = 200
const NOT_ALLOWED = 405
const MIME_TEXTPLAIN = { 'Content-Type': 'text/plain' }

const port = parseInt(process.argv[2], 10)

const server = Http.createServer((request, response) => {

  if (request.method !== 'POST') {
    response.statusCode = NOT_ALLOWED
    response.end()
  }

  response.writeHead(OK, MIME_TEXTPLAIN)
  request.on('data', (data) => response.write(data.toString().toUpperCase()))
  request.on('close', response.end)
})

server.listen(port)
