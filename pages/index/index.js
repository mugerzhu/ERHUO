// pages/index/index.js
const url = 'https://api.zdhspace.cn/'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    goods: [],
    page:1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: '加载中',
    })
      let that = this
      let res = wx.getSystemInfoSync();
      let boxHeight = res.windowHeight;
      this.setData({
        boxHeight: boxHeight
      })
      wx.request({
        url: url+'goods/page/'+that.data.page,
        success: function(res) {
          if(res.data.code==200){
            that.setData({
              goods:res.data.data
            })

          }
          console.log(res.data.data)
        },
        complete:function() {
          wx.hideLoading();
        }
      })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    let that = this;
    that.setData({
      goods:that.data.goods
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    let that = this
    var page = that.data.page;
    wx.request({
      url: url+'goods/page/'+(page+1),
      success:function(res) {
        if(res.data.code==-1){
          wx.showToast({
            title: '没有了',
            icon: 'success',
            duration: 2000
          })
        }else if(res.data.code == 200) {
          var goods = that.data.goods
          goods = goods.concat(res.data.data)
          that.setData({
            goods:goods,
            page:page+1
          })
          console.log(goods)
        }
      }
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})