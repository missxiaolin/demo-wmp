module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1679363156216, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Hub", {
  enumerable: true,
  get: function () {
    return _hub.default;
  }
});
Object.defineProperty(exports, "NodePath", {
  enumerable: true,
  get: function () {
    return _path.default;
  }
});
Object.defineProperty(exports, "Scope", {
  enumerable: true,
  get: function () {
    return _scope.default;
  }
});
exports.visitors = exports.default = void 0;
var visitors = require("./visitors");
exports.visitors = visitors;
var _t = require("@babel/types");
var cache = require("./cache");
var _traverseNode = require("./traverse-node");
var _path = require("./path");
var _scope = require("./scope");
var _hub = require("./hub");
const {
  VISITOR_KEYS,
  removeProperties,
  traverseFast
} = _t;
function traverse(parent, opts = {}, scope, state, parentPath) {
  if (!parent) return;
  if (!opts.noScope && !scope) {
    if (parent.type !== "Program" && parent.type !== "File") {
      throw new Error("You must pass a scope and parentPath unless traversing a Program/File. " + `Instead of that you tried to traverse a ${parent.type} node without ` + "passing scope and parentPath.");
    }
  }
  if (!VISITOR_KEYS[parent.type]) {
    return;
  }
  visitors.explode(opts);
  (0, _traverseNode.traverseNode)(parent, opts, scope, state, parentPath);
}
var _default = traverse;
exports.default = _default;
traverse.visitors = visitors;
traverse.verify = visitors.verify;
traverse.explode = visitors.explode;
traverse.cheap = function (node, enter) {
  traverseFast(node, enter);
  return;
};
traverse.node = function (node, opts, scope, state, path, skipKeys) {
  (0, _traverseNode.traverseNode)(node, opts, scope, state, path, skipKeys);
};
traverse.clearNode = function (node, opts) {
  removeProperties(node, opts);
  cache.path.delete(node);
};
traverse.removeProperties = function (tree, opts) {
  traverseFast(tree, traverse.clearNode, opts);
  return tree;
};
function hasDenylistedType(path, state) {
  if (path.node.type === state.type) {
    state.has = true;
    path.stop();
  }
}
traverse.hasType = function (tree, type, denylistTypes) {
  if (denylistTypes != null && denylistTypes.includes(tree.type)) return false;
  if (tree.type === type) return true;
  const state = {
    has: false,
    type: type
  };
  traverse(tree, {
    noScope: true,
    denylist: denylistTypes,
    enter: hasDenylistedType
  }, null, state);
  return state.has;
};
traverse.cache = cache;

