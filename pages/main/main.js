import loginBehavior from '../../behaviors/login-behavior'

const app = getApp();

Page({
  behaviors: [loginBehavior],
  data: {
    user: '',
    motto: 'Hello World',
  },
  watch: {
    user: (newVal, old) => {
      console.log(newVal, old)
    }
  },
  onLoad(options) {
    console.log(this.data.userInfo)
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

  toFun(e) {
    console.log(e,'测试自动化结果')
  }

});