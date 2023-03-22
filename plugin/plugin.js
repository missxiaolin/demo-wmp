export default {
  $data: {
    $toast: {
      show: false,
      text: '',
      icon: ''
    }
  },
  /**
   * 生命周期函数--监听onLoad
   */
  loadHooker: function (onLoad, onLogin) {
    return function (option) {
      // 不管三七二十一 先调了onLoad再说
      onLoad.call(this, option);
    };
  },

  /**
   * 显示toast
   * @param {*} obj 
   */
  showToast(obj) {
    let { text = '', icon = '', time = 2000, success = undefined } = obj
    if (!!success && typeof success != 'function') {
      console.error('success 类型错误')
      return
    }
    this.setData({
      $toast: {
        show: true,
        text,
        icon,
        success
      }
    })
    if (!!time) {
      setTimeout(() => {
        this.clearToast()
      }, time)
    }
  },
  
  clearToast() {
    let toast = this.data.$toast
    if (!!toast.success && typeof toast.success == 'function') toast.success()
    this.setData({
      $toast: {
        show: false,
        text: '',
        icon: ''
      }
    });

  }
};