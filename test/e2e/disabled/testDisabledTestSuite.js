// 禁跑特定 Test Suite：設定 @disabled 為 true 
module.exports = {
  '@disabled': true,
  'Demo Google Page': browser => {
    browser
      .url('https://www.google.com.tw/')
      .end()
  }
}