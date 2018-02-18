module.exports = {
  '@tags': ['class'],
  // a / an, css, attribute, present, visible
  'Test Main Category Page 2': browser => {
    browser.url('http://class.ruten.com.tw/category/main?0008');
    browser.waitForElementVisible('body');
    // 預期 #search_input 是一個 input，若否則顯示客製化報錯 '#search_input should be an input'
    browser.expect.element('#search_input').to.be.an('input', '#search_input should be an input');
    // 預期 .rt-ad-text-only .rt-ad-item 這個 DOM Element 的 CSS 屬性 display 的值是 inline-block
    browser.expect.element('.rt-ad-text-only .rt-ad-item').css('display').to.equals('inline-block'); 
    // 預期 .shopping-mall .rt-ad-control-link 這個 DOM Element 含有屬性 href
    browser.expect.element('.shopping-mall .rt-ad-control-link').attribute('href');
    // 預期 #ad-flash 這個 DOM Element 可見
    browser.expect.element('#ad-flash').to.be.visible;
    // 預期 .shopping-mall .rt-ad-item 這個 DOM Element 存在
    browser.expect.element('.shopping-mall .rt-ad-item').to.be.present;
    browser.end();
  }
}