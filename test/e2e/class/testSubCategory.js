var conf = require('../../../nightwatch.conf.js');

module.exports = {
  '@tags': ['class'],
  'Demo Ruten SubCategory Page': browser => {
    browser
      .url('http://class.ruten.com.tw/category/sub00.php?c=00080001')
      .end()
  }
}