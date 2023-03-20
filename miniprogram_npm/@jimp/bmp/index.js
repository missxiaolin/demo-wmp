module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1679299222744, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es6.object.define-property");

var _bmpJs = _interopRequireDefault(require("bmp-js"));

var _utils = require("@jimp/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var MIME_TYPE = 'image/bmp';
var MIME_TYPE_SECOND = 'image/x-ms-bmp';

function toAGBR(image) {
  return (0, _utils.scan)(image, 0, 0, image.bitmap.width, image.bitmap.height, function (x, y, index) {
    var red = this.bitmap.data[index + 0];
    var green = this.bitmap.data[index + 1];
    var blue = this.bitmap.data[index + 2];
    var alpha = this.bitmap.data[index + 3];
    this.bitmap.data[index + 0] = alpha;
    this.bitmap.data[index + 1] = blue;
    this.bitmap.data[index + 2] = green;
    this.bitmap.data[index + 3] = red;
  }).bitmap;
}

function fromAGBR(bitmap) {
  return (0, _utils.scan)({
    bitmap: bitmap
  }, 0, 0, bitmap.width, bitmap.height, function (x, y, index) {
    var alpha = this.bitmap.data[index + 0];
    var blue = this.bitmap.data[index + 1];
    var green = this.bitmap.data[index + 2];
    var red = this.bitmap.data[index + 3];
    this.bitmap.data[index + 0] = red;
    this.bitmap.data[index + 1] = green;
    this.bitmap.data[index + 2] = blue;
    this.bitmap.data[index + 3] = bitmap.is_with_alpha ? alpha : 0xff;
  }).bitmap;
}

var decode = function decode(data) {
  return fromAGBR(_bmpJs.default.decode(data));
};

var encode = function encode(image) {
  return _bmpJs.default.encode(toAGBR(image)).data;
};

var _default = function _default() {
  var _decoders, _encoders;

  return {
    mime: _defineProperty({}, MIME_TYPE, ['bmp']),
    constants: {
      MIME_BMP: MIME_TYPE,
      MIME_X_MS_BMP: MIME_TYPE_SECOND
    },
    decoders: (_decoders = {}, _defineProperty(_decoders, MIME_TYPE, decode), _defineProperty(_decoders, MIME_TYPE_SECOND, decode), _decoders),
    encoders: (_encoders = {}, _defineProperty(_encoders, MIME_TYPE, encode), _defineProperty(_encoders, MIME_TYPE_SECOND, encode), _encoders)
  };
};

exports.default = _default;
module.exports = exports.default;
//# sourceMappingURL=index.js.map
}, function(modId) {var map = {}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1679299222744);
})()
//miniprogram-npm-outsideDeps=["core-js/modules/es6.object.define-property","bmp-js","@jimp/utils"]
//# sourceMappingURL=index.js.map