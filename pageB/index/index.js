Page({
  path: "pageB/index/index",
  /**
   * 页面的初始数据
   */
  data: {

  },
  registerPreload(e) {
    console.log(e)
    setTimeout(() => {
      console.log(`页面B预加载请求完成`)
    }, 2000)
  },
  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

})