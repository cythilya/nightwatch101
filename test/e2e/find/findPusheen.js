module.exports = {
  '@tags': ['find'],
  'Find Pusheen': browser => {
    const findPage = browser.page.findPage(); // 使用 page object

    findPage.navigate()
      .assert.title('搜尋結果 : Pusheen - 露天拍賣')
      .assert.visible('@searchbox')
      .clearValue('@searchbox')
      .setValue('@searchbox', 'Pusheen')
      .click('@submit');

    browser.end();
  }
};