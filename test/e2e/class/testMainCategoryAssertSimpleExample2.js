// Assert: urlEquals, urlContains, visible, elementPresent
module.exports = {
  '@tags': ['class'],
  'Test Main Category Page': browser => {
    browser
      .rtUrl('class', 'category/main?0008') // 目前網址等於特定字串？
      .waitForElementVisible('body')
      .assert.urlEquals('http://class.ruten.com.tw/category/main?0008') // 檢視目前網址是否 等於 特定字串
      .assert.urlContains('/category/main') // 檢視目前網址是否 包含 特定字串
      .assert.visible('#ad-flash') // 檢視 DOM element 是否可見，與 hidden 相反
      .assert.elementPresent('.top-sell') // 檢視 DOM element 是否存在，與 elementNotPresent 相反
      .end();
  }
};