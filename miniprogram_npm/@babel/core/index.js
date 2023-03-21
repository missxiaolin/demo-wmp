module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1679363156081, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DEFAULT_EXTENSIONS = void 0;
Object.defineProperty(exports, "File", {
  enumerable: true,
  get: function () {
    return _file.default;
  }
});
exports.OptionManager = void 0;
exports.Plugin = Plugin;
Object.defineProperty(exports, "buildExternalHelpers", {
  enumerable: true,
  get: function () {
    return _buildExternalHelpers.default;
  }
});
Object.defineProperty(exports, "createConfigItem", {
  enumerable: true,
  get: function () {
    return _config.createConfigItem;
  }
});
Object.defineProperty(exports, "createConfigItemAsync", {
  enumerable: true,
  get: function () {
    return _config.createConfigItemAsync;
  }
});
Object.defineProperty(exports, "createConfigItemSync", {
  enumerable: true,
  get: function () {
    return _config.createConfigItemSync;
  }
});
Object.defineProperty(exports, "getEnv", {
  enumerable: true,
  get: function () {
    return _environment.getEnv;
  }
});
Object.defineProperty(exports, "loadOptions", {
  enumerable: true,
  get: function () {
    return _config.loadOptions;
  }
});
Object.defineProperty(exports, "loadOptionsAsync", {
  enumerable: true,
  get: function () {
    return _config.loadOptionsAsync;
  }
});
Object.defineProperty(exports, "loadOptionsSync", {
  enumerable: true,
  get: function () {
    return _config.loadOptionsSync;
  }
});
Object.defineProperty(exports, "loadPartialConfig", {
  enumerable: true,
  get: function () {
    return _config.loadPartialConfig;
  }
});
Object.defineProperty(exports, "loadPartialConfigAsync", {
  enumerable: true,
  get: function () {
    return _config.loadPartialConfigAsync;
  }
});
Object.defineProperty(exports, "loadPartialConfigSync", {
  enumerable: true,
  get: function () {
    return _config.loadPartialConfigSync;
  }
});
Object.defineProperty(exports, "parse", {
  enumerable: true,
  get: function () {
    return _parse.parse;
  }
});
Object.defineProperty(exports, "parseAsync", {
  enumerable: true,
  get: function () {
    return _parse.parseAsync;
  }
});
Object.defineProperty(exports, "parseSync", {
  enumerable: true,
  get: function () {
    return _parse.parseSync;
  }
});
Object.defineProperty(exports, "resolvePlugin", {
  enumerable: true,
  get: function () {
    return _files.resolvePlugin;
  }
});
Object.defineProperty(exports, "resolvePreset", {
  enumerable: true,
  get: function () {
    return _files.resolvePreset;
  }
});
Object.defineProperty((0, exports), "template", {
  enumerable: true,
  get: function () {
    return _template().default;
  }
});
Object.defineProperty((0, exports), "tokTypes", {
  enumerable: true,
  get: function () {
    return _parser().tokTypes;
  }
});
Object.defineProperty(exports, "transform", {
  enumerable: true,
  get: function () {
    return _transform.transform;
  }
});
Object.defineProperty(exports, "transformAsync", {
  enumerable: true,
  get: function () {
    return _transform.transformAsync;
  }
});
Object.defineProperty(exports, "transformFile", {
  enumerable: true,
  get: function () {
    return _transformFile.transformFile;
  }
});
Object.defineProperty(exports, "transformFileAsync", {
  enumerable: true,
  get: function () {
    return _transformFile.transformFileAsync;
  }
});
Object.defineProperty(exports, "transformFileSync", {
  enumerable: true,
  get: function () {
    return _transformFile.transformFileSync;
  }
});
Object.defineProperty(exports, "transformFromAst", {
  enumerable: true,
  get: function () {
    return _transformAst.transformFromAst;
  }
});
Object.defineProperty(exports, "transformFromAstAsync", {
  enumerable: true,
  get: function () {
    return _transformAst.transformFromAstAsync;
  }
});
Object.defineProperty(exports, "transformFromAstSync", {
  enumerable: true,
  get: function () {
    return _transformAst.transformFromAstSync;
  }
});
Object.defineProperty(exports, "transformSync", {
  enumerable: true,
  get: function () {
    return _transform.transformSync;
  }
});
Object.defineProperty((0, exports), "traverse", {
  enumerable: true,
  get: function () {
    return _traverse().default;
  }
});
exports.version = exports.types = void 0;
var _file = require("./transformation/file/file");
var _buildExternalHelpers = require("./tools/build-external-helpers");
var _files = require("./config/files");
var _environment = require("./config/helpers/environment");
function _types() {
  const data = require("@babel/types");
  _types = function () {
    return data;
  };
  return data;
}
Object.defineProperty((0, exports), "types", {
  enumerable: true,
  get: function () {
    return _types();
  }
});
function _parser() {
  const data = require("@babel/parser");
  _parser = function () {
    return data;
  };
  return data;
}
function _traverse() {
  const data = require("@babel/traverse");
  _traverse = function () {
    return data;
  };
  return data;
}
function _template() {
  const data = require("@babel/template");
  _template = function () {
    return data;
  };
  return data;
}
var _config = require("./config");
var _transform = require("./transform");
var _transformFile = require("./transform-file");
var _transformAst = require("./transform-ast");
var _parse = require("./parse");
var thisFile = require("./index");
const version = "7.21.3";
exports.version = version;
const DEFAULT_EXTENSIONS = Object.freeze([".js", ".jsx", ".es6", ".es", ".mjs", ".cjs"]);
exports.DEFAULT_EXTENSIONS = DEFAULT_EXTENSIONS;
class OptionManager {
  init(opts) {
    return (0, _config.loadOptionsSync)(opts);
  }
}
exports.OptionManager = OptionManager;
function Plugin(alias) {
  throw new Error(`The (${alias}) Babel 5 plugin is being run with an unsupported Babel version.`);
}
;
0 && (exports.types = exports.traverse = exports.tokTypes = exports.template = 0);

//# sourceMappingURL=index.js.map

}, function(modId) {var map = {"./transformation/file/file":1679363156082,"./tools/build-external-helpers":1679363156083,"./config/files":1679363156084,"./config/helpers/environment":1679363156113,"./config":1679363156097,"./transform":1679363156127,"./transform-file":1679363156096,"./transform-ast":1679363156128,"./parse":1679363156129,"./index":1679363156081}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679363156082, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
function helpers() {
  const data = require("@babel/helpers");
  helpers = function () {
    return data;
  };
  return data;
}
function _traverse() {
  const data = require("@babel/traverse");
  _traverse = function () {
    return data;
  };
  return data;
}
function _codeFrame() {
  const data = require("@babel/code-frame");
  _codeFrame = function () {
    return data;
  };
  return data;
}
function _t() {
  const data = require("@babel/types");
  _t = function () {
    return data;
  };
  return data;
}
function _helperModuleTransforms() {
  const data = require("@babel/helper-module-transforms");
  _helperModuleTransforms = function () {
    return data;
  };
  return data;
}
function _semver() {
  const data = require("semver");
  _semver = function () {
    return data;
  };
  return data;
}
const {
  cloneNode,
  interpreterDirective
} = _t();
const errorVisitor = {
  enter(path, state) {
    const loc = path.node.loc;
    if (loc) {
      state.loc = loc;
      path.stop();
    }
  }
};
class File {
  constructor(options, {
    code,
    ast,
    inputMap
  }) {
    this._map = new Map();
    this.opts = void 0;
    this.declarations = {};
    this.path = void 0;
    this.ast = void 0;
    this.scope = void 0;
    this.metadata = {};
    this.code = "";
    this.inputMap = void 0;
    this.hub = {
      file: this,
      getCode: () => this.code,
      getScope: () => this.scope,
      addHelper: this.addHelper.bind(this),
      buildError: this.buildCodeFrameError.bind(this)
    };
    this.opts = options;
    this.code = code;
    this.ast = ast;
    this.inputMap = inputMap;
    this.path = _traverse().NodePath.get({
      hub: this.hub,
      parentPath: null,
      parent: this.ast,
      container: this.ast,
      key: "program"
    }).setContext();
    this.scope = this.path.scope;
  }
  get shebang() {
    const {
      interpreter
    } = this.path.node;
    return interpreter ? interpreter.value : "";
  }
  set shebang(value) {
    if (value) {
      this.path.get("interpreter").replaceWith(interpreterDirective(value));
    } else {
      this.path.get("interpreter").remove();
    }
  }
  set(key, val) {
    if (key === "helpersNamespace") {
      throw new Error("Babel 7.0.0-beta.56 has dropped support for the 'helpersNamespace' utility." + "If you are using @babel/plugin-external-helpers you will need to use a newer " + "version than the one you currently have installed. " + "If you have your own implementation, you'll want to explore using 'helperGenerator' " + "alongside 'file.availableHelper()'.");
    }
    this._map.set(key, val);
  }
  get(key) {
    return this._map.get(key);
  }
  has(key) {
    return this._map.has(key);
  }
  getModuleName() {
    return (0, _helperModuleTransforms().getModuleName)(this.opts, this.opts);
  }
  addImport() {
    throw new Error("This API has been removed. If you're looking for this " + "functionality in Babel 7, you should import the " + "'@babel/helper-module-imports' module and use the functions exposed " + " from that module, such as 'addNamed' or 'addDefault'.");
  }
  availableHelper(name, versionRange) {
    let minVersion;
    try {
      minVersion = helpers().minVersion(name);
    } catch (err) {
      if (err.code !== "BABEL_HELPER_UNKNOWN") throw err;
      return false;
    }
    if (typeof versionRange !== "string") return true;
    if (_semver().valid(versionRange)) versionRange = `^${versionRange}`;
    return !_semver().intersects(`<${minVersion}`, versionRange) && !_semver().intersects(`>=8.0.0`, versionRange);
  }
  addHelper(name) {
    const declar = this.declarations[name];
    if (declar) return cloneNode(declar);
    const generator = this.get("helperGenerator");
    if (generator) {
      const res = generator(name);
      if (res) return res;
    }
    helpers().ensure(name, File);
    const uid = this.declarations[name] = this.scope.generateUidIdentifier(name);
    const dependencies = {};
    for (const dep of helpers().getDependencies(name)) {
      dependencies[dep] = this.addHelper(dep);
    }
    const {
      nodes,
      globals
    } = helpers().get(name, dep => dependencies[dep], uid, Object.keys(this.scope.getAllBindings()));
    globals.forEach(name => {
      if (this.path.scope.hasBinding(name, true)) {
        this.path.scope.rename(name);
      }
    });
    nodes.forEach(node => {
      node._compact = true;
    });
    this.path.unshiftContainer("body", nodes);
    this.path.get("body").forEach(path => {
      if (nodes.indexOf(path.node) === -1) return;
      if (path.isVariableDeclaration()) this.scope.registerDeclaration(path);
    });
    return uid;
  }
  addTemplateObject() {
    throw new Error("This function has been moved into the template literal transform itself.");
  }
  buildCodeFrameError(node, msg, _Error = SyntaxError) {
    let loc = node && (node.loc || node._loc);
    if (!loc && node) {
      const state = {
        loc: null
      };
      (0, _traverse().default)(node, errorVisitor, this.scope, state);
      loc = state.loc;
      let txt = "This is an error on an internal node. Probably an internal error.";
      if (loc) txt += " Location has been estimated.";
      msg += ` (${txt})`;
    }
    if (loc) {
      const {
        highlightCode = true
      } = this.opts;
      msg += "\n" + (0, _codeFrame().codeFrameColumns)(this.code, {
        start: {
          line: loc.start.line,
          column: loc.start.column + 1
        },
        end: loc.end && loc.start.line === loc.end.line ? {
          line: loc.end.line,
          column: loc.end.column + 1
        } : undefined
      }, {
        highlightCode
      });
    }
    return new _Error(msg);
  }
}
exports.default = File;
0 && 0;

//# sourceMappingURL=file.js.map

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679363156083, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;
function helpers() {
  const data = require("@babel/helpers");
  helpers = function () {
    return data;
  };
  return data;
}
function _generator() {
  const data = require("@babel/generator");
  _generator = function () {
    return data;
  };
  return data;
}
function _template() {
  const data = require("@babel/template");
  _template = function () {
    return data;
  };
  return data;
}
function _t() {
  const data = require("@babel/types");
  _t = function () {
    return data;
  };
  return data;
}
var _file = require("../transformation/file/file");
const {
  arrayExpression,
  assignmentExpression,
  binaryExpression,
  blockStatement,
  callExpression,
  cloneNode,
  conditionalExpression,
  exportNamedDeclaration,
  exportSpecifier,
  expressionStatement,
  functionExpression,
  identifier,
  memberExpression,
  objectExpression,
  program,
  stringLiteral,
  unaryExpression,
  variableDeclaration,
  variableDeclarator
} = _t();
const buildUmdWrapper = replacements => _template().default.statement`
    (function (root, factory) {
      if (typeof define === "function" && define.amd) {
        define(AMD_ARGUMENTS, factory);
      } else if (typeof exports === "object") {
        factory(COMMON_ARGUMENTS);
      } else {
        factory(BROWSER_ARGUMENTS);
      }
    })(UMD_ROOT, function (FACTORY_PARAMETERS) {
      FACTORY_BODY
    });
  `(replacements);
function buildGlobal(allowlist) {
  const namespace = identifier("babelHelpers");
  const body = [];
  const container = functionExpression(null, [identifier("global")], blockStatement(body));
  const tree = program([expressionStatement(callExpression(container, [conditionalExpression(binaryExpression("===", unaryExpression("typeof", identifier("global")), stringLiteral("undefined")), identifier("self"), identifier("global"))]))]);
  body.push(variableDeclaration("var", [variableDeclarator(namespace, assignmentExpression("=", memberExpression(identifier("global"), namespace), objectExpression([])))]));
  buildHelpers(body, namespace, allowlist);
  return tree;
}
function buildModule(allowlist) {
  const body = [];
  const refs = buildHelpers(body, null, allowlist);
  body.unshift(exportNamedDeclaration(null, Object.keys(refs).map(name => {
    return exportSpecifier(cloneNode(refs[name]), identifier(name));
  })));
  return program(body, [], "module");
}
function buildUmd(allowlist) {
  const namespace = identifier("babelHelpers");
  const body = [];
  body.push(variableDeclaration("var", [variableDeclarator(namespace, identifier("global"))]));
  buildHelpers(body, namespace, allowlist);
  return program([buildUmdWrapper({
    FACTORY_PARAMETERS: identifier("global"),
    BROWSER_ARGUMENTS: assignmentExpression("=", memberExpression(identifier("root"), namespace), objectExpression([])),
    COMMON_ARGUMENTS: identifier("exports"),
    AMD_ARGUMENTS: arrayExpression([stringLiteral("exports")]),
    FACTORY_BODY: body,
    UMD_ROOT: identifier("this")
  })]);
}
function buildVar(allowlist) {
  const namespace = identifier("babelHelpers");
  const body = [];
  body.push(variableDeclaration("var", [variableDeclarator(namespace, objectExpression([]))]));
  const tree = program(body);
  buildHelpers(body, namespace, allowlist);
  body.push(expressionStatement(namespace));
  return tree;
}
function buildHelpers(body, namespace, allowlist) {
  const getHelperReference = name => {
    return namespace ? memberExpression(namespace, identifier(name)) : identifier(`_${name}`);
  };
  const refs = {};
  helpers().list.forEach(function (name) {
    if (allowlist && allowlist.indexOf(name) < 0) return;
    const ref = refs[name] = getHelperReference(name);
    helpers().ensure(name, _file.default);
    const {
      nodes
    } = helpers().get(name, getHelperReference, ref);
    body.push(...nodes);
  });
  return refs;
}
function _default(allowlist, outputType = "global") {
  let tree;
  const build = {
    global: buildGlobal,
    module: buildModule,
    umd: buildUmd,
    var: buildVar
  }[outputType];
  if (build) {
    tree = build(allowlist);
  } else {
    throw new Error(`Unsupported output type ${outputType}`);
  }
  return (0, _generator().default)(tree).code;
}
0 && 0;

//# sourceMappingURL=build-external-helpers.js.map

}, function(modId) { var map = {"../transformation/file/file":1679363156082}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679363156084, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "ROOT_CONFIG_FILENAMES", {
  enumerable: true,
  get: function () {
    return _configuration.ROOT_CONFIG_FILENAMES;
  }
});
Object.defineProperty(exports, "findConfigUpwards", {
  enumerable: true,
  get: function () {
    return _configuration.findConfigUpwards;
  }
});
Object.defineProperty(exports, "findPackageData", {
  enumerable: true,
  get: function () {
    return _package.findPackageData;
  }
});
Object.defineProperty(exports, "findRelativeConfig", {
  enumerable: true,
  get: function () {
    return _configuration.findRelativeConfig;
  }
});
Object.defineProperty(exports, "findRootConfig", {
  enumerable: true,
  get: function () {
    return _configuration.findRootConfig;
  }
});
Object.defineProperty(exports, "loadConfig", {
  enumerable: true,
  get: function () {
    return _configuration.loadConfig;
  }
});
Object.defineProperty(exports, "loadPlugin", {
  enumerable: true,
  get: function () {
    return plugins.loadPlugin;
  }
});
Object.defineProperty(exports, "loadPreset", {
  enumerable: true,
  get: function () {
    return plugins.loadPreset;
  }
});
exports.resolvePreset = exports.resolvePlugin = void 0;
Object.defineProperty(exports, "resolveShowConfigPath", {
  enumerable: true,
  get: function () {
    return _configuration.resolveShowConfigPath;
  }
});
var _package = require("./package");
var _configuration = require("./configuration");
var plugins = require("./plugins");
function _gensync() {
  const data = require("gensync");
  _gensync = function () {
    return data;
  };
  return data;
}
({});
const resolvePlugin = _gensync()(plugins.resolvePlugin).sync;
exports.resolvePlugin = resolvePlugin;
const resolvePreset = _gensync()(plugins.resolvePreset).sync;
exports.resolvePreset = resolvePreset;
0 && 0;

