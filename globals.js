var HtmlReporter = require('nightwatch-html-reporter');
var reporter = new HtmlReporter({
  openBrowser: false,
  reportsDirectory: __dirname + '/reports'
});

module.exports = {
  reporter: reporter.fn,
  before: function(done) {
    done();
  },
  after: function(done) {
    done();
  },
  beforeEach: function(browser, done) {
    done();
  },
  afterEach: function(browser, done) {
    done();
  }
};
