Page({
  data: {
    list: [],          // 所有数据
    visualIndex: [0],          //  展示区域
    pageHeight: [],
  },
  //options(Object)
  onLoad: function (options) {
    this.index = 0;
    this.currentIndex = 0;           // 当前页数 pageNum
    this.pageHeight = [];            // 每屏高度存储
    this.allList = [];               // 获取到的所有数据
    this.systemHeight = 0;           // 屏幕高度
    this.visualIndex = [];           // 存储可视区域pageNum
    const arr = [
      {
        idx: this.index++
      },
      {
        idx: this.index++
      },
      {
        idx: this.index++
      },
      {
        idx: this.index++
      },
      {
        idx: this.index++
      },




    ]
    this.setData({ [`list[${this.currentIndex}]`]: arr }, () => {

      this.setPageHeight();
    });
    this.observePage(this.currentIndex)
    this.getSystemInfo();
  },
  // 获取屏幕高度
  getSystemInfo () {

    wx.getSystemInfo({
      success: (res) => {
        let { windowHeight } = res;
        this.systemHeight = windowHeight;
      }
    })
  },
  // 获取每屏高度
  setPageHeight () {
    let that = this;
    let currentIndex = this.currentIndex;
    let query = wx.createSelectorQuery();
    query.select(`#item${currentIndex}`).boundingClientRect()
    query.exec(function (res) {
      that.pageHeight[currentIndex] = res[0] && res[0].height;
      that.setData({
        pageHeight: that.pageHeight
      })
    })
  },

  onReachBottom: function () {
    this.currentIndex++;            // 触底+1
    const arr = [
      {
        idx: this.index++
      },
      {
        idx: this.index++
      },
      {
        idx: this.index++
      },
      {
        idx: this.index++
      },
      {
        idx: this.index++
      },

    ]
    this.setData({
      [`list[${this.currentIndex}]`]: arr
    }, () => {
      this.setPageHeight()
    })
    this.observePage(this.currentIndex)
  },
  

  //视图监听
  observePage: function (pageNum) {
    const that = this;
    const observerView = wx.createIntersectionObserver(this).relativeToViewport({ top: 0, bottom: 0});
    observerView.observe(`#item${pageNum}`, (res) => {
      if (res.intersectionRatio > 0) {
        that.setData({
          visualIndex: [pageNum - 1, pageNum, pageNum + 1]
        })

      }
    })
  }

});