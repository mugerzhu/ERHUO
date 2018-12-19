// pages/login/login.js
const app = getApp()
const url = 'https://api.zdhspace.cn/'
Page({

  /**
   * 页面的初始数据
   */
  data: {

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
  login: function() {

    wx.showLoading({
      title: '登录中',
    })
    
    //检查用户是否已授权登录权限
    wx.getSetting({
      success: function(res) {
        if (!res.authSetting['scope.userInfo']) {
          wx.authorize({
            scope: 'scope.userInfo'
          })
        }
      }
    })

    //查询缓存中是否有数据
    var userInfo = wx.getStorageSync('userInfo');

    if (!userInfo) {
      wx.getUserInfo({
        lang: 'zh_CN',
        success: function(res) {
          userInfo = res.userInfo
          console.log(userInfo)
          wx.setStorageSync('userInfo', res.userInfo)
        }
      })
    }
    //获取用户基本信息

    //开始登录

    wx.login({

      //成功获得code
      success: function(res) {
        if (res) {
          //向服务器发送code
          wx.request({
            url: url+'login',
            method: 'POST',
            dataType: 'json',
            data: {
              'code': res.code,
              'gender': userInfo.gender,
              'nickName': userInfo.nickName,
              'province': userInfo.province,
              'city': userInfo.city,
              'avatarUrl': userInfo.avatarUrl
            },
            //请求发送成功
            success: function(res) {
              //res 对象 三个属性 data header statusCode(服务器返回的http状态码)
              if (res.statusCode == 200) {

                if (res.data.code == 200) {
                  wx.setStorage({
                    key: 'token',
                    data: res.data.data.sessionKey,
                    //缓存token成功
                    success: function() {
                      
                      app.globalData.token = res.data.data.sessionKey
                      //页面跳转
                      wx.switchTab({
                        url: '/pages/index/index',
                      })
                    }
                  });
                }
              }
            }
          })
        }
      },
      fail: function() {

      },
      complete: function() {
        wx.hideLoading()
      }
    })
  }
})