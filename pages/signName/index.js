// pages/signName/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  onShow() {
    this.initCanvas()
    // this.initCanvas('canvas-level')
  },

  initCanvas(canvasId = 'canvas-vertical') {
    this.canvasId = canvasId
    const nodeId = '#' + canvasId
    wx.createSelectorQuery()
      .select(nodeId) // 在 WXML 中填入的 id
      .fields({
        node: true,
        size: true
      })
      .exec(res => {
        console.log(res, 'res------')
        // Canvas 对象
        const canvas = res[0].node
        this.canvas = canvas
        // Canvas 画布的实际绘制宽高
        const renderWidth = res[0].width
        const renderHeight = res[0].height
        // Canvas 绘制上下文
        const ctx = canvas.getContext('2d')
        this.ctx = ctx

        // 初始化画布大小
        const dpr = wx.getWindowInfo().pixelRatio
        canvas.width = renderWidth * dpr
        canvas.height = renderHeight * dpr
        this.width = canvas.width
        this.height = canvas.height
        ctx.scale(dpr, dpr)
        this.isDrawed = false
      })
  },
  catchtouchstart(e) {
    // 竖屏与横屏绘画位置计算
    if (this.canvasId === 'canvas-vertical') {
      this.ctx.moveTo(e.changedTouches[0].clientX - e.currentTarget.offsetLeft, e.changedTouches[0].clientY - e.currentTarget.offsetTop)
    } else {
      this.ctx.moveTo(e.changedTouches[0].clientX, e.changedTouches[0].clientY)
    }
  },
  catchtouchmove(e) {
    // if (this.drawState == "stop") { return }
    // this.drawState = "ing"
    if (e.touches.length > 1) {
      return
    }
    this.ctx.strokeStyle = '#000000'
    this.ctx.lineWidth = 3
    this.ctx.lineCap = 'round'
    this.ctx.lineJoin = 'round'
    if (this.canvasId === 'canvas-vertical') {
      this.ctx.lineTo(e.changedTouches[0].clientX - e.currentTarget.offsetLeft, e.changedTouches[0].clientY - e.currentTarget.offsetTop)
    } else {
      this.ctx.lineTo(e.changedTouches[0].clientX, e.changedTouches[0].clientY)
    }
    if (this.canvasId === 'canvas-vertical') {
      this.ctx.moveTo(e.changedTouches[0].clientX - e.currentTarget.offsetLeft, e.changedTouches[0].clientY - e.currentTarget.offsetTop)
    } else {
      this.ctx.moveTo(e.changedTouches[0].clientX, e.changedTouches[0].clientY)
    }
    this.ctx.stroke()
  },

  canvasToImg() {
    const id = this.canvasId
    let picUrl
    // if (this.drawState == "init") { return }
    const that = this
    this.ctx.fillStyle = '#F7F7F7'
    if (this.isDrawed) {
      setTimeout(() => {
        wx.canvasToTempFilePath({
          fileType: 'png',
          canvas: this.canvas,
          success: res => {
            const obj = {}
            // 让后端进行图片的翻转，因为横屏时绘制的签名是横的
            if (that.canvasId === 'canvas-vertical') {
              obj.isFlip = 0
              obj.angle = 0
            } else {
              obj.isFlip = 1 // 是否翻转
              obj.angle = -90 // 翻转角度
            }
            uploadPicture(res.tempFilePath, 'relation', obj).then(res => {
              // that.drawState = "stop"
              that.isShow = false
              picUrl = res
              // that.clearRefer()
              that.$apply()
              that.$emit('ok', res)
            })
          }
        })
      })
    } else {
      this.toast('请进行签名')
    }
  },
})