var conf = require('../../../nightwatch.conf.js');
require('../../../page_objects/findPage.js')

module.exports = {
  '@tags': ['find'],
  'Find Pusheen': function (client) {
    var findPage = client.page.findPage();

    findPage.navigate()
      .assert.title('搜尋結果 : Pusheen - 露天拍賣')
      .assert.visible('@searchbox')
      .clearValue('@searchbox')
      .setValue('@searchbox', 'Pusheen')
      .submit();

    client.end();
  }
};