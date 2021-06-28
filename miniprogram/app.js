//app.js
App({
  onLaunch: function () {
    wx.cloud.init({
      env: 'onehands-8gt9feadad3b9139',
      traceUser:true
    })
  }
})
