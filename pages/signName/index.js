// canvas 全局配置
var context = null;
var isButtonDown = false;
var arrx = [];
var arry = [];
var arrz = [];
var canvasw = 0;
var canvash = 0;
//注册页面
Page({
  canvasIdErrorCallback: function (e) {
    console.error(e.detail.errMsg)
  },
  //开始
  canvasStart: function (event) {
    isButtonDown = true;
    arrz.push(0);
    arrx.push(event.changedTouches[0].x);
    arry.push(event.changedTouches[0].y);

  },
  data: {
    src: "",
    img: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=578899140,1412678472&fm=27&gp=0.jpg",
    rpx: ''
  },

  onLoad: function (options) {
    var that = this
    // 使用 wx.createContext 获取绘图上下文 context
    context = wx.createCanvasContext('canvas');
    context.beginPath()
    context.setStrokeStyle('#000000');
    context.setLineWidth(4);
    context.setLineCap('round');
    context.setLineJoin('round');

    // context.drawImage('../../images/img111.png', 0, 0, canvasw, 500);
    context.draw();
  },

  //过程
  canvasMove: function (event) {
    var that = this
    if (isButtonDown) {
      arrz.push(1);
      console.log(event)
      arrx.push(event.changedTouches[0].x);
      arry.push(event.changedTouches[0].y);
    };

    for (var i = 0; i < arrx.length; i++) {
      if (arrz[i] == 0) {
        context.moveTo(arrx[i], arry[i])
      } else {
        context.lineTo(arrx[i], arry[i])
      };

    };
    context.clearRect(0, 0, canvasw, canvash);
    context.setStrokeStyle('#000000');
    context.setLineWidth(4);
    context.setLineCap('round');
    context.setLineJoin('round');
    context.stroke();

    context.draw(false);
  },
  // 点击保存图片
  clickMe: function () {
    wx.canvasToTempFilePath({
      canvasId: 'canvas',
      fileType: 'jpg',
      success: function (res) {
        console.log(res)
        wx.saveImageToPhotosAlbum({
          filePath: res.tempFilePath,
          success(res) {
            console.log(res)
            wx.hideLoading();
            wx.showToast({
              title: '保存成功',
            });
            // //存入服务器
            // wx.uploadFile({
            //   url: 'a.php', //接口地址
            //   filePath: res.tempFilePath,
            //   name: 'file',
            //   formData: {                                 //HTTP 请求中其他额外的 form data 
            //     'user': 'test'
            //   },
            //   success: function (res) {
            //     console.log(res);

            //   },
            //   fail: function (res) {
            //     console.log(res);
            //   },
            //   complete: function (res) {
            //   }
            // });
          },
          fail() {
            wx.hideLoading()
          }
        })
      }
    })
  },
  canvasEnd: function (event) {
    isButtonDown = false;
  },
  cleardraw: function () {
    //清除画布
    arrx = [];
    arry = [];
    arrz = [];
    context.draw(false);
  },

})