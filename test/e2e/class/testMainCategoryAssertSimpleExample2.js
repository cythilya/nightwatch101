module.exports = {
  '@tags': ['class'],
  // urlEquals, urlContains, visible, elementPresent
  'Test Main Category Page': browser => {
    browser
      .url('http://class.ruten.com.tw/category/main?0008')
      .waitForElementVisible('body')
      .assert.urlEquals('http://class.ruten.com.tw/category/main?0008') // 檢視目前網址是否 等於 特定字串
      .assert.urlContains('/category/main') // 檢視目前網址是否 包含 特定字串
      .assert.visible('#ad-flash') // 檢視 DOM element 是否可見，與 hidden 相反
      .assert.elementPresent('.top-sell') // 檢視 DOM element 是否存在，與 elementNotPresent 相反
      .end();
  }
};