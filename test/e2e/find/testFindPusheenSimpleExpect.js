module.exports = {
  '@tags': ['class'],
  // enabled, selected, value
  // 7-11 取貨付款
  'Test Find Pusgeen Page': browser => {
    browser.url('https://find.ruten.com.tw/s/?area=0&cateid=0015&payway=7&q=pusheen&shipfee=all');
    browser.waitForElementVisible('body');
    browser.expect.element('.payment > li:nth-child(6) > label > input[type="checkbox"]').to.be.selected;
    browser.expect.element('#searchInput').to.have.value.that.equals('pusheen');
    browser.expect.element('#searchButton').to.be.enabled;
    browser.end();
  }
}