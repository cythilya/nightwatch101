var conf = require('../../../nightwatch.conf.js');

module.exports = {
  '@disabled': true,
  'Ruten Login': function (browser) {
    browser
    .url('https://member.ruten.com.tw/user/login.htm')
    .waitForElementVisible('body', 1000)
    .useXpath()
    .setValue('//input[@id="userid"]', 'test_user') // test_user 要改為自己的帳號
    .setValue('//input[@id="userpass"]', 'test_password') // test_password 要改為自己的密碼
    .useCss()
    .click('#btnLogin')
    .pause(1000)
    .assert.urlContains('http://www.ruten.com.tw/')
    .end();
  }
};