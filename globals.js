const HtmlReporter = require('nightwatch-html-reporter');
const reporter = new HtmlReporter({
  openBrowser: true,
  reportsDirectory: __dirname + '/reports',
  uniqueFilename: true, // 測試報告是否要加上 timestamp
  separateReportPerSuite: true, // 測試報告是否要加上 test suite 的名稱
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