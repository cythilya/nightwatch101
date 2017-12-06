var findCommands = {
  submit: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@submit', 1000)
      .click('@submit')
  }
};

module.exports = {
  url: 'http://goods.ruten.com.tw/item/show?21719229974339',
  commands: [findCommands],
  elements: {
    searchbox: {
      selector: '#keyword'
    },
    submit: {
      selector: '.header-search-submit'
    }
  },
  sections: {
    goodsInfo: {
      selector: '#mod-goods-main-1',
      elements: {
        title: {
          selector: '.item-title'
        }
      }
    }
  }
};