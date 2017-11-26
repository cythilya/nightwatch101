var conf = require('../../../nightwatch.conf.js');

module.exports = {
  '@tags': ['class'],
  'Demo Ruten MainCategory Page': browser => {
    browser
      .url('http://class.ruten.com.tw/category/main?0008')
      .end()
  }
}