var findCommands = {
  submit: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@submit', 1000)
      .click('@submit')
  }
};

module.exports = {
  url: 'http://find.ruten.com.tw/search/s000.php?enc=u&searchfrom=indexbar&k=Pusheen&t=0',
  commands: [findCommands],
  elements: {
    searchbox: {
      selector: '#searchInput'
    },
    submit: {
      selector: '#searchButton'
    }
  },
  sections: {
    filter: {
      selector: '#NarrowContainer',
      elements: {
        title: {
          selector: '.head'
        }
      }
    }
  }
};