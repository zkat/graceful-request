module.exports = {
  lookup: function () {
    var mime = module.exports = require('mime-types')
    return mime.lookup.apply(mime, arguments)
  }
}
