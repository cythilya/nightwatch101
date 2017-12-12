module.exports = {
  '@disabled': true,
  'Demo Google Page': browser => {
    browser
      .url('https://www.google.com.tw/')
      .end()
  }
}