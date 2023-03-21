module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1679363156177, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "OptionValidator", {
  enumerable: true,
  get: function () {
    return _validator.OptionValidator;
  }
});
Object.defineProperty(exports, "findSuggestion", {
  enumerable: true,
  get: function () {
    return _findSuggestion.findSuggestion;
  }
});
var _validator = require("./validator");
var _findSuggestion = require("./find-suggestion");

//# sourceMappingURL=index.js.map

}, function(modId) {var map = {"./validator":1679363156178,"./find-suggestion":1679363156179}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679363156178, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OptionValidator = void 0;
var _findSuggestion = require("./find-suggestion");
class OptionValidator {
  constructor(descriptor) {
    this.descriptor = descriptor;
  }
  validateTopLevelOptions(options, TopLevelOptionShape) {
    const validOptionNames = Object.keys(TopLevelOptionShape);
    for (const option of Object.keys(options)) {
      if (!validOptionNames.includes(option)) {
        throw new Error(this.formatMessage(`'${option}' is not a valid top-level option.
- Did you mean '${(0, _findSuggestion.findSuggestion)(option, validOptionNames)}'?`));
      }
    }
  }
  validateBooleanOption(name, value, defaultValue) {
    if (value === undefined) {
      return defaultValue;
    } else {
      this.invariant(typeof value === "boolean", `'${name}' option must be a boolean.`);
    }
    return value;
  }
  validateStringOption(name, value, defaultValue) {
    if (value === undefined) {
      return defaultValue;
    } else {
      this.invariant(typeof value === "string", `'${name}' option must be a string.`);
    }
    return value;
  }
  invariant(condition, message) {
    if (!condition) {
      throw new Error(this.formatMessage(message));
    }
  }
  formatMessage(message) {
    return `${this.descriptor}: ${message}`;
  }
}
exports.OptionValidator = OptionValidator;

//# sourceMappingURL=validator.js.map

}, function(modId) { var map = {"./find-suggestion":1679363156179}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679363156179, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findSuggestion = findSuggestion;
const {
  min
} = Math;
function levenshtein(a, b) {
  let t = [],
    u = [],
    i,
    j;
  const m = a.length,
    n = b.length;
  if (!m) {
    return n;
  }
  if (!n) {
    return m;
  }
  for (j = 0; j <= n; j++) {
    t[j] = j;
  }
  for (i = 1; i <= m; i++) {
    for (u = [i], j = 1; j <= n; j++) {
      u[j] = a[i - 1] === b[j - 1] ? t[j - 1] : min(t[j - 1], t[j], u[j - 1]) + 1;
    }
    t = u;
  }
  return u[n];
}
function findSuggestion(str, arr) {
  const distances = arr.map(el => levenshtein(el, str));
  return arr[distances.indexOf(min(...distances))];
}

//# sourceMappingURL=find-suggestion.js.map

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1679363156177);
})()
//miniprogram-npm-outsideDeps=[]
//# sourceMappingURL=index.js.map