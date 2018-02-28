/***
rtUrl('class', 'category/main?0008')
dev: nightwatch  test/e2e/testDemo.js --userName=summer --rtEnv=dev
  -> http://summer.class.dev.ruten.com.tw/category/main?0008
dev2: nightwatch  test/e2e/testDemo.js --userName=summer --rtEnv=dev2
  -> http://summer.class.dev2.ruten.com.tw/category/main?0008
stage: nightwatch  test/e2e/testDemo.js --rtEnv=stage
  -> http://class.stage.ruten.com.tw/category/main?0008
stage2: nightwatch  test/e2e/testDemo.js  --rtEnv=stage2
  -> http://class.stage2.ruten.com.tw/category/main?0008
rtg: nightwatch  test/e2e/testDemo.js
  -> http://class.ruten.com.tw/category/main?0008
***/
const httpsHostList = ['mybid', 'mass', 'ts', 'img', 'imgssl', 'member', 'point', 'mybidu', 'ahdssl', 'mobile', 'alert', 'upload', 'im', 'rtapi'];

const isDev = env => {
  return env === 'dev' || env === 'dev2';
};
const mobileEnv = (host, env) => host === 'mobile' && (env === 'stage2' || env === '') ? 'm.' : host +  '.';

const rtHost = function(host = 'www', globals) {
  let rtEnv = globals.rtContext.rtEnv || '',
      userName = globals.rtContext.userName,
      isSSL = httpsHostList.indexOf(host) !== -1,
      protocol = isSSL ? 'https://' : 'http://',
      urlUserName = isDev(rtEnv) ? userName + '.' : '',
      urlHost = mobileEnv(host, rtEnv) || host + '.',
      urlEnv = rtEnv.length !== 0 ? (rtEnv + '.') : '',
      domain = 'ruten.com.tw/';

  return protocol + urlUserName + urlHost + urlEnv + domain;
};

exports.command = function(domain = 'www', path = '') {
  this.url(rtHost(domain, this.globals) + path);
  return this;
};