module.exports = {
  '@tags': ['class'],
  // text, equals, contains, matches, not
  'Test Main Category Page 1': browser => {
    browser.url('http://class.ruten.com.tw/category/main?0008');
    browser.waitForElementVisible('body');
    browser.expect.element('.rt-breadcrumb-static').text.to.not.equals('Hello World!'); // 檢視 rt-breadcrumb-static 的 inner text 是否不為「Hello World!」
    browser.expect.element('.rt-breadcrumb-static').text.to.contains('攝影機'); // 檢視 .rt-breadcrumb-static 的 inner text 是否包含「攝影機」
    browser.expect.element('.rt-breadcrumb-static').text.to.matches(/^([^0-9]*)$/); // 檢視 .rt-breadcrumb-static 的 inner text 是否不含數字
    browser.end();
  }
}