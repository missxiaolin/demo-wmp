module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1679363156338, function(require, module, exports) {


Object.defineProperty(exports, '__esModule', {
  value: true
});
Object.defineProperty(exports, 'BufferedConsole', {
  enumerable: true,
  get: function () {
    return _BufferedConsole.default;
  }
});
Object.defineProperty(exports, 'CustomConsole', {
  enumerable: true,
  get: function () {
    return _CustomConsole.default;
  }
});
Object.defineProperty(exports, 'NullConsole', {
  enumerable: true,
  get: function () {
    return _NullConsole.default;
  }
});
Object.defineProperty(exports, 'getConsoleOutput', {
  enumerable: true,
  get: function () {
    return _getConsoleOutput.default;
  }
});
var _BufferedConsole = _interopRequireDefault(require('./BufferedConsole'));
var _CustomConsole = _interopRequireDefault(require('./CustomConsole'));
var _NullConsole = _interopRequireDefault(require('./NullConsole'));
var _getConsoleOutput = _interopRequireDefault(require('./getConsoleOutput'));
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {default: obj};
}

}, function(modId) {var map = {"./NullConsole":1679363156341}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679363156341, function(require, module, exports) {


Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = void 0;
var _CustomConsole = _interopRequireDefault(require('./CustomConsole'));
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {default: obj};
}
/* eslint-disable @typescript-eslint/no-empty-function */
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

class NullConsole extends _CustomConsole.default {
  assert() {}
  debug() {}
  dir() {}
  error() {}
  info() {}
  log() {}
  time() {}
  timeEnd() {}
  timeLog() {}
  trace() {}
  warn() {}
  group() {}
  groupCollapsed() {}
  groupEnd() {}
}
exports.default = NullConsole;

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1679363156338);
})()
//miniprogram-npm-outsideDeps=["./BufferedConsole","./CustomConsole","./getConsoleOutput"]
//# sourceMappingURL=index.js.map