//# sourceMappingURL=index.js.map

}, function(modId) { var map = {"./package":1679363156085,"./configuration":1679363156093,"./plugins":1679363156124}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679363156085, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findPackageData = findPackageData;
function _path() {
  const data = require("path");
  _path = function () {
    return data;
  };
  return data;
}
var _utils = require("./utils");
var _configError = require("../../errors/config-error");
const PACKAGE_FILENAME = "package.json";
const readConfigPackage = (0, _utils.makeStaticFileCache)((filepath, content) => {
  let options;
  try {
    options = JSON.parse(content);
  } catch (err) {
    throw new _configError.default(`Error while parsing JSON - ${err.message}`, filepath);
  }
  if (!options) throw new Error(`${filepath}: No config detected`);
  if (typeof options !== "object") {
    throw new _configError.default(`Config returned typeof ${typeof options}`, filepath);
  }
  if (Array.isArray(options)) {
    throw new _configError.default(`Expected config object but found array`, filepath);
  }
  return {
    filepath,
    dirname: _path().dirname(filepath),
    options
  };
});
function* findPackageData(filepath) {
  let pkg = null;
  const directories = [];
  let isPackage = true;
  let dirname = _path().dirname(filepath);
  while (!pkg && _path().basename(dirname) !== "node_modules") {
    directories.push(dirname);
    pkg = yield* readConfigPackage(_path().join(dirname, PACKAGE_FILENAME));
    const nextLoc = _path().dirname(dirname);
    if (dirname === nextLoc) {
      isPackage = false;
      break;
    }
    dirname = nextLoc;
  }
  return {
    filepath,
    directories,
    pkg,
    isPackage
  };
}
0 && 0;

//# sourceMappingURL=package.js.map

}, function(modId) { var map = {"./utils":1679363156086,"../../errors/config-error":1679363156091}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679363156086, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeStaticFileCache = makeStaticFileCache;
var _caching = require("../caching");
var fs = require("../../gensync-utils/fs");
function _fs2() {
  const data = require("fs");
  _fs2 = function () {
    return data;
  };
  return data;
}
function makeStaticFileCache(fn) {
  return (0, _caching.makeStrongCache)(function* (filepath, cache) {
    const cached = cache.invalidate(() => fileMtime(filepath));
    if (cached === null) {
      return null;
    }
    return fn(filepath, yield* fs.readFile(filepath, "utf8"));
  });
}
function fileMtime(filepath) {
  if (!_fs2().existsSync(filepath)) return null;
  try {
    return +_fs2().statSync(filepath).mtime;
  } catch (e) {
    if (e.code !== "ENOENT" && e.code !== "ENOTDIR") throw e;
  }
  return null;
}
0 && 0;

//# sourceMappingURL=utils.js.map

}, function(modId) { var map = {"../caching":1679363156087,"../../gensync-utils/fs":1679363156090}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679363156087, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.assertSimpleType = assertSimpleType;
exports.makeStrongCache = makeStrongCache;
exports.makeStrongCacheSync = makeStrongCacheSync;
exports.makeWeakCache = makeWeakCache;
exports.makeWeakCacheSync = makeWeakCacheSync;
function _gensync() {
  const data = require("gensync");
  _gensync = function () {
    return data;
  };
  return data;
}
var _async = require("../gensync-utils/async");
var _util = require("./util");
const synchronize = gen => {
  return _gensync()(gen).sync;
};
function* genTrue() {
  return true;
}
function makeWeakCache(handler) {
  return makeCachedFunction(WeakMap, handler);
}
function makeWeakCacheSync(handler) {
  return synchronize(makeWeakCache(handler));
}
function makeStrongCache(handler) {
  return makeCachedFunction(Map, handler);
}
function makeStrongCacheSync(handler) {
  return synchronize(makeStrongCache(handler));
}
function makeCachedFunction(CallCache, handler) {
  const callCacheSync = new CallCache();
  const callCacheAsync = new CallCache();
  const futureCache = new CallCache();
  return function* cachedFunction(arg, data) {
    const asyncContext = yield* (0, _async.isAsync)();
    const callCache = asyncContext ? callCacheAsync : callCacheSync;
    const cached = yield* getCachedValueOrWait(asyncContext, callCache, futureCache, arg, data);
    if (cached.valid) return cached.value;
    const cache = new CacheConfigurator(data);
    const handlerResult = handler(arg, cache);
    let finishLock;
    let value;
    if ((0, _util.isIterableIterator)(handlerResult)) {
      value = yield* (0, _async.onFirstPause)(handlerResult, () => {
        finishLock = setupAsyncLocks(cache, futureCache, arg);
      });
    } else {
      value = handlerResult;
    }
    updateFunctionCache(callCache, cache, arg, value);
    if (finishLock) {
      futureCache.delete(arg);
      finishLock.release(value);
    }
    return value;
  };
}
function* getCachedValue(cache, arg, data) {
  const cachedValue = cache.get(arg);
  if (cachedValue) {
    for (const {
      value,
      valid
    } of cachedValue) {
      if (yield* valid(data)) return {
        valid: true,
        value
      };
    }
  }
  return {
    valid: false,
    value: null
  };
}
function* getCachedValueOrWait(asyncContext, callCache, futureCache, arg, data) {
  const cached = yield* getCachedValue(callCache, arg, data);
  if (cached.valid) {
    return cached;
  }
  if (asyncContext) {
    const cached = yield* getCachedValue(futureCache, arg, data);
    if (cached.valid) {
      const value = yield* (0, _async.waitFor)(cached.value.promise);
      return {
        valid: true,
        value
      };
    }
  }
  return {
    valid: false,
    value: null
  };
}
function setupAsyncLocks(config, futureCache, arg) {
  const finishLock = new Lock();
  updateFunctionCache(futureCache, config, arg, finishLock);
  return finishLock;
}
function updateFunctionCache(cache, config, arg, value) {
  if (!config.configured()) config.forever();
  let cachedValue = cache.get(arg);
  config.deactivate();
  switch (config.mode()) {
    case "forever":
      cachedValue = [{
        value,
        valid: genTrue
      }];
      cache.set(arg, cachedValue);
      break;
    case "invalidate":
      cachedValue = [{
        value,
        valid: config.validator()
      }];
      cache.set(arg, cachedValue);
      break;
    case "valid":
      if (cachedValue) {
        cachedValue.push({
          value,
          valid: config.validator()
        });
      } else {
        cachedValue = [{
          value,
          valid: config.validator()
        }];
        cache.set(arg, cachedValue);
      }
  }
}
class CacheConfigurator {
  constructor(data) {
    this._active = true;
    this._never = false;
    this._forever = false;
    this._invalidate = false;
    this._configured = false;
    this._pairs = [];
    this._data = void 0;
    this._data = data;
  }
  simple() {
    return makeSimpleConfigurator(this);
  }
  mode() {
    if (this._never) return "never";
    if (this._forever) return "forever";
    if (this._invalidate) return "invalidate";
    return "valid";
  }
  forever() {
    if (!this._active) {
      throw new Error("Cannot change caching after evaluation has completed.");
    }
    if (this._never) {
      throw new Error("Caching has already been configured with .never()");
    }
    this._forever = true;
    this._configured = true;
  }
  never() {
    if (!this._active) {
      throw new Error("Cannot change caching after evaluation has completed.");
    }
    if (this._forever) {
      throw new Error("Caching has already been configured with .forever()");
    }
    this._never = true;
    this._configured = true;
  }
  using(handler) {
    if (!this._active) {
      throw new Error("Cannot change caching after evaluation has completed.");
    }
    if (this._never || this._forever) {
      throw new Error("Caching has already been configured with .never or .forever()");
    }
    this._configured = true;
    const key = handler(this._data);
    const fn = (0, _async.maybeAsync)(handler, `You appear to be using an async cache handler, but Babel has been called synchronously`);
    if ((0, _async.isThenable)(key)) {
      return key.then(key => {
        this._pairs.push([key, fn]);
        return key;
      });
    }
    this._pairs.push([key, fn]);
    return key;
  }
  invalidate(handler) {
    this._invalidate = true;
    return this.using(handler);
  }
  validator() {
    const pairs = this._pairs;
    return function* (data) {
      for (const [key, fn] of pairs) {
        if (key !== (yield* fn(data))) return false;
      }
      return true;
    };
  }
  deactivate() {
    this._active = false;
  }
  configured() {
    return this._configured;
  }
}
function makeSimpleConfigurator(cache) {
  function cacheFn(val) {
    if (typeof val === "boolean") {
      if (val) cache.forever();else cache.never();
      return;
    }
    return cache.using(() => assertSimpleType(val()));
  }
  cacheFn.forever = () => cache.forever();
  cacheFn.never = () => cache.never();
  cacheFn.using = cb => cache.using(() => assertSimpleType(cb()));
  cacheFn.invalidate = cb => cache.invalidate(() => assertSimpleType(cb()));
  return cacheFn;
}
function assertSimpleType(value) {
  if ((0, _async.isThenable)(value)) {
    throw new Error(`You appear to be using an async cache handler, ` + `which your current version of Babel does not support. ` + `We may add support for this in the future, ` + `but if you're on the most recent version of @babel/core and still ` + `seeing this error, then you'll need to synchronously handle your caching logic.`);
  }
  if (value != null && typeof value !== "string" && typeof value !== "boolean" && typeof value !== "number") {
    throw new Error("Cache keys must be either string, boolean, number, null, or undefined.");
  }
  return value;
}
class Lock {
  constructor() {
    this.released = false;
    this.promise = void 0;
    this._resolve = void 0;
    this.promise = new Promise(resolve => {
      this._resolve = resolve;
    });
  }
  release(value) {
    this.released = true;
    this._resolve(value);
  }
}
0 && 0;

//# sourceMappingURL=caching.js.map

}, function(modId) { var map = {"../gensync-utils/async":1679363156088,"./util":1679363156089}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679363156088, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.forwardAsync = forwardAsync;
exports.isAsync = void 0;
exports.isThenable = isThenable;
exports.maybeAsync = maybeAsync;
exports.waitFor = exports.onFirstPause = void 0;
function _gensync() {
  const data = require("gensync");
  _gensync = function () {
    return data;
  };
  return data;
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
const runGenerator = _gensync()(function* (item) {
  return yield* item;
});
const isAsync = _gensync()({
  sync: () => false,
  errback: cb => cb(null, true)
});
exports.isAsync = isAsync;
function maybeAsync(fn, message) {
  return _gensync()({
    sync(...args) {
      const result = fn.apply(this, args);
      if (isThenable(result)) throw new Error(message);
      return result;
    },
    async(...args) {
      return Promise.resolve(fn.apply(this, args));
    }
  });
}
const withKind = _gensync()({
  sync: cb => cb("sync"),
  async: function () {
    var _ref = _asyncToGenerator(function* (cb) {
      return cb("async");
    });
    return function async(_x) {
      return _ref.apply(this, arguments);
    };
  }()
});
function forwardAsync(action, cb) {
  const g = _gensync()(action);
  return withKind(kind => {
    const adapted = g[kind];
    return cb(adapted);
  });
}
const onFirstPause = _gensync()({
  name: "onFirstPause",
  arity: 2,
  sync: function (item) {
    return runGenerator.sync(item);
  },
  errback: function (item, firstPause, cb) {
    let completed = false;
    runGenerator.errback(item, (err, value) => {
      completed = true;
      cb(err, value);
    });
    if (!completed) {
      firstPause();
    }
  }
});
exports.onFirstPause = onFirstPause;
const waitFor = _gensync()({
  sync: x => x,
  async: function () {
    var _ref2 = _asyncToGenerator(function* (x) {
      return x;
    });
    return function async(_x2) {
      return _ref2.apply(this, arguments);
    };
  }()
});
exports.waitFor = waitFor;
function isThenable(val) {
  return !!val && (typeof val === "object" || typeof val === "function") && !!val.then && typeof val.then === "function";
}
0 && 0;

//# sourceMappingURL=async.js.map

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679363156089, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isIterableIterator = isIterableIterator;
exports.mergeOptions = mergeOptions;
function mergeOptions(target, source) {
  for (const k of Object.keys(source)) {
    if ((k === "parserOpts" || k === "generatorOpts" || k === "assumptions") && source[k]) {
      const parserOpts = source[k];
      const targetObj = target[k] || (target[k] = {});
      mergeDefaultFields(targetObj, parserOpts);
    } else {
      const val = source[k];
      if (val !== undefined) target[k] = val;
    }
  }
}
function mergeDefaultFields(target, source) {
  for (const k of Object.keys(source)) {
    const val = source[k];
    if (val !== undefined) target[k] = val;
  }
}
function isIterableIterator(value) {
  return !!value && typeof value.next === "function" && typeof value[Symbol.iterator] === "function";
}
0 && 0;

//# sourceMappingURL=util.js.map

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679363156090, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.stat = exports.readFile = void 0;
function _fs() {
  const data = require("fs");
  _fs = function () {
    return data;
  };
  return data;
}
function _gensync() {
  const data = require("gensync");
  _gensync = function () {
    return data;
  };
  return data;
}
const readFile = _gensync()({
  sync: _fs().readFileSync,
  errback: _fs().readFile
});
exports.readFile = readFile;
const stat = _gensync()({
  sync: _fs().statSync,
  errback: _fs().stat
});
exports.stat = stat;
0 && 0;

//# sourceMappingURL=fs.js.map

}, function(modId) { var map = {"fs":1679363156090}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679363156091, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _rewriteStackTrace = require("./rewrite-stack-trace");
class ConfigError extends Error {
  constructor(message, filename) {
    super(message);
    (0, _rewriteStackTrace.expectedError)(this);
    if (filename) (0, _rewriteStackTrace.injectVirtualStackFrame)(this, filename);
  }
}
exports.default = ConfigError;
0 && 0;

//# sourceMappingURL=config-error.js.map

}, function(modId) { var map = {"./rewrite-stack-trace":1679363156092}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679363156092, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.beginHiddenCallStack = beginHiddenCallStack;
exports.endHiddenCallStack = endHiddenCallStack;
exports.expectedError = expectedError;
exports.injectVirtualStackFrame = injectVirtualStackFrame;
const ErrorToString = Function.call.bind(Error.prototype.toString);
const SUPPORTED = !!Error.captureStackTrace;
const START_HIDING = "startHiding - secret - don't use this - v1";
const STOP_HIDING = "stopHiding - secret - don't use this - v1";
const expectedErrors = new WeakSet();
const virtualFrames = new WeakMap();
function CallSite(filename) {
  return Object.create({
    isNative: () => false,
    isConstructor: () => false,
    isToplevel: () => true,
    getFileName: () => filename,
    getLineNumber: () => undefined,
    getColumnNumber: () => undefined,
    getFunctionName: () => undefined,
    getMethodName: () => undefined,
    getTypeName: () => undefined,
    toString: () => filename
  });
}
function injectVirtualStackFrame(error, filename) {
  if (!SUPPORTED) return;
  let frames = virtualFrames.get(error);
  if (!frames) virtualFrames.set(error, frames = []);
  frames.push(CallSite(filename));
  return error;
}
function expectedError(error) {
  if (!SUPPORTED) return;
  expectedErrors.add(error);
  return error;
}
function beginHiddenCallStack(fn) {
  if (!SUPPORTED) return fn;
  return Object.defineProperty(function (...args) {
    setupPrepareStackTrace();
    return fn(...args);
  }, "name", {
    value: STOP_HIDING
  });
}
function endHiddenCallStack(fn) {
  if (!SUPPORTED) return fn;
  return Object.defineProperty(function (...args) {
    return fn(...args);
  }, "name", {
    value: START_HIDING
  });
}
function setupPrepareStackTrace() {
  setupPrepareStackTrace = () => {};
  const {
    prepareStackTrace = defaultPrepareStackTrace
  } = Error;
  const MIN_STACK_TRACE_LIMIT = 50;
  Error.stackTraceLimit && (Error.stackTraceLimit = Math.max(Error.stackTraceLimit, MIN_STACK_TRACE_LIMIT));
  Error.prepareStackTrace = function stackTraceRewriter(err, trace) {
    let newTrace = [];
    const isExpected = expectedErrors.has(err);
    let status = isExpected ? "hiding" : "unknown";
    for (let i = 0; i < trace.length; i++) {
      const name = trace[i].getFunctionName();
      if (name === START_HIDING) {
        status = "hiding";
      } else if (name === STOP_HIDING) {
        if (status === "hiding") {
          status = "showing";
          if (virtualFrames.has(err)) {
            newTrace.unshift(...virtualFrames.get(err));
          }
        } else if (status === "unknown") {
          newTrace = trace;
          break;
        }
      } else if (status !== "hiding") {
        newTrace.push(trace[i]);
      }
    }
    return prepareStackTrace(err, newTrace);
  };
}
function defaultPrepareStackTrace(err, trace) {
  if (trace.length === 0) return ErrorToString(err);
  return `${ErrorToString(err)}\n    at ${trace.join("\n    at ")}`;
}
0 && 0;

//# sourceMappingURL=rewrite-stack-trace.js.map

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679363156093, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ROOT_CONFIG_FILENAMES = void 0;
exports.findConfigUpwards = findConfigUpwards;
exports.findRelativeConfig = findRelativeConfig;
exports.findRootConfig = findRootConfig;
exports.loadConfig = loadConfig;
exports.resolveShowConfigPath = resolveShowConfigPath;
function _debug() {
  const data = require("debug");
  _debug = function () {
    return data;
  };
  return data;
}
function _fs() {
  const data = require("fs");
  _fs = function () {
    return data;
  };
  return data;
}
function _path() {
  const data = require("path");
  _path = function () {
    return data;
  };
  return data;
}
function _json() {
  const data = require("json5");
  _json = function () {
    return data;
  };
  return data;
}
function _gensync() {
  const data = require("gensync");
  _gensync = function () {
    return data;
  };
  return data;
}
var _caching = require("../caching");
var _configApi = require("../helpers/config-api");
var _utils = require("./utils");
var _moduleTypes = require("./module-types");
var _patternToRegex = require("../pattern-to-regex");
var _configError = require("../../errors/config-error");
var fs = require("../../gensync-utils/fs");
var _rewriteStackTrace = require("../../errors/rewrite-stack-trace");
const debug = _debug()("babel:config:loading:files:configuration");
const ROOT_CONFIG_FILENAMES = ["babel.config.js", "babel.config.cjs", "babel.config.mjs", "babel.config.json", "babel.config.cts"];
exports.ROOT_CONFIG_FILENAMES = ROOT_CONFIG_FILENAMES;
const RELATIVE_CONFIG_FILENAMES = [".babelrc", ".babelrc.js", ".babelrc.cjs", ".babelrc.mjs", ".babelrc.json", ".babelrc.cts"];
const BABELIGNORE_FILENAME = ".babelignore";
const LOADING_CONFIGS = new Set();
const readConfigCode = (0, _caching.makeStrongCache)(function* readConfigCode(filepath, cache) {
  if (!_fs().existsSync(filepath)) {
    cache.never();
    return null;
  }
  if (LOADING_CONFIGS.has(filepath)) {
    cache.never();
    debug("Auto-ignoring usage of config %o.", filepath);
    return {
      filepath,
      dirname: _path().dirname(filepath),
      options: {}
    };
  }
  let options;
  try {
    LOADING_CONFIGS.add(filepath);
    options = yield* (0, _moduleTypes.default)(filepath, "You appear to be using a native ECMAScript module configuration " + "file, which is only supported when running Babel asynchronously.");
  } finally {
    LOADING_CONFIGS.delete(filepath);
  }
  let assertCache = false;
  if (typeof options === "function") {
    yield* [];
    options = (0, _rewriteStackTrace.endHiddenCallStack)(options)((0, _configApi.makeConfigAPI)(cache));
    assertCache = true;
  }
  if (!options || typeof options !== "object" || Array.isArray(options)) {
    throw new _configError.default(`Configuration should be an exported JavaScript object.`, filepath);
  }
  if (typeof options.then === "function") {
    throw new _configError.default(`You appear to be using an async configuration, ` + `which your current version of Babel does not support. ` + `We may add support for this in the future, ` + `but if you're on the most recent version of @babel/core and still ` + `seeing this error, then you'll need to synchronously return your config.`, filepath);
  }
  if (assertCache && !cache.configured()) throwConfigError(filepath);
  return {
    filepath,
    dirname: _path().dirname(filepath),
    options
  };
});
const packageToBabelConfig = (0, _caching.makeWeakCacheSync)(file => {
  const babel = file.options["babel"];
  if (typeof babel === "undefined") return null;
  if (typeof babel !== "object" || Array.isArray(babel) || babel === null) {
    throw new _configError.default(`.babel property must be an object`, file.filepath);
  }
  return {
    filepath: file.filepath,
    dirname: file.dirname,
    options: babel
  };
});
const readConfigJSON5 = (0, _utils.makeStaticFileCache)((filepath, content) => {
  let options;
  try {
    options = _json().parse(content);
  } catch (err) {
    throw new _configError.default(`Error while parsing config - ${err.message}`, filepath);
  }
  if (!options) throw new _configError.default(`No config detected`, filepath);
  if (typeof options !== "object") {
    throw new _configError.default(`Config returned typeof ${typeof options}`, filepath);
  }
  if (Array.isArray(options)) {
    throw new _configError.default(`Expected config object but found array`, filepath);
  }
  delete options["$schema"];
  return {
    filepath,
    dirname: _path().dirname(filepath),
    options
  };
});
const readIgnoreConfig = (0, _utils.makeStaticFileCache)((filepath, content) => {
  const ignoreDir = _path().dirname(filepath);
  const ignorePatterns = content.split("\n").map(line => line.replace(/#(.*?)$/, "").trim()).filter(line => !!line);
  for (const pattern of ignorePatterns) {
    if (pattern[0] === "!") {
      throw new _configError.default(`Negation of file paths is not supported.`, filepath);
    }
  }
  return {
    filepath,
    dirname: _path().dirname(filepath),
    ignore: ignorePatterns.map(pattern => (0, _patternToRegex.default)(pattern, ignoreDir))
  };
});
function findConfigUpwards(rootDir) {
  let dirname = rootDir;
  for (;;) {
    for (const filename of ROOT_CONFIG_FILENAMES) {
      if (_fs().existsSync(_path().join(dirname, filename))) {
        return dirname;
      }
    }
    const nextDir = _path().dirname(dirname);
    if (dirname === nextDir) break;
    dirname = nextDir;
  }
  return null;
}
function* findRelativeConfig(packageData, envName, caller) {
  let config = null;
  let ignore = null;
  const dirname = _path().dirname(packageData.filepath);
  for (const loc of packageData.directories) {
    if (!config) {
      var _packageData$pkg;
      config = yield* loadOneConfig(RELATIVE_CONFIG_FILENAMES, loc, envName, caller, ((_packageData$pkg = packageData.pkg) == null ? void 0 : _packageData$pkg.dirname) === loc ? packageToBabelConfig(packageData.pkg) : null);
    }
    if (!ignore) {
      const ignoreLoc = _path().join(loc, BABELIGNORE_FILENAME);
      ignore = yield* readIgnoreConfig(ignoreLoc);
      if (ignore) {
        debug("Found ignore %o from %o.", ignore.filepath, dirname);
      }
    }
  }
  return {
    config,
    ignore
  };
}
function findRootConfig(dirname, envName, caller) {
  return loadOneConfig(ROOT_CONFIG_FILENAMES, dirname, envName, caller);
}
function* loadOneConfig(names, dirname, envName, caller, previousConfig = null) {
  const configs = yield* _gensync().all(names.map(filename => readConfig(_path().join(dirname, filename), envName, caller)));
  const config = configs.reduce((previousConfig, config) => {
    if (config && previousConfig) {
      throw new _configError.default(`Multiple configuration files found. Please remove one:\n` + ` - ${_path().basename(previousConfig.filepath)}\n` + ` - ${config.filepath}\n` + `from ${dirname}`);
    }
    return config || previousConfig;
  }, previousConfig);
  if (config) {
    debug("Found configuration %o from %o.", config.filepath, dirname);
  }
  return config;
}
function* loadConfig(name, dirname, envName, caller) {
  const filepath = (((v, w) => (v = v.split("."), w = w.split("."), +v[0] > +w[0] || v[0] == w[0] && +v[1] >= +w[1]))(process.versions.node, "8.9") ? require.resolve : (r, {
    paths: [b]
  }, M = require("module")) => {
    let f = M._findPath(r, M._nodeModulePaths(b).concat(b));
    if (f) return f;
    f = new Error(`Cannot resolve module '${r}'`);
    f.code = "MODULE_NOT_FOUND";
    throw f;
  })(name, {
    paths: [dirname]
  });
  const conf = yield* readConfig(filepath, envName, caller);
  if (!conf) {
    throw new _configError.default(`Config file contains no configuration data`, filepath);
  }
  debug("Loaded config %o from %o.", name, dirname);
  return conf;
}
function readConfig(filepath, envName, caller) {
  const ext = _path().extname(filepath);
  switch (ext) {
    case ".js":
    case ".cjs":
    case ".mjs":
    case ".cts":
      return readConfigCode(filepath, {
        envName,
        caller
      });
    default:
      return readConfigJSON5(filepath);
  }
}
function* resolveShowConfigPath(dirname) {
  const targetPath = process.env.BABEL_SHOW_CONFIG_FOR;
  if (targetPath != null) {
    const absolutePath = _path().resolve(dirname, targetPath);
    const stats = yield* fs.stat(absolutePath);
    if (!stats.isFile()) {
      throw new Error(`${absolutePath}: BABEL_SHOW_CONFIG_FOR must refer to a regular file, directories are not supported.`);
    }
    return absolutePath;
  }
  return null;
}
function throwConfigError(filepath) {
  throw new _configError.default(`\
Caching was left unconfigured. Babel's plugins, presets, and .babelrc.js files can be configured
for various types of caching, using the first param of their handler functions:

module.exports = function(api) {
  // The API exposes the following:

  // Cache the returned value forever and don't call this function again.
  api.cache(true);

  // Don't cache at all. Not recommended because it will be very slow.
  api.cache(false);

  // Cached based on the value of some function. If this function returns a value different from
  // a previously-encountered value, the plugins will re-evaluate.
  var env = api.cache(() => process.env.NODE_ENV);

  // If testing for a specific env, we recommend specifics to avoid instantiating a plugin for
  // any possible NODE_ENV value that might come up during plugin execution.
  var isProd = api.cache(() => process.env.NODE_ENV === "production");

  // .cache(fn) will perform a linear search though instances to find the matching plugin based
  // based on previous instantiated plugins. If you want to recreate the plugin and discard the
  // previous instance whenever something changes, you may use:
  var isProd = api.cache.invalidate(() => process.env.NODE_ENV === "production");

  // Note, we also expose the following more-verbose versions of the above examples:
  api.cache.forever(); // api.cache(true)
  api.cache.never();   // api.cache(false)
  api.cache.using(fn); // api.cache(fn)

  // Return the value that will be cached.
  return { };
};`, filepath);
}
0 && 0;

//# sourceMappingURL=configuration.js.map

}, function(modId) { var map = {"../caching":1679363156087,"../helpers/config-api":1679363156094,"./utils":1679363156086,"./module-types":1679363156095,"../pattern-to-regex":1679363156109,"../../errors/config-error":1679363156091,"../../gensync-utils/fs":1679363156090,"../../errors/rewrite-stack-trace":1679363156092}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679363156094, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeConfigAPI = makeConfigAPI;
exports.makePluginAPI = makePluginAPI;
exports.makePresetAPI = makePresetAPI;
function _semver() {
  const data = require("semver");
  _semver = function () {
    return data;
  };
  return data;
}
var _ = require("../../");
var _caching = require("../caching");
function makeConfigAPI(cache) {
  const env = value => cache.using(data => {
    if (typeof value === "undefined") return data.envName;
    if (typeof value === "function") {
      return (0, _caching.assertSimpleType)(value(data.envName));
    }
    return (Array.isArray(value) ? value : [value]).some(entry => {
      if (typeof entry !== "string") {
        throw new Error("Unexpected non-string value");
      }
      return entry === data.envName;
    });
  });
  const caller = cb => cache.using(data => (0, _caching.assertSimpleType)(cb(data.caller)));
  return {
    version: _.version,
    cache: cache.simple(),
    env,
    async: () => false,
    caller,
    assertVersion
  };
}
function makePresetAPI(cache, externalDependencies) {
  const targets = () => JSON.parse(cache.using(data => JSON.stringify(data.targets)));
  const addExternalDependency = ref => {
    externalDependencies.push(ref);
  };
  return Object.assign({}, makeConfigAPI(cache), {
    targets,
    addExternalDependency
  });
}
function makePluginAPI(cache, externalDependencies) {
  const assumption = name => cache.using(data => data.assumptions[name]);
  return Object.assign({}, makePresetAPI(cache, externalDependencies), {
    assumption
  });
}
function assertVersion(range) {
  if (typeof range === "number") {
    if (!Number.isInteger(range)) {
      throw new Error("Expected string or integer value.");
    }
    range = `^${range}.0.0-0`;
  }
  if (typeof range !== "string") {
    throw new Error("Expected string or integer value.");
  }
  if (_semver().satisfies(_.version, range)) return;
  const limit = Error.stackTraceLimit;
  if (typeof limit === "number" && limit < 25) {
    Error.stackTraceLimit = 25;
  }
  const err = new Error(`Requires Babel "${range}", but was loaded with "${_.version}". ` + `If you are sure you have a compatible version of @babel/core, ` + `it is likely that something in your build process is loading the ` + `wrong version. Inspect the stack trace of this error to look for ` + `the first entry that doesn't mention "@babel/core" or "babel-core" ` + `to see what is calling Babel.`);
  if (typeof limit === "number") {
    Error.stackTraceLimit = limit;
  }
  throw Object.assign(err, {
    code: "BABEL_VERSION_UNSUPPORTED",
    version: _.version,
    range
  });
}
0 && 0;

//# sourceMappingURL=config-api.js.map

}, function(modId) { var map = {"../../":1679363156081,"../caching":1679363156087}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679363156095, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = loadCodeDefault;
exports.supportsESM = void 0;
var _async = require("../../gensync-utils/async");
function _path() {
  const data = require("path");
  _path = function () {
    return data;
  };
  return data;
}
function _url() {
  const data = require("url");
  _url = function () {
    return data;
  };
  return data;
}
function _semver() {
  const data = require("semver");
  _semver = function () {
    return data;
  };
  return data;
}
var _rewriteStackTrace = require("../../errors/rewrite-stack-trace");
var _configError = require("../../errors/config-error");
var _transformFile = require("../../transform-file");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
let import_;
try {
  import_ = require("./import.cjs");
} catch (_unused) {}
const supportsESM = _semver().satisfies(process.versions.node, "^12.17 || >=13.2");
exports.supportsESM = supportsESM;
function* loadCodeDefault(filepath, asyncError, fallbackToTranspiledModule = false) {
  switch (_path().extname(filepath)) {
    case ".cjs":
      return loadCjsDefault(filepath, fallbackToTranspiledModule);
    case ".mjs":
      break;
    case ".cts":
      return loadCtsDefault(filepath);
    default:
      try {
        return loadCjsDefault(filepath, fallbackToTranspiledModule);
      } catch (e) {
        if (e.code !== "ERR_REQUIRE_ESM") throw e;
      }
  }
  if (yield* (0, _async.isAsync)()) {
    return yield* (0, _async.waitFor)(loadMjsDefault(filepath));
  }
  throw new _configError.default(asyncError, filepath);
}
function loadCtsDefault(filepath) {
  const ext = ".cts";
  const hasTsSupport = !!(require.extensions[".ts"] || require.extensions[".cts"] || require.extensions[".mts"]);
  let handler;
  if (!hasTsSupport) {
    const opts = {
      babelrc: false,
      configFile: false,
      sourceType: "script",
      sourceMaps: "inline",
      presets: [[getTSPreset(filepath), Object.assign({
        disallowAmbiguousJSXLike: true,
        allExtensions: true,
        onlyRemoveTypeImports: true,
        optimizeConstEnums: true
      }, {
        allowDeclareFields: true
      })]]
    };
    handler = function (m, filename) {
      if (handler && filename.endsWith(ext)) {
        return m._compile((0, _transformFile.transformFileSync)(filename, Object.assign({}, opts, {
          filename
        })).code, filename);
      }
      return require.extensions[".js"](m, filename);
    };
    require.extensions[ext] = handler;
  }
  try {
    return (0, _rewriteStackTrace.endHiddenCallStack)(require)(filepath);
  } finally {
    if (!hasTsSupport) {
      if (require.extensions[ext] === handler) delete require.extensions[ext];
      handler = undefined;
    }
  }
}
function loadCjsDefault(filepath, fallbackToTranspiledModule) {
  const module = (0, _rewriteStackTrace.endHiddenCallStack)(require)(filepath);
  return module != null && module.__esModule ? module.default || (fallbackToTranspiledModule ? module : undefined) : module;
}
function loadMjsDefault(_x) {
  return _loadMjsDefault.apply(this, arguments);
}
function _loadMjsDefault() {
  _loadMjsDefault = _asyncToGenerator(function* (filepath) {
    if (!import_) {
      throw new _configError.default("Internal error: Native ECMAScript modules aren't supported by this platform.\n", filepath);
    }
    const module = yield (0, _rewriteStackTrace.endHiddenCallStack)(import_)((0, _url().pathToFileURL)(filepath));
    return module.default;
  });
  return _loadMjsDefault.apply(this, arguments);
}
function getTSPreset(filepath) {
  try {
    return require("@babel/preset-typescript");
  } catch (error) {
    if (error.code !== "MODULE_NOT_FOUND") throw error;
    let message = "You appear to be using a .cts file as Babel configuration, but the `@babel/preset-typescript` package was not found: please install it!";
    if (process.versions.pnp) {
      message += `
If you are using Yarn Plug'n'Play, you may also need to add the following configuration to your .yarnrc.yml file:

packageExtensions:
\t"@babel/core@*":
\t\tpeerDependencies:
\t\t\t"@babel/preset-typescript": "*"
`;
    }
    throw new _configError.default(message, filepath);
  }
}
0 && 0;

//# sourceMappingURL=module-types.js.map

}, function(modId) { var map = {"../../gensync-utils/async":1679363156088,"../../errors/rewrite-stack-trace":1679363156092,"../../errors/config-error":1679363156091,"../../transform-file":1679363156096}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679363156096, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.transformFile = transformFile;
exports.transformFileAsync = transformFileAsync;
exports.transformFileSync = transformFileSync;
function _gensync() {
  const data = require("gensync");
  _gensync = function () {
    return data;
  };
  return data;
}
var _config = require("./config");
var _transformation = require("./transformation");
var fs = require("./gensync-utils/fs");
({});
const transformFileRunner = _gensync()(function* (filename, opts) {
  const options = Object.assign({}, opts, {
    filename
  });
  const config = yield* (0, _config.default)(options);
  if (config === null) return null;
  const code = yield* fs.readFile(filename, "utf8");
  return yield* (0, _transformation.run)(config, code);
});
function transformFile(...args) {
  transformFileRunner.errback(...args);
}
function transformFileSync(...args) {
  return transformFileRunner.sync(...args);
}
function transformFileAsync(...args) {
  return transformFileRunner.async(...args);
}
0 && 0;

//# sourceMappingURL=transform-file.js.map

}, function(modId) { var map = {"./config":1679363156097,"./transformation":1679363156114,"./gensync-utils/fs":1679363156090}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679363156097, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createConfigItem = createConfigItem;
exports.createConfigItemSync = exports.createConfigItemAsync = void 0;
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function () {
    return _full.default;
  }
});
exports.loadPartialConfigSync = exports.loadPartialConfigAsync = exports.loadPartialConfig = exports.loadOptionsSync = exports.loadOptionsAsync = exports.loadOptions = void 0;
function _gensync() {
  const data = require("gensync");
  _gensync = function () {
    return data;
  };
  return data;
}
var _full = require("./full");
var _partial = require("./partial");
var _item = require("./item");
const loadOptionsRunner = _gensync()(function* (opts) {
  var _config$options;
  const config = yield* (0, _full.default)(opts);
  return (_config$options = config == null ? void 0 : config.options) != null ? _config$options : null;
});
const createConfigItemRunner = _gensync()(_item.createConfigItem);
const maybeErrback = runner => (argOrCallback, maybeCallback) => {
  let arg;
  let callback;
  if (maybeCallback === undefined && typeof argOrCallback === "function") {
    callback = argOrCallback;
    arg = undefined;
  } else {
    callback = maybeCallback;
    arg = argOrCallback;
  }
  if (!callback) {
    return runner.sync(arg);
  }
  runner.errback(arg, callback);
};
const loadPartialConfig = maybeErrback(_partial.loadPartialConfig);
exports.loadPartialConfig = loadPartialConfig;
const loadPartialConfigSync = _partial.loadPartialConfig.sync;
exports.loadPartialConfigSync = loadPartialConfigSync;
const loadPartialConfigAsync = _partial.loadPartialConfig.async;
exports.loadPartialConfigAsync = loadPartialConfigAsync;
const loadOptions = maybeErrback(loadOptionsRunner);
exports.loadOptions = loadOptions;
const loadOptionsSync = loadOptionsRunner.sync;
exports.loadOptionsSync = loadOptionsSync;
const loadOptionsAsync = loadOptionsRunner.async;
exports.loadOptionsAsync = loadOptionsAsync;
const createConfigItemSync = createConfigItemRunner.sync;
exports.createConfigItemSync = createConfigItemSync;
const createConfigItemAsync = createConfigItemRunner.async;
exports.createConfigItemAsync = createConfigItemAsync;
function createConfigItem(target, options, callback) {
  if (callback !== undefined) {
    createConfigItemRunner.errback(target, options, callback);
  } else if (typeof options === "function") {
    createConfigItemRunner.errback(target, undefined, callback);
  } else {
    return createConfigItemRunner.sync(target, options);
  }
}
0 && 0;

//# sourceMappingURL=index.js.map

}, function(modId) { var map = {"./full":1679363156098,"./partial":1679363156112,"./item":1679363156101}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679363156098, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
function _gensync() {
  const data = require("gensync");
  _gensync = function () {
    return data;
  };
  return data;
}
var _async = require("../gensync-utils/async");
var _util = require("./util");
var context = require("../index");
var _plugin = require("./plugin");
var _item = require("./item");
var _configChain = require("./config-chain");
var _deepArray = require("./helpers/deep-array");
function _traverse() {
  const data = require("@babel/traverse");
  _traverse = function () {
    return data;
  };
  return data;
}
var _caching = require("./caching");
var _options = require("./validation/options");
var _plugins = require("./validation/plugins");
var _configApi = require("./helpers/config-api");
var _partial = require("./partial");
var _configError = require("../errors/config-error");
var _default = _gensync()(function* loadFullConfig(inputOpts) {
  var _opts$assumptions;
  const result = yield* (0, _partial.default)(inputOpts);
  if (!result) {
    return null;
  }
  const {
    options,
    context,
    fileHandling
  } = result;
  if (fileHandling === "ignored") {
    return null;
  }
  const optionDefaults = {};
  const {
    plugins,
    presets
  } = options;
  if (!plugins || !presets) {
    throw new Error("Assertion failure - plugins and presets exist");
  }
  const presetContext = Object.assign({}, context, {
    targets: options.targets
  });
  const toDescriptor = item => {
    const desc = (0, _item.getItemDescriptor)(item);
    if (!desc) {
      throw new Error("Assertion failure - must be config item");
    }
    return desc;
  };
  const presetsDescriptors = presets.map(toDescriptor);
  const initialPluginsDescriptors = plugins.map(toDescriptor);
  const pluginDescriptorsByPass = [[]];
  const passes = [];
  const externalDependencies = [];
  const ignored = yield* enhanceError(context, function* recursePresetDescriptors(rawPresets, pluginDescriptorsPass) {
    const presets = [];
    for (let i = 0; i < rawPresets.length; i++) {
      const descriptor = rawPresets[i];
      if (descriptor.options !== false) {
        try {
          var preset = yield* loadPresetDescriptor(descriptor, presetContext);
        } catch (e) {
          if (e.code === "BABEL_UNKNOWN_OPTION") {
            (0, _options.checkNoUnwrappedItemOptionPairs)(rawPresets, i, "preset", e);
          }
          throw e;
        }
        externalDependencies.push(preset.externalDependencies);
        if (descriptor.ownPass) {
          presets.push({
            preset: preset.chain,
            pass: []
          });
        } else {
          presets.unshift({
            preset: preset.chain,
            pass: pluginDescriptorsPass
          });
        }
      }
    }
    if (presets.length > 0) {
      pluginDescriptorsByPass.splice(1, 0, ...presets.map(o => o.pass).filter(p => p !== pluginDescriptorsPass));
      for (const {
        preset,
        pass
      } of presets) {
        if (!preset) return true;
        pass.push(...preset.plugins);
        const ignored = yield* recursePresetDescriptors(preset.presets, pass);
        if (ignored) return true;
        preset.options.forEach(opts => {
          (0, _util.mergeOptions)(optionDefaults, opts);
        });
      }
    }
  })(presetsDescriptors, pluginDescriptorsByPass[0]);
  if (ignored) return null;
  const opts = optionDefaults;
  (0, _util.mergeOptions)(opts, options);
  const pluginContext = Object.assign({}, presetContext, {
    assumptions: (_opts$assumptions = opts.assumptions) != null ? _opts$assumptions : {}
  });
  yield* enhanceError(context, function* loadPluginDescriptors() {
    pluginDescriptorsByPass[0].unshift(...initialPluginsDescriptors);
    for (const descs of pluginDescriptorsByPass) {
      const pass = [];
      passes.push(pass);
      for (let i = 0; i < descs.length; i++) {
        const descriptor = descs[i];
        if (descriptor.options !== false) {
          try {
            var plugin = yield* loadPluginDescriptor(descriptor, pluginContext);
          } catch (e) {
            if (e.code === "BABEL_UNKNOWN_PLUGIN_PROPERTY") {
              (0, _options.checkNoUnwrappedItemOptionPairs)(descs, i, "plugin", e);
            }
            throw e;
          }
          pass.push(plugin);
          externalDependencies.push(plugin.externalDependencies);
        }
      }
    }
  })();
  opts.plugins = passes[0];
  opts.presets = passes.slice(1).filter(plugins => plugins.length > 0).map(plugins => ({
    plugins
  }));
  opts.passPerPreset = opts.presets.length > 0;
  return {
    options: opts,
    passes: passes,
    externalDependencies: (0, _deepArray.finalize)(externalDependencies)
  };
});
exports.default = _default;
function enhanceError(context, fn) {
  return function* (arg1, arg2) {
    try {
      return yield* fn(arg1, arg2);
    } catch (e) {
      if (!/^\[BABEL\]/.test(e.message)) {
        var _context$filename;
        e.message = `[BABEL] ${(_context$filename = context.filename) != null ? _context$filename : "unknown file"}: ${e.message}`;
      }
      throw e;
    }
  };
}
const makeDescriptorLoader = apiFactory => (0, _caching.makeWeakCache)(function* ({
  value,
  options,
  dirname,
  alias
}, cache) {
  if (options === false) throw new Error("Assertion failure");
  options = options || {};
  const externalDependencies = [];
  let item = value;
  if (typeof value === "function") {
    const factory = (0, _async.maybeAsync)(value, `You appear to be using an async plugin/preset, but Babel has been called synchronously`);
    const api = Object.assign({}, context, apiFactory(cache, externalDependencies));
    try {
      item = yield* factory(api, options, dirname);
    } catch (e) {
      if (alias) {
        e.message += ` (While processing: ${JSON.stringify(alias)})`;
      }
      throw e;
    }
  }
  if (!item || typeof item !== "object") {
    throw new Error("Plugin/Preset did not return an object.");
  }
  if ((0, _async.isThenable)(item)) {
    yield* [];
    throw new Error(`You appear to be using a promise as a plugin, ` + `which your current version of Babel does not support. ` + `If you're using a published plugin, ` + `you may need to upgrade your @babel/core version. ` + `As an alternative, you can prefix the promise with "await". ` + `(While processing: ${JSON.stringify(alias)})`);
  }
  if (externalDependencies.length > 0 && (!cache.configured() || cache.mode() === "forever")) {
    let error = `A plugin/preset has external untracked dependencies ` + `(${externalDependencies[0]}), but the cache `;
    if (!cache.configured()) {
      error += `has not been configured to be invalidated when the external dependencies change. `;
    } else {
      error += ` has been configured to never be invalidated. `;
    }
    error += `Plugins/presets should configure their cache to be invalidated when the external ` + `dependencies change, for example using \`api.cache.invalidate(() => ` + `statSync(filepath).mtimeMs)\` or \`api.cache.never()\`\n` + `(While processing: ${JSON.stringify(alias)})`;
    throw new Error(error);
  }
  return {
    value: item,
    options,
    dirname,
    alias,
    externalDependencies: (0, _deepArray.finalize)(externalDependencies)
  };
});
const pluginDescriptorLoader = makeDescriptorLoader(_configApi.makePluginAPI);
const presetDescriptorLoader = makeDescriptorLoader(_configApi.makePresetAPI);
const instantiatePlugin = (0, _caching.makeWeakCache)(function* ({
  value,
  options,
  dirname,
  alias,
  externalDependencies
}, cache) {
  const pluginObj = (0, _plugins.validatePluginObject)(value);
  const plugin = Object.assign({}, pluginObj);
  if (plugin.visitor) {
    plugin.visitor = _traverse().default.explode(Object.assign({}, plugin.visitor));
  }
  if (plugin.inherits) {
    const inheritsDescriptor = {
      name: undefined,
      alias: `${alias}$inherits`,
      value: plugin.inherits,
      options,
      dirname
    };
    const inherits = yield* (0, _async.forwardAsync)(loadPluginDescriptor, run => {
      return cache.invalidate(data => run(inheritsDescriptor, data));
    });
    plugin.pre = chain(inherits.pre, plugin.pre);
    plugin.post = chain(inherits.post, plugin.post);
    plugin.manipulateOptions = chain(inherits.manipulateOptions, plugin.manipulateOptions);
    plugin.visitor = _traverse().default.visitors.merge([inherits.visitor || {}, plugin.visitor || {}]);
    if (inherits.externalDependencies.length > 0) {
      if (externalDependencies.length === 0) {
        externalDependencies = inherits.externalDependencies;
      } else {
        externalDependencies = (0, _deepArray.finalize)([externalDependencies, inherits.externalDependencies]);
      }
    }
  }
  return new _plugin.default(plugin, options, alias, externalDependencies);
});
function* loadPluginDescriptor(descriptor, context) {
  if (descriptor.value instanceof _plugin.default) {
    if (descriptor.options) {
      throw new Error("Passed options to an existing Plugin instance will not work.");
    }
    return descriptor.value;
  }
  return yield* instantiatePlugin(yield* pluginDescriptorLoader(descriptor, context), context);
}
const needsFilename = val => val && typeof val !== "function";
const validateIfOptionNeedsFilename = (options, descriptor) => {
  if (needsFilename(options.test) || needsFilename(options.include) || needsFilename(options.exclude)) {
    const formattedPresetName = descriptor.name ? `"${descriptor.name}"` : "/* your preset */";
    throw new _configError.default([`Preset ${formattedPresetName} requires a filename to be set when babel is called directly,`, `\`\`\``, `babel.transformSync(code, { filename: 'file.ts', presets: [${formattedPresetName}] });`, `\`\`\``, `See https://babeljs.io/docs/en/options#filename for more information.`].join("\n"));
  }
};
const validatePreset = (preset, context, descriptor) => {
  if (!context.filename) {
    const {
      options
    } = preset;
    validateIfOptionNeedsFilename(options, descriptor);
    if (options.overrides) {
      options.overrides.forEach(overrideOptions => validateIfOptionNeedsFilename(overrideOptions, descriptor));
    }
  }
};
const instantiatePreset = (0, _caching.makeWeakCacheSync)(({
  value,
  dirname,
  alias,
  externalDependencies
}) => {
  return {
    options: (0, _options.validate)("preset", value),
    alias,
    dirname,
    externalDependencies
  };
});
function* loadPresetDescriptor(descriptor, context) {
  const preset = instantiatePreset(yield* presetDescriptorLoader(descriptor, context));
  validatePreset(preset, context, descriptor);
  return {
    chain: yield* (0, _configChain.buildPresetChain)(preset, context),
    externalDependencies: preset.externalDependencies
  };
}
function chain(a, b) {
  const fns = [a, b].filter(Boolean);
  if (fns.length <= 1) return fns[0];
  return function (...args) {
    for (const fn of fns) {
      fn.apply(this, args);
    }
  };
}
0 && 0;

//# sourceMappingURL=full.js.map

}, function(modId) { var map = {"../gensync-utils/async":1679363156088,"./util":1679363156089,"../index":1679363156081,"./plugin":1679363156099,"./item":1679363156101,"./config-chain":1679363156105,"./helpers/deep-array":1679363156100,"./caching":1679363156087,"./validation/options":1679363156106,"./validation/plugins":1679363156111,"./helpers/config-api":1679363156094,"./partial":1679363156112,"../errors/config-error":1679363156091}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679363156099, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _deepArray = require("./helpers/deep-array");
class Plugin {
  constructor(plugin, options, key, externalDependencies = (0, _deepArray.finalize)([])) {
    this.key = void 0;
    this.manipulateOptions = void 0;
    this.post = void 0;
    this.pre = void 0;
    this.visitor = void 0;
    this.parserOverride = void 0;
    this.generatorOverride = void 0;
    this.options = void 0;
    this.externalDependencies = void 0;
    this.key = plugin.name || key;
    this.manipulateOptions = plugin.manipulateOptions;
    this.post = plugin.post;
    this.pre = plugin.pre;
    this.visitor = plugin.visitor || {};
    this.parserOverride = plugin.parserOverride;
    this.generatorOverride = plugin.generatorOverride;
    this.options = options;
    this.externalDependencies = externalDependencies;
  }
}
exports.default = Plugin;
0 && 0;

//# sourceMappingURL=plugin.js.map

}, function(modId) { var map = {"./helpers/deep-array":1679363156100}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679363156100, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.finalize = finalize;
exports.flattenToSet = flattenToSet;
function finalize(deepArr) {
  return Object.freeze(deepArr);
}
function flattenToSet(arr) {
  const result = new Set();
  const stack = [arr];
  while (stack.length > 0) {
    for (const el of stack.pop()) {
      if (Array.isArray(el)) stack.push(el);else result.add(el);
    }
  }
  return result;
}
0 && 0;

//# sourceMappingURL=deep-array.js.map

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679363156101, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createConfigItem = createConfigItem;
exports.createItemFromDescriptor = createItemFromDescriptor;
exports.getItemDescriptor = getItemDescriptor;
function _path() {
  const data = require("path");
  _path = function () {
    return data;
  };
  return data;
}
var _configDescriptors = require("./config-descriptors");
function createItemFromDescriptor(desc) {
  return new ConfigItem(desc);
}
function* createConfigItem(value, {
  dirname = ".",
  type
} = {}) {
  const descriptor = yield* (0, _configDescriptors.createDescriptor)(value, _path().resolve(dirname), {
    type,
    alias: "programmatic item"
  });
  return createItemFromDescriptor(descriptor);
}
const CONFIG_ITEM_BRAND = Symbol.for("@babel/core@7 - ConfigItem");
function getItemDescriptor(item) {
  if (item != null && item[CONFIG_ITEM_BRAND]) {
    return item._descriptor;
  }
  return undefined;
}
class ConfigItem {
  constructor(descriptor) {
    this._descriptor = void 0;
    this[CONFIG_ITEM_BRAND] = true;
    this.value = void 0;
    this.options = void 0;
    this.dirname = void 0;
    this.name = void 0;
    this.file = void 0;
    this._descriptor = descriptor;
    Object.defineProperty(this, "_descriptor", {
      enumerable: false
    });
    Object.defineProperty(this, CONFIG_ITEM_BRAND, {
      enumerable: false
    });
    this.value = this._descriptor.value;
    this.options = this._descriptor.options;
    this.dirname = this._descriptor.dirname;
    this.name = this._descriptor.name;
    this.file = this._descriptor.file ? {
      request: this._descriptor.file.request,
      resolved: this._descriptor.file.resolved
    } : undefined;
    Object.freeze(this);
  }
}
Object.freeze(ConfigItem.prototype);
0 && 0;

//# sourceMappingURL=item.js.map

}, function(modId) { var map = {"./config-descriptors":1679363156102}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679363156102, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createCachedDescriptors = createCachedDescriptors;
exports.createDescriptor = createDescriptor;
exports.createUncachedDescriptors = createUncachedDescriptors;
function _gensync() {
  const data = require("gensync");
  _gensync = function () {
    return data;
  };
  return data;
}
var _functional = require("../gensync-utils/functional");
var _files = require("./files");
var _item = require("./item");
var _caching = require("./caching");
var _resolveTargets = require("./resolve-targets");
function isEqualDescriptor(a, b) {
  return a.name === b.name && a.value === b.value && a.options === b.options && a.dirname === b.dirname && a.alias === b.alias && a.ownPass === b.ownPass && (a.file && a.file.request) === (b.file && b.file.request) && (a.file && a.file.resolved) === (b.file && b.file.resolved);
}
function* handlerOf(value) {
  return value;
}
function optionsWithResolvedBrowserslistConfigFile(options, dirname) {
  if (typeof options.browserslistConfigFile === "string") {
    options.browserslistConfigFile = (0, _resolveTargets.resolveBrowserslistConfigFile)(options.browserslistConfigFile, dirname);
  }
  return options;
}
function createCachedDescriptors(dirname, options, alias) {
  const {
    plugins,
    presets,
    passPerPreset
  } = options;
  return {
    options: optionsWithResolvedBrowserslistConfigFile(options, dirname),
    plugins: plugins ? () => createCachedPluginDescriptors(plugins, dirname)(alias) : () => handlerOf([]),
    presets: presets ? () => createCachedPresetDescriptors(presets, dirname)(alias)(!!passPerPreset) : () => handlerOf([])
  };
}
function createUncachedDescriptors(dirname, options, alias) {
  return {
    options: optionsWithResolvedBrowserslistConfigFile(options, dirname),
    plugins: (0, _functional.once)(() => createPluginDescriptors(options.plugins || [], dirname, alias)),
    presets: (0, _functional.once)(() => createPresetDescriptors(options.presets || [], dirname, alias, !!options.passPerPreset))
  };
}
const PRESET_DESCRIPTOR_CACHE = new WeakMap();
const createCachedPresetDescriptors = (0, _caching.makeWeakCacheSync)((items, cache) => {
  const dirname = cache.using(dir => dir);
  return (0, _caching.makeStrongCacheSync)(alias => (0, _caching.makeStrongCache)(function* (passPerPreset) {
    const descriptors = yield* createPresetDescriptors(items, dirname, alias, passPerPreset);
    return descriptors.map(desc => loadCachedDescriptor(PRESET_DESCRIPTOR_CACHE, desc));
  }));
});
const PLUGIN_DESCRIPTOR_CACHE = new WeakMap();
const createCachedPluginDescriptors = (0, _caching.makeWeakCacheSync)((items, cache) => {
  const dirname = cache.using(dir => dir);
  return (0, _caching.makeStrongCache)(function* (alias) {
    const descriptors = yield* createPluginDescriptors(items, dirname, alias);
    return descriptors.map(desc => loadCachedDescriptor(PLUGIN_DESCRIPTOR_CACHE, desc));
  });
});
const DEFAULT_OPTIONS = {};
function loadCachedDescriptor(cache, desc) {
  const {
    value,
    options = DEFAULT_OPTIONS
  } = desc;
  if (options === false) return desc;
  let cacheByOptions = cache.get(value);
  if (!cacheByOptions) {
    cacheByOptions = new WeakMap();
    cache.set(value, cacheByOptions);
  }
  let possibilities = cacheByOptions.get(options);
  if (!possibilities) {
    possibilities = [];
    cacheByOptions.set(options, possibilities);
  }
  if (possibilities.indexOf(desc) === -1) {
    const matches = possibilities.filter(possibility => isEqualDescriptor(possibility, desc));
    if (matches.length > 0) {
      return matches[0];
    }
    possibilities.push(desc);
  }
  return desc;
}
function* createPresetDescriptors(items, dirname, alias, passPerPreset) {
  return yield* createDescriptors("preset", items, dirname, alias, passPerPreset);
}
function* createPluginDescriptors(items, dirname, alias) {
  return yield* createDescriptors("plugin", items, dirname, alias);
}
function* createDescriptors(type, items, dirname, alias, ownPass) {
  const descriptors = yield* _gensync().all(items.map((item, index) => createDescriptor(item, dirname, {
    type,
    alias: `${alias}$${index}`,
    ownPass: !!ownPass
  })));
  assertNoDuplicates(descriptors);
  return descriptors;
}
function* createDescriptor(pair, dirname, {
  type,
  alias,
  ownPass
}) {
  const desc = (0, _item.getItemDescriptor)(pair);
  if (desc) {
    return desc;
  }
  let name;
  let options;
  let value = pair;
  if (Array.isArray(value)) {
    if (value.length === 3) {
      [value, options, name] = value;
    } else {
      [value, options] = value;
    }
  }
  let file = undefined;
  let filepath = null;
  if (typeof value === "string") {
    if (typeof type !== "string") {
      throw new Error("To resolve a string-based item, the type of item must be given");
    }
    const resolver = type === "plugin" ? _files.loadPlugin : _files.loadPreset;
    const request = value;
    ({
      filepath,
      value
    } = yield* resolver(value, dirname));
    file = {
      request,
      resolved: filepath
    };
  }
  if (!value) {
    throw new Error(`Unexpected falsy value: ${String(value)}`);
  }
  if (typeof value === "object" && value.__esModule) {
    if (value.default) {
      value = value.default;
    } else {
      throw new Error("Must export a default export when using ES6 modules.");
    }
  }
  if (typeof value !== "object" && typeof value !== "function") {
    throw new Error(`Unsupported format: ${typeof value}. Expected an object or a function.`);
  }
  if (filepath !== null && typeof value === "object" && value) {
    throw new Error(`Plugin/Preset files are not allowed to export objects, only functions. In ${filepath}`);
  }
  return {
    name,
    alias: filepath || alias,
    value,
    options,
    dirname,
    ownPass,
    file
  };
}
function assertNoDuplicates(items) {
  const map = new Map();
  for (const item of items) {
    if (typeof item.value !== "function") continue;
    let nameMap = map.get(item.value);
    if (!nameMap) {
      nameMap = new Set();
      map.set(item.value, nameMap);
    }
    if (nameMap.has(item.name)) {
      const conflicts = items.filter(i => i.value === item.value);
      throw new Error([`Duplicate plugin/preset detected.`, `If you'd like to use two separate instances of a plugin,`, `they need separate names, e.g.`, ``, `  plugins: [`, `    ['some-plugin', {}],`, `    ['some-plugin', {}, 'some unique name'],`, `  ]`, ``, `Duplicates detected are:`, `${JSON.stringify(conflicts, null, 2)}`].join("\n"));
    }
    nameMap.add(item.name);
  }
}
0 && 0;

//# sourceMappingURL=config-descriptors.js.map

}, function(modId) { var map = {"../gensync-utils/functional":1679363156103,"./files":1679363156084,"./item":1679363156101,"./caching":1679363156087,"./resolve-targets":1679363156104}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679363156103, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.once = once;
var _async = require("./async");
function once(fn) {
  let result;
  let resultP;
  return function* () {
    if (result) return result;
    if (!(yield* (0, _async.isAsync)())) return result = yield* fn();
    if (resultP) return yield* (0, _async.waitFor)(resultP);
    let resolve, reject;
    resultP = new Promise((res, rej) => {
      resolve = res;
      reject = rej;
    });
    try {
      result = yield* fn();
      resultP = null;
      resolve(result);
      return result;
    } catch (error) {
      reject(error);
      throw error;
    }
  };
}
0 && 0;

//# sourceMappingURL=functional.js.map

}, function(modId) { var map = {"./async":1679363156088}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679363156104, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resolveBrowserslistConfigFile = resolveBrowserslistConfigFile;
exports.resolveTargets = resolveTargets;
function _path() {
  const data = require("path");
  _path = function () {
    return data;
  };
  return data;
}
function _helperCompilationTargets() {
  const data = require("@babel/helper-compilation-targets");
  _helperCompilationTargets = function () {
    return data;
  };
  return data;
}
({});
function resolveBrowserslistConfigFile(browserslistConfigFile, configFileDir) {
  return _path().resolve(configFileDir, browserslistConfigFile);
}
function resolveTargets(options, root) {
  const optTargets = options.targets;
  let targets;
  if (typeof optTargets === "string" || Array.isArray(optTargets)) {
    targets = {
      browsers: optTargets
    };
  } else if (optTargets) {
    if ("esmodules" in optTargets) {
      targets = Object.assign({}, optTargets, {
        esmodules: "intersect"
      });
    } else {
      targets = optTargets;
    }
  }
  const {
    browserslistConfigFile
  } = options;
  let configFile;
  let ignoreBrowserslistConfig = false;
  if (typeof browserslistConfigFile === "string") {
    configFile = browserslistConfigFile;
  } else {
    ignoreBrowserslistConfig = browserslistConfigFile === false;
  }
  return (0, _helperCompilationTargets().default)(targets, {
    ignoreBrowserslistConfig,
    configFile,
    configPath: root,
    browserslistEnv: options.browserslistEnv
  });
}
0 && 0;

//# sourceMappingURL=resolve-targets.js.map

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679363156105, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buildPresetChain = buildPresetChain;
exports.buildPresetChainWalker = void 0;
exports.buildRootChain = buildRootChain;
function _path() {
  const data = require("path");
  _path = function () {
    return data;
  };
  return data;
}
function _debug() {
  const data = require("debug");
  _debug = function () {
    return data;
  };
  return data;
}
var _options = require("./validation/options");
var _patternToRegex = require("./pattern-to-regex");
var _printer = require("./printer");
var _rewriteStackTrace = require("../errors/rewrite-stack-trace");
var _configError = require("../errors/config-error");
var _files = require("./files");
var _caching = require("./caching");
var _configDescriptors = require("./config-descriptors");
const debug = _debug()("babel:config:config-chain");
function* buildPresetChain(arg, context) {
  const chain = yield* buildPresetChainWalker(arg, context);
  if (!chain) return null;
  return {
    plugins: dedupDescriptors(chain.plugins),
    presets: dedupDescriptors(chain.presets),
    options: chain.options.map(o => normalizeOptions(o)),
    files: new Set()
  };
}
const buildPresetChainWalker = makeChainWalker({
  root: preset => loadPresetDescriptors(preset),
  env: (preset, envName) => loadPresetEnvDescriptors(preset)(envName),
  overrides: (preset, index) => loadPresetOverridesDescriptors(preset)(index),
  overridesEnv: (preset, index, envName) => loadPresetOverridesEnvDescriptors(preset)(index)(envName),
  createLogger: () => () => {}
});
exports.buildPresetChainWalker = buildPresetChainWalker;
const loadPresetDescriptors = (0, _caching.makeWeakCacheSync)(preset => buildRootDescriptors(preset, preset.alias, _configDescriptors.createUncachedDescriptors));
const loadPresetEnvDescriptors = (0, _caching.makeWeakCacheSync)(preset => (0, _caching.makeStrongCacheSync)(envName => buildEnvDescriptors(preset, preset.alias, _configDescriptors.createUncachedDescriptors, envName)));
const loadPresetOverridesDescriptors = (0, _caching.makeWeakCacheSync)(preset => (0, _caching.makeStrongCacheSync)(index => buildOverrideDescriptors(preset, preset.alias, _configDescriptors.createUncachedDescriptors, index)));
const loadPresetOverridesEnvDescriptors = (0, _caching.makeWeakCacheSync)(preset => (0, _caching.makeStrongCacheSync)(index => (0, _caching.makeStrongCacheSync)(envName => buildOverrideEnvDescriptors(preset, preset.alias, _configDescriptors.createUncachedDescriptors, index, envName))));
function* buildRootChain(opts, context) {
  let configReport, babelRcReport;
  const programmaticLogger = new _printer.ConfigPrinter();
  const programmaticChain = yield* loadProgrammaticChain({
    options: opts,
    dirname: context.cwd
  }, context, undefined, programmaticLogger);
  if (!programmaticChain) return null;
  const programmaticReport = yield* programmaticLogger.output();
  let configFile;
  if (typeof opts.configFile === "string") {
    configFile = yield* (0, _files.loadConfig)(opts.configFile, context.cwd, context.envName, context.caller);
  } else if (opts.configFile !== false) {
    configFile = yield* (0, _files.findRootConfig)(context.root, context.envName, context.caller);
  }
  let {
    babelrc,
    babelrcRoots
  } = opts;
  let babelrcRootsDirectory = context.cwd;
  const configFileChain = emptyChain();
  const configFileLogger = new _printer.ConfigPrinter();
  if (configFile) {
    const validatedFile = validateConfigFile(configFile);
    const result = yield* loadFileChain(validatedFile, context, undefined, configFileLogger);
    if (!result) return null;
    configReport = yield* configFileLogger.output();
    if (babelrc === undefined) {
      babelrc = validatedFile.options.babelrc;
    }
    if (babelrcRoots === undefined) {
      babelrcRootsDirectory = validatedFile.dirname;
      babelrcRoots = validatedFile.options.babelrcRoots;
    }
    mergeChain(configFileChain, result);
  }
  let ignoreFile, babelrcFile;
  let isIgnored = false;
  const fileChain = emptyChain();
  if ((babelrc === true || babelrc === undefined) && typeof context.filename === "string") {
    const pkgData = yield* (0, _files.findPackageData)(context.filename);
    if (pkgData && babelrcLoadEnabled(context, pkgData, babelrcRoots, babelrcRootsDirectory)) {
      ({
        ignore: ignoreFile,
        config: babelrcFile
      } = yield* (0, _files.findRelativeConfig)(pkgData, context.envName, context.caller));
      if (ignoreFile) {
        fileChain.files.add(ignoreFile.filepath);
      }
      if (ignoreFile && shouldIgnore(context, ignoreFile.ignore, null, ignoreFile.dirname)) {
        isIgnored = true;
      }
      if (babelrcFile && !isIgnored) {
        const validatedFile = validateBabelrcFile(babelrcFile);
        const babelrcLogger = new _printer.ConfigPrinter();
        const result = yield* loadFileChain(validatedFile, context, undefined, babelrcLogger);
        if (!result) {
          isIgnored = true;
        } else {
          babelRcReport = yield* babelrcLogger.output();
          mergeChain(fileChain, result);
        }
      }
      if (babelrcFile && isIgnored) {
        fileChain.files.add(babelrcFile.filepath);
      }
    }
  }
  if (context.showConfig) {
    console.log(`Babel configs on "${context.filename}" (ascending priority):\n` + [configReport, babelRcReport, programmaticReport].filter(x => !!x).join("\n\n") + "\n-----End Babel configs-----");
  }
  const chain = mergeChain(mergeChain(mergeChain(emptyChain(), configFileChain), fileChain), programmaticChain);
  return {
    plugins: isIgnored ? [] : dedupDescriptors(chain.plugins),
    presets: isIgnored ? [] : dedupDescriptors(chain.presets),
    options: isIgnored ? [] : chain.options.map(o => normalizeOptions(o)),
    fileHandling: isIgnored ? "ignored" : "transpile",
    ignore: ignoreFile || undefined,
    babelrc: babelrcFile || undefined,
    config: configFile || undefined,
    files: chain.files
  };
}
function babelrcLoadEnabled(context, pkgData, babelrcRoots, babelrcRootsDirectory) {
  if (typeof babelrcRoots === "boolean") return babelrcRoots;
  const absoluteRoot = context.root;
  if (babelrcRoots === undefined) {
    return pkgData.directories.indexOf(absoluteRoot) !== -1;
  }
  let babelrcPatterns = babelrcRoots;
  if (!Array.isArray(babelrcPatterns)) {
    babelrcPatterns = [babelrcPatterns];
  }
  babelrcPatterns = babelrcPatterns.map(pat => {
    return typeof pat === "string" ? _path().resolve(babelrcRootsDirectory, pat) : pat;
  });
  if (babelrcPatterns.length === 1 && babelrcPatterns[0] === absoluteRoot) {
    return pkgData.directories.indexOf(absoluteRoot) !== -1;
  }
  return babelrcPatterns.some(pat => {
    if (typeof pat === "string") {
      pat = (0, _patternToRegex.default)(pat, babelrcRootsDirectory);
    }
    return pkgData.directories.some(directory => {
      return matchPattern(pat, babelrcRootsDirectory, directory, context);
    });
  });
}
const validateConfigFile = (0, _caching.makeWeakCacheSync)(file => ({
  filepath: file.filepath,
  dirname: file.dirname,
  options: (0, _options.validate)("configfile", file.options, file.filepath)
}));
const validateBabelrcFile = (0, _caching.makeWeakCacheSync)(file => ({
  filepath: file.filepath,
  dirname: file.dirname,
  options: (0, _options.validate)("babelrcfile", file.options, file.filepath)
}));
const validateExtendFile = (0, _caching.makeWeakCacheSync)(file => ({
  filepath: file.filepath,
  dirname: file.dirname,
  options: (0, _options.validate)("extendsfile", file.options, file.filepath)
}));
const loadProgrammaticChain = makeChainWalker({
  root: input => buildRootDescriptors(input, "base", _configDescriptors.createCachedDescriptors),
  env: (input, envName) => buildEnvDescriptors(input, "base", _configDescriptors.createCachedDescriptors, envName),
  overrides: (input, index) => buildOverrideDescriptors(input, "base", _configDescriptors.createCachedDescriptors, index),
  overridesEnv: (input, index, envName) => buildOverrideEnvDescriptors(input, "base", _configDescriptors.createCachedDescriptors, index, envName),
  createLogger: (input, context, baseLogger) => buildProgrammaticLogger(input, context, baseLogger)
});
const loadFileChainWalker = makeChainWalker({
  root: file => loadFileDescriptors(file),
  env: (file, envName) => loadFileEnvDescriptors(file)(envName),
  overrides: (file, index) => loadFileOverridesDescriptors(file)(index),
  overridesEnv: (file, index, envName) => loadFileOverridesEnvDescriptors(file)(index)(envName),
  createLogger: (file, context, baseLogger) => buildFileLogger(file.filepath, context, baseLogger)
});
function* loadFileChain(input, context, files, baseLogger) {
  const chain = yield* loadFileChainWalker(input, context, files, baseLogger);
  if (chain) {
    chain.files.add(input.filepath);
  }
  return chain;
}
const loadFileDescriptors = (0, _caching.makeWeakCacheSync)(file => buildRootDescriptors(file, file.filepath, _configDescriptors.createUncachedDescriptors));
const loadFileEnvDescriptors = (0, _caching.makeWeakCacheSync)(file => (0, _caching.makeStrongCacheSync)(envName => buildEnvDescriptors(file, file.filepath, _configDescriptors.createUncachedDescriptors, envName)));
const loadFileOverridesDescriptors = (0, _caching.makeWeakCacheSync)(file => (0, _caching.makeStrongCacheSync)(index => buildOverrideDescriptors(file, file.filepath, _configDescriptors.createUncachedDescriptors, index)));
const loadFileOverridesEnvDescriptors = (0, _caching.makeWeakCacheSync)(file => (0, _caching.makeStrongCacheSync)(index => (0, _caching.makeStrongCacheSync)(envName => buildOverrideEnvDescriptors(file, file.filepath, _configDescriptors.createUncachedDescriptors, index, envName))));
function buildFileLogger(filepath, context, baseLogger) {
  if (!baseLogger) {
    return () => {};
  }
  return baseLogger.configure(context.showConfig, _printer.ChainFormatter.Config, {
    filepath
  });
}
function buildRootDescriptors({
  dirname,
  options
}, alias, descriptors) {
  return descriptors(dirname, options, alias);
}
function buildProgrammaticLogger(_, context, baseLogger) {
  var _context$caller;
  if (!baseLogger) {
    return () => {};
  }
  return baseLogger.configure(context.showConfig, _printer.ChainFormatter.Programmatic, {
    callerName: (_context$caller = context.caller) == null ? void 0 : _context$caller.name
  });
}
function buildEnvDescriptors({
  dirname,
  options
}, alias, descriptors, envName) {
  const opts = options.env && options.env[envName];
  return opts ? descriptors(dirname, opts, `${alias}.env["${envName}"]`) : null;
}
function buildOverrideDescriptors({
  dirname,
  options
}, alias, descriptors, index) {
  const opts = options.overrides && options.overrides[index];
  if (!opts) throw new Error("Assertion failure - missing override");
  return descriptors(dirname, opts, `${alias}.overrides[${index}]`);
}
function buildOverrideEnvDescriptors({
  dirname,
  options
}, alias, descriptors, index, envName) {
  const override = options.overrides && options.overrides[index];
  if (!override) throw new Error("Assertion failure - missing override");
  const opts = override.env && override.env[envName];
  return opts ? descriptors(dirname, opts, `${alias}.overrides[${index}].env["${envName}"]`) : null;
}
function makeChainWalker({
  root,
  env,
  overrides,
  overridesEnv,
  createLogger
}) {
  return function* chainWalker(input, context, files = new Set(), baseLogger) {
    const {
      dirname
    } = input;
    const flattenedConfigs = [];
    const rootOpts = root(input);
    if (configIsApplicable(rootOpts, dirname, context, input.filepath)) {
      flattenedConfigs.push({
        config: rootOpts,
        envName: undefined,
        index: undefined
      });
      const envOpts = env(input, context.envName);
      if (envOpts && configIsApplicable(envOpts, dirname, context, input.filepath)) {
        flattenedConfigs.push({
          config: envOpts,
          envName: context.envName,
          index: undefined
        });
      }
      (rootOpts.options.overrides || []).forEach((_, index) => {
        const overrideOps = overrides(input, index);
        if (configIsApplicable(overrideOps, dirname, context, input.filepath)) {
          flattenedConfigs.push({
            config: overrideOps,
            index,
            envName: undefined
          });
          const overrideEnvOpts = overridesEnv(input, index, context.envName);
          if (overrideEnvOpts && configIsApplicable(overrideEnvOpts, dirname, context, input.filepath)) {
            flattenedConfigs.push({
              config: overrideEnvOpts,
              index,
              envName: context.envName
            });
          }
        }
      });
    }
    if (flattenedConfigs.some(({
      config: {
        options: {
          ignore,
          only
        }
      }
    }) => shouldIgnore(context, ignore, only, dirname))) {
      return null;
    }
    const chain = emptyChain();
    const logger = createLogger(input, context, baseLogger);
    for (const {
      config,
      index,
      envName
    } of flattenedConfigs) {
      if (!(yield* mergeExtendsChain(chain, config.options, dirname, context, files, baseLogger))) {
        return null;
      }
      logger(config, index, envName);
      yield* mergeChainOpts(chain, config);
    }
    return chain;
  };
}
function* mergeExtendsChain(chain, opts, dirname, context, files, baseLogger) {
  if (opts.extends === undefined) return true;
  const file = yield* (0, _files.loadConfig)(opts.extends, dirname, context.envName, context.caller);
  if (files.has(file)) {
    throw new Error(`Configuration cycle detected loading ${file.filepath}.\n` + `File already loaded following the config chain:\n` + Array.from(files, file => ` - ${file.filepath}`).join("\n"));
  }
  files.add(file);
  const fileChain = yield* loadFileChain(validateExtendFile(file), context, files, baseLogger);
  files.delete(file);
  if (!fileChain) return false;
  mergeChain(chain, fileChain);
  return true;
}
function mergeChain(target, source) {
  target.options.push(...source.options);
  target.plugins.push(...source.plugins);
  target.presets.push(...source.presets);
  for (const file of source.files) {
    target.files.add(file);
  }
  return target;
}
function* mergeChainOpts(target, {
  options,
  plugins,
  presets
}) {
  target.options.push(options);
  target.plugins.push(...(yield* plugins()));
  target.presets.push(...(yield* presets()));
  return target;
}
function emptyChain() {
  return {
    options: [],
    presets: [],
    plugins: [],
    files: new Set()
  };
}
function normalizeOptions(opts) {
  const options = Object.assign({}, opts);
  delete options.extends;
  delete options.env;
  delete options.overrides;
  delete options.plugins;
  delete options.presets;
  delete options.passPerPreset;
  delete options.ignore;
  delete options.only;
  delete options.test;
  delete options.include;
  delete options.exclude;
  if (Object.prototype.hasOwnProperty.call(options, "sourceMap")) {
    options.sourceMaps = options.sourceMap;
    delete options.sourceMap;
  }
  return options;
}
function dedupDescriptors(items) {
  const map = new Map();
  const descriptors = [];
  for (const item of items) {
    if (typeof item.value === "function") {
      const fnKey = item.value;
      let nameMap = map.get(fnKey);
      if (!nameMap) {
        nameMap = new Map();
        map.set(fnKey, nameMap);
      }
      let desc = nameMap.get(item.name);
      if (!desc) {
        desc = {
          value: item
        };
        descriptors.push(desc);
        if (!item.ownPass) nameMap.set(item.name, desc);
      } else {
        desc.value = item;
      }
    } else {
      descriptors.push({
        value: item
      });
    }
  }
  return descriptors.reduce((acc, desc) => {
    acc.push(desc.value);
    return acc;
  }, []);
}
function configIsApplicable({
  options
}, dirname, context, configName) {
  return (options.test === undefined || configFieldIsApplicable(context, options.test, dirname, configName)) && (options.include === undefined || configFieldIsApplicable(context, options.include, dirname, configName)) && (options.exclude === undefined || !configFieldIsApplicable(context, options.exclude, dirname, configName));
}
function configFieldIsApplicable(context, test, dirname, configName) {
  const patterns = Array.isArray(test) ? test : [test];
  return matchesPatterns(context, patterns, dirname, configName);
}
function ignoreListReplacer(_key, value) {
  if (value instanceof RegExp) {
    return String(value);
  }
  return value;
}
function shouldIgnore(context, ignore, only, dirname) {
  if (ignore && matchesPatterns(context, ignore, dirname)) {
    var _context$filename;
    const message = `No config is applied to "${(_context$filename = context.filename) != null ? _context$filename : "(unknown)"}" because it matches one of \`ignore: ${JSON.stringify(ignore, ignoreListReplacer)}\` from "${dirname}"`;
    debug(message);
    if (context.showConfig) {
      console.log(message);
    }
    return true;
  }
  if (only && !matchesPatterns(context, only, dirname)) {
    var _context$filename2;
    const message = `No config is applied to "${(_context$filename2 = context.filename) != null ? _context$filename2 : "(unknown)"}" because it fails to match one of \`only: ${JSON.stringify(only, ignoreListReplacer)}\` from "${dirname}"`;
    debug(message);
    if (context.showConfig) {
      console.log(message);
    }
    return true;
  }
  return false;
}
function matchesPatterns(context, patterns, dirname, configName) {
  return patterns.some(pattern => matchPattern(pattern, dirname, context.filename, context, configName));
}
function matchPattern(pattern, dirname, pathToTest, context, configName) {
  if (typeof pattern === "function") {
    return !!(0, _rewriteStackTrace.endHiddenCallStack)(pattern)(pathToTest, {
      dirname,
      envName: context.envName,
      caller: context.caller
    });
  }
  if (typeof pathToTest !== "string") {
    throw new _configError.default(`Configuration contains string/RegExp pattern, but no filename was passed to Babel`, configName);
  }
  if (typeof pattern === "string") {
    pattern = (0, _patternToRegex.default)(pattern, dirname);
  }
  return pattern.test(pathToTest);
}
0 && 0;

//# sourceMappingURL=config-chain.js.map

}, function(modId) { var map = {"./validation/options":1679363156106,"./pattern-to-regex":1679363156109,"./printer":1679363156110,"../errors/rewrite-stack-trace":1679363156092,"../errors/config-error":1679363156091,"./files":1679363156084,"./caching":1679363156087,"./config-descriptors":1679363156102}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679363156106, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.assumptionsNames = void 0;
exports.checkNoUnwrappedItemOptionPairs = checkNoUnwrappedItemOptionPairs;
exports.validate = validate;
var _removed = require("./removed");
var _optionAssertions = require("./option-assertions");
var _configError = require("../../errors/config-error");
const ROOT_VALIDATORS = {
  cwd: _optionAssertions.assertString,
  root: _optionAssertions.assertString,
  rootMode: _optionAssertions.assertRootMode,
  configFile: _optionAssertions.assertConfigFileSearch,
  caller: _optionAssertions.assertCallerMetadata,
  filename: _optionAssertions.assertString,
  filenameRelative: _optionAssertions.assertString,
  code: _optionAssertions.assertBoolean,
  ast: _optionAssertions.assertBoolean,
  cloneInputAst: _optionAssertions.assertBoolean,
  envName: _optionAssertions.assertString
};
const BABELRC_VALIDATORS = {
  babelrc: _optionAssertions.assertBoolean,
  babelrcRoots: _optionAssertions.assertBabelrcSearch
};
const NONPRESET_VALIDATORS = {
  extends: _optionAssertions.assertString,
  ignore: _optionAssertions.assertIgnoreList,
  only: _optionAssertions.assertIgnoreList,
  targets: _optionAssertions.assertTargets,
  browserslistConfigFile: _optionAssertions.assertConfigFileSearch,
  browserslistEnv: _optionAssertions.assertString
};
const COMMON_VALIDATORS = {
  inputSourceMap: _optionAssertions.assertInputSourceMap,
  presets: _optionAssertions.assertPluginList,
  plugins: _optionAssertions.assertPluginList,
  passPerPreset: _optionAssertions.assertBoolean,
  assumptions: _optionAssertions.assertAssumptions,
  env: assertEnvSet,
  overrides: assertOverridesList,
  test: _optionAssertions.assertConfigApplicableTest,
  include: _optionAssertions.assertConfigApplicableTest,
  exclude: _optionAssertions.assertConfigApplicableTest,
  retainLines: _optionAssertions.assertBoolean,
  comments: _optionAssertions.assertBoolean,
  shouldPrintComment: _optionAssertions.assertFunction,
  compact: _optionAssertions.assertCompact,
  minified: _optionAssertions.assertBoolean,
  auxiliaryCommentBefore: _optionAssertions.assertString,
  auxiliaryCommentAfter: _optionAssertions.assertString,
  sourceType: _optionAssertions.assertSourceType,
  wrapPluginVisitorMethod: _optionAssertions.assertFunction,
  highlightCode: _optionAssertions.assertBoolean,
  sourceMaps: _optionAssertions.assertSourceMaps,
  sourceMap: _optionAssertions.assertSourceMaps,
  sourceFileName: _optionAssertions.assertString,
  sourceRoot: _optionAssertions.assertString,
  parserOpts: _optionAssertions.assertObject,
  generatorOpts: _optionAssertions.assertObject
};
{
  Object.assign(COMMON_VALIDATORS, {
    getModuleId: _optionAssertions.assertFunction,
    moduleRoot: _optionAssertions.assertString,
    moduleIds: _optionAssertions.assertBoolean,
    moduleId: _optionAssertions.assertString
  });
}
const knownAssumptions = ["arrayLikeIsIterable", "constantReexports", "constantSuper", "enumerableModuleMeta", "ignoreFunctionLength", "ignoreToPrimitiveHint", "iterableIsArray", "mutableTemplateObject", "noClassCalls", "noDocumentAll", "noIncompleteNsImportDetection", "noNewArrows", "objectRestNoSymbols", "privateFieldsAsSymbols", "privateFieldsAsProperties", "pureGetters", "setClassMethods", "setComputedProperties", "setPublicClassFields", "setSpreadProperties", "skipForOfIteratorClosing", "superIsCallableConstructor"];
const assumptionsNames = new Set(knownAssumptions);
exports.assumptionsNames = assumptionsNames;
function getSource(loc) {
  return loc.type === "root" ? loc.source : getSource(loc.parent);
}
function validate(type, opts, filename) {
  try {
    return validateNested({
      type: "root",
      source: type
    }, opts);
  } catch (error) {
    const configError = new _configError.default(error.message, filename);
    if (error.code) configError.code = error.code;
    throw configError;
  }
}
function validateNested(loc, opts) {
  const type = getSource(loc);
  assertNoDuplicateSourcemap(opts);
  Object.keys(opts).forEach(key => {
    const optLoc = {
      type: "option",
      name: key,
      parent: loc
    };
    if (type === "preset" && NONPRESET_VALIDATORS[key]) {
      throw new Error(`${(0, _optionAssertions.msg)(optLoc)} is not allowed in preset options`);
    }
    if (type !== "arguments" && ROOT_VALIDATORS[key]) {
      throw new Error(`${(0, _optionAssertions.msg)(optLoc)} is only allowed in root programmatic options`);
    }
    if (type !== "arguments" && type !== "configfile" && BABELRC_VALIDATORS[key]) {
      if (type === "babelrcfile" || type === "extendsfile") {
        throw new Error(`${(0, _optionAssertions.msg)(optLoc)} is not allowed in .babelrc or "extends"ed files, only in root programmatic options, ` + `or babel.config.js/config file options`);
      }
      throw new Error(`${(0, _optionAssertions.msg)(optLoc)} is only allowed in root programmatic options, or babel.config.js/config file options`);
    }
    const validator = COMMON_VALIDATORS[key] || NONPRESET_VALIDATORS[key] || BABELRC_VALIDATORS[key] || ROOT_VALIDATORS[key] || throwUnknownError;
    validator(optLoc, opts[key]);
  });
  return opts;
}
function throwUnknownError(loc) {
  const key = loc.name;
  if (_removed.default[key]) {
    const {
      message,
      version = 5
    } = _removed.default[key];
    throw new Error(`Using removed Babel ${version} option: ${(0, _optionAssertions.msg)(loc)} - ${message}`);
  } else {
    const unknownOptErr = new Error(`Unknown option: ${(0, _optionAssertions.msg)(loc)}. Check out https://babeljs.io/docs/en/babel-core/#options for more information about options.`);
    unknownOptErr.code = "BABEL_UNKNOWN_OPTION";
    throw unknownOptErr;
  }
}
function has(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}
function assertNoDuplicateSourcemap(opts) {
  if (has(opts, "sourceMap") && has(opts, "sourceMaps")) {
    throw new Error(".sourceMap is an alias for .sourceMaps, cannot use both");
  }
}
function assertEnvSet(loc, value) {
  if (loc.parent.type === "env") {
    throw new Error(`${(0, _optionAssertions.msg)(loc)} is not allowed inside of another .env block`);
  }
  const parent = loc.parent;
  const obj = (0, _optionAssertions.assertObject)(loc, value);
  if (obj) {
    for (const envName of Object.keys(obj)) {
      const env = (0, _optionAssertions.assertObject)((0, _optionAssertions.access)(loc, envName), obj[envName]);
      if (!env) continue;
      const envLoc = {
        type: "env",
        name: envName,
        parent
      };
      validateNested(envLoc, env);
    }
  }
  return obj;
}
function assertOverridesList(loc, value) {
  if (loc.parent.type === "env") {
    throw new Error(`${(0, _optionAssertions.msg)(loc)} is not allowed inside an .env block`);
  }
  if (loc.parent.type === "overrides") {
    throw new Error(`${(0, _optionAssertions.msg)(loc)} is not allowed inside an .overrides block`);
  }
  const parent = loc.parent;
  const arr = (0, _optionAssertions.assertArray)(loc, value);
  if (arr) {
    for (const [index, item] of arr.entries()) {
      const objLoc = (0, _optionAssertions.access)(loc, index);
      const env = (0, _optionAssertions.assertObject)(objLoc, item);
      if (!env) throw new Error(`${(0, _optionAssertions.msg)(objLoc)} must be an object`);
      const overridesLoc = {
        type: "overrides",
        index,
        parent
      };
      validateNested(overridesLoc, env);
    }
  }
  return arr;
}
function checkNoUnwrappedItemOptionPairs(items, index, type, e) {
  if (index === 0) return;
  const lastItem = items[index - 1];
  const thisItem = items[index];
  if (lastItem.file && lastItem.options === undefined && typeof thisItem.value === "object") {
    e.message += `\n- Maybe you meant to use\n` + `"${type}s": [\n  ["${lastItem.file.request}", ${JSON.stringify(thisItem.value, undefined, 2)}]\n]\n` + `To be a valid ${type}, its name and options should be wrapped in a pair of brackets`;
  }
}
0 && 0;

//# sourceMappingURL=options.js.map

}, function(modId) { var map = {"./removed":1679363156107,"./option-assertions":1679363156108,"../../errors/config-error":1679363156091}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679363156107, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  auxiliaryComment: {
    message: "Use `auxiliaryCommentBefore` or `auxiliaryCommentAfter`"
  },
  blacklist: {
    message: "Put the specific transforms you want in the `plugins` option"
  },
  breakConfig: {
    message: "This is not a necessary option in Babel 6"
  },
  experimental: {
    message: "Put the specific transforms you want in the `plugins` option"
  },
  externalHelpers: {
    message: "Use the `external-helpers` plugin instead. " + "Check out http://babeljs.io/docs/plugins/external-helpers/"
  },
  extra: {
    message: ""
  },
  jsxPragma: {
    message: "use the `pragma` option in the `react-jsx` plugin. " + "Check out http://babeljs.io/docs/plugins/transform-react-jsx/"
  },
  loose: {
    message: "Specify the `loose` option for the relevant plugin you are using " + "or use a preset that sets the option."
  },
  metadataUsedHelpers: {
    message: "Not required anymore as this is enabled by default"
  },
  modules: {
    message: "Use the corresponding module transform plugin in the `plugins` option. " + "Check out http://babeljs.io/docs/plugins/#modules"
  },
  nonStandard: {
    message: "Use the `react-jsx` and `flow-strip-types` plugins to support JSX and Flow. " + "Also check out the react preset http://babeljs.io/docs/plugins/preset-react/"
  },
  optional: {
    message: "Put the specific transforms you want in the `plugins` option"
  },
  sourceMapName: {
    message: "The `sourceMapName` option has been removed because it makes more sense for the " + "tooling that calls Babel to assign `map.file` themselves."
  },
  stage: {
    message: "Check out the corresponding stage-x presets http://babeljs.io/docs/plugins/#presets"
  },
  whitelist: {
    message: "Put the specific transforms you want in the `plugins` option"
  },
  resolveModuleSource: {
    version: 6,
    message: "Use `babel-plugin-module-resolver@3`'s 'resolvePath' options"
  },
  metadata: {
    version: 6,
    message: "Generated plugin metadata is always included in the output result"
  },
  sourceMapTarget: {
    version: 6,
    message: "The `sourceMapTarget` option has been removed because it makes more sense for the tooling " + "that calls Babel to assign `map.file` themselves."
  }
};
exports.default = _default;
0 && 0;

//# sourceMappingURL=removed.js.map

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679363156108, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.access = access;
exports.assertArray = assertArray;
exports.assertAssumptions = assertAssumptions;
exports.assertBabelrcSearch = assertBabelrcSearch;
exports.assertBoolean = assertBoolean;
exports.assertCallerMetadata = assertCallerMetadata;
exports.assertCompact = assertCompact;
exports.assertConfigApplicableTest = assertConfigApplicableTest;
exports.assertConfigFileSearch = assertConfigFileSearch;
exports.assertFunction = assertFunction;
exports.assertIgnoreList = assertIgnoreList;
exports.assertInputSourceMap = assertInputSourceMap;
exports.assertObject = assertObject;
exports.assertPluginList = assertPluginList;
exports.assertRootMode = assertRootMode;
exports.assertSourceMaps = assertSourceMaps;
exports.assertSourceType = assertSourceType;
exports.assertString = assertString;
exports.assertTargets = assertTargets;
exports.msg = msg;
function _helperCompilationTargets() {
  const data = require("@babel/helper-compilation-targets");
  _helperCompilationTargets = function () {
    return data;
  };
  return data;
}
var _options = require("./options");
function msg(loc) {
  switch (loc.type) {
    case "root":
      return ``;
    case "env":
      return `${msg(loc.parent)}.env["${loc.name}"]`;
    case "overrides":
      return `${msg(loc.parent)}.overrides[${loc.index}]`;
    case "option":
      return `${msg(loc.parent)}.${loc.name}`;
    case "access":
      return `${msg(loc.parent)}[${JSON.stringify(loc.name)}]`;
    default:
      throw new Error(`Assertion failure: Unknown type ${loc.type}`);
  }
}
function access(loc, name) {
  return {
    type: "access",
    name,
    parent: loc
  };
}
function assertRootMode(loc, value) {
  if (value !== undefined && value !== "root" && value !== "upward" && value !== "upward-optional") {
    throw new Error(`${msg(loc)} must be a "root", "upward", "upward-optional" or undefined`);
  }
  return value;
}
function assertSourceMaps(loc, value) {
  if (value !== undefined && typeof value !== "boolean" && value !== "inline" && value !== "both") {
    throw new Error(`${msg(loc)} must be a boolean, "inline", "both", or undefined`);
  }
  return value;
}
function assertCompact(loc, value) {
  if (value !== undefined && typeof value !== "boolean" && value !== "auto") {
    throw new Error(`${msg(loc)} must be a boolean, "auto", or undefined`);
  }
  return value;
}
function assertSourceType(loc, value) {
  if (value !== undefined && value !== "module" && value !== "script" && value !== "unambiguous") {
    throw new Error(`${msg(loc)} must be "module", "script", "unambiguous", or undefined`);
  }
  return value;
}
function assertCallerMetadata(loc, value) {
  const obj = assertObject(loc, value);
  if (obj) {
    if (typeof obj.name !== "string") {
      throw new Error(`${msg(loc)} set but does not contain "name" property string`);
    }
    for (const prop of Object.keys(obj)) {
      const propLoc = access(loc, prop);
      const value = obj[prop];
      if (value != null && typeof value !== "boolean" && typeof value !== "string" && typeof value !== "number") {
        throw new Error(`${msg(propLoc)} must be null, undefined, a boolean, a string, or a number.`);
      }
    }
  }
  return value;
}
function assertInputSourceMap(loc, value) {
  if (value !== undefined && typeof value !== "boolean" && (typeof value !== "object" || !value)) {
    throw new Error(`${msg(loc)} must be a boolean, object, or undefined`);
  }
  return value;
}
function assertString(loc, value) {
  if (value !== undefined && typeof value !== "string") {
    throw new Error(`${msg(loc)} must be a string, or undefined`);
  }
  return value;
}
function assertFunction(loc, value) {
  if (value !== undefined && typeof value !== "function") {
    throw new Error(`${msg(loc)} must be a function, or undefined`);
  }
  return value;
}
function assertBoolean(loc, value) {
  if (value !== undefined && typeof value !== "boolean") {
    throw new Error(`${msg(loc)} must be a boolean, or undefined`);
  }
  return value;
}
function assertObject(loc, value) {
  if (value !== undefined && (typeof value !== "object" || Array.isArray(value) || !value)) {
    throw new Error(`${msg(loc)} must be an object, or undefined`);
  }
  return value;
}
function assertArray(loc, value) {
  if (value != null && !Array.isArray(value)) {
    throw new Error(`${msg(loc)} must be an array, or undefined`);
  }
  return value;
}
function assertIgnoreList(loc, value) {
  const arr = assertArray(loc, value);
  if (arr) {
    arr.forEach((item, i) => assertIgnoreItem(access(loc, i), item));
  }
  return arr;
}
function assertIgnoreItem(loc, value) {
  if (typeof value !== "string" && typeof value !== "function" && !(value instanceof RegExp)) {
    throw new Error(`${msg(loc)} must be an array of string/Function/RegExp values, or undefined`);
  }
  return value;
}
function assertConfigApplicableTest(loc, value) {
  if (value === undefined) {
    return value;
  }
  if (Array.isArray(value)) {
    value.forEach((item, i) => {
      if (!checkValidTest(item)) {
        throw new Error(`${msg(access(loc, i))} must be a string/Function/RegExp.`);
      }
    });
  } else if (!checkValidTest(value)) {
    throw new Error(`${msg(loc)} must be a string/Function/RegExp, or an array of those`);
  }
  return value;
}
function checkValidTest(value) {
  return typeof value === "string" || typeof value === "function" || value instanceof RegExp;
}
function assertConfigFileSearch(loc, value) {
  if (value !== undefined && typeof value !== "boolean" && typeof value !== "string") {
    throw new Error(`${msg(loc)} must be a undefined, a boolean, a string, ` + `got ${JSON.stringify(value)}`);
  }
  return value;
}
function assertBabelrcSearch(loc, value) {
  if (value === undefined || typeof value === "boolean") {
    return value;
  }
  if (Array.isArray(value)) {
    value.forEach((item, i) => {
      if (!checkValidTest(item)) {
        throw new Error(`${msg(access(loc, i))} must be a string/Function/RegExp.`);
      }
    });
  } else if (!checkValidTest(value)) {
    throw new Error(`${msg(loc)} must be a undefined, a boolean, a string/Function/RegExp ` + `or an array of those, got ${JSON.stringify(value)}`);
  }
  return value;
}
function assertPluginList(loc, value) {
  const arr = assertArray(loc, value);
  if (arr) {
    arr.forEach((item, i) => assertPluginItem(access(loc, i), item));
  }
  return arr;
}
function assertPluginItem(loc, value) {
  if (Array.isArray(value)) {
    if (value.length === 0) {
      throw new Error(`${msg(loc)} must include an object`);
    }
    if (value.length > 3) {
      throw new Error(`${msg(loc)} may only be a two-tuple or three-tuple`);
    }
    assertPluginTarget(access(loc, 0), value[0]);
    if (value.length > 1) {
      const opts = value[1];
      if (opts !== undefined && opts !== false && (typeof opts !== "object" || Array.isArray(opts) || opts === null)) {
        throw new Error(`${msg(access(loc, 1))} must be an object, false, or undefined`);
      }
    }
    if (value.length === 3) {
      const name = value[2];
      if (name !== undefined && typeof name !== "string") {
        throw new Error(`${msg(access(loc, 2))} must be a string, or undefined`);
      }
    }
  } else {
    assertPluginTarget(loc, value);
  }
  return value;
}
function assertPluginTarget(loc, value) {
  if ((typeof value !== "object" || !value) && typeof value !== "string" && typeof value !== "function") {
    throw new Error(`${msg(loc)} must be a string, object, function`);
  }
  return value;
}
function assertTargets(loc, value) {
  if ((0, _helperCompilationTargets().isBrowsersQueryValid)(value)) return value;
  if (typeof value !== "object" || !value || Array.isArray(value)) {
    throw new Error(`${msg(loc)} must be a string, an array of strings or an object`);
  }
  const browsersLoc = access(loc, "browsers");
  const esmodulesLoc = access(loc, "esmodules");
  assertBrowsersList(browsersLoc, value.browsers);
  assertBoolean(esmodulesLoc, value.esmodules);
  for (const key of Object.keys(value)) {
    const val = value[key];
    const subLoc = access(loc, key);
    if (key === "esmodules") assertBoolean(subLoc, val);else if (key === "browsers") assertBrowsersList(subLoc, val);else if (!Object.hasOwnProperty.call(_helperCompilationTargets().TargetNames, key)) {
      const validTargets = Object.keys(_helperCompilationTargets().TargetNames).join(", ");
      throw new Error(`${msg(subLoc)} is not a valid target. Supported targets are ${validTargets}`);
    } else assertBrowserVersion(subLoc, val);
  }
  return value;
}
function assertBrowsersList(loc, value) {
  if (value !== undefined && !(0, _helperCompilationTargets().isBrowsersQueryValid)(value)) {
    throw new Error(`${msg(loc)} must be undefined, a string or an array of strings`);
  }
}
function assertBrowserVersion(loc, value) {
  if (typeof value === "number" && Math.round(value) === value) return;
  if (typeof value === "string") return;
  throw new Error(`${msg(loc)} must be a string or an integer number`);
}
function assertAssumptions(loc, value) {
  if (value === undefined) return;
  if (typeof value !== "object" || value === null) {
    throw new Error(`${msg(loc)} must be an object or undefined.`);
  }
  let root = loc;
  do {
    root = root.parent;
  } while (root.type !== "root");
  const inPreset = root.source === "preset";
  for (const name of Object.keys(value)) {
    const subLoc = access(loc, name);
    if (!_options.assumptionsNames.has(name)) {
      throw new Error(`${msg(subLoc)} is not a supported assumption.`);
    }
    if (typeof value[name] !== "boolean") {
      throw new Error(`${msg(subLoc)} must be a boolean.`);
    }
    if (inPreset && value[name] === false) {
      throw new Error(`${msg(subLoc)} cannot be set to 'false' inside presets.`);
    }
  }
  return value;
}
0 && 0;

//# sourceMappingURL=option-assertions.js.map

}, function(modId) { var map = {"./options":1679363156106}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679363156109, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = pathToPattern;
function _path() {
  const data = require("path");
  _path = function () {
    return data;
  };
  return data;
}
const sep = `\\${_path().sep}`;
const endSep = `(?:${sep}|$)`;
const substitution = `[^${sep}]+`;
const starPat = `(?:${substitution}${sep})`;
const starPatLast = `(?:${substitution}${endSep})`;
const starStarPat = `${starPat}*?`;
const starStarPatLast = `${starPat}*?${starPatLast}?`;
function escapeRegExp(string) {
  return string.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&");
}
function pathToPattern(pattern, dirname) {
  const parts = _path().resolve(dirname, pattern).split(_path().sep);
  return new RegExp(["^", ...parts.map((part, i) => {
    const last = i === parts.length - 1;
    if (part === "**") return last ? starStarPatLast : starStarPat;
    if (part === "*") return last ? starPatLast : starPat;
    if (part.indexOf("*.") === 0) {
      return substitution + escapeRegExp(part.slice(1)) + (last ? endSep : sep);
    }
    return escapeRegExp(part) + (last ? endSep : sep);
  })].join(""));
}
0 && 0;

//# sourceMappingURL=pattern-to-regex.js.map

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679363156110, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ConfigPrinter = exports.ChainFormatter = void 0;
function _gensync() {
  const data = require("gensync");
  _gensync = function () {
    return data;
  };
  return data;
}
const ChainFormatter = {
  Programmatic: 0,
  Config: 1
};
exports.ChainFormatter = ChainFormatter;
const Formatter = {
  title(type, callerName, filepath) {
    let title = "";
    if (type === ChainFormatter.Programmatic) {
      title = "programmatic options";
      if (callerName) {
        title += " from " + callerName;
      }
    } else {
      title = "config " + filepath;
    }
    return title;
  },
  loc(index, envName) {
    let loc = "";
    if (index != null) {
      loc += `.overrides[${index}]`;
    }
    if (envName != null) {
      loc += `.env["${envName}"]`;
    }
    return loc;
  },
  *optionsAndDescriptors(opt) {
    const content = Object.assign({}, opt.options);
    delete content.overrides;
    delete content.env;
    const pluginDescriptors = [...(yield* opt.plugins())];
    if (pluginDescriptors.length) {
      content.plugins = pluginDescriptors.map(d => descriptorToConfig(d));
    }
    const presetDescriptors = [...(yield* opt.presets())];
    if (presetDescriptors.length) {
      content.presets = [...presetDescriptors].map(d => descriptorToConfig(d));
    }
    return JSON.stringify(content, undefined, 2);
  }
};
function descriptorToConfig(d) {
  var _d$file;
  let name = (_d$file = d.file) == null ? void 0 : _d$file.request;
  if (name == null) {
    if (typeof d.value === "object") {
      name = d.value;
    } else if (typeof d.value === "function") {
      name = `[Function: ${d.value.toString().slice(0, 50)} ... ]`;
    }
  }
  if (name == null) {
    name = "[Unknown]";
  }
  if (d.options === undefined) {
    return name;
  } else if (d.name == null) {
    return [name, d.options];
  } else {
    return [name, d.options, d.name];
  }
}
class ConfigPrinter {
  constructor() {
    this._stack = [];
  }
  configure(enabled, type, {
    callerName,
    filepath
  }) {
    if (!enabled) return () => {};
    return (content, index, envName) => {
      this._stack.push({
        type,
        callerName,
        filepath,
        content,
        index,
        envName
      });
    };
  }
  static *format(config) {
    let title = Formatter.title(config.type, config.callerName, config.filepath);
    const loc = Formatter.loc(config.index, config.envName);
    if (loc) title += ` ${loc}`;
    const content = yield* Formatter.optionsAndDescriptors(config.content);
    return `${title}\n${content}`;
  }
  *output() {
    if (this._stack.length === 0) return "";
    const configs = yield* _gensync().all(this._stack.map(s => ConfigPrinter.format(s)));
    return configs.join("\n\n");
  }
}
exports.ConfigPrinter = ConfigPrinter;
0 && 0;

//# sourceMappingURL=printer.js.map

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679363156111, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validatePluginObject = validatePluginObject;
var _optionAssertions = require("./option-assertions");
const VALIDATORS = {
  name: _optionAssertions.assertString,
  manipulateOptions: _optionAssertions.assertFunction,
  pre: _optionAssertions.assertFunction,
  post: _optionAssertions.assertFunction,
  inherits: _optionAssertions.assertFunction,
  visitor: assertVisitorMap,
  parserOverride: _optionAssertions.assertFunction,
  generatorOverride: _optionAssertions.assertFunction
};
function assertVisitorMap(loc, value) {
  const obj = (0, _optionAssertions.assertObject)(loc, value);
  if (obj) {
    Object.keys(obj).forEach(prop => assertVisitorHandler(prop, obj[prop]));
    if (obj.enter || obj.exit) {
      throw new Error(`${(0, _optionAssertions.msg)(loc)} cannot contain catch-all "enter" or "exit" handlers. Please target individual nodes.`);
    }
  }
  return obj;
}
function assertVisitorHandler(key, value) {
  if (value && typeof value === "object") {
    Object.keys(value).forEach(handler => {
      if (handler !== "enter" && handler !== "exit") {
        throw new Error(`.visitor["${key}"] may only have .enter and/or .exit handlers.`);
      }
    });
  } else if (typeof value !== "function") {
    throw new Error(`.visitor["${key}"] must be a function`);
  }
  return value;
}
function validatePluginObject(obj) {
  const rootPath = {
    type: "root",
    source: "plugin"
  };
  Object.keys(obj).forEach(key => {
    const validator = VALIDATORS[key];
    if (validator) {
      const optLoc = {
        type: "option",
        name: key,
        parent: rootPath
      };
      validator(optLoc, obj[key]);
    } else {
      const invalidPluginPropertyError = new Error(`.${key} is not a valid Plugin property`);
      invalidPluginPropertyError.code = "BABEL_UNKNOWN_PLUGIN_PROPERTY";
      throw invalidPluginPropertyError;
    }
  });
  return obj;
}
0 && 0;

//# sourceMappingURL=plugins.js.map

}, function(modId) { var map = {"./option-assertions":1679363156108}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679363156112, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = loadPrivatePartialConfig;
exports.loadPartialConfig = void 0;
function _path() {
  const data = require("path");
  _path = function () {
    return data;
  };
  return data;
}
function _gensync() {
  const data = require("gensync");
  _gensync = function () {
    return data;
  };
  return data;
}
var _plugin = require("./plugin");
var _util = require("./util");
var _item = require("./item");
var _configChain = require("./config-chain");
var _environment = require("./helpers/environment");
var _options = require("./validation/options");
var _files = require("./files");
var _resolveTargets = require("./resolve-targets");
const _excluded = ["showIgnoredFiles"];
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function resolveRootMode(rootDir, rootMode) {
  switch (rootMode) {
    case "root":
      return rootDir;
    case "upward-optional":
      {
        const upwardRootDir = (0, _files.findConfigUpwards)(rootDir);
        return upwardRootDir === null ? rootDir : upwardRootDir;
      }
    case "upward":
      {
        const upwardRootDir = (0, _files.findConfigUpwards)(rootDir);
        if (upwardRootDir !== null) return upwardRootDir;
        throw Object.assign(new Error(`Babel was run with rootMode:"upward" but a root could not ` + `be found when searching upward from "${rootDir}".\n` + `One of the following config files must be in the directory tree: ` + `"${_files.ROOT_CONFIG_FILENAMES.join(", ")}".`), {
          code: "BABEL_ROOT_NOT_FOUND",
          dirname: rootDir
        });
      }
    default:
      throw new Error(`Assertion failure - unknown rootMode value.`);
  }
}
function* loadPrivatePartialConfig(inputOpts) {
  if (inputOpts != null && (typeof inputOpts !== "object" || Array.isArray(inputOpts))) {
    throw new Error("Babel options must be an object, null, or undefined");
  }
  const args = inputOpts ? (0, _options.validate)("arguments", inputOpts) : {};
  const {
    envName = (0, _environment.getEnv)(),
    cwd = ".",
    root: rootDir = ".",
    rootMode = "root",
    caller,
    cloneInputAst = true
  } = args;
  const absoluteCwd = _path().resolve(cwd);
  const absoluteRootDir = resolveRootMode(_path().resolve(absoluteCwd, rootDir), rootMode);
  const filename = typeof args.filename === "string" ? _path().resolve(cwd, args.filename) : undefined;
  const showConfigPath = yield* (0, _files.resolveShowConfigPath)(absoluteCwd);
  const context = {
    filename,
    cwd: absoluteCwd,
    root: absoluteRootDir,
    envName,
    caller,
    showConfig: showConfigPath === filename
  };
  const configChain = yield* (0, _configChain.buildRootChain)(args, context);
  if (!configChain) return null;
  const merged = {
    assumptions: {}
  };
  configChain.options.forEach(opts => {
    (0, _util.mergeOptions)(merged, opts);
  });
  const options = Object.assign({}, merged, {
    targets: (0, _resolveTargets.resolveTargets)(merged, absoluteRootDir),
    cloneInputAst,
    babelrc: false,
    configFile: false,
    browserslistConfigFile: false,
    passPerPreset: false,
    envName: context.envName,
    cwd: context.cwd,
    root: context.root,
    rootMode: "root",
    filename: typeof context.filename === "string" ? context.filename : undefined,
    plugins: configChain.plugins.map(descriptor => (0, _item.createItemFromDescriptor)(descriptor)),
    presets: configChain.presets.map(descriptor => (0, _item.createItemFromDescriptor)(descriptor))
  });
  return {
    options,
    context,
    fileHandling: configChain.fileHandling,
    ignore: configChain.ignore,
    babelrc: configChain.babelrc,
    config: configChain.config,
    files: configChain.files
  };
}
const loadPartialConfig = _gensync()(function* (opts) {
  let showIgnoredFiles = false;
  if (typeof opts === "object" && opts !== null && !Array.isArray(opts)) {
    var _opts = opts;
    ({
      showIgnoredFiles
    } = _opts);
    opts = _objectWithoutPropertiesLoose(_opts, _excluded);
    _opts;
  }
  const result = yield* loadPrivatePartialConfig(opts);
  if (!result) return null;
  const {
    options,
    babelrc,
    ignore,
    config,
    fileHandling,
    files
  } = result;
  if (fileHandling === "ignored" && !showIgnoredFiles) {
    return null;
  }
  (options.plugins || []).forEach(item => {
    if (item.value instanceof _plugin.default) {
      throw new Error("Passing cached plugin instances is not supported in " + "babel.loadPartialConfig()");
    }
  });
  return new PartialConfig(options, babelrc ? babelrc.filepath : undefined, ignore ? ignore.filepath : undefined, config ? config.filepath : undefined, fileHandling, files);
});
exports.loadPartialConfig = loadPartialConfig;
class PartialConfig {
  constructor(options, babelrc, ignore, config, fileHandling, files) {
    this.options = void 0;
    this.babelrc = void 0;
    this.babelignore = void 0;
    this.config = void 0;
    this.fileHandling = void 0;
    this.files = void 0;
    this.options = options;
    this.babelignore = ignore;
    this.babelrc = babelrc;
    this.config = config;
    this.fileHandling = fileHandling;
    this.files = files;
    Object.freeze(this);
  }
  hasFilesystemConfig() {
    return this.babelrc !== undefined || this.config !== undefined;
  }
}
Object.freeze(PartialConfig.prototype);
0 && 0;

//# sourceMappingURL=partial.js.map

}, function(modId) { var map = {"./plugin":1679363156099,"./util":1679363156089,"./item":1679363156101,"./config-chain":1679363156105,"./helpers/environment":1679363156113,"./validation/options":1679363156106,"./files":1679363156084,"./resolve-targets":1679363156104}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679363156113, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getEnv = getEnv;
function getEnv(defaultValue = "development") {
  return process.env.BABEL_ENV || process.env.NODE_ENV || defaultValue;
}
0 && 0;

//# sourceMappingURL=environment.js.map

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679363156114, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.run = run;
function _traverse() {
  const data = require("@babel/traverse");
  _traverse = function () {
    return data;
  };
  return data;
}
var _pluginPass = require("./plugin-pass");
var _blockHoistPlugin = require("./block-hoist-plugin");
var _normalizeOpts = require("./normalize-opts");
var _normalizeFile = require("./normalize-file");
var _generate = require("./file/generate");
var _deepArray = require("../config/helpers/deep-array");
function* run(config, code, ast) {
  const file = yield* (0, _normalizeFile.default)(config.passes, (0, _normalizeOpts.default)(config), code, ast);
  const opts = file.opts;
  try {
    yield* transformFile(file, config.passes);
  } catch (e) {
    var _opts$filename;
    e.message = `${(_opts$filename = opts.filename) != null ? _opts$filename : "unknown file"}: ${e.message}`;
    if (!e.code) {
      e.code = "BABEL_TRANSFORM_ERROR";
    }
    throw e;
  }
  let outputCode, outputMap;
  try {
    if (opts.code !== false) {
      ({
        outputCode,
        outputMap
      } = (0, _generate.default)(config.passes, file));
    }
  } catch (e) {
    var _opts$filename2;
    e.message = `${(_opts$filename2 = opts.filename) != null ? _opts$filename2 : "unknown file"}: ${e.message}`;
    if (!e.code) {
      e.code = "BABEL_GENERATE_ERROR";
    }
    throw e;
  }
  return {
    metadata: file.metadata,
    options: opts,
    ast: opts.ast === true ? file.ast : null,
    code: outputCode === undefined ? null : outputCode,
    map: outputMap === undefined ? null : outputMap,
    sourceType: file.ast.program.sourceType,
    externalDependencies: (0, _deepArray.flattenToSet)(config.externalDependencies)
  };
}
function* transformFile(file, pluginPasses) {
  for (const pluginPairs of pluginPasses) {
    const passPairs = [];
    const passes = [];
    const visitors = [];
    for (const plugin of pluginPairs.concat([(0, _blockHoistPlugin.default)()])) {
      const pass = new _pluginPass.default(file, plugin.key, plugin.options);
      passPairs.push([plugin, pass]);
      passes.push(pass);
      visitors.push(plugin.visitor);
    }
    for (const [plugin, pass] of passPairs) {
      const fn = plugin.pre;
      if (fn) {
        const result = fn.call(pass, file);
        yield* [];
        if (isThenable(result)) {
          throw new Error(`You appear to be using an plugin with an async .pre, ` + `which your current version of Babel does not support. ` + `If you're using a published plugin, you may need to upgrade ` + `your @babel/core version.`);
        }
      }
    }
    const visitor = _traverse().default.visitors.merge(visitors, passes, file.opts.wrapPluginVisitorMethod);
    (0, _traverse().default)(file.ast, visitor, file.scope);
    for (const [plugin, pass] of passPairs) {
      const fn = plugin.post;
      if (fn) {
        const result = fn.call(pass, file);
        yield* [];
        if (isThenable(result)) {
          throw new Error(`You appear to be using an plugin with an async .post, ` + `which your current version of Babel does not support. ` + `If you're using a published plugin, you may need to upgrade ` + `your @babel/core version.`);
        }
      }
    }
  }
}
function isThenable(val) {
  return !!val && (typeof val === "object" || typeof val === "function") && !!val.then && typeof val.then === "function";
}
0 && 0;

//# sourceMappingURL=index.js.map

}, function(modId) { var map = {"./plugin-pass":1679363156115,"./block-hoist-plugin":1679363156116,"./normalize-opts":1679363156117,"./normalize-file":1679363156118,"./file/generate":1679363156122,"../config/helpers/deep-array":1679363156100}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679363156115, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
class PluginPass {
  constructor(file, key, options) {
    this._map = new Map();
    this.key = void 0;
    this.file = void 0;
    this.opts = void 0;
    this.cwd = void 0;
    this.filename = void 0;
    this.key = key;
    this.file = file;
    this.opts = options || {};
    this.cwd = file.opts.cwd;
    this.filename = file.opts.filename;
  }
  set(key, val) {
    this._map.set(key, val);
  }
  get(key) {
    return this._map.get(key);
  }
  availableHelper(name, versionRange) {
    return this.file.availableHelper(name, versionRange);
  }
  addHelper(name) {
    return this.file.addHelper(name);
  }
  addImport() {
    this.file.addImport();
  }
  buildCodeFrameError(node, msg, _Error) {
    return this.file.buildCodeFrameError(node, msg, _Error);
  }
}
exports.default = PluginPass;
{
  PluginPass.prototype.getModuleName = function getModuleName() {
    return this.file.getModuleName();
  };
}
0 && 0;

//# sourceMappingURL=plugin-pass.js.map

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679363156116, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = loadBlockHoistPlugin;
function _traverse() {
  const data = require("@babel/traverse");
  _traverse = function () {
    return data;
  };
  return data;
}
var _plugin = require("../config/plugin");
let LOADED_PLUGIN;
const blockHoistPlugin = {
  name: "internal.blockHoist",
  visitor: {
    Block: {
      exit({
        node
      }) {
        const {
          body
        } = node;
        let max = Math.pow(2, 30) - 1;
        let hasChange = false;
        for (let i = 0; i < body.length; i++) {
          const n = body[i];
          const p = priority(n);
          if (p > max) {
            hasChange = true;
            break;
          }
          max = p;
        }
        if (!hasChange) return;
        node.body = stableSort(body.slice());
      }
    }
  }
};
function loadBlockHoistPlugin() {
  if (!LOADED_PLUGIN) {
    LOADED_PLUGIN = new _plugin.default(Object.assign({}, blockHoistPlugin, {
      visitor: _traverse().default.explode(blockHoistPlugin.visitor)
    }), {});
  }
  return LOADED_PLUGIN;
}
function priority(bodyNode) {
  const priority = bodyNode == null ? void 0 : bodyNode._blockHoist;
  if (priority == null) return 1;
  if (priority === true) return 2;
  return priority;
}
function stableSort(body) {
  const buckets = Object.create(null);
  for (let i = 0; i < body.length; i++) {
    const n = body[i];
    const p = priority(n);
    const bucket = buckets[p] || (buckets[p] = []);
    bucket.push(n);
  }
  const keys = Object.keys(buckets).map(k => +k).sort((a, b) => b - a);
  let index = 0;
  for (const key of keys) {
    const bucket = buckets[key];
    for (const n of bucket) {
      body[index++] = n;
    }
  }
  return body;
}
0 && 0;

//# sourceMappingURL=block-hoist-plugin.js.map

}, function(modId) { var map = {"../config/plugin":1679363156099}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679363156117, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = normalizeOptions;
function _path() {
  const data = require("path");
  _path = function () {
    return data;
  };
  return data;
}
function normalizeOptions(config) {
  const {
    filename,
    cwd,
    filenameRelative = typeof filename === "string" ? _path().relative(cwd, filename) : "unknown",
    sourceType = "module",
    inputSourceMap,
    sourceMaps = !!inputSourceMap,
    sourceRoot = config.options.moduleRoot,
    sourceFileName = _path().basename(filenameRelative),
    comments = true,
    compact = "auto"
  } = config.options;
  const opts = config.options;
  const options = Object.assign({}, opts, {
    parserOpts: Object.assign({
      sourceType: _path().extname(filenameRelative) === ".mjs" ? "module" : sourceType,
      sourceFileName: filename,
      plugins: []
    }, opts.parserOpts),
    generatorOpts: Object.assign({
      filename,
      auxiliaryCommentBefore: opts.auxiliaryCommentBefore,
      auxiliaryCommentAfter: opts.auxiliaryCommentAfter,
      retainLines: opts.retainLines,
      comments,
      shouldPrintComment: opts.shouldPrintComment,
      compact,
      minified: opts.minified,
      sourceMaps,
      sourceRoot,
      sourceFileName
    }, opts.generatorOpts)
  });
  for (const plugins of config.passes) {
    for (const plugin of plugins) {
      if (plugin.manipulateOptions) {
        plugin.manipulateOptions(options, options.parserOpts);
      }
    }
  }
  return options;
}
0 && 0;

//# sourceMappingURL=normalize-opts.js.map

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679363156118, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = normalizeFile;
function _fs() {
  const data = require("fs");
  _fs = function () {
    return data;
  };
  return data;
}
function _path() {
  const data = require("path");
  _path = function () {
    return data;
  };
  return data;
}
function _debug() {
  const data = require("debug");
  _debug = function () {
    return data;
  };
  return data;
}
function _t() {
  const data = require("@babel/types");
  _t = function () {
    return data;
  };
  return data;
}
function _convertSourceMap() {
  const data = require("convert-source-map");
  _convertSourceMap = function () {
    return data;
  };
  return data;
}
var _file = require("./file/file");
var _parser = require("../parser");
var _cloneDeep = require("./util/clone-deep");
const {
  file,
  traverseFast
} = _t();
const debug = _debug()("babel:transform:file");
const INLINE_SOURCEMAP_REGEX = /^[@#]\s+sourceMappingURL=data:(?:application|text)\/json;(?:charset[:=]\S+?;)?base64,(?:.*)$/;
const EXTERNAL_SOURCEMAP_REGEX = /^[@#][ \t]+sourceMappingURL=([^\s'"`]+)[ \t]*$/;
function* normalizeFile(pluginPasses, options, code, ast) {
  code = `${code || ""}`;
  if (ast) {
    if (ast.type === "Program") {
      ast = file(ast, [], []);
    } else if (ast.type !== "File") {
      throw new Error("AST root must be a Program or File node");
    }
    if (options.cloneInputAst) {
      ast = (0, _cloneDeep.default)(ast);
    }
  } else {
    ast = yield* (0, _parser.default)(pluginPasses, options, code);
  }
  let inputMap = null;
  if (options.inputSourceMap !== false) {
    if (typeof options.inputSourceMap === "object") {
      inputMap = _convertSourceMap().fromObject(options.inputSourceMap);
    }
    if (!inputMap) {
      const lastComment = extractComments(INLINE_SOURCEMAP_REGEX, ast);
      if (lastComment) {
        try {
          inputMap = _convertSourceMap().fromComment(lastComment);
        } catch (err) {
          debug("discarding unknown inline input sourcemap", err);
        }
      }
    }
    if (!inputMap) {
      const lastComment = extractComments(EXTERNAL_SOURCEMAP_REGEX, ast);
      if (typeof options.filename === "string" && lastComment) {
        try {
          const match = EXTERNAL_SOURCEMAP_REGEX.exec(lastComment);
          const inputMapContent = _fs().readFileSync(_path().resolve(_path().dirname(options.filename), match[1]), "utf8");
          inputMap = _convertSourceMap().fromJSON(inputMapContent);
        } catch (err) {
          debug("discarding unknown file input sourcemap", err);
        }
      } else if (lastComment) {
        debug("discarding un-loadable file input sourcemap");
      }
    }
  }
  return new _file.default(options, {
    code,
    ast: ast,
    inputMap
  });
}
function extractCommentsFromList(regex, comments, lastComment) {
  if (comments) {
    comments = comments.filter(({
      value
    }) => {
      if (regex.test(value)) {
        lastComment = value;
        return false;
      }
      return true;
    });
  }
  return [comments, lastComment];
}
function extractComments(regex, ast) {
  let lastComment = null;
  traverseFast(ast, node => {
    [node.leadingComments, lastComment] = extractCommentsFromList(regex, node.leadingComments, lastComment);
    [node.innerComments, lastComment] = extractCommentsFromList(regex, node.innerComments, lastComment);
    [node.trailingComments, lastComment] = extractCommentsFromList(regex, node.trailingComments, lastComment);
  });
  return lastComment;
}
0 && 0;

//# sourceMappingURL=normalize-file.js.map

}, function(modId) { var map = {"./file/file":1679363156082,"../parser":1679363156119,"./util/clone-deep":1679363156121}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679363156119, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = parser;
function _parser() {
  const data = require("@babel/parser");
  _parser = function () {
    return data;
  };
  return data;
}
function _codeFrame() {
  const data = require("@babel/code-frame");
  _codeFrame = function () {
    return data;
  };
  return data;
}
var _missingPluginHelper = require("./util/missing-plugin-helper");
function* parser(pluginPasses, {
  parserOpts,
  highlightCode = true,
  filename = "unknown"
}, code) {
  try {
    const results = [];
    for (const plugins of pluginPasses) {
      for (const plugin of plugins) {
        const {
          parserOverride
        } = plugin;
        if (parserOverride) {
          const ast = parserOverride(code, parserOpts, _parser().parse);
          if (ast !== undefined) results.push(ast);
        }
      }
    }
    if (results.length === 0) {
      return (0, _parser().parse)(code, parserOpts);
    } else if (results.length === 1) {
      yield* [];
      if (typeof results[0].then === "function") {
        throw new Error(`You appear to be using an async parser plugin, ` + `which your current version of Babel does not support. ` + `If you're using a published plugin, you may need to upgrade ` + `your @babel/core version.`);
      }
      return results[0];
    }
    throw new Error("More than one plugin attempted to override parsing.");
  } catch (err) {
    if (err.code === "BABEL_PARSER_SOURCETYPE_MODULE_REQUIRED") {
      err.message += "\nConsider renaming the file to '.mjs', or setting sourceType:module " + "or sourceType:unambiguous in your Babel config for this file.";
    }
    const {
      loc,
      missingPlugin
    } = err;
    if (loc) {
      const codeFrame = (0, _codeFrame().codeFrameColumns)(code, {
        start: {
          line: loc.line,
          column: loc.column + 1
        }
      }, {
        highlightCode
      });
      if (missingPlugin) {
        err.message = `${filename}: ` + (0, _missingPluginHelper.default)(missingPlugin[0], loc, codeFrame);
      } else {
        err.message = `${filename}: ${err.message}\n\n` + codeFrame;
      }
      err.code = "BABEL_PARSE_ERROR";
    }
    throw err;
  }
}
0 && 0;

//# sourceMappingURL=index.js.map

}, function(modId) { var map = {"./util/missing-plugin-helper":1679363156120}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679363156120, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = generateMissingPluginMessage;
const pluginNameMap = {
  asyncDoExpressions: {
    syntax: {
      name: "@babel/plugin-syntax-async-do-expressions",
      url: "https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-async-do-expressions"
    }
  },
  decimal: {
    syntax: {
      name: "@babel/plugin-syntax-decimal",
      url: "https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-decimal"
    }
  },
  decorators: {
    syntax: {
      name: "@babel/plugin-syntax-decorators",
      url: "https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-decorators"
    },
    transform: {
      name: "@babel/plugin-proposal-decorators",
      url: "https://github.com/babel/babel/tree/main/packages/babel-plugin-proposal-decorators"
    }
  },
  doExpressions: {
    syntax: {
      name: "@babel/plugin-syntax-do-expressions",
      url: "https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-do-expressions"
    },
    transform: {
      name: "@babel/plugin-proposal-do-expressions",
      url: "https://github.com/babel/babel/tree/main/packages/babel-plugin-proposal-do-expressions"
    }
  },
  exportDefaultFrom: {
    syntax: {
      name: "@babel/plugin-syntax-export-default-from",
      url: "https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-export-default-from"
    },
    transform: {
      name: "@babel/plugin-proposal-export-default-from",
      url: "https://github.com/babel/babel/tree/main/packages/babel-plugin-proposal-export-default-from"
    }
  },
  flow: {
    syntax: {
      name: "@babel/plugin-syntax-flow",
      url: "https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-flow"
    },
    transform: {
      name: "@babel/preset-flow",
      url: "https://github.com/babel/babel/tree/main/packages/babel-preset-flow"
    }
  },
  functionBind: {
    syntax: {
      name: "@babel/plugin-syntax-function-bind",
      url: "https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-function-bind"
    },
    transform: {
      name: "@babel/plugin-proposal-function-bind",
      url: "https://github.com/babel/babel/tree/main/packages/babel-plugin-proposal-function-bind"
    }
  },
  functionSent: {
    syntax: {
      name: "@babel/plugin-syntax-function-sent",
      url: "https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-function-sent"
    },
    transform: {
      name: "@babel/plugin-proposal-function-sent",
      url: "https://github.com/babel/babel/tree/main/packages/babel-plugin-proposal-function-sent"
    }
  },
  jsx: {
    syntax: {
      name: "@babel/plugin-syntax-jsx",
      url: "https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-jsx"
    },
    transform: {
      name: "@babel/preset-react",
      url: "https://github.com/babel/babel/tree/main/packages/babel-preset-react"
    }
  },
  importAssertions: {
    syntax: {
      name: "@babel/plugin-syntax-import-assertions",
      url: "https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-import-assertions"
    }
  },
  pipelineOperator: {
    syntax: {
      name: "@babel/plugin-syntax-pipeline-operator",
      url: "https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-pipeline-operator"
    },
    transform: {
      name: "@babel/plugin-proposal-pipeline-operator",
      url: "https://github.com/babel/babel/tree/main/packages/babel-plugin-proposal-pipeline-operator"
    }
  },
  recordAndTuple: {
    syntax: {
      name: "@babel/plugin-syntax-record-and-tuple",
      url: "https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-record-and-tuple"
    }
  },
  regexpUnicodeSets: {
    syntax: {
      name: "@babel/plugin-syntax-unicode-sets-regex",
      url: "https://github.com/babel/babel/blob/main/packages/babel-plugin-syntax-unicode-sets-regex/README.md"
    },
    transform: {
      name: "@babel/plugin-proposal-unicode-sets-regex",
      url: "https://github.com/babel/babel/blob/main/packages/babel-plugin-proposalunicode-sets-regex/README.md"
    }
  },
  throwExpressions: {
    syntax: {
      name: "@babel/plugin-syntax-throw-expressions",
      url: "https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-throw-expressions"
    },
    transform: {
      name: "@babel/plugin-proposal-throw-expressions",
      url: "https://github.com/babel/babel/tree/main/packages/babel-plugin-proposal-throw-expressions"
    }
  },
  typescript: {
    syntax: {
      name: "@babel/plugin-syntax-typescript",
      url: "https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-typescript"
    },
    transform: {
      name: "@babel/preset-typescript",
      url: "https://github.com/babel/babel/tree/main/packages/babel-preset-typescript"
    }
  },
  asyncGenerators: {
    syntax: {
      name: "@babel/plugin-syntax-async-generators",
      url: "https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-async-generators"
    },
    transform: {
      name: "@babel/plugin-proposal-async-generator-functions",
      url: "https://github.com/babel/babel/tree/main/packages/babel-plugin-proposal-async-generator-functions"
    }
  },
  classProperties: {
    syntax: {
      name: "@babel/plugin-syntax-class-properties",
      url: "https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-class-properties"
    },
    transform: {
      name: "@babel/plugin-proposal-class-properties",
      url: "https://github.com/babel/babel/tree/main/packages/babel-plugin-proposal-class-properties"
    }
  },
  classPrivateProperties: {
    syntax: {
      name: "@babel/plugin-syntax-class-properties",
      url: "https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-class-properties"
    },
    transform: {
      name: "@babel/plugin-proposal-class-properties",
      url: "https://github.com/babel/babel/tree/main/packages/babel-plugin-proposal-class-properties"
    }
  },
  classPrivateMethods: {
    syntax: {
      name: "@babel/plugin-syntax-class-properties",
      url: "https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-class-properties"
    },
    transform: {
      name: "@babel/plugin-proposal-private-methods",
      url: "https://github.com/babel/babel/tree/main/packages/babel-plugin-proposal-private-methods"
    }
  },
  classStaticBlock: {
    syntax: {
      name: "@babel/plugin-syntax-class-static-block",
      url: "https://github.com/babel/babel/tree/HEAD/packages/babel-plugin-syntax-class-static-block"
    },
    transform: {
      name: "@babel/plugin-proposal-class-static-block",
      url: "https://github.com/babel/babel/tree/HEAD/packages/babel-plugin-proposal-class-static-block"
    }
  },
  dynamicImport: {
    syntax: {
      name: "@babel/plugin-syntax-dynamic-import",
      url: "https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-dynamic-import"
    }
  },
  exportNamespaceFrom: {
    syntax: {
      name: "@babel/plugin-syntax-export-namespace-from",
      url: "https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-export-namespace-from"
    },
    transform: {
      name: "@babel/plugin-proposal-export-namespace-from",
      url: "https://github.com/babel/babel/tree/main/packages/babel-plugin-proposal-export-namespace-from"
    }
  },
  importMeta: {
    syntax: {
      name: "@babel/plugin-syntax-import-meta",
      url: "https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-import-meta"
    }
  },
  logicalAssignment: {
    syntax: {
      name: "@babel/plugin-syntax-logical-assignment-operators",
      url: "https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-logical-assignment-operators"
    },
    transform: {
      name: "@babel/plugin-proposal-logical-assignment-operators",
      url: "https://github.com/babel/babel/tree/main/packages/babel-plugin-proposal-logical-assignment-operators"
    }
  },
  moduleStringNames: {
    syntax: {
      name: "@babel/plugin-syntax-module-string-names",
      url: "https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-module-string-names"
    }
  },
  numericSeparator: {
    syntax: {
      name: "@babel/plugin-syntax-numeric-separator",
      url: "https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-numeric-separator"
    },
    transform: {
      name: "@babel/plugin-proposal-numeric-separator",
      url: "https://github.com/babel/babel/tree/main/packages/babel-plugin-proposal-numeric-separator"
    }
  },
  nullishCoalescingOperator: {
    syntax: {
      name: "@babel/plugin-syntax-nullish-coalescing-operator",
      url: "https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-nullish-coalescing-operator"
    },
    transform: {
      name: "@babel/plugin-proposal-nullish-coalescing-operator",
      url: "https://github.com/babel/babel/tree/main/packages/babel-plugin-transform-nullish-coalescing-opearator"
    }
  },
  objectRestSpread: {
    syntax: {
      name: "@babel/plugin-syntax-object-rest-spread",
      url: "https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-object-rest-spread"
    },
    transform: {
      name: "@babel/plugin-proposal-object-rest-spread",
      url: "https://github.com/babel/babel/tree/main/packages/babel-plugin-proposal-object-rest-spread"
    }
  },
  optionalCatchBinding: {
    syntax: {
      name: "@babel/plugin-syntax-optional-catch-binding",
      url: "https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-optional-catch-binding"
    },
    transform: {
      name: "@babel/plugin-proposal-optional-catch-binding",
      url: "https://github.com/babel/babel/tree/main/packages/babel-plugin-proposal-optional-catch-binding"
    }
  },
  optionalChaining: {
    syntax: {
      name: "@babel/plugin-syntax-optional-chaining",
      url: "https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-optional-chaining"
    },
    transform: {
      name: "@babel/plugin-proposal-optional-chaining",
      url: "https://github.com/babel/babel/tree/main/packages/babel-plugin-proposal-optional-chaining"
    }
  },
  privateIn: {
    syntax: {
      name: "@babel/plugin-syntax-private-property-in-object",
      url: "https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-private-property-in-object"
    },
    transform: {
      name: "@babel/plugin-proposal-private-property-in-object",
      url: "https://github.com/babel/babel/tree/main/packages/babel-plugin-proposal-private-property-in-object"
    }
  }
};
pluginNameMap.privateIn.syntax = pluginNameMap.privateIn.transform;
const getNameURLCombination = ({
  name,
  url
}) => `${name} (${url})`;
function generateMissingPluginMessage(missingPluginName, loc, codeFrame) {
  let helpMessage = `Support for the experimental syntax '${missingPluginName}' isn't currently enabled ` + `(${loc.line}:${loc.column + 1}):\n\n` + codeFrame;
  const pluginInfo = pluginNameMap[missingPluginName];
  if (pluginInfo) {
    const {
      syntax: syntaxPlugin,
      transform: transformPlugin
    } = pluginInfo;
    if (syntaxPlugin) {
      const syntaxPluginInfo = getNameURLCombination(syntaxPlugin);
      if (transformPlugin) {
        const transformPluginInfo = getNameURLCombination(transformPlugin);
        const sectionType = transformPlugin.name.startsWith("@babel/plugin") ? "plugins" : "presets";
        helpMessage += `\n\nAdd ${transformPluginInfo} to the '${sectionType}' section of your Babel config to enable transformation.
If you want to leave it as-is, add ${syntaxPluginInfo} to the 'plugins' section to enable parsing.`;
      } else {
        helpMessage += `\n\nAdd ${syntaxPluginInfo} to the 'plugins' section of your Babel config ` + `to enable parsing.`;
      }
    }
  }
  return helpMessage;
}
0 && 0;

//# sourceMappingURL=missing-plugin-helper.js.map

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679363156121, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;
function deepClone(value, cache) {
  if (value !== null) {
    if (cache.has(value)) return cache.get(value);
    let cloned;
    if (Array.isArray(value)) {
      cloned = new Array(value.length);
      cache.set(value, cloned);
      for (let i = 0; i < value.length; i++) {
        cloned[i] = typeof value[i] !== "object" ? value[i] : deepClone(value[i], cache);
      }
    } else {
      cloned = {};
      cache.set(value, cloned);
      const keys = Object.keys(value);
      for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        cloned[key] = typeof value[key] !== "object" ? value[key] : deepClone(value[key], cache);
      }
    }
    return cloned;
  }
  return value;
}
function _default(value) {
  if (typeof value !== "object") return value;
  return deepClone(value, new Map());
}
0 && 0;

//# sourceMappingURL=clone-deep.js.map

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679363156122, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = generateCode;
function _convertSourceMap() {
  const data = require("convert-source-map");
  _convertSourceMap = function () {
    return data;
  };
  return data;
}
function _generator() {
  const data = require("@babel/generator");
  _generator = function () {
    return data;
  };
  return data;
}
var _mergeMap = require("./merge-map");
function generateCode(pluginPasses, file) {
  const {
    opts,
    ast,
    code,
    inputMap
  } = file;
  const {
    generatorOpts
  } = opts;
  generatorOpts.inputSourceMap = inputMap == null ? void 0 : inputMap.toObject();
  const results = [];
  for (const plugins of pluginPasses) {
    for (const plugin of plugins) {
      const {
        generatorOverride
      } = plugin;
      if (generatorOverride) {
        const result = generatorOverride(ast, generatorOpts, code, _generator().default);
        if (result !== undefined) results.push(result);
      }
    }
  }
  let result;
  if (results.length === 0) {
    result = (0, _generator().default)(ast, generatorOpts, code);
  } else if (results.length === 1) {
    result = results[0];
    if (typeof result.then === "function") {
      throw new Error(`You appear to be using an async codegen plugin, ` + `which your current version of Babel does not support. ` + `If you're using a published plugin, ` + `you may need to upgrade your @babel/core version.`);
    }
  } else {
    throw new Error("More than one plugin attempted to override codegen.");
  }
  let {
    code: outputCode,
    decodedMap: outputMap = result.map
  } = result;
  if (result.__mergedMap) {
    outputMap = Object.assign({}, result.map);
  } else {
    if (outputMap) {
      if (inputMap) {
        outputMap = (0, _mergeMap.default)(inputMap.toObject(), outputMap, generatorOpts.sourceFileName);
      } else {
        outputMap = result.map;
      }
    }
  }
  if (opts.sourceMaps === "inline" || opts.sourceMaps === "both") {
    outputCode += "\n" + _convertSourceMap().fromObject(outputMap).toComment();
  }
  if (opts.sourceMaps === "inline") {
    outputMap = null;
  }
  return {
    outputCode,
    outputMap
  };
}
0 && 0;

//# sourceMappingURL=generate.js.map

}, function(modId) { var map = {"./merge-map":1679363156123}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679363156123, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = mergeSourceMap;
function _remapping() {
  const data = require("@ampproject/remapping");
  _remapping = function () {
    return data;
  };
  return data;
}
function mergeSourceMap(inputMap, map, sourceFileName) {
  const source = sourceFileName.replace(/\\/g, "/");
  let found = false;
  const result = _remapping()(rootless(map), (s, ctx) => {
    if (s === source && !found) {
      found = true;
      ctx.source = "";
      return rootless(inputMap);
    }
    return null;
  });
  if (typeof inputMap.sourceRoot === "string") {
    result.sourceRoot = inputMap.sourceRoot;
  }
  return Object.assign({}, result);
}
function rootless(map) {
  return Object.assign({}, map, {
    sourceRoot: null
  });
}
0 && 0;

//# sourceMappingURL=merge-map.js.map

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679363156124, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadPlugin = loadPlugin;
exports.loadPreset = loadPreset;
exports.resolvePlugin = resolvePlugin;
exports.resolvePreset = resolvePreset;
function _debug() {
  const data = require("debug");
  _debug = function () {
    return data;
  };
  return data;
}
function _path() {
  const data = require("path");
  _path = function () {
    return data;
  };
  return data;
}
function _gensync() {
  const data = require("gensync");
  _gensync = function () {
    return data;
  };
  return data;
}
var _async = require("../../gensync-utils/async");
var _moduleTypes = require("./module-types");
function _url() {
  const data = require("url");
  _url = function () {
    return data;
  };
  return data;
}
var _importMetaResolve = require("./import-meta-resolve");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
const debug = _debug()("babel:config:loading:files:plugins");
const EXACT_RE = /^module:/;
const BABEL_PLUGIN_PREFIX_RE = /^(?!@|module:|[^/]+\/|babel-plugin-)/;
const BABEL_PRESET_PREFIX_RE = /^(?!@|module:|[^/]+\/|babel-preset-)/;
const BABEL_PLUGIN_ORG_RE = /^(@babel\/)(?!plugin-|[^/]+\/)/;
const BABEL_PRESET_ORG_RE = /^(@babel\/)(?!preset-|[^/]+\/)/;
const OTHER_PLUGIN_ORG_RE = /^(@(?!babel\/)[^/]+\/)(?![^/]*babel-plugin(?:-|\/|$)|[^/]+\/)/;
const OTHER_PRESET_ORG_RE = /^(@(?!babel\/)[^/]+\/)(?![^/]*babel-preset(?:-|\/|$)|[^/]+\/)/;
const OTHER_ORG_DEFAULT_RE = /^(@(?!babel$)[^/]+)$/;
function* resolvePlugin(name, dirname) {
  return yield* resolveStandardizedName("plugin", name, dirname);
}
function* resolvePreset(name, dirname) {
  return yield* resolveStandardizedName("preset", name, dirname);
}
function* loadPlugin(name, dirname) {
  const filepath = yield* resolvePlugin(name, dirname);
  const value = yield* requireModule("plugin", filepath);
  debug("Loaded plugin %o from %o.", name, dirname);
  return {
    filepath,
    value
  };
}
function* loadPreset(name, dirname) {
  const filepath = yield* resolvePreset(name, dirname);
  const value = yield* requireModule("preset", filepath);
  debug("Loaded preset %o from %o.", name, dirname);
  return {
    filepath,
    value
  };
}
function standardizeName(type, name) {
  if (_path().isAbsolute(name)) return name;
  const isPreset = type === "preset";
  return name.replace(isPreset ? BABEL_PRESET_PREFIX_RE : BABEL_PLUGIN_PREFIX_RE, `babel-${type}-`).replace(isPreset ? BABEL_PRESET_ORG_RE : BABEL_PLUGIN_ORG_RE, `$1${type}-`).replace(isPreset ? OTHER_PRESET_ORG_RE : OTHER_PLUGIN_ORG_RE, `$1babel-${type}-`).replace(OTHER_ORG_DEFAULT_RE, `$1/babel-${type}`).replace(EXACT_RE, "");
}
function* resolveAlternativesHelper(type, name) {
  const standardizedName = standardizeName(type, name);
  const {
    error,
    value
  } = yield standardizedName;
  if (!error) return value;
  if (error.code !== "MODULE_NOT_FOUND") throw error;
  if (standardizedName !== name && !(yield name).error) {
    error.message += `\n- If you want to resolve "${name}", use "module:${name}"`;
  }
  if (!(yield standardizeName(type, "@babel/" + name)).error) {
    error.message += `\n- Did you mean "@babel/${name}"?`;
  }
  const oppositeType = type === "preset" ? "plugin" : "preset";
  if (!(yield standardizeName(oppositeType, name)).error) {
    error.message += `\n- Did you accidentally pass a ${oppositeType} as a ${type}?`;
  }
  throw error;
}
function tryRequireResolve(id, {
  paths: [dirname]
}) {
  try {
    return {
      error: null,
      value: (((v, w) => (v = v.split("."), w = w.split("."), +v[0] > +w[0] || v[0] == w[0] && +v[1] >= +w[1]))(process.versions.node, "8.9") ? require.resolve : (r, {
        paths: [b]
      }, M = require("module")) => {
        let f = M._findPath(r, M._nodeModulePaths(b).concat(b));
        if (f) return f;
        f = new Error(`Cannot resolve module '${r}'`);
        f.code = "MODULE_NOT_FOUND";
        throw f;
      })(id, {
        paths: [dirname]
      })
    };
  } catch (error) {
    return {
      error,
      value: null
    };
  }
}
function tryImportMetaResolve(_x, _x2) {
  return _tryImportMetaResolve.apply(this, arguments);
}
function _tryImportMetaResolve() {
  _tryImportMetaResolve = _asyncToGenerator(function* (id, options) {
    try {
      return {
        error: null,
        value: yield (0, _importMetaResolve.default)(id, options)
      };
    } catch (error) {
      return {
        error,
        value: null
      };
    }
  });
  return _tryImportMetaResolve.apply(this, arguments);
}
function resolveStandardizedNameForRequire(type, name, dirname) {
  const it = resolveAlternativesHelper(type, name);
  let res = it.next();
  while (!res.done) {
    res = it.next(tryRequireResolve(res.value, {
      paths: [dirname]
    }));
  }
  return res.value;
}
function resolveStandardizedNameForImport(_x3, _x4, _x5) {
  return _resolveStandardizedNameForImport.apply(this, arguments);
}
function _resolveStandardizedNameForImport() {
  _resolveStandardizedNameForImport = _asyncToGenerator(function* (type, name, dirname) {
    const parentUrl = (0, _url().pathToFileURL)(_path().join(dirname, "./babel-virtual-resolve-base.js")).href;
    const it = resolveAlternativesHelper(type, name);
    let res = it.next();
    while (!res.done) {
      res = it.next(yield tryImportMetaResolve(res.value, parentUrl));
    }
    return (0, _url().fileURLToPath)(res.value);
  });
  return _resolveStandardizedNameForImport.apply(this, arguments);
}
const resolveStandardizedName = _gensync()({
  sync(type, name, dirname = process.cwd()) {
    return resolveStandardizedNameForRequire(type, name, dirname);
  },
  async(type, name, dirname = process.cwd()) {
    return _asyncToGenerator(function* () {
      if (!_moduleTypes.supportsESM) {
        return resolveStandardizedNameForRequire(type, name, dirname);
      }
      try {
        return yield resolveStandardizedNameForImport(type, name, dirname);
      } catch (e) {
        try {
          return resolveStandardizedNameForRequire(type, name, dirname);
        } catch (e2) {
          if (e.type === "MODULE_NOT_FOUND") throw e;
          if (e2.type === "MODULE_NOT_FOUND") throw e2;
          throw e;
        }
      }
    })();
  }
});
{
  var LOADING_MODULES = new Set();
}
function* requireModule(type, name) {
  {
    if (!(yield* (0, _async.isAsync)()) && LOADING_MODULES.has(name)) {
      throw new Error(`Reentrant ${type} detected trying to load "${name}". This module is not ignored ` + "and is trying to load itself while compiling itself, leading to a dependency cycle. " + 'We recommend adding it to your "ignore" list in your babelrc, or to a .babelignore.');
    }
  }
  try {
    {
      LOADING_MODULES.add(name);
    }
    return yield* (0, _moduleTypes.default)(name, `You appear to be using a native ECMAScript module ${type}, ` + "which is only supported when running Babel asynchronously.", true);
  } catch (err) {
    err.message = `[BABEL]: ${err.message} (While processing: ${name})`;
    throw err;
  } finally {
    {
      LOADING_MODULES.delete(name);
    }
  }
}
0 && 0;

//# sourceMappingURL=plugins.js.map

}, function(modId) { var map = {"../../gensync-utils/async":1679363156088,"./module-types":1679363156095,"./import-meta-resolve":1679363156125}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679363156125, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = resolve;
var _importMetaResolve = require("../../vendor/import-meta-resolve");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
let import_;
try {
  import_ = require("./import.cjs");
} catch (_unused) {}
const importMetaResolveP = import_ && process.execArgv.includes("--experimental-import-meta-resolve") ? import_("data:text/javascript,export default import.meta.resolve").then(m => m.default || _importMetaResolve.resolve, () => _importMetaResolve.resolve) : Promise.resolve(_importMetaResolve.resolve);
function resolve(_x, _x2) {
  return _resolve.apply(this, arguments);
}
function _resolve() {
  _resolve = _asyncToGenerator(function* (specifier, parent) {
    return (yield importMetaResolveP)(specifier, parent);
  });
  return _resolve.apply(this, arguments);
}
0 && 0;

//# sourceMappingURL=import-meta-resolve.js.map

}, function(modId) { var map = {"../../vendor/import-meta-resolve":1679363156126}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679363156126, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.moduleResolve = moduleResolve;
exports.resolve = resolve;
function _url() {
  const data = require("url");
  _url = function () {
    return data;
  };
  return data;
}
function _fs() {
  const data = _interopRequireWildcard(require("fs"), true);
  _fs = function () {
    return data;
  };
  return data;
}
function _path() {
  const data = require("path");
  _path = function () {
    return data;
  };
  return data;
}
function _assert() {
  const data = require("assert");
  _assert = function () {
    return data;
  };
  return data;
}
function _util() {
  const data = require("util");
  _util = function () {
    return data;
  };
  return data;
}
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var re$3 = {
  exports: {}
};
const SEMVER_SPEC_VERSION = '2.0.0';
const MAX_LENGTH$2 = 256;
const MAX_SAFE_INTEGER$1 = Number.MAX_SAFE_INTEGER || 9007199254740991;
const MAX_SAFE_COMPONENT_LENGTH = 16;
var constants = {
  SEMVER_SPEC_VERSION,
  MAX_LENGTH: MAX_LENGTH$2,
  MAX_SAFE_INTEGER: MAX_SAFE_INTEGER$1,
  MAX_SAFE_COMPONENT_LENGTH
};
const debug$1 = typeof process === 'object' && process.env && process.env.NODE_DEBUG && /\bsemver\b/i.test(process.env.NODE_DEBUG) ? (...args) => console.error('SEMVER', ...args) : () => {};
var debug_1 = debug$1;
(function (module, exports) {
  const {
    MAX_SAFE_COMPONENT_LENGTH
  } = constants;
  const debug = debug_1;
  exports = module.exports = {};
  const re = exports.re = [];
  const src = exports.src = [];
  const t = exports.t = {};
  let R = 0;
  const createToken = (name, value, isGlobal) => {
    const index = R++;
    debug(name, index, value);
    t[name] = index;
    src[index] = value;
    re[index] = new RegExp(value, isGlobal ? 'g' : undefined);
  };
  createToken('NUMERICIDENTIFIER', '0|[1-9]\\d*');
  createToken('NUMERICIDENTIFIERLOOSE', '[0-9]+');
  createToken('NONNUMERICIDENTIFIER', '\\d*[a-zA-Z-][a-zA-Z0-9-]*');
  createToken('MAINVERSION', `(${src[t.NUMERICIDENTIFIER]})\\.` + `(${src[t.NUMERICIDENTIFIER]})\\.` + `(${src[t.NUMERICIDENTIFIER]})`);
  createToken('MAINVERSIONLOOSE', `(${src[t.NUMERICIDENTIFIERLOOSE]})\\.` + `(${src[t.NUMERICIDENTIFIERLOOSE]})\\.` + `(${src[t.NUMERICIDENTIFIERLOOSE]})`);
  createToken('PRERELEASEIDENTIFIER', `(?:${src[t.NUMERICIDENTIFIER]}|${src[t.NONNUMERICIDENTIFIER]})`);
  createToken('PRERELEASEIDENTIFIERLOOSE', `(?:${src[t.NUMERICIDENTIFIERLOOSE]}|${src[t.NONNUMERICIDENTIFIER]})`);
  createToken('PRERELEASE', `(?:-(${src[t.PRERELEASEIDENTIFIER]}(?:\\.${src[t.PRERELEASEIDENTIFIER]})*))`);
  createToken('PRERELEASELOOSE', `(?:-?(${src[t.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${src[t.PRERELEASEIDENTIFIERLOOSE]})*))`);
  createToken('BUILDIDENTIFIER', '[0-9A-Za-z-]+');
  createToken('BUILD', `(?:\\+(${src[t.BUILDIDENTIFIER]}(?:\\.${src[t.BUILDIDENTIFIER]})*))`);
  createToken('FULLPLAIN', `v?${src[t.MAINVERSION]}${src[t.PRERELEASE]}?${src[t.BUILD]}?`);
  createToken('FULL', `^${src[t.FULLPLAIN]}$`);
  createToken('LOOSEPLAIN', `[v=\\s]*${src[t.MAINVERSIONLOOSE]}${src[t.PRERELEASELOOSE]}?${src[t.BUILD]}?`);
  createToken('LOOSE', `^${src[t.LOOSEPLAIN]}$`);
  createToken('GTLT', '((?:<|>)?=?)');
  createToken('XRANGEIDENTIFIERLOOSE', `${src[t.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`);
  createToken('XRANGEIDENTIFIER', `${src[t.NUMERICIDENTIFIER]}|x|X|\\*`);
  createToken('XRANGEPLAIN', `[v=\\s]*(${src[t.XRANGEIDENTIFIER]})` + `(?:\\.(${src[t.XRANGEIDENTIFIER]})` + `(?:\\.(${src[t.XRANGEIDENTIFIER]})` + `(?:${src[t.PRERELEASE]})?${src[t.BUILD]}?` + `)?)?`);
  createToken('XRANGEPLAINLOOSE', `[v=\\s]*(${src[t.XRANGEIDENTIFIERLOOSE]})` + `(?:\\.(${src[t.XRANGEIDENTIFIERLOOSE]})` + `(?:\\.(${src[t.XRANGEIDENTIFIERLOOSE]})` + `(?:${src[t.PRERELEASELOOSE]})?${src[t.BUILD]}?` + `)?)?`);
  createToken('XRANGE', `^${src[t.GTLT]}\\s*${src[t.XRANGEPLAIN]}$`);
  createToken('XRANGELOOSE', `^${src[t.GTLT]}\\s*${src[t.XRANGEPLAINLOOSE]}$`);
  createToken('COERCE', `${'(^|[^\\d])' + '(\\d{1,'}${MAX_SAFE_COMPONENT_LENGTH}})` + `(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH}}))?` + `(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH}}))?` + `(?:$|[^\\d])`);
  createToken('COERCERTL', src[t.COERCE], true);
  createToken('LONETILDE', '(?:~>?)');
  createToken('TILDETRIM', `(\\s*)${src[t.LONETILDE]}\\s+`, true);
  exports.tildeTrimReplace = '$1~';
  createToken('TILDE', `^${src[t.LONETILDE]}${src[t.XRANGEPLAIN]}$`);
  createToken('TILDELOOSE', `^${src[t.LONETILDE]}${src[t.XRANGEPLAINLOOSE]}$`);
  createToken('LONECARET', '(?:\\^)');
  createToken('CARETTRIM', `(\\s*)${src[t.LONECARET]}\\s+`, true);
  exports.caretTrimReplace = '$1^';
  createToken('CARET', `^${src[t.LONECARET]}${src[t.XRANGEPLAIN]}$`);
  createToken('CARETLOOSE', `^${src[t.LONECARET]}${src[t.XRANGEPLAINLOOSE]}$`);
  createToken('COMPARATORLOOSE', `^${src[t.GTLT]}\\s*(${src[t.LOOSEPLAIN]})$|^$`);
  createToken('COMPARATOR', `^${src[t.GTLT]}\\s*(${src[t.FULLPLAIN]})$|^$`);
  createToken('COMPARATORTRIM', `(\\s*)${src[t.GTLT]}\\s*(${src[t.LOOSEPLAIN]}|${src[t.XRANGEPLAIN]})`, true);
  exports.comparatorTrimReplace = '$1$2$3';
  createToken('HYPHENRANGE', `^\\s*(${src[t.XRANGEPLAIN]})` + `\\s+-\\s+` + `(${src[t.XRANGEPLAIN]})` + `\\s*$`);
  createToken('HYPHENRANGELOOSE', `^\\s*(${src[t.XRANGEPLAINLOOSE]})` + `\\s+-\\s+` + `(${src[t.XRANGEPLAINLOOSE]})` + `\\s*$`);
  createToken('STAR', '(<|>)?=?\\s*\\*');
  createToken('GTE0', '^\\s*>=\\s*0\\.0\\.0\\s*$');
  createToken('GTE0PRE', '^\\s*>=\\s*0\\.0\\.0-0\\s*$');
})(re$3, re$3.exports);
const opts = ['includePrerelease', 'loose', 'rtl'];
const parseOptions$2 = options => !options ? {} : typeof options !== 'object' ? {
  loose: true
} : opts.filter(k => options[k]).reduce((o, k) => {
  o[k] = true;
  return o;
}, {});
var parseOptions_1 = parseOptions$2;
const numeric = /^[0-9]+$/;
const compareIdentifiers$1 = (a, b) => {
  const anum = numeric.test(a);
  const bnum = numeric.test(b);
  if (anum && bnum) {
    a = +a;
    b = +b;
  }
  return a === b ? 0 : anum && !bnum ? -1 : bnum && !anum ? 1 : a < b ? -1 : 1;
};
const rcompareIdentifiers = (a, b) => compareIdentifiers$1(b, a);
var identifiers = {
  compareIdentifiers: compareIdentifiers$1,
  rcompareIdentifiers
};
const debug = debug_1;
const {
  MAX_LENGTH: MAX_LENGTH$1,
  MAX_SAFE_INTEGER
} = constants;
const {
  re: re$2,
  t: t$2
} = re$3.exports;
const parseOptions$1 = parseOptions_1;
const {
  compareIdentifiers
} = identifiers;
class SemVer$c {
  constructor(version, options) {
    options = parseOptions$1(options);
    if (version instanceof SemVer$c) {
      if (version.loose === !!options.loose && version.includePrerelease === !!options.includePrerelease) {
        return version;
      } else {
        version = version.version;
      }
    } else if (typeof version !== 'string') {
      throw new TypeError(`Invalid Version: ${version}`);
    }
    if (version.length > MAX_LENGTH$1) {
      throw new TypeError(`version is longer than ${MAX_LENGTH$1} characters`);
    }
    debug('SemVer', version, options);
    this.options = options;
    this.loose = !!options.loose;
    this.includePrerelease = !!options.includePrerelease;
    const m = version.trim().match(options.loose ? re$2[t$2.LOOSE] : re$2[t$2.FULL]);
    if (!m) {
      throw new TypeError(`Invalid Version: ${version}`);
    }
    this.raw = version;
    this.major = +m[1];
    this.minor = +m[2];
    this.patch = +m[3];
    if (this.major > MAX_SAFE_INTEGER || this.major < 0) {
      throw new TypeError('Invalid major version');
    }
    if (this.minor > MAX_SAFE_INTEGER || this.minor < 0) {
      throw new TypeError('Invalid minor version');
    }
    if (this.patch > MAX_SAFE_INTEGER || this.patch < 0) {
      throw new TypeError('Invalid patch version');
    }
    if (!m[4]) {
      this.prerelease = [];
    } else {
      this.prerelease = m[4].split('.').map(id => {
        if (/^[0-9]+$/.test(id)) {
          const num = +id;
          if (num >= 0 && num < MAX_SAFE_INTEGER) {
            return num;
          }
        }
        return id;
      });
    }
    this.build = m[5] ? m[5].split('.') : [];
    this.format();
  }
  format() {
    this.version = `${this.major}.${this.minor}.${this.patch}`;
    if (this.prerelease.length) {
      this.version += `-${this.prerelease.join('.')}`;
    }
    return this.version;
  }
  toString() {
    return this.version;
  }
  compare(other) {
    debug('SemVer.compare', this.version, this.options, other);
    if (!(other instanceof SemVer$c)) {
      if (typeof other === 'string' && other === this.version) {
        return 0;
      }
      other = new SemVer$c(other, this.options);
    }
    if (other.version === this.version) {
      return 0;
    }
    return this.compareMain(other) || this.comparePre(other);
  }
  compareMain(other) {
    if (!(other instanceof SemVer$c)) {
      other = new SemVer$c(other, this.options);
    }
    return compareIdentifiers(this.major, other.major) || compareIdentifiers(this.minor, other.minor) || compareIdentifiers(this.patch, other.patch);
  }
  comparePre(other) {
    if (!(other instanceof SemVer$c)) {
      other = new SemVer$c(other, this.options);
    }
    if (this.prerelease.length && !other.prerelease.length) {
      return -1;
    } else if (!this.prerelease.length && other.prerelease.length) {
      return 1;
    } else if (!this.prerelease.length && !other.prerelease.length) {
      return 0;
    }
    let i = 0;
    do {
      const a = this.prerelease[i];
      const b = other.prerelease[i];
      debug('prerelease compare', i, a, b);
      if (a === undefined && b === undefined) {
        return 0;
      } else if (b === undefined) {
        return 1;
      } else if (a === undefined) {
        return -1;
      } else if (a === b) {
        continue;
      } else {
        return compareIdentifiers(a, b);
      }
    } while (++i);
  }
  compareBuild(other) {
    if (!(other instanceof SemVer$c)) {
      other = new SemVer$c(other, this.options);
    }
    let i = 0;
    do {
      const a = this.build[i];
      const b = other.build[i];
      debug('prerelease compare', i, a, b);
      if (a === undefined && b === undefined) {
        return 0;
      } else if (b === undefined) {
        return 1;
      } else if (a === undefined) {
        return -1;
      } else if (a === b) {
        continue;
      } else {
        return compareIdentifiers(a, b);
      }
    } while (++i);
  }
  inc(release, identifier) {
    switch (release) {
      case 'premajor':
        this.prerelease.length = 0;
        this.patch = 0;
        this.minor = 0;
        this.major++;
        this.inc('pre', identifier);
        break;
      case 'preminor':
        this.prerelease.length = 0;
        this.patch = 0;
        this.minor++;
        this.inc('pre', identifier);
        break;
      case 'prepatch':
        this.prerelease.length = 0;
        this.inc('patch', identifier);
        this.inc('pre', identifier);
        break;
      case 'prerelease':
        if (this.prerelease.length === 0) {
          this.inc('patch', identifier);
        }
        this.inc('pre', identifier);
        break;
      case 'major':
        if (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) {
          this.major++;
        }
        this.minor = 0;
        this.patch = 0;
        this.prerelease = [];
        break;
      case 'minor':
        if (this.patch !== 0 || this.prerelease.length === 0) {
          this.minor++;
        }
        this.patch = 0;
        this.prerelease = [];
        break;
      case 'patch':
        if (this.prerelease.length === 0) {
          this.patch++;
        }
        this.prerelease = [];
        break;
      case 'pre':
        if (this.prerelease.length === 0) {
          this.prerelease = [0];
        } else {
          let i = this.prerelease.length;
          while (--i >= 0) {
            if (typeof this.prerelease[i] === 'number') {
              this.prerelease[i]++;
              i = -2;
            }
          }
          if (i === -1) {
            this.prerelease.push(0);
          }
        }
        if (identifier) {
          if (compareIdentifiers(this.prerelease[0], identifier) === 0) {
            if (isNaN(this.prerelease[1])) {
              this.prerelease = [identifier, 0];
            }
          } else {
            this.prerelease = [identifier, 0];
          }
        }
        break;
      default:
        throw new Error(`invalid increment argument: ${release}`);
    }
    this.format();
    this.raw = this.version;
    return this;
  }
}
var semver$2 = SemVer$c;
const {
  MAX_LENGTH
} = constants;
const {
  re: re$1,
  t: t$1
} = re$3.exports;
const SemVer$b = semver$2;
const parseOptions = parseOptions_1;
const parse$5 = (version, options) => {
  options = parseOptions(options);
  if (version instanceof SemVer$b) {
    return version;
  }
  if (typeof version !== 'string') {
    return null;
  }
  if (version.length > MAX_LENGTH) {
    return null;
  }
  const r = options.loose ? re$1[t$1.LOOSE] : re$1[t$1.FULL];
  if (!r.test(version)) {
    return null;
  }
  try {
    return new SemVer$b(version, options);
  } catch (er) {
    return null;
  }
};
var parse_1 = parse$5;
const parse$4 = parse_1;
const valid$1 = (version, options) => {
  const v = parse$4(version, options);
  return v ? v.version : null;
};
var valid_1 = valid$1;
const parse$3 = parse_1;
const clean = (version, options) => {
  const s = parse$3(version.trim().replace(/^[=v]+/, ''), options);
  return s ? s.version : null;
};
var clean_1 = clean;
const SemVer$a = semver$2;
const inc = (version, release, options, identifier) => {
  if (typeof options === 'string') {
    identifier = options;
    options = undefined;
  }
  try {
    return new SemVer$a(version instanceof SemVer$a ? version.version : version, options).inc(release, identifier).version;
  } catch (er) {
    return null;
  }
};
var inc_1 = inc;
const SemVer$9 = semver$2;
const compare$a = (a, b, loose) => new SemVer$9(a, loose).compare(new SemVer$9(b, loose));
var compare_1 = compare$a;
const compare$9 = compare_1;
const eq$2 = (a, b, loose) => compare$9(a, b, loose) === 0;
var eq_1 = eq$2;
const parse$2 = parse_1;
const eq$1 = eq_1;
const diff = (version1, version2) => {
  if (eq$1(version1, version2)) {
    return null;
  } else {
    const v1 = parse$2(version1);
    const v2 = parse$2(version2);
    const hasPre = v1.prerelease.length || v2.prerelease.length;
    const prefix = hasPre ? 'pre' : '';
    const defaultResult = hasPre ? 'prerelease' : '';
    for (const key in v1) {
      if (key === 'major' || key === 'minor' || key === 'patch') {
        if (v1[key] !== v2[key]) {
          return prefix + key;
        }
      }
    }
    return defaultResult;
  }
};
var diff_1 = diff;
const SemVer$8 = semver$2;
const major = (a, loose) => new SemVer$8(a, loose).major;
var major_1 = major;
const SemVer$7 = semver$2;
const minor = (a, loose) => new SemVer$7(a, loose).minor;
var minor_1 = minor;
const SemVer$6 = semver$2;
const patch = (a, loose) => new SemVer$6(a, loose).patch;
var patch_1 = patch;
const parse$1 = parse_1;
const prerelease = (version, options) => {
  const parsed = parse$1(version, options);
  return parsed && parsed.prerelease.length ? parsed.prerelease : null;
};
var prerelease_1 = prerelease;
const compare$8 = compare_1;
const rcompare = (a, b, loose) => compare$8(b, a, loose);
var rcompare_1 = rcompare;
const compare$7 = compare_1;
const compareLoose = (a, b) => compare$7(a, b, true);
var compareLoose_1 = compareLoose;
const SemVer$5 = semver$2;
const compareBuild$2 = (a, b, loose) => {
  const versionA = new SemVer$5(a, loose);
  const versionB = new SemVer$5(b, loose);
  return versionA.compare(versionB) || versionA.compareBuild(versionB);
};
var compareBuild_1 = compareBuild$2;
const compareBuild$1 = compareBuild_1;
const sort = (list, loose) => list.sort((a, b) => compareBuild$1(a, b, loose));
var sort_1 = sort;
const compareBuild = compareBuild_1;
const rsort = (list, loose) => list.sort((a, b) => compareBuild(b, a, loose));
var rsort_1 = rsort;
const compare$6 = compare_1;
const gt$3 = (a, b, loose) => compare$6(a, b, loose) > 0;
var gt_1 = gt$3;
const compare$5 = compare_1;
const lt$2 = (a, b, loose) => compare$5(a, b, loose) < 0;
var lt_1 = lt$2;
const compare$4 = compare_1;
const neq$1 = (a, b, loose) => compare$4(a, b, loose) !== 0;
var neq_1 = neq$1;
const compare$3 = compare_1;
const gte$2 = (a, b, loose) => compare$3(a, b, loose) >= 0;
var gte_1 = gte$2;
const compare$2 = compare_1;
const lte$2 = (a, b, loose) => compare$2(a, b, loose) <= 0;
var lte_1 = lte$2;
const eq = eq_1;
const neq = neq_1;
const gt$2 = gt_1;
const gte$1 = gte_1;
const lt$1 = lt_1;
const lte$1 = lte_1;
const cmp = (a, op, b, loose) => {
  switch (op) {
    case '===':
      if (typeof a === 'object') {
        a = a.version;
      }
      if (typeof b === 'object') {
        b = b.version;
      }
      return a === b;
    case '!==':
      if (typeof a === 'object') {
        a = a.version;
      }
      if (typeof b === 'object') {
        b = b.version;
      }
      return a !== b;
    case '':
    case '=':
    case '==':
      return eq(a, b, loose);
    case '!=':
      return neq(a, b, loose);
    case '>':
      return gt$2(a, b, loose);
    case '>=':
      return gte$1(a, b, loose);
    case '<':
      return lt$1(a, b, loose);
    case '<=':
      return lte$1(a, b, loose);
    default:
      throw new TypeError(`Invalid operator: ${op}`);
  }
};
var cmp_1 = cmp;
const SemVer$4 = semver$2;
const parse = parse_1;
const {
  re,
  t
} = re$3.exports;
const coerce = (version, options) => {
  if (version instanceof SemVer$4) {
    return version;
  }
  if (typeof version === 'number') {
    version = String(version);
  }
  if (typeof version !== 'string') {
    return null;
  }
  options = options || {};
  let match = null;
  if (!options.rtl) {
    match = version.match(re[t.COERCE]);
  } else {
    let next;
    while ((next = re[t.COERCERTL].exec(version)) && (!match || match.index + match[0].length !== version.length)) {
      if (!match || next.index + next[0].length !== match.index + match[0].length) {
        match = next;
      }
      re[t.COERCERTL].lastIndex = next.index + next[1].length + next[2].length;
    }
    re[t.COERCERTL].lastIndex = -1;
  }
  if (match === null) {
    return null;
  }
  return parse(`${match[2]}.${match[3] || '0'}.${match[4] || '0'}`, options);
};
var coerce_1 = coerce;
var iterator;
var hasRequiredIterator;
function requireIterator() {
  if (hasRequiredIterator) return iterator;
  hasRequiredIterator = 1;
  iterator = function (Yallist) {
    Yallist.prototype[Symbol.iterator] = function* () {
      for (let walker = this.head; walker; walker = walker.next) {
        yield walker.value;
      }
    };
  };
  return iterator;
}
var yallist;
var hasRequiredYallist;
function requireYallist() {
  if (hasRequiredYallist) return yallist;
  hasRequiredYallist = 1;
  yallist = Yallist;
  Yallist.Node = Node;
  Yallist.create = Yallist;
  function Yallist(list) {
    var self = this;
    if (!(self instanceof Yallist)) {
      self = new Yallist();
    }
    self.tail = null;
    self.head = null;
    self.length = 0;
    if (list && typeof list.forEach === 'function') {
      list.forEach(function (item) {
        self.push(item);
      });
    } else if (arguments.length > 0) {
      for (var i = 0, l = arguments.length; i < l; i++) {
        self.push(arguments[i]);
      }
    }
    return self;
  }
  Yallist.prototype.removeNode = function (node) {
    if (node.list !== this) {
      throw new Error('removing node which does not belong to this list');
    }
    var next = node.next;
    var prev = node.prev;
    if (next) {
      next.prev = prev;
    }
    if (prev) {
      prev.next = next;
    }
    if (node === this.head) {
      this.head = next;
    }
    if (node === this.tail) {
      this.tail = prev;
    }
    node.list.length--;
    node.next = null;
    node.prev = null;
    node.list = null;
    return next;
  };
  Yallist.prototype.unshiftNode = function (node) {
    if (node === this.head) {
      return;
    }
    if (node.list) {
      node.list.removeNode(node);
    }
    var head = this.head;
    node.list = this;
    node.next = head;
    if (head) {
      head.prev = node;
    }
    this.head = node;
    if (!this.tail) {
      this.tail = node;
    }
    this.length++;
  };
  Yallist.prototype.pushNode = function (node) {
    if (node === this.tail) {
      return;
    }
    if (node.list) {
      node.list.removeNode(node);
    }
    var tail = this.tail;
    node.list = this;
    node.prev = tail;
    if (tail) {
      tail.next = node;
    }
    this.tail = node;
    if (!this.head) {
      this.head = node;
    }
    this.length++;
  };
  Yallist.prototype.push = function () {
    for (var i = 0, l = arguments.length; i < l; i++) {
      push(this, arguments[i]);
    }
    return this.length;
  };
  Yallist.prototype.unshift = function () {
    for (var i = 0, l = arguments.length; i < l; i++) {
      unshift(this, arguments[i]);
    }
    return this.length;
  };
  Yallist.prototype.pop = function () {
    if (!this.tail) {
      return undefined;
    }
    var res = this.tail.value;
    this.tail = this.tail.prev;
    if (this.tail) {
      this.tail.next = null;
    } else {
      this.head = null;
    }
    this.length--;
    return res;
  };
  Yallist.prototype.shift = function () {
    if (!this.head) {
      return undefined;
    }
    var res = this.head.value;
    this.head = this.head.next;
    if (this.head) {
      this.head.prev = null;
    } else {
      this.tail = null;
    }
    this.length--;
    return res;
  };
  Yallist.prototype.forEach = function (fn, thisp) {
    thisp = thisp || this;
    for (var walker = this.head, i = 0; walker !== null; i++) {
      fn.call(thisp, walker.value, i, this);
      walker = walker.next;
    }
  };
  Yallist.prototype.forEachReverse = function (fn, thisp) {
    thisp = thisp || this;
    for (var walker = this.tail, i = this.length - 1; walker !== null; i--) {
      fn.call(thisp, walker.value, i, this);
      walker = walker.prev;
    }
  };
  Yallist.prototype.get = function (n) {
    for (var i = 0, walker = this.head; walker !== null && i < n; i++) {
      walker = walker.next;
    }
    if (i === n && walker !== null) {
      return walker.value;
    }
  };
  Yallist.prototype.getReverse = function (n) {
    for (var i = 0, walker = this.tail; walker !== null && i < n; i++) {
      walker = walker.prev;
    }
    if (i === n && walker !== null) {
      return walker.value;
    }
  };
  Yallist.prototype.map = function (fn, thisp) {
    thisp = thisp || this;
    var res = new Yallist();
    for (var walker = this.head; walker !== null;) {
      res.push(fn.call(thisp, walker.value, this));
      walker = walker.next;
    }
    return res;
  };
  Yallist.prototype.mapReverse = function (fn, thisp) {
    thisp = thisp || this;
    var res = new Yallist();
    for (var walker = this.tail; walker !== null;) {
      res.push(fn.call(thisp, walker.value, this));
      walker = walker.prev;
    }
    return res;
  };
  Yallist.prototype.reduce = function (fn, initial) {
    var acc;
    var walker = this.head;
    if (arguments.length > 1) {
      acc = initial;
    } else if (this.head) {
      walker = this.head.next;
      acc = this.head.value;
    } else {
      throw new TypeError('Reduce of empty list with no initial value');
    }
    for (var i = 0; walker !== null; i++) {
      acc = fn(acc, walker.value, i);
      walker = walker.next;
    }
    return acc;
  };
  Yallist.prototype.reduceReverse = function (fn, initial) {
    var acc;
    var walker = this.tail;
    if (arguments.length > 1) {
      acc = initial;
    } else if (this.tail) {
      walker = this.tail.prev;
      acc = this.tail.value;
    } else {
      throw new TypeError('Reduce of empty list with no initial value');
    }
    for (var i = this.length - 1; walker !== null; i--) {
      acc = fn(acc, walker.value, i);
      walker = walker.prev;
    }
    return acc;
  };
  Yallist.prototype.toArray = function () {
    var arr = new Array(this.length);
    for (var i = 0, walker = this.head; walker !== null; i++) {
      arr[i] = walker.value;
      walker = walker.next;
    }
    return arr;
  };
  Yallist.prototype.toArrayReverse = function () {
    var arr = new Array(this.length);
    for (var i = 0, walker = this.tail; walker !== null; i++) {
      arr[i] = walker.value;
      walker = walker.prev;
    }
    return arr;
  };
  Yallist.prototype.slice = function (from, to) {
    to = to || this.length;
    if (to < 0) {
      to += this.length;
    }
    from = from || 0;
    if (from < 0) {
      from += this.length;
    }
    var ret = new Yallist();
    if (to < from || to < 0) {
      return ret;
    }
    if (from < 0) {
      from = 0;
    }
    if (to > this.length) {
      to = this.length;
    }
    for (var i = 0, walker = this.head; walker !== null && i < from; i++) {
      walker = walker.next;
    }
    for (; walker !== null && i < to; i++, walker = walker.next) {
      ret.push(walker.value);
    }
    return ret;
  };
  Yallist.prototype.sliceReverse = function (from, to) {
    to = to || this.length;
    if (to < 0) {
      to += this.length;
    }
    from = from || 0;
    if (from < 0) {
      from += this.length;
    }
    var ret = new Yallist();
    if (to < from || to < 0) {
      return ret;
    }
    if (from < 0) {
      from = 0;
    }
    if (to > this.length) {
      to = this.length;
    }
    for (var i = this.length, walker = this.tail; walker !== null && i > to; i--) {
      walker = walker.prev;
    }
    for (; walker !== null && i > from; i--, walker = walker.prev) {
      ret.push(walker.value);
    }
    return ret;
  };
  Yallist.prototype.splice = function (start, deleteCount, ...nodes) {
    if (start > this.length) {
      start = this.length - 1;
    }
    if (start < 0) {
      start = this.length + start;
    }
    for (var i = 0, walker = this.head; walker !== null && i < start; i++) {
      walker = walker.next;
    }
    var ret = [];
    for (var i = 0; walker && i < deleteCount; i++) {
      ret.push(walker.value);
      walker = this.removeNode(walker);
    }
    if (walker === null) {
      walker = this.tail;
    }
    if (walker !== this.head && walker !== this.tail) {
      walker = walker.prev;
    }
    for (var i = 0; i < nodes.length; i++) {
      walker = insert(this, walker, nodes[i]);
    }
    return ret;
  };
  Yallist.prototype.reverse = function () {
    var head = this.head;
    var tail = this.tail;
    for (var walker = head; walker !== null; walker = walker.prev) {
      var p = walker.prev;
      walker.prev = walker.next;
      walker.next = p;
    }
    this.head = tail;
    this.tail = head;
    return this;
  };
  function insert(self, node, value) {
    var inserted = node === self.head ? new Node(value, null, node, self) : new Node(value, node, node.next, self);
    if (inserted.next === null) {
      self.tail = inserted;
    }
    if (inserted.prev === null) {
      self.head = inserted;
    }
    self.length++;
    return inserted;
  }
  function push(self, item) {
    self.tail = new Node(item, self.tail, null, self);
    if (!self.head) {
      self.head = self.tail;
    }
    self.length++;
  }
  function unshift(self, item) {
    self.head = new Node(item, null, self.head, self);
    if (!self.tail) {
      self.tail = self.head;
    }
    self.length++;
  }
  function Node(value, prev, next, list) {
    if (!(this instanceof Node)) {
      return new Node(value, prev, next, list);
    }
    this.list = list;
    this.value = value;
    if (prev) {
      prev.next = this;
      this.prev = prev;
    } else {
      this.prev = null;
    }
    if (next) {
      next.prev = this;
      this.next = next;
    } else {
      this.next = null;
    }
  }
  try {
    requireIterator()(Yallist);
  } catch (er) {}
  return yallist;
}
var lruCache;
var hasRequiredLruCache;
function requireLruCache() {
  if (hasRequiredLruCache) return lruCache;
  hasRequiredLruCache = 1;
  const Yallist = requireYallist();
  const MAX = Symbol('max');
  const LENGTH = Symbol('length');
  const LENGTH_CALCULATOR = Symbol('lengthCalculator');
  const ALLOW_STALE = Symbol('allowStale');
  const MAX_AGE = Symbol('maxAge');
  const DISPOSE = Symbol('dispose');
  const NO_DISPOSE_ON_SET = Symbol('noDisposeOnSet');
  const LRU_LIST = Symbol('lruList');
  const CACHE = Symbol('cache');
  const UPDATE_AGE_ON_GET = Symbol('updateAgeOnGet');
  const naiveLength = () => 1;
  class LRUCache {
    constructor(options) {
      if (typeof options === 'number') options = {
        max: options
      };
      if (!options) options = {};
      if (options.max && (typeof options.max !== 'number' || options.max < 0)) throw new TypeError('max must be a non-negative number');
      this[MAX] = options.max || Infinity;
      const lc = options.length || naiveLength;
      this[LENGTH_CALCULATOR] = typeof lc !== 'function' ? naiveLength : lc;
      this[ALLOW_STALE] = options.stale || false;
      if (options.maxAge && typeof options.maxAge !== 'number') throw new TypeError('maxAge must be a number');
      this[MAX_AGE] = options.maxAge || 0;
      this[DISPOSE] = options.dispose;
      this[NO_DISPOSE_ON_SET] = options.noDisposeOnSet || false;
      this[UPDATE_AGE_ON_GET] = options.updateAgeOnGet || false;
      this.reset();
    }
    set max(mL) {
      if (typeof mL !== 'number' || mL < 0) throw new TypeError('max must be a non-negative number');
      this[MAX] = mL || Infinity;
      trim(this);
    }
    get max() {
      return this[MAX];
    }
    set allowStale(allowStale) {
      this[ALLOW_STALE] = !!allowStale;
    }
    get allowStale() {
      return this[ALLOW_STALE];
    }
    set maxAge(mA) {
      if (typeof mA !== 'number') throw new TypeError('maxAge must be a non-negative number');
      this[MAX_AGE] = mA;
      trim(this);
    }
    get maxAge() {
      return this[MAX_AGE];
    }
    set lengthCalculator(lC) {
      if (typeof lC !== 'function') lC = naiveLength;
      if (lC !== this[LENGTH_CALCULATOR]) {
        this[LENGTH_CALCULATOR] = lC;
        this[LENGTH] = 0;
        this[LRU_LIST].forEach(hit => {
          hit.length = this[LENGTH_CALCULATOR](hit.value, hit.key);
          this[LENGTH] += hit.length;
        });
      }
      trim(this);
    }
    get lengthCalculator() {
      return this[LENGTH_CALCULATOR];
    }
    get length() {
      return this[LENGTH];
    }
    get itemCount() {
      return this[LRU_LIST].length;
    }
    rforEach(fn, thisp) {
      thisp = thisp || this;
      for (let walker = this[LRU_LIST].tail; walker !== null;) {
        const prev = walker.prev;
        forEachStep(this, fn, walker, thisp);
        walker = prev;
      }
    }
    forEach(fn, thisp) {
      thisp = thisp || this;
      for (let walker = this[LRU_LIST].head; walker !== null;) {
        const next = walker.next;
        forEachStep(this, fn, walker, thisp);
        walker = next;
      }
    }
    keys() {
      return this[LRU_LIST].toArray().map(k => k.key);
    }
    values() {
      return this[LRU_LIST].toArray().map(k => k.value);
    }
    reset() {
      if (this[DISPOSE] && this[LRU_LIST] && this[LRU_LIST].length) {
        this[LRU_LIST].forEach(hit => this[DISPOSE](hit.key, hit.value));
      }
      this[CACHE] = new Map();
      this[LRU_LIST] = new Yallist();
      this[LENGTH] = 0;
    }
    dump() {
      return this[LRU_LIST].map(hit => isStale(this, hit) ? false : {
        k: hit.key,
        v: hit.value,
        e: hit.now + (hit.maxAge || 0)
      }).toArray().filter(h => h);
    }
    dumpLru() {
      return this[LRU_LIST];
    }
    set(key, value, maxAge) {
      maxAge = maxAge || this[MAX_AGE];
      if (maxAge && typeof maxAge !== 'number') throw new TypeError('maxAge must be a number');
      const now = maxAge ? Date.now() : 0;
      const len = this[LENGTH_CALCULATOR](value, key);
      if (this[CACHE].has(key)) {
        if (len > this[MAX]) {
          del(this, this[CACHE].get(key));
          return false;
        }
        const node = this[CACHE].get(key);
        const item = node.value;
        if (this[DISPOSE]) {
          if (!this[NO_DISPOSE_ON_SET]) this[DISPOSE](key, item.value);
        }
        item.now = now;
        item.maxAge = maxAge;
        item.value = value;
        this[LENGTH] += len - item.length;
        item.length = len;
        this.get(key);
        trim(this);
        return true;
      }
      const hit = new Entry(key, value, len, now, maxAge);
      if (hit.length > this[MAX]) {
        if (this[DISPOSE]) this[DISPOSE](key, value);
        return false;
      }
      this[LENGTH] += hit.length;
      this[LRU_LIST].unshift(hit);
      this[CACHE].set(key, this[LRU_LIST].head);
      trim(this);
      return true;
    }
    has(key) {
      if (!this[CACHE].has(key)) return false;
      const hit = this[CACHE].get(key).value;
      return !isStale(this, hit);
    }
    get(key) {
      return get(this, key, true);
    }
    peek(key) {
      return get(this, key, false);
    }
    pop() {
      const node = this[LRU_LIST].tail;
      if (!node) return null;
      del(this, node);
      return node.value;
    }
    del(key) {
      del(this, this[CACHE].get(key));
    }
    load(arr) {
      this.reset();
      const now = Date.now();
      for (let l = arr.length - 1; l >= 0; l--) {
        const hit = arr[l];
        const expiresAt = hit.e || 0;
        if (expiresAt === 0) this.set(hit.k, hit.v);else {
          const maxAge = expiresAt - now;
          if (maxAge > 0) {
            this.set(hit.k, hit.v, maxAge);
          }
        }
      }
    }
    prune() {
      this[CACHE].forEach((value, key) => get(this, key, false));
    }
  }
  const get = (self, key, doUse) => {
    const node = self[CACHE].get(key);
    if (node) {
      const hit = node.value;
      if (isStale(self, hit)) {
        del(self, node);
        if (!self[ALLOW_STALE]) return undefined;
      } else {
        if (doUse) {
          if (self[UPDATE_AGE_ON_GET]) node.value.now = Date.now();
          self[LRU_LIST].unshiftNode(node);
        }
      }
      return hit.value;
    }
  };
  const isStale = (self, hit) => {
    if (!hit || !hit.maxAge && !self[MAX_AGE]) return false;
    const diff = Date.now() - hit.now;
    return hit.maxAge ? diff > hit.maxAge : self[MAX_AGE] && diff > self[MAX_AGE];
  };
  const trim = self => {
    if (self[LENGTH] > self[MAX]) {
      for (let walker = self[LRU_LIST].tail; self[LENGTH] > self[MAX] && walker !== null;) {
        const prev = walker.prev;
        del(self, walker);
        walker = prev;
      }
    }
  };
  const del = (self, node) => {
    if (node) {
      const hit = node.value;
      if (self[DISPOSE]) self[DISPOSE](hit.key, hit.value);
      self[LENGTH] -= hit.length;
      self[CACHE].delete(hit.key);
      self[LRU_LIST].removeNode(node);
    }
  };
  class Entry {
    constructor(key, value, length, now, maxAge) {
      this.key = key;
      this.value = value;
      this.length = length;
      this.now = now;
      this.maxAge = maxAge || 0;
    }
  }
  const forEachStep = (self, fn, node, thisp) => {
    let hit = node.value;
    if (isStale(self, hit)) {
      del(self, node);
      if (!self[ALLOW_STALE]) hit = undefined;
    }
    if (hit) fn.call(thisp, hit.value, hit.key, self);
  };
  lruCache = LRUCache;
  return lruCache;
}
var range;
var hasRequiredRange;
function requireRange() {
  if (hasRequiredRange) return range;
  hasRequiredRange = 1;
  class Range {
    constructor(range, options) {
      options = parseOptions(options);
      if (range instanceof Range) {
        if (range.loose === !!options.loose && range.includePrerelease === !!options.includePrerelease) {
          return range;
        } else {
          return new Range(range.raw, options);
        }
      }
      if (range instanceof Comparator) {
        this.raw = range.value;
        this.set = [[range]];
        this.format();
        return this;
      }
      this.options = options;
      this.loose = !!options.loose;
      this.includePrerelease = !!options.includePrerelease;
      this.raw = range;
      this.set = range.split('||').map(r => this.parseRange(r.trim())).filter(c => c.length);
      if (!this.set.length) {
        throw new TypeError(`Invalid SemVer Range: ${range}`);
      }
      if (this.set.length > 1) {
        const first = this.set[0];
        this.set = this.set.filter(c => !isNullSet(c[0]));
        if (this.set.length === 0) {
          this.set = [first];
        } else if (this.set.length > 1) {
          for (const c of this.set) {
            if (c.length === 1 && isAny(c[0])) {
              this.set = [c];
              break;
            }
          }
        }
      }
      this.format();
    }
    format() {
      this.range = this.set.map(comps => {
        return comps.join(' ').trim();
      }).join('||').trim();
      return this.range;
    }
    toString() {
      return this.range;
    }
    parseRange(range) {
      range = range.trim();
      const memoOpts = Object.keys(this.options).join(',');
      const memoKey = `parseRange:${memoOpts}:${range}`;
      const cached = cache.get(memoKey);
      if (cached) {
        return cached;
      }
      const loose = this.options.loose;
      const hr = loose ? re[t.HYPHENRANGELOOSE] : re[t.HYPHENRANGE];
      range = range.replace(hr, hyphenReplace(this.options.includePrerelease));
      debug('hyphen replace', range);
      range = range.replace(re[t.COMPARATORTRIM], comparatorTrimReplace);
      debug('comparator trim', range);
      range = range.replace(re[t.TILDETRIM], tildeTrimReplace);
      range = range.replace(re[t.CARETTRIM], caretTrimReplace);
      range = range.split(/\s+/).join(' ');
      let rangeList = range.split(' ').map(comp => parseComparator(comp, this.options)).join(' ').split(/\s+/).map(comp => replaceGTE0(comp, this.options));
      if (loose) {
        rangeList = rangeList.filter(comp => {
          debug('loose invalid filter', comp, this.options);
          return !!comp.match(re[t.COMPARATORLOOSE]);
        });
      }
      debug('range list', rangeList);
      const rangeMap = new Map();
      const comparators = rangeList.map(comp => new Comparator(comp, this.options));
      for (const comp of comparators) {
        if (isNullSet(comp)) {
          return [comp];
        }
        rangeMap.set(comp.value, comp);
      }
      if (rangeMap.size > 1 && rangeMap.has('')) {
        rangeMap.delete('');
      }
      const result = [...rangeMap.values()];
      cache.set(memoKey, result);
      return result;
    }
    intersects(range, options) {
      if (!(range instanceof Range)) {
        throw new TypeError('a Range is required');
      }
      return this.set.some(thisComparators => {
        return isSatisfiable(thisComparators, options) && range.set.some(rangeComparators => {
          return isSatisfiable(rangeComparators, options) && thisComparators.every(thisComparator => {
            return rangeComparators.every(rangeComparator => {
              return thisComparator.intersects(rangeComparator, options);
            });
          });
        });
      });
    }
    test(version) {
      if (!version) {
        return false;
      }
      if (typeof version === 'string') {
        try {
          version = new SemVer(version, this.options);
        } catch (er) {
          return false;
        }
      }
      for (let i = 0; i < this.set.length; i++) {
        if (testSet(this.set[i], version, this.options)) {
          return true;
        }
      }
      return false;
    }
  }
  range = Range;
  const LRU = requireLruCache();
  const cache = new LRU({
    max: 1000
  });
  const parseOptions = parseOptions_1;
  const Comparator = requireComparator();
  const debug = debug_1;
  const SemVer = semver$2;
  const {
    re,
    t,
    comparatorTrimReplace,
    tildeTrimReplace,
    caretTrimReplace
  } = re$3.exports;
  const isNullSet = c => c.value === '<0.0.0-0';
  const isAny = c => c.value === '';
  const isSatisfiable = (comparators, options) => {
    let result = true;
    const remainingComparators = comparators.slice();
    let testComparator = remainingComparators.pop();
    while (result && remainingComparators.length) {
      result = remainingComparators.every(otherComparator => {
        return testComparator.intersects(otherComparator, options);
      });
      testComparator = remainingComparators.pop();
    }
    return result;
  };
  const parseComparator = (comp, options) => {
    debug('comp', comp, options);
    comp = replaceCarets(comp, options);
    debug('caret', comp);
    comp = replaceTildes(comp, options);
    debug('tildes', comp);
    comp = replaceXRanges(comp, options);
    debug('xrange', comp);
    comp = replaceStars(comp, options);
    debug('stars', comp);
    return comp;
  };
  const isX = id => !id || id.toLowerCase() === 'x' || id === '*';
  const replaceTildes = (comp, options) => comp.trim().split(/\s+/).map(c => {
    return replaceTilde(c, options);
  }).join(' ');
  const replaceTilde = (comp, options) => {
    const r = options.loose ? re[t.TILDELOOSE] : re[t.TILDE];
    return comp.replace(r, (_, M, m, p, pr) => {
      debug('tilde', comp, _, M, m, p, pr);
      let ret;
      if (isX(M)) {
        ret = '';
      } else if (isX(m)) {
        ret = `>=${M}.0.0 <${+M + 1}.0.0-0`;
      } else if (isX(p)) {
        ret = `>=${M}.${m}.0 <${M}.${+m + 1}.0-0`;
      } else if (pr) {
        debug('replaceTilde pr', pr);
        ret = `>=${M}.${m}.${p}-${pr} <${M}.${+m + 1}.0-0`;
      } else {
        ret = `>=${M}.${m}.${p} <${M}.${+m + 1}.0-0`;
      }
      debug('tilde return', ret);
      return ret;
    });
  };
  const replaceCarets = (comp, options) => comp.trim().split(/\s+/).map(c => {
    return replaceCaret(c, options);
  }).join(' ');
  const replaceCaret = (comp, options) => {
    debug('caret', comp, options);
    const r = options.loose ? re[t.CARETLOOSE] : re[t.CARET];
    const z = options.includePrerelease ? '-0' : '';
    return comp.replace(r, (_, M, m, p, pr) => {
      debug('caret', comp, _, M, m, p, pr);
      let ret;
      if (isX(M)) {
        ret = '';
      } else if (isX(m)) {
        ret = `>=${M}.0.0${z} <${+M + 1}.0.0-0`;
      } else if (isX(p)) {
        if (M === '0') {
          ret = `>=${M}.${m}.0${z} <${M}.${+m + 1}.0-0`;
        } else {
          ret = `>=${M}.${m}.0${z} <${+M + 1}.0.0-0`;
        }
      } else if (pr) {
        debug('replaceCaret pr', pr);
        if (M === '0') {
          if (m === '0') {
            ret = `>=${M}.${m}.${p}-${pr} <${M}.${m}.${+p + 1}-0`;
          } else {
            ret = `>=${M}.${m}.${p}-${pr} <${M}.${+m + 1}.0-0`;
          }
        } else {
          ret = `>=${M}.${m}.${p}-${pr} <${+M + 1}.0.0-0`;
        }
      } else {
        debug('no pr');
        if (M === '0') {
          if (m === '0') {
            ret = `>=${M}.${m}.${p}${z} <${M}.${m}.${+p + 1}-0`;
          } else {
            ret = `>=${M}.${m}.${p}${z} <${M}.${+m + 1}.0-0`;
          }
        } else {
          ret = `>=${M}.${m}.${p} <${+M + 1}.0.0-0`;
        }
      }
      debug('caret return', ret);
      return ret;
    });
  };
  const replaceXRanges = (comp, options) => {
    debug('replaceXRanges', comp, options);
    return comp.split(/\s+/).map(c => {
      return replaceXRange(c, options);
    }).join(' ');
  };
  const replaceXRange = (comp, options) => {
    comp = comp.trim();
    const r = options.loose ? re[t.XRANGELOOSE] : re[t.XRANGE];
    return comp.replace(r, (ret, gtlt, M, m, p, pr) => {
      debug('xRange', comp, ret, gtlt, M, m, p, pr);
      const xM = isX(M);
      const xm = xM || isX(m);
      const xp = xm || isX(p);
      const anyX = xp;
      if (gtlt === '=' && anyX) {
        gtlt = '';
      }
      pr = options.includePrerelease ? '-0' : '';
      if (xM) {
        if (gtlt === '>' || gtlt === '<') {
          ret = '<0.0.0-0';
        } else {
          ret = '*';
        }
      } else if (gtlt && anyX) {
        if (xm) {
          m = 0;
        }
        p = 0;
        if (gtlt === '>') {
          gtlt = '>=';
          if (xm) {
            M = +M + 1;
            m = 0;
            p = 0;
          } else {
            m = +m + 1;
            p = 0;
          }
        } else if (gtlt === '<=') {
          gtlt = '<';
          if (xm) {
            M = +M + 1;
          } else {
            m = +m + 1;
          }
        }
        if (gtlt === '<') {
          pr = '-0';
        }
        ret = `${gtlt + M}.${m}.${p}${pr}`;
      } else if (xm) {
        ret = `>=${M}.0.0${pr} <${+M + 1}.0.0-0`;
      } else if (xp) {
        ret = `>=${M}.${m}.0${pr} <${M}.${+m + 1}.0-0`;
      }
      debug('xRange return', ret);
      return ret;
    });
  };
  const replaceStars = (comp, options) => {
    debug('replaceStars', comp, options);
    return comp.trim().replace(re[t.STAR], '');
  };
  const replaceGTE0 = (comp, options) => {
    debug('replaceGTE0', comp, options);
    return comp.trim().replace(re[options.includePrerelease ? t.GTE0PRE : t.GTE0], '');
  };
  const hyphenReplace = incPr => ($0, from, fM, fm, fp, fpr, fb, to, tM, tm, tp, tpr, tb) => {
    if (isX(fM)) {
      from = '';
    } else if (isX(fm)) {
      from = `>=${fM}.0.0${incPr ? '-0' : ''}`;
    } else if (isX(fp)) {
      from = `>=${fM}.${fm}.0${incPr ? '-0' : ''}`;
    } else if (fpr) {
      from = `>=${from}`;
    } else {
      from = `>=${from}${incPr ? '-0' : ''}`;
    }
    if (isX(tM)) {
      to = '';
    } else if (isX(tm)) {
      to = `<${+tM + 1}.0.0-0`;
    } else if (isX(tp)) {
      to = `<${tM}.${+tm + 1}.0-0`;
    } else if (tpr) {
      to = `<=${tM}.${tm}.${tp}-${tpr}`;
    } else if (incPr) {
      to = `<${tM}.${tm}.${+tp + 1}-0`;
    } else {
      to = `<=${to}`;
    }
    return `${from} ${to}`.trim();
  };
  const testSet = (set, version, options) => {
    for (let i = 0; i < set.length; i++) {
      if (!set[i].test(version)) {
        return false;
      }
    }
    if (version.prerelease.length && !options.includePrerelease) {
      for (let i = 0; i < set.length; i++) {
        debug(set[i].semver);
        if (set[i].semver === Comparator.ANY) {
          continue;
        }
        if (set[i].semver.prerelease.length > 0) {
          const allowed = set[i].semver;
          if (allowed.major === version.major && allowed.minor === version.minor && allowed.patch === version.patch) {
            return true;
          }
        }
      }
      return false;
    }
    return true;
  };
  return range;
}
var comparator;
var hasRequiredComparator;
function requireComparator() {
  if (hasRequiredComparator) return comparator;
  hasRequiredComparator = 1;
  const ANY = Symbol('SemVer ANY');
  class Comparator {
    static get ANY() {
      return ANY;
    }
    constructor(comp, options) {
      options = parseOptions(options);
      if (comp instanceof Comparator) {
        if (comp.loose === !!options.loose) {
          return comp;
        } else {
          comp = comp.value;
        }
      }
      debug('comparator', comp, options);
      this.options = options;
      this.loose = !!options.loose;
      this.parse(comp);
      if (this.semver === ANY) {
        this.value = '';
      } else {
        this.value = this.operator + this.semver.version;
      }
      debug('comp', this);
    }
    parse(comp) {
      const r = this.options.loose ? re[t.COMPARATORLOOSE] : re[t.COMPARATOR];
      const m = comp.match(r);
      if (!m) {
        throw new TypeError(`Invalid comparator: ${comp}`);
      }
      this.operator = m[1] !== undefined ? m[1] : '';
      if (this.operator === '=') {
        this.operator = '';
      }
      if (!m[2]) {
        this.semver = ANY;
      } else {
        this.semver = new SemVer(m[2], this.options.loose);
      }
    }
    toString() {
      return this.value;
    }
    test(version) {
      debug('Comparator.test', version, this.options.loose);
      if (this.semver === ANY || version === ANY) {
        return true;
      }
      if (typeof version === 'string') {
        try {
          version = new SemVer(version, this.options);
        } catch (er) {
          return false;
        }
      }
      return cmp(version, this.operator, this.semver, this.options);
    }
    intersects(comp, options) {
      if (!(comp instanceof Comparator)) {
        throw new TypeError('a Comparator is required');
      }
      if (!options || typeof options !== 'object') {
        options = {
          loose: !!options,
          includePrerelease: false
        };
      }
      if (this.operator === '') {
        if (this.value === '') {
          return true;
        }
        return new Range(comp.value, options).test(this.value);
      } else if (comp.operator === '') {
        if (comp.value === '') {
          return true;
        }
        return new Range(this.value, options).test(comp.semver);
      }
      const sameDirectionIncreasing = (this.operator === '>=' || this.operator === '>') && (comp.operator === '>=' || comp.operator === '>');
      const sameDirectionDecreasing = (this.operator === '<=' || this.operator === '<') && (comp.operator === '<=' || comp.operator === '<');
      const sameSemVer = this.semver.version === comp.semver.version;
      const differentDirectionsInclusive = (this.operator === '>=' || this.operator === '<=') && (comp.operator === '>=' || comp.operator === '<=');
      const oppositeDirectionsLessThan = cmp(this.semver, '<', comp.semver, options) && (this.operator === '>=' || this.operator === '>') && (comp.operator === '<=' || comp.operator === '<');
      const oppositeDirectionsGreaterThan = cmp(this.semver, '>', comp.semver, options) && (this.operator === '<=' || this.operator === '<') && (comp.operator === '>=' || comp.operator === '>');
      return sameDirectionIncreasing || sameDirectionDecreasing || sameSemVer && differentDirectionsInclusive || oppositeDirectionsLessThan || oppositeDirectionsGreaterThan;
    }
  }
  comparator = Comparator;
  const parseOptions = parseOptions_1;
  const {
    re,
    t
  } = re$3.exports;
  const cmp = cmp_1;
  const debug = debug_1;
  const SemVer = semver$2;
  const Range = requireRange();
  return comparator;
}
const Range$8 = requireRange();
const satisfies$3 = (version, range, options) => {
  try {
    range = new Range$8(range, options);
  } catch (er) {
    return false;
  }
  return range.test(version);
};
var satisfies_1 = satisfies$3;
const Range$7 = requireRange();
const toComparators = (range, options) => new Range$7(range, options).set.map(comp => comp.map(c => c.value).join(' ').trim().split(' '));
var toComparators_1 = toComparators;
const SemVer$3 = semver$2;
const Range$6 = requireRange();
const maxSatisfying = (versions, range, options) => {
  let max = null;
  let maxSV = null;
  let rangeObj = null;
  try {
    rangeObj = new Range$6(range, options);
  } catch (er) {
    return null;
  }
  versions.forEach(v => {
    if (rangeObj.test(v)) {
      if (!max || maxSV.compare(v) === -1) {
        max = v;
        maxSV = new SemVer$3(max, options);
      }
    }
  });
  return max;
};
var maxSatisfying_1 = maxSatisfying;
const SemVer$2 = semver$2;
const Range$5 = requireRange();
const minSatisfying = (versions, range, options) => {
  let min = null;
  let minSV = null;
  let rangeObj = null;
  try {
    rangeObj = new Range$5(range, options);
  } catch (er) {
    return null;
  }
  versions.forEach(v => {
    if (rangeObj.test(v)) {
      if (!min || minSV.compare(v) === 1) {
        min = v;
        minSV = new SemVer$2(min, options);
      }
    }
  });
  return min;
};
var minSatisfying_1 = minSatisfying;
const SemVer$1 = semver$2;
const Range$4 = requireRange();
const gt$1 = gt_1;
const minVersion = (range, loose) => {
  range = new Range$4(range, loose);
  let minver = new SemVer$1('0.0.0');
  if (range.test(minver)) {
    return minver;
  }
  minver = new SemVer$1('0.0.0-0');
  if (range.test(minver)) {
    return minver;
  }
  minver = null;
  for (let i = 0; i < range.set.length; ++i) {
    const comparators = range.set[i];
    let setMin = null;
    comparators.forEach(comparator => {
      const compver = new SemVer$1(comparator.semver.version);
      switch (comparator.operator) {
        case '>':
          if (compver.prerelease.length === 0) {
            compver.patch++;
          } else {
            compver.prerelease.push(0);
          }
          compver.raw = compver.format();
        case '':
        case '>=':
          if (!setMin || gt$1(compver, setMin)) {
            setMin = compver;
          }
          break;
        case '<':
        case '<=':
          break;
        default:
          throw new Error(`Unexpected operation: ${comparator.operator}`);
      }
    });
    if (setMin && (!minver || gt$1(minver, setMin))) {
      minver = setMin;
    }
  }
  if (minver && range.test(minver)) {
    return minver;
  }
  return null;
};
var minVersion_1 = minVersion;
const Range$3 = requireRange();
const validRange = (range, options) => {
  try {
    return new Range$3(range, options).range || '*';
  } catch (er) {
    return null;
  }
};
var valid = validRange;
const SemVer = semver$2;
const Comparator$1 = requireComparator();
const {
  ANY: ANY$1
} = Comparator$1;
const Range$2 = requireRange();
const satisfies$2 = satisfies_1;
const gt = gt_1;
const lt = lt_1;
const lte = lte_1;
const gte = gte_1;
const outside$2 = (version, range, hilo, options) => {
  version = new SemVer(version, options);
  range = new Range$2(range, options);
  let gtfn, ltefn, ltfn, comp, ecomp;
  switch (hilo) {
    case '>':
      gtfn = gt;
      ltefn = lte;
      ltfn = lt;
      comp = '>';
      ecomp = '>=';
      break;
    case '<':
      gtfn = lt;
      ltefn = gte;
      ltfn = gt;
      comp = '<';
      ecomp = '<=';
      break;
    default:
      throw new TypeError('Must provide a hilo val of "<" or ">"');
  }
  if (satisfies$2(version, range, options)) {
    return false;
  }
  for (let i = 0; i < range.set.length; ++i) {
    const comparators = range.set[i];
    let high = null;
    let low = null;
    comparators.forEach(comparator => {
      if (comparator.semver === ANY$1) {
        comparator = new Comparator$1('>=0.0.0');
      }
      high = high || comparator;
      low = low || comparator;
      if (gtfn(comparator.semver, high.semver, options)) {
        high = comparator;
      } else if (ltfn(comparator.semver, low.semver, options)) {
        low = comparator;
      }
    });
    if (high.operator === comp || high.operator === ecomp) {
      return false;
    }
    if ((!low.operator || low.operator === comp) && ltefn(version, low.semver)) {
      return false;
    } else if (low.operator === ecomp && ltfn(version, low.semver)) {
      return false;
    }
  }
  return true;
};
var outside_1 = outside$2;
const outside$1 = outside_1;
const gtr = (version, range, options) => outside$1(version, range, '>', options);
var gtr_1 = gtr;
const outside = outside_1;
const ltr = (version, range, options) => outside(version, range, '<', options);
var ltr_1 = ltr;
const Range$1 = requireRange();
const intersects = (r1, r2, options) => {
  r1 = new Range$1(r1, options);
  r2 = new Range$1(r2, options);
  return r1.intersects(r2);
};
var intersects_1 = intersects;
const satisfies$1 = satisfies_1;
const compare$1 = compare_1;
var simplify = (versions, range, options) => {
  const set = [];
  let first = null;
  let prev = null;
  const v = versions.sort((a, b) => compare$1(a, b, options));
  for (const version of v) {
    const included = satisfies$1(version, range, options);
    if (included) {
      prev = version;
      if (!first) {
        first = version;
      }
    } else {
      if (prev) {
        set.push([first, prev]);
      }
      prev = null;
      first = null;
    }
  }
  if (first) {
    set.push([first, null]);
  }
  const ranges = [];
  for (const [min, max] of set) {
    if (min === max) {
      ranges.push(min);
    } else if (!max && min === v[0]) {
      ranges.push('*');
    } else if (!max) {
      ranges.push(`>=${min}`);
    } else if (min === v[0]) {
      ranges.push(`<=${max}`);
    } else {
      ranges.push(`${min} - ${max}`);
    }
  }
  const simplified = ranges.join(' || ');
  const original = typeof range.raw === 'string' ? range.raw : String(range);
  return simplified.length < original.length ? simplified : range;
};
const Range = requireRange();
const Comparator = requireComparator();
const {
  ANY
} = Comparator;
const satisfies = satisfies_1;
const compare = compare_1;
const subset = (sub, dom, options = {}) => {
  if (sub === dom) {
    return true;
  }
  sub = new Range(sub, options);
  dom = new Range(dom, options);
  let sawNonNull = false;
  OUTER: for (const simpleSub of sub.set) {
    for (const simpleDom of dom.set) {
      const isSub = simpleSubset(simpleSub, simpleDom, options);
      sawNonNull = sawNonNull || isSub !== null;
      if (isSub) {
        continue OUTER;
      }
    }
    if (sawNonNull) {
      return false;
    }
  }
  return true;
};
const simpleSubset = (sub, dom, options) => {
  if (sub === dom) {
    return true;
  }
  if (sub.length === 1 && sub[0].semver === ANY) {
    if (dom.length === 1 && dom[0].semver === ANY) {
      return true;
    } else if (options.includePrerelease) {
      sub = [new Comparator('>=0.0.0-0')];
    } else {
      sub = [new Comparator('>=0.0.0')];
    }
  }
  if (dom.length === 1 && dom[0].semver === ANY) {
    if (options.includePrerelease) {
      return true;
    } else {
      dom = [new Comparator('>=0.0.0')];
    }
  }
  const eqSet = new Set();
  let gt, lt;
  for (const c of sub) {
    if (c.operator === '>' || c.operator === '>=') {
      gt = higherGT(gt, c, options);
    } else if (c.operator === '<' || c.operator === '<=') {
      lt = lowerLT(lt, c, options);
    } else {
      eqSet.add(c.semver);
    }
  }
  if (eqSet.size > 1) {
    return null;
  }
  let gtltComp;
  if (gt && lt) {
    gtltComp = compare(gt.semver, lt.semver, options);
    if (gtltComp > 0) {
      return null;
    } else if (gtltComp === 0 && (gt.operator !== '>=' || lt.operator !== '<=')) {
      return null;
    }
  }
  for (const eq of eqSet) {
    if (gt && !satisfies(eq, String(gt), options)) {
      return null;
    }
    if (lt && !satisfies(eq, String(lt), options)) {
      return null;
    }
    for (const c of dom) {
      if (!satisfies(eq, String(c), options)) {
        return false;
      }
    }
    return true;
  }
  let higher, lower;
  let hasDomLT, hasDomGT;
  let needDomLTPre = lt && !options.includePrerelease && lt.semver.prerelease.length ? lt.semver : false;
  let needDomGTPre = gt && !options.includePrerelease && gt.semver.prerelease.length ? gt.semver : false;
  if (needDomLTPre && needDomLTPre.prerelease.length === 1 && lt.operator === '<' && needDomLTPre.prerelease[0] === 0) {
    needDomLTPre = false;
  }
  for (const c of dom) {
    hasDomGT = hasDomGT || c.operator === '>' || c.operator === '>=';
    hasDomLT = hasDomLT || c.operator === '<' || c.operator === '<=';
    if (gt) {
      if (needDomGTPre) {
        if (c.semver.prerelease && c.semver.prerelease.length && c.semver.major === needDomGTPre.major && c.semver.minor === needDomGTPre.minor && c.semver.patch === needDomGTPre.patch) {
          needDomGTPre = false;
        }
      }
      if (c.operator === '>' || c.operator === '>=') {
        higher = higherGT(gt, c, options);
        if (higher === c && higher !== gt) {
          return false;
        }
      } else if (gt.operator === '>=' && !satisfies(gt.semver, String(c), options)) {
        return false;
      }
    }
    if (lt) {
      if (needDomLTPre) {
        if (c.semver.prerelease && c.semver.prerelease.length && c.semver.major === needDomLTPre.major && c.semver.minor === needDomLTPre.minor && c.semver.patch === needDomLTPre.patch) {
          needDomLTPre = false;
        }
      }
      if (c.operator === '<' || c.operator === '<=') {
        lower = lowerLT(lt, c, options);
        if (lower === c && lower !== lt) {
          return false;
        }
      } else if (lt.operator === '<=' && !satisfies(lt.semver, String(c), options)) {
        return false;
      }
    }
    if (!c.operator && (lt || gt) && gtltComp !== 0) {
      return false;
    }
  }
  if (gt && hasDomLT && !lt && gtltComp !== 0) {
    return false;
  }
  if (lt && hasDomGT && !gt && gtltComp !== 0) {
    return false;
  }
  if (needDomGTPre || needDomLTPre) {
    return false;
  }
  return true;
};
const higherGT = (a, b, options) => {
  if (!a) {
    return b;
  }
  const comp = compare(a.semver, b.semver, options);
  return comp > 0 ? a : comp < 0 ? b : b.operator === '>' && a.operator === '>=' ? b : a;
};
const lowerLT = (a, b, options) => {
  if (!a) {
    return b;
  }
  const comp = compare(a.semver, b.semver, options);
  return comp < 0 ? a : comp > 0 ? b : b.operator === '<' && a.operator === '<=' ? b : a;
};
var subset_1 = subset;
const internalRe = re$3.exports;
var semver$1 = {
  re: internalRe.re,
  src: internalRe.src,
  tokens: internalRe.t,
  SEMVER_SPEC_VERSION: constants.SEMVER_SPEC_VERSION,
  SemVer: semver$2,
  compareIdentifiers: identifiers.compareIdentifiers,
  rcompareIdentifiers: identifiers.rcompareIdentifiers,
  parse: parse_1,
  valid: valid_1,
  clean: clean_1,
  inc: inc_1,
  diff: diff_1,
  major: major_1,
  minor: minor_1,
  patch: patch_1,
  prerelease: prerelease_1,
  compare: compare_1,
  rcompare: rcompare_1,
  compareLoose: compareLoose_1,
  compareBuild: compareBuild_1,
  sort: sort_1,
  rsort: rsort_1,
  gt: gt_1,
  lt: lt_1,
  eq: eq_1,
  neq: neq_1,
  gte: gte_1,
  lte: lte_1,
  cmp: cmp_1,
  coerce: coerce_1,
  Comparator: requireComparator(),
  Range: requireRange(),
  satisfies: satisfies_1,
  toComparators: toComparators_1,
  maxSatisfying: maxSatisfying_1,
  minSatisfying: minSatisfying_1,
  minVersion: minVersion_1,
  validRange: valid,
  outside: outside_1,
  gtr: gtr_1,
  ltr: ltr_1,
  intersects: intersects_1,
  simplifyRange: simplify,
  subset: subset_1
};
var semver = semver$1;
var builtins = function ({
  version = process.version,
  experimental = false
} = {}) {
  var coreModules = ['assert', 'buffer', 'child_process', 'cluster', 'console', 'constants', 'crypto', 'dgram', 'dns', 'domain', 'events', 'fs', 'http', 'https', 'module', 'net', 'os', 'path', 'punycode', 'querystring', 'readline', 'repl', 'stream', 'string_decoder', 'sys', 'timers', 'tls', 'tty', 'url', 'util', 'vm', 'zlib'];
  if (semver.lt(version, '6.0.0')) coreModules.push('freelist');
  if (semver.gte(version, '1.0.0')) coreModules.push('v8');
  if (semver.gte(version, '1.1.0')) coreModules.push('process');
  if (semver.gte(version, '8.0.0')) coreModules.push('inspector');
  if (semver.gte(version, '8.1.0')) coreModules.push('async_hooks');
  if (semver.gte(version, '8.4.0')) coreModules.push('http2');
  if (semver.gte(version, '8.5.0')) coreModules.push('perf_hooks');
  if (semver.gte(version, '10.0.0')) coreModules.push('trace_events');
  if (semver.gte(version, '10.5.0') && (experimental || semver.gte(version, '12.0.0'))) {
    coreModules.push('worker_threads');
  }
  if (semver.gte(version, '12.16.0') && experimental) {
    coreModules.push('wasi');
  }
  return coreModules;
};
const reader = {
  read
};
function read(jsonPath) {
  return find(_path().dirname(jsonPath));
}
function find(dir) {
  try {
    const string = _fs().default.readFileSync(_path().toNamespacedPath(_path().join(dir, 'package.json')), 'utf8');
    return {
      string
    };
  } catch (error) {
    if (error.code === 'ENOENT') {
      const parent = _path().dirname(dir);
      if (dir !== parent) return find(parent);
      return {
        string: undefined
      };
    }
    throw error;
  }
}
const isWindows = process.platform === 'win32';
const own$1 = {}.hasOwnProperty;
const codes = {};
const messages = new Map();
const nodeInternalPrefix = '__node_internal_';
let userStackTraceLimit;
codes.ERR_INVALID_MODULE_SPECIFIER = createError('ERR_INVALID_MODULE_SPECIFIER', (request, reason, base = undefined) => {
  return `Invalid module "${request}" ${reason}${base ? ` imported from ${base}` : ''}`;
}, TypeError);
codes.ERR_INVALID_PACKAGE_CONFIG = createError('ERR_INVALID_PACKAGE_CONFIG', (path, base, message) => {
  return `Invalid package config ${path}${base ? ` while importing ${base}` : ''}${message ? `. ${message}` : ''}`;
}, Error);
codes.ERR_INVALID_PACKAGE_TARGET = createError('ERR_INVALID_PACKAGE_TARGET', (pkgPath, key, target, isImport = false, base = undefined) => {
  const relError = typeof target === 'string' && !isImport && target.length > 0 && !target.startsWith('./');
  if (key === '.') {
    _assert()(isImport === false);
    return `Invalid "exports" main target ${JSON.stringify(target)} defined ` + `in the package config ${pkgPath}package.json${base ? ` imported from ${base}` : ''}${relError ? '; targets must start with "./"' : ''}`;
  }
  return `Invalid "${isImport ? 'imports' : 'exports'}" target ${JSON.stringify(target)} defined for '${key}' in the package config ${pkgPath}package.json${base ? ` imported from ${base}` : ''}${relError ? '; targets must start with "./"' : ''}`;
}, Error);
codes.ERR_MODULE_NOT_FOUND = createError('ERR_MODULE_NOT_FOUND', (path, base, type = 'package') => {
  return `Cannot find ${type} '${path}' imported from ${base}`;
}, Error);
codes.ERR_PACKAGE_IMPORT_NOT_DEFINED = createError('ERR_PACKAGE_IMPORT_NOT_DEFINED', (specifier, packagePath, base) => {
  return `Package import specifier "${specifier}" is not defined${packagePath ? ` in package ${packagePath}package.json` : ''} imported from ${base}`;
}, TypeError);
codes.ERR_PACKAGE_PATH_NOT_EXPORTED = createError('ERR_PACKAGE_PATH_NOT_EXPORTED', (pkgPath, subpath, base = undefined) => {
  if (subpath === '.') return `No "exports" main defined in ${pkgPath}package.json${base ? ` imported from ${base}` : ''}`;
  return `Package subpath '${subpath}' is not defined by "exports" in ${pkgPath}package.json${base ? ` imported from ${base}` : ''}`;
}, Error);
codes.ERR_UNSUPPORTED_DIR_IMPORT = createError('ERR_UNSUPPORTED_DIR_IMPORT', "Directory import '%s' is not supported " + 'resolving ES modules imported from %s', Error);
codes.ERR_UNKNOWN_FILE_EXTENSION = createError('ERR_UNKNOWN_FILE_EXTENSION', 'Unknown file extension "%s" for %s', TypeError);
codes.ERR_INVALID_ARG_VALUE = createError('ERR_INVALID_ARG_VALUE', (name, value, reason = 'is invalid') => {
  let inspected = (0, _util().inspect)(value);
  if (inspected.length > 128) {
    inspected = `${inspected.slice(0, 128)}...`;
  }
  const type = name.includes('.') ? 'property' : 'argument';
  return `The ${type} '${name}' ${reason}. Received ${inspected}`;
}, TypeError);
codes.ERR_UNSUPPORTED_ESM_URL_SCHEME = createError('ERR_UNSUPPORTED_ESM_URL_SCHEME', url => {
  let message = 'Only file and data URLs are supported by the default ESM loader';
  if (isWindows && url.protocol.length === 2) {
    message += '. On Windows, absolute paths must be valid file:// URLs';
  }
  message += `. Received protocol '${url.protocol}'`;
  return message;
}, Error);
function createError(sym, value, def) {
  messages.set(sym, value);
  return makeNodeErrorWithCode(def, sym);
}
function makeNodeErrorWithCode(Base, key) {
  return NodeError;
  function NodeError(...args) {
    const limit = Error.stackTraceLimit;
    if (isErrorStackTraceLimitWritable()) Error.stackTraceLimit = 0;
    const error = new Base();
    if (isErrorStackTraceLimitWritable()) Error.stackTraceLimit = limit;
    const message = getMessage(key, args, error);
    Object.defineProperty(error, 'message', {
      value: message,
      enumerable: false,
      writable: true,
      configurable: true
    });
    Object.defineProperty(error, 'toString', {
      value() {
        return `${this.name} [${key}]: ${this.message}`;
      },
      enumerable: false,
      writable: true,
      configurable: true
    });
    addCodeToName(error, Base.name, key);
    error.code = key;
    return error;
  }
}
const addCodeToName = hideStackFrames(function (error, name, code) {
  error = captureLargerStackTrace(error);
  error.name = `${name} [${code}]`;
  error.stack;
  if (name === 'SystemError') {
    Object.defineProperty(error, 'name', {
      value: name,
      enumerable: false,
      writable: true,
      configurable: true
    });
  } else {
    delete error.name;
  }
});
function isErrorStackTraceLimitWritable() {
  const desc = Object.getOwnPropertyDescriptor(Error, 'stackTraceLimit');
  if (desc === undefined) {
    return Object.isExtensible(Error);
  }
  return own$1.call(desc, 'writable') ? desc.writable : desc.set !== undefined;
}
function hideStackFrames(fn) {
  const hidden = nodeInternalPrefix + fn.name;
  Object.defineProperty(fn, 'name', {
    value: hidden
  });
  return fn;
}
const captureLargerStackTrace = hideStackFrames(function (error) {
  const stackTraceLimitIsWritable = isErrorStackTraceLimitWritable();
  if (stackTraceLimitIsWritable) {
    userStackTraceLimit = Error.stackTraceLimit;
    Error.stackTraceLimit = Number.POSITIVE_INFINITY;
  }
  Error.captureStackTrace(error);
  if (stackTraceLimitIsWritable) Error.stackTraceLimit = userStackTraceLimit;
  return error;
});
function getMessage(key, args, self) {
  const message = messages.get(key);
  if (typeof message === 'function') {
    _assert()(message.length <= args.length, `Code: ${key}; The provided arguments length (${args.length}) does not ` + `match the required ones (${message.length}).`);
    return Reflect.apply(message, self, args);
  }
  const expectedLength = (message.match(/%[dfijoOs]/g) || []).length;
  _assert()(expectedLength === args.length, `Code: ${key}; The provided arguments length (${args.length}) does not ` + `match the required ones (${expectedLength}).`);
  if (args.length === 0) return message;
  args.unshift(message);
  return Reflect.apply(_util().format, null, args);
}
const {
  ERR_UNKNOWN_FILE_EXTENSION
} = codes;
const extensionFormatMap = {
  __proto__: null,
  '.cjs': 'commonjs',
  '.js': 'module',
  '.mjs': 'module'
};
function defaultGetFormat(url) {
  if (url.startsWith('node:')) {
    return {
      format: 'builtin'
    };
  }
  const parsed = new (_url().URL)(url);
  if (parsed.protocol === 'data:') {
    const {
      1: mime
    } = /^([^/]+\/[^;,]+)[^,]*?(;base64)?,/.exec(parsed.pathname) || [null, null];
    const format = mime === 'text/javascript' ? 'module' : null;
    return {
      format
    };
  }
  if (parsed.protocol === 'file:') {
    const ext = _path().extname(parsed.pathname);
    let format;
    if (ext === '.js') {
      format = getPackageType(parsed.href) === 'module' ? 'module' : 'commonjs';
    } else {
      format = extensionFormatMap[ext];
    }
    if (!format) {
      throw new ERR_UNKNOWN_FILE_EXTENSION(ext, (0, _url().fileURLToPath)(url));
    }
    return {
      format: format || null
    };
  }
  return {
    format: null
  };
}
const listOfBuiltins = builtins();
const {
  ERR_INVALID_MODULE_SPECIFIER,
  ERR_INVALID_PACKAGE_CONFIG,
  ERR_INVALID_PACKAGE_TARGET,
  ERR_MODULE_NOT_FOUND,
  ERR_PACKAGE_IMPORT_NOT_DEFINED,
  ERR_PACKAGE_PATH_NOT_EXPORTED,
  ERR_UNSUPPORTED_DIR_IMPORT,
  ERR_UNSUPPORTED_ESM_URL_SCHEME,
  ERR_INVALID_ARG_VALUE
} = codes;
const own = {}.hasOwnProperty;
const DEFAULT_CONDITIONS = Object.freeze(['node', 'import']);
const DEFAULT_CONDITIONS_SET = new Set(DEFAULT_CONDITIONS);
const invalidSegmentRegEx = /(^|\\|\/)(\.\.?|node_modules)(\\|\/|$)/;
const patternRegEx = /\*/g;
const encodedSepRegEx = /%2f|%2c/i;
const emittedPackageWarnings = new Set();
const packageJsonCache = new Map();
function emitFolderMapDeprecation(match, pjsonUrl, isExports, base) {
  const pjsonPath = (0, _url().fileURLToPath)(pjsonUrl);
  if (emittedPackageWarnings.has(pjsonPath + '|' + match)) return;
  emittedPackageWarnings.add(pjsonPath + '|' + match);
  process.emitWarning(`Use of deprecated folder mapping "${match}" in the ${isExports ? '"exports"' : '"imports"'} field module resolution of the package at ${pjsonPath}${base ? ` imported from ${(0, _url().fileURLToPath)(base)}` : ''}.\n` + `Update this package.json to use a subpath pattern like "${match}*".`, 'DeprecationWarning', 'DEP0148');
}
function emitLegacyIndexDeprecation(url, packageJsonUrl, base, main) {
  const {
    format
  } = defaultGetFormat(url.href);
  if (format !== 'module') return;
  const path = (0, _url().fileURLToPath)(url.href);
  const pkgPath = (0, _url().fileURLToPath)(new (_url().URL)('.', packageJsonUrl));
  const basePath = (0, _url().fileURLToPath)(base);
  if (main) process.emitWarning(`Package ${pkgPath} has a "main" field set to ${JSON.stringify(main)}, ` + `excluding the full filename and extension to the resolved file at "${path.slice(pkgPath.length)}", imported from ${basePath}.\n Automatic extension resolution of the "main" field is` + 'deprecated for ES modules.', 'DeprecationWarning', 'DEP0151');else process.emitWarning(`No "main" or "exports" field defined in the package.json for ${pkgPath} resolving the main entry point "${path.slice(pkgPath.length)}", imported from ${basePath}.\nDefault "index" lookups for the main are deprecated for ES modules.`, 'DeprecationWarning', 'DEP0151');
}
function getConditionsSet(conditions) {
  if (conditions !== undefined && conditions !== DEFAULT_CONDITIONS) {
    if (!Array.isArray(conditions)) {
      throw new ERR_INVALID_ARG_VALUE('conditions', conditions, 'expected an array');
    }
    return new Set(conditions);
  }
  return DEFAULT_CONDITIONS_SET;
}
function tryStatSync(path) {
  try {
    return (0, _fs().statSync)(path);
  } catch (_unused) {
    return new (_fs().Stats)();
  }
}
function getPackageConfig(path, specifier, base) {
  const existing = packageJsonCache.get(path);
  if (existing !== undefined) {
    return existing;
  }
  const source = reader.read(path).string;
  if (source === undefined) {
    const packageConfig = {
      pjsonPath: path,
      exists: false,
      main: undefined,
      name: undefined,
      type: 'none',
      exports: undefined,
      imports: undefined
    };
    packageJsonCache.set(path, packageConfig);
    return packageConfig;
  }
  let packageJson;
  try {
    packageJson = JSON.parse(source);
  } catch (error) {
    throw new ERR_INVALID_PACKAGE_CONFIG(path, (base ? `"${specifier}" from ` : '') + (0, _url().fileURLToPath)(base || specifier), error.message);
  }
  const {
    exports,
    imports,
    main,
    name,
    type
  } = packageJson;
  const packageConfig = {
    pjsonPath: path,
    exists: true,
    main: typeof main === 'string' ? main : undefined,
    name: typeof name === 'string' ? name : undefined,
    type: type === 'module' || type === 'commonjs' ? type : 'none',
    exports,
    imports: imports && typeof imports === 'object' ? imports : undefined
  };
  packageJsonCache.set(path, packageConfig);
  return packageConfig;
}
function getPackageScopeConfig(resolved) {
  let packageJsonUrl = new (_url().URL)('./package.json', resolved);
  while (true) {
    const packageJsonPath = packageJsonUrl.pathname;
    if (packageJsonPath.endsWith('node_modules/package.json')) break;
    const packageConfig = getPackageConfig((0, _url().fileURLToPath)(packageJsonUrl), resolved);
    if (packageConfig.exists) return packageConfig;
    const lastPackageJsonUrl = packageJsonUrl;
    packageJsonUrl = new (_url().URL)('../package.json', packageJsonUrl);
    if (packageJsonUrl.pathname === lastPackageJsonUrl.pathname) break;
  }
  const packageJsonPath = (0, _url().fileURLToPath)(packageJsonUrl);
  const packageConfig = {
    pjsonPath: packageJsonPath,
    exists: false,
    main: undefined,
    name: undefined,
    type: 'none',
    exports: undefined,
    imports: undefined
  };
  packageJsonCache.set(packageJsonPath, packageConfig);
  return packageConfig;
}
function fileExists(url) {
  return tryStatSync((0, _url().fileURLToPath)(url)).isFile();
}
function legacyMainResolve(packageJsonUrl, packageConfig, base) {
  let guess;
  if (packageConfig.main !== undefined) {
    guess = new (_url().URL)(`./${packageConfig.main}`, packageJsonUrl);
    if (fileExists(guess)) return guess;
    const tries = [`./${packageConfig.main}.js`, `./${packageConfig.main}.json`, `./${packageConfig.main}.node`, `./${packageConfig.main}/index.js`, `./${packageConfig.main}/index.json`, `./${packageConfig.main}/index.node`];
    let i = -1;
    while (++i < tries.length) {
      guess = new (_url().URL)(tries[i], packageJsonUrl);
      if (fileExists(guess)) break;
      guess = undefined;
    }
    if (guess) {
      emitLegacyIndexDeprecation(guess, packageJsonUrl, base, packageConfig.main);
      return guess;
    }
  }
  const tries = ['./index.js', './index.json', './index.node'];
  let i = -1;
  while (++i < tries.length) {
    guess = new (_url().URL)(tries[i], packageJsonUrl);
    if (fileExists(guess)) break;
    guess = undefined;
  }
  if (guess) {
    emitLegacyIndexDeprecation(guess, packageJsonUrl, base, packageConfig.main);
    return guess;
  }
  throw new ERR_MODULE_NOT_FOUND((0, _url().fileURLToPath)(new (_url().URL)('.', packageJsonUrl)), (0, _url().fileURLToPath)(base));
}
function finalizeResolution(resolved, base) {
  if (encodedSepRegEx.test(resolved.pathname)) throw new ERR_INVALID_MODULE_SPECIFIER(resolved.pathname, 'must not include encoded "/" or "\\" characters', (0, _url().fileURLToPath)(base));
  const path = (0, _url().fileURLToPath)(resolved);
  const stats = tryStatSync(path.endsWith('/') ? path.slice(-1) : path);
  if (stats.isDirectory()) {
    const error = new ERR_UNSUPPORTED_DIR_IMPORT(path, (0, _url().fileURLToPath)(base));
    error.url = String(resolved);
    throw error;
  }
  if (!stats.isFile()) {
    throw new ERR_MODULE_NOT_FOUND(path || resolved.pathname, base && (0, _url().fileURLToPath)(base), 'module');
  }
  return resolved;
}
function throwImportNotDefined(specifier, packageJsonUrl, base) {
  throw new ERR_PACKAGE_IMPORT_NOT_DEFINED(specifier, packageJsonUrl && (0, _url().fileURLToPath)(new (_url().URL)('.', packageJsonUrl)), (0, _url().fileURLToPath)(base));
}
function throwExportsNotFound(subpath, packageJsonUrl, base) {
  throw new ERR_PACKAGE_PATH_NOT_EXPORTED((0, _url().fileURLToPath)(new (_url().URL)('.', packageJsonUrl)), subpath, base && (0, _url().fileURLToPath)(base));
}
function throwInvalidSubpath(subpath, packageJsonUrl, internal, base) {
  const reason = `request is not a valid subpath for the "${internal ? 'imports' : 'exports'}" resolution of ${(0, _url().fileURLToPath)(packageJsonUrl)}`;
  throw new ERR_INVALID_MODULE_SPECIFIER(subpath, reason, base && (0, _url().fileURLToPath)(base));
}
function throwInvalidPackageTarget(subpath, target, packageJsonUrl, internal, base) {
  target = typeof target === 'object' && target !== null ? JSON.stringify(target, null, '') : `${target}`;
  throw new ERR_INVALID_PACKAGE_TARGET((0, _url().fileURLToPath)(new (_url().URL)('.', packageJsonUrl)), subpath, target, internal, base && (0, _url().fileURLToPath)(base));
}
function resolvePackageTargetString(target, subpath, match, packageJsonUrl, base, pattern, internal, conditions) {
  if (subpath !== '' && !pattern && target[target.length - 1] !== '/') throwInvalidPackageTarget(match, target, packageJsonUrl, internal, base);
  if (!target.startsWith('./')) {
    if (internal && !target.startsWith('../') && !target.startsWith('/')) {
      let isURL = false;
      try {
        new (_url().URL)(target);
        isURL = true;
      } catch (_unused2) {}
      if (!isURL) {
        const exportTarget = pattern ? target.replace(patternRegEx, subpath) : target + subpath;
        return packageResolve(exportTarget, packageJsonUrl, conditions);
      }
    }
    throwInvalidPackageTarget(match, target, packageJsonUrl, internal, base);
  }
  if (invalidSegmentRegEx.test(target.slice(2))) throwInvalidPackageTarget(match, target, packageJsonUrl, internal, base);
  const resolved = new (_url().URL)(target, packageJsonUrl);
  const resolvedPath = resolved.pathname;
  const packagePath = new (_url().URL)('.', packageJsonUrl).pathname;
  if (!resolvedPath.startsWith(packagePath)) throwInvalidPackageTarget(match, target, packageJsonUrl, internal, base);
  if (subpath === '') return resolved;
  if (invalidSegmentRegEx.test(subpath)) throwInvalidSubpath(match + subpath, packageJsonUrl, internal, base);
  if (pattern) return new (_url().URL)(resolved.href.replace(patternRegEx, subpath));
  return new (_url().URL)(subpath, resolved);
}
function isArrayIndex(key) {
  const keyNumber = Number(key);
  if (`${keyNumber}` !== key) return false;
  return keyNumber >= 0 && keyNumber < 0xffffffff;
}
function resolvePackageTarget(packageJsonUrl, target, subpath, packageSubpath, base, pattern, internal, conditions) {
  if (typeof target === 'string') {
    return resolvePackageTargetString(target, subpath, packageSubpath, packageJsonUrl, base, pattern, internal, conditions);
  }
  if (Array.isArray(target)) {
    const targetList = target;
    if (targetList.length === 0) return null;
    let lastException;
    let i = -1;
    while (++i < targetList.length) {
      const targetItem = targetList[i];
      let resolved;
      try {
        resolved = resolvePackageTarget(packageJsonUrl, targetItem, subpath, packageSubpath, base, pattern, internal, conditions);
      } catch (error) {
        lastException = error;
        if (error.code === 'ERR_INVALID_PACKAGE_TARGET') continue;
        throw error;
      }
      if (resolved === undefined) continue;
      if (resolved === null) {
        lastException = null;
        continue;
      }
      return resolved;
    }
    if (lastException === undefined || lastException === null) {
      return lastException;
    }
    throw lastException;
  }
  if (typeof target === 'object' && target !== null) {
    const keys = Object.getOwnPropertyNames(target);
    let i = -1;
    while (++i < keys.length) {
      const key = keys[i];
      if (isArrayIndex(key)) {
        throw new ERR_INVALID_PACKAGE_CONFIG((0, _url().fileURLToPath)(packageJsonUrl), base, '"exports" cannot contain numeric property keys.');
      }
    }
    i = -1;
    while (++i < keys.length) {
      const key = keys[i];
      if (key === 'default' || conditions && conditions.has(key)) {
        const conditionalTarget = target[key];
        const resolved = resolvePackageTarget(packageJsonUrl, conditionalTarget, subpath, packageSubpath, base, pattern, internal, conditions);
        if (resolved === undefined) continue;
        return resolved;
      }
    }
    return undefined;
  }
  if (target === null) {
    return null;
  }
  throwInvalidPackageTarget(packageSubpath, target, packageJsonUrl, internal, base);
}
function isConditionalExportsMainSugar(exports, packageJsonUrl, base) {
  if (typeof exports === 'string' || Array.isArray(exports)) return true;
  if (typeof exports !== 'object' || exports === null) return false;
  const keys = Object.getOwnPropertyNames(exports);
  let isConditionalSugar = false;
  let i = 0;
  let j = -1;
  while (++j < keys.length) {
    const key = keys[j];
    const curIsConditionalSugar = key === '' || key[0] !== '.';
    if (i++ === 0) {
      isConditionalSugar = curIsConditionalSugar;
    } else if (isConditionalSugar !== curIsConditionalSugar) {
      throw new ERR_INVALID_PACKAGE_CONFIG((0, _url().fileURLToPath)(packageJsonUrl), base, '"exports" cannot contain some keys starting with \'.\' and some not.' + ' The exports object must either be an object of package subpath keys' + ' or an object of main entry condition name keys only.');
    }
  }
  return isConditionalSugar;
}
function packageExportsResolve(packageJsonUrl, packageSubpath, packageConfig, base, conditions) {
  let exports = packageConfig.exports;
  if (isConditionalExportsMainSugar(exports, packageJsonUrl, base)) exports = {
    '.': exports
  };
  if (own.call(exports, packageSubpath)) {
    const target = exports[packageSubpath];
    const resolved = resolvePackageTarget(packageJsonUrl, target, '', packageSubpath, base, false, false, conditions);
    if (resolved === null || resolved === undefined) throwExportsNotFound(packageSubpath, packageJsonUrl, base);
    return {
      resolved,
      exact: true
    };
  }
  let bestMatch = '';
  const keys = Object.getOwnPropertyNames(exports);
  let i = -1;
  while (++i < keys.length) {
    const key = keys[i];
    if (key[key.length - 1] === '*' && packageSubpath.startsWith(key.slice(0, -1)) && packageSubpath.length >= key.length && key.length > bestMatch.length) {
      bestMatch = key;
    } else if (key[key.length - 1] === '/' && packageSubpath.startsWith(key) && key.length > bestMatch.length) {
      bestMatch = key;
    }
  }
  if (bestMatch) {
    const target = exports[bestMatch];
    const pattern = bestMatch[bestMatch.length - 1] === '*';
    const subpath = packageSubpath.slice(bestMatch.length - (pattern ? 1 : 0));
    const resolved = resolvePackageTarget(packageJsonUrl, target, subpath, bestMatch, base, pattern, false, conditions);
    if (resolved === null || resolved === undefined) throwExportsNotFound(packageSubpath, packageJsonUrl, base);
    if (!pattern) emitFolderMapDeprecation(bestMatch, packageJsonUrl, true, base);
    return {
      resolved,
      exact: pattern
    };
  }
  throwExportsNotFound(packageSubpath, packageJsonUrl, base);
}
function packageImportsResolve(name, base, conditions) {
  if (name === '#' || name.startsWith('#/')) {
    const reason = 'is not a valid internal imports specifier name';
    throw new ERR_INVALID_MODULE_SPECIFIER(name, reason, (0, _url().fileURLToPath)(base));
  }
  let packageJsonUrl;
  const packageConfig = getPackageScopeConfig(base);
  if (packageConfig.exists) {
    packageJsonUrl = (0, _url().pathToFileURL)(packageConfig.pjsonPath);
    const imports = packageConfig.imports;
    if (imports) {
      if (own.call(imports, name)) {
        const resolved = resolvePackageTarget(packageJsonUrl, imports[name], '', name, base, false, true, conditions);
        if (resolved !== null) return {
          resolved,
          exact: true
        };
      } else {
        let bestMatch = '';
        const keys = Object.getOwnPropertyNames(imports);
        let i = -1;
        while (++i < keys.length) {
          const key = keys[i];
          if (key[key.length - 1] === '*' && name.startsWith(key.slice(0, -1)) && name.length >= key.length && key.length > bestMatch.length) {
            bestMatch = key;
          } else if (key[key.length - 1] === '/' && name.startsWith(key) && key.length > bestMatch.length) {
            bestMatch = key;
          }
        }
        if (bestMatch) {
          const target = imports[bestMatch];
          const pattern = bestMatch[bestMatch.length - 1] === '*';
          const subpath = name.slice(bestMatch.length - (pattern ? 1 : 0));
          const resolved = resolvePackageTarget(packageJsonUrl, target, subpath, bestMatch, base, pattern, true, conditions);
          if (resolved !== null) {
            if (!pattern) emitFolderMapDeprecation(bestMatch, packageJsonUrl, false, base);
            return {
              resolved,
              exact: pattern
            };
          }
        }
      }
    }
  }
  throwImportNotDefined(name, packageJsonUrl, base);
}
function getPackageType(url) {
  const packageConfig = getPackageScopeConfig(url);
  return packageConfig.type;
}
function parsePackageName(specifier, base) {
  let separatorIndex = specifier.indexOf('/');
  let validPackageName = true;
  let isScoped = false;
  if (specifier[0] === '@') {
    isScoped = true;
    if (separatorIndex === -1 || specifier.length === 0) {
      validPackageName = false;
    } else {
      separatorIndex = specifier.indexOf('/', separatorIndex + 1);
    }
  }
  const packageName = separatorIndex === -1 ? specifier : specifier.slice(0, separatorIndex);
  let i = -1;
  while (++i < packageName.length) {
    if (packageName[i] === '%' || packageName[i] === '\\') {
      validPackageName = false;
      break;
    }
  }
  if (!validPackageName) {
    throw new ERR_INVALID_MODULE_SPECIFIER(specifier, 'is not a valid package name', (0, _url().fileURLToPath)(base));
  }
  const packageSubpath = '.' + (separatorIndex === -1 ? '' : specifier.slice(separatorIndex));
  return {
    packageName,
    packageSubpath,
    isScoped
  };
}
function packageResolve(specifier, base, conditions) {
  const {
    packageName,
    packageSubpath,
    isScoped
  } = parsePackageName(specifier, base);
  const packageConfig = getPackageScopeConfig(base);
  if (packageConfig.exists) {
    const packageJsonUrl = (0, _url().pathToFileURL)(packageConfig.pjsonPath);
    if (packageConfig.name === packageName && packageConfig.exports !== undefined && packageConfig.exports !== null) {
      return packageExportsResolve(packageJsonUrl, packageSubpath, packageConfig, base, conditions).resolved;
    }
  }
  let packageJsonUrl = new (_url().URL)('./node_modules/' + packageName + '/package.json', base);
  let packageJsonPath = (0, _url().fileURLToPath)(packageJsonUrl);
  let lastPath;
  do {
    const stat = tryStatSync(packageJsonPath.slice(0, -13));
    if (!stat.isDirectory()) {
      lastPath = packageJsonPath;
      packageJsonUrl = new (_url().URL)((isScoped ? '../../../../node_modules/' : '../../../node_modules/') + packageName + '/package.json', packageJsonUrl);
      packageJsonPath = (0, _url().fileURLToPath)(packageJsonUrl);
      continue;
    }
    const packageConfig = getPackageConfig(packageJsonPath, specifier, base);
    if (packageConfig.exports !== undefined && packageConfig.exports !== null) return packageExportsResolve(packageJsonUrl, packageSubpath, packageConfig, base, conditions).resolved;
    if (packageSubpath === '.') return legacyMainResolve(packageJsonUrl, packageConfig, base);
    return new (_url().URL)(packageSubpath, packageJsonUrl);
  } while (packageJsonPath.length !== lastPath.length);
  throw new ERR_MODULE_NOT_FOUND(packageName, (0, _url().fileURLToPath)(base));
}
function isRelativeSpecifier(specifier) {
  if (specifier[0] === '.') {
    if (specifier.length === 1 || specifier[1] === '/') return true;
    if (specifier[1] === '.' && (specifier.length === 2 || specifier[2] === '/')) {
      return true;
    }
  }
  return false;
}
function shouldBeTreatedAsRelativeOrAbsolutePath(specifier) {
  if (specifier === '') return false;
  if (specifier[0] === '/') return true;
  return isRelativeSpecifier(specifier);
}
function moduleResolve(specifier, base, conditions) {
  let resolved;
  if (shouldBeTreatedAsRelativeOrAbsolutePath(specifier)) {
    resolved = new (_url().URL)(specifier, base);
  } else if (specifier[0] === '#') {
    ({
      resolved
    } = packageImportsResolve(specifier, base, conditions));
  } else {
    try {
      resolved = new (_url().URL)(specifier);
    } catch (_unused3) {
      resolved = packageResolve(specifier, base, conditions);
    }
  }
  return finalizeResolution(resolved, base);
}
function defaultResolve(specifier, context = {}) {
  const {
    parentURL
  } = context;
  let parsed;
  try {
    parsed = new (_url().URL)(specifier);
    if (parsed.protocol === 'data:') {
      return {
        url: specifier
      };
    }
  } catch (_unused4) {}
  if (parsed && parsed.protocol === 'node:') return {
    url: specifier
  };
  if (parsed && parsed.protocol !== 'file:' && parsed.protocol !== 'data:') throw new ERR_UNSUPPORTED_ESM_URL_SCHEME(parsed);
  if (listOfBuiltins.includes(specifier)) {
    return {
      url: 'node:' + specifier
    };
  }
  if (parentURL.startsWith('data:')) {
    new (_url().URL)(specifier, parentURL);
  }
  const conditions = getConditionsSet(context.conditions);
  let url = moduleResolve(specifier, new (_url().URL)(parentURL), conditions);
  const urlPath = (0, _url().fileURLToPath)(url);
  const real = (0, _fs().realpathSync)(urlPath);
  const old = url;
  url = (0, _url().pathToFileURL)(real + (urlPath.endsWith(_path().sep) ? '/' : ''));
  url.search = old.search;
  url.hash = old.hash;
  return {
    url: `${url}`
  };
}
function resolve(_x, _x2) {
  return _resolve.apply(this, arguments);
}
function _resolve() {
  _resolve = _asyncToGenerator(function* (specifier, parent) {
    if (!parent) {
      throw new Error('Please pass `parent`: `import-meta-resolve` cannot ponyfill that');
    }
    try {
      return defaultResolve(specifier, {
        parentURL: parent
      }).url;
    } catch (error) {
      return error.code === 'ERR_UNSUPPORTED_DIR_IMPORT' ? error.url : Promise.reject(error);
    }
  });
  return _resolve.apply(this, arguments);
}
0 && 0;

//# sourceMappingURL=import-meta-resolve.js.map

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679363156127, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.transform = void 0;
exports.transformAsync = transformAsync;
exports.transformSync = transformSync;
function _gensync() {
  const data = require("gensync");
  _gensync = function () {
    return data;
  };
  return data;
}
var _config = require("./config");
var _transformation = require("./transformation");
var _rewriteStackTrace = require("./errors/rewrite-stack-trace");
const transformRunner = _gensync()(function* transform(code, opts) {
  const config = yield* (0, _config.default)(opts);
  if (config === null) return null;
  return yield* (0, _transformation.run)(config, code);
});
const transform = function transform(code, optsOrCallback, maybeCallback) {
  let opts;
  let callback;
  if (typeof optsOrCallback === "function") {
    callback = optsOrCallback;
    opts = undefined;
  } else {
    opts = optsOrCallback;
    callback = maybeCallback;
  }
  if (callback === undefined) {
    {
      return (0, _rewriteStackTrace.beginHiddenCallStack)(transformRunner.sync)(code, opts);
    }
  }
  (0, _rewriteStackTrace.beginHiddenCallStack)(transformRunner.errback)(code, opts, callback);
};
exports.transform = transform;
function transformSync(...args) {
  return (0, _rewriteStackTrace.beginHiddenCallStack)(transformRunner.sync)(...args);
}
function transformAsync(...args) {
  return (0, _rewriteStackTrace.beginHiddenCallStack)(transformRunner.async)(...args);
}
0 && 0;

//# sourceMappingURL=transform.js.map

}, function(modId) { var map = {"./config":1679363156097,"./transformation":1679363156114,"./errors/rewrite-stack-trace":1679363156092}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679363156128, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.transformFromAst = void 0;
exports.transformFromAstAsync = transformFromAstAsync;
exports.transformFromAstSync = transformFromAstSync;
function _gensync() {
  const data = require("gensync");
  _gensync = function () {
    return data;
  };
  return data;
}
var _config = require("./config");
var _transformation = require("./transformation");
var _rewriteStackTrace = require("./errors/rewrite-stack-trace");
const transformFromAstRunner = _gensync()(function* (ast, code, opts) {
  const config = yield* (0, _config.default)(opts);
  if (config === null) return null;
  if (!ast) throw new Error("No AST given");
  return yield* (0, _transformation.run)(config, code, ast);
});
const transformFromAst = function transformFromAst(ast, code, optsOrCallback, maybeCallback) {
  let opts;
  let callback;
  if (typeof optsOrCallback === "function") {
    callback = optsOrCallback;
    opts = undefined;
  } else {
    opts = optsOrCallback;
    callback = maybeCallback;
  }
  if (callback === undefined) {
    {
      return (0, _rewriteStackTrace.beginHiddenCallStack)(transformFromAstRunner.sync)(ast, code, opts);
    }
  }
  (0, _rewriteStackTrace.beginHiddenCallStack)(transformFromAstRunner.errback)(ast, code, opts, callback);
};
exports.transformFromAst = transformFromAst;
function transformFromAstSync(...args) {
  return (0, _rewriteStackTrace.beginHiddenCallStack)(transformFromAstRunner.sync)(...args);
}
function transformFromAstAsync(...args) {
  return (0, _rewriteStackTrace.beginHiddenCallStack)(transformFromAstRunner.async)(...args);
}
0 && 0;

//# sourceMappingURL=transform-ast.js.map

}, function(modId) { var map = {"./config":1679363156097,"./transformation":1679363156114,"./errors/rewrite-stack-trace":1679363156092}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679363156129, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parse = void 0;
exports.parseAsync = parseAsync;
exports.parseSync = parseSync;
function _gensync() {
  const data = require("gensync");
  _gensync = function () {
    return data;
  };
  return data;
}
var _config = require("./config");
var _parser = require("./parser");
var _normalizeOpts = require("./transformation/normalize-opts");
var _rewriteStackTrace = require("./errors/rewrite-stack-trace");
const parseRunner = _gensync()(function* parse(code, opts) {
  const config = yield* (0, _config.default)(opts);
  if (config === null) {
    return null;
  }
  return yield* (0, _parser.default)(config.passes, (0, _normalizeOpts.default)(config), code);
});
const parse = function parse(code, opts, callback) {
  if (typeof opts === "function") {
    callback = opts;
    opts = undefined;
  }
  if (callback === undefined) {
    {
      return (0, _rewriteStackTrace.beginHiddenCallStack)(parseRunner.sync)(code, opts);
    }
  }
  (0, _rewriteStackTrace.beginHiddenCallStack)(parseRunner.errback)(code, opts, callback);
};
exports.parse = parse;
function parseSync(...args) {
  return (0, _rewriteStackTrace.beginHiddenCallStack)(parseRunner.sync)(...args);
}
function parseAsync(...args) {
  return (0, _rewriteStackTrace.beginHiddenCallStack)(parseRunner.async)(...args);
}
0 && 0;

//# sourceMappingURL=parse.js.map

}, function(modId) { var map = {"./config":1679363156097,"./parser":1679363156119,"./transformation/normalize-opts":1679363156117,"./errors/rewrite-stack-trace":1679363156092}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1679363156081);
})()
//miniprogram-npm-outsideDeps=["@babel/types","@babel/parser","@babel/traverse","@babel/template","@babel/helpers","@babel/code-frame","@babel/helper-module-transforms","semver","@babel/generator","gensync","path","fs","debug","json5","module","url","./import.cjs","@babel/preset-typescript","@babel/helper-compilation-targets","convert-source-map","@ampproject/remapping","assert","util"]
//# sourceMappingURL=index.js.map