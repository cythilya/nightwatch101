module.exports = {
  '@tags': ['class'],
  'Assert Categoty Advertisements': browser => {
    browser
      .url('http://class.ruten.com.tw/category/main?0008')
      .waitForElementVisible('body')
      .verify.title('相機、攝影機 - 露天拍賣')
      .verify.attributeEquals('.rt-header', 'data-module', 'rt-header')
      .verify.attributeEquals('.rt-wrap-search', 'data-module', 'page-class-main')
      .verify.elementPresent('.rt-ad-text-only .rt-ad-item:nth-child(1)')
      .verify.elementPresent('.promo-bar')
      .verify.elementPresent('.rt-subcategory-list .rt-subcategory-item')
      .verify.visible('#ad-flash')
      .verify.elementPresent('#ad-flash .rt-ad-item')
      .verify.elementPresent('.rt-flagship')
      .verify.attributeEquals('.rt-flagship', 'data-module', 'class-main-flagship')
      .verify.elementPresent('.rt-flagship .rt-ad-item')
      .verify.elementPresent('.rt-flagship .rt-ad-item:nth-child(1)')
      .verify.elementPresent('#ad-promote .promoted-item:nth-child(4)')
      .verify.elementPresent('#ad-special .special-item:nth-child(3)')
      .verify.attributeEquals('#ad-slideshow', 'data-module', 'class-main-slideshow')
      .verify.attributeEquals('.hot-sale-gallery', 'data-module', 'class-main-gallery')
      .verify.elementPresent('.hot-sale-item:nth-child(2)')
      .verify.elementPresent('#ad-gallery .hot-sale-gallery-item')
      .verify.visible('.good-shops')
      .verify.attributeContains('.good-shops .rt-ad-control-item:nth-child(1) .rt-ad-control-link', 'href', 'https://point.ruten.com.tw/ADI/ap2AD/more.php?CM08')
      .verify.attributeContains('.good-shops .rt-ad-control-item:nth-child(2) .rt-ad-control-link', 'href', 'http://pub.ruten.com.tw/adb/ad01_intro.html')
      .verify.visible('.good-shops .rt-ad-item')
      .verify.visible('#ad-featured-list .rt-ad-item')
      .verify.elementPresent('.top-sell')
      .verify.elementPresent('.top-sell .rt-ad-item')
      .verify.elementPresent('.shopping-mall')
      .verify.elementPresent('.shopping-mall .rt-ad-item')
      .verify.attributeContains('.shopping-mall .rt-ad-control-item:nth-child(1) .rt-ad-control-link', 'href', 'https://point.ruten.com.tw/ADI/ap2AD/more.php?CS08')
      .verify.attributeContains('.shopping-mall .rt-ad-control-item:nth-child(2) .rt-ad-control-link', 'href', 'pub.ruten.com.tw/adb/ad02_intro.html')
      .verify.elementPresent('.rt-ad-search-keyword')
      .verify.elementPresent('.rt-ad-search-keyword .rt-ad-item')
      .verify.value('#search_input', '')
      .setValue('#search_input', '蛋糕', () => {
        browser.click('.rt-site-search-submit', () => {
          browser.verify.urlContains('s000.php');
        });
      })
      .end();
  }
};