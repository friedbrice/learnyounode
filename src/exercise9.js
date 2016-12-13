'use strict'

/**
 * exercise9.js
 *
 * A program that collects the complete content provided by each of three URLs
 * and print it to the console (stdout), one line per URL, printing them out in
 * the same order as the URLs are provided as command-line arguments.
 */

var http = require('http')

var url1 = process.argv[2]
var url2 = process.argv[3]
var url3 = process.argv[4]

var result1 = { value: null }
var result2 = { value: null }
var result3 = { value: null }

var checkAndPrint = function () {
  if (result1.value && result2.value && result3.value) {
    console.log(result1.value)
    console.log(result2.value)
    console.log(result3.value)
  }
}

var collect = function (/*str*/url, /*Obj*/result) {
  http.get(url, function (response) {

    var buffer = ''

    response.on('data', function (datum) {
      buffer += datum
    })

    response.on('end', function () {
      result.value = buffer
      checkAndPrint()
    })

    response.on('error', console.error)

  }).on('error', console.error)
}

collect(url1, result1)
collect(url2, result2)
collect(url3, result3)
