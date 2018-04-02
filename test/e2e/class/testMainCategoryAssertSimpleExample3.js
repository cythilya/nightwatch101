// Assert: attributeEquals, attributeContains, cssProperty, cssClassPresent
module.exports = {
  '@tags': ['class'],
  'Test Main Category Page': browser => {
    browser
      .rtUrl('class', 'category/main?0008')
      .waitForElementVisible('body')
      .assert.title('相機、攝影機 - 露天拍賣')

      // 檢視屬性（attribute）是否 等於 指定的值
      .assert.attributeEquals('.rt-site-search-submit', 'type', 'submit') 

      // 檢視屬性（attribute）是否 包含 指定的值
      .assert.attributeContains('.rt-site-search-submit', 'class', 'rt-button')

      // 檢視 DOM element 的 CSS 屬性是否等於指定的值
      .assert.cssProperty('.rt-site-search-submit', 'min-height', '24px')

      // 檢視 DOM element 是否含有某個 CSS class，與 cssClassNotPresent 相反 
      .assert.cssClassPresent('.rt-site-search-submit', 'rt-button')

      .end();
  }
};