var HtmlReporter = require('nightwatch-html-reporter');
var reporter = new HtmlReporter({
  openBrowser: true,
  reportsDirectory: __dirname + '/reports'
});

module.exports = {
  reporter: reporter.fn,
  before: function(browser) {
    // console.log('Setting up...');
  },
  after: function(browser) {
    // console.log('Closing down...');
  },
  beforeEach: function(browser, done) {
    // console.log('Before each test case...');

    setTimeout(function() {
      done();
    }, 100);
  },
  afterEach: function(browser, done) {
    // console.log('After each test case...');

    setTimeout(function() {
      done();
    }, 200);
};