// 禁跑特定 Test Case：在 Test Case 前加上一個空字串
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