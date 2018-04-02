// Expect 範例：text, equals, contains, matches, not
module.exports = {
  '@tags': ['class'],
  'Test Main Category Page 1': browser => {
    browser.rtUrl('class', 'category/main?0008');
    browser.waitForElementVisible('body');
 
    // 文字內容不為 Hello World？
    browser.expect.element('.rt-breadcrumb-static').text.to.not.equals('Hello World!'); 

    // 文字內容包含「攝影機」？
    browser.expect.element('.rt-breadcrumb-static').text.to.contains('攝影機'); 

    // 文字內容不含數字？
    browser.expect.element('.rt-breadcrumb-static').text.to.matches(/^([^0-9]*)$/); 
    browser.end();
  }
}