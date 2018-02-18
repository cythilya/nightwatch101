module.exports = {
  '@tags': ['class'],
  'Assert Advertisements Status': browser => {
    browser.url('http://class.ruten.com.tw/category/main?0008');
    browser.waitForElementVisible('body');
    browser.expect.element('.rt-ad-text-only .rt-ad-item').css('display').to.equals('inline-block');
    browser.expect.element('.promo-bar').to.be.present;
    browser.expect.element('.rt-subcategory-list .rt-subcategory-item').to.be.present;
    browser.expect.element('#ad-flash').to.be.visible;
    browser.expect.element('#ad-flash .rt-ad-item').to.be.present;
    browser.expect.element('.rt-flagship').to.be.visible;
    browser.expect.element('.rt-flagship .rt-ad-item').to.be.present;
    browser.expect.element('#ad-promote .promoted-item').to.present;
    browser.expect.element('#ad-special .special-item').to.be.present;
    browser.expect.element('.hot-sale-item').to.be.present;
    browser.expect.element('#ad-gallery .hot-sale-gallery-item').to.be.present;
    browser.expect.element('.good-shops').to.be.visible;
    browser.expect.element('.good-shops .rt-ad-control-link').attribute('href');
    browser.expect.element('.good-shops .rt-ad-item').to.be.visible;
    browser.expect.element('#ad-featured-list .rt-ad-item').to.be.visible;
    browser.expect.element('.top-sell').to.be.present;
    browser.expect.element('.top-sell .rt-ad-item').to.be.present;
    browser.expect.element('.shopping-mall').to.be.present;
    browser.expect.element('.shopping-mall .rt-ad-item').to.be.present;
    browser.expect.element('.shopping-mall .rt-ad-control-link').attribute('href');
    browser.expect.element('.rt-ad-search-keyword').to.be.present;
    browser.expect.element('.rt-ad-search-keyword .rt-ad-item').to.be.present;
    browser.expect.element('#search_input').to.be.an('input', '#search_input should be an input');
    browser.expect.element('#search_input').to.have.value.that.equals('');
    browser.expect.element('#search_input').to.be.enabled;
    browser.expect.element('.rt-site-search-submit').to.be.enabled;
    browser.end();
  }
}