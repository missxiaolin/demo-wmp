import loginBehavior from '../../behaviors/login-behavior'
import inject from '../../plugin/inject'

const app = getApp();

Page(
  // 注入 plugin
  inject({
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
      this.showToast({
        text: '测试1111',
        icon: '',
        time: 2000,
        success:() => {
          console.log(1111)
        }
      })
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
      console.log(e, '测试自动化结果')
    }


  }));