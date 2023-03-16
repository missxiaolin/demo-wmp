import {
  Config
} from './config.js';
var Fly = require("./wx")
var fly = new Fly();
//添加拦截器
var Loadingtime = ''
fly.interceptors.request.use((config, promise) => {
  //给所有请求添加自定义header
  config.headers["token"] = wx.getStorageSync('token');
  return config;
})
fly.interceptors.response.use(
  (response) => {
    if (response.data.code == 401 || response.data.code == 503) {
      
    } else if (response.data.code == 403) {
      
    }
  },
  (err) => {

  }
)
//配置请求基地址
fly.config.baseURL = Config.restUrl
export default {
  fly: fly
}