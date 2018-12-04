// pages/aboutme/aboutme.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: null,
    isLogin: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

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
  login: function(e) {

    let that = this

    var detail = e.detail
    console.log(detail)
    var userInfo = detail.userInfo

    wx.showLoading({
      title: '登录中',
    })
    //调用wx.login接口
    wx.login({

      //成功获取code后将code和用户加密数据发送到服务器
      success: (res) => {

        if (res.code) {
          wx.request({
            url: 'http://localhost:8080/login',
            method: 'POST',
            header: {
              'content-type': 'application/json',
              'appname': 'wechatminiprogram'
            },
            data: {
              code: res.code,
              encryptedData: detail.encryptedData,
              iv: detail.iv
            },
            success: (res) => {

              if (res.data.code == 200) {
                //登录成功
                wx.setStorageSync('token', res.data.data.sessionKey)
                that.setData({
                  isLogin:false,
                  userInfo:userInfo
                })
              }


            }
          })
        }




      }


    })
    setTimeout(function(){
      wx.hideLoading()
    },2000)


  }
})