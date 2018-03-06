module.exports = {
  '@tags': ['goods'],
  'Auction Data': browser => {  // 商品資訊
    let goodsPage = browser.page.goodsPage();
    let auctionData = goodsPage.section.auctionData;
    goodsPage.navigate();
    // goodsPage.expect.section('@auctionData').to.be.visible;
    goodsPage.verify.title('購物車上線好棒棒 (*´∀`)~♥ - 露天拍賣');

    auctionData
      .verify.visible('@gallery') // 至少有一張圖
      .verify.visible('@selectedThumbnail') // 至少有一張縮圖
      .click('@coverImage') // 點擊縮圖會出現 popup
      .verify.visible('@imgPopup')
      .click('@imgPopupCloseBtn') // 關閉 popup
      .verify.hidden('@imgPopup') // popup 應為隱藏
      .verify.attributeEquals('@qtyBtnMinus', 'disabled', 'true') // 未選規格以前，不可選/填數量
      .verify.attributeEquals('@qtyBtnMinus', 'disabled', 'true')
      .click('#goods-spec-setting > div > div:nth-child(1) > div:nth-child(1) > div > ul > li:nth-child(1) > button') // 選規格
      .click('#goods-spec-setting > div > div:nth-child(1) > div:nth-child(2) > div > ul > li:nth-child(2) > button') // 選項目
      .click('@qtyBtnPlus') // 數量 +1
      .click('@qtyBtnMinus') // 數量 -1
      .verify.attributeEquals('@qtyBtnMinus', 'disabled', 'true');
  },
  'Tabs': browser => { // 商品說明、問與答、購買人次
    let goodsPage = browser.page.goodsPage();
    let tabs = goodsPage.section.tabs;
    goodsPage.navigate();
    // goodsPage.expect.section('@tabs').to.be.visible;

    tabs
      .verify.visible('@tabGoodsDetail')
      .verify.containsText('@tabGoodsDetail', '商品說明')
      .verify.visible('@tabQnA')
      .verify.containsText('@tabQnA', '問與答')
      .verify.visible('@tabHistory')
      .verify.containsText('@tabHistory', '購買人次');
  },
  'Sidebar': browser => {
    let goodsPage = browser.page.goodsPage();
    let sidebar   = goodsPage.section.sidebar;
    goodsPage.navigate();
    // goodsPage.expect.section('@sidebar').to.be.visible;

    // sidebar: 廣告相關
    sidebar
      .verify.visible('@sideAdvertise');

    browser.end();
  }
}