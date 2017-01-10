/**
 * exercise9lib.js
 *
 * Structs for representing continuation-passing methods and sequenced
 * operations as values.
 */

function ContU(runCont) {
  this.runCont: runCont
  this.pure: (x) => new ContU((a) => a(x))
  this.map: (f) => ...
  this.bind: (k) => new ContU(...)
  this.and: (mx) => new ContU(...)
}

function IO(runIO) {
  this.runIO: runIO
  this.pure: (x) => new IO(() => x)
  this.map: (f) => ...
  this.bind: (k) => new ContU(...)
  this.and: (mx) => new ContU(...)
}
IO.noOp = new IO(() => {})
IO.main = (mx) => mx.runIO()
