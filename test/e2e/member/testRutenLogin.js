module.exports = {
  'Login Ruten Desktop Website': browser => {
    browser
      .rtLogin('nightwatch101')
      .end();
  }
};