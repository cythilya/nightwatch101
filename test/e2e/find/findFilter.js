var conf = require('../../../nightwatch.conf.js');
require('../../../page_objects/findPage.js')

module.exports = {
  '@tags': ['find'],
  'Assert Filter Visible': function (client) {
    var findPage = client.page.findPage();
    findPage.navigate();
    findPage.expect.section('@filter').to.be.visible;

    var filterSection = findPage.section.filter;
    filterSection.expect.element('@title').to.be.visible;

    client.end();
  }
};