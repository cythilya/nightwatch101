module.exports = {
  '@tags': ['class'],
  'Demo Ruten Main Category Page': browser => {
    browser
      .url('http://class.ruten.com.tw/category/sub00.php?c=00080001')
      .assert.count('table tbody tr', 0)
      .end()
  }
}