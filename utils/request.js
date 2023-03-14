import config from "./config";
const app = getApp()

class Request {
  constructor(option) {
    let baseConfig = {
      baseUrl: config.baseUrl,
    };
    this.config = {
      ...baseConfig,
      ...option,
    };
    // 设置请求头
    this.header = {
      "Content-Type": "application/json",
    };
  }

  /**
   * 公共请求
   * @param {*} param0
   */
  request({ url, data, method, timeout = 10000 }) {
    return new Promise((resolve, reject) => {
      this._request(
        url,
        resolve,
        reject,
        data,
        method,
        timeout,
        this.config.baseUrl
      );
    });
  }

  /**
   * 获取当前页面
   * @return {?}
   */
  getPage() {
    try {
      let page = getCurrentPages()[getCurrentPages().length - 1].route;
      return page.toLowerCase();
    } catch {
      return "";
    }
  }

  /**
   * 发送请求
   * @param {*} url 
   * @param {*} resolve 
   * @param {*} reject 
   * @param {*} data 
   * @param {*} method 
   * @param {*} timeout 
   * @param {*} baseUrl 
   */
  async _request(url, resolve, reject, data, method, timeout, baseUrl) {
    let self = this;
    let token = wx.getStorageSync("token");
    this.header["x-token"] = token;
    let requestObj = {
      url: `${baseUrl}${url}`,
    };
    // 记录请求发起时间
    wx.request({
      ...requestObj,
      data: data,
      header: this.header,
      method: method ? method : "POST",
      dataType: "json",
      timeout: timeout,
      success: (res) => {
        console.log(url, res)
        // token 失效 的编码需要补充
        if ([700].indexOf(res.data.code) > -1) {
          this.userLogin(() => {
            self._request(url, resolve, reject, data, method, timeout, baseUrl);
          });
          return false;
        }
        resolve(res.data);
      },
      fail: (res) => {
        reject(res);
      },
    });
  }

  /**
   * 登录
   * @param {*} cal
   */
  userLogin(cal) {
    this.getWxLogin((code) => {
      if (!code) {
        cal();
        return;
      }
      let param = {
        url: "/login",
        data: {
          register_source: getApp().globalData.scene,
          code: code,
        },
      };

      this.request(param).then((res) => {
        if (res.code == 0) {
          let useData = res.data || {};
          let { token = "" } = useData;
          wx.setStorageSync("token", token);

          if (cal) {
            cal();
          }
        }
      });
    });
  }

  /**
   * 微信登录
   * @param {*} cal 回调函数
   */
  getWxLogin(cal) {
    wx.login({
      success: (res) => {
        cal(res.code);
      },
      fail: (res) => {
        cal("");
      },
    });
  }

  /**
   * 使用loding
   * @param {*} data
   */
  loding(data) {
    wx.showLoading({
      content: "加载中",
      delay: 500,
    });
    return this;
  }
}

export default Request;
