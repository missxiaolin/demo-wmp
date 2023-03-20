module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1679299222780, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es6.object.define-property");

var _utif = _interopRequireDefault(require("utif"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var MIME_TYPE = 'image/tiff';

var _default = function _default() {
  return {
    mime: _defineProperty({}, MIME_TYPE, ['tiff', 'tif']),
    constants: {
      MIME_TIFF: MIME_TYPE
    },
    decoders: _defineProperty({}, MIME_TYPE, function (data) {
      var ifds = _utif.default.decode(data);

      var page = ifds[0];

      _utif.default.decodeImages(data, ifds);

      var rgba = _utif.default.toRGBA8(page);

      return {
        data: Buffer.from(rgba),
        width: page.t256[0],
        height: page.t257[0]
      };
    }),
    encoders: _defineProperty({}, MIME_TYPE, function (image) {
      var tiff = _utif.default.encodeImage(image.bitmap.data, image.bitmap.width, image.bitmap.height);

      return Buffer.from(tiff);
    })
  };
};

exports.default = _default;
module.exports = exports.default;
//# sourceMappingURL=index.js.map
}, function(modId) {var map = {}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1679299222780);
})()
//miniprogram-npm-outsideDeps=["core-js/modules/es6.object.define-property","utif"]
//# sourceMappingURL=index.js.map