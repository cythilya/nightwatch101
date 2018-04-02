module.exports = {
  '@tags': ['class'],
  'Demo Ruten SubCategory Page': browser => {
    browser
      .rtUrl('class', 'category/sub00.php?c=00080001') // 打開網頁
      .waitForElementVisible('body', 1000) // 等待 1 秒，確認 <body> 這個元素是否可見
      .getTitle(function(title) { // 取得網頁標題
        this.assert.equal(typeof title, 'string'); // 確認取得的資料型別是否為字串
        this.assert.equal(title, 'DC數位相機 - 露天拍賣');  // 確認內容是否為"DC數位相機 - 露天拍賣"
      })
      .moveToElement('.site_catalog', 5, 5) // 移動到 ".site_catalog" 的右上方 5px 位置
      .isVisible('#topSearchInput', result => { // 確認元素 ".rt-category-menu-list-wrap" 是否可見
        browser.assert.equal(typeof result, 'object');
        browser.assert.equal(result.status, 0);
        browser.assert.equal(result.value, true);
      })
      .assert.count('.catalog', 1) // 確認元素 ".catalog" 個數為 1 個
      .getAttribute('#topSearchInput', 'placeholder', function(result) { // 取得元素 "#topSearchInput" 的屬性 placeholder 的資料，並比對其值是否為 "請輸入關鍵字"
        this.assert.equal(typeof result, 'object');
        this.assert.equal(result.status, 0);
        this.assert.equal(result.value, '請輸入關鍵字');
      })
      .getTagName('#topSearchInput', function(result) { // 取得元素 "#topSearchInput" 的 tag name 是否為 "input"
        this.assert.equal(result.value, 'input');
      })
      .getText('#searchButton', result => { // 取得元素 ".rt-site-search-button-name" 的文字，並比對是否為 "搜尋"
        browser.assert.equal(result.value, '搜尋')
      })
      .getCssProperty('#topSearchInput', 'line-height', function(result) { // 取得元素 "#topSearchInput" 的 CSS line-height 的值，並比對是否為 "27px"
        this.assert.equal(typeof result, 'object');
        this.assert.equal(result.status, 0);
        this.assert.equal(result.value, 'normal');
      })
      .getElementSize('#searchButton', result => { // 取得元素 ".rt-site-search-submit" 的寬高，並比對其寬是否為 76px，其高是否為 27px
        browser.assert.equal(typeof result, 'object');
        browser.assert.equal(result.status, 0);
        browser.assert.equal(result.value.width, 76);
        browser.assert.equal(result.value.height, 27);
      })
      .clearValue('#topSearchInput') // 清除元素 ".topSearchInput" 的值
      .setValue('#topSearchInput', 'Pusheen') // 在元素 "#topSearchInput" 欄位輸入字串 "Pusheen"
      .getValue("#topSearchInput", function(result) { // 取得元素 "#topSearchInput" 欄位值，並比對其值是否為 "Pusheen"
        this.assert.equal(typeof result, 'object');
        this.assert.equal(result.status, 0);
        this.assert.equal(result.value, 'Pusheen');
      })
      .click('#searchButton') // 點擊送出按鈕
      .end() // 結束 session，關閉瀏覽器
  }
}