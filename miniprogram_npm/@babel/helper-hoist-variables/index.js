module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1679363156159, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = hoistVariables;

var _t = require("@babel/types");

const {
  assignmentExpression,
  expressionStatement,
  identifier
} = _t;
const visitor = {
  Scope(path, state) {
    if (state.kind === "let") path.skip();
  },

  FunctionParent(path) {
    path.skip();
  },

  VariableDeclaration(path, state) {
    if (state.kind && path.node.kind !== state.kind) return;
    const nodes = [];
    const declarations = path.get("declarations");
    let firstId;

    for (const declar of declarations) {
      firstId = declar.node.id;

      if (declar.node.init) {
        nodes.push(expressionStatement(assignmentExpression("=", declar.node.id, declar.node.init)));
      }

      for (const name of Object.keys(declar.getBindingIdentifiers())) {
        state.emit(identifier(name), name, declar.node.init !== null);
      }
    }

    if (path.parentPath.isFor({
      left: path.node
    })) {
      path.replaceWith(firstId);
    } else {
      path.replaceWithMultiple(nodes);
    }
  }

};

function hoistVariables(path, emit, kind = "var") {
  path.traverse(visitor, {
    kind,
    emit
  });
}
}, function(modId) {var map = {}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1679363156159);
})()
//miniprogram-npm-outsideDeps=["@babel/types"]
//# sourceMappingURL=index.js.map