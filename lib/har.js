module.exports = {
  Har: function (self) {
    var har = module.exports = require('request/lib/har')
    var Har = har.Har
    return new Har(self)
  }
}
