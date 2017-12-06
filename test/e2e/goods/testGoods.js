module.exports = {
  '@tags': ['goods'],
  'Demo Ruten Goods Page': browser => {
    var goodsPage = browser.page.goodsPage();

    goodsPage.navigate()
      .assert.title('好ㄘ的布丁(新) test_168 2')
      .assert.visible('@searchbox')
      .clearValue('@searchbox')
      .setValue('@searchbox', 'Pusheen')
      .click('@submit');

    browser.end();
  }
}