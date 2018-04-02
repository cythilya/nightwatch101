module.exports = {
  'Test Save Screenshot': browser => {
    browser
      .rtUrl('www')
      .maximizeWindow() // 展開到螢幕最大寬度
      .saveScreenshot('./screenshots/index.png') // 儲存螢幕截圖
      .end()
  }
}