//# sourceMappingURL=index.js.map

}, function(modId) {var map = {"./visitors":1679363156217,"./cache":1679363156219,"./traverse-node":1679363156220,"./path":1679363156222,"./scope":1679363156223,"./hub":1679363156243}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679363156217, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.explode = explode;
exports.merge = merge;
exports.verify = verify;
var virtualTypes = require("./path/lib/virtual-types");
var _t = require("@babel/types");
const {
  DEPRECATED_KEYS,
  DEPRECATED_ALIASES,
  FLIPPED_ALIAS_KEYS,
  TYPES,
  __internal__deprecationWarning: deprecationWarning
} = _t;
function isVirtualType(type) {
  return type in virtualTypes;
}
function explode(visitor) {
  if (visitor._exploded) return visitor;
  visitor._exploded = true;
  for (const nodeType of Object.keys(visitor)) {
    if (shouldIgnoreKey(nodeType)) continue;
    const parts = nodeType.split("|");
    if (parts.length === 1) continue;
    const fns = visitor[nodeType];
    delete visitor[nodeType];
    for (const part of parts) {
      visitor[part] = fns;
    }
  }
  verify(visitor);
  delete visitor.__esModule;
  ensureEntranceObjects(visitor);
  ensureCallbackArrays(visitor);
  for (const nodeType of Object.keys(visitor)) {
    if (shouldIgnoreKey(nodeType)) continue;
    if (!isVirtualType(nodeType)) continue;
    const fns = visitor[nodeType];
    for (const type of Object.keys(fns)) {
      fns[type] = wrapCheck(nodeType, fns[type]);
    }
    delete visitor[nodeType];
    const types = virtualTypes[nodeType];
    if (types !== null) {
      for (const type of types) {
        if (visitor[type]) {
          mergePair(visitor[type], fns);
        } else {
          visitor[type] = fns;
        }
      }
    } else {
      mergePair(visitor, fns);
    }
  }
  for (const nodeType of Object.keys(visitor)) {
    if (shouldIgnoreKey(nodeType)) continue;
    let aliases = FLIPPED_ALIAS_KEYS[nodeType];
    if (nodeType in DEPRECATED_KEYS) {
      const deprecatedKey = DEPRECATED_KEYS[nodeType];
      deprecationWarning(nodeType, deprecatedKey, "Visitor ");
      aliases = [deprecatedKey];
    } else if (nodeType in DEPRECATED_ALIASES) {
      const deprecatedAlias = DEPRECATED_ALIASES[nodeType];
      deprecationWarning(nodeType, deprecatedAlias, "Visitor ");
      aliases = FLIPPED_ALIAS_KEYS[deprecatedAlias];
    }
    if (!aliases) continue;
    const fns = visitor[nodeType];
    delete visitor[nodeType];
    for (const alias of aliases) {
      const existing = visitor[alias];
      if (existing) {
        mergePair(existing, fns);
      } else {
        visitor[alias] = Object.assign({}, fns);
      }
    }
  }
  for (const nodeType of Object.keys(visitor)) {
    if (shouldIgnoreKey(nodeType)) continue;
    ensureCallbackArrays(visitor[nodeType]);
  }
  return visitor;
}
function verify(visitor) {
  if (visitor._verified) return;
  if (typeof visitor === "function") {
    throw new Error("You passed `traverse()` a function when it expected a visitor object, " + "are you sure you didn't mean `{ enter: Function }`?");
  }
  for (const nodeType of Object.keys(visitor)) {
    if (nodeType === "enter" || nodeType === "exit") {
      validateVisitorMethods(nodeType, visitor[nodeType]);
    }
    if (shouldIgnoreKey(nodeType)) continue;
    if (TYPES.indexOf(nodeType) < 0) {
      throw new Error(`You gave us a visitor for the node type ${nodeType} but it's not a valid type`);
    }
    const visitors = visitor[nodeType];
    if (typeof visitors === "object") {
      for (const visitorKey of Object.keys(visitors)) {
        if (visitorKey === "enter" || visitorKey === "exit") {
          validateVisitorMethods(`${nodeType}.${visitorKey}`, visitors[visitorKey]);
        } else {
          throw new Error("You passed `traverse()` a visitor object with the property " + `${nodeType} that has the invalid property ${visitorKey}`);
        }
      }
    }
  }
  visitor._verified = true;
}
function validateVisitorMethods(path, val) {
  const fns = [].concat(val);
  for (const fn of fns) {
    if (typeof fn !== "function") {
      throw new TypeError(`Non-function found defined in ${path} with type ${typeof fn}`);
    }
  }
}
function merge(visitors, states = [], wrapper) {
  const rootVisitor = {};
  for (let i = 0; i < visitors.length; i++) {
    const visitor = visitors[i];
    const state = states[i];
    explode(visitor);
    for (const type of Object.keys(visitor)) {
      let visitorType = visitor[type];
      if (state || wrapper) {
        visitorType = wrapWithStateOrWrapper(visitorType, state, wrapper);
      }
      const nodeVisitor = rootVisitor[type] || (rootVisitor[type] = {});
      mergePair(nodeVisitor, visitorType);
    }
  }
  return rootVisitor;
}
function wrapWithStateOrWrapper(oldVisitor, state, wrapper) {
  const newVisitor = {};
  for (const key of Object.keys(oldVisitor)) {
    let fns = oldVisitor[key];
    if (!Array.isArray(fns)) continue;
    fns = fns.map(function (fn) {
      let newFn = fn;
      if (state) {
        newFn = function (path) {
          return fn.call(state, path, state);
        };
      }
      if (wrapper) {
        newFn = wrapper(state.key, key, newFn);
      }
      if (newFn !== fn) {
        newFn.toString = () => fn.toString();
      }
      return newFn;
    });
    newVisitor[key] = fns;
  }
  return newVisitor;
}
function ensureEntranceObjects(obj) {
  for (const key of Object.keys(obj)) {
    if (shouldIgnoreKey(key)) continue;
    const fns = obj[key];
    if (typeof fns === "function") {
      obj[key] = {
        enter: fns
      };
    }
  }
}
function ensureCallbackArrays(obj) {
  if (obj.enter && !Array.isArray(obj.enter)) obj.enter = [obj.enter];
  if (obj.exit && !Array.isArray(obj.exit)) obj.exit = [obj.exit];
}
function wrapCheck(nodeType, fn) {
  const newFn = function (path) {
    if (path[`is${nodeType}`]()) {
      return fn.apply(this, arguments);
    }
  };
  newFn.toString = () => fn.toString();
  return newFn;
}
function shouldIgnoreKey(key) {
  if (key[0] === "_") return true;
  if (key === "enter" || key === "exit" || key === "shouldSkip") return true;
  if (key === "denylist" || key === "noScope" || key === "skipKeys" || key === "blacklist") {
    return true;
  }
  return false;
}
function mergePair(dest, src) {
  for (const key of Object.keys(src)) {
    dest[key] = [].concat(dest[key] || [], src[key]);
  }
}

//# sourceMappingURL=visitors.js.map

}, function(modId) { var map = {"./path/lib/virtual-types":1679363156218}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679363156218, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Var = exports.User = exports.Statement = exports.SpreadProperty = exports.Scope = exports.RestProperty = exports.ReferencedMemberExpression = exports.ReferencedIdentifier = exports.Referenced = exports.Pure = exports.NumericLiteralTypeAnnotation = exports.Generated = exports.ForAwaitStatement = exports.Flow = exports.Expression = exports.ExistentialTypeParam = exports.BlockScoped = exports.BindingIdentifier = void 0;
const ReferencedIdentifier = ["Identifier", "JSXIdentifier"];
exports.ReferencedIdentifier = ReferencedIdentifier;
const ReferencedMemberExpression = ["MemberExpression"];
exports.ReferencedMemberExpression = ReferencedMemberExpression;
const BindingIdentifier = ["Identifier"];
exports.BindingIdentifier = BindingIdentifier;
const Statement = ["Statement"];
exports.Statement = Statement;
const Expression = ["Expression"];
exports.Expression = Expression;
const Scope = ["Scopable", "Pattern"];
exports.Scope = Scope;
const Referenced = null;
exports.Referenced = Referenced;
const BlockScoped = null;
exports.BlockScoped = BlockScoped;
const Var = ["VariableDeclaration"];
exports.Var = Var;
const User = null;
exports.User = User;
const Generated = null;
exports.Generated = Generated;
const Pure = null;
exports.Pure = Pure;
const Flow = ["Flow", "ImportDeclaration", "ExportDeclaration", "ImportSpecifier"];
exports.Flow = Flow;
const RestProperty = ["RestElement"];
exports.RestProperty = RestProperty;
const SpreadProperty = ["RestElement"];
exports.SpreadProperty = SpreadProperty;
const ExistentialTypeParam = ["ExistsTypeAnnotation"];
exports.ExistentialTypeParam = ExistentialTypeParam;
const NumericLiteralTypeAnnotation = ["NumberLiteralTypeAnnotation"];
exports.NumericLiteralTypeAnnotation = NumericLiteralTypeAnnotation;
const ForAwaitStatement = ["ForOfStatement"];
exports.ForAwaitStatement = ForAwaitStatement;

//# sourceMappingURL=virtual-types.js.map

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679363156219, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clear = clear;
exports.clearPath = clearPath;
exports.clearScope = clearScope;
exports.scope = exports.path = void 0;
let path = new WeakMap();
exports.path = path;
let scope = new WeakMap();
exports.scope = scope;
function clear() {
  clearPath();
  clearScope();
}
function clearPath() {
  exports.path = path = new WeakMap();
}
function clearScope() {
  exports.scope = scope = new WeakMap();
}

//# sourceMappingURL=cache.js.map

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679363156220, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.traverseNode = traverseNode;
var _context = require("./context");
var _t = require("@babel/types");
const {
  VISITOR_KEYS
} = _t;
function traverseNode(node, opts, scope, state, path, skipKeys) {
  const keys = VISITOR_KEYS[node.type];
  if (!keys) return false;
  const context = new _context.default(scope, opts, state, path);
  for (const key of keys) {
    if (skipKeys && skipKeys[key]) continue;
    if (context.visit(node, key)) {
      return true;
    }
  }
  return false;
}

//# sourceMappingURL=traverse-node.js.map

}, function(modId) { var map = {"./context":1679363156221}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679363156221, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _path = require("./path");
var _t = require("@babel/types");
const {
  VISITOR_KEYS
} = _t;
class TraversalContext {
  constructor(scope, opts, state, parentPath) {
    this.queue = null;
    this.priorityQueue = null;
    this.parentPath = parentPath;
    this.scope = scope;
    this.state = state;
    this.opts = opts;
  }
  shouldVisit(node) {
    const opts = this.opts;
    if (opts.enter || opts.exit) return true;
    if (opts[node.type]) return true;
    const keys = VISITOR_KEYS[node.type];
    if (!(keys != null && keys.length)) return false;
    for (const key of keys) {
      if (node[key]) {
        return true;
      }
    }
    return false;
  }
  create(node, container, key, listKey) {
    return _path.default.get({
      parentPath: this.parentPath,
      parent: node,
      container,
      key: key,
      listKey
    });
  }
  maybeQueue(path, notPriority) {
    if (this.queue) {
      if (notPriority) {
        this.queue.push(path);
      } else {
        this.priorityQueue.push(path);
      }
    }
  }
  visitMultiple(container, parent, listKey) {
    if (container.length === 0) return false;
    const queue = [];
    for (let key = 0; key < container.length; key++) {
      const node = container[key];
      if (node && this.shouldVisit(node)) {
        queue.push(this.create(parent, container, key, listKey));
      }
    }
    return this.visitQueue(queue);
  }
  visitSingle(node, key) {
    if (this.shouldVisit(node[key])) {
      return this.visitQueue([this.create(node, node, key)]);
    } else {
      return false;
    }
  }
  visitQueue(queue) {
    this.queue = queue;
    this.priorityQueue = [];
    const visited = new WeakSet();
    let stop = false;
    for (const path of queue) {
      path.resync();
      if (path.contexts.length === 0 || path.contexts[path.contexts.length - 1] !== this) {
        path.pushContext(this);
      }
      if (path.key === null) continue;
      const {
        node
      } = path;
      if (visited.has(node)) continue;
      if (node) visited.add(node);
      if (path.visit()) {
        stop = true;
        break;
      }
      if (this.priorityQueue.length) {
        stop = this.visitQueue(this.priorityQueue);
        this.priorityQueue = [];
        this.queue = queue;
        if (stop) break;
      }
    }
    for (const path of queue) {
      path.popContext();
    }
    this.queue = null;
    return stop;
  }
  visit(node, key) {
    const nodes = node[key];
    if (!nodes) return false;
    if (Array.isArray(nodes)) {
      return this.visitMultiple(nodes, node, key);
    } else {
      return this.visitSingle(node, key);
    }
  }
}
exports.default = TraversalContext;

//# sourceMappingURL=context.js.map

}, function(modId) { var map = {"./path":1679363156222}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679363156222, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.SHOULD_STOP = exports.SHOULD_SKIP = exports.REMOVED = void 0;
var virtualTypes = require("./lib/virtual-types");
var _debug = require("debug");
var _index = require("../index");
var _scope = require("../scope");
var _t = require("@babel/types");
var t = _t;
var _cache = require("../cache");
var _generator = require("@babel/generator");
var NodePath_ancestry = require("./ancestry");
var NodePath_inference = require("./inference");
var NodePath_replacement = require("./replacement");
var NodePath_evaluation = require("./evaluation");
var NodePath_conversion = require("./conversion");
var NodePath_introspection = require("./introspection");
var NodePath_context = require("./context");
var NodePath_removal = require("./removal");
var NodePath_modification = require("./modification");
var NodePath_family = require("./family");
var NodePath_comments = require("./comments");
var NodePath_virtual_types_validator = require("./lib/virtual-types-validator");
const {
  validate
} = _t;
const debug = _debug("babel");
const REMOVED = 1 << 0;
exports.REMOVED = REMOVED;
const SHOULD_STOP = 1 << 1;
exports.SHOULD_STOP = SHOULD_STOP;
const SHOULD_SKIP = 1 << 2;
exports.SHOULD_SKIP = SHOULD_SKIP;
class NodePath {
  constructor(hub, parent) {
    this.contexts = [];
    this.state = null;
    this.opts = null;
    this._traverseFlags = 0;
    this.skipKeys = null;
    this.parentPath = null;
    this.container = null;
    this.listKey = null;
    this.key = null;
    this.node = null;
    this.type = null;
    this.parent = parent;
    this.hub = hub;
    this.data = null;
    this.context = null;
    this.scope = null;
  }
  static get({
    hub,
    parentPath,
    parent,
    container,
    listKey,
    key
  }) {
    if (!hub && parentPath) {
      hub = parentPath.hub;
    }
    if (!parent) {
      throw new Error("To get a node path the parent needs to exist");
    }
    const targetNode = container[key];
    let paths = _cache.path.get(parent);
    if (!paths) {
      paths = new Map();
      _cache.path.set(parent, paths);
    }
    let path = paths.get(targetNode);
    if (!path) {
      path = new NodePath(hub, parent);
      if (targetNode) paths.set(targetNode, path);
    }
    path.setup(parentPath, container, listKey, key);
    return path;
  }
  getScope(scope) {
    return this.isScope() ? new _scope.default(this) : scope;
  }
  setData(key, val) {
    if (this.data == null) {
      this.data = Object.create(null);
    }
    return this.data[key] = val;
  }
  getData(key, def) {
    if (this.data == null) {
      this.data = Object.create(null);
    }
    let val = this.data[key];
    if (val === undefined && def !== undefined) val = this.data[key] = def;
    return val;
  }
  hasNode() {
    return this.node != null;
  }
  buildCodeFrameError(msg, Error = SyntaxError) {
    return this.hub.buildError(this.node, msg, Error);
  }
  traverse(visitor, state) {
    (0, _index.default)(this.node, visitor, this.scope, state, this);
  }
  set(key, node) {
    validate(this.node, key, node);
    this.node[key] = node;
  }
  getPathLocation() {
    const parts = [];
    let path = this;
    do {
      let key = path.key;
      if (path.inList) key = `${path.listKey}[${key}]`;
      parts.unshift(key);
    } while (path = path.parentPath);
    return parts.join(".");
  }
  debug(message) {
    if (!debug.enabled) return;
    debug(`${this.getPathLocation()} ${this.type}: ${message}`);
  }
  toString() {
    return (0, _generator.default)(this.node).code;
  }
  get inList() {
    return !!this.listKey;
  }
  set inList(inList) {
    if (!inList) {
      this.listKey = null;
    }
  }
  get parentKey() {
    return this.listKey || this.key;
  }
  get shouldSkip() {
    return !!(this._traverseFlags & SHOULD_SKIP);
  }
  set shouldSkip(v) {
    if (v) {
      this._traverseFlags |= SHOULD_SKIP;
    } else {
      this._traverseFlags &= ~SHOULD_SKIP;
    }
  }
  get shouldStop() {
    return !!(this._traverseFlags & SHOULD_STOP);
  }
  set shouldStop(v) {
    if (v) {
      this._traverseFlags |= SHOULD_STOP;
    } else {
      this._traverseFlags &= ~SHOULD_STOP;
    }
  }
  get removed() {
    return !!(this._traverseFlags & REMOVED);
  }
  set removed(v) {
    if (v) {
      this._traverseFlags |= REMOVED;
    } else {
      this._traverseFlags &= ~REMOVED;
    }
  }
}
Object.assign(NodePath.prototype, NodePath_ancestry, NodePath_inference, NodePath_replacement, NodePath_evaluation, NodePath_conversion, NodePath_introspection, NodePath_context, NodePath_removal, NodePath_modification, NodePath_family, NodePath_comments);
{
  NodePath.prototype._guessExecutionStatusRelativeToDifferentFunctions = NodePath_introspection._guessExecutionStatusRelativeTo;
}
for (const type of t.TYPES) {
  const typeKey = `is${type}`;
  const fn = t[typeKey];
  NodePath.prototype[typeKey] = function (opts) {
    return fn(this.node, opts);
  };
  NodePath.prototype[`assert${type}`] = function (opts) {
    if (!fn(this.node, opts)) {
      throw new TypeError(`Expected node path of type ${type}`);
    }
  };
}
Object.assign(NodePath.prototype, NodePath_virtual_types_validator);
for (const type of Object.keys(virtualTypes)) {
  if (type[0] === "_") continue;
  if (!t.TYPES.includes(type)) t.TYPES.push(type);
}
var _default = NodePath;
exports.default = _default;

//# sourceMappingURL=index.js.map

}, function(modId) { var map = {"./lib/virtual-types":1679363156218,"../index":1679363156216,"../scope":1679363156223,"../cache":1679363156219,"./ancestry":1679363156226,"./inference":1679363156227,"./replacement":1679363156231,"./evaluation":1679363156232,"./conversion":1679363156233,"./introspection":1679363156234,"./context":1679363156235,"./removal":1679363156236,"./modification":1679363156238,"./family":1679363156240,"./comments":1679363156241,"./lib/virtual-types-validator":1679363156242}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679363156223, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _renamer = require("./lib/renamer");
var _index = require("../index");
var _binding = require("./binding");
var _globals = require("globals");
var _t = require("@babel/types");
var _cache = require("../cache");
const {
  NOT_LOCAL_BINDING,
  callExpression,
  cloneNode,
  getBindingIdentifiers,
  identifier,
  isArrayExpression,
  isBinary,
  isClass,
  isClassBody,
  isClassDeclaration,
  isExportAllDeclaration,
  isExportDefaultDeclaration,
  isExportNamedDeclaration,
  isFunctionDeclaration,
  isIdentifier,
  isImportDeclaration,
  isLiteral,
  isMethod,
  isModuleSpecifier,
  isNullLiteral,
  isObjectExpression,
  isProperty,
  isPureish,
  isRegExpLiteral,
  isSuper,
  isTaggedTemplateExpression,
  isTemplateLiteral,
  isThisExpression,
  isUnaryExpression,
  isVariableDeclaration,
  matchesPattern,
  memberExpression,
  numericLiteral,
  toIdentifier,
  unaryExpression,
  variableDeclaration,
  variableDeclarator,
  isRecordExpression,
  isTupleExpression,
  isObjectProperty,
  isTopicReference,
  isMetaProperty,
  isPrivateName,
  isExportDeclaration
} = _t;
function gatherNodeParts(node, parts) {
  switch (node == null ? void 0 : node.type) {
    default:
      if (isImportDeclaration(node) || isExportDeclaration(node)) {
        if ((isExportAllDeclaration(node) || isExportNamedDeclaration(node) || isImportDeclaration(node)) && node.source) {
          gatherNodeParts(node.source, parts);
        } else if ((isExportNamedDeclaration(node) || isImportDeclaration(node)) && node.specifiers && node.specifiers.length) {
          for (const e of node.specifiers) gatherNodeParts(e, parts);
        } else if ((isExportDefaultDeclaration(node) || isExportNamedDeclaration(node)) && node.declaration) {
          gatherNodeParts(node.declaration, parts);
        }
      } else if (isModuleSpecifier(node)) {
        gatherNodeParts(node.local, parts);
      } else if (isLiteral(node) && !isNullLiteral(node) && !isRegExpLiteral(node) && !isTemplateLiteral(node)) {
        parts.push(node.value);
      }
      break;
    case "MemberExpression":
    case "OptionalMemberExpression":
    case "JSXMemberExpression":
      gatherNodeParts(node.object, parts);
      gatherNodeParts(node.property, parts);
      break;
    case "Identifier":
    case "JSXIdentifier":
      parts.push(node.name);
      break;
    case "CallExpression":
    case "OptionalCallExpression":
    case "NewExpression":
      gatherNodeParts(node.callee, parts);
      break;
    case "ObjectExpression":
    case "ObjectPattern":
      for (const e of node.properties) {
        gatherNodeParts(e, parts);
      }
      break;
    case "SpreadElement":
    case "RestElement":
      gatherNodeParts(node.argument, parts);
      break;
    case "ObjectProperty":
    case "ObjectMethod":
    case "ClassProperty":
    case "ClassMethod":
    case "ClassPrivateProperty":
    case "ClassPrivateMethod":
      gatherNodeParts(node.key, parts);
      break;
    case "ThisExpression":
      parts.push("this");
      break;
    case "Super":
      parts.push("super");
      break;
    case "Import":
      parts.push("import");
      break;
    case "DoExpression":
      parts.push("do");
      break;
    case "YieldExpression":
      parts.push("yield");
      gatherNodeParts(node.argument, parts);
      break;
    case "AwaitExpression":
      parts.push("await");
      gatherNodeParts(node.argument, parts);
      break;
    case "AssignmentExpression":
      gatherNodeParts(node.left, parts);
      break;
    case "VariableDeclarator":
      gatherNodeParts(node.id, parts);
      break;
    case "FunctionExpression":
    case "FunctionDeclaration":
    case "ClassExpression":
    case "ClassDeclaration":
      gatherNodeParts(node.id, parts);
      break;
    case "PrivateName":
      gatherNodeParts(node.id, parts);
      break;
    case "ParenthesizedExpression":
      gatherNodeParts(node.expression, parts);
      break;
    case "UnaryExpression":
    case "UpdateExpression":
      gatherNodeParts(node.argument, parts);
      break;
    case "MetaProperty":
      gatherNodeParts(node.meta, parts);
      gatherNodeParts(node.property, parts);
      break;
    case "JSXElement":
      gatherNodeParts(node.openingElement, parts);
      break;
    case "JSXOpeningElement":
      gatherNodeParts(node.name, parts);
      break;
    case "JSXFragment":
      gatherNodeParts(node.openingFragment, parts);
      break;
    case "JSXOpeningFragment":
      parts.push("Fragment");
      break;
    case "JSXNamespacedName":
      gatherNodeParts(node.namespace, parts);
      gatherNodeParts(node.name, parts);
      break;
  }
}
const collectorVisitor = {
  ForStatement(path) {
    const declar = path.get("init");
    if (declar.isVar()) {
      const {
        scope
      } = path;
      const parentScope = scope.getFunctionParent() || scope.getProgramParent();
      parentScope.registerBinding("var", declar);
    }
  },
  Declaration(path) {
    if (path.isBlockScoped()) return;
    if (path.isImportDeclaration()) return;
    if (path.isExportDeclaration()) return;
    const parent = path.scope.getFunctionParent() || path.scope.getProgramParent();
    parent.registerDeclaration(path);
  },
  ImportDeclaration(path) {
    const parent = path.scope.getBlockParent();
    parent.registerDeclaration(path);
  },
  ReferencedIdentifier(path, state) {
    state.references.push(path);
  },
  ForXStatement(path, state) {
    const left = path.get("left");
    if (left.isPattern() || left.isIdentifier()) {
      state.constantViolations.push(path);
    } else if (left.isVar()) {
      const {
        scope
      } = path;
      const parentScope = scope.getFunctionParent() || scope.getProgramParent();
      parentScope.registerBinding("var", left);
    }
  },
  ExportDeclaration: {
    exit(path) {
      const {
        node,
        scope
      } = path;
      if (isExportAllDeclaration(node)) return;
      const declar = node.declaration;
      if (isClassDeclaration(declar) || isFunctionDeclaration(declar)) {
        const id = declar.id;
        if (!id) return;
        const binding = scope.getBinding(id.name);
        binding == null ? void 0 : binding.reference(path);
      } else if (isVariableDeclaration(declar)) {
        for (const decl of declar.declarations) {
          for (const name of Object.keys(getBindingIdentifiers(decl))) {
            const binding = scope.getBinding(name);
            binding == null ? void 0 : binding.reference(path);
          }
        }
      }
    }
  },
  LabeledStatement(path) {
    path.scope.getBlockParent().registerDeclaration(path);
  },
  AssignmentExpression(path, state) {
    state.assignments.push(path);
  },
  UpdateExpression(path, state) {
    state.constantViolations.push(path);
  },
  UnaryExpression(path, state) {
    if (path.node.operator === "delete") {
      state.constantViolations.push(path);
    }
  },
  BlockScoped(path) {
    let scope = path.scope;
    if (scope.path === path) scope = scope.parent;
    const parent = scope.getBlockParent();
    parent.registerDeclaration(path);
    if (path.isClassDeclaration() && path.node.id) {
      const id = path.node.id;
      const name = id.name;
      path.scope.bindings[name] = path.scope.parent.getBinding(name);
    }
  },
  CatchClause(path) {
    path.scope.registerBinding("let", path);
  },
  Function(path) {
    const params = path.get("params");
    for (const param of params) {
      path.scope.registerBinding("param", param);
    }
    if (path.isFunctionExpression() && path.has("id") && !path.get("id").node[NOT_LOCAL_BINDING]) {
      path.scope.registerBinding("local", path.get("id"), path);
    }
  },
  ClassExpression(path) {
    if (path.has("id") && !path.get("id").node[NOT_LOCAL_BINDING]) {
      path.scope.registerBinding("local", path);
    }
  }
};
let uid = 0;
class Scope {
  constructor(path) {
    this.uid = void 0;
    this.path = void 0;
    this.block = void 0;
    this.labels = void 0;
    this.inited = void 0;
    this.bindings = void 0;
    this.references = void 0;
    this.globals = void 0;
    this.uids = void 0;
    this.data = void 0;
    this.crawling = void 0;
    const {
      node
    } = path;
    const cached = _cache.scope.get(node);
    if ((cached == null ? void 0 : cached.path) === path) {
      return cached;
    }
    _cache.scope.set(node, this);
    this.uid = uid++;
    this.block = node;
    this.path = path;
    this.labels = new Map();
    this.inited = false;
  }
  get parent() {
    var _parent;
    let parent,
      path = this.path;
    do {
      const shouldSkip = path.key === "key" || path.listKey === "decorators";
      path = path.parentPath;
      if (shouldSkip && path.isMethod()) path = path.parentPath;
      if (path && path.isScope()) parent = path;
    } while (path && !parent);
    return (_parent = parent) == null ? void 0 : _parent.scope;
  }
  get parentBlock() {
    return this.path.parent;
  }
  get hub() {
    return this.path.hub;
  }
  traverse(node, opts, state) {
    (0, _index.default)(node, opts, this, state, this.path);
  }
  generateDeclaredUidIdentifier(name) {
    const id = this.generateUidIdentifier(name);
    this.push({
      id
    });
    return cloneNode(id);
  }
  generateUidIdentifier(name) {
    return identifier(this.generateUid(name));
  }
  generateUid(name = "temp") {
    name = toIdentifier(name).replace(/^_+/, "").replace(/[0-9]+$/g, "");
    let uid;
    let i = 1;
    do {
      uid = this._generateUid(name, i);
      i++;
    } while (this.hasLabel(uid) || this.hasBinding(uid) || this.hasGlobal(uid) || this.hasReference(uid));
    const program = this.getProgramParent();
    program.references[uid] = true;
    program.uids[uid] = true;
    return uid;
  }
  _generateUid(name, i) {
    let id = name;
    if (i > 1) id += i;
    return `_${id}`;
  }
  generateUidBasedOnNode(node, defaultName) {
    const parts = [];
    gatherNodeParts(node, parts);
    let id = parts.join("$");
    id = id.replace(/^_/, "") || defaultName || "ref";
    return this.generateUid(id.slice(0, 20));
  }
  generateUidIdentifierBasedOnNode(node, defaultName) {
    return identifier(this.generateUidBasedOnNode(node, defaultName));
  }
  isStatic(node) {
    if (isThisExpression(node) || isSuper(node) || isTopicReference(node)) {
      return true;
    }
    if (isIdentifier(node)) {
      const binding = this.getBinding(node.name);
      if (binding) {
        return binding.constant;
      } else {
        return this.hasBinding(node.name);
      }
    }
    return false;
  }
  maybeGenerateMemoised(node, dontPush) {
    if (this.isStatic(node)) {
      return null;
    } else {
      const id = this.generateUidIdentifierBasedOnNode(node);
      if (!dontPush) {
        this.push({
          id
        });
        return cloneNode(id);
      }
      return id;
    }
  }
  checkBlockScopedCollisions(local, kind, name, id) {
    if (kind === "param") return;
    if (local.kind === "local") return;
    const duplicate = kind === "let" || local.kind === "let" || local.kind === "const" || local.kind === "module" || local.kind === "param" && kind === "const";
    if (duplicate) {
      throw this.hub.buildError(id, `Duplicate declaration "${name}"`, TypeError);
    }
  }
  rename(oldName, newName) {
    const binding = this.getBinding(oldName);
    if (binding) {
      newName || (newName = this.generateUidIdentifier(oldName).name);
      const renamer = new _renamer.default(binding, oldName, newName);
      {
        renamer.rename(arguments[2]);
      }
    }
  }
  _renameFromMap(map, oldName, newName, value) {
    if (map[oldName]) {
      map[newName] = value;
      map[oldName] = null;
    }
  }
  dump() {
    const sep = "-".repeat(60);
    console.log(sep);
    let scope = this;
    do {
      console.log("#", scope.block.type);
      for (const name of Object.keys(scope.bindings)) {
        const binding = scope.bindings[name];
        console.log(" -", name, {
          constant: binding.constant,
          references: binding.references,
          violations: binding.constantViolations.length,
          kind: binding.kind
        });
      }
    } while (scope = scope.parent);
    console.log(sep);
  }
  toArray(node, i, arrayLikeIsIterable) {
    if (isIdentifier(node)) {
      const binding = this.getBinding(node.name);
      if (binding != null && binding.constant && binding.path.isGenericType("Array")) {
        return node;
      }
    }
    if (isArrayExpression(node)) {
      return node;
    }
    if (isIdentifier(node, {
      name: "arguments"
    })) {
      return callExpression(memberExpression(memberExpression(memberExpression(identifier("Array"), identifier("prototype")), identifier("slice")), identifier("call")), [node]);
    }
    let helperName;
    const args = [node];
    if (i === true) {
      helperName = "toConsumableArray";
    } else if (typeof i === "number") {
      args.push(numericLiteral(i));
      helperName = "slicedToArray";
    } else {
      helperName = "toArray";
    }
    if (arrayLikeIsIterable) {
      args.unshift(this.hub.addHelper(helperName));
      helperName = "maybeArrayLike";
    }
    return callExpression(this.hub.addHelper(helperName), args);
  }
  hasLabel(name) {
    return !!this.getLabel(name);
  }
  getLabel(name) {
    return this.labels.get(name);
  }
  registerLabel(path) {
    this.labels.set(path.node.label.name, path);
  }
  registerDeclaration(path) {
    if (path.isLabeledStatement()) {
      this.registerLabel(path);
    } else if (path.isFunctionDeclaration()) {
      this.registerBinding("hoisted", path.get("id"), path);
    } else if (path.isVariableDeclaration()) {
      const declarations = path.get("declarations");
      const {
        kind
      } = path.node;
      for (const declar of declarations) {
        this.registerBinding(kind === "using" ? "const" : kind, declar);
      }
    } else if (path.isClassDeclaration()) {
      if (path.node.declare) return;
      this.registerBinding("let", path);
    } else if (path.isImportDeclaration()) {
      const isTypeDeclaration = path.node.importKind === "type" || path.node.importKind === "typeof";
      const specifiers = path.get("specifiers");
      for (const specifier of specifiers) {
        const isTypeSpecifier = isTypeDeclaration || specifier.isImportSpecifier() && (specifier.node.importKind === "type" || specifier.node.importKind === "typeof");
        this.registerBinding(isTypeSpecifier ? "unknown" : "module", specifier);
      }
    } else if (path.isExportDeclaration()) {
      const declar = path.get("declaration");
      if (declar.isClassDeclaration() || declar.isFunctionDeclaration() || declar.isVariableDeclaration()) {
        this.registerDeclaration(declar);
      }
    } else {
      this.registerBinding("unknown", path);
    }
  }
  buildUndefinedNode() {
    return unaryExpression("void", numericLiteral(0), true);
  }
  registerConstantViolation(path) {
    const ids = path.getBindingIdentifiers();
    for (const name of Object.keys(ids)) {
      const binding = this.getBinding(name);
      if (binding) binding.reassign(path);
    }
  }
  registerBinding(kind, path, bindingPath = path) {
    if (!kind) throw new ReferenceError("no `kind`");
    if (path.isVariableDeclaration()) {
      const declarators = path.get("declarations");
      for (const declar of declarators) {
        this.registerBinding(kind, declar);
      }
      return;
    }
    const parent = this.getProgramParent();
    const ids = path.getOuterBindingIdentifiers(true);
    for (const name of Object.keys(ids)) {
      parent.references[name] = true;
      for (const id of ids[name]) {
        const local = this.getOwnBinding(name);
        if (local) {
          if (local.identifier === id) continue;
          this.checkBlockScopedCollisions(local, kind, name, id);
        }
        if (local) {
          this.registerConstantViolation(bindingPath);
        } else {
          this.bindings[name] = new _binding.default({
            identifier: id,
            scope: this,
            path: bindingPath,
            kind: kind
          });
        }
      }
    }
  }
  addGlobal(node) {
    this.globals[node.name] = node;
  }
  hasUid(name) {
    let scope = this;
    do {
      if (scope.uids[name]) return true;
    } while (scope = scope.parent);
    return false;
  }
  hasGlobal(name) {
    let scope = this;
    do {
      if (scope.globals[name]) return true;
    } while (scope = scope.parent);
    return false;
  }
  hasReference(name) {
    return !!this.getProgramParent().references[name];
  }
  isPure(node, constantsOnly) {
    if (isIdentifier(node)) {
      const binding = this.getBinding(node.name);
      if (!binding) return false;
      if (constantsOnly) return binding.constant;
      return true;
    } else if (isThisExpression(node) || isMetaProperty(node) || isTopicReference(node) || isPrivateName(node)) {
      return true;
    } else if (isClass(node)) {
      var _node$decorators;
      if (node.superClass && !this.isPure(node.superClass, constantsOnly)) {
        return false;
      }
      if (((_node$decorators = node.decorators) == null ? void 0 : _node$decorators.length) > 0) {
        return false;
      }
      return this.isPure(node.body, constantsOnly);
    } else if (isClassBody(node)) {
      for (const method of node.body) {
        if (!this.isPure(method, constantsOnly)) return false;
      }
      return true;
    } else if (isBinary(node)) {
      return this.isPure(node.left, constantsOnly) && this.isPure(node.right, constantsOnly);
    } else if (isArrayExpression(node) || isTupleExpression(node)) {
      for (const elem of node.elements) {
        if (elem !== null && !this.isPure(elem, constantsOnly)) return false;
      }
      return true;
    } else if (isObjectExpression(node) || isRecordExpression(node)) {
      for (const prop of node.properties) {
        if (!this.isPure(prop, constantsOnly)) return false;
      }
      return true;
    } else if (isMethod(node)) {
      var _node$decorators2;
      if (node.computed && !this.isPure(node.key, constantsOnly)) return false;
      if (((_node$decorators2 = node.decorators) == null ? void 0 : _node$decorators2.length) > 0) {
        return false;
      }
      return true;
    } else if (isProperty(node)) {
      var _node$decorators3;
      if (node.computed && !this.isPure(node.key, constantsOnly)) return false;
      if (((_node$decorators3 = node.decorators) == null ? void 0 : _node$decorators3.length) > 0) {
        return false;
      }
      if (isObjectProperty(node) || node.static) {
        if (node.value !== null && !this.isPure(node.value, constantsOnly)) {
          return false;
        }
      }
      return true;
    } else if (isUnaryExpression(node)) {
      return this.isPure(node.argument, constantsOnly);
    } else if (isTaggedTemplateExpression(node)) {
      return matchesPattern(node.tag, "String.raw") && !this.hasBinding("String", true) && this.isPure(node.quasi, constantsOnly);
    } else if (isTemplateLiteral(node)) {
      for (const expression of node.expressions) {
        if (!this.isPure(expression, constantsOnly)) return false;
      }
      return true;
    } else {
      return isPureish(node);
    }
  }
  setData(key, val) {
    return this.data[key] = val;
  }
  getData(key) {
    let scope = this;
    do {
      const data = scope.data[key];
      if (data != null) return data;
    } while (scope = scope.parent);
  }
  removeData(key) {
    let scope = this;
    do {
      const data = scope.data[key];
      if (data != null) scope.data[key] = null;
    } while (scope = scope.parent);
  }
  init() {
    if (!this.inited) {
      this.inited = true;
      this.crawl();
    }
  }
  crawl() {
    const path = this.path;
    this.references = Object.create(null);
    this.bindings = Object.create(null);
    this.globals = Object.create(null);
    this.uids = Object.create(null);
    this.data = Object.create(null);
    const programParent = this.getProgramParent();
    if (programParent.crawling) return;
    const state = {
      references: [],
      constantViolations: [],
      assignments: []
    };
    this.crawling = true;
    if (path.type !== "Program" && collectorVisitor._exploded) {
      for (const visit of collectorVisitor.enter) {
        visit(path, state);
      }
      const typeVisitors = collectorVisitor[path.type];
      if (typeVisitors) {
        for (const visit of typeVisitors.enter) {
          visit(path, state);
        }
      }
    }
    path.traverse(collectorVisitor, state);
    this.crawling = false;
    for (const path of state.assignments) {
      const ids = path.getBindingIdentifiers();
      for (const name of Object.keys(ids)) {
        if (path.scope.getBinding(name)) continue;
        programParent.addGlobal(ids[name]);
      }
      path.scope.registerConstantViolation(path);
    }
    for (const ref of state.references) {
      const binding = ref.scope.getBinding(ref.node.name);
      if (binding) {
        binding.reference(ref);
      } else {
        programParent.addGlobal(ref.node);
      }
    }
    for (const path of state.constantViolations) {
      path.scope.registerConstantViolation(path);
    }
  }
  push(opts) {
    let path = this.path;
    if (path.isPattern()) {
      path = this.getPatternParent().path;
    } else if (!path.isBlockStatement() && !path.isProgram()) {
      path = this.getBlockParent().path;
    }
    if (path.isSwitchStatement()) {
      path = (this.getFunctionParent() || this.getProgramParent()).path;
    }
    if (path.isLoop() || path.isCatchClause() || path.isFunction()) {
      path.ensureBlock();
      path = path.get("body");
    }
    const unique = opts.unique;
    const kind = opts.kind || "var";
    const blockHoist = opts._blockHoist == null ? 2 : opts._blockHoist;
    const dataKey = `declaration:${kind}:${blockHoist}`;
    let declarPath = !unique && path.getData(dataKey);
    if (!declarPath) {
      const declar = variableDeclaration(kind, []);
      declar._blockHoist = blockHoist;
      [declarPath] = path.unshiftContainer("body", [declar]);
      if (!unique) path.setData(dataKey, declarPath);
    }
    const declarator = variableDeclarator(opts.id, opts.init);
    const len = declarPath.node.declarations.push(declarator);
    path.scope.registerBinding(kind, declarPath.get("declarations")[len - 1]);
  }
  getProgramParent() {
    let scope = this;
    do {
      if (scope.path.isProgram()) {
        return scope;
      }
    } while (scope = scope.parent);
    throw new Error("Couldn't find a Program");
  }
  getFunctionParent() {
    let scope = this;
    do {
      if (scope.path.isFunctionParent()) {
        return scope;
      }
    } while (scope = scope.parent);
    return null;
  }
  getBlockParent() {
    let scope = this;
    do {
      if (scope.path.isBlockParent()) {
        return scope;
      }
    } while (scope = scope.parent);
    throw new Error("We couldn't find a BlockStatement, For, Switch, Function, Loop or Program...");
  }
  getPatternParent() {
    let scope = this;
    do {
      if (!scope.path.isPattern()) {
        return scope.getBlockParent();
      }
    } while (scope = scope.parent.parent);
    throw new Error("We couldn't find a BlockStatement, For, Switch, Function, Loop or Program...");
  }
  getAllBindings() {
    const ids = Object.create(null);
    let scope = this;
    do {
      for (const key of Object.keys(scope.bindings)) {
        if (key in ids === false) {
          ids[key] = scope.bindings[key];
        }
      }
      scope = scope.parent;
    } while (scope);
    return ids;
  }
  getAllBindingsOfKind(...kinds) {
    const ids = Object.create(null);
    for (const kind of kinds) {
      let scope = this;
      do {
        for (const name of Object.keys(scope.bindings)) {
          const binding = scope.bindings[name];
          if (binding.kind === kind) ids[name] = binding;
        }
        scope = scope.parent;
      } while (scope);
    }
    return ids;
  }
  bindingIdentifierEquals(name, node) {
    return this.getBindingIdentifier(name) === node;
  }
  getBinding(name) {
    let scope = this;
    let previousPath;
    do {
      const binding = scope.getOwnBinding(name);
      if (binding) {
        var _previousPath;
        if ((_previousPath = previousPath) != null && _previousPath.isPattern() && binding.kind !== "param" && binding.kind !== "local") {} else {
          return binding;
        }
      } else if (!binding && name === "arguments" && scope.path.isFunction() && !scope.path.isArrowFunctionExpression()) {
        break;
      }
      previousPath = scope.path;
    } while (scope = scope.parent);
  }
  getOwnBinding(name) {
    return this.bindings[name];
  }
  getBindingIdentifier(name) {
    var _this$getBinding;
    return (_this$getBinding = this.getBinding(name)) == null ? void 0 : _this$getBinding.identifier;
  }
  getOwnBindingIdentifier(name) {
    const binding = this.bindings[name];
    return binding == null ? void 0 : binding.identifier;
  }
  hasOwnBinding(name) {
    return !!this.getOwnBinding(name);
  }
  hasBinding(name, opts) {
    var _opts, _opts2, _opts3;
    if (!name) return false;
    if (this.hasOwnBinding(name)) return true;
    {
      if (typeof opts === "boolean") opts = {
        noGlobals: opts
      };
    }
    if (this.parentHasBinding(name, opts)) return true;
    if (!((_opts = opts) != null && _opts.noUids) && this.hasUid(name)) return true;
    if (!((_opts2 = opts) != null && _opts2.noGlobals) && Scope.globals.includes(name)) return true;
    if (!((_opts3 = opts) != null && _opts3.noGlobals) && Scope.contextVariables.includes(name)) return true;
    return false;
  }
  parentHasBinding(name, opts) {
    var _this$parent;
    return (_this$parent = this.parent) == null ? void 0 : _this$parent.hasBinding(name, opts);
  }
  moveBindingTo(name, scope) {
    const info = this.getBinding(name);
    if (info) {
      info.scope.removeOwnBinding(name);
      info.scope = scope;
      scope.bindings[name] = info;
    }
  }
  removeOwnBinding(name) {
    delete this.bindings[name];
  }
  removeBinding(name) {
    var _this$getBinding2;
    (_this$getBinding2 = this.getBinding(name)) == null ? void 0 : _this$getBinding2.scope.removeOwnBinding(name);
    let scope = this;
    do {
      if (scope.uids[name]) {
        scope.uids[name] = false;
      }
    } while (scope = scope.parent);
  }
}
exports.default = Scope;
Scope.globals = Object.keys(_globals.builtin);
Scope.contextVariables = ["arguments", "undefined", "Infinity", "NaN"];

//# sourceMappingURL=index.js.map

}, function(modId) { var map = {"./lib/renamer":1679363156224,"../index":1679363156216,"./binding":1679363156225,"../cache":1679363156219}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679363156224, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _helperSplitExportDeclaration = require("@babel/helper-split-export-declaration");
var t = require("@babel/types");
var _helperEnvironmentVisitor = require("@babel/helper-environment-visitor");
var _traverseNode = require("../../traverse-node");
var _visitors = require("../../visitors");
const renameVisitor = {
  ReferencedIdentifier({
    node
  }, state) {
    if (node.name === state.oldName) {
      node.name = state.newName;
    }
  },
  Scope(path, state) {
    if (!path.scope.bindingIdentifierEquals(state.oldName, state.binding.identifier)) {
      path.skip();
      if (path.isMethod()) {
        (0, _helperEnvironmentVisitor.requeueComputedKeyAndDecorators)(path);
      }
    }
  },
  "AssignmentExpression|Declaration|VariableDeclarator"(path, state) {
    if (path.isVariableDeclaration()) return;
    const ids = path.getOuterBindingIdentifiers();
    for (const name in ids) {
      if (name === state.oldName) ids[name].name = state.newName;
    }
  }
};
class Renamer {
  constructor(binding, oldName, newName) {
    this.newName = newName;
    this.oldName = oldName;
    this.binding = binding;
  }
  maybeConvertFromExportDeclaration(parentDeclar) {
    const maybeExportDeclar = parentDeclar.parentPath;
    if (!maybeExportDeclar.isExportDeclaration()) {
      return;
    }
    if (maybeExportDeclar.isExportDefaultDeclaration()) {
      const {
        declaration
      } = maybeExportDeclar.node;
      if (t.isDeclaration(declaration) && !declaration.id) {
        return;
      }
    }
    if (maybeExportDeclar.isExportAllDeclaration()) {
      return;
    }
    (0, _helperSplitExportDeclaration.default)(maybeExportDeclar);
  }
  maybeConvertFromClassFunctionDeclaration(path) {
    return path;
  }
  maybeConvertFromClassFunctionExpression(path) {
    return path;
  }
  rename() {
    const {
      binding,
      oldName,
      newName
    } = this;
    const {
      scope,
      path
    } = binding;
    const parentDeclar = path.find(path => path.isDeclaration() || path.isFunctionExpression() || path.isClassExpression());
    if (parentDeclar) {
      const bindingIds = parentDeclar.getOuterBindingIdentifiers();
      if (bindingIds[oldName] === binding.identifier) {
        this.maybeConvertFromExportDeclaration(parentDeclar);
      }
    }
    const blockToTraverse = arguments[0] || scope.block;
    (0, _traverseNode.traverseNode)(blockToTraverse, (0, _visitors.explode)(renameVisitor), scope, this, scope.path, {
      discriminant: true
    });
    if (!arguments[0]) {
      scope.removeOwnBinding(oldName);
      scope.bindings[newName] = binding;
      this.binding.identifier.name = newName;
    }
    if (parentDeclar) {
      this.maybeConvertFromClassFunctionDeclaration(path);
      this.maybeConvertFromClassFunctionExpression(path);
    }
  }
}
exports.default = Renamer;

//# sourceMappingURL=renamer.js.map

}, function(modId) { var map = {"../../traverse-node":1679363156220,"../../visitors":1679363156217}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679363156225, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
class Binding {
  constructor({
    identifier,
    scope,
    path,
    kind
  }) {
    this.identifier = void 0;
    this.scope = void 0;
    this.path = void 0;
    this.kind = void 0;
    this.constantViolations = [];
    this.constant = true;
    this.referencePaths = [];
    this.referenced = false;
    this.references = 0;
    this.identifier = identifier;
    this.scope = scope;
    this.path = path;
    this.kind = kind;
    if ((kind === "var" || kind === "hoisted") && isDeclaredInLoop(path || (() => {
      throw new Error("Internal Babel error: unreachable ");
    })())) {
      this.reassign(path);
    }
    this.clearValue();
  }
  deoptValue() {
    this.clearValue();
    this.hasDeoptedValue = true;
  }
  setValue(value) {
    if (this.hasDeoptedValue) return;
    this.hasValue = true;
    this.value = value;
  }
  clearValue() {
    this.hasDeoptedValue = false;
    this.hasValue = false;
    this.value = null;
  }
  reassign(path) {
    this.constant = false;
    if (this.constantViolations.indexOf(path) !== -1) {
      return;
    }
    this.constantViolations.push(path);
  }
  reference(path) {
    if (this.referencePaths.indexOf(path) !== -1) {
      return;
    }
    this.referenced = true;
    this.references++;
    this.referencePaths.push(path);
  }
  dereference() {
    this.references--;
    this.referenced = !!this.references;
  }
}
exports.default = Binding;
function isDeclaredInLoop(path) {
  for (let {
    parentPath,
    key
  } = path; parentPath; ({
    parentPath,
    key
  } = parentPath)) {
    if (parentPath.isFunctionParent()) return false;
    if (parentPath.isWhile() || parentPath.isForXStatement() || parentPath.isForStatement() && key === "body") {
      return true;
    }
  }
  return false;
}

//# sourceMappingURL=binding.js.map

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679363156226, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.find = find;
exports.findParent = findParent;
exports.getAncestry = getAncestry;
exports.getDeepestCommonAncestorFrom = getDeepestCommonAncestorFrom;
exports.getEarliestCommonAncestorFrom = getEarliestCommonAncestorFrom;
exports.getFunctionParent = getFunctionParent;
exports.getStatementParent = getStatementParent;
exports.inType = inType;
exports.isAncestor = isAncestor;
exports.isDescendant = isDescendant;
var _t = require("@babel/types");
const {
  VISITOR_KEYS
} = _t;
function findParent(callback) {
  let path = this;
  while (path = path.parentPath) {
    if (callback(path)) return path;
  }
  return null;
}
function find(callback) {
  let path = this;
  do {
    if (callback(path)) return path;
  } while (path = path.parentPath);
  return null;
}
function getFunctionParent() {
  return this.findParent(p => p.isFunction());
}
function getStatementParent() {
  let path = this;
  do {
    if (!path.parentPath || Array.isArray(path.container) && path.isStatement()) {
      break;
    } else {
      path = path.parentPath;
    }
  } while (path);
  if (path && (path.isProgram() || path.isFile())) {
    throw new Error("File/Program node, we can't possibly find a statement parent to this");
  }
  return path;
}
function getEarliestCommonAncestorFrom(paths) {
  return this.getDeepestCommonAncestorFrom(paths, function (deepest, i, ancestries) {
    let earliest;
    const keys = VISITOR_KEYS[deepest.type];
    for (const ancestry of ancestries) {
      const path = ancestry[i + 1];
      if (!earliest) {
        earliest = path;
        continue;
      }
      if (path.listKey && earliest.listKey === path.listKey) {
        if (path.key < earliest.key) {
          earliest = path;
          continue;
        }
      }
      const earliestKeyIndex = keys.indexOf(earliest.parentKey);
      const currentKeyIndex = keys.indexOf(path.parentKey);
      if (earliestKeyIndex > currentKeyIndex) {
        earliest = path;
      }
    }
    return earliest;
  });
}
function getDeepestCommonAncestorFrom(paths, filter) {
  if (!paths.length) {
    return this;
  }
  if (paths.length === 1) {
    return paths[0];
  }
  let minDepth = Infinity;
  let lastCommonIndex, lastCommon;
  const ancestries = paths.map(path => {
    const ancestry = [];
    do {
      ancestry.unshift(path);
    } while ((path = path.parentPath) && path !== this);
    if (ancestry.length < minDepth) {
      minDepth = ancestry.length;
    }
    return ancestry;
  });
  const first = ancestries[0];
  depthLoop: for (let i = 0; i < minDepth; i++) {
    const shouldMatch = first[i];
    for (const ancestry of ancestries) {
      if (ancestry[i] !== shouldMatch) {
        break depthLoop;
      }
    }
    lastCommonIndex = i;
    lastCommon = shouldMatch;
  }
  if (lastCommon) {
    if (filter) {
      return filter(lastCommon, lastCommonIndex, ancestries);
    } else {
      return lastCommon;
    }
  } else {
    throw new Error("Couldn't find intersection");
  }
}
function getAncestry() {
  let path = this;
  const paths = [];
  do {
    paths.push(path);
  } while (path = path.parentPath);
  return paths;
}
function isAncestor(maybeDescendant) {
  return maybeDescendant.isDescendant(this);
}
function isDescendant(maybeAncestor) {
  return !!this.findParent(parent => parent === maybeAncestor);
}
function inType(...candidateTypes) {
  let path = this;
  while (path) {
    for (const type of candidateTypes) {
      if (path.node.type === type) return true;
    }
    path = path.parentPath;
  }
  return false;
}

//# sourceMappingURL=ancestry.js.map

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679363156227, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._getTypeAnnotation = _getTypeAnnotation;
exports.baseTypeStrictlyMatches = baseTypeStrictlyMatches;
exports.couldBeBaseType = couldBeBaseType;
exports.getTypeAnnotation = getTypeAnnotation;
exports.isBaseType = isBaseType;
exports.isGenericType = isGenericType;
var inferers = require("./inferers");
var _t = require("@babel/types");
const {
  anyTypeAnnotation,
  isAnyTypeAnnotation,
  isArrayTypeAnnotation,
  isBooleanTypeAnnotation,
  isEmptyTypeAnnotation,
  isFlowBaseAnnotation,
  isGenericTypeAnnotation,
  isIdentifier,
  isMixedTypeAnnotation,
  isNumberTypeAnnotation,
  isStringTypeAnnotation,
  isTSArrayType,
  isTSTypeAnnotation,
  isTSTypeReference,
  isTupleTypeAnnotation,
  isTypeAnnotation,
  isUnionTypeAnnotation,
  isVoidTypeAnnotation,
  stringTypeAnnotation,
  voidTypeAnnotation
} = _t;
function getTypeAnnotation() {
  let type = this.getData("typeAnnotation");
  if (type != null) {
    return type;
  }
  type = this._getTypeAnnotation() || anyTypeAnnotation();
  if (isTypeAnnotation(type) || isTSTypeAnnotation(type)) {
    type = type.typeAnnotation;
  }
  this.setData("typeAnnotation", type);
  return type;
}
const typeAnnotationInferringNodes = new WeakSet();
function _getTypeAnnotation() {
  const node = this.node;
  if (!node) {
    if (this.key === "init" && this.parentPath.isVariableDeclarator()) {
      const declar = this.parentPath.parentPath;
      const declarParent = declar.parentPath;
      if (declar.key === "left" && declarParent.isForInStatement()) {
        return stringTypeAnnotation();
      }
      if (declar.key === "left" && declarParent.isForOfStatement()) {
        return anyTypeAnnotation();
      }
      return voidTypeAnnotation();
    } else {
      return;
    }
  }
  if (node.typeAnnotation) {
    return node.typeAnnotation;
  }
  if (typeAnnotationInferringNodes.has(node)) {
    return;
  }
  typeAnnotationInferringNodes.add(node);
  try {
    var _inferer;
    let inferer = inferers[node.type];
    if (inferer) {
      return inferer.call(this, node);
    }
    inferer = inferers[this.parentPath.type];
    if ((_inferer = inferer) != null && _inferer.validParent) {
      return this.parentPath.getTypeAnnotation();
    }
  } finally {
    typeAnnotationInferringNodes.delete(node);
  }
}
function isBaseType(baseName, soft) {
  return _isBaseType(baseName, this.getTypeAnnotation(), soft);
}
function _isBaseType(baseName, type, soft) {
  if (baseName === "string") {
    return isStringTypeAnnotation(type);
  } else if (baseName === "number") {
    return isNumberTypeAnnotation(type);
  } else if (baseName === "boolean") {
    return isBooleanTypeAnnotation(type);
  } else if (baseName === "any") {
    return isAnyTypeAnnotation(type);
  } else if (baseName === "mixed") {
    return isMixedTypeAnnotation(type);
  } else if (baseName === "empty") {
    return isEmptyTypeAnnotation(type);
  } else if (baseName === "void") {
    return isVoidTypeAnnotation(type);
  } else {
    if (soft) {
      return false;
    } else {
      throw new Error(`Unknown base type ${baseName}`);
    }
  }
}
function couldBeBaseType(name) {
  const type = this.getTypeAnnotation();
  if (isAnyTypeAnnotation(type)) return true;
  if (isUnionTypeAnnotation(type)) {
    for (const type2 of type.types) {
      if (isAnyTypeAnnotation(type2) || _isBaseType(name, type2, true)) {
        return true;
      }
    }
    return false;
  } else {
    return _isBaseType(name, type, true);
  }
}
function baseTypeStrictlyMatches(rightArg) {
  const left = this.getTypeAnnotation();
  const right = rightArg.getTypeAnnotation();
  if (!isAnyTypeAnnotation(left) && isFlowBaseAnnotation(left)) {
    return right.type === left.type;
  }
  return false;
}
function isGenericType(genericName) {
  const type = this.getTypeAnnotation();
  if (genericName === "Array") {
    if (isTSArrayType(type) || isArrayTypeAnnotation(type) || isTupleTypeAnnotation(type)) {
      return true;
    }
  }
  return isGenericTypeAnnotation(type) && isIdentifier(type.id, {
    name: genericName
  }) || isTSTypeReference(type) && isIdentifier(type.typeName, {
    name: genericName
  });
}

//# sourceMappingURL=index.js.map

}, function(modId) { var map = {"./inferers":1679363156228}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679363156228, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ArrayExpression = ArrayExpression;
exports.AssignmentExpression = AssignmentExpression;
exports.BinaryExpression = BinaryExpression;
exports.BooleanLiteral = BooleanLiteral;
exports.CallExpression = CallExpression;
exports.ConditionalExpression = ConditionalExpression;
exports.ClassDeclaration = exports.ClassExpression = exports.FunctionDeclaration = exports.ArrowFunctionExpression = exports.FunctionExpression = Func;
Object.defineProperty(exports, "Identifier", {
  enumerable: true,
  get: function () {
    return _infererReference.default;
  }
});
exports.LogicalExpression = LogicalExpression;
exports.NewExpression = NewExpression;
exports.NullLiteral = NullLiteral;
exports.NumericLiteral = NumericLiteral;
exports.ObjectExpression = ObjectExpression;
exports.ParenthesizedExpression = ParenthesizedExpression;
exports.RegExpLiteral = RegExpLiteral;
exports.RestElement = RestElement;
exports.SequenceExpression = SequenceExpression;
exports.StringLiteral = StringLiteral;
exports.TSAsExpression = TSAsExpression;
exports.TSNonNullExpression = TSNonNullExpression;
exports.TaggedTemplateExpression = TaggedTemplateExpression;
exports.TemplateLiteral = TemplateLiteral;
exports.TypeCastExpression = TypeCastExpression;
exports.UnaryExpression = UnaryExpression;
exports.UpdateExpression = UpdateExpression;
exports.VariableDeclarator = VariableDeclarator;
var _t = require("@babel/types");
var _infererReference = require("./inferer-reference");
var _util = require("./util");
const {
  BOOLEAN_BINARY_OPERATORS,
  BOOLEAN_UNARY_OPERATORS,
  NUMBER_BINARY_OPERATORS,
  NUMBER_UNARY_OPERATORS,
  STRING_UNARY_OPERATORS,
  anyTypeAnnotation,
  arrayTypeAnnotation,
  booleanTypeAnnotation,
  buildMatchMemberExpression,
  genericTypeAnnotation,
  identifier,
  nullLiteralTypeAnnotation,
  numberTypeAnnotation,
  stringTypeAnnotation,
  tupleTypeAnnotation,
  unionTypeAnnotation,
  voidTypeAnnotation,
  isIdentifier
} = _t;
function VariableDeclarator() {
  if (!this.get("id").isIdentifier()) return;
  return this.get("init").getTypeAnnotation();
}
function TypeCastExpression(node) {
  return node.typeAnnotation;
}
TypeCastExpression.validParent = true;
function TSAsExpression(node) {
  return node.typeAnnotation;
}
TSAsExpression.validParent = true;
function TSNonNullExpression() {
  return this.get("expression").getTypeAnnotation();
}
function NewExpression(node) {
  if (node.callee.type === "Identifier") {
    return genericTypeAnnotation(node.callee);
  }
}
function TemplateLiteral() {
  return stringTypeAnnotation();
}
function UnaryExpression(node) {
  const operator = node.operator;
  if (operator === "void") {
    return voidTypeAnnotation();
  } else if (NUMBER_UNARY_OPERATORS.indexOf(operator) >= 0) {
    return numberTypeAnnotation();
  } else if (STRING_UNARY_OPERATORS.indexOf(operator) >= 0) {
    return stringTypeAnnotation();
  } else if (BOOLEAN_UNARY_OPERATORS.indexOf(operator) >= 0) {
    return booleanTypeAnnotation();
  }
}
function BinaryExpression(node) {
  const operator = node.operator;
  if (NUMBER_BINARY_OPERATORS.indexOf(operator) >= 0) {
    return numberTypeAnnotation();
  } else if (BOOLEAN_BINARY_OPERATORS.indexOf(operator) >= 0) {
    return booleanTypeAnnotation();
  } else if (operator === "+") {
    const right = this.get("right");
    const left = this.get("left");
    if (left.isBaseType("number") && right.isBaseType("number")) {
      return numberTypeAnnotation();
    } else if (left.isBaseType("string") || right.isBaseType("string")) {
      return stringTypeAnnotation();
    }
    return unionTypeAnnotation([stringTypeAnnotation(), numberTypeAnnotation()]);
  }
}
function LogicalExpression() {
  const argumentTypes = [this.get("left").getTypeAnnotation(), this.get("right").getTypeAnnotation()];
  return (0, _util.createUnionType)(argumentTypes);
}
function ConditionalExpression() {
  const argumentTypes = [this.get("consequent").getTypeAnnotation(), this.get("alternate").getTypeAnnotation()];
  return (0, _util.createUnionType)(argumentTypes);
}
function SequenceExpression() {
  return this.get("expressions").pop().getTypeAnnotation();
}
function ParenthesizedExpression() {
  return this.get("expression").getTypeAnnotation();
}
function AssignmentExpression() {
  return this.get("right").getTypeAnnotation();
}
function UpdateExpression(node) {
  const operator = node.operator;
  if (operator === "++" || operator === "--") {
    return numberTypeAnnotation();
  }
}
function StringLiteral() {
  return stringTypeAnnotation();
}
function NumericLiteral() {
  return numberTypeAnnotation();
}
function BooleanLiteral() {
  return booleanTypeAnnotation();
}
function NullLiteral() {
  return nullLiteralTypeAnnotation();
}
function RegExpLiteral() {
  return genericTypeAnnotation(identifier("RegExp"));
}
function ObjectExpression() {
  return genericTypeAnnotation(identifier("Object"));
}
function ArrayExpression() {
  return genericTypeAnnotation(identifier("Array"));
}
function RestElement() {
  return ArrayExpression();
}
RestElement.validParent = true;
function Func() {
  return genericTypeAnnotation(identifier("Function"));
}
const isArrayFrom = buildMatchMemberExpression("Array.from");
const isObjectKeys = buildMatchMemberExpression("Object.keys");
const isObjectValues = buildMatchMemberExpression("Object.values");
const isObjectEntries = buildMatchMemberExpression("Object.entries");
function CallExpression() {
  const {
    callee
  } = this.node;
  if (isObjectKeys(callee)) {
    return arrayTypeAnnotation(stringTypeAnnotation());
  } else if (isArrayFrom(callee) || isObjectValues(callee) || isIdentifier(callee, {
    name: "Array"
  })) {
    return arrayTypeAnnotation(anyTypeAnnotation());
  } else if (isObjectEntries(callee)) {
    return arrayTypeAnnotation(tupleTypeAnnotation([stringTypeAnnotation(), anyTypeAnnotation()]));
  }
  return resolveCall(this.get("callee"));
}
function TaggedTemplateExpression() {
  return resolveCall(this.get("tag"));
}
function resolveCall(callee) {
  callee = callee.resolve();
  if (callee.isFunction()) {
    const {
      node
    } = callee;
    if (node.async) {
      if (node.generator) {
        return genericTypeAnnotation(identifier("AsyncIterator"));
      } else {
        return genericTypeAnnotation(identifier("Promise"));
      }
    } else {
      if (node.generator) {
        return genericTypeAnnotation(identifier("Iterator"));
      } else if (callee.node.returnType) {
        return callee.node.returnType;
      } else {}
    }
  }
}

//# sourceMappingURL=inferers.js.map

}, function(modId) { var map = {"./inferer-reference":1679363156229,"./util":1679363156230}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679363156229, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;
var _t = require("@babel/types");
var _util = require("./util");
const {
  BOOLEAN_NUMBER_BINARY_OPERATORS,
  createTypeAnnotationBasedOnTypeof,
  numberTypeAnnotation,
  voidTypeAnnotation
} = _t;
function _default(node) {
  if (!this.isReferenced()) return;
  const binding = this.scope.getBinding(node.name);
  if (binding) {
    if (binding.identifier.typeAnnotation) {
      return binding.identifier.typeAnnotation;
    } else {
      return getTypeAnnotationBindingConstantViolations(binding, this, node.name);
    }
  }
  if (node.name === "undefined") {
    return voidTypeAnnotation();
  } else if (node.name === "NaN" || node.name === "Infinity") {
    return numberTypeAnnotation();
  } else if (node.name === "arguments") {}
}
function getTypeAnnotationBindingConstantViolations(binding, path, name) {
  const types = [];
  const functionConstantViolations = [];
  let constantViolations = getConstantViolationsBefore(binding, path, functionConstantViolations);
  const testType = getConditionalAnnotation(binding, path, name);
  if (testType) {
    const testConstantViolations = getConstantViolationsBefore(binding, testType.ifStatement);
    constantViolations = constantViolations.filter(path => testConstantViolations.indexOf(path) < 0);
    types.push(testType.typeAnnotation);
  }
  if (constantViolations.length) {
    constantViolations.push(...functionConstantViolations);
    for (const violation of constantViolations) {
      types.push(violation.getTypeAnnotation());
    }
  }
  if (!types.length) {
    return;
  }
  return (0, _util.createUnionType)(types);
}
function getConstantViolationsBefore(binding, path, functions) {
  const violations = binding.constantViolations.slice();
  violations.unshift(binding.path);
  return violations.filter(violation => {
    violation = violation.resolve();
    const status = violation._guessExecutionStatusRelativeTo(path);
    if (functions && status === "unknown") functions.push(violation);
    return status === "before";
  });
}
function inferAnnotationFromBinaryExpression(name, path) {
  const operator = path.node.operator;
  const right = path.get("right").resolve();
  const left = path.get("left").resolve();
  let target;
  if (left.isIdentifier({
    name
  })) {
    target = right;
  } else if (right.isIdentifier({
    name
  })) {
    target = left;
  }
  if (target) {
    if (operator === "===") {
      return target.getTypeAnnotation();
    }
    if (BOOLEAN_NUMBER_BINARY_OPERATORS.indexOf(operator) >= 0) {
      return numberTypeAnnotation();
    }
    return;
  }
  if (operator !== "===" && operator !== "==") return;
  let typeofPath;
  let typePath;
  if (left.isUnaryExpression({
    operator: "typeof"
  })) {
    typeofPath = left;
    typePath = right;
  } else if (right.isUnaryExpression({
    operator: "typeof"
  })) {
    typeofPath = right;
    typePath = left;
  }
  if (!typeofPath) return;
  if (!typeofPath.get("argument").isIdentifier({
    name
  })) return;
  typePath = typePath.resolve();
  if (!typePath.isLiteral()) return;
  const typeValue = typePath.node.value;
  if (typeof typeValue !== "string") return;
  return createTypeAnnotationBasedOnTypeof(typeValue);
}
function getParentConditionalPath(binding, path, name) {
  let parentPath;
  while (parentPath = path.parentPath) {
    if (parentPath.isIfStatement() || parentPath.isConditionalExpression()) {
      if (path.key === "test") {
        return;
      }
      return parentPath;
    }
    if (parentPath.isFunction()) {
      if (parentPath.parentPath.scope.getBinding(name) !== binding) return;
    }
    path = parentPath;
  }
}
function getConditionalAnnotation(binding, path, name) {
  const ifStatement = getParentConditionalPath(binding, path, name);
  if (!ifStatement) return;
  const test = ifStatement.get("test");
  const paths = [test];
  const types = [];
  for (let i = 0; i < paths.length; i++) {
    const path = paths[i];
    if (path.isLogicalExpression()) {
      if (path.node.operator === "&&") {
        paths.push(path.get("left"));
        paths.push(path.get("right"));
      }
    } else if (path.isBinaryExpression()) {
      const type = inferAnnotationFromBinaryExpression(name, path);
      if (type) types.push(type);
    }
  }
  if (types.length) {
    return {
      typeAnnotation: (0, _util.createUnionType)(types),
      ifStatement
    };
  }
  return getConditionalAnnotation(binding, ifStatement, name);
}

//# sourceMappingURL=inferer-reference.js.map

}, function(modId) { var map = {"./util":1679363156230}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679363156230, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createUnionType = createUnionType;
var _t = require("@babel/types");
const {
  createFlowUnionType,
  createTSUnionType,
  createUnionTypeAnnotation,
  isFlowType,
  isTSType
} = _t;
function createUnionType(types) {
  {
    if (isFlowType(types[0])) {
      if (createFlowUnionType) {
        return createFlowUnionType(types);
      }
      return createUnionTypeAnnotation(types);
    } else {
      if (createTSUnionType) {
        return createTSUnionType(types);
      }
    }
  }
}

//# sourceMappingURL=util.js.map

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679363156231, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._replaceWith = _replaceWith;
exports.replaceExpressionWithStatements = replaceExpressionWithStatements;
exports.replaceInline = replaceInline;
exports.replaceWith = replaceWith;
exports.replaceWithMultiple = replaceWithMultiple;
exports.replaceWithSourceString = replaceWithSourceString;
var _codeFrame = require("@babel/code-frame");
var _index = require("../index");
var _index2 = require("./index");
var _cache = require("../cache");
var _parser = require("@babel/parser");
var _t = require("@babel/types");
var _helperHoistVariables = require("@babel/helper-hoist-variables");
const {
  FUNCTION_TYPES,
  arrowFunctionExpression,
  assignmentExpression,
  awaitExpression,
  blockStatement,
  callExpression,
  cloneNode,
  expressionStatement,
  identifier,
  inheritLeadingComments,
  inheritTrailingComments,
  inheritsComments,
  isExpression,
  isProgram,
  isStatement,
  removeComments,
  returnStatement,
  toSequenceExpression,
  validate,
  yieldExpression
} = _t;
function replaceWithMultiple(nodes) {
  var _pathCache$get;
  this.resync();
  nodes = this._verifyNodeList(nodes);
  inheritLeadingComments(nodes[0], this.node);
  inheritTrailingComments(nodes[nodes.length - 1], this.node);
  (_pathCache$get = _cache.path.get(this.parent)) == null ? void 0 : _pathCache$get.delete(this.node);
  this.node = this.container[this.key] = null;
  const paths = this.insertAfter(nodes);
  if (this.node) {
    this.requeue();
  } else {
    this.remove();
  }
  return paths;
}
function replaceWithSourceString(replacement) {
  this.resync();
  let ast;
  try {
    replacement = `(${replacement})`;
    ast = (0, _parser.parse)(replacement);
  } catch (err) {
    const loc = err.loc;
    if (loc) {
      err.message += " - make sure this is an expression.\n" + (0, _codeFrame.codeFrameColumns)(replacement, {
        start: {
          line: loc.line,
          column: loc.column + 1
        }
      });
      err.code = "BABEL_REPLACE_SOURCE_ERROR";
    }
    throw err;
  }
  const expressionAST = ast.program.body[0].expression;
  _index.default.removeProperties(expressionAST);
  return this.replaceWith(expressionAST);
}
function replaceWith(replacementPath) {
  this.resync();
  if (this.removed) {
    throw new Error("You can't replace this node, we've already removed it");
  }
  let replacement = replacementPath instanceof _index2.default ? replacementPath.node : replacementPath;
  if (!replacement) {
    throw new Error("You passed `path.replaceWith()` a falsy node, use `path.remove()` instead");
  }
  if (this.node === replacement) {
    return [this];
  }
  if (this.isProgram() && !isProgram(replacement)) {
    throw new Error("You can only replace a Program root node with another Program node");
  }
  if (Array.isArray(replacement)) {
    throw new Error("Don't use `path.replaceWith()` with an array of nodes, use `path.replaceWithMultiple()`");
  }
  if (typeof replacement === "string") {
    throw new Error("Don't use `path.replaceWith()` with a source string, use `path.replaceWithSourceString()`");
  }
  let nodePath = "";
  if (this.isNodeType("Statement") && isExpression(replacement)) {
    if (!this.canHaveVariableDeclarationOrExpression() && !this.canSwapBetweenExpressionAndStatement(replacement) && !this.parentPath.isExportDefaultDeclaration()) {
      replacement = expressionStatement(replacement);
      nodePath = "expression";
    }
  }
  if (this.isNodeType("Expression") && isStatement(replacement)) {
    if (!this.canHaveVariableDeclarationOrExpression() && !this.canSwapBetweenExpressionAndStatement(replacement)) {
      return this.replaceExpressionWithStatements([replacement]);
    }
  }
  const oldNode = this.node;
  if (oldNode) {
    inheritsComments(replacement, oldNode);
    removeComments(oldNode);
  }
  this._replaceWith(replacement);
  this.type = replacement.type;
  this.setScope();
  this.requeue();
  return [nodePath ? this.get(nodePath) : this];
}
function _replaceWith(node) {
  var _pathCache$get2;
  if (!this.container) {
    throw new ReferenceError("Container is falsy");
  }
  if (this.inList) {
    validate(this.parent, this.key, [node]);
  } else {
    validate(this.parent, this.key, node);
  }
  this.debug(`Replace with ${node == null ? void 0 : node.type}`);
  (_pathCache$get2 = _cache.path.get(this.parent)) == null ? void 0 : _pathCache$get2.set(node, this).delete(this.node);
  this.node = this.container[this.key] = node;
}
function replaceExpressionWithStatements(nodes) {
  this.resync();
  const nodesAsSequenceExpression = toSequenceExpression(nodes, this.scope);
  if (nodesAsSequenceExpression) {
    return this.replaceWith(nodesAsSequenceExpression)[0].get("expressions");
  }
  const functionParent = this.getFunctionParent();
  const isParentAsync = functionParent == null ? void 0 : functionParent.is("async");
  const isParentGenerator = functionParent == null ? void 0 : functionParent.is("generator");
  const container = arrowFunctionExpression([], blockStatement(nodes));
  this.replaceWith(callExpression(container, []));
  const callee = this.get("callee");
  (0, _helperHoistVariables.default)(callee.get("body"), id => {
    this.scope.push({
      id
    });
  }, "var");
  const completionRecords = this.get("callee").getCompletionRecords();
  for (const path of completionRecords) {
    if (!path.isExpressionStatement()) continue;
    const loop = path.findParent(path => path.isLoop());
    if (loop) {
      let uid = loop.getData("expressionReplacementReturnUid");
      if (!uid) {
        uid = callee.scope.generateDeclaredUidIdentifier("ret");
        callee.get("body").pushContainer("body", returnStatement(cloneNode(uid)));
        loop.setData("expressionReplacementReturnUid", uid);
      } else {
        uid = identifier(uid.name);
      }
      path.get("expression").replaceWith(assignmentExpression("=", cloneNode(uid), path.node.expression));
    } else {
      path.replaceWith(returnStatement(path.node.expression));
    }
  }
  callee.arrowFunctionToExpression();
  const newCallee = callee;
  const needToAwaitFunction = isParentAsync && _index.default.hasType(this.get("callee.body").node, "AwaitExpression", FUNCTION_TYPES);
  const needToYieldFunction = isParentGenerator && _index.default.hasType(this.get("callee.body").node, "YieldExpression", FUNCTION_TYPES);
  if (needToAwaitFunction) {
    newCallee.set("async", true);
    if (!needToYieldFunction) {
      this.replaceWith(awaitExpression(this.node));
    }
  }
  if (needToYieldFunction) {
    newCallee.set("generator", true);
    this.replaceWith(yieldExpression(this.node, true));
  }
  return newCallee.get("body.body");
}
function replaceInline(nodes) {
  this.resync();
  if (Array.isArray(nodes)) {
    if (Array.isArray(this.container)) {
      nodes = this._verifyNodeList(nodes);
      const paths = this._containerInsertAfter(nodes);
      this.remove();
      return paths;
    } else {
      return this.replaceWithMultiple(nodes);
    }
  } else {
    return this.replaceWith(nodes);
  }
}

//# sourceMappingURL=replacement.js.map

}, function(modId) { var map = {"../index":1679363156216,"./index":1679363156222,"../cache":1679363156219}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679363156232, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.evaluate = evaluate;
exports.evaluateTruthy = evaluateTruthy;
const VALID_CALLEES = ["String", "Number", "Math"];
const INVALID_METHODS = ["random"];
function isValidCallee(val) {
  return VALID_CALLEES.includes(val);
}
function isInvalidMethod(val) {
  return INVALID_METHODS.includes(val);
}
function evaluateTruthy() {
  const res = this.evaluate();
  if (res.confident) return !!res.value;
}
function deopt(path, state) {
  if (!state.confident) return;
  state.deoptPath = path;
  state.confident = false;
}
const Globals = new Map([["undefined", undefined], ["Infinity", Infinity], ["NaN", NaN]]);
function evaluateCached(path, state) {
  const {
    node
  } = path;
  const {
    seen
  } = state;
  if (seen.has(node)) {
    const existing = seen.get(node);
    if (existing.resolved) {
      return existing.value;
    } else {
      deopt(path, state);
      return;
    }
  } else {
    const item = {
      resolved: false
    };
    seen.set(node, item);
    const val = _evaluate(path, state);
    if (state.confident) {
      item.resolved = true;
      item.value = val;
    }
    return val;
  }
}
function _evaluate(path, state) {
  if (!state.confident) return;
  if (path.isSequenceExpression()) {
    const exprs = path.get("expressions");
    return evaluateCached(exprs[exprs.length - 1], state);
  }
  if (path.isStringLiteral() || path.isNumericLiteral() || path.isBooleanLiteral()) {
    return path.node.value;
  }
  if (path.isNullLiteral()) {
    return null;
  }
  if (path.isTemplateLiteral()) {
    return evaluateQuasis(path, path.node.quasis, state);
  }
  if (path.isTaggedTemplateExpression() && path.get("tag").isMemberExpression()) {
    const object = path.get("tag.object");
    const {
      node: {
        name
      }
    } = object;
    const property = path.get("tag.property");
    if (object.isIdentifier() && name === "String" && !path.scope.getBinding(name) && property.isIdentifier() && property.node.name === "raw") {
      return evaluateQuasis(path, path.node.quasi.quasis, state, true);
    }
  }
  if (path.isConditionalExpression()) {
    const testResult = evaluateCached(path.get("test"), state);
    if (!state.confident) return;
    if (testResult) {
      return evaluateCached(path.get("consequent"), state);
    } else {
      return evaluateCached(path.get("alternate"), state);
    }
  }
  if (path.isExpressionWrapper()) {
    return evaluateCached(path.get("expression"), state);
  }
  if (path.isMemberExpression() && !path.parentPath.isCallExpression({
    callee: path.node
  })) {
    const property = path.get("property");
    const object = path.get("object");
    if (object.isLiteral()) {
      const value = object.node.value;
      const type = typeof value;
      let key = null;
      if (path.node.computed) {
        key = evaluateCached(property, state);
        if (!state.confident) return;
      } else if (property.isIdentifier()) {
        key = property.node.name;
      }
      if ((type === "number" || type === "string") && key != null && (typeof key === "number" || typeof key === "string")) {
        return value[key];
      }
    }
  }
  if (path.isReferencedIdentifier()) {
    const binding = path.scope.getBinding(path.node.name);
    if (binding) {
      if (binding.constantViolations.length > 0 || path.node.start < binding.path.node.end) {
        deopt(binding.path, state);
        return;
      }
      if (binding.hasValue) {
        return binding.value;
      }
    }
    const name = path.node.name;
    if (Globals.has(name)) {
      if (!binding) {
        return Globals.get(name);
      }
      deopt(binding.path, state);
      return;
    }
    const resolved = path.resolve();
    if (resolved === path) {
      deopt(path, state);
      return;
    } else {
      return evaluateCached(resolved, state);
    }
  }
  if (path.isUnaryExpression({
    prefix: true
  })) {
    if (path.node.operator === "void") {
      return undefined;
    }
    const argument = path.get("argument");
    if (path.node.operator === "typeof" && (argument.isFunction() || argument.isClass())) {
      return "function";
    }
    const arg = evaluateCached(argument, state);
    if (!state.confident) return;
    switch (path.node.operator) {
      case "!":
        return !arg;
      case "+":
        return +arg;
      case "-":
        return -arg;
      case "~":
        return ~arg;
      case "typeof":
        return typeof arg;
    }
  }
  if (path.isArrayExpression()) {
    const arr = [];
    const elems = path.get("elements");
    for (const elem of elems) {
      const elemValue = elem.evaluate();
      if (elemValue.confident) {
        arr.push(elemValue.value);
      } else {
        deopt(elemValue.deopt, state);
        return;
      }
    }
    return arr;
  }
  if (path.isObjectExpression()) {
    const obj = {};
    const props = path.get("properties");
    for (const prop of props) {
      if (prop.isObjectMethod() || prop.isSpreadElement()) {
        deopt(prop, state);
        return;
      }
      const keyPath = prop.get("key");
      let key;
      if (prop.node.computed) {
        key = keyPath.evaluate();
        if (!key.confident) {
          deopt(key.deopt, state);
          return;
        }
        key = key.value;
      } else if (keyPath.isIdentifier()) {
        key = keyPath.node.name;
      } else {
        key = keyPath.node.value;
      }
      const valuePath = prop.get("value");
      let value = valuePath.evaluate();
      if (!value.confident) {
        deopt(value.deopt, state);
        return;
      }
      value = value.value;
      obj[key] = value;
    }
    return obj;
  }
  if (path.isLogicalExpression()) {
    const wasConfident = state.confident;
    const left = evaluateCached(path.get("left"), state);
    const leftConfident = state.confident;
    state.confident = wasConfident;
    const right = evaluateCached(path.get("right"), state);
    const rightConfident = state.confident;
    switch (path.node.operator) {
      case "||":
        state.confident = leftConfident && (!!left || rightConfident);
        if (!state.confident) return;
        return left || right;
      case "&&":
        state.confident = leftConfident && (!left || rightConfident);
        if (!state.confident) return;
        return left && right;
      case "??":
        state.confident = leftConfident && (left != null || rightConfident);
        if (!state.confident) return;
        return left != null ? left : right;
    }
  }
  if (path.isBinaryExpression()) {
    const left = evaluateCached(path.get("left"), state);
    if (!state.confident) return;
    const right = evaluateCached(path.get("right"), state);
    if (!state.confident) return;
    switch (path.node.operator) {
      case "-":
        return left - right;
      case "+":
        return left + right;
      case "/":
        return left / right;
      case "*":
        return left * right;
      case "%":
        return left % right;
      case "**":
        return Math.pow(left, right);
      case "<":
        return left < right;
      case ">":
        return left > right;
      case "<=":
        return left <= right;
      case ">=":
        return left >= right;
      case "==":
        return left == right;
      case "!=":
        return left != right;
      case "===":
        return left === right;
      case "!==":
        return left !== right;
      case "|":
        return left | right;
      case "&":
        return left & right;
      case "^":
        return left ^ right;
      case "<<":
        return left << right;
      case ">>":
        return left >> right;
      case ">>>":
        return left >>> right;
    }
  }
  if (path.isCallExpression()) {
    const callee = path.get("callee");
    let context;
    let func;
    if (callee.isIdentifier() && !path.scope.getBinding(callee.node.name) && isValidCallee(callee.node.name)) {
      func = global[callee.node.name];
    }
    if (callee.isMemberExpression()) {
      const object = callee.get("object");
      const property = callee.get("property");
      if (object.isIdentifier() && property.isIdentifier() && isValidCallee(object.node.name) && !isInvalidMethod(property.node.name)) {
        context = global[object.node.name];
        func = context[property.node.name];
      }
      if (object.isLiteral() && property.isIdentifier()) {
        const type = typeof object.node.value;
        if (type === "string" || type === "number") {
          context = object.node.value;
          func = context[property.node.name];
        }
      }
    }
    if (func) {
      const args = path.get("arguments").map(arg => evaluateCached(arg, state));
      if (!state.confident) return;
      return func.apply(context, args);
    }
  }
  deopt(path, state);
}
function evaluateQuasis(path, quasis, state, raw = false) {
  let str = "";
  let i = 0;
  const exprs = path.isTemplateLiteral() ? path.get("expressions") : path.get("quasi.expressions");
  for (const elem of quasis) {
    if (!state.confident) break;
    str += raw ? elem.value.raw : elem.value.cooked;
    const expr = exprs[i++];
    if (expr) str += String(evaluateCached(expr, state));
  }
  if (!state.confident) return;
  return str;
}
function evaluate() {
  const state = {
    confident: true,
    deoptPath: null,
    seen: new Map()
  };
  let value = evaluateCached(this, state);
  if (!state.confident) value = undefined;
  return {
    confident: state.confident,
    deopt: state.deoptPath,
    value: value
  };
}

//# sourceMappingURL=evaluation.js.map

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679363156233, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.arrowFunctionToExpression = arrowFunctionToExpression;
exports.arrowFunctionToShadowed = arrowFunctionToShadowed;
exports.ensureBlock = ensureBlock;
exports.toComputedKey = toComputedKey;
exports.unwrapFunctionEnvironment = unwrapFunctionEnvironment;
var _t = require("@babel/types");
var _helperEnvironmentVisitor = require("@babel/helper-environment-visitor");
var _helperFunctionName = require("@babel/helper-function-name");
var _visitors = require("../visitors");
const {
  arrowFunctionExpression,
  assignmentExpression,
  binaryExpression,
  blockStatement,
  callExpression,
  conditionalExpression,
  expressionStatement,
  identifier,
  isIdentifier,
  jsxIdentifier,
  logicalExpression,
  LOGICAL_OPERATORS,
  memberExpression,
  metaProperty,
  numericLiteral,
  objectExpression,
  restElement,
  returnStatement,
  sequenceExpression,
  spreadElement,
  stringLiteral,
  super: _super,
  thisExpression,
  toExpression,
  unaryExpression
} = _t;
function toComputedKey() {
  let key;
  if (this.isMemberExpression()) {
    key = this.node.property;
  } else if (this.isProperty() || this.isMethod()) {
    key = this.node.key;
  } else {
    throw new ReferenceError("todo");
  }
  if (!this.node.computed) {
    if (isIdentifier(key)) key = stringLiteral(key.name);
  }
  return key;
}
function ensureBlock() {
  const body = this.get("body");
  const bodyNode = body.node;
  if (Array.isArray(body)) {
    throw new Error("Can't convert array path to a block statement");
  }
  if (!bodyNode) {
    throw new Error("Can't convert node without a body");
  }
  if (body.isBlockStatement()) {
    return bodyNode;
  }
  const statements = [];
  let stringPath = "body";
  let key;
  let listKey;
  if (body.isStatement()) {
    listKey = "body";
    key = 0;
    statements.push(body.node);
  } else {
    stringPath += ".body.0";
    if (this.isFunction()) {
      key = "argument";
      statements.push(returnStatement(body.node));
    } else {
      key = "expression";
      statements.push(expressionStatement(body.node));
    }
  }
  this.node.body = blockStatement(statements);
  const parentPath = this.get(stringPath);
  body.setup(parentPath, listKey ? parentPath.node[listKey] : parentPath.node, listKey, key);
  return this.node;
}
function arrowFunctionToShadowed() {
  if (!this.isArrowFunctionExpression()) return;
  this.arrowFunctionToExpression();
}
function unwrapFunctionEnvironment() {
  if (!this.isArrowFunctionExpression() && !this.isFunctionExpression() && !this.isFunctionDeclaration()) {
    throw this.buildCodeFrameError("Can only unwrap the environment of a function.");
  }
  hoistFunctionEnvironment(this);
}
function setType(path, type) {
  path.node.type = type;
}
function arrowFunctionToExpression({
  allowInsertArrow = true,
  allowInsertArrowWithRest = allowInsertArrow,
  specCompliant = false,
  noNewArrows = !specCompliant
} = {}) {
  if (!this.isArrowFunctionExpression()) {
    throw this.buildCodeFrameError("Cannot convert non-arrow function to a function expression.");
  }
  const {
    thisBinding,
    fnPath: fn
  } = hoistFunctionEnvironment(this, noNewArrows, allowInsertArrow, allowInsertArrowWithRest);
  fn.ensureBlock();
  setType(fn, "FunctionExpression");
  if (!noNewArrows) {
    const checkBinding = thisBinding ? null : fn.scope.generateUidIdentifier("arrowCheckId");
    if (checkBinding) {
      fn.parentPath.scope.push({
        id: checkBinding,
        init: objectExpression([])
      });
    }
    fn.get("body").unshiftContainer("body", expressionStatement(callExpression(this.hub.addHelper("newArrowCheck"), [thisExpression(), checkBinding ? identifier(checkBinding.name) : identifier(thisBinding)])));
    fn.replaceWith(callExpression(memberExpression((0, _helperFunctionName.default)(this, true) || fn.node, identifier("bind")), [checkBinding ? identifier(checkBinding.name) : thisExpression()]));
    return fn.get("callee.object");
  }
  return fn;
}
const getSuperCallsVisitor = (0, _visitors.merge)([{
  CallExpression(child, {
    allSuperCalls
  }) {
    if (!child.get("callee").isSuper()) return;
    allSuperCalls.push(child);
  }
}, _helperEnvironmentVisitor.default]);
function hoistFunctionEnvironment(fnPath, noNewArrows = true, allowInsertArrow = true, allowInsertArrowWithRest = true) {
  let arrowParent;
  let thisEnvFn = fnPath.findParent(p => {
    if (p.isArrowFunctionExpression()) {
      var _arrowParent;
      (_arrowParent = arrowParent) != null ? _arrowParent : arrowParent = p;
      return false;
    }
    return p.isFunction() || p.isProgram() || p.isClassProperty({
      static: false
    }) || p.isClassPrivateProperty({
      static: false
    });
  });
  const inConstructor = thisEnvFn.isClassMethod({
    kind: "constructor"
  });
  if (thisEnvFn.isClassProperty() || thisEnvFn.isClassPrivateProperty()) {
    if (arrowParent) {
      thisEnvFn = arrowParent;
    } else if (allowInsertArrow) {
      fnPath.replaceWith(callExpression(arrowFunctionExpression([], toExpression(fnPath.node)), []));
      thisEnvFn = fnPath.get("callee");
      fnPath = thisEnvFn.get("body");
    } else {
      throw fnPath.buildCodeFrameError("Unable to transform arrow inside class property");
    }
  }
  const {
    thisPaths,
    argumentsPaths,
    newTargetPaths,
    superProps,
    superCalls
  } = getScopeInformation(fnPath);
  if (inConstructor && superCalls.length > 0) {
    if (!allowInsertArrow) {
      throw superCalls[0].buildCodeFrameError("When using '@babel/plugin-transform-arrow-functions', " + "it's not possible to compile `super()` in an arrow function without compiling classes.\n" + "Please add '@babel/plugin-transform-classes' to your Babel configuration.");
    }
    if (!allowInsertArrowWithRest) {
      throw superCalls[0].buildCodeFrameError("When using '@babel/plugin-transform-parameters', " + "it's not possible to compile `super()` in an arrow function with default or rest parameters without compiling classes.\n" + "Please add '@babel/plugin-transform-classes' to your Babel configuration.");
    }
    const allSuperCalls = [];
    thisEnvFn.traverse(getSuperCallsVisitor, {
      allSuperCalls
    });
    const superBinding = getSuperBinding(thisEnvFn);
    allSuperCalls.forEach(superCall => {
      const callee = identifier(superBinding);
      callee.loc = superCall.node.callee.loc;
      superCall.get("callee").replaceWith(callee);
    });
  }
  if (argumentsPaths.length > 0) {
    const argumentsBinding = getBinding(thisEnvFn, "arguments", () => {
      const args = () => identifier("arguments");
      if (thisEnvFn.scope.path.isProgram()) {
        return conditionalExpression(binaryExpression("===", unaryExpression("typeof", args()), stringLiteral("undefined")), thisEnvFn.scope.buildUndefinedNode(), args());
      } else {
        return args();
      }
    });
    argumentsPaths.forEach(argumentsChild => {
      const argsRef = identifier(argumentsBinding);
      argsRef.loc = argumentsChild.node.loc;
      argumentsChild.replaceWith(argsRef);
    });
  }
  if (newTargetPaths.length > 0) {
    const newTargetBinding = getBinding(thisEnvFn, "newtarget", () => metaProperty(identifier("new"), identifier("target")));
    newTargetPaths.forEach(targetChild => {
      const targetRef = identifier(newTargetBinding);
      targetRef.loc = targetChild.node.loc;
      targetChild.replaceWith(targetRef);
    });
  }
  if (superProps.length > 0) {
    if (!allowInsertArrow) {
      throw superProps[0].buildCodeFrameError("When using '@babel/plugin-transform-arrow-functions', " + "it's not possible to compile `super.prop` in an arrow function without compiling classes.\n" + "Please add '@babel/plugin-transform-classes' to your Babel configuration.");
    }
    const flatSuperProps = superProps.reduce((acc, superProp) => acc.concat(standardizeSuperProperty(superProp)), []);
    flatSuperProps.forEach(superProp => {
      const key = superProp.node.computed ? "" : superProp.get("property").node.name;
      const superParentPath = superProp.parentPath;
      const isAssignment = superParentPath.isAssignmentExpression({
        left: superProp.node
      });
      const isCall = superParentPath.isCallExpression({
        callee: superProp.node
      });
      const isTaggedTemplate = superParentPath.isTaggedTemplateExpression({
        tag: superProp.node
      });
      const superBinding = getSuperPropBinding(thisEnvFn, isAssignment, key);
      const args = [];
      if (superProp.node.computed) {
        args.push(superProp.get("property").node);
      }
      if (isAssignment) {
        const value = superParentPath.node.right;
        args.push(value);
      }
      const call = callExpression(identifier(superBinding), args);
      if (isCall) {
        superParentPath.unshiftContainer("arguments", thisExpression());
        superProp.replaceWith(memberExpression(call, identifier("call")));
        thisPaths.push(superParentPath.get("arguments.0"));
      } else if (isAssignment) {
        superParentPath.replaceWith(call);
      } else if (isTaggedTemplate) {
        superProp.replaceWith(callExpression(memberExpression(call, identifier("bind"), false), [thisExpression()]));
        thisPaths.push(superProp.get("arguments.0"));
      } else {
        superProp.replaceWith(call);
      }
    });
  }
  let thisBinding;
  if (thisPaths.length > 0 || !noNewArrows) {
    thisBinding = getThisBinding(thisEnvFn, inConstructor);
    if (noNewArrows || inConstructor && hasSuperClass(thisEnvFn)) {
      thisPaths.forEach(thisChild => {
        const thisRef = thisChild.isJSX() ? jsxIdentifier(thisBinding) : identifier(thisBinding);
        thisRef.loc = thisChild.node.loc;
        thisChild.replaceWith(thisRef);
      });
      if (!noNewArrows) thisBinding = null;
    }
  }
  return {
    thisBinding,
    fnPath
  };
}
function isLogicalOp(op) {
  return LOGICAL_OPERATORS.includes(op);
}
function standardizeSuperProperty(superProp) {
  if (superProp.parentPath.isAssignmentExpression() && superProp.parentPath.node.operator !== "=") {
    const assignmentPath = superProp.parentPath;
    const op = assignmentPath.node.operator.slice(0, -1);
    const value = assignmentPath.node.right;
    const isLogicalAssignment = isLogicalOp(op);
    if (superProp.node.computed) {
      const tmp = superProp.scope.generateDeclaredUidIdentifier("tmp");
      const object = superProp.node.object;
      const property = superProp.node.property;
      assignmentPath.get("left").replaceWith(memberExpression(object, assignmentExpression("=", tmp, property), true));
      assignmentPath.get("right").replaceWith(rightExpression(isLogicalAssignment ? "=" : op, memberExpression(object, identifier(tmp.name), true), value));
    } else {
      const object = superProp.node.object;
      const property = superProp.node.property;
      assignmentPath.get("left").replaceWith(memberExpression(object, property));
      assignmentPath.get("right").replaceWith(rightExpression(isLogicalAssignment ? "=" : op, memberExpression(object, identifier(property.name)), value));
    }
    if (isLogicalAssignment) {
      assignmentPath.replaceWith(logicalExpression(op, assignmentPath.node.left, assignmentPath.node.right));
    } else {
      assignmentPath.node.operator = "=";
    }
    return [assignmentPath.get("left"), assignmentPath.get("right").get("left")];
  } else if (superProp.parentPath.isUpdateExpression()) {
    const updateExpr = superProp.parentPath;
    const tmp = superProp.scope.generateDeclaredUidIdentifier("tmp");
    const computedKey = superProp.node.computed ? superProp.scope.generateDeclaredUidIdentifier("prop") : null;
    const parts = [assignmentExpression("=", tmp, memberExpression(superProp.node.object, computedKey ? assignmentExpression("=", computedKey, superProp.node.property) : superProp.node.property, superProp.node.computed)), assignmentExpression("=", memberExpression(superProp.node.object, computedKey ? identifier(computedKey.name) : superProp.node.property, superProp.node.computed), binaryExpression(superProp.parentPath.node.operator[0], identifier(tmp.name), numericLiteral(1)))];
    if (!superProp.parentPath.node.prefix) {
      parts.push(identifier(tmp.name));
    }
    updateExpr.replaceWith(sequenceExpression(parts));
    const left = updateExpr.get("expressions.0.right");
    const right = updateExpr.get("expressions.1.left");
    return [left, right];
  }
  return [superProp];
  function rightExpression(op, left, right) {
    if (op === "=") {
      return assignmentExpression("=", left, right);
    } else {
      return binaryExpression(op, left, right);
    }
  }
}
function hasSuperClass(thisEnvFn) {
  return thisEnvFn.isClassMethod() && !!thisEnvFn.parentPath.parentPath.node.superClass;
}
const assignSuperThisVisitor = (0, _visitors.merge)([{
  CallExpression(child, {
    supers,
    thisBinding
  }) {
    if (!child.get("callee").isSuper()) return;
    if (supers.has(child.node)) return;
    supers.add(child.node);
    child.replaceWithMultiple([child.node, assignmentExpression("=", identifier(thisBinding), identifier("this"))]);
  }
}, _helperEnvironmentVisitor.default]);
function getThisBinding(thisEnvFn, inConstructor) {
  return getBinding(thisEnvFn, "this", thisBinding => {
    if (!inConstructor || !hasSuperClass(thisEnvFn)) return thisExpression();
    thisEnvFn.traverse(assignSuperThisVisitor, {
      supers: new WeakSet(),
      thisBinding
    });
  });
}
function getSuperBinding(thisEnvFn) {
  return getBinding(thisEnvFn, "supercall", () => {
    const argsBinding = thisEnvFn.scope.generateUidIdentifier("args");
    return arrowFunctionExpression([restElement(argsBinding)], callExpression(_super(), [spreadElement(identifier(argsBinding.name))]));
  });
}
function getSuperPropBinding(thisEnvFn, isAssignment, propName) {
  const op = isAssignment ? "set" : "get";
  return getBinding(thisEnvFn, `superprop_${op}:${propName || ""}`, () => {
    const argsList = [];
    let fnBody;
    if (propName) {
      fnBody = memberExpression(_super(), identifier(propName));
    } else {
      const method = thisEnvFn.scope.generateUidIdentifier("prop");
      argsList.unshift(method);
      fnBody = memberExpression(_super(), identifier(method.name), true);
    }
    if (isAssignment) {
      const valueIdent = thisEnvFn.scope.generateUidIdentifier("value");
      argsList.push(valueIdent);
      fnBody = assignmentExpression("=", fnBody, identifier(valueIdent.name));
    }
    return arrowFunctionExpression(argsList, fnBody);
  });
}
function getBinding(thisEnvFn, key, init) {
  const cacheKey = "binding:" + key;
  let data = thisEnvFn.getData(cacheKey);
  if (!data) {
    const id = thisEnvFn.scope.generateUidIdentifier(key);
    data = id.name;
    thisEnvFn.setData(cacheKey, data);
    thisEnvFn.scope.push({
      id: id,
      init: init(data)
    });
  }
  return data;
}
const getScopeInformationVisitor = (0, _visitors.merge)([{
  ThisExpression(child, {
    thisPaths
  }) {
    thisPaths.push(child);
  },
  JSXIdentifier(child, {
    thisPaths
  }) {
    if (child.node.name !== "this") return;
    if (!child.parentPath.isJSXMemberExpression({
      object: child.node
    }) && !child.parentPath.isJSXOpeningElement({
      name: child.node
    })) {
      return;
    }
    thisPaths.push(child);
  },
  CallExpression(child, {
    superCalls
  }) {
    if (child.get("callee").isSuper()) superCalls.push(child);
  },
  MemberExpression(child, {
    superProps
  }) {
    if (child.get("object").isSuper()) superProps.push(child);
  },
  Identifier(child, {
    argumentsPaths
  }) {
    if (!child.isReferencedIdentifier({
      name: "arguments"
    })) return;
    let curr = child.scope;
    do {
      if (curr.hasOwnBinding("arguments")) {
        curr.rename("arguments");
        return;
      }
      if (curr.path.isFunction() && !curr.path.isArrowFunctionExpression()) {
        break;
      }
    } while (curr = curr.parent);
    argumentsPaths.push(child);
  },
  MetaProperty(child, {
    newTargetPaths
  }) {
    if (!child.get("meta").isIdentifier({
      name: "new"
    })) return;
    if (!child.get("property").isIdentifier({
      name: "target"
    })) return;
    newTargetPaths.push(child);
  }
}, _helperEnvironmentVisitor.default]);
function getScopeInformation(fnPath) {
  const thisPaths = [];
  const argumentsPaths = [];
  const newTargetPaths = [];
  const superProps = [];
  const superCalls = [];
  fnPath.traverse(getScopeInformationVisitor, {
    thisPaths,
    argumentsPaths,
    newTargetPaths,
    superProps,
    superCalls
  });
  return {
    thisPaths,
    argumentsPaths,
    newTargetPaths,
    superProps,
    superCalls
  };
}

//# sourceMappingURL=conversion.js.map

}, function(modId) { var map = {"../visitors":1679363156217}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679363156234, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._guessExecutionStatusRelativeTo = _guessExecutionStatusRelativeTo;
exports._resolve = _resolve;
exports.canHaveVariableDeclarationOrExpression = canHaveVariableDeclarationOrExpression;
exports.canSwapBetweenExpressionAndStatement = canSwapBetweenExpressionAndStatement;
exports.equals = equals;
exports.getSource = getSource;
exports.has = has;
exports.is = void 0;
exports.isCompletionRecord = isCompletionRecord;
exports.isConstantExpression = isConstantExpression;
exports.isInStrictMode = isInStrictMode;
exports.isNodeType = isNodeType;
exports.isStatementOrBlock = isStatementOrBlock;
exports.isStatic = isStatic;
exports.isnt = isnt;
exports.matchesPattern = matchesPattern;
exports.referencesImport = referencesImport;
exports.resolve = resolve;
exports.willIMaybeExecuteBefore = willIMaybeExecuteBefore;
var _t = require("@babel/types");
const {
  STATEMENT_OR_BLOCK_KEYS,
  VISITOR_KEYS,
  isBlockStatement,
  isExpression,
  isIdentifier,
  isLiteral,
  isStringLiteral,
  isType,
  matchesPattern: _matchesPattern
} = _t;
function matchesPattern(pattern, allowPartial) {
  return _matchesPattern(this.node, pattern, allowPartial);
}
function has(key) {
  const val = this.node && this.node[key];
  if (val && Array.isArray(val)) {
    return !!val.length;
  } else {
    return !!val;
  }
}
function isStatic() {
  return this.scope.isStatic(this.node);
}
const is = has;
exports.is = is;
function isnt(key) {
  return !this.has(key);
}
function equals(key, value) {
  return this.node[key] === value;
}
function isNodeType(type) {
  return isType(this.type, type);
}
function canHaveVariableDeclarationOrExpression() {
  return (this.key === "init" || this.key === "left") && this.parentPath.isFor();
}
function canSwapBetweenExpressionAndStatement(replacement) {
  if (this.key !== "body" || !this.parentPath.isArrowFunctionExpression()) {
    return false;
  }
  if (this.isExpression()) {
    return isBlockStatement(replacement);
  } else if (this.isBlockStatement()) {
    return isExpression(replacement);
  }
  return false;
}
function isCompletionRecord(allowInsideFunction) {
  let path = this;
  let first = true;
  do {
    const {
      type,
      container
    } = path;
    if (!first && (path.isFunction() || type === "StaticBlock")) {
      return !!allowInsideFunction;
    }
    first = false;
    if (Array.isArray(container) && path.key !== container.length - 1) {
      return false;
    }
  } while ((path = path.parentPath) && !path.isProgram() && !path.isDoExpression());
  return true;
}
function isStatementOrBlock() {
  if (this.parentPath.isLabeledStatement() || isBlockStatement(this.container)) {
    return false;
  } else {
    return STATEMENT_OR_BLOCK_KEYS.includes(this.key);
  }
}
function referencesImport(moduleSource, importName) {
  if (!this.isReferencedIdentifier()) {
    if (this.isJSXMemberExpression() && this.node.property.name === importName || (this.isMemberExpression() || this.isOptionalMemberExpression()) && (this.node.computed ? isStringLiteral(this.node.property, {
      value: importName
    }) : this.node.property.name === importName)) {
      const object = this.get("object");
      return object.isReferencedIdentifier() && object.referencesImport(moduleSource, "*");
    }
    return false;
  }
  const binding = this.scope.getBinding(this.node.name);
  if (!binding || binding.kind !== "module") return false;
  const path = binding.path;
  const parent = path.parentPath;
  if (!parent.isImportDeclaration()) return false;
  if (parent.node.source.value === moduleSource) {
    if (!importName) return true;
  } else {
    return false;
  }
  if (path.isImportDefaultSpecifier() && importName === "default") {
    return true;
  }
  if (path.isImportNamespaceSpecifier() && importName === "*") {
    return true;
  }
  if (path.isImportSpecifier() && isIdentifier(path.node.imported, {
    name: importName
  })) {
    return true;
  }
  return false;
}
function getSource() {
  const node = this.node;
  if (node.end) {
    const code = this.hub.getCode();
    if (code) return code.slice(node.start, node.end);
  }
  return "";
}
function willIMaybeExecuteBefore(target) {
  return this._guessExecutionStatusRelativeTo(target) !== "after";
}
function getOuterFunction(path) {
  return path.isProgram() ? path : (path.parentPath.scope.getFunctionParent() || path.parentPath.scope.getProgramParent()).path;
}
function isExecutionUncertain(type, key) {
  switch (type) {
    case "LogicalExpression":
      return key === "right";
    case "ConditionalExpression":
    case "IfStatement":
      return key === "consequent" || key === "alternate";
    case "WhileStatement":
    case "DoWhileStatement":
    case "ForInStatement":
    case "ForOfStatement":
      return key === "body";
    case "ForStatement":
      return key === "body" || key === "update";
    case "SwitchStatement":
      return key === "cases";
    case "TryStatement":
      return key === "handler";
    case "AssignmentPattern":
      return key === "right";
    case "OptionalMemberExpression":
      return key === "property";
    case "OptionalCallExpression":
      return key === "arguments";
    default:
      return false;
  }
}
function isExecutionUncertainInList(paths, maxIndex) {
  for (let i = 0; i < maxIndex; i++) {
    const path = paths[i];
    if (isExecutionUncertain(path.parent.type, path.parentKey)) {
      return true;
    }
  }
  return false;
}
const SYMBOL_CHECKING = Symbol();
function _guessExecutionStatusRelativeTo(target) {
  return _guessExecutionStatusRelativeToCached(this, target, new Map());
}
function _guessExecutionStatusRelativeToCached(base, target, cache) {
  const funcParent = {
    this: getOuterFunction(base),
    target: getOuterFunction(target)
  };
  if (funcParent.target.node !== funcParent.this.node) {
    return _guessExecutionStatusRelativeToDifferentFunctionsCached(base, funcParent.target, cache);
  }
  const paths = {
    target: target.getAncestry(),
    this: base.getAncestry()
  };
  if (paths.target.indexOf(base) >= 0) return "after";
  if (paths.this.indexOf(target) >= 0) return "before";
  let commonPath;
  const commonIndex = {
    target: 0,
    this: 0
  };
  while (!commonPath && commonIndex.this < paths.this.length) {
    const path = paths.this[commonIndex.this];
    commonIndex.target = paths.target.indexOf(path);
    if (commonIndex.target >= 0) {
      commonPath = path;
    } else {
      commonIndex.this++;
    }
  }
  if (!commonPath) {
    throw new Error("Internal Babel error - The two compared nodes" + " don't appear to belong to the same program.");
  }
  if (isExecutionUncertainInList(paths.this, commonIndex.this - 1) || isExecutionUncertainInList(paths.target, commonIndex.target - 1)) {
    return "unknown";
  }
  const divergence = {
    this: paths.this[commonIndex.this - 1],
    target: paths.target[commonIndex.target - 1]
  };
  if (divergence.target.listKey && divergence.this.listKey && divergence.target.container === divergence.this.container) {
    return divergence.target.key > divergence.this.key ? "before" : "after";
  }
  const keys = VISITOR_KEYS[commonPath.type];
  const keyPosition = {
    this: keys.indexOf(divergence.this.parentKey),
    target: keys.indexOf(divergence.target.parentKey)
  };
  return keyPosition.target > keyPosition.this ? "before" : "after";
}
function _guessExecutionStatusRelativeToDifferentFunctionsInternal(base, target, cache) {
  if (!target.isFunctionDeclaration()) {
    if (_guessExecutionStatusRelativeToCached(base, target, cache) === "before") {
      return "before";
    }
    return "unknown";
  } else if (target.parentPath.isExportDeclaration()) {
    return "unknown";
  }
  const binding = target.scope.getBinding(target.node.id.name);
  if (!binding.references) return "before";
  const referencePaths = binding.referencePaths;
  let allStatus;
  for (const path of referencePaths) {
    const childOfFunction = !!path.find(path => path.node === target.node);
    if (childOfFunction) continue;
    if (path.key !== "callee" || !path.parentPath.isCallExpression()) {
      return "unknown";
    }
    const status = _guessExecutionStatusRelativeToCached(base, path, cache);
    if (allStatus && allStatus !== status) {
      return "unknown";
    } else {
      allStatus = status;
    }
  }
  return allStatus;
}
function _guessExecutionStatusRelativeToDifferentFunctionsCached(base, target, cache) {
  let nodeMap = cache.get(base.node);
  let cached;
  if (!nodeMap) {
    cache.set(base.node, nodeMap = new Map());
  } else if (cached = nodeMap.get(target.node)) {
    if (cached === SYMBOL_CHECKING) {
      return "unknown";
    }
    return cached;
  }
  nodeMap.set(target.node, SYMBOL_CHECKING);
  const result = _guessExecutionStatusRelativeToDifferentFunctionsInternal(base, target, cache);
  nodeMap.set(target.node, result);
  return result;
}
function resolve(dangerous, resolved) {
  return this._resolve(dangerous, resolved) || this;
}
function _resolve(dangerous, resolved) {
  if (resolved && resolved.indexOf(this) >= 0) return;
  resolved = resolved || [];
  resolved.push(this);
  if (this.isVariableDeclarator()) {
    if (this.get("id").isIdentifier()) {
      return this.get("init").resolve(dangerous, resolved);
    } else {}
  } else if (this.isReferencedIdentifier()) {
    const binding = this.scope.getBinding(this.node.name);
    if (!binding) return;
    if (!binding.constant) return;
    if (binding.kind === "module") return;
    if (binding.path !== this) {
      const ret = binding.path.resolve(dangerous, resolved);
      if (this.find(parent => parent.node === ret.node)) return;
      return ret;
    }
  } else if (this.isTypeCastExpression()) {
    return this.get("expression").resolve(dangerous, resolved);
  } else if (dangerous && this.isMemberExpression()) {
    const targetKey = this.toComputedKey();
    if (!isLiteral(targetKey)) return;
    const targetName = targetKey.value;
    const target = this.get("object").resolve(dangerous, resolved);
    if (target.isObjectExpression()) {
      const props = target.get("properties");
      for (const prop of props) {
        if (!prop.isProperty()) continue;
        const key = prop.get("key");
        let match = prop.isnt("computed") && key.isIdentifier({
          name: targetName
        });
        match = match || key.isLiteral({
          value: targetName
        });
        if (match) return prop.get("value").resolve(dangerous, resolved);
      }
    } else if (target.isArrayExpression() && !isNaN(+targetName)) {
      const elems = target.get("elements");
      const elem = elems[targetName];
      if (elem) return elem.resolve(dangerous, resolved);
    }
  }
}
function isConstantExpression() {
  if (this.isIdentifier()) {
    const binding = this.scope.getBinding(this.node.name);
    if (!binding) return false;
    return binding.constant;
  }
  if (this.isLiteral()) {
    if (this.isRegExpLiteral()) {
      return false;
    }
    if (this.isTemplateLiteral()) {
      return this.get("expressions").every(expression => expression.isConstantExpression());
    }
    return true;
  }
  if (this.isUnaryExpression()) {
    if (this.node.operator !== "void") {
      return false;
    }
    return this.get("argument").isConstantExpression();
  }
  if (this.isBinaryExpression()) {
    const {
      operator
    } = this.node;
    return operator !== "in" && operator !== "instanceof" && this.get("left").isConstantExpression() && this.get("right").isConstantExpression();
  }
  return false;
}
function isInStrictMode() {
  const start = this.isProgram() ? this : this.parentPath;
  const strictParent = start.find(path => {
    if (path.isProgram({
      sourceType: "module"
    })) return true;
    if (path.isClass()) return true;
    if (path.isArrowFunctionExpression() && !path.get("body").isBlockStatement()) {
      return false;
    }
    let body;
    if (path.isFunction()) {
      body = path.node.body;
    } else if (path.isProgram()) {
      body = path.node;
    } else {
      return false;
    }
    for (const directive of body.directives) {
      if (directive.value.value === "use strict") {
        return true;
      }
    }
  });
  return !!strictParent;
}

//# sourceMappingURL=introspection.js.map

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679363156235, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._call = _call;
exports._getQueueContexts = _getQueueContexts;
exports._resyncKey = _resyncKey;
exports._resyncList = _resyncList;
exports._resyncParent = _resyncParent;
exports._resyncRemoved = _resyncRemoved;
exports.call = call;
exports.isBlacklisted = exports.isDenylisted = isDenylisted;
exports.popContext = popContext;
exports.pushContext = pushContext;
exports.requeue = requeue;
exports.resync = resync;
exports.setContext = setContext;
exports.setKey = setKey;
exports.setScope = setScope;
exports.setup = setup;
exports.skip = skip;
exports.skipKey = skipKey;
exports.stop = stop;
exports.visit = visit;
var _traverseNode = require("../traverse-node");
var _index = require("./index");
function call(key) {
  const opts = this.opts;
  this.debug(key);
  if (this.node) {
    if (this._call(opts[key])) return true;
  }
  if (this.node) {
    return this._call(opts[this.node.type] && opts[this.node.type][key]);
  }
  return false;
}
function _call(fns) {
  if (!fns) return false;
  for (const fn of fns) {
    if (!fn) continue;
    const node = this.node;
    if (!node) return true;
    const ret = fn.call(this.state, this, this.state);
    if (ret && typeof ret === "object" && typeof ret.then === "function") {
      throw new Error(`You appear to be using a plugin with an async traversal visitor, ` + `which your current version of Babel does not support. ` + `If you're using a published plugin, you may need to upgrade ` + `your @babel/core version.`);
    }
    if (ret) {
      throw new Error(`Unexpected return value from visitor method ${fn}`);
    }
    if (this.node !== node) return true;
    if (this._traverseFlags > 0) return true;
  }
  return false;
}
function isDenylisted() {
  var _this$opts$denylist;
  const denylist = (_this$opts$denylist = this.opts.denylist) != null ? _this$opts$denylist : this.opts.blacklist;
  return denylist && denylist.indexOf(this.node.type) > -1;
}
function restoreContext(path, context) {
  if (path.context !== context) {
    path.context = context;
    path.state = context.state;
    path.opts = context.opts;
  }
}
function visit() {
  if (!this.node) {
    return false;
  }
  if (this.isDenylisted()) {
    return false;
  }
  if (this.opts.shouldSkip && this.opts.shouldSkip(this)) {
    return false;
  }
  const currentContext = this.context;
  if (this.shouldSkip || this.call("enter")) {
    this.debug("Skip...");
    return this.shouldStop;
  }
  restoreContext(this, currentContext);
  this.debug("Recursing into...");
  this.shouldStop = (0, _traverseNode.traverseNode)(this.node, this.opts, this.scope, this.state, this, this.skipKeys);
  restoreContext(this, currentContext);
  this.call("exit");
  return this.shouldStop;
}
function skip() {
  this.shouldSkip = true;
}
function skipKey(key) {
  if (this.skipKeys == null) {
    this.skipKeys = {};
  }
  this.skipKeys[key] = true;
}
function stop() {
  this._traverseFlags |= _index.SHOULD_SKIP | _index.SHOULD_STOP;
}
function setScope() {
  if (this.opts && this.opts.noScope) return;
  let path = this.parentPath;
  if ((this.key === "key" || this.listKey === "decorators") && path.isMethod() || this.key === "discriminant" && path.isSwitchStatement()) {
    path = path.parentPath;
  }
  let target;
  while (path && !target) {
    if (path.opts && path.opts.noScope) return;
    target = path.scope;
    path = path.parentPath;
  }
  this.scope = this.getScope(target);
  if (this.scope) this.scope.init();
}
function setContext(context) {
  if (this.skipKeys != null) {
    this.skipKeys = {};
  }
  this._traverseFlags = 0;
  if (context) {
    this.context = context;
    this.state = context.state;
    this.opts = context.opts;
  }
  this.setScope();
  return this;
}
function resync() {
  if (this.removed) return;
  this._resyncParent();
  this._resyncList();
  this._resyncKey();
}
function _resyncParent() {
  if (this.parentPath) {
    this.parent = this.parentPath.node;
  }
}
function _resyncKey() {
  if (!this.container) return;
  if (this.node === this.container[this.key]) {
    return;
  }
  if (Array.isArray(this.container)) {
    for (let i = 0; i < this.container.length; i++) {
      if (this.container[i] === this.node) {
        this.setKey(i);
        return;
      }
    }
  } else {
    for (const key of Object.keys(this.container)) {
      if (this.container[key] === this.node) {
        this.setKey(key);
        return;
      }
    }
  }
  this.key = null;
}
function _resyncList() {
  if (!this.parent || !this.inList) return;
  const newContainer = this.parent[this.listKey];
  if (this.container === newContainer) return;
  this.container = newContainer || null;
}
function _resyncRemoved() {
  if (this.key == null || !this.container || this.container[this.key] !== this.node) {
    this._markRemoved();
  }
}
function popContext() {
  this.contexts.pop();
  if (this.contexts.length > 0) {
    this.setContext(this.contexts[this.contexts.length - 1]);
  } else {
    this.setContext(undefined);
  }
}
function pushContext(context) {
  this.contexts.push(context);
  this.setContext(context);
}
function setup(parentPath, container, listKey, key) {
  this.listKey = listKey;
  this.container = container;
  this.parentPath = parentPath || this.parentPath;
  this.setKey(key);
}
function setKey(key) {
  var _this$node;
  this.key = key;
  this.node = this.container[this.key];
  this.type = (_this$node = this.node) == null ? void 0 : _this$node.type;
}
function requeue(pathToQueue = this) {
  if (pathToQueue.removed) return;
  ;
  const contexts = this.contexts;
  for (const context of contexts) {
    context.maybeQueue(pathToQueue);
  }
}
function _getQueueContexts() {
  let path = this;
  let contexts = this.contexts;
  while (!contexts.length) {
    path = path.parentPath;
    if (!path) break;
    contexts = path.contexts;
  }
  return contexts;
}

//# sourceMappingURL=context.js.map

}, function(modId) { var map = {"../traverse-node":1679363156220,"./index":1679363156222}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679363156236, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._assertUnremoved = _assertUnremoved;
exports._callRemovalHooks = _callRemovalHooks;
exports._markRemoved = _markRemoved;
exports._remove = _remove;
exports._removeFromScope = _removeFromScope;
exports.remove = remove;
var _removalHooks = require("./lib/removal-hooks");
var _cache = require("../cache");
var _index = require("./index");
function remove() {
  var _this$opts;
  this._assertUnremoved();
  this.resync();
  if (!((_this$opts = this.opts) != null && _this$opts.noScope)) {
    this._removeFromScope();
  }
  if (this._callRemovalHooks()) {
    this._markRemoved();
    return;
  }
  this.shareCommentsWithSiblings();
  this._remove();
  this._markRemoved();
}
function _removeFromScope() {
  const bindings = this.getBindingIdentifiers();
  Object.keys(bindings).forEach(name => this.scope.removeBinding(name));
}
function _callRemovalHooks() {
  for (const fn of _removalHooks.hooks) {
    if (fn(this, this.parentPath)) return true;
  }
}
function _remove() {
  if (Array.isArray(this.container)) {
    this.container.splice(this.key, 1);
    this.updateSiblingKeys(this.key, -1);
  } else {
    this._replaceWith(null);
  }
}
function _markRemoved() {
  this._traverseFlags |= _index.SHOULD_SKIP | _index.REMOVED;
  if (this.parent) _cache.path.get(this.parent).delete(this.node);
  this.node = null;
}
function _assertUnremoved() {
  if (this.removed) {
    throw this.buildCodeFrameError("NodePath has been removed so is read-only.");
  }
}

//# sourceMappingURL=removal.js.map

}, function(modId) { var map = {"./lib/removal-hooks":1679363156237,"../cache":1679363156219,"./index":1679363156222}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679363156237, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hooks = void 0;
const hooks = [function (self, parent) {
  const removeParent = self.key === "test" && (parent.isWhile() || parent.isSwitchCase()) || self.key === "declaration" && parent.isExportDeclaration() || self.key === "body" && parent.isLabeledStatement() || self.listKey === "declarations" && parent.isVariableDeclaration() && parent.node.declarations.length === 1 || self.key === "expression" && parent.isExpressionStatement();
  if (removeParent) {
    parent.remove();
    return true;
  }
}, function (self, parent) {
  if (parent.isSequenceExpression() && parent.node.expressions.length === 1) {
    parent.replaceWith(parent.node.expressions[0]);
    return true;
  }
}, function (self, parent) {
  if (parent.isBinary()) {
    if (self.key === "left") {
      parent.replaceWith(parent.node.right);
    } else {
      parent.replaceWith(parent.node.left);
    }
    return true;
  }
}, function (self, parent) {
  if (parent.isIfStatement() && self.key === "consequent" || self.key === "body" && (parent.isLoop() || parent.isArrowFunctionExpression())) {
    self.replaceWith({
      type: "BlockStatement",
      body: []
    });
    return true;
  }
}];
exports.hooks = hooks;

//# sourceMappingURL=removal-hooks.js.map

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679363156238, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._containerInsert = _containerInsert;
exports._containerInsertAfter = _containerInsertAfter;
exports._containerInsertBefore = _containerInsertBefore;
exports._verifyNodeList = _verifyNodeList;
exports.hoist = hoist;
exports.insertAfter = insertAfter;
exports.insertBefore = insertBefore;
exports.pushContainer = pushContainer;
exports.unshiftContainer = unshiftContainer;
exports.updateSiblingKeys = updateSiblingKeys;
var _cache = require("../cache");
var _hoister = require("./lib/hoister");
var _index = require("./index");
var _t = require("@babel/types");
const {
  arrowFunctionExpression,
  assertExpression,
  assignmentExpression,
  blockStatement,
  callExpression,
  cloneNode,
  expressionStatement,
  isAssignmentExpression,
  isCallExpression,
  isExportNamedDeclaration,
  isExpression,
  isIdentifier,
  isSequenceExpression,
  isSuper,
  thisExpression
} = _t;
function insertBefore(nodes_) {
  this._assertUnremoved();
  const nodes = this._verifyNodeList(nodes_);
  const {
    parentPath,
    parent
  } = this;
  if (parentPath.isExpressionStatement() || parentPath.isLabeledStatement() || isExportNamedDeclaration(parent) || parentPath.isExportDefaultDeclaration() && this.isDeclaration()) {
    return parentPath.insertBefore(nodes);
  } else if (this.isNodeType("Expression") && !this.isJSXElement() || parentPath.isForStatement() && this.key === "init") {
    if (this.node) nodes.push(this.node);
    return this.replaceExpressionWithStatements(nodes);
  } else if (Array.isArray(this.container)) {
    return this._containerInsertBefore(nodes);
  } else if (this.isStatementOrBlock()) {
    const node = this.node;
    const shouldInsertCurrentNode = node && (!this.isExpressionStatement() || node.expression != null);
    this.replaceWith(blockStatement(shouldInsertCurrentNode ? [node] : []));
    return this.unshiftContainer("body", nodes);
  } else {
    throw new Error("We don't know what to do with this node type. " + "We were previously a Statement but we can't fit in here?");
  }
}
function _containerInsert(from, nodes) {
  this.updateSiblingKeys(from, nodes.length);
  const paths = [];
  this.container.splice(from, 0, ...nodes);
  for (let i = 0; i < nodes.length; i++) {
    const to = from + i;
    const path = this.getSibling(to);
    paths.push(path);
    if (this.context && this.context.queue) {
      path.pushContext(this.context);
    }
  }
  const contexts = this._getQueueContexts();
  for (const path of paths) {
    path.setScope();
    path.debug("Inserted.");
    for (const context of contexts) {
      context.maybeQueue(path, true);
    }
  }
  return paths;
}
function _containerInsertBefore(nodes) {
  return this._containerInsert(this.key, nodes);
}
function _containerInsertAfter(nodes) {
  return this._containerInsert(this.key + 1, nodes);
}
const last = arr => arr[arr.length - 1];
function isHiddenInSequenceExpression(path) {
  return isSequenceExpression(path.parent) && (last(path.parent.expressions) !== path.node || isHiddenInSequenceExpression(path.parentPath));
}
function isAlmostConstantAssignment(node, scope) {
  if (!isAssignmentExpression(node) || !isIdentifier(node.left)) {
    return false;
  }
  const blockScope = scope.getBlockParent();
  return blockScope.hasOwnBinding(node.left.name) && blockScope.getOwnBinding(node.left.name).constantViolations.length <= 1;
}
function insertAfter(nodes_) {
  this._assertUnremoved();
  if (this.isSequenceExpression()) {
    return last(this.get("expressions")).insertAfter(nodes_);
  }
  const nodes = this._verifyNodeList(nodes_);
  const {
    parentPath,
    parent
  } = this;
  if (parentPath.isExpressionStatement() || parentPath.isLabeledStatement() || isExportNamedDeclaration(parent) || parentPath.isExportDefaultDeclaration() && this.isDeclaration()) {
    return parentPath.insertAfter(nodes.map(node => {
      return isExpression(node) ? expressionStatement(node) : node;
    }));
  } else if (this.isNodeType("Expression") && !this.isJSXElement() && !parentPath.isJSXElement() || parentPath.isForStatement() && this.key === "init") {
    if (this.node) {
      const node = this.node;
      let {
        scope
      } = this;
      if (scope.path.isPattern()) {
        assertExpression(node);
        this.replaceWith(callExpression(arrowFunctionExpression([], node), []));
        this.get("callee.body").insertAfter(nodes);
        return [this];
      }
      if (isHiddenInSequenceExpression(this)) {
        nodes.unshift(node);
      } else if (isCallExpression(node) && isSuper(node.callee)) {
        nodes.unshift(node);
        nodes.push(thisExpression());
      } else if (isAlmostConstantAssignment(node, scope)) {
        nodes.unshift(node);
        nodes.push(cloneNode(node.left));
      } else if (scope.isPure(node, true)) {
        nodes.push(node);
      } else {
        if (parentPath.isMethod({
          computed: true,
          key: node
        })) {
          scope = scope.parent;
        }
        const temp = scope.generateDeclaredUidIdentifier();
        nodes.unshift(expressionStatement(assignmentExpression("=", cloneNode(temp), node)));
        nodes.push(expressionStatement(cloneNode(temp)));
      }
    }
    return this.replaceExpressionWithStatements(nodes);
  } else if (Array.isArray(this.container)) {
    return this._containerInsertAfter(nodes);
  } else if (this.isStatementOrBlock()) {
    const node = this.node;
    const shouldInsertCurrentNode = node && (!this.isExpressionStatement() || node.expression != null);
    this.replaceWith(blockStatement(shouldInsertCurrentNode ? [node] : []));
    return this.pushContainer("body", nodes);
  } else {
    throw new Error("We don't know what to do with this node type. " + "We were previously a Statement but we can't fit in here?");
  }
}
function updateSiblingKeys(fromIndex, incrementBy) {
  if (!this.parent) return;
  const paths = _cache.path.get(this.parent);
  for (const [, path] of paths) {
    if (path.key >= fromIndex) {
      path.key += incrementBy;
    }
  }
}
function _verifyNodeList(nodes) {
  if (!nodes) {
    return [];
  }
  if (!Array.isArray(nodes)) {
    nodes = [nodes];
  }
  for (let i = 0; i < nodes.length; i++) {
    const node = nodes[i];
    let msg;
    if (!node) {
      msg = "has falsy node";
    } else if (typeof node !== "object") {
      msg = "contains a non-object node";
    } else if (!node.type) {
      msg = "without a type";
    } else if (node instanceof _index.default) {
      msg = "has a NodePath when it expected a raw object";
    }
    if (msg) {
      const type = Array.isArray(node) ? "array" : typeof node;
      throw new Error(`Node list ${msg} with the index of ${i} and type of ${type}`);
    }
  }
  return nodes;
}
function unshiftContainer(listKey, nodes) {
  this._assertUnremoved();
  nodes = this._verifyNodeList(nodes);
  const path = _index.default.get({
    parentPath: this,
    parent: this.node,
    container: this.node[listKey],
    listKey,
    key: 0
  }).setContext(this.context);
  return path._containerInsertBefore(nodes);
}
function pushContainer(listKey, nodes) {
  this._assertUnremoved();
  const verifiedNodes = this._verifyNodeList(nodes);
  const container = this.node[listKey];
  const path = _index.default.get({
    parentPath: this,
    parent: this.node,
    container: container,
    listKey,
    key: container.length
  }).setContext(this.context);
  return path.replaceWithMultiple(verifiedNodes);
}
function hoist(scope = this.scope) {
  const hoister = new _hoister.default(this, scope);
  return hoister.run();
}

//# sourceMappingURL=modification.js.map

}, function(modId) { var map = {"../cache":1679363156219,"./lib/hoister":1679363156239,"./index":1679363156222}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679363156239, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _t = require("@babel/types");
var _t2 = _t;
const {
  react
} = _t;
const {
  cloneNode,
  jsxExpressionContainer,
  variableDeclaration,
  variableDeclarator
} = _t2;
const referenceVisitor = {
  ReferencedIdentifier(path, state) {
    if (path.isJSXIdentifier() && react.isCompatTag(path.node.name) && !path.parentPath.isJSXMemberExpression()) {
      return;
    }
    if (path.node.name === "this") {
      let scope = path.scope;
      do {
        if (scope.path.isFunction() && !scope.path.isArrowFunctionExpression()) {
          break;
        }
      } while (scope = scope.parent);
      if (scope) state.breakOnScopePaths.push(scope.path);
    }
    const binding = path.scope.getBinding(path.node.name);
    if (!binding) return;
    for (const violation of binding.constantViolations) {
      if (violation.scope !== binding.path.scope) {
        state.mutableBinding = true;
        path.stop();
        return;
      }
    }
    if (binding !== state.scope.getBinding(path.node.name)) return;
    state.bindings[path.node.name] = binding;
  }
};
class PathHoister {
  constructor(path, scope) {
    this.breakOnScopePaths = void 0;
    this.bindings = void 0;
    this.mutableBinding = void 0;
    this.scopes = void 0;
    this.scope = void 0;
    this.path = void 0;
    this.attachAfter = void 0;
    this.breakOnScopePaths = [];
    this.bindings = {};
    this.mutableBinding = false;
    this.scopes = [];
    this.scope = scope;
    this.path = path;
    this.attachAfter = false;
  }
  isCompatibleScope(scope) {
    for (const key of Object.keys(this.bindings)) {
      const binding = this.bindings[key];
      if (!scope.bindingIdentifierEquals(key, binding.identifier)) {
        return false;
      }
    }
    return true;
  }
  getCompatibleScopes() {
    let scope = this.path.scope;
    do {
      if (this.isCompatibleScope(scope)) {
        this.scopes.push(scope);
      } else {
        break;
      }
      if (this.breakOnScopePaths.indexOf(scope.path) >= 0) {
        break;
      }
    } while (scope = scope.parent);
  }
  getAttachmentPath() {
    let path = this._getAttachmentPath();
    if (!path) return;
    let targetScope = path.scope;
    if (targetScope.path === path) {
      targetScope = path.scope.parent;
    }
    if (targetScope.path.isProgram() || targetScope.path.isFunction()) {
      for (const name of Object.keys(this.bindings)) {
        if (!targetScope.hasOwnBinding(name)) continue;
        const binding = this.bindings[name];
        if (binding.kind === "param" || binding.path.parentKey === "params") {
          continue;
        }
        const bindingParentPath = this.getAttachmentParentForPath(binding.path);
        if (bindingParentPath.key >= path.key) {
          this.attachAfter = true;
          path = binding.path;
          for (const violationPath of binding.constantViolations) {
            if (this.getAttachmentParentForPath(violationPath).key > path.key) {
              path = violationPath;
            }
          }
        }
      }
    }
    return path;
  }
  _getAttachmentPath() {
    const scopes = this.scopes;
    const scope = scopes.pop();
    if (!scope) return;
    if (scope.path.isFunction()) {
      if (this.hasOwnParamBindings(scope)) {
        if (this.scope === scope) return;
        const bodies = scope.path.get("body").get("body");
        for (let i = 0; i < bodies.length; i++) {
          if (bodies[i].node._blockHoist) continue;
          return bodies[i];
        }
      } else {
        return this.getNextScopeAttachmentParent();
      }
    } else if (scope.path.isProgram()) {
      return this.getNextScopeAttachmentParent();
    }
  }
  getNextScopeAttachmentParent() {
    const scope = this.scopes.pop();
    if (scope) return this.getAttachmentParentForPath(scope.path);
  }
  getAttachmentParentForPath(path) {
    do {
      if (!path.parentPath || Array.isArray(path.container) && path.isStatement()) {
        return path;
      }
    } while (path = path.parentPath);
  }
  hasOwnParamBindings(scope) {
    for (const name of Object.keys(this.bindings)) {
      if (!scope.hasOwnBinding(name)) continue;
      const binding = this.bindings[name];
      if (binding.kind === "param" && binding.constant) return true;
    }
    return false;
  }
  run() {
    this.path.traverse(referenceVisitor, this);
    if (this.mutableBinding) return;
    this.getCompatibleScopes();
    const attachTo = this.getAttachmentPath();
    if (!attachTo) return;
    if (attachTo.getFunctionParent() === this.path.getFunctionParent()) return;
    let uid = attachTo.scope.generateUidIdentifier("ref");
    const declarator = variableDeclarator(uid, this.path.node);
    const insertFn = this.attachAfter ? "insertAfter" : "insertBefore";
    const [attached] = attachTo[insertFn]([attachTo.isVariableDeclarator() ? declarator : variableDeclaration("var", [declarator])]);
    const parent = this.path.parentPath;
    if (parent.isJSXElement() && this.path.container === parent.node.children) {
      uid = jsxExpressionContainer(uid);
    }
    this.path.replaceWith(cloneNode(uid));
    return attachTo.isVariableDeclarator() ? attached.get("init") : attached.get("declarations.0.init");
  }
}
exports.default = PathHoister;

//# sourceMappingURL=hoister.js.map

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679363156240, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._getKey = _getKey;
exports._getPattern = _getPattern;
exports.get = get;
exports.getAllNextSiblings = getAllNextSiblings;
exports.getAllPrevSiblings = getAllPrevSiblings;
exports.getBindingIdentifierPaths = getBindingIdentifierPaths;
exports.getBindingIdentifiers = getBindingIdentifiers;
exports.getCompletionRecords = getCompletionRecords;
exports.getNextSibling = getNextSibling;
exports.getOpposite = getOpposite;
exports.getOuterBindingIdentifierPaths = getOuterBindingIdentifierPaths;
exports.getOuterBindingIdentifiers = getOuterBindingIdentifiers;
exports.getPrevSibling = getPrevSibling;
exports.getSibling = getSibling;
var _index = require("./index");
var _t = require("@babel/types");
const {
  getBindingIdentifiers: _getBindingIdentifiers,
  getOuterBindingIdentifiers: _getOuterBindingIdentifiers,
  isDeclaration,
  numericLiteral,
  unaryExpression
} = _t;
const NORMAL_COMPLETION = 0;
const BREAK_COMPLETION = 1;
function NormalCompletion(path) {
  return {
    type: NORMAL_COMPLETION,
    path
  };
}
function BreakCompletion(path) {
  return {
    type: BREAK_COMPLETION,
    path
  };
}
function getOpposite() {
  if (this.key === "left") {
    return this.getSibling("right");
  } else if (this.key === "right") {
    return this.getSibling("left");
  }
  return null;
}
function addCompletionRecords(path, records, context) {
  if (path) {
    records.push(..._getCompletionRecords(path, context));
  }
  return records;
}
function completionRecordForSwitch(cases, records, context) {
  let lastNormalCompletions = [];
  for (let i = 0; i < cases.length; i++) {
    const casePath = cases[i];
    const caseCompletions = _getCompletionRecords(casePath, context);
    const normalCompletions = [];
    const breakCompletions = [];
    for (const c of caseCompletions) {
      if (c.type === NORMAL_COMPLETION) {
        normalCompletions.push(c);
      }
      if (c.type === BREAK_COMPLETION) {
        breakCompletions.push(c);
      }
    }
    if (normalCompletions.length) {
      lastNormalCompletions = normalCompletions;
    }
    records.push(...breakCompletions);
  }
  records.push(...lastNormalCompletions);
  return records;
}
function normalCompletionToBreak(completions) {
  completions.forEach(c => {
    c.type = BREAK_COMPLETION;
  });
}
function replaceBreakStatementInBreakCompletion(completions, reachable) {
  completions.forEach(c => {
    if (c.path.isBreakStatement({
      label: null
    })) {
      if (reachable) {
        c.path.replaceWith(unaryExpression("void", numericLiteral(0)));
      } else {
        c.path.remove();
      }
    }
  });
}
function getStatementListCompletion(paths, context) {
  const completions = [];
  if (context.canHaveBreak) {
    let lastNormalCompletions = [];
    for (let i = 0; i < paths.length; i++) {
      const path = paths[i];
      const newContext = Object.assign({}, context, {
        inCaseClause: false
      });
      if (path.isBlockStatement() && (context.inCaseClause || context.shouldPopulateBreak)) {
        newContext.shouldPopulateBreak = true;
      } else {
        newContext.shouldPopulateBreak = false;
      }
      const statementCompletions = _getCompletionRecords(path, newContext);
      if (statementCompletions.length > 0 && statementCompletions.every(c => c.type === BREAK_COMPLETION)) {
        if (lastNormalCompletions.length > 0 && statementCompletions.every(c => c.path.isBreakStatement({
          label: null
        }))) {
          normalCompletionToBreak(lastNormalCompletions);
          completions.push(...lastNormalCompletions);
          if (lastNormalCompletions.some(c => c.path.isDeclaration())) {
            completions.push(...statementCompletions);
            replaceBreakStatementInBreakCompletion(statementCompletions, true);
          }
          replaceBreakStatementInBreakCompletion(statementCompletions, false);
        } else {
          completions.push(...statementCompletions);
          if (!context.shouldPopulateBreak) {
            replaceBreakStatementInBreakCompletion(statementCompletions, true);
          }
        }
        break;
      }
      if (i === paths.length - 1) {
        completions.push(...statementCompletions);
      } else {
        lastNormalCompletions = [];
        for (let i = 0; i < statementCompletions.length; i++) {
          const c = statementCompletions[i];
          if (c.type === BREAK_COMPLETION) {
            completions.push(c);
          }
          if (c.type === NORMAL_COMPLETION) {
            lastNormalCompletions.push(c);
          }
        }
      }
    }
  } else if (paths.length) {
    for (let i = paths.length - 1; i >= 0; i--) {
      const pathCompletions = _getCompletionRecords(paths[i], context);
      if (pathCompletions.length > 1 || pathCompletions.length === 1 && !pathCompletions[0].path.isVariableDeclaration()) {
        completions.push(...pathCompletions);
        break;
      }
    }
  }
  return completions;
}
function _getCompletionRecords(path, context) {
  let records = [];
  if (path.isIfStatement()) {
    records = addCompletionRecords(path.get("consequent"), records, context);
    records = addCompletionRecords(path.get("alternate"), records, context);
  } else if (path.isDoExpression() || path.isFor() || path.isWhile() || path.isLabeledStatement()) {
    return addCompletionRecords(path.get("body"), records, context);
  } else if (path.isProgram() || path.isBlockStatement()) {
    return getStatementListCompletion(path.get("body"), context);
  } else if (path.isFunction()) {
    return _getCompletionRecords(path.get("body"), context);
  } else if (path.isTryStatement()) {
    records = addCompletionRecords(path.get("block"), records, context);
    records = addCompletionRecords(path.get("handler"), records, context);
  } else if (path.isCatchClause()) {
    return addCompletionRecords(path.get("body"), records, context);
  } else if (path.isSwitchStatement()) {
    return completionRecordForSwitch(path.get("cases"), records, context);
  } else if (path.isSwitchCase()) {
    return getStatementListCompletion(path.get("consequent"), {
      canHaveBreak: true,
      shouldPopulateBreak: false,
      inCaseClause: true
    });
  } else if (path.isBreakStatement()) {
    records.push(BreakCompletion(path));
  } else {
    records.push(NormalCompletion(path));
  }
  return records;
}
function getCompletionRecords() {
  const records = _getCompletionRecords(this, {
    canHaveBreak: false,
    shouldPopulateBreak: false,
    inCaseClause: false
  });
  return records.map(r => r.path);
}
function getSibling(key) {
  return _index.default.get({
    parentPath: this.parentPath,
    parent: this.parent,
    container: this.container,
    listKey: this.listKey,
    key: key
  }).setContext(this.context);
}
function getPrevSibling() {
  return this.getSibling(this.key - 1);
}
function getNextSibling() {
  return this.getSibling(this.key + 1);
}
function getAllNextSiblings() {
  let _key = this.key;
  let sibling = this.getSibling(++_key);
  const siblings = [];
  while (sibling.node) {
    siblings.push(sibling);
    sibling = this.getSibling(++_key);
  }
  return siblings;
}
function getAllPrevSiblings() {
  let _key = this.key;
  let sibling = this.getSibling(--_key);
  const siblings = [];
  while (sibling.node) {
    siblings.push(sibling);
    sibling = this.getSibling(--_key);
  }
  return siblings;
}
function get(key, context = true) {
  if (context === true) context = this.context;
  const parts = key.split(".");
  if (parts.length === 1) {
    return this._getKey(key, context);
  } else {
    return this._getPattern(parts, context);
  }
}
function _getKey(key, context) {
  const node = this.node;
  const container = node[key];
  if (Array.isArray(container)) {
    return container.map((_, i) => {
      return _index.default.get({
        listKey: key,
        parentPath: this,
        parent: node,
        container: container,
        key: i
      }).setContext(context);
    });
  } else {
    return _index.default.get({
      parentPath: this,
      parent: node,
      container: node,
      key: key
    }).setContext(context);
  }
}
function _getPattern(parts, context) {
  let path = this;
  for (const part of parts) {
    if (part === ".") {
      path = path.parentPath;
    } else {
      if (Array.isArray(path)) {
        path = path[part];
      } else {
        path = path.get(part, context);
      }
    }
  }
  return path;
}
function getBindingIdentifiers(duplicates) {
  return _getBindingIdentifiers(this.node, duplicates);
}
function getOuterBindingIdentifiers(duplicates) {
  return _getOuterBindingIdentifiers(this.node, duplicates);
}
function getBindingIdentifierPaths(duplicates = false, outerOnly = false) {
  const path = this;
  const search = [path];
  const ids = Object.create(null);
  while (search.length) {
    const id = search.shift();
    if (!id) continue;
    if (!id.node) continue;
    const keys = _getBindingIdentifiers.keys[id.node.type];
    if (id.isIdentifier()) {
      if (duplicates) {
        const _ids = ids[id.node.name] = ids[id.node.name] || [];
        _ids.push(id);
      } else {
        ids[id.node.name] = id;
      }
      continue;
    }
    if (id.isExportDeclaration()) {
      const declaration = id.get("declaration");
      if (isDeclaration(declaration)) {
        search.push(declaration);
      }
      continue;
    }
    if (outerOnly) {
      if (id.isFunctionDeclaration()) {
        search.push(id.get("id"));
        continue;
      }
      if (id.isFunctionExpression()) {
        continue;
      }
    }
    if (keys) {
      for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        const child = id.get(key);
        if (Array.isArray(child)) {
          search.push(...child);
        } else if (child.node) {
          search.push(child);
        }
      }
    }
  }
  return ids;
}
function getOuterBindingIdentifierPaths(duplicates = false) {
  return this.getBindingIdentifierPaths(duplicates, true);
}

