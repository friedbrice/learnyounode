/**
 * exercise13.js
 *
 * An HTTP **server** that serves JSON data when it receives a GET request
 * to the path '/api/parsetime'. The request should contain a query string
 * with a key 'iso' and an ISO-format time as the value.
 *
 * For example:
 *
 * /api/parsetime?iso=2013-08-10T12:10:15.474Z
 *
 * The JSON response will contain only 'hour', 'minute' and 'second'
 * properties. For example:
 *
 *     {
 *       "hour": 14,
 *       "minute": 23,
 *       "second": 15
 *     }
 *
 * A second endpoint for the path '/api/unixtime' accepts the same
 * query string but returns UNIX epoch time in milliseconds (the number of
 * milliseconds since 1 Jan 1970 00:00:00 UTC) under the property 'unixtime'.
 * For example:
 *
 *     { "unixtime": 1376136615474 }
 *
 * Server listens on the port provided by the first argument to
 * the program.
 */

const Http = require('http')
const Url = require('url')
const Lib = require('./exercise13lib.js')

const OK = 200
const NOT_FOUND = 404
const NOT_ALLOWED = 405
const MIME_APPJSON = { 'Content-Type': 'application/json' }

const PORT = parseInt(process.argv[2], 10)

let server = Http.createServer((request, response) => {

  if (request.method !== 'GET') {
    response.statusCode = NOT_ALLOWED
    response.end()
  }

  let url = Url.parse(request.url, true)
  let pathname = url.pathname
  let date = new Date(url.query.iso)

  switch (pathname) {
    case '/api/parsetime':
      response.writeHead(OK, MIME_APPJSON)
      response.end(Lib.ParsedTime.fromDate(date).toString())
      break
    case '/api/unixtime':
      response.writeHead(OK, MIME_APPJSON)
      response.end(Lib.UnixTime.fromDate(date).toString())
      break
    default:
      response.statusCode = NOT_FOUND
      response.end()
      break
  }
})

server.listen(PORT)
