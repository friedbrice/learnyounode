'use strict'

/**
 * exercise10.js
 *
 * A **TCP time server**!
 *
 * Listens to TCP connections on the port provided by the first argument
 * to the program. For each connection, writes the current date & 24
 * hour time in the format:
 *
 *     "YYYY-MM-DD hh:mm"
 *
 * followed by a **newline** character. Month, day, hour and minute are
 * zero-filled to 2 integers. For example:
 *
 *     "2013-07-06 17:42"
 *
 * After sending the string, closes the connection.
 */

var net = require('net')

var port = process.argv[2]

var server = net.createServer(function (socket) {

  // http://stackoverflow.com/questions/8169785/
  var fmt = function (str) {
    return ('0' + str).slice(-2)
  }

  var date = new Date()

  var fmtDate = date.getFullYear().toString() +
                '-' +
                fmt((date.getMonth() + 1).toString()) +
                '-' +
                fmt(date.getDate().toString()) +
                ' ' +
                fmt(date.getHours().toString()) +
                ':' +
                fmt(date.getMinutes().toString()) +
                '\n'

  socket.end(fmtDate)
})

server.listen(port)
