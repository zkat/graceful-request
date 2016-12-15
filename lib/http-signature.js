module.exports = {
  signRequest: function () {
    var httpSignature = module.exports = require('http-signature')
    httpSignature.signRequest.apply(httpSignature, arguments)
  }
}
