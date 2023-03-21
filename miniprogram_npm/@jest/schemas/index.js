module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1679363156376, function(require, module, exports) {


Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.SnapshotFormat = void 0;
function _typebox() {
  const data = require('@sinclair/typebox');
  _typebox = function () {
    return data;
  };
  return data;
}
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const RawSnapshotFormat = _typebox().Type.Partial(
  _typebox().Type.Object({
    callToJSON: _typebox().Type.Readonly(_typebox().Type.Boolean()),
    compareKeys: _typebox().Type.Readonly(_typebox().Type.Null()),
    escapeRegex: _typebox().Type.Readonly(_typebox().Type.Boolean()),
    escapeString: _typebox().Type.Readonly(_typebox().Type.Boolean()),
    highlight: _typebox().Type.Readonly(_typebox().Type.Boolean()),
    indent: _typebox().Type.Readonly(
      _typebox().Type.Number({
        minimum: 0
      })
    ),
    maxDepth: _typebox().Type.Readonly(
      _typebox().Type.Number({
        minimum: 0
      })
    ),
    maxWidth: _typebox().Type.Readonly(
      _typebox().Type.Number({
        minimum: 0
      })
    ),
    min: _typebox().Type.Readonly(_typebox().Type.Boolean()),
    printBasicPrototype: _typebox().Type.Readonly(_typebox().Type.Boolean()),
    printFunctionName: _typebox().Type.Readonly(_typebox().Type.Boolean()),
    theme: _typebox().Type.Readonly(
      _typebox().Type.Partial(
        _typebox().Type.Object({
          comment: _typebox().Type.Readonly(_typebox().Type.String()),
          content: _typebox().Type.Readonly(_typebox().Type.String()),
          prop: _typebox().Type.Readonly(_typebox().Type.String()),
          tag: _typebox().Type.Readonly(_typebox().Type.String()),
          value: _typebox().Type.Readonly(_typebox().Type.String())
        })
      )
    )
  })
);
const SnapshotFormat = _typebox().Type.Strict(RawSnapshotFormat);
exports.SnapshotFormat = SnapshotFormat;

}, function(modId) {var map = {}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1679363156376);
})()
//miniprogram-npm-outsideDeps=["@sinclair/typebox"]
//# sourceMappingURL=index.js.map