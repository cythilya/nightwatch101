module.exports = {
  'Guess visible or present?': browser => {
    browser
      .rtUrl('class', 'category/main?0023')
      .verify.visible('.rt-ad-heading') // 可見
      .verify.elementPresent('.rt-ad-heading') // 可見，必為存在
      .verify.hidden('.rt-ad-text-only .rt-ad-item.hide') // 不可見，隱藏
      .verify.elementPresent('.rt-ad-text-only .rt-ad-item.hide') // 存在，但隱藏
      .verify.elementNotPresent('.abcdef') // 不存在
      .isVisible('.rt-ad-heading') // 可見，沒有斷言，無法顯示測試結果
      .isVisible('.rt-ad-text-only .rt-ad-item.hide') // 不可見，沒有斷言，無法顯示測試結果
      .end()
  }
}