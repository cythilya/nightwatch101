/***
桌機版登入: rtLogin('nightwatch101')
手機版登入: rtLogin('nightwatch101', 'm')
要關掉兩步驟驗證
***/

exports.command = function(account = 'nightwatch101', device = 'd') {
  const accounts = require('../settings.js').accounts;
  const loginPath = device === 'm' ? 'user/mlogin.php' : 'user/login.htm';

  this
    .rtUrl('member', loginPath)
    .waitForElementVisible('body')
    .clearValue('input[name="userid"]')
    .setValue('input[name="userid"]', account)
    .clearValue('input[name="userpass"]')
    .setValue('input[name="userpass"]', accounts[account].password)
    .click('.rt-button[type="submit"]')

  return this;
};