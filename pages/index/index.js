const {
  WxHttp
} = require("../../pack/core/http")
// 获取应用实例
const app = getApp()

Page({
  path: "pages/index/index",
  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.$$on('testEvent', this, (data) => {
      console.log(data)
    })
    // this.$preload('/pageB/index/index')
    // this.httpTest()
  },
  
  onEventEmit() {
    // this.httpTest()
    // 发布订阅模拟
    // this.$$emit('testEvent','这里是首页的button')
    // 预加载第二个页面数据 方案1
    // this.$route('pageB/index/index',{a: 1},true)
    // 预加载第二个页面数据 方案2
    // this.$preload('pageB/index/index', {a: 1})
    // wx.navigateTo({
    //   url: "/pageB/index/index"
    // })
  },

  //请求模拟
  async httpTest() {
    const res = await this.$http({
      baseUrl: 'https://mock.apipost.cn/app/mock/project/b28f1d33-3071-48cf-b24f-83b2ad28537a/',
      url: 'aaa/bb/cc/api',
      method: 'GET'
    })
    console.info(`请求结果${JSON.stringify(res)}`)
  }

})