if (process.version.match(/^v0\.{8,10}/)) {
  module.exports = require('forever.agent')
} else {
  module.exports = {}
}
