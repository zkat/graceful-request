module.exports = {
  Auth: FakeAuth
}

function FakeAuth (self) {
  this.request = self
}
FakeAuth.prototype.onRequest = function () {
  var auth = module.exports = require('request/lib/auth')
  var myA = this.request._auth = new auth.Auth(this.request)
  return myA.onRequest.apply(myA, arguments)
}
