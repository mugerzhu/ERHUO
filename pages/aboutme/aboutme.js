// pages/aboutme/aboutme.js
const app = getApp()
const url = app.globalData.server
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad:function(options) {
    let that = this
    var token = wx.getStorageSync('token');
    var userInfo = wx.getStorageSync('userInfo');
    that.setData({
      userInfo:userInfo
    })
    if (!token) {
      wx.redirectTo({
        url: '/pages/login/login',
      })
    }
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

  },
  hint:function(){
    wx.showToast({
      title: '假的，别点了',
      icon:'none',
      duration:2000
    })
  },
  toPostPage:function() {
    wx.navigateTo({
      url: '/pages/post/post',
    })
  },
  toMyPostPage:function(){
    wx.showToast({
      title: '来不及做了',
      icon: 'none',
      duration: 2000
    })
  }
})