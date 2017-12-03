var conf = require('../../nightwatch.conf.js');

module.exports = {
  'Demo Test': browser => {
    browser
      .url('http://www.ruten.com.tw/')
      .saveScreenshot('./screenshots/index.png')
      .end()
  }
}