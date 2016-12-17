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

const Net = require('net')

const port = parseInt(process.argv[2], 10)

const server = Net.createServer((socket) => {

  // http://stackoverflow.com/questions/8169785/
  function format(str) {
    return ('0' + str).slice(-2)
  }

  const date = new Date()

  const formattedDate = ''
    + date.getFullYear().toString()
    + '-'
    + format((date.getMonth() + 1).toString())
    + '-'
    + format(date.getDate().toString())
    + ' '
    + format(date.getHours().toString())
    + ':'
    + format(date.getMinutes().toString())
    + '\n'

  socket.end(formattedDate)
})

server.listen(port)
