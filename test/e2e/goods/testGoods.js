require('../../../page_objects/goodsPage.js');

module.exports = {
  '@tags': ['goods'],
  'Auction Data': browser => {  // 商品資訊
    let goodsPage = browser.page.goodsPage();
    let auctionData = goodsPage.section.auctionData;
    goodsPage.navigate();
    // goodsPage.expect.section('@auctionData').to.be.visible;
    goodsPage.assert.title('好ㄘ的布丁(新) test_168 2 - 露天拍賣');

    auctionData
      .assert.visible('@gallery') // 至少有一張圖
      .assert.visible('@selectedThumbnail') // 至少有一張縮圖
      .click('@coverImage')
      .assert.visible('@imgPopup')
      .click('@imgPopupCloseBtn')
      .assert.hidden('@imgPopup')
      .assert.attributeEquals('@qtyBtnMinus', 'disabled', 'true')
      .click('@qtyBtnPlus');
    auctionData.expect.element('@qtyBtnMinus').not.to.have.attribute('disabled')
    auctionData
      .click('@qtyBtnMinus')
      .assert.attributeEquals('@qtyBtnMinus', 'disabled', 'true');
  },
  'Tabs': browser => { // 商品說明、問與答、購買人次
    let goodsPage = browser.page.goodsPage();
    let tabs = goodsPage.section.tabs;
    goodsPage.navigate();
    // goodsPage.expect.section('@tabs').to.be.visible;

    tabs
      .assert.visible('@tabGoodsDetail')
      .assert.containsText('@tabGoodsDetail', '商品說明')
      .assert.visible('@tabQnA')
      .assert.containsText('@tabQnA', '問與答')
      .assert.visible('@tabHistory')
      .assert.containsText('@tabHistory', '購買人次');
  },
  'Sidebar': browser => {
    let goodsPage = browser.page.goodsPage();
    let sidebar   = goodsPage.section.sidebar;
    goodsPage.navigate();
    // goodsPage.expect.section('@sidebar').to.be.visible;

    // sidebar: 廣告相關
    sidebar
      .assert.visible('@sideAdvertise');

    browser.end();
  }
}