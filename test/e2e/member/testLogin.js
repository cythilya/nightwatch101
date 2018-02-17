module.exports = {
  // '@disabled': true,
  'Ruten Login': browser => {
    browser
      .url('https://member.ruten.com.tw/user/login.htm')
      .waitForElementVisible('body', 1000)
      .useXpath()
      .setValue('//input[@id="userid"]', 'nightwatch101')
      .setValue('//input[@id="userpass"]', 'nightwatch101')
      .useCss()
      .click('#btnLogin')
      .pause(1000)
      .assert.urlContains('http://www.ruten.com.tw/')
      .end();
  }
};