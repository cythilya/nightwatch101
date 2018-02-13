module.exports = {
  '@tags': ['class'],
  'Demo Ruten SubCategory Page': browser => {
    browser
      .url('http://class.ruten.com.tw/category/sub00.php?c=00080001') // 打開網頁
      .waitForElementVisible('body', 1000) // 等待 1 秒，確認 <body> 這個元素是否出現
      .getTitle(function(title) { // 取得網頁標題
        this.assert.equal(typeof title, 'string'); // 確認取得的資料型別是否為字串
        this.assert.equal(title, 'DC數位相機 - 露天拍賣');  // 確認內容是否為"DC數位相機 - 露天拍賣"
      })
      .isVisible('.rt-header-not-loaded', result => { // 確認元素 ".rt-header-not-loaded" 是否可見
        browser.assert.equal(typeof result, 'object');
        browser.assert.equal(result.status, 0);
        browser.assert.equal(result.value, true);
      })
      .moveToElement('.rt-category-menu:first-child', 5, 5) // 移動到 ".rt-category-menu:first-child" 的右上方 5px 位置
      .isVisible('.rt-category-menu-list-wrap', result => { // 確認元素 ".rt-category-menu-list-wrap" 是否可見
        browser.assert.equal(typeof result, 'object');
        browser.assert.equal(result.status, 0);
        browser.assert.equal(result.value, true);
      })
      .assert.count('.rt-subcategory-list-item', 24) // 確認元素 ".rt-subcategory-list-item" 個數為 24 個
      .getAttribute('#search_input', 'name', function(result) { // 取得元素 "#search_input" 的屬性 name 的資料，並比對其值是否為 "k"
        this.assert.equal(typeof result, "object");
        this.assert.equal(result.status, 0);
        this.assert.equal(result.value, 'k');
      })
      .getTagName('#search_input', function(result) { // 取得元素 "#search_input" 的 tag name 是否為 "input"
        this.assert.equal(result.value, 'input');
      })
      .getText('.rt-site-search-button-name', result => { // 取得元素 ".rt-site-search-button-name" 的文字，並比對是否為 "搜尋"
        browser.assert.equal(result.value, '搜尋')
      })
      .getCssProperty("#search_input", "line-height", function(result) { // 取得元素 "#search_input" 的 CSS line-height 的值，並比對是否為 "27px"
        this.assert.equal(typeof result, "object");
        this.assert.equal(result.status, 0);
        this.assert.equal(result.value, '27px');
      })
      .getElementSize('.rt-site-search-submit', result => { // 取得元素 ".rt-site-search-submit" 的寬高，並比對其寬是否為 75px，其高是否為 27px
        browser.assert.equal(typeof result, 'object');
        browser.assert.equal(result.status, 0);
        browser.assert.equal(result.value.width, 75);
        browser.assert.equal(result.value.height, 27);
      })
      .clearValue('#search_input') // 清除元素 ".search_input" 的值
      .setValue('#search_input', 'Pusheen') // 在元素 "#search_input" 欄位輸入字串 "Pusheen"
      .getValue("#search_input", function(result) { // 取得元素 "#search_input" 欄位值，並比對其值是否為 "Pusheen"
        this.assert.equal(typeof result, 'object');
        this.assert.equal(result.status, 0);
        this.assert.equal(result.value, 'Pusheen');
      })
      .click('.rt-site-search-submit') // 點擊送出按鈕
      .assert.urlContains('http://find.ruten.com.tw/') // 確定網址是否包含 "http://find.ruten.com.tw/"
      .end() // 結束 session，關閉瀏覽器
  }
}
