module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1677500249989, function(require, module, exports) {
var fs = require('fs'),
  path = require('path'),
  mkdirp = require('mkdirp'),
  _savefs = savefs,
  savefs = {};

module.exports = function(file, opts) {

  dir_name= path.dirname(file)
  // origin file path
  ori_path = path.resolve(file);
  // folder path
  dir_path = path.resolve(dir_name);

  savefs._create_dir(dir_path, opts)
  
  return savefs.wstream(ori_path)
}

savefs._create_dir = function (fp, opts) {
  mkdirp.sync(fp, opts);
}

savefs.wstream = function (file) {
  var ws = fs.createWriteStream(file);
  this.writer = ws;
  return this;
}

// chaining write method
savefs.write = function(chunk, encoding, cb) {
  if(arguments.length === 3) {
    this.writer.write(chunk, encoding, cb);
  }else if(arguments.length === 2 && typeof arguments[1] === 'function') {
    cb = encoding;
    encoding = null;
    this.writer.write(chunk, cb);
  }else if(arguments.length === 2 && typeof arguments[1] !== 'function') {
    this.writer.write(chunk, encoding)
  }else {
    this.writer.write(chunk)
  }

  return this;
}

// chaining end method
savefs.end = function(chunk, encoding, cb) {
  if(arguments.length === 3) {
    this.writer.end(chunk, encoding, cb);
  }else if(arguments.length === 2 && typeof arguments[1] === 'function') {
    cb = encoding;
    encoding = null;
    this.writer.end(chunk, cb);
  }else if(arguments.length === 2 && typeof arguments[1] !== 'function') {
    this.writer.end(chunk, encoding)
  }else {
    this.writer.end(chunk)
  }

  return this;
}

savefs.finish = function(cb) {
  this.writer.on('finish', cb);
}

savefs.error = function(cb) {
  this.writer.on('error', cb);
} 
}, function(modId) {var map = {}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1677500249989);
})()
//miniprogram-npm-outsideDeps=["fs","path","mkdirp"]
//# sourceMappingURL=index.js.map