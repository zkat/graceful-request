module.exports = {
  Tunnel: FakeTunnel
}

function FakeTunnel (self) {
  this.request = self
}
FakeTunnel.prototype.setup = function () {
  var tunnel = module.exports = require('request/lib/oauth')
  var tun = this.request._tunnel = new tunnel.Tunnel(this.request)
  return tun.setup.apply(tun, arguments)
}

FakeTunnel.prototype.isEnabled = function () {
  return this.tunnelOverride != null
  ? this.tunnelOverride
  : this.request.uri.protocol === 'https:'
}

FakeTunnel.defaultProxyHeaderWhiteList = [
  'accept',
  'accept-charset',
  'accept-encoding',
  'accept-language',
  'accept-ranges',
  'cache-control',
  'content-encoding',
  'content-language',
  'content-location',
  'content-md5',
  'content-range',
  'content-type',
  'connection',
  'date',
  'expect',
  'max-forwards',
  'pragma',
  'referer',
  'te',
  'user-agent',
  'via'
]
FakeTunnel.defaultProxyHeaderExclusiveList = [
  'proxy-authorization'
]
