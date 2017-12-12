module.exports = {
  '@tags': ['class'],
  'Demo Ruten Main Category Page': browser => {
    browser
      .url('http://class.ruten.com.tw/category/main?0008')
      .countElementNumber('a', function(result) {
        console.log(result.value);
      })
      .end()
  }
}