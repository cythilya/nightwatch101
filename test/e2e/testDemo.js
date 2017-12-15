var conf = require('../../nightwatch.conf.js');

module.exports = {
  'Demo Test': browser => {
    browser
      .url('https://cythilya.github.io/')
      .waitForElementVisible('body')
      .end()
    }
}
