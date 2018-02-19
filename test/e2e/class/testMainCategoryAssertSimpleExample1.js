module.exports = {
  '@tags': ['class'],
  // title, containsText, value, valueContains
  'Test Main Category Page': browser => {
    browser
      .url('http://class.ruten.com.tw/category/main?0008')
      .waitForElementVisible('body')
      .assert.title('相機、攝影機 - 露天拍賣') // 檢視當頁的 title 是否等於特定字串 
      .setValue('#search_input', '好吃的蛋糕')
      .assert.value('#search_input', '好吃的蛋糕') // 檢視目前表單元件的值是否 等於 預期的值 
      .assert.valueContains('#search_input', '蛋糕') // 檢視目前表單元件的值是否 包含 預期的值
      .assert.containsText('.rt-site-search-submit', '再搜尋') // 檢視 DOM element 的 text content 是否包含某字串 
      .end();
  }
};