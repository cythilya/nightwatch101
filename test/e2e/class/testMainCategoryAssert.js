module.exports = {
  '@tags': ['class'],
  'Assert Category Advertisements': browser => {
    browser
      .url('http://class.ruten.com.tw/category/main?0008')
      .waitForElementVisible('body')
      .assert.title('相機、攝影機 - 露天拍賣')
      .assert.attributeEquals('.rt-header', 'data-module', 'rt-header')
      .assert.attributeEquals('.rt-wrap-search', 'data-module', 'page-class-main')
      .assert.elementPresent('.rt-ad-text-only .rt-ad-item:nth-child(1)')
      .assert.elementPresent('.promo-bar')
      .assert.elementPresent('.rt-subcategory-list .rt-subcategory-item')
      .assert.visible('#ad-flash')
      .assert.elementPresent('#ad-flash .rt-ad-item')
      .assert.elementPresent('.rt-flagship')
      .assert.attributeEquals('.rt-flagship', 'data-module', 'class-main-flagship')
      .assert.elementPresent('.rt-flagship .rt-ad-item')
      .assert.elementPresent('.rt-flagship .rt-ad-item:nth-child(1)')
      .assert.elementPresent('#ad-promote .promoted-item:nth-child(4)')
      .assert.elementPresent('#ad-special .special-item:nth-child(3)')
      .assert.attributeEquals('#ad-slideshow', 'data-module', 'class-main-slideshow')
      .assert.attributeEquals('.hot-sale-gallery', 'data-module', 'class-main-gallery')
      .assert.elementPresent('.hot-sale-item:nth-child(2)')
      .assert.elementPresent('#ad-gallery .hot-sale-gallery-item')
      .assert.visible('.good-shops')
      .assert.attributeContains('.good-shops .rt-ad-control-item:nth-child(1) .rt-ad-control-link', 'href', 'https://point.ruten.com.tw/ADI/ap2AD/more.php?CM08')
      .assert.attributeContains('.good-shops .rt-ad-control-item:nth-child(2) .rt-ad-control-link', 'href', 'http://pub.ruten.com.tw/adb/ad01_intro.html')
      .assert.visible('.good-shops .rt-ad-item')
      .assert.visible('#ad-featured-list .rt-ad-item')
      .assert.elementPresent('.top-sell')
      .assert.elementPresent('.top-sell .rt-ad-item')
      .assert.elementPresent('.shopping-mall')
      .assert.elementPresent('.shopping-mall .rt-ad-item')
      .assert.attributeContains('.shopping-mall .rt-ad-control-item:nth-child(1) .rt-ad-control-link', 'href', 'https://point.ruten.com.tw/ADI/ap2AD/more.php?CS08')
      .assert.attributeContains('.shopping-mall .rt-ad-control-item:nth-child(2) .rt-ad-control-link', 'href', 'pub.ruten.com.tw/adb/ad02_intro.html')
      .assert.elementPresent('.rt-ad-search-keyword')
      .assert.elementPresent('.rt-ad-search-keyword .rt-ad-item')
      .assert.value('#search_input', '')
      .setValue('#search_input', '蛋糕', () => {
        browser.click('.rt-site-search-submit', () => {
          browser.assert.urlContains('s000.php');
        });
      })
      .end();
  }
};