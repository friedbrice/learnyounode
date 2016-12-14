'use strict'

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

// Note: This is a bit overengineered, but I wanted to imagine
// I was making an actual, big, complicated, robust HTTP server.
// Please bear with me.

const Http = require('http')
const Url = require('url')

const OK = 200
const NOT_FOUND = 404
const NOT_ALLOWED = 405
const MIME_APPJSON = { 'Content-Type': 'application/json' }

const PORT = parseInt(process.argv[2], 10)

function ParsedTime(hour, minute, second) {
  this.hour = hour
  this.minute = minute
  this.second = second
  this.toString = function () { return JSON.stringify(this) }
}

function UnixTime(seconds) {
  this.unixtime = seconds
  this.toString = function () { return JSON.stringify(this) }
}

var /*ParsedTime*/ parseTime = function (/*Date*/date) {
  return new ParsedTime(date.getHours(), date.getMinutes(), date.getSeconds())
}

var /*UnixTime*/ unixTime = function (/*Date*/date) {
  return new UnixTime(date.getTime())
}

var server = Http.createServer(function (request, response) {

  if (request.method !== 'GET') {
    response.statusCode = NOT_ALLOWED
    response.end()
  }

  var url = Url.parse(request.url, true)
  var pathname = url.pathname
  var date = new Date(url.query.iso)

  switch (pathname) {
    case '/api/parsetime':
      response.writeHead(OK, MIME_APPJSON)
      response.end(parseTime(date).toString())
      break
    case '/api/unixtime':
      response.writeHead(OK, MIME_APPJSON)
      response.end(unixTime(date).toString())
      break
    default:
      response.statusCode = NOT_FOUND
      response.end()
  }
})

server.listen(PORT)
