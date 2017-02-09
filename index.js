module.exports = require('require-inject')('request', {
  hawk: require('./lib/hawk'),
  'aws-sign2': require('./lib/aws-sign2'),
  aws4: require('./lib/aws4'),
  'forever-agent': require('./lib/forever-agent'),
  'form-data': require('./lib/form-data'),
  'http-signature': require('./lib/http-signature'),
  'mime-types': require('./lib/mime-types'),
  'request/lib/har': require('./lib/har'),
  'request/lib/auth': require('./lib/auth'),
  'request/lib/oauth': require('./lib/oauth'),
  'request/lib/multipart': require('./lib/multipart'),
  'request/lib/tunnel': require('./lib/tunnel'),
  'request/request': require('./lib/request')
})
