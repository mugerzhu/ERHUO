// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goods: [{ goodsName: 'Java核心技术 卷I：基础知识（原书第10版）全新第10版！Java领域极具影响力和价值的著作之一，与《Java编程思想》齐名，10余年全球畅销不衰，广受好评', goodsImage: 'http://img3m6.ddimg.cn/86/32/24035306-1_b_6.jpg', goodsPrice: 93.50 }, { goodsName: '疯狂Java讲义（第4版）10年经典原创读物，覆盖Java 8，Java 9，李刚作品成为50万读者之选，本书赠送包含1500分钟课程讲解的视频、源代码、电子书、课件、面试题，提供微信+QQ答疑群，配套学习交流网站', goodsImage: 'http://img3m9.ddimg.cn/12/17/23532609-1_b_4.jpg', goodsPrice: 81.70 }, { goodsName: 'Java EE互联网轻量级框架整合开发— —SSM框架（Spring MVC+Spring+MyBatis）和RediSSM框架在手，升职加薪我有', goodsImage: 'http://img3m1.ddimg.cn/60/3/25111311-1_b_2.jpg', goodsPrice: 82.10 }, { goodsName: 'Java核心技术 卷I：基础知识（原书第10版）全新第10版！Java领域极具影响力和价值的著作之一，与《Java编程思想》齐名，10余年全球畅销不衰，广受好评', goodsImage: 'http://img3m6.ddimg.cn/86/32/24035306-1_b_6.jpg', goodsPrice: 93.50 }],
    imgUrls: ['https://dummyimage.com/1000x500/38F/fff.png&Test','https://dummyimage.com/1000x500/3F3/fff.png&Test']
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      let res = wx.getSystemInfoSync();
      let boxHeight = res.windowHeight;
      this.setData({
        boxHeight: boxHeight
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

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  dorequest: function(){
    wx.request({
      url: 'http://127.0.0.1:8080/hello',
      success: function(res){
        console.log("invoke success!"+res.data+res.statusCode);
      },
      fail: function(statusCode){
        console.log("invoke fail!");
      }
    })
  },
  toDetails: function(){
    console.log("ai ya");
  }
})