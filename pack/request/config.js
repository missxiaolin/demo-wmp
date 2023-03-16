const ENV = {
  DEV: "dev",
  PRO: "pro", 
};    
const Config = {
  env: ENV.PRO,   
  version: "v1.0.0",            
}; 
if (Config.env == "dev") { 
  Config.url = "https://test.citytansuo.com"; //测试环境
} else if (Config.env == "pro") { 
  Config.url = "https://master.citytansuo.com"; //生产环境环境
} 
Config.restUrl = Config.url + "/api";
export {
  Config
};