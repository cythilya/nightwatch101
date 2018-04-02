// Expect 範例：enabled, selected, value
module.exports = {
  '@tags': ['find'],
  'Test Find Pusheen Page': browser => { // 7-11 取貨付款
    browser.rtUrl('find', 's/?area=0&cateid=0015&payway=7&q=pusheen&shipfee=all');
    browser.waitForElementVisible('body');

    // 選取？
    browser.expect.element('.payment > li:nth-child(6) > label > input[type="checkbox"]').to.be.selected;
    
    // 值為 pusheen？
    browser.expect.element('#searchInput').to.have.value.that.equals('pusheen');

    // 啟用？
    browser.expect.element('#searchButton').to.be.enabled;
    
    browser.end();
  }
}