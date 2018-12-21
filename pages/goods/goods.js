const app = getApp()
const url = app.globalData.server

Page({
  data: {
    images: [],
    similarGoodsInformation: [],
    similarGoddsLink: [],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    circular: true,
    interval: 2000,
    duration: 500,
    previousMargin: 0,
    nextMargin: 0,

    table: ["商品", "详情", "推荐"],
    activeIndex: 0,
    nav_width: ""

  },


  onLoad: function (options) {
    let that = this
    console.log(options.id)
    wx.request({
      url: url+'goods/'+options.id,
      method:'GET',
      success:function(res) {
        if(res.statusCode == 200 && res.data.code == 200) {
          var goods = res.data.data
          that.setData({
            images:goods.images,
            name: goods.name,
            price: goods.price,
            originalPrice:goods.originalPrice,
            introduction: goods.introduction
          })
        }
      }
    })
    this.setData({
      nav_width: 100 / this.data.table.length
    })
  },

  ActiveClick: function (e) {
    this.setData({
      activeIndex: e.currentTarget.dataset.index
    })
    console.log(this.data.activeIndex)
  },

  swipClick: function (e) {
    console.log(this.data.swiperCurrent);
    wx.switchTab({
      url: this.data.goodsLinks[this.data.swiperCurrent]
    })
  }


})


