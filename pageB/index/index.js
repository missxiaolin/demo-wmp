Page({
  path: "pageB/index/index",
  /**
   * 页面的初始数据
   */
  data: {
    time: ""
  },
  registerPreload(e) {
    console.log(e)
    this.$setState({
      time: e.a
    })
    
    setTimeout(() => {
      console.log(`页面B预加载请求完成`)
      
    }, 0)
  },
  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

})