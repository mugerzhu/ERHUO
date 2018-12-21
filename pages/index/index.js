// pages/index/index.js
const app = getApp()
const url = app.globalData.server

Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodsInformation: ['http://media.zdhspace.cn/tmp/wx718a9776b3bcd449.o6zAJs_t0txItkop9QTktRWe1R08.5XdcRgVuTR2c78b8220dd4e61bf43b6d16b199e944bd.jpg', 'http://media.zdhspace.cn/tmp/wx718a9776b3bcd449.o6zAJs_t0txItkop9QTktRWe1R08.5d3AAwfngy8I2a5ad4c7f6904de35cbae0cbc268142f.jpg', 'http://media.zdhspace.cn/tmp/wx718a9776b3bcd449.o6zAJs_t0txItkop9QTktRWe1R08.hXn7S6j5gAPIb843014b4f4aa9963433d8accde4ac58.jpg', "http://media.zdhspace.cn/tmp/wx718a9776b3bcd449.o6zAJs_t0txItkop9QTktRWe1R08.Fr2vTu1cHb7Z53fabb71f47f7f8068e6c3320bf37e9c.jpg", "http://media.zdhspace.cn/tmp/wx718a9776b3bcd449.o6zAJs_t0txItkop9QTktRWe1R08.VW8gllU8R0Nz8f6f0f4d35da2b1cafa9411b44d25384.jpg"],
    goods: [],
    page: 1,
    imageUrls: ['https://dummyimage.com/600x400/37edc2/fff.jpg', 'https://dummyimage.com/600x400/cc744b/000.jpg'],
    oldgoods: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let that = this
    let res = wx.getSystemInfoSync();
    let boxHeight = res.windowHeight;
    this.setData({
      boxHeight: boxHeight
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    let that = this
    wx.request({
      url: url + 'goods/list',
      success: function(res) {
        if (res.statusCode == 200 && res.data.code == 200) {
          that.onLoad()
          that.setData({
            goods: res.data.data
          })
        }
      }
    })

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})