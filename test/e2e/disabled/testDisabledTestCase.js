var conf = require('../../../nightwatch.conf.js');

module.exports = {
  'Demo Google Page 1': function(browser) {
    browser
      .url('https://www.google.com.tw/')
      .end()
  },
  'Demo Google Page 2': '' +  function(browser) {
    browser
      .url('https://www.google.com.tw/')
      .end()
  }
}