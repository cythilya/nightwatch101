module.exports = {
  '@tags': ['mybid, goods, shoppingCart'],
  before : function(browser) {
    // 登入
    browser
      .getCookie('login_status_code', result => {
        if(!result) {
          browser
            .url('https://member.ruten.com.tw/user/login.htm')
            .waitForElementVisible('body')
            .clearValue('#userid')
            .setValue('#userid', 'nightwatch101')
            .clearValue('#userpass')
            .setValue('#userpass', 'nightwatch101')
            .click('.rt-button-submit')
            .waitForElementVisible('body')
            .getTitle(title => {
              browser.assert.equal(title, '露天拍賣-台灣 NO.1 拍賣網站');
            })
            .waitForElementVisible('#header_user_nick')
        }
      })
  },
  after : function(browser) {
    // 登出
    browser
      .click('.rt-logo')
      .waitForElementVisible('body')
      .getTitle(title => {
        browser.assert.equal(title, '露天拍賣-台灣 NO.1 拍賣網站');
      })
      .end()
  },
  'Go Shopping!': browser => {
    browser
      .url('http://goods.ruten.com.tw/item/show?21545984643540')
      .waitForElementVisible('body') // 商品頁
      .useXpath()
      .click('//*[@id="goods-spec-setting"]/div/div/div/div[1]/div/button[2]', res => {
        console.log(res);
      })
      .useCss()
      .waitForElementVisible('.item-purchase-action')
      .click('.item-purchase-action')
      .waitForElementVisible('body') // 購物車
      .waitForElementVisible('.list-cart-submit')
      .isVisible('.list-cart-submit')
      .click('.list-cart-submit')
      .waitForElementVisible('body') // 結帳頁
      .waitForElementVisible('#deliver_way_rd_F2F')
      .click('#deliver_way_rd_F2F')
      .clearValue('#username')
      .setValue('#username', '露小露')
      .clearValue('#mobile')
      .setValue('#mobile', '0912345678')
      .pause(5000)
  }
}