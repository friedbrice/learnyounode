class ParsedTime {
  constructor(hour, minute, second) {
    this.hour = hour
    this.minute = minute
    this.second = second
  }
  toString() {
    return JSON.stringify(this)
  }
  static fromDate(date) {
    return new ParsedTime(date.getHours(), date.getMinutes(), date.getSeconds())
  }
}

class UnixTime {
  constructor(seconds) {
    this.unixtime = seconds
  }
  toString() {
    return JSON.stringify(this)
  }
  static fromDate(date) {
    return new UnixTime(date.getTime())
  }
}

module.exports.ParsedTime = ParsedTime
module.exports.UnixTime = UnixTime
