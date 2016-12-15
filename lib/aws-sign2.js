module.exports = {
  canonicalizeHeaders: function () {
    var aws2 = module.exports = require('aws-sign2')
    return aws2.canonicalizeHeaders.apply(aws2, arguments)
  },
  canonicalizeResource: function () {
    var aws2 = module.exports = require('aws-sign2')
    return aws2.canonicalizeResource.apply(aws2, arguments)
  },
  authorization: function () {
    var aws2 = module.exports = require('aws-sign2')
    return aws2.authorization.apply(aws2, arguments)
  }
}
