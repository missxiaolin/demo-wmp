let env = "prd";

const accountInfo = wx.getAccountInfoSync();
// miniProgram.envVersion的合法值：develop开发版、trial体验版、release正式版
const _env = accountInfo.miniProgram.envVersion;
console.log(accountInfo)
if (_env !== "release") {
  env = "test";
}

export {
  env
};
