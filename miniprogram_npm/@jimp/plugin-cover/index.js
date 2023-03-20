module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1679299222762, function(require, module, exports) {


require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _utils = require("@jimp/utils");

/**
 * Scale the image so the given width and height keeping the aspect ratio. Some parts of the image may be clipped.
 * @param {number} w the width to resize the image to
 * @param {number} h the height to resize the image to
 * @param {number} alignBits (optional) A bitmask for horizontal and vertical alignment
 * @param {string} mode (optional) a scaling method (e.g. Jimp.RESIZE_BEZIER)
 * @param {function(Error, Jimp)} cb (optional) a callback for when complete
 * @returns {Jimp} this for chaining of methods
 */
var _default = function _default() {
  return {
    cover: function cover(w, h, alignBits, mode, cb) {
      if (typeof w !== 'number' || typeof h !== 'number') {
        return _utils.throwError.call(this, 'w and h must be numbers', cb);
      }

      if (alignBits && typeof alignBits === 'function' && typeof cb === 'undefined') {
        cb = alignBits;
        alignBits = null;
        mode = null;
      } else if (typeof mode === 'function' && typeof cb === 'undefined') {
        cb = mode;
        mode = null;
      }

      alignBits = alignBits || this.constructor.HORIZONTAL_ALIGN_CENTER | this.constructor.VERTICAL_ALIGN_MIDDLE;
      var hbits = alignBits & (1 << 3) - 1;
      var vbits = alignBits >> 3; // check if more flags than one is in the bit sets

      if (!(hbits !== 0 && !(hbits & hbits - 1) || vbits !== 0 && !(vbits & vbits - 1))) return _utils.throwError.call(this, 'only use one flag per alignment direction', cb);
      var alignH = hbits >> 1; // 0, 1, 2

      var alignV = vbits >> 1; // 0, 1, 2

      var f = w / h > this.bitmap.width / this.bitmap.height ? w / this.bitmap.width : h / this.bitmap.height;
      this.scale(f, mode);
      this.crop((this.bitmap.width - w) / 2 * alignH, (this.bitmap.height - h) / 2 * alignV, w, h);

      if ((0, _utils.isNodePattern)(cb)) {
        cb.call(this, null, this);
      }

      return this;
    }
  };
};

exports.default = _default;
module.exports = exports.default;
//# sourceMappingURL=index.js.map
}, function(modId) {var map = {}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1679299222762);
})()
//miniprogram-npm-outsideDeps=["core-js/modules/es6.object.define-property","@jimp/utils"]
//# sourceMappingURL=index.js.map