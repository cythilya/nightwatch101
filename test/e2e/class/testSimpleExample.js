module.exports = {
  '@tags': ['class'],
  before : function(browser) {
    console.log('Setting up...');
  },
  after : function(browser) {
    console.log('Closing down...');
  },
  beforeEach : function(browser, done) {
    console.log('Before each test case...');

    setTimeout(function() {
      done();
    }, 100);
  },
  afterEach : function(browser, done) {
    console.log('After each test case...');

    setTimeout(function() {
      done();
    }, 200);
  },
  'Demo Ruten SubCategory Page': browser => {
    browser
      .url('http://class.ruten.com.tw/category/sub00.php?c=00080001')
      .waitForElementVisible('body', 1000)
      .getTitle(function(title) {
        this.assert.equal(typeof title, 'string');
        this.assert.equal(title, 'DC數位相機 - 露天拍賣');
      })
      .useXpath()
      .setValue('//input[@id="keyword"]', 'HiHi')
      .useCss()
      .isVisible('.rt-header-not-loaded', result => {
        browser.assert.equal(result.value, true);
      })
      .moveToElement('.rt-category-menu:first-child', 5, 5)
      .isVisible('.rt-category-menu-list-wrap', result => {
        browser.assert.equal(result.value, true);
      })
      .assert.count('.rt-subcategory-list-item', 24)
      .getAttribute('#search_input', 'name', function(result) {
        this.assert.equal(result.value, 'k');
      })
      .getTagName('#search_input', function(result) {
        this.assert.equal(result.value, 'input');
      })
      .getText('.rt-site-search-button-name', result => {
        browser.assert.equal(result.value, '搜尋')
      })
      .getCssProperty("#search_input", "line-height", function(result) {
        this.assert.equal(result.value, '27px');
      })
      .getElementSize('.rt-site-search-submit', result => {
        browser.assert.equal(result.value.width, 75);
        browser.assert.equal(result.value.height, 27);
      })
      .clearValue('#search_input')
      .setValue('#search_input', 'Pusheen')
      .getValue("#search_input", function(result) {
        this.assert.equal(result.value, 'Pusheen');
      })
      .click('.rt-site-search-submit');

      browser.expect.element('.rt-exclusive-store-heading span').text.to.equal('專館');
      browser.end()
  }
}