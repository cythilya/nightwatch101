module.exports = {
  'Ruten Desktop Login': browser => {
    browser
      .url('https://member.ruten.com.tw/user/login.htm') // 打開指定網址
      .waitForElementPresent('body', 1000) // 確認 DOM Element 載入完成
      .setValue('#userid', 'nightwatch101') // 對 input text 設値或模擬連續打字，字串格式為 utf-8
      .setValue('#userpass', 'nightwatch101')
      .click('#btnLogin') // 點擊
      .pause(1000) // 暫停測試程式，可指定暫停時間（ms）
      .end(); // 結束 session，關閉瀏覽器
  }
};