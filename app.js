App({
  onLaunch() {

  },
  onShow(res) {
    // 用来做签约成功/失败逻辑标记
    this.globalData.isFromPayCore = setFromPayCore(res)
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
    
  }
})