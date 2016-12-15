module.exports = {
  OAuth: FakeOAuth
}

function FakeOAuth (self) {
  this.req = self
}
FakeOAuth.prototype.onRequest = function () {
  var oauth = module.exports = require('request/lib/oauth')
  var myOA = this.req._oauth = new oauth.OAuth(this.req)
  return myOA.onRequest.apply(myOA, arguments)
}