//# sourceMappingURL=family.js.map

}, function(modId) { var map = {"./index":1679363156222}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679363156241, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addComment = addComment;
exports.addComments = addComments;
exports.shareCommentsWithSiblings = shareCommentsWithSiblings;
var _t = require("@babel/types");
const {
  addComment: _addComment,
  addComments: _addComments
} = _t;
function shareCommentsWithSiblings() {
  if (typeof this.key === "string") return;
  const node = this.node;
  if (!node) return;
  const trailing = node.trailingComments;
  const leading = node.leadingComments;
  if (!trailing && !leading) return;
  const prev = this.getSibling(this.key - 1);
  const next = this.getSibling(this.key + 1);
  const hasPrev = Boolean(prev.node);
  const hasNext = Boolean(next.node);
  if (hasPrev && !hasNext) {
    prev.addComments("trailing", trailing);
  } else if (hasNext && !hasPrev) {
    next.addComments("leading", leading);
  }
}
function addComment(type, content, line) {
  _addComment(this.node, type, content, line);
}
function addComments(type, comments) {
  _addComments(this.node, type, comments);
}

//# sourceMappingURL=comments.js.map

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679363156242, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isBindingIdentifier = isBindingIdentifier;
exports.isBlockScoped = isBlockScoped;
exports.isExistentialTypeParam = isExistentialTypeParam;
exports.isExpression = isExpression;
exports.isFlow = isFlow;
exports.isForAwaitStatement = isForAwaitStatement;
exports.isGenerated = isGenerated;
exports.isNumericLiteralTypeAnnotation = isNumericLiteralTypeAnnotation;
exports.isPure = isPure;
exports.isReferenced = isReferenced;
exports.isReferencedIdentifier = isReferencedIdentifier;
exports.isReferencedMemberExpression = isReferencedMemberExpression;
exports.isRestProperty = isRestProperty;
exports.isScope = isScope;
exports.isSpreadProperty = isSpreadProperty;
exports.isStatement = isStatement;
exports.isUser = isUser;
exports.isVar = isVar;
var _t = require("@babel/types");
const {
  isBinding,
  isBlockScoped: nodeIsBlockScoped,
  isExportDeclaration,
  isExpression: nodeIsExpression,
  isFlow: nodeIsFlow,
  isForStatement,
  isForXStatement,
  isIdentifier,
  isImportDeclaration,
  isImportSpecifier,
  isJSXIdentifier,
  isJSXMemberExpression,
  isMemberExpression,
  isRestElement: nodeIsRestElement,
  isReferenced: nodeIsReferenced,
  isScope: nodeIsScope,
  isStatement: nodeIsStatement,
  isVar: nodeIsVar,
  isVariableDeclaration,
  react,
  isForOfStatement
} = _t;
const {
  isCompatTag
} = react;
function isReferencedIdentifier(opts) {
  const {
    node,
    parent
  } = this;
  if (!isIdentifier(node, opts) && !isJSXMemberExpression(parent, opts)) {
    if (isJSXIdentifier(node, opts)) {
      if (isCompatTag(node.name)) return false;
    } else {
      return false;
    }
  }
  return nodeIsReferenced(node, parent, this.parentPath.parent);
}
function isReferencedMemberExpression() {
  const {
    node,
    parent
  } = this;
  return isMemberExpression(node) && nodeIsReferenced(node, parent);
}
function isBindingIdentifier() {
  const {
    node,
    parent
  } = this;
  const grandparent = this.parentPath.parent;
  return isIdentifier(node) && isBinding(node, parent, grandparent);
}
function isStatement() {
  const {
    node,
    parent
  } = this;
  if (nodeIsStatement(node)) {
    if (isVariableDeclaration(node)) {
      if (isForXStatement(parent, {
        left: node
      })) return false;
      if (isForStatement(parent, {
        init: node
      })) return false;
    }
    return true;
  } else {
    return false;
  }
}
function isExpression() {
  if (this.isIdentifier()) {
    return this.isReferencedIdentifier();
  } else {
    return nodeIsExpression(this.node);
  }
}
function isScope() {
  return nodeIsScope(this.node, this.parent);
}
function isReferenced() {
  return nodeIsReferenced(this.node, this.parent);
}
function isBlockScoped() {
  return nodeIsBlockScoped(this.node);
}
function isVar() {
  return nodeIsVar(this.node);
}
function isUser() {
  return this.node && !!this.node.loc;
}
function isGenerated() {
  return !this.isUser();
}
function isPure(constantsOnly) {
  return this.scope.isPure(this.node, constantsOnly);
}
function isFlow() {
  const {
    node
  } = this;
  if (nodeIsFlow(node)) {
    return true;
  } else if (isImportDeclaration(node)) {
    return node.importKind === "type" || node.importKind === "typeof";
  } else if (isExportDeclaration(node)) {
    return node.exportKind === "type";
  } else if (isImportSpecifier(node)) {
    return node.importKind === "type" || node.importKind === "typeof";
  } else {
    return false;
  }
}
function isRestProperty() {
  return nodeIsRestElement(this.node) && this.parentPath && this.parentPath.isObjectPattern();
}
function isSpreadProperty() {
  return nodeIsRestElement(this.node) && this.parentPath && this.parentPath.isObjectExpression();
}
function isForAwaitStatement() {
  return isForOfStatement(this.node, {
    await: true
  });
}
function isExistentialTypeParam() {
  throw new Error("`path.isExistentialTypeParam` has been renamed to `path.isExistsTypeAnnotation()` in Babel 7.");
}
function isNumericLiteralTypeAnnotation() {
  throw new Error("`path.isNumericLiteralTypeAnnotation()` has been renamed to `path.isNumberLiteralTypeAnnotation()` in Babel 7.");
}

//# sourceMappingURL=virtual-types-validator.js.map

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679363156243, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
class Hub {
  getCode() {}
  getScope() {}
  addHelper() {
    throw new Error("Helpers are not supported by the default hub.");
  }
  buildError(node, msg, Error = TypeError) {
    return new Error(msg);
  }
}
exports.default = Hub;

//# sourceMappingURL=hub.js.map

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1679363156216);
})()
//miniprogram-npm-outsideDeps=["@babel/types","debug","@babel/generator","globals","@babel/helper-split-export-declaration","@babel/helper-environment-visitor","@babel/code-frame","@babel/parser","@babel/helper-hoist-variables","@babel/helper-function-name"]
//# sourceMappingURL=index.js.map