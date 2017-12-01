var HtmlReporter = require('nightwatch-html-reporter');
var reporter = new HtmlReporter({
  openBrowser: true,
  reportsDirectory: __dirname + '/reports/'
});

module.exports = {
  write : function(results, options, done) {
    reporter.fn(results, done);
  }
};