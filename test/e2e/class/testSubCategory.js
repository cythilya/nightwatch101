module.exports = {
  '@tags': ['class'],
  'Demo Ruten SubCategory Page': browser => {
    browser
      .url('http://class.ruten.com.tw/category/sub00.php?c=00080001')
      .waitForElementVisible('body', 1000)
      .getTitle(function(title) {
        this.assert.equal(typeof title, 'string');
        this.assert.equal(title, 'DC數位相機 - 露天拍賣');
      })
      .isVisible('.rt-header-not-loaded', result => {
        browser.assert.equal(typeof result, 'object');
        browser.assert.equal(result.status, 0);
        browser.assert.equal(result.value, true);
      })
      .moveToElement('.rt-category-menu:first-child', 5, 5)
      .isVisible('.rt-category-menu-list-wrap', result => {
        browser.assert.equal(typeof result, 'object');
        browser.assert.equal(result.status, 0);
        browser.assert.equal(result.value, true);
      })
      .assert.count('.rt-subcategory-list-item', 24)
      .getAttribute('#search_input', 'name', function(result) {
        this.assert.equal(typeof result, "object");
        this.assert.equal(result.status, 0);
        this.assert.equal(result.value, 'k');
      })
      .getTagName('#search_input', function(result) {
        this.assert.equal(result.value, 'input');
      })
      .getText('.rt-site-search-button-name', result => {
        browser.assert.equal(result.value, '搜尋')
      })
      .getCssProperty("#search_input", "line-height", function(result) {
        this.assert.equal(typeof result, "object");
        this.assert.equal(result.status, 0);
        this.assert.equal(result.value, '27px');
      })
      .getElementSize('.rt-site-search-submit', result => {
        browser.assert.equal(typeof result, 'object');
        browser.assert.equal(result.status, 0);
        browser.assert.equal(result.value.width, 75);
        browser.assert.equal(result.value.height, 27);
      })
      .clearValue('#search_input')
      .setValue('#search_input', 'Pusheen')
      .getValue("#search_input", function(result) {
        this.assert.equal(typeof result, 'object');
        this.assert.equal(result.status, 0);
        this.assert.equal(result.value, 'Pusheen');
      })
      .click('.rt-site-search-submit')
      .assert.urlContains('http://find.ruten.com.tw/')
      .end()
  }
}