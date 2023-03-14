const app = getApp();

Page({
  data: {
    user: ''
  },
  watch: {
    user: (newVal, old) => {
      console.log(newVal, old)
    }
  },
  onLoad(options) {
    app.setWatcher(this)
    setTimeout(() => {
      this.setData({
        user: 1
      })
    }, 2000)
  },

  onShow() {
    if (typeof this.getTabBar === "function" && this.getTabBar()) {
      this.getTabBar().setData({
        //唯一标识（其它设置不同的整数）
        selected: 0,
      });
    }
  },

  
});