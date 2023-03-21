module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1679363156355, function(require, module, exports) {


Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.jestExpect = void 0;
function _expect() {
  const data = require('expect');
  _expect = function () {
    return data;
  };
  return data;
}
function _jestSnapshot() {
  const data = require('jest-snapshot');
  _jestSnapshot = function () {
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

function createJestExpect() {
  _expect().expect.extend({
    toMatchInlineSnapshot: _jestSnapshot().toMatchInlineSnapshot,
    toMatchSnapshot: _jestSnapshot().toMatchSnapshot,
    toThrowErrorMatchingInlineSnapshot:
      _jestSnapshot().toThrowErrorMatchingInlineSnapshot,
    toThrowErrorMatchingSnapshot: _jestSnapshot().toThrowErrorMatchingSnapshot
  });
  _expect().expect.addSnapshotSerializer = _jestSnapshot().addSerializer;
  return _expect().expect;
}
const jestExpect = createJestExpect();
exports.jestExpect = jestExpect;

}, function(modId) {var map = {}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1679363156355);
})()
//miniprogram-npm-outsideDeps=["expect","jest-snapshot"]
//# sourceMappingURL=index.js.map