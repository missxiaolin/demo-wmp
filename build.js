const fileSave = require('file-save')
// 整体配置
let appConfig = require('./appConfig')
appConfig.window.navigationBarTitleText = '配置title'

fileSave('./app.json').write(`${JSON.stringify(appConfig)}`, 'utf8')

// 小程序内容配置文件
const dataConfig = {
}

fileSave('./utils/appConfig.js').write(`const dataConfig = ${JSON.stringify(dataConfig)};export default dataConfig;`, 'utf8')

// 域名配置
let appTestConfig = {
  baseUrl: "", // 请求域名
  uploadFileUrl: "", // 上传域名
}

let appPrdConfig = {
  baseUrl: "", // 请求域名
  uploadFileUrl: "", // 上传域名
}

let configText = `import { env } from './env';let appTestConfig =${JSON.stringify(appTestConfig)};let appPrdConfig = ${JSON.stringify(appPrdConfig)};let appConfig = env != 'prd' ? appTestConfig : appPrdConfig;export default {...appConfig};`



fileSave('./utils/config.js').write(`${configText}`, 'utf8')