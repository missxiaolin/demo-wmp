import Crypto from '../lib/crypto'
import Base64 from '../lib/base64'

/**
 * @param {*} filename 
 * @returns 
 */
function get_suffix(filename) {
  let pos = filename.lastIndexOf('.')
  let suffix = ''
  if (pos != -1) {
    suffix = filename.substring(pos)
  }
  return suffix;
}

/**
 * @param {*} len 
 * @returns 
 */
function random_string(len) {
  len = len || 32;
  let chars = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678";
  let maxPos = chars.length;
  let pwd = "";
  for (let i = 0; i < len; i++) {
    pwd += chars.charAt(Math.floor(Math.random() * maxPos));
  }
  return pwd;
}

/**
 * 生成oss 上传配置
 * @param {*} res 
 * @param {*} file 
 * @returns 
 */
export default function getOptions(res, file) {
  let policyText = {
    expiration: res.Expiration, //设置该Policy的失效时间，超过这个失效时间之后，就没有办法通过这个policy上传文件了
    conditions: [
      ["content-length-range", 0, 1048576000] // 设置上传文件的大小限制
    ]
  };
  let policyBase64 = Base64.encode(JSON.stringify(policyText));
  let message = policyBase64;
  let bytes = Crypto.HMAC(Crypto.SHA1, message, res.AccessKeySecret, {
    asBytes: true
  });
  let signature = Crypto.util.bytesToBase64(bytes);

  return {
    success_action_status: 200,
    AccessKeySecret: res.AccessKeySecret,
    key: `${random_string(20)}${get_suffix(file)}`,
    OSSAccessKeyId: res.AccessKeyId,
    signature: signature,
    policy: policyBase64,
    "x-oss-security-token": res.SecurityToken
  };
}