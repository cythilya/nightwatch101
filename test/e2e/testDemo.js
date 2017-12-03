var conf = require('../../nightwatch.conf.js');

module.exports = {
  '@tags': ['index'],
  'Demo Test': browser => {
    browser
      .url('https://cythilya.github.io/')
      .end()
  }
}