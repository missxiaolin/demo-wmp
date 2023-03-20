module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1679299223561, function(require, module, exports) {
var __importDefault=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};const Automator_1=__importDefault(require("./Automator"));module.exports=new Automator_1.default;
}, function(modId) {var map = {"./Automator":1679299223562}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679299223562, function(require, module, exports) {
var __createBinding=this&&this.__createBinding||(Object.create?function(e,t,n,l){void 0===l&&(l=n),Object.defineProperty(e,l,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,l){void 0===l&&(l=n),e[l]=t[n]}),__setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),__importStar=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.hasOwnProperty.call(e,n)&&__createBinding(t,e,n);return __setModuleDefault(t,e),t},__importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});const Launcher_1=__importDefault(require("./Launcher")),Element_1=__importStar(require("./Element"));class Automator{constructor(){this.launcher=new Launcher_1.default,this.Element=Element_1.default,this.CustomElement=Element_1.CustomElement,this.InputElement=Element_1.InputElement,this.ScrollViewElement=Element_1.ScrollViewElement,this.SwiperElement=Element_1.SwiperElement,this.MovableViewElement=Element_1.MovableViewElement,this.SwitchElement=Element_1.SwitchElement,this.SliderElement=Element_1.SliderElement,this.ContextElement=Element_1.ContextElement}async connect(e){return await this.launcher.connect(e)}async launch(e){return await this.launcher.launch(e)}}exports.default=Automator;
}, function(modId) { var map = {"./Launcher":1679299223563,"./Element":1679299223568}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679299223563, function(require, module, exports) {
var __importDefault=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(exports,"__esModule",{value:!0});const path_1=__importDefault(require("path")),Connection_1=__importDefault(require("./Connection")),MiniProgram_1=__importDefault(require("./MiniProgram")),child_process_1=__importDefault(require("child_process")),isEmpty_1=__importDefault(require("licia/isEmpty")),extendDeep_1=__importDefault(require("licia/extendDeep")),getPort_1=__importDefault(require("licia/getPort")),toStr_1=__importDefault(require("licia/toStr")),isWindows_1=__importDefault(require("licia/isWindows")),fs_1=__importDefault(require("licia/fs")),waitUntil_1=__importDefault(require("licia/waitUntil")),concat_1=__importDefault(require("licia/concat")),sleep_1=__importDefault(require("licia/sleep")),endWith_1=__importDefault(require("licia/endWith")),isRelative_1=__importDefault(require("licia/isRelative"));class Launcher{async launch(t){const{cliPath:e=await this.resolveCliPath(),timeout:i=3e4,projectConfig:r={},ticket:a="",cwd:o="",account:l=""}=t;let{args:c=[]}=t,{projectPath:n}=t;const s=await getPort_1.default(t.port||9420);if(t.port&&t.port!==s)throw Error(`Port ${t.port} is in use, please specify another port`);if(!e)throw Error("Wechat web devTools not found, please specify cliPath option");if(isWindows_1.default&&endWith_1.default(e,".exe"))throw Error("cliPath is not correct, it's usually named as 'cli' or 'cli.bat'");if(!n)throw Error("projectPath is not provided");if(isRelative_1.default(n)&&(n=path_1.default.resolve(n)),!await fs_1.default.exists(n))throw Error(`Project path ${n} doesn't exist`);isEmpty_1.default(r)||await this.extendProjectConfig(r,n);const u={stdio:"ignore"};o&&(u.cwd=o);let _=null,p=!1;c=concat_1.default(c,["auto","--project",n,"--auto-port",toStr_1.default(s)]),l?c=concat_1.default(c,["--auto-account",l]):a&&(c=concat_1.default(c,["--ticket",a]));try{const t=child_process_1.default.spawn(e,c,u);t.on("error",(t=>{_=t})),t.on("exit",(()=>{setTimeout((()=>{p=!0}),15e3)}))}catch(t){_=t}let f=null;if(await waitUntil_1.default((async()=>{try{return _||p||(f=await this.connectTool({wsEndpoint:`ws://127.0.0.1:${s}`})),!0}catch(t){return!1}}),i,1e3),f)await f.checkVersion();else{if(_)throw Error("Failed to launch wechat web devTools, please make sure cliPath is correctly specified");if(p)throw Error("Failed to launch wechat web devTools, please make sure http port is open")}return await sleep_1.default(5e3),f}async connect(t){const e=await this.connectTool(t);return await e.checkVersion(),e}async extendProjectConfig(t,e){const i=path_1.default.resolve(e,"project.config.json"),r=JSON.parse(await fs_1.default.readFile(i,"utf8"));extendDeep_1.default(r,t),await fs_1.default.writeFile(i,JSON.stringify(r,null,2),"utf8")}async connectTool(t){let e;try{const i=await Connection_1.default.create(t.wsEndpoint);e=new MiniProgram_1.default(i)}catch(e){throw Error(`Failed connecting to ${t.wsEndpoint}, check if target project window is opened with automation enabled`)}return e}async resolveCliPath(){let t="";return t=isWindows_1.default?"C:/Program Files (x86)/Tencent/微信web开发者工具/cli.bat":"/Applications/wechatwebdevtools.app/Contents/MacOS/cli",await fs_1.default.exists(t)?t:""}}exports.default=Launcher;
}, function(modId) { var map = {"./Connection":1679299223564,"./MiniProgram":1679299223566}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679299223564, function(require, module, exports) {
var __importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});const ws_1=__importDefault(require("ws")),Transport_1=__importDefault(require("./Transport")),debug_1=__importDefault(require("debug")),uuid_1=__importDefault(require("licia/uuid")),events_1=require("events"),dateFormat_1=__importDefault(require("licia/dateFormat")),stringify_1=__importDefault(require("licia/stringify")),debugProtocol=debug_1.default("automator:protocol"),closeErrTip="Connection closed, check if wechat web devTools is still running";class Connection extends events_1.EventEmitter{constructor(e){super(),this.callbacks=new Map,this.onMessage=e=>{debugProtocol(`${dateFormat_1.default("yyyy-mm-dd HH:MM:ss:l")} ◀ RECV ${e}`);const t=JSON.parse(e),{id:r,method:s,error:o,result:i,params:a}=t;if(!r)return this.emit(s,a);const{callbacks:n}=this;if(r&&n.has(r)){const e=n.get(r);n.delete(r),o?e.reject(Error(o.message)):e.resolve(i)}},this.onClose=()=>{const{callbacks:e}=this;e.forEach((e=>{e.reject(Error(closeErrTip))}))},this.transport=e,e.on("message",this.onMessage),e.on("close",this.onClose)}send(e,t={}){const r=uuid_1.default(),s=stringify_1.default({id:r,method:e,params:t});return debugProtocol(`${dateFormat_1.default("yyyy-mm-dd HH:MM:ss:l")} SEND ► ${s}`),new Promise(((e,t)=>{try{this.transport.send(s)}catch(e){t(Error(closeErrTip))}this.callbacks.set(r,{resolve:e,reject:t})}))}dispose(){this.transport.close()}static create(e){return new Promise(((t,r)=>{const s=new ws_1.default(e);s.addEventListener("open",(()=>{t(new Connection(new Transport_1.default(s)))})),s.addEventListener("error",r)}))}}exports.default=Connection;
}, function(modId) { var map = {"./Transport":1679299223565}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679299223565, function(require, module, exports) {
Object.defineProperty(exports,"__esModule",{value:!0});const events_1=require("events");class Transport extends events_1.EventEmitter{constructor(e){super(),this.ws=e,e.addEventListener("message",(e=>{this.emit("message",e.data)})),e.addEventListener("close",(()=>{this.emit("close")}))}send(e){this.ws.send(e)}close(){this.ws.close()}}exports.default=Transport;
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679299223566, function(require, module, exports) {
var __importDefault=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(exports,"__esModule",{value:!0});const Page_1=__importDefault(require("./Page")),events_1=require("events"),util_1=require("./util"),cmpVersion_1=__importDefault(require("licia/cmpVersion")),startWith_1=__importDefault(require("licia/startWith")),isFn_1=__importDefault(require("licia/isFn")),trim_1=__importDefault(require("licia/trim")),isStr_1=__importDefault(require("licia/isStr")),fs_1=__importDefault(require("licia/fs")),pkg=require("../package.json");class MiniProgram extends events_1.EventEmitter{constructor(t){super(),this.pageMap=new Map,this.onLogAdded=t=>{this.emit("console",t)},this.onBindingCalled=t=>{const{name:e,args:i}=t;try{const t=this.appBindings.get(e);t&&t(...i)}catch(t){}},this.onExceptionThrown=t=>{this.emit("exception",t)},this.connection=t,this.connection.on("App.logAdded",this.onLogAdded),this.connection.on("App.bindingCalled",this.onBindingCalled),this.connection.on("App.exceptionThrown",this.onExceptionThrown),this.appBindings=new Map}async pageStack(){const{pageStack:t}=await this.send("App.getPageStack");return t.map((t=>Page_1.default.create(this.connection,{id:t.pageId,path:t.path,query:t.query},this.pageMap)))}async navigateTo(t){return await this.changeRoute("navigateTo",t)}async redirectTo(t){return await this.changeRoute("redirectTo",t)}async navigateBack(){return await this.changeRoute("navigateBack")}async reLaunch(t){return await this.changeRoute("reLaunch",t)}async switchTab(t){return await this.changeRoute("switchTab",t)}async currentPage(){const{pageId:t,path:e,query:i}=await this.send("App.getCurrentPage");return Page_1.default.create(this.connection,{id:t,path:e,query:i},this.pageMap)}async systemInfo(){return await this.callWxMethod("getSystemInfoSync")}async callWxMethod(t,...e){return(await this.send("App.callWxMethod",{method:t,args:e})).result}async mockWxMethod(t,e,...i){isFn_1.default(e)||isFnStr(e)?await this.send("App.mockWxMethod",{method:t,functionDeclaration:e.toString(),args:i}):await this.send("App.mockWxMethod",{method:t,result:e})}async restoreWxMethod(t){await this.send("App.mockWxMethod",{method:t})}async callPluginWxMethod(t,e,...i){return(await this.send("App.callWxMethod",{method:e,pluginId:t,args:i})).result}async mockPluginWxMethod(t,e,i,...a){isFn_1.default(i)||isFnStr(i)?await this.send("App.mockWxMethod",{method:e,pluginId:t,functionDeclaration:i.toString(),args:a}):await this.send("App.mockWxMethod",{method:e,pluginId:t,result:i})}async restorePluginWxMethod(t,e){await this.send("App.mockWxMethod",{method:e,pluginId:t})}async evaluate(t,...e){const{result:i}=await this.send("App.callFunction",{functionDeclaration:t.toString(),args:e});return i}async pageScrollTo(t){await this.callWxMethod("pageScrollTo",{scrollTop:t,duration:0})}async close(){try{await this.send("App.exit")}catch(t){}await sleep(1e3),await this.send("Tool.close"),this.disconnect()}async remote(t=!1){const{qrCode:e}=await this.send("Tool.enableRemoteDebug",{auto:t});return e&&await util_1.printQrCode(await util_1.decodeQrCode(e)),new Promise((t=>{this.connection.once("Tool.onRemoteDebugConnected",(async()=>{await sleep(1e3),t()}))}))}disconnect(){this.connection.dispose()}on(t,e){return"console"===t&&this.send("App.enableLog"),super.on(t,e),this}async exposeFunction(t,e){if(this.appBindings.has(t))throw Error(`Failed to expose function with name ${t}: already exists!`);this.appBindings.set(t,e),await this.send("App.addBinding",{name:t})}async checkVersion(){let t="";if(t=(await this.send("Tool.getInfo")).SDKVersion,"dev"!==t&&cmpVersion_1.default(t,"2.7.3")<0)throw Error(`SDKVersion is currently ${t}, while automator(${pkg.version}) requires at least version 2.7.3`)}async screenshot(t={}){const{data:e}=await this.send("App.captureScreenshot");if(!t.path)return e;await fs_1.default.writeFile(t.path,e,"base64")}async testAccounts(){return(await this.send("Tool.getTestAccounts")).accounts}async stopAudits(t={}){const e=await this.send("Tool.stopAudits");return t.path&&await fs_1.default.writeFile(t.path,e.report,"utf8"),JSON.parse(e.data)}async getTicket(){return await this.send("Tool.getTicket")}async setTicket(t){await this.send("Tool.setTicket",{ticket:t})}async refreshTicket(){await this.send("Tool.refreshTicket")}async changeRoute(t,e){const i=await this.currentPage();if(i&&util_1.isPluginPath(i.path)){const a=util_1.extractPluginId(i.path);await this.callPluginWxMethod(a,t,{url:e})}else await this.callWxMethod(t,{url:e});return await sleep(3e3),await this.currentPage()}async send(t,e={}){return await this.connection.send(t,e)}}function sleep(t){return new Promise((e=>setTimeout(e,t)))}function isFnStr(t){return!!isStr_1.default(t)&&(t=trim_1.default(t),startWith_1.default(t,"function")||startWith_1.default(t,"() =>"))}exports.default=MiniProgram;
}, function(modId) { var map = {"./Page":1679299223567,"./util":1679299223569,"../package.json":1679299223570}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679299223567, function(require, module, exports) {
var __importDefault=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(exports,"__esModule",{value:!0});const Element_1=__importDefault(require("./Element")),isStr_1=__importDefault(require("licia/isStr")),isNum_1=__importDefault(require("licia/isNum")),sleep_1=__importDefault(require("licia/sleep")),waitUntil_1=__importDefault(require("licia/waitUntil")),isFn_1=__importDefault(require("licia/isFn"));class Page{constructor(t,e){this.path="",this.query={},this.elementMap=new Map,this.connection=t,this.id=e.id,this.path=e.path,this.query=e.query}async waitFor(t){isNum_1.default(t)?await sleep_1.default(t):isFn_1.default(t)?await waitUntil_1.default(t):isStr_1.default(t)&&await waitUntil_1.default((async()=>(await this.$$(t)).length>0))}async $(t){try{const e=await this.send("Page.getElement",{selector:t});return Element_1.default.create(this.connection,Object.assign(Object.assign({},e),{pageId:this.id}),this.elementMap)}catch(t){return null}}async $$(t){const{elements:e}=await this.send("Page.getElements",{selector:t});return e.map((t=>Element_1.default.create(this.connection,Object.assign(Object.assign({},t),{pageId:this.id}),this.elementMap)))}async getElementByXpath(t){try{const e=await this.send("Page.getElementByXpath",{selector:t});return Element_1.default.create(this.connection,Object.assign(Object.assign({},e),{pageId:this.id}),this.elementMap)}catch(t){return null}}async getElementsByXpath(t){const{elements:e}=await this.send("Page.getElementsByXpath",{selector:t});return e.map((t=>Element_1.default.create(this.connection,Object.assign(Object.assign({},t),{pageId:this.id}),this.elementMap)))}async xpath(t){return this.getElementByXpath(t)}async data(t){const e={};return t&&(e.path=t),(await this.send("Page.getData",e)).data}async setData(t){await this.send("Page.setData",{data:t})}async size(){const[t,e]=await this.windowProperty(["document.documentElement.scrollWidth","document.documentElement.scrollHeight"]);return{width:t,height:e}}async callMethod(t,...e){return(await this.send("Page.callMethod",{method:t,args:e})).result}async scrollTop(){const t=await this.windowProperty("document.body.scrollTop"),e=await this.windowProperty("document.documentElement.scrollTop");return t||e}async windowProperty(t){let e;e=isStr_1.default(t)?[t]:t;const a=(await this.send("Page.getWindowProperties",{names:e})).properties;return isStr_1.default(t)?a[0]:a}async send(t,e={}){return e.pageId=this.id,await this.connection.send(t,e)}static create(t,e,a){if(a.get(e.id))return a.get(e.id);const i=new Page(t,e);return a.set(e.id,i),i}}exports.default=Page;
}, function(modId) { var map = {"./Element":1679299223568}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679299223568, function(require, module, exports) {
var __importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.ContextElement=exports.SliderElement=exports.SwitchElement=exports.MovableViewElement=exports.SwiperElement=exports.ScrollViewElement=exports.TextareaElement=exports.InputElement=exports.CustomElement=void 0;const isStr_1=__importDefault(require("licia/isStr")),sleep_1=__importDefault(require("licia/sleep")),isUndef_1=__importDefault(require("licia/isUndef"));class Element{constructor(e,t,s){this.tagName="",this.connection=e,this.id=t.elementId,this.pageId=t.pageId,this.nodeId=t.nodeId||null,this.videoId=t.videoId||null,this.tagName=t.tagName,this.elementMap=s}async $(e){try{const t=await this.send("Element.getElement",{selector:e});return Element.create(this.connection,Object.assign(Object.assign({},t),{pageId:this.pageId}),this.elementMap)}catch(e){return null}}async $$(e){const{elements:t}=await this.send("Element.getElements",{selector:e});return t.map((e=>Element.create(this.connection,Object.assign(Object.assign({},e),{pageId:this.pageId}),this.elementMap)))}async size(){const[e,t]=await this.domProperty(["offsetWidth","offsetHeight"]);return{width:e,height:t}}async offset(){return await this.send("Element.getOffset")}async text(){return await this.domProperty("innerText")}async attribute(e){if(!isStr_1.default(e))throw Error("name must be a string");return await this.getter(e,"getAttributes","attributes")}async value(){return await this.property("value")}async property(e){if(!isStr_1.default(e))throw Error("name must be a string");let t=this.publicProps;if(t||(t=await this._property("__propPublic"),this.publicProps=t),!t[e])throw Error(`${this.tagName}.${e} not exists`);return this._property(e)}async wxml(){return(await this.send("Element.getWXML",{type:"inner"})).wxml}async outerWxml(){return(await this.send("Element.getWXML",{type:"outer"})).wxml}async style(e){if(!isStr_1.default(e))throw Error("name must be a string");return await this.getter(e,"getStyles","styles")}async tap(){await this.send("Element.tap")}async longpress(){await this.touchstart(),await sleep_1.default(350),await this.touchend()}async trigger(e,t){const s={type:e};isUndef_1.default(t)||(s.detail=t),await this.send("Element.triggerEvent",s)}async touchstart(e={}){await this.send("Element.touchstart",e)}async touchmove(e={}){await this.send("Element.touchmove",e)}async touchend(e={}){await this.send("Element.touchend",e)}async dispatchEvent(e){await this.send("Element.dispatchEvent",e)}async domProperty(e){return await this.getter(e,"getDOMProperties","properties")}async _property(e){return await this.getter(e,"getProperties","properties")}async getter(e,t,s){let n;n=isStr_1.default(e)?[e]:e;const a=(await this.send(`Element.${t}`,{names:n}))[s];return isStr_1.default(e)?a[0]:a}async send(e,t={}){return t.elementId=this.id,t.pageId=this.pageId,this.nodeId&&(t.nodeId=this.nodeId),this.videoId&&(t.videoId=this.videoId),await this.connection.send(e,t)}async callFunction(e,...t){const{result:s}=await this.send("Element.callFunction",{functionName:e,args:t});return s}static create(e,t,s){if(s.get(t.elementId))return s.get(t.elementId);let n,a=Element;if(t.nodeId)a=CustomElement;else switch(t.tagName){case"input":a=InputElement;break;case"textarea":a=TextareaElement;break;case"scroll-view":a=ScrollViewElement;break;case"swiper":a=SwiperElement;break;case"movable-view":a=MovableViewElement;break;case"switch":a=SwitchElement;break;case"slider":a=SliderElement;break;case"video":a=ContextElement;break;default:a=Element}return n=new a(e,t,s),s.set(t.elementId,n),n}}exports.default=Element;class CustomElement extends Element{async setData(e){await this.send("Element.setData",{data:e})}async data(e){const t={};return e&&(t.path=e),(await this.send("Element.getData",t)).data}async callMethod(e,...t){return(await this.send("Element.callMethod",{method:e,args:t})).result}}exports.CustomElement=CustomElement;class InputElement extends Element{async input(e){await this.callFunction("input.input",e)}}exports.InputElement=InputElement;class TextareaElement extends Element{async input(e){await this.callFunction("textarea.input",e)}}exports.TextareaElement=TextareaElement;class ScrollViewElement extends Element{async scrollTo(e,t){await this.callFunction("scroll-view.scrollTo",e,t)}async property(e){return"scrollTop"===e?await this.callFunction("scroll-view.scrollTop"):"scrollLeft"===e?await this.callFunction("scroll-view.scrollLeft"):super.property(e)}async scrollWidth(){return await this.callFunction("scroll-view.scrollWidth")}async scrollHeight(){return await this.callFunction("scroll-view.scrollHeight")}}exports.ScrollViewElement=ScrollViewElement;class SwiperElement extends Element{async swipeTo(e){await this.callFunction("swiper.swipeTo",e)}}exports.SwiperElement=SwiperElement;class MovableViewElement extends Element{async moveTo(e,t){await this.callFunction("movable-view.moveTo",e,t)}async property(e){return"x"===e?this._property("_translateX"):"y"===e?this._property("_translateY"):super.property(e)}}exports.MovableViewElement=MovableViewElement;class SwitchElement extends Element{async tap(){await this.callFunction("switch.tap")}}exports.SwitchElement=SwitchElement;class SliderElement extends Element{async slideTo(e){await this.callFunction("slider.slideTo",e)}}exports.SliderElement=SliderElement;class ContextElement extends Element{async callContextMethod(e,...t){return(await this.send("Element.callContextMethod",{method:e,args:t})).result}}exports.ContextElement=ContextElement;
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679299223569, function(require, module, exports) {
var __importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.extractPluginId=exports.isPluginPath=exports.printQrCode=exports.decodeQrCode=void 0;const jimp_1=__importDefault(require("jimp")),startWith_1=__importDefault(require("licia/startWith")),qrCodeTerminal=require("qrcode-terminal"),QrCodeReader=require("qrcode-reader");function decodeQrCode(e){const r=new Buffer(e,"base64");return new Promise((async(e,t)=>{const i=await jimp_1.default.read(r),o=new QrCodeReader;o.callback=function(r,i){if(r)return t(r);e(i.result)},o.decode(i.bitmap)}))}function printQrCode(e){return new Promise((r=>{qrCodeTerminal.generate(e,{small:!0},(e=>{process.stdout.write(e),r()}))}))}function isPluginPath(e){return startWith_1.default(e,"plugin-private://")}exports.decodeQrCode=decodeQrCode,exports.printQrCode=printQrCode,exports.isPluginPath=isPluginPath;const regPluginId=/^plugin-private:\/\/([0-9a-zA-Z]+)\//;function extractPluginId(e){const r=e.match(regPluginId);return r?r[1]:""}exports.extractPluginId=extractPluginId;
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679299223570, function(require, module, exports) {
module.exports = {
  "_from": "miniprogram-automator",
  "_id": "miniprogram-automator@0.12.0",
  "_inBundle": false,
  "_integrity": "sha512-24uH/6+e5DYkVuPccKMtAWHF9K6zptmMrpfE9i73DvLk/lmkK+5AIOwLhMFAh+J2VIZDOT6+WWNUKTfJLW7/qw==",
  "_location": "/miniprogram-automator",
  "_phantomChildren": {},
  "_requested": {
    "type": "tag",
    "registry": true,
    "raw": "miniprogram-automator",
    "name": "miniprogram-automator",
    "escapedName": "miniprogram-automator",
    "rawSpec": "",
    "saveSpec": null,
    "fetchSpec": "latest"
  },
  "_requiredBy": [
    "#USER",
    "/"
  ],
  "_resolved": "https://registry.npmjs.org/miniprogram-automator/-/miniprogram-automator-0.12.0.tgz",
  "_shasum": "f909e7ec02b4f32967e13cae7f9e601d86e1d173",
  "_spec": "miniprogram-automator",
  "_where": "/Users/xiaolin/web/miss/demo-wmp",
  "author": {
    "name": "redhoodsu"
  },
  "bundleDependencies": false,
  "dependencies": {
    "debug": "^4.1.1",
    "jimp": "^0.6.4",
    "licia": "^1.4.4",
    "qrcode-reader": "^1.0.4",
    "qrcode-terminal": "^0.12.0",
    "ws": "^6.1.3"
  },
  "deprecated": false,
  "description": "小程序自动化 JS 版 SDK。",
  "devDependencies": {
    "@tencent/eslint-config-wxapp": "^0.5.2",
    "@tencent/tslint-config-wxapp": "0.0.2",
    "@types/debug": "^4.1.1",
    "@types/node": "^11.9.3",
    "@types/ws": "^6.0.1",
    "commander": "^2.20.0",
    "eslint": "^7.13.0",
    "eslint-config-prettier": "^6.15.0",
    "gulp": "^4.0.0",
    "gulp-terser": "^1.1.7",
    "jest": "^24.7.1",
    "prettier": "^1.16.4",
    "ts-loader": "^5.3.3",
    "tslint": "^5.12.1",
    "tslint-config-prettier": "^1.17.0",
    "typescript": "^3.2.4"
  },
  "directories": {
    "doc": "doc"
  },
  "files": [
    "out/"
  ],
  "license": "MIT",
  "main": "./out/index",
  "name": "miniprogram-automator",
  "repository": {
    "type": "git",
    "url": "git@git.code.oa.com:devtools/automator.git"
  },
  "scripts": {
    "build": "tsc && gulp build",
    "dev": "tsc -w --inlineSourceMap",
    "eslint": "eslint test/*.js",
    "format": "prettier src/**/*.ts test/*.js *.js --write",
    "lint": "npm run tslint && npm run eslint",
    "lint:fix": "npm run tslint -- --fix && npm run eslint -- --fix",
    "test": "node ./test",
    "tslint": "tslint src/**/*.ts"
  },
  "version": "0.12.0"
}

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1679299223561);
})()
//miniprogram-npm-outsideDeps=["path","child_process","licia/isEmpty","licia/extendDeep","licia/getPort","licia/toStr","licia/isWindows","licia/fs","licia/waitUntil","licia/concat","licia/sleep","licia/endWith","licia/isRelative","ws","debug","licia/uuid","events","licia/dateFormat","licia/stringify","licia/cmpVersion","licia/startWith","licia/isFn","licia/trim","licia/isStr","licia/isNum","licia/isUndef","jimp","qrcode-terminal","qrcode-reader"]
//# sourceMappingURL=index.js.map