var conf = require('../../nightwatch.conf.js');

module.exports = {
  'Demo Ruten Index Page': browser => {
    browser
      .url('http://www.ruten.com.tw/')
      .end()
  }
}