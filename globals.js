const HtmlReporter = require('nightwatch-html-reporter');
const reporter = new HtmlReporter({
  openBrowser: false,
  reportsDirectory: __dirname + '/reports'
});

const beforeFn = function(cb){
  process.argv.forEach(string => {
    let key   = string.replace(/^--(.*)=.*/, '$1');
    let value = string.replace(/^--.*=(.*)/, '$1');
    switch (key) {
      case 'rtEnv':
      case 'userName':
      case 'customTag':
        this.rtContext[key] = value;
        break;
    }
  });

  cb();
};

module.exports = {
  reporter: reporter.fn,
  before: beforeFn, // before all test suites...,
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