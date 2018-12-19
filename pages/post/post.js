// pages/post/post.js
const qiniuUploader = require("../../utils/qiniuUploader");
const regeneratorRuntime = require("../../utils/regenerator-runtime/runtime");

const url = 'https://api.zdhspace.cn/'

function initQiniu() {
  var options = {
    region: 'SCN',
    uptokenURL: url+'media/token',
    domain: 'http://media.zdhspace.cn/',
    shouldUseQiniuFileName: true
  };
  qiniuUploader.init(options);
}

var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    images: [],
    imagePath: []
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
  error: function(e) {
    console.log(e.detail)
  },
  chooseImage: function() {
    let that = this;
    wx.chooseImage({
      count: 3,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        const tempFilePaths = res.tempFilePaths;
        that.setData({
          images: tempFilePaths
        })
      }
    })
  },
  upload: async function(e) {
    wx.showLoading({
      title: '正在提交',
    })
    initQiniu();
    let that = this;
    var images = that.data.images;
    // 文件上传至七牛云存储
    for (var i = 0; i < 3; i++) {
      if (images[i]) {
        // 异步操作 同步化
        var p = await new Promise(function(resolve, reject) {
          qiniuUploader.upload(images[i], (res) => {
            that.data.imagePath[i] = res.imageURL
            console.log(res.imageURL)
            console.log(i)
            resolve();
          }, (error) => {
            console.error('error: ' + JSON.stringify(error));
            reject();
          });
        });
      }
    }

    // 提交表单
    wx.request({
      url: url+'goods',
      method: 'POST',
      header:{
        'token':app.globalData.token
      },
      data: {
        'name': e.detail.value.name,
        'originalPrice': e.detail.value.original_price,
        'price': e.detail.value.price,
        'contact': e.detail.value.contact,
        'introduction':e.detail.value.introduction,
        'images': this.data.imagePath
      },
      dataType: 'JSON',
      success:function(res) {
        if(res.data.code == 200) {
          wx.switchTab({
            url: '/pages/index/index',
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