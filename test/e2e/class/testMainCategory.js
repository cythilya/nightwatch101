module.exports = {
  '@tags': ['class'],
  'Assert Ruten MainCategory Title': browser => {
    browser
      .url('http://class.ruten.com.tw/category/main?0008')
      .waitForElementVisible('body');
    browser.expect.element('.rt-flagship .rt-ad-heading').text.to.equal('露天旗艦店');
    browser.end();
  }
}