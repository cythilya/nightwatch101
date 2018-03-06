const goodsCommands = {
  switchTab: function(hashValue) {
    return this.url.client.urlHash(hashValue)
  }
}

module.exports = {
  url: function() {
    let goodsID = '21751464218102';
    // Todo: 依照環境選擇不同的 goodsID
    return this.rtUrl('goods', '/item/show?' + goodsID);
  },
  commands: [goodsCommands],
  sections: {
    auctionData: {
      selector: '.auction-data',
      elements: {
        gallery: {
          selector: '.item-gallery-main-image'
        },
        coverImage: {
          selector: '.js-main-img'
        },
        selectedThumbnail: {
          selector: '.imgSelected img'
        },
        imgPopup: {
          selector: '.img-popup'
        },
        imgPopupCloseBtn: {
          selector: '.img-popup .rt-jqmodal-jqmClose'
        },
        qtyBtnPlus: {
          selector: '.item-qty-button-plus'
        },
        qtyBtnMinus: {
          selector: '.item-qty-button-minus'
        }
      }
    },
    tabs: {
      selector: '.rt-tab-wrap',
      elements: {
        tabGoodsDetail: {
          selector: '.rt-tab-item:nth-of-type(1) a'
        },
        tabQnA: {
          selector: '.rt-tab-item:nth-of-type(2) a'
        },
        tabHistory: {
          selector: '.rt-tab-item:nth-of-type(3) a'
        }
      }
    },
    sidebar: {
      selector: '.sidebar-wrap',
      elements: {
        sideAdvertise: {
          selector: '.side-advertise'
        }
      }
    }
  }
};