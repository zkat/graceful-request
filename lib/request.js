'use strict'

var Request = require('request/request')
var util = require('util')

module.exports = GracefulRequest
util.inherits(GracefulRequest, Request)
function GracefulRequest () {
  Request.apply(this, arguments)
}
