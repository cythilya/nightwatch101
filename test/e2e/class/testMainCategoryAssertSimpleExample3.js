module.exports = {
  '@tags': ['class'],
  'Test Main Category Page': browser => {
    browser
      .url('http://class.ruten.com.tw/category/main?0008')
      .waitForElementVisible('body')
      .assert.title('相機、攝影機 - 露天拍賣')
      // 檢視屬性（attribute）是否 等於 指定的值
      .assert.attributeEquals('.rt-site-search-submit', 'type', 'submit') 
      // 檢視屬性（attribute）是否 包含 指定的值
      .assert.attributeContains('.rt-site-search-submit', 'class', 'rt-button')
      // 檢視 DOM element 的 CSS 屬性是否含有某個值
      .assert.cssProperty('.rt-site-search-submit', 'min-height', '24px')
      // 檢視 DOM element 是否含有某個 CSS class，與 cssClassNotPresent 相反 
      .assert.cssClassPresent('.rt-site-search-submit', 'rt-button')
      .end();
  }
};

'Test Main Category Page': browser => {
  browser
    .url('http://class.ruten.com.tw/category/main?0008')
    .assert.title('相機、攝影機 - 露天拍賣')
    .assert.attributeEquals('.submit', 'type', 'submit') // 屬性 type 等於 submit？
    .assert.attributeContains('.submit', 'class', 'button') // 檢視 class 包含 rt-button？
    .assert.cssProperty('.submit', 'min-height', '24px') // CSS 屬性等於指定的值？
    .assert.cssClassPresent('.submit', 'button') // 含有 CSS class？ 
    .end();
}