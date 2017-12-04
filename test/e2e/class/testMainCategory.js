var conf = require('../../../nightwatch.conf.js');

module.exports = {
  '@tags': ['class'],
  'Assert Ruten MainCategory Title': browser => {
    browser.url('http://class.ruten.com.tw/category/main?0008');
    browser.waitForElementVisible('body');
    browser.expect.element('.rt-flagship .rt-ad-heading').text.to.equal('露天旗艦店');
    browser.end();
  },
  'Assert Ruten MainCategory Title Again (after)': browser => {
    browser.url('http://class.ruten.com.tw/category/main?0008');
    browser.waitForElementVisible('body');
    browser.expect.element('.rt-flagship .rt-ad-heading').text.to.equal('露天旗艦店').after(1000).text.to.contain('露天');
    browser.end();
  },
  'Assert Ruten MainCategory Title Again (before)': browser => {
    browser.url('http://class.ruten.com.tw/category/main?0008');
    browser.waitForElementVisible('body');
    browser.expect.element('.rt-flagship .rt-ad-heading').text.to.equal('露天旗艦店').text.to.contain('露天').before(500);
    browser.end();
  },
  'Demo Ruten Main Category Page': browser => {
    browser
      .url('http://class.ruten.com.tw/category/main?0008')
      .countElementNumber('a', function(result) {
        console.log(result.value);
      })
      .end()
  }
}