/**
 * exercise11.js
 *
 * An HTTP server that serves the same text file for each request it
 * receives.
 *
 * Server listens on the port provided by the first argument to the
 * program.
 *
 * Provide the location of the file to serve as the second command-line
 * argument. Uses the fs.createReadStream() method to stream the file
 * contents to the response.
 */

const Fs = require('fs')
const Http = require('http')

const OK = 200
const MIME_TEXTPLAIN = { 'Content-Type': 'text/plain' }

const port = parseInt(process.argv[2], 10)
const path = process.argv[3]

const server = Http.createServer((request, response) => {
  response.writeHead(OK, MIME_TEXTPLAIN)
  Fs.createReadStream(path).pipe(response)
})

server.listen(port)
