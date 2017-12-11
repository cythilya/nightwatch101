var HtmlReporter = require('nightwatch-html-reporter');
var reporter = new HtmlReporter({
  openBrowser: false,
  reportsDirectory: __dirname + '/reports'
});
var chromedriver = require('chromedriver');

module.exports = {
  reporter: reporter.fn,
  before: function(done) {
    chromedriver.start();
    done();
  },
  after: function(done) {
    chromedriver.stop();
    done();
  },
  beforeEach: function(browser, done) {
    done();
  },
  afterEach: function(browser, done) {
    done();
  }
};