module.exports = {
  sign: function () {
    var aws4 = module.exports = require('request/lib/aws4')
    return aws4.sign.apply(aws4, arguments)
  }
}
