//app.js
const regeneratorRuntime = require("utils/regenerator-runtime/runtime");
App({
  onLaunch:async function () {
    let that = this
    var p = await new Promise(function(resolve, reject){
      var token = wx.getStorageSync('token');
      if (token) {
        wx.switchTab({
          url: '/pages/index/index',
        })
        that.globalData.token = token
        console.log(that.globalData.token)
        resolve()
      }
    })
    
  },
  globalData: {
    
  }
})