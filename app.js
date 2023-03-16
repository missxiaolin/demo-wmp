require('./pack/page_extends') // 拓展Page构造函数
// app.js
import './pack/core/index'
const watch = require("./pack/watch");

App({
  setWatcher(page) { //设置全局watch监听,在每个页面中调用getApp().setWatcher(this)方法
    watch.setWatcher(page);
  },
  onLaunch() {

  },
  onShow(res) {
  },
  toast(title, duration = 2000) { //toast 提示
    wx.showToast({
      title,
      icon: 'none',
      mask: true,
      duration
    })
  },
  globalData: {
    userInfo: null
  }
})