var hawk
module.exports = {
  client: {
    header: function () {
      hawk = module.exports = require('hawk')
      return hawk.client.header.apply(hawk.client, arguments)
    }
  }
}
