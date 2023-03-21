module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1679363156172, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = splitExportDeclaration;

var _t = require("@babel/types");

const {
  cloneNode,
  exportNamedDeclaration,
  exportSpecifier,
  identifier,
  variableDeclaration,
  variableDeclarator
} = _t;

function splitExportDeclaration(exportDeclaration) {
  if (!exportDeclaration.isExportDeclaration() || exportDeclaration.isExportAllDeclaration()) {
    throw new Error("Only default and named export declarations can be split.");
  }

  if (exportDeclaration.isExportDefaultDeclaration()) {
    const declaration = exportDeclaration.get("declaration");
    const standaloneDeclaration = declaration.isFunctionDeclaration() || declaration.isClassDeclaration();
    const scope = declaration.isScope() ? declaration.scope.parent : declaration.scope;
    let id = declaration.node.id;
    let needBindingRegistration = false;

    if (!id) {
      needBindingRegistration = true;
      id = scope.generateUidIdentifier("default");

      if (standaloneDeclaration || declaration.isFunctionExpression() || declaration.isClassExpression()) {
        declaration.node.id = cloneNode(id);
      }
    }

    const updatedDeclaration = standaloneDeclaration ? declaration.node : variableDeclaration("var", [variableDeclarator(cloneNode(id), declaration.node)]);
    const updatedExportDeclaration = exportNamedDeclaration(null, [exportSpecifier(cloneNode(id), identifier("default"))]);
    exportDeclaration.insertAfter(updatedExportDeclaration);
    exportDeclaration.replaceWith(updatedDeclaration);

    if (needBindingRegistration) {
      scope.registerDeclaration(exportDeclaration);
    }

    return exportDeclaration;
  } else if (exportDeclaration.get("specifiers").length > 0) {
    throw new Error("It doesn't make sense to split exported specifiers.");
  }

  const declaration = exportDeclaration.get("declaration");
  const bindingIdentifiers = declaration.getOuterBindingIdentifiers();
  const specifiers = Object.keys(bindingIdentifiers).map(name => {
    return exportSpecifier(identifier(name), identifier(name));
  });
  const aliasDeclar = exportNamedDeclaration(null, specifiers);
  exportDeclaration.insertAfter(aliasDeclar);
  exportDeclaration.replaceWith(declaration.node);
  return exportDeclaration;
}
}, function(modId) {var map = {}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1679363156172);
})()
//miniprogram-npm-outsideDeps=["@babel/types"]
//# sourceMappingURL=index.js.map