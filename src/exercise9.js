/**
 * exercise9.js
 *
 * A program that collects the complete content provided by each of
 * three URLs and print it to the console (stdout), one line per URL,
 * printing them out in the same order as the URLs are provided as
 * command-line arguments.
 */

const Http = require('http')

const url1 = process.argv[2]
const url2 = process.argv[3]
const url3 = process.argv[4]

const result1 = { value: null }
const result2 = { value: null }
const result3 = { value: null }

function checkAndPrint() {
  if (result1.value && result2.value && result3.value) {
    console.log(result1.value)
    console.log(result2.value)
    console.log(result3.value)
  }
}

function collect(url, result) {
  Http.get(url, (response) => {

    var buffer = ''

    response.on('error', console.error)

    response.on('data', (data) => buffer += data)

    response.on('end', () => {
      result.value = buffer
      checkAndPrint()
    })

  }).on('error', console.error)
}

collect(url1, result1)
collect(url2, result2)
collect(url3, result3)
