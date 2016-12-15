module.exports = {
  Multipart: FakeMultipart
}

function FakeMultipart (self) {
  this.req = self
}
FakeMultipart.prototype.onRequest = function () {
  var mp = module.exports = require('request/lib/multipart')
  var myMp = this.req._multipart = new mp.Multipart(this.req)
  return myMp.onRequest.apply(myMp, arguments)
}
