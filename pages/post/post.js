// pages/post/post.js
const qiniuUploader = require("../../utils/qiniuUploader");
const regeneratorRuntime = require("../../utils/regenerator-runtime/runtime");

function initQiniu() {
  var options = {
    region: 'SCN',
    uptokenURL: 'http://localhost:8080/media/token',
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
  // takePhoto: function(){
  //   let that = this;
  //   const ctx = wx.createCameraContext()
  //   ctx.takePhoto({
  //     quality: 'high',
  //     success: (res) => {
  //       if(that.data.imageCount>0){
  //         if(that.data.imageCount==1){
  //           that.setData({
  //             takePhoto: false
  //           })
  //         }
  //         var tempImagePath = res.tempImagePath;
  //         var images = that.data.images;
  //         images.push(tempImagePath);
  //         console.log("push a temp image to data: " + tempImagePath);
  //         var imageCount = that.data.imageCount - 1;
  //         this.setData({
  //           images: images,
  //           imageCount: imageCount
  //         })
  //       }else{
  //         console.log("take photo fail")
  //       }
  //     }
  //   })
  // },
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
  upload: function() {
    this.imgUpload()
  },
  imgUpload: async function() {
    initQiniu();
    let that = this;
    var images = that.data.images;

    for (var i = 0; i < 3; i++) {
      if (images[i]) {
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
    console.log(this.data.imagePath)
  }
})