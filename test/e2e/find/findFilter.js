require('../../../page_objects/findPage.js')

module.exports = {
  '@tags': ['find'],
  'Assert Filter Visible': function (browser) {
    var findPage = browser.page.findPage();
    findPage.navigate();
    findPage.expect.section('@filter').to.be.visible;

    var filterSection = findPage.section.filter;
    filterSection.expect.element('@title').to.be.visible;

    browser.end();
  }
};