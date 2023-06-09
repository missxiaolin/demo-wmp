function getdateNoTime(date) {
  var now = new Date(parseInt(date * 1000)),
    y = now.getFullYear(),
    m = now.getMonth() + 1,
    d = now.getDate();

  return y + '-' + (m < 10 ? '0' + m : m) + '-' + (d < 10 ? '0' + d : d)
}

/**
 * 签约失败逻辑
 * @param {*} res 
 */
function setFromPayCore(res) {
  let isFromPayCore = 0
  if (res.scene === 1038) { // 场景值1038：从被打开的小程序返回
    const {
      appId,
      extraData
    } = res.referrerInfo
    if (appId == 'wxbd687630cd02ce1d') { // appId为wxbd687630cd02ce1d：从签约小程序跳转回来
      if (typeof extraData == 'undefined') {
        // 客户端小程序不确定签约结果，需要向商户侧后台请求确定签约结果
        isFromPayCore = 1
        return;
      }
      if (extraData.return_code == 'SUCCESS') {
        // 客户端小程序签约成功，需要向商户侧后台请求确认签约结果
        isFromPayCore = 1
        return;
      }
    }
  }
  return isFromPayCore
}

/**
 * JS对象深度合并
 * @param {*} target 
 * @param {*} source 
 */
export function deepMerge(target = {}, source = {}) {
  target = deepClone(target);
  if (typeof target !== 'object' || typeof source !== 'object') return false;
  for (const prop in source) {
    if (!source.hasOwnProperty(prop)) continue;
    if (prop in target) {
      if (typeof target[prop] !== 'object') {
        target[prop] = source[prop];
      } else {
        if (typeof source[prop] !== 'object') {
          target[prop] = source[prop];
        } else {
          if (target[prop].concat && source[prop].concat) {
            target[prop] = target[prop].concat(source[prop]);
          } else {
            target[prop] = deepMerge(target[prop], source[prop]);
          }
        }
      }
    } else {
      target[prop] = source[prop];
    }
  }
  return target;
}


export {
  getdateNoTime,
  setFromPayCore,
  deepMerge
}