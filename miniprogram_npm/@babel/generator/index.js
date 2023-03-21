module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1679363156131, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CodeGenerator = void 0;
exports.default = generate;
var _sourceMap = require("./source-map");
var _printer = require("./printer");
class Generator extends _printer.default {
  constructor(ast, opts = {}, code) {
    const format = normalizeOptions(code, opts);
    const map = opts.sourceMaps ? new _sourceMap.default(opts, code) : null;
    super(format, map);
    this.ast = void 0;
    this.ast = ast;
  }
  generate() {
    return super.generate(this.ast);
  }
}
function normalizeOptions(code, opts) {
  const format = {
    auxiliaryCommentBefore: opts.auxiliaryCommentBefore,
    auxiliaryCommentAfter: opts.auxiliaryCommentAfter,
    shouldPrintComment: opts.shouldPrintComment,
    retainLines: opts.retainLines,
    retainFunctionParens: opts.retainFunctionParens,
    comments: opts.comments == null || opts.comments,
    compact: opts.compact,
    minified: opts.minified,
    concise: opts.concise,
    indent: {
      adjustMultilineComment: true,
      style: "  "
    },
    jsescOption: Object.assign({
      quotes: "double",
      wrap: true,
      minimal: false
    }, opts.jsescOption),
    recordAndTupleSyntaxType: opts.recordAndTupleSyntaxType,
    topicToken: opts.topicToken
  };
  {
    format.decoratorsBeforeExport = opts.decoratorsBeforeExport;
    format.jsescOption.json = opts.jsonCompatibleStrings;
  }
  if (format.minified) {
    format.compact = true;
    format.shouldPrintComment = format.shouldPrintComment || (() => format.comments);
  } else {
    format.shouldPrintComment = format.shouldPrintComment || (value => format.comments || value.includes("@license") || value.includes("@preserve"));
  }
  if (format.compact === "auto") {
    format.compact = typeof code === "string" && code.length > 500000;
    if (format.compact) {
      console.error("[BABEL] Note: The code generator has deoptimised the styling of " + `${opts.filename} as it exceeds the max of ${"500KB"}.`);
    }
  }
  if (format.compact) {
    format.indent.adjustMultilineComment = false;
  }
  const {
    auxiliaryCommentBefore,
    auxiliaryCommentAfter,
    shouldPrintComment
  } = format;
  if (auxiliaryCommentBefore && !shouldPrintComment(auxiliaryCommentBefore)) {
    format.auxiliaryCommentBefore = undefined;
  }
  if (auxiliaryCommentAfter && !shouldPrintComment(auxiliaryCommentAfter)) {
    format.auxiliaryCommentAfter = undefined;
  }
  return format;
}
class CodeGenerator {
  constructor(ast, opts, code) {
    this._generator = void 0;
    this._generator = new Generator(ast, opts, code);
  }
  generate() {
    return this._generator.generate();
  }
}
exports.CodeGenerator = CodeGenerator;
function generate(ast, opts, code) {
  const gen = new Generator(ast, opts, code);
  return gen.generate();
}

//# sourceMappingURL=index.js.map

}, function(modId) {var map = {"./source-map":1679363156132,"./printer":1679363156133}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679363156132, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _genMapping = require("@jridgewell/gen-mapping");
var _traceMapping = require("@jridgewell/trace-mapping");
class SourceMap {
  constructor(opts, code) {
    var _opts$sourceFileName;
    this._map = void 0;
    this._rawMappings = void 0;
    this._sourceFileName = void 0;
    this._lastGenLine = 0;
    this._lastSourceLine = 0;
    this._lastSourceColumn = 0;
    this._inputMap = void 0;
    const map = this._map = new _genMapping.GenMapping({
      sourceRoot: opts.sourceRoot
    });
    this._sourceFileName = (_opts$sourceFileName = opts.sourceFileName) == null ? void 0 : _opts$sourceFileName.replace(/\\/g, "/");
    this._rawMappings = undefined;
    if (opts.inputSourceMap) {
      this._inputMap = new _traceMapping.TraceMap(opts.inputSourceMap);
      const resolvedSources = this._inputMap.resolvedSources;
      if (resolvedSources.length) {
        for (let i = 0; i < resolvedSources.length; i++) {
          var _this$_inputMap$sourc;
          (0, _genMapping.setSourceContent)(map, resolvedSources[i], (_this$_inputMap$sourc = this._inputMap.sourcesContent) == null ? void 0 : _this$_inputMap$sourc[i]);
        }
      }
    }
    if (typeof code === "string" && !opts.inputSourceMap) {
      (0, _genMapping.setSourceContent)(map, this._sourceFileName, code);
    } else if (typeof code === "object") {
      for (const sourceFileName of Object.keys(code)) {
        (0, _genMapping.setSourceContent)(map, sourceFileName.replace(/\\/g, "/"), code[sourceFileName]);
      }
    }
  }
  get() {
    return (0, _genMapping.toEncodedMap)(this._map);
  }
  getDecoded() {
    return (0, _genMapping.toDecodedMap)(this._map);
  }
  getRawMappings() {
    return this._rawMappings || (this._rawMappings = (0, _genMapping.allMappings)(this._map));
  }
  mark(generated, line, column, identifierName, identifierNamePos, filename) {
    var _originalMapping;
    this._rawMappings = undefined;
    let originalMapping;
    if (line != null) {
      if (this._inputMap) {
        originalMapping = (0, _traceMapping.originalPositionFor)(this._inputMap, {
          line,
          column
        });
        if (!originalMapping.name && identifierNamePos) {
          const originalIdentifierMapping = (0, _traceMapping.originalPositionFor)(this._inputMap, identifierNamePos);
          if (originalIdentifierMapping.name) {
            identifierName = originalIdentifierMapping.name;
          }
        }
      } else {
        originalMapping = {
          source: (filename == null ? void 0 : filename.replace(/\\/g, "/")) || this._sourceFileName,
          line: line,
          column: column
        };
      }
    }
    (0, _genMapping.maybeAddMapping)(this._map, {
      name: identifierName,
      generated,
      source: (_originalMapping = originalMapping) == null ? void 0 : _originalMapping.source,
      original: originalMapping
    });
  }
}
exports.default = SourceMap;

//# sourceMappingURL=source-map.js.map

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679363156133, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _buffer = require("./buffer");
var n = require("./node");
var _t = require("@babel/types");
var generatorFunctions = require("./generators");
require("@jridgewell/trace-mapping");
const {
  isFunction,
  isStatement,
  isClassBody,
  isTSInterfaceBody,
  isTSEnumDeclaration
} = _t;
const SCIENTIFIC_NOTATION = /e/i;
const ZERO_DECIMAL_INTEGER = /\.0+$/;
const NON_DECIMAL_LITERAL = /^0[box]/;
const PURE_ANNOTATION_RE = /^\s*[@#]__PURE__\s*$/;
const HAS_NEWLINE = /[\n\r\u2028\u2029]/;
const HAS_BlOCK_COMMENT_END = /\*\//;
const {
  needsParens
} = n;
class Printer {
  constructor(format, map) {
    this.inForStatementInitCounter = 0;
    this._printStack = [];
    this._indent = 0;
    this._indentChar = 0;
    this._indentRepeat = 0;
    this._insideAux = false;
    this._parenPushNewlineState = null;
    this._noLineTerminator = false;
    this._printAuxAfterOnNextUserNode = false;
    this._printedComments = new Set();
    this._endsWithInteger = false;
    this._endsWithWord = false;
    this._lastCommentLine = 0;
    this._endsWithInnerRaw = false;
    this._indentInnerComments = true;
    this.format = format;
    this._buf = new _buffer.default(map);
    this._indentChar = format.indent.style.charCodeAt(0);
    this._indentRepeat = format.indent.style.length;
    this._inputMap = map == null ? void 0 : map._inputMap;
  }
  generate(ast) {
    this.print(ast);
    this._maybeAddAuxComment();
    return this._buf.get();
  }
  indent() {
    if (this.format.compact || this.format.concise) return;
    this._indent++;
  }
  dedent() {
    if (this.format.compact || this.format.concise) return;
    this._indent--;
  }
  semicolon(force = false) {
    this._maybeAddAuxComment();
    if (force) {
      this._appendChar(59);
    } else {
      this._queue(59);
    }
    this._noLineTerminator = false;
  }
  rightBrace() {
    if (this.format.minified) {
      this._buf.removeLastSemicolon();
    }
    this.tokenChar(125);
  }
  space(force = false) {
    if (this.format.compact) return;
    if (force) {
      this._space();
    } else if (this._buf.hasContent()) {
      const lastCp = this.getLastChar();
      if (lastCp !== 32 && lastCp !== 10) {
        this._space();
      }
    }
  }
  word(str, noLineTerminatorAfter = false) {
    this._maybePrintInnerComments();
    if (this._endsWithWord || str.charCodeAt(0) === 47 && this.endsWith(47)) {
      this._space();
    }
    this._maybeAddAuxComment();
    this._append(str, false);
    this._endsWithWord = true;
    this._noLineTerminator = noLineTerminatorAfter;
  }
  number(str) {
    this.word(str);
    this._endsWithInteger = Number.isInteger(+str) && !NON_DECIMAL_LITERAL.test(str) && !SCIENTIFIC_NOTATION.test(str) && !ZERO_DECIMAL_INTEGER.test(str) && str.charCodeAt(str.length - 1) !== 46;
  }
  token(str, maybeNewline = false) {
    this._maybePrintInnerComments();
    const lastChar = this.getLastChar();
    const strFirst = str.charCodeAt(0);
    if (lastChar === 33 && str === "--" || strFirst === 43 && lastChar === 43 || strFirst === 45 && lastChar === 45 || strFirst === 46 && this._endsWithInteger) {
      this._space();
    }
    this._maybeAddAuxComment();
    this._append(str, maybeNewline);
    this._noLineTerminator = false;
  }
  tokenChar(char) {
    this._maybePrintInnerComments();
    const lastChar = this.getLastChar();
    if (char === 43 && lastChar === 43 || char === 45 && lastChar === 45 || char === 46 && this._endsWithInteger) {
      this._space();
    }
    this._maybeAddAuxComment();
    this._appendChar(char);
    this._noLineTerminator = false;
  }
  newline(i = 1, force) {
    if (i <= 0) return;
    if (!force) {
      if (this.format.retainLines || this.format.compact) return;
      if (this.format.concise) {
        this.space();
        return;
      }
    }
    if (i > 2) i = 2;
    i -= this._buf.getNewlineCount();
    for (let j = 0; j < i; j++) {
      this._newline();
    }
    return;
  }
  endsWith(char) {
    return this.getLastChar() === char;
  }
  getLastChar() {
    return this._buf.getLastChar();
  }
  endsWithCharAndNewline() {
    return this._buf.endsWithCharAndNewline();
  }
  removeTrailingNewline() {
    this._buf.removeTrailingNewline();
  }
  exactSource(loc, cb) {
    if (!loc) {
      cb();
      return;
    }
    this._catchUp("start", loc);
    this._buf.exactSource(loc, cb);
  }
  source(prop, loc) {
    if (!loc) return;
    this._catchUp(prop, loc);
    this._buf.source(prop, loc);
  }
  sourceWithOffset(prop, loc, lineOffset, columnOffset) {
    if (!loc) return;
    this._catchUp(prop, loc);
    this._buf.sourceWithOffset(prop, loc, lineOffset, columnOffset);
  }
  withSource(prop, loc, cb) {
    if (!loc) {
      cb();
      return;
    }
    this._catchUp(prop, loc);
    this._buf.withSource(prop, loc, cb);
  }
  sourceIdentifierName(identifierName, pos) {
    if (!this._buf._canMarkIdName) return;
    const sourcePosition = this._buf._sourcePosition;
    sourcePosition.identifierNamePos = pos;
    sourcePosition.identifierName = identifierName;
  }
  _space() {
    this._queue(32);
  }
  _newline() {
    this._queue(10);
  }
  _append(str, maybeNewline) {
    this._maybeAddParen(str);
    this._maybeIndent(str.charCodeAt(0));
    this._buf.append(str, maybeNewline);
    this._endsWithWord = false;
    this._endsWithInteger = false;
  }
  _appendChar(char) {
    this._maybeAddParenChar(char);
    this._maybeIndent(char);
    this._buf.appendChar(char);
    this._endsWithWord = false;
    this._endsWithInteger = false;
  }
  _queue(char) {
    this._maybeAddParenChar(char);
    this._maybeIndent(char);
    this._buf.queue(char);
    this._endsWithWord = false;
    this._endsWithInteger = false;
  }
  _maybeIndent(firstChar) {
    if (this._indent && firstChar !== 10 && this.endsWith(10)) {
      this._buf.queueIndentation(this._indentChar, this._getIndent());
    }
  }
  _shouldIndent(firstChar) {
    if (this._indent && firstChar !== 10 && this.endsWith(10)) {
      return true;
    }
  }
  _maybeAddParenChar(char) {
    const parenPushNewlineState = this._parenPushNewlineState;
    if (!parenPushNewlineState) return;
    if (char === 32) {
      return;
    }
    if (char !== 10) {
      this._parenPushNewlineState = null;
      return;
    }
    this.tokenChar(40);
    this.indent();
    parenPushNewlineState.printed = true;
  }
  _maybeAddParen(str) {
    const parenPushNewlineState = this._parenPushNewlineState;
    if (!parenPushNewlineState) return;
    const len = str.length;
    let i;
    for (i = 0; i < len && str.charCodeAt(i) === 32; i++) continue;
    if (i === len) {
      return;
    }
    const cha = str.charCodeAt(i);
    if (cha !== 10) {
      if (cha !== 47 || i + 1 === len) {
        this._parenPushNewlineState = null;
        return;
      }
      const chaPost = str.charCodeAt(i + 1);
      if (chaPost === 42) {
        if (PURE_ANNOTATION_RE.test(str.slice(i + 2, len - 2))) {
          return;
        }
      } else if (chaPost !== 47) {
        this._parenPushNewlineState = null;
        return;
      }
    }
    this.tokenChar(40);
    this.indent();
    parenPushNewlineState.printed = true;
  }
  catchUp(line) {
    if (!this.format.retainLines) return;
    const count = line - this._buf.getCurrentLine();
    for (let i = 0; i < count; i++) {
      this._newline();
    }
  }
  _catchUp(prop, loc) {
    if (!this.format.retainLines) return;
    const pos = loc ? loc[prop] : null;
    if ((pos == null ? void 0 : pos.line) != null) {
      const count = pos.line - this._buf.getCurrentLine();
      for (let i = 0; i < count; i++) {
        this._newline();
      }
    }
  }
  _getIndent() {
    return this._indentRepeat * this._indent;
  }
  printTerminatorless(node, parent, isLabel) {
    if (isLabel) {
      this._noLineTerminator = true;
      this.print(node, parent);
    } else {
      const terminatorState = {
        printed: false
      };
      this._parenPushNewlineState = terminatorState;
      this.print(node, parent);
      if (terminatorState.printed) {
        this.dedent();
        this.newline();
        this.tokenChar(41);
      }
    }
  }
  print(node, parent, noLineTerminatorAfter, trailingCommentsLineOffset, forceParens) {
    if (!node) return;
    this._endsWithInnerRaw = false;
    const nodeType = node.type;
    const format = this.format;
    const oldConcise = format.concise;
    if (node._compact) {
      format.concise = true;
    }
    const printMethod = this[nodeType];
    if (printMethod === undefined) {
      throw new ReferenceError(`unknown node of type ${JSON.stringify(nodeType)} with constructor ${JSON.stringify(node.constructor.name)}`);
    }
    this._printStack.push(node);
    const oldInAux = this._insideAux;
    this._insideAux = node.loc == undefined;
    this._maybeAddAuxComment(this._insideAux && !oldInAux);
    let shouldPrintParens = false;
    if (forceParens) {
      shouldPrintParens = true;
    } else if (format.retainFunctionParens && nodeType === "FunctionExpression" && node.extra && node.extra.parenthesized) {
      shouldPrintParens = true;
    } else {
      shouldPrintParens = needsParens(node, parent, this._printStack);
    }
    if (shouldPrintParens) {
      this.tokenChar(40);
      this._endsWithInnerRaw = false;
    }
    this._lastCommentLine = 0;
    this._printLeadingComments(node, parent);
    const loc = nodeType === "Program" || nodeType === "File" ? null : node.loc;
    this.exactSource(loc, printMethod.bind(this, node, parent));
    if (shouldPrintParens) {
      this._printTrailingComments(node, parent);
      this.tokenChar(41);
      this._noLineTerminator = noLineTerminatorAfter;
    } else if (noLineTerminatorAfter && !this._noLineTerminator) {
      this._noLineTerminator = true;
      this._printTrailingComments(node, parent);
    } else {
      this._printTrailingComments(node, parent, trailingCommentsLineOffset);
    }
    this._printStack.pop();
    format.concise = oldConcise;
    this._insideAux = oldInAux;
    this._endsWithInnerRaw = false;
  }
  _maybeAddAuxComment(enteredPositionlessNode) {
    if (enteredPositionlessNode) this._printAuxBeforeComment();
    if (!this._insideAux) this._printAuxAfterComment();
  }
  _printAuxBeforeComment() {
    if (this._printAuxAfterOnNextUserNode) return;
    this._printAuxAfterOnNextUserNode = true;
    const comment = this.format.auxiliaryCommentBefore;
    if (comment) {
      this._printComment({
        type: "CommentBlock",
        value: comment
      }, 0);
    }
  }
  _printAuxAfterComment() {
    if (!this._printAuxAfterOnNextUserNode) return;
    this._printAuxAfterOnNextUserNode = false;
    const comment = this.format.auxiliaryCommentAfter;
    if (comment) {
      this._printComment({
        type: "CommentBlock",
        value: comment
      }, 0);
    }
  }
  getPossibleRaw(node) {
    const extra = node.extra;
    if (extra && extra.raw != null && extra.rawValue != null && node.value === extra.rawValue) {
      return extra.raw;
    }
  }
  printJoin(nodes, parent, opts = {}) {
    if (!(nodes != null && nodes.length)) return;
    if (opts.indent) this.indent();
    const newlineOpts = {
      addNewlines: opts.addNewlines,
      nextNodeStartLine: 0
    };
    const separator = opts.separator ? opts.separator.bind(this) : null;
    const len = nodes.length;
    for (let i = 0; i < len; i++) {
      const node = nodes[i];
      if (!node) continue;
      if (opts.statement) this._printNewline(i === 0, newlineOpts);
      this.print(node, parent, undefined, opts.trailingCommentsLineOffset || 0);
      opts.iterator == null ? void 0 : opts.iterator(node, i);
      if (i < len - 1) separator == null ? void 0 : separator();
      if (opts.statement) {
        if (i + 1 === len) {
          this.newline(1);
        } else {
          var _nextNode$loc;
          const nextNode = nodes[i + 1];
          newlineOpts.nextNodeStartLine = ((_nextNode$loc = nextNode.loc) == null ? void 0 : _nextNode$loc.start.line) || 0;
          this._printNewline(true, newlineOpts);
        }
      }
    }
    if (opts.indent) this.dedent();
  }
  printAndIndentOnComments(node, parent) {
    const indent = node.leadingComments && node.leadingComments.length > 0;
    if (indent) this.indent();
    this.print(node, parent);
    if (indent) this.dedent();
  }
  printBlock(parent) {
    const node = parent.body;
    if (node.type !== "EmptyStatement") {
      this.space();
    }
    this.print(node, parent);
  }
  _printTrailingComments(node, parent, lineOffset) {
    const {
      innerComments,
      trailingComments
    } = node;
    if (innerComments != null && innerComments.length) {
      this._printComments(2, innerComments, node, parent, lineOffset);
    }
    if (trailingComments != null && trailingComments.length) {
      this._printComments(2, trailingComments, node, parent, lineOffset);
    }
  }
  _printLeadingComments(node, parent) {
    const comments = node.leadingComments;
    if (!(comments != null && comments.length)) return;
    this._printComments(0, comments, node, parent);
  }
  _maybePrintInnerComments() {
    if (this._endsWithInnerRaw) this.printInnerComments();
    this._endsWithInnerRaw = true;
    this._indentInnerComments = true;
  }
  printInnerComments() {
    const node = this._printStack[this._printStack.length - 1];
    const comments = node.innerComments;
    if (!(comments != null && comments.length)) return;
    const hasSpace = this.endsWith(32);
    const indent = this._indentInnerComments;
    const printedCommentsCount = this._printedComments.size;
    if (indent) this.indent();
    this._printComments(1, comments, node);
    if (hasSpace && printedCommentsCount !== this._printedComments.size) {
      this.space();
    }
    if (indent) this.dedent();
  }
  noIndentInnerCommentsHere() {
    this._indentInnerComments = false;
  }
  printSequence(nodes, parent, opts = {}) {
    opts.statement = true;
    this.printJoin(nodes, parent, opts);
  }
  printList(items, parent, opts = {}) {
    if (opts.separator == null) {
      opts.separator = commaSeparator;
    }
    this.printJoin(items, parent, opts);
  }
  _printNewline(newLine, opts) {
    if (this.format.retainLines || this.format.compact) return;
    if (this.format.concise) {
      this.space();
      return;
    }
    if (!newLine) {
      return;
    }
    const startLine = opts.nextNodeStartLine;
    const lastCommentLine = this._lastCommentLine;
    if (startLine > 0 && lastCommentLine > 0) {
      const offset = startLine - lastCommentLine;
      if (offset >= 0) {
        this.newline(offset || 1);
        return;
      }
    }
    if (this._buf.hasContent()) {
      this.newline(1);
    }
  }
  _shouldPrintComment(comment) {
    if (comment.ignore) return 0;
    if (this._printedComments.has(comment)) return 0;
    if (this._noLineTerminator && (HAS_NEWLINE.test(comment.value) || HAS_BlOCK_COMMENT_END.test(comment.value))) {
      return 2;
    }
    this._printedComments.add(comment);
    if (!this.format.shouldPrintComment(comment.value)) {
      return 0;
    }
    return 1;
  }
  _printComment(comment, skipNewLines) {
    const noLineTerminator = this._noLineTerminator;
    const isBlockComment = comment.type === "CommentBlock";
    const printNewLines = isBlockComment && skipNewLines !== 1 && !this._noLineTerminator;
    if (printNewLines && this._buf.hasContent() && skipNewLines !== 2) {
      this.newline(1);
    }
    const lastCharCode = this.getLastChar();
    if (lastCharCode !== 91 && lastCharCode !== 123) {
      this.space();
    }
    let val;
    if (isBlockComment) {
      val = `/*${comment.value}*/`;
      if (this.format.indent.adjustMultilineComment) {
        var _comment$loc;
        const offset = (_comment$loc = comment.loc) == null ? void 0 : _comment$loc.start.column;
        if (offset) {
          const newlineRegex = new RegExp("\\n\\s{1," + offset + "}", "g");
          val = val.replace(newlineRegex, "\n");
        }
        let indentSize = this.format.retainLines ? 0 : this._buf.getCurrentColumn();
        if (this._shouldIndent(47) || this.format.retainLines) {
          indentSize += this._getIndent();
        }
        val = val.replace(/\n(?!$)/g, `\n${" ".repeat(indentSize)}`);
      }
    } else if (!noLineTerminator) {
      val = `//${comment.value}`;
    } else {
      val = `/*${comment.value}*/`;
    }
    if (this.endsWith(47)) this._space();
    this.source("start", comment.loc);
    this._append(val, isBlockComment);
    if (!isBlockComment && !noLineTerminator) {
      this.newline(1, true);
    }
    if (printNewLines && skipNewLines !== 3) {
      this.newline(1);
    }
  }
  _printComments(type, comments, node, parent, lineOffset = 0) {
    const nodeLoc = node.loc;
    const len = comments.length;
    let hasLoc = !!nodeLoc;
    const nodeStartLine = hasLoc ? nodeLoc.start.line : 0;
    const nodeEndLine = hasLoc ? nodeLoc.end.line : 0;
    let lastLine = 0;
    let leadingCommentNewline = 0;
    const maybeNewline = this._noLineTerminator ? function () {} : this.newline.bind(this);
    for (let i = 0; i < len; i++) {
      const comment = comments[i];
      const shouldPrint = this._shouldPrintComment(comment);
      if (shouldPrint === 2) {
        hasLoc = false;
        break;
      }
      if (hasLoc && comment.loc && shouldPrint === 1) {
        const commentStartLine = comment.loc.start.line;
        const commentEndLine = comment.loc.end.line;
        if (type === 0) {
          let offset = 0;
          if (i === 0) {
            if (this._buf.hasContent() && (comment.type === "CommentLine" || commentStartLine != commentEndLine)) {
              offset = leadingCommentNewline = 1;
            }
          } else {
            offset = commentStartLine - lastLine;
          }
          lastLine = commentEndLine;
          maybeNewline(offset);
          this._printComment(comment, 1);
          if (i + 1 === len) {
            maybeNewline(Math.max(nodeStartLine - lastLine, leadingCommentNewline));
            lastLine = nodeStartLine;
          }
        } else if (type === 1) {
          const offset = commentStartLine - (i === 0 ? nodeStartLine : lastLine);
          lastLine = commentEndLine;
          maybeNewline(offset);
          this._printComment(comment, 1);
          if (i + 1 === len) {
            maybeNewline(Math.min(1, nodeEndLine - lastLine));
            lastLine = nodeEndLine;
          }
        } else {
          const offset = commentStartLine - (i === 0 ? nodeEndLine - lineOffset : lastLine);
          lastLine = commentEndLine;
          maybeNewline(offset);
          this._printComment(comment, 1);
        }
      } else {
        hasLoc = false;
        if (shouldPrint !== 1) {
          continue;
        }
        if (len === 1) {
          const singleLine = comment.loc ? comment.loc.start.line === comment.loc.end.line : !HAS_NEWLINE.test(comment.value);
          const shouldSkipNewline = singleLine && !isStatement(node) && !isClassBody(parent) && !isTSInterfaceBody(parent) && !isTSEnumDeclaration(parent);
          if (type === 0) {
            this._printComment(comment, shouldSkipNewline && node.type !== "ObjectExpression" || singleLine && isFunction(parent, {
              body: node
            }) ? 1 : 0);
          } else if (shouldSkipNewline && type === 2) {
            this._printComment(comment, 1);
          } else {
            this._printComment(comment, 0);
          }
        } else if (type === 1 && !(node.type === "ObjectExpression" && node.properties.length > 1) && node.type !== "ClassBody" && node.type !== "TSInterfaceBody") {
          this._printComment(comment, i === 0 ? 2 : i === len - 1 ? 3 : 0);
        } else {
          this._printComment(comment, 0);
        }
      }
    }
    if (type === 2 && hasLoc && lastLine) {
      this._lastCommentLine = lastLine;
    }
  }
}
Object.assign(Printer.prototype, generatorFunctions);
{
  Printer.prototype.Noop = function Noop() {};
}
var _default = Printer;
exports.default = _default;
function commaSeparator() {
  this.tokenChar(44);
  this.space();
}

//# sourceMappingURL=printer.js.map

}, function(modId) { var map = {"./buffer":1679363156134,"./node":1679363156135,"./generators":1679363156138}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679363156134, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
class Buffer {
  constructor(map) {
    this._map = null;
    this._buf = "";
    this._str = "";
    this._appendCount = 0;
    this._last = 0;
    this._queue = [];
    this._queueCursor = 0;
    this._canMarkIdName = true;
    this._position = {
      line: 1,
      column: 0
    };
    this._sourcePosition = {
      identifierName: undefined,
      identifierNamePos: undefined,
      line: undefined,
      column: undefined,
      filename: undefined
    };
    this._map = map;
    this._allocQueue();
  }
  _allocQueue() {
    const queue = this._queue;
    for (let i = 0; i < 16; i++) {
      queue.push({
        char: 0,
        repeat: 1,
        line: undefined,
        column: undefined,
        identifierName: undefined,
        identifierNamePos: undefined,
        filename: ""
      });
    }
  }
  _pushQueue(char, repeat, line, column, filename) {
    const cursor = this._queueCursor;
    if (cursor === this._queue.length) {
      this._allocQueue();
    }
    const item = this._queue[cursor];
    item.char = char;
    item.repeat = repeat;
    item.line = line;
    item.column = column;
    item.filename = filename;
    this._queueCursor++;
  }
  _popQueue() {
    if (this._queueCursor === 0) {
      throw new Error("Cannot pop from empty queue");
    }
    return this._queue[--this._queueCursor];
  }
  get() {
    this._flush();
    const map = this._map;
    const result = {
      code: (this._buf + this._str).trimRight(),
      decodedMap: map == null ? void 0 : map.getDecoded(),
      get __mergedMap() {
        return this.map;
      },
      get map() {
        const resultMap = map ? map.get() : null;
        result.map = resultMap;
        return resultMap;
      },
      set map(value) {
        Object.defineProperty(result, "map", {
          value,
          writable: true
        });
      },
      get rawMappings() {
        const mappings = map == null ? void 0 : map.getRawMappings();
        result.rawMappings = mappings;
        return mappings;
      },
      set rawMappings(value) {
        Object.defineProperty(result, "rawMappings", {
          value,
          writable: true
        });
      }
    };
    return result;
  }
  append(str, maybeNewline) {
    this._flush();
    this._append(str, this._sourcePosition, maybeNewline);
  }
  appendChar(char) {
    this._flush();
    this._appendChar(char, 1, this._sourcePosition);
  }
  queue(char) {
    if (char === 10) {
      while (this._queueCursor !== 0) {
        const char = this._queue[this._queueCursor - 1].char;
        if (char !== 32 && char !== 9) {
          break;
        }
        this._queueCursor--;
      }
    }
    const sourcePosition = this._sourcePosition;
    this._pushQueue(char, 1, sourcePosition.line, sourcePosition.column, sourcePosition.filename);
  }
  queueIndentation(char, repeat) {
    this._pushQueue(char, repeat, undefined, undefined, undefined);
  }
  _flush() {
    const queueCursor = this._queueCursor;
    const queue = this._queue;
    for (let i = 0; i < queueCursor; i++) {
      const item = queue[i];
      this._appendChar(item.char, item.repeat, item);
    }
    this._queueCursor = 0;
  }
  _appendChar(char, repeat, sourcePos) {
    this._last = char;
    this._str += repeat > 1 ? String.fromCharCode(char).repeat(repeat) : String.fromCharCode(char);
    if (char !== 10) {
      this._mark(sourcePos.line, sourcePos.column, sourcePos.identifierName, sourcePos.identifierNamePos, sourcePos.filename);
      this._position.column += repeat;
    } else {
      this._position.line++;
      this._position.column = 0;
    }
    if (this._canMarkIdName) {
      sourcePos.identifierName = undefined;
      sourcePos.identifierNamePos = undefined;
    }
  }
  _append(str, sourcePos, maybeNewline) {
    const len = str.length;
    const position = this._position;
    this._last = str.charCodeAt(len - 1);
    if (++this._appendCount > 4096) {
      +this._str;
      this._buf += this._str;
      this._str = str;
      this._appendCount = 0;
    } else {
      this._str += str;
    }
    if (!maybeNewline && !this._map) {
      position.column += len;
      return;
    }
    const {
      column,
      identifierName,
      identifierNamePos,
      filename
    } = sourcePos;
    let line = sourcePos.line;
    if ((identifierName != null || identifierNamePos != null) && this._canMarkIdName) {
      sourcePos.identifierName = undefined;
      sourcePos.identifierNamePos = undefined;
    }
    let i = str.indexOf("\n");
    let last = 0;
    if (i !== 0) {
      this._mark(line, column, identifierName, identifierNamePos, filename);
    }
    while (i !== -1) {
      position.line++;
      position.column = 0;
      last = i + 1;
      if (last < len && line !== undefined) {
        this._mark(++line, 0, null, null, filename);
      }
      i = str.indexOf("\n", last);
    }
    position.column += len - last;
  }
  _mark(line, column, identifierName, identifierNamePos, filename) {
    var _this$_map;
    (_this$_map = this._map) == null ? void 0 : _this$_map.mark(this._position, line, column, identifierName, identifierNamePos, filename);
  }
  removeTrailingNewline() {
    const queueCursor = this._queueCursor;
    if (queueCursor !== 0 && this._queue[queueCursor - 1].char === 10) {
      this._queueCursor--;
    }
  }
  removeLastSemicolon() {
    const queueCursor = this._queueCursor;
    if (queueCursor !== 0 && this._queue[queueCursor - 1].char === 59) {
      this._queueCursor--;
    }
  }
  getLastChar() {
    const queueCursor = this._queueCursor;
    return queueCursor !== 0 ? this._queue[queueCursor - 1].char : this._last;
  }
  getNewlineCount() {
    const queueCursor = this._queueCursor;
    let count = 0;
    if (queueCursor === 0) return this._last === 10 ? 1 : 0;
    for (let i = queueCursor - 1; i >= 0; i--) {
      if (this._queue[i].char !== 10) {
        break;
      }
      count++;
    }
    return count === queueCursor && this._last === 10 ? count + 1 : count;
  }
  endsWithCharAndNewline() {
    const queue = this._queue;
    const queueCursor = this._queueCursor;
    if (queueCursor !== 0) {
      const lastCp = queue[queueCursor - 1].char;
      if (lastCp !== 10) return;
      if (queueCursor > 1) {
        return queue[queueCursor - 2].char;
      } else {
        return this._last;
      }
    }
  }
  hasContent() {
    return this._queueCursor !== 0 || !!this._last;
  }
  exactSource(loc, cb) {
    if (!this._map) {
      cb();
      return;
    }
    this.source("start", loc);
    const identifierName = loc.identifierName;
    const sourcePos = this._sourcePosition;
    if (identifierName) {
      this._canMarkIdName = false;
      sourcePos.identifierName = identifierName;
    }
    cb();
    if (identifierName) {
      this._canMarkIdName = true;
      sourcePos.identifierName = undefined;
      sourcePos.identifierNamePos = undefined;
    }
    this.source("end", loc);
  }
  source(prop, loc) {
    if (!this._map) return;
    this._normalizePosition(prop, loc, 0, 0);
  }
  sourceWithOffset(prop, loc, lineOffset, columnOffset) {
    if (!this._map) return;
    this._normalizePosition(prop, loc, lineOffset, columnOffset);
  }
  withSource(prop, loc, cb) {
    if (this._map) {
      this.source(prop, loc);
    }
    cb();
  }
  _normalizePosition(prop, loc, lineOffset, columnOffset) {
    const pos = loc[prop];
    const target = this._sourcePosition;
    if (pos) {
      target.line = pos.line + lineOffset;
      target.column = pos.column + columnOffset;
      target.filename = loc.filename;
    }
  }
  getCurrentColumn() {
    const queue = this._queue;
    const queueCursor = this._queueCursor;
    let lastIndex = -1;
    let len = 0;
    for (let i = 0; i < queueCursor; i++) {
      const item = queue[i];
      if (item.char === 10) {
        lastIndex = len;
      }
      len += item.repeat;
    }
    return lastIndex === -1 ? this._position.column + len : len - 1 - lastIndex;
  }
  getCurrentLine() {
    let count = 0;
    const queue = this._queue;
    for (let i = 0; i < this._queueCursor; i++) {
      if (queue[i].char === 10) {
        count++;
      }
    }
    return this._position.line + count;
  }
}
exports.default = Buffer;

//# sourceMappingURL=buffer.js.map

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679363156135, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.needsParens = needsParens;
exports.needsWhitespace = needsWhitespace;
exports.needsWhitespaceAfter = needsWhitespaceAfter;
exports.needsWhitespaceBefore = needsWhitespaceBefore;
var whitespace = require("./whitespace");
var parens = require("./parentheses");
var _t = require("@babel/types");
const {
  FLIPPED_ALIAS_KEYS,
  isCallExpression,
  isExpressionStatement,
  isMemberExpression,
  isNewExpression
} = _t;
function expandAliases(obj) {
  const newObj = {};
  function add(type, func) {
    const fn = newObj[type];
    newObj[type] = fn ? function (node, parent, stack) {
      const result = fn(node, parent, stack);
      return result == null ? func(node, parent, stack) : result;
    } : func;
  }
  for (const type of Object.keys(obj)) {
    const aliases = FLIPPED_ALIAS_KEYS[type];
    if (aliases) {
      for (const alias of aliases) {
        add(alias, obj[type]);
      }
    } else {
      add(type, obj[type]);
    }
  }
  return newObj;
}
const expandedParens = expandAliases(parens);
const expandedWhitespaceNodes = expandAliases(whitespace.nodes);
function find(obj, node, parent, printStack) {
  const fn = obj[node.type];
  return fn ? fn(node, parent, printStack) : null;
}
function isOrHasCallExpression(node) {
  if (isCallExpression(node)) {
    return true;
  }
  return isMemberExpression(node) && isOrHasCallExpression(node.object);
}
function needsWhitespace(node, parent, type) {
  if (!node) return false;
  if (isExpressionStatement(node)) {
    node = node.expression;
  }
  const flag = find(expandedWhitespaceNodes, node, parent);
  if (typeof flag === "number") {
    return (flag & type) !== 0;
  }
  return false;
}
function needsWhitespaceBefore(node, parent) {
  return needsWhitespace(node, parent, 1);
}
function needsWhitespaceAfter(node, parent) {
  return needsWhitespace(node, parent, 2);
}
function needsParens(node, parent, printStack) {
  if (!parent) return false;
  if (isNewExpression(parent) && parent.callee === node) {
    if (isOrHasCallExpression(node)) return true;
  }
  return find(expandedParens, node, parent, printStack);
}

//# sourceMappingURL=index.js.map

}, function(modId) { var map = {"./whitespace":1679363156136,"./parentheses":1679363156137}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679363156136, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.nodes = void 0;
var _t = require("@babel/types");
const {
  FLIPPED_ALIAS_KEYS,
  isArrayExpression,
  isAssignmentExpression,
  isBinary,
  isBlockStatement,
  isCallExpression,
  isFunction,
  isIdentifier,
  isLiteral,
  isMemberExpression,
  isObjectExpression,
  isOptionalCallExpression,
  isOptionalMemberExpression,
  isStringLiteral
} = _t;
function crawlInternal(node, state) {
  if (!node) return state;
  if (isMemberExpression(node) || isOptionalMemberExpression(node)) {
    crawlInternal(node.object, state);
    if (node.computed) crawlInternal(node.property, state);
  } else if (isBinary(node) || isAssignmentExpression(node)) {
    crawlInternal(node.left, state);
    crawlInternal(node.right, state);
  } else if (isCallExpression(node) || isOptionalCallExpression(node)) {
    state.hasCall = true;
    crawlInternal(node.callee, state);
  } else if (isFunction(node)) {
    state.hasFunction = true;
  } else if (isIdentifier(node)) {
    state.hasHelper = state.hasHelper || node.callee && isHelper(node.callee);
  }
  return state;
}
function crawl(node) {
  return crawlInternal(node, {
    hasCall: false,
    hasFunction: false,
    hasHelper: false
  });
}
function isHelper(node) {
  if (!node) return false;
  if (isMemberExpression(node)) {
    return isHelper(node.object) || isHelper(node.property);
  } else if (isIdentifier(node)) {
    return node.name === "require" || node.name.charCodeAt(0) === 95;
  } else if (isCallExpression(node)) {
    return isHelper(node.callee);
  } else if (isBinary(node) || isAssignmentExpression(node)) {
    return isIdentifier(node.left) && isHelper(node.left) || isHelper(node.right);
  } else {
    return false;
  }
}
function isType(node) {
  return isLiteral(node) || isObjectExpression(node) || isArrayExpression(node) || isIdentifier(node) || isMemberExpression(node);
}
const nodes = {
  AssignmentExpression(node) {
    const state = crawl(node.right);
    if (state.hasCall && state.hasHelper || state.hasFunction) {
      return state.hasFunction ? 1 | 2 : 2;
    }
  },
  SwitchCase(node, parent) {
    return (!!node.consequent.length || parent.cases[0] === node ? 1 : 0) | (!node.consequent.length && parent.cases[parent.cases.length - 1] === node ? 2 : 0);
  },
  LogicalExpression(node) {
    if (isFunction(node.left) || isFunction(node.right)) {
      return 2;
    }
  },
  Literal(node) {
    if (isStringLiteral(node) && node.value === "use strict") {
      return 2;
    }
  },
  CallExpression(node) {
    if (isFunction(node.callee) || isHelper(node)) {
      return 1 | 2;
    }
  },
  OptionalCallExpression(node) {
    if (isFunction(node.callee)) {
      return 1 | 2;
    }
  },
  VariableDeclaration(node) {
    for (let i = 0; i < node.declarations.length; i++) {
      const declar = node.declarations[i];
      let enabled = isHelper(declar.id) && !isType(declar.init);
      if (!enabled && declar.init) {
        const state = crawl(declar.init);
        enabled = isHelper(declar.init) && state.hasCall || state.hasFunction;
      }
      if (enabled) {
        return 1 | 2;
      }
    }
  },
  IfStatement(node) {
    if (isBlockStatement(node.consequent)) {
      return 1 | 2;
    }
  }
};
exports.nodes = nodes;
nodes.ObjectProperty = nodes.ObjectTypeProperty = nodes.ObjectMethod = function (node, parent) {
  if (parent.properties[0] === node) {
    return 1;
  }
};
nodes.ObjectTypeCallProperty = function (node, parent) {
  var _parent$properties;
  if (parent.callProperties[0] === node && !((_parent$properties = parent.properties) != null && _parent$properties.length)) {
    return 1;
  }
};
nodes.ObjectTypeIndexer = function (node, parent) {
  var _parent$properties2, _parent$callPropertie;
  if (parent.indexers[0] === node && !((_parent$properties2 = parent.properties) != null && _parent$properties2.length) && !((_parent$callPropertie = parent.callProperties) != null && _parent$callPropertie.length)) {
    return 1;
  }
};
nodes.ObjectTypeInternalSlot = function (node, parent) {
  var _parent$properties3, _parent$callPropertie2, _parent$indexers;
  if (parent.internalSlots[0] === node && !((_parent$properties3 = parent.properties) != null && _parent$properties3.length) && !((_parent$callPropertie2 = parent.callProperties) != null && _parent$callPropertie2.length) && !((_parent$indexers = parent.indexers) != null && _parent$indexers.length)) {
    return 1;
  }
};
[["Function", true], ["Class", true], ["Loop", true], ["LabeledStatement", true], ["SwitchStatement", true], ["TryStatement", true]].forEach(function ([type, amounts]) {
  [type].concat(FLIPPED_ALIAS_KEYS[type] || []).forEach(function (type) {
    const ret = amounts ? 1 | 2 : 0;
    nodes[type] = () => ret;
  });
});

//# sourceMappingURL=whitespace.js.map

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679363156137, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ArrowFunctionExpression = ArrowFunctionExpression;
exports.AssignmentExpression = AssignmentExpression;
exports.Binary = Binary;
exports.BinaryExpression = BinaryExpression;
exports.ClassExpression = ClassExpression;
exports.ConditionalExpression = ConditionalExpression;
exports.DoExpression = DoExpression;
exports.FunctionExpression = FunctionExpression;
exports.FunctionTypeAnnotation = FunctionTypeAnnotation;
exports.Identifier = Identifier;
exports.LogicalExpression = LogicalExpression;
exports.NullableTypeAnnotation = NullableTypeAnnotation;
exports.ObjectExpression = ObjectExpression;
exports.OptionalIndexedAccessType = OptionalIndexedAccessType;
exports.OptionalCallExpression = exports.OptionalMemberExpression = OptionalMemberExpression;
exports.SequenceExpression = SequenceExpression;
exports.TSTypeAssertion = exports.TSSatisfiesExpression = exports.TSAsExpression = TSAsExpression;
exports.TSInferType = TSInferType;
exports.TSInstantiationExpression = TSInstantiationExpression;
exports.TSIntersectionType = exports.TSUnionType = TSUnionType;
exports.UnaryLike = UnaryLike;
exports.IntersectionTypeAnnotation = exports.UnionTypeAnnotation = UnionTypeAnnotation;
exports.UpdateExpression = UpdateExpression;
exports.AwaitExpression = exports.YieldExpression = YieldExpression;
var _t = require("@babel/types");
const {
  isArrayTypeAnnotation,
  isArrowFunctionExpression,
  isAssignmentExpression,
  isAwaitExpression,
  isBinary,
  isBinaryExpression,
  isUpdateExpression,
  isCallExpression,
  isClass,
  isClassExpression,
  isConditional,
  isConditionalExpression,
  isExportDeclaration,
  isExportDefaultDeclaration,
  isExpressionStatement,
  isFor,
  isForInStatement,
  isForOfStatement,
  isForStatement,
  isFunctionExpression,
  isIfStatement,
  isIndexedAccessType,
  isIntersectionTypeAnnotation,
  isLogicalExpression,
  isMemberExpression,
  isNewExpression,
  isNullableTypeAnnotation,
  isObjectPattern,
  isOptionalCallExpression,
  isOptionalMemberExpression,
  isReturnStatement,
  isSequenceExpression,
  isSwitchStatement,
  isTSArrayType,
  isTSAsExpression,
  isTSInstantiationExpression,
  isTSIntersectionType,
  isTSNonNullExpression,
  isTSOptionalType,
  isTSRestType,
  isTSTypeAssertion,
  isTSUnionType,
  isTaggedTemplateExpression,
  isThrowStatement,
  isTypeAnnotation,
  isUnaryLike,
  isUnionTypeAnnotation,
  isVariableDeclarator,
  isWhileStatement,
  isYieldExpression,
  isTSSatisfiesExpression
} = _t;
const PRECEDENCE = {
  "||": 0,
  "??": 0,
  "|>": 0,
  "&&": 1,
  "|": 2,
  "^": 3,
  "&": 4,
  "==": 5,
  "===": 5,
  "!=": 5,
  "!==": 5,
  "<": 6,
  ">": 6,
  "<=": 6,
  ">=": 6,
  in: 6,
  instanceof: 6,
  ">>": 7,
  "<<": 7,
  ">>>": 7,
  "+": 8,
  "-": 8,
  "*": 9,
  "/": 9,
  "%": 9,
  "**": 10
};
function isTSTypeExpression(node) {
  return isTSAsExpression(node) || isTSSatisfiesExpression(node) || isTSTypeAssertion(node);
}
const isClassExtendsClause = (node, parent) => isClass(parent, {
  superClass: node
});
const hasPostfixPart = (node, parent) => (isMemberExpression(parent) || isOptionalMemberExpression(parent)) && parent.object === node || (isCallExpression(parent) || isOptionalCallExpression(parent) || isNewExpression(parent)) && parent.callee === node || isTaggedTemplateExpression(parent) && parent.tag === node || isTSNonNullExpression(parent);
function NullableTypeAnnotation(node, parent) {
  return isArrayTypeAnnotation(parent);
}
function FunctionTypeAnnotation(node, parent, printStack) {
  if (printStack.length < 3) return;
  return isUnionTypeAnnotation(parent) || isIntersectionTypeAnnotation(parent) || isArrayTypeAnnotation(parent) || isTypeAnnotation(parent) && isArrowFunctionExpression(printStack[printStack.length - 3]);
}
function UpdateExpression(node, parent) {
  return hasPostfixPart(node, parent) || isClassExtendsClause(node, parent);
}
function ObjectExpression(node, parent, printStack) {
  return isFirstInContext(printStack, 1 | 2);
}
function DoExpression(node, parent, printStack) {
  return !node.async && isFirstInContext(printStack, 1);
}
function Binary(node, parent) {
  if (node.operator === "**" && isBinaryExpression(parent, {
    operator: "**"
  })) {
    return parent.left === node;
  }
  if (isClassExtendsClause(node, parent)) {
    return true;
  }
  if (hasPostfixPart(node, parent) || isUnaryLike(parent) || isAwaitExpression(parent)) {
    return true;
  }
  if (isBinary(parent)) {
    const parentOp = parent.operator;
    const parentPos = PRECEDENCE[parentOp];
    const nodeOp = node.operator;
    const nodePos = PRECEDENCE[nodeOp];
    if (parentPos === nodePos && parent.right === node && !isLogicalExpression(parent) || parentPos > nodePos) {
      return true;
    }
  }
}
function UnionTypeAnnotation(node, parent) {
  return isArrayTypeAnnotation(parent) || isNullableTypeAnnotation(parent) || isIntersectionTypeAnnotation(parent) || isUnionTypeAnnotation(parent);
}
function OptionalIndexedAccessType(node, parent) {
  return isIndexedAccessType(parent, {
    objectType: node
  });
}
function TSAsExpression() {
  return true;
}
function TSUnionType(node, parent) {
  return isTSArrayType(parent) || isTSOptionalType(parent) || isTSIntersectionType(parent) || isTSUnionType(parent) || isTSRestType(parent);
}
function TSInferType(node, parent) {
  return isTSArrayType(parent) || isTSOptionalType(parent);
}
function TSInstantiationExpression(node, parent) {
  return (isCallExpression(parent) || isOptionalCallExpression(parent) || isNewExpression(parent) || isTSInstantiationExpression(parent)) && !!parent.typeParameters;
}
function BinaryExpression(node, parent) {
  return node.operator === "in" && (isVariableDeclarator(parent) || isFor(parent));
}
function SequenceExpression(node, parent) {
  if (isForStatement(parent) || isThrowStatement(parent) || isReturnStatement(parent) || isIfStatement(parent) && parent.test === node || isWhileStatement(parent) && parent.test === node || isForInStatement(parent) && parent.right === node || isSwitchStatement(parent) && parent.discriminant === node || isExpressionStatement(parent) && parent.expression === node) {
    return false;
  }
  return true;
}
function YieldExpression(node, parent) {
  return isBinary(parent) || isUnaryLike(parent) || hasPostfixPart(node, parent) || isAwaitExpression(parent) && isYieldExpression(node) || isConditionalExpression(parent) && node === parent.test || isClassExtendsClause(node, parent);
}
function ClassExpression(node, parent, printStack) {
  return isFirstInContext(printStack, 1 | 4);
}
function UnaryLike(node, parent) {
  return hasPostfixPart(node, parent) || isBinaryExpression(parent, {
    operator: "**",
    left: node
  }) || isClassExtendsClause(node, parent);
}
function FunctionExpression(node, parent, printStack) {
  return isFirstInContext(printStack, 1 | 4);
}
function ArrowFunctionExpression(node, parent) {
  return isExportDeclaration(parent) || ConditionalExpression(node, parent);
}
function ConditionalExpression(node, parent) {
  if (isUnaryLike(parent) || isBinary(parent) || isConditionalExpression(parent, {
    test: node
  }) || isAwaitExpression(parent) || isTSTypeExpression(parent)) {
    return true;
  }
  return UnaryLike(node, parent);
}
function OptionalMemberExpression(node, parent) {
  return isCallExpression(parent, {
    callee: node
  }) || isMemberExpression(parent, {
    object: node
  });
}
function AssignmentExpression(node, parent) {
  if (isObjectPattern(node.left)) {
    return true;
  } else {
    return ConditionalExpression(node, parent);
  }
}
function LogicalExpression(node, parent) {
  if (isTSTypeExpression(parent)) return true;
  switch (node.operator) {
    case "||":
      if (!isLogicalExpression(parent)) return false;
      return parent.operator === "??" || parent.operator === "&&";
    case "&&":
      return isLogicalExpression(parent, {
        operator: "??"
      });
    case "??":
      return isLogicalExpression(parent) && parent.operator !== "??";
  }
}
function Identifier(node, parent, printStack) {
  var _node$extra;
  if ((_node$extra = node.extra) != null && _node$extra.parenthesized && isAssignmentExpression(parent, {
    left: node
  }) && (isFunctionExpression(parent.right) || isClassExpression(parent.right)) && parent.right.id == null) {
    return true;
  }
  if (node.name === "let") {
    const isFollowedByBracket = isMemberExpression(parent, {
      object: node,
      computed: true
    }) || isOptionalMemberExpression(parent, {
      object: node,
      computed: true,
      optional: false
    });
    return isFirstInContext(printStack, isFollowedByBracket ? 1 | 8 | 16 | 32 : 32);
  }
  return node.name === "async" && isForOfStatement(parent) && node === parent.left;
}
function isFirstInContext(printStack, checkParam) {
  const expressionStatement = checkParam & 1;
  const arrowBody = checkParam & 2;
  const exportDefault = checkParam & 4;
  const forHead = checkParam & 8;
  const forInHead = checkParam & 16;
  const forOfHead = checkParam & 32;
  let i = printStack.length - 1;
  if (i <= 0) return;
  let node = printStack[i];
  i--;
  let parent = printStack[i];
  while (i >= 0) {
    if (expressionStatement && isExpressionStatement(parent, {
      expression: node
    }) || exportDefault && isExportDefaultDeclaration(parent, {
      declaration: node
    }) || arrowBody && isArrowFunctionExpression(parent, {
      body: node
    }) || forHead && isForStatement(parent, {
      init: node
    }) || forInHead && isForInStatement(parent, {
      left: node
    }) || forOfHead && isForOfStatement(parent, {
      left: node
    })) {
      return true;
    }
    if (i > 0 && (hasPostfixPart(node, parent) && !isNewExpression(parent) || isSequenceExpression(parent) && parent.expressions[0] === node || isUpdateExpression(parent) && !parent.prefix || isConditional(parent, {
      test: node
    }) || isBinary(parent, {
      left: node
    }) || isAssignmentExpression(parent, {
      left: node
    }))) {
      node = parent;
      i--;
      parent = printStack[i];
    } else {
      return false;
    }
  }
  return false;
}

//# sourceMappingURL=parentheses.js.map

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679363156138, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _templateLiterals = require("./template-literals");
Object.keys(_templateLiterals).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _templateLiterals[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _templateLiterals[key];
    }
  });
});
var _expressions = require("./expressions");
Object.keys(_expressions).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _expressions[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _expressions[key];
    }
  });
});
var _statements = require("./statements");
Object.keys(_statements).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _statements[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _statements[key];
    }
  });
});
var _classes = require("./classes");
Object.keys(_classes).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _classes[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _classes[key];
    }
  });
});
var _methods = require("./methods");
Object.keys(_methods).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _methods[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _methods[key];
    }
  });
});
var _modules = require("./modules");
Object.keys(_modules).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _modules[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _modules[key];
    }
  });
});
var _types = require("./types");
Object.keys(_types).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _types[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _types[key];
    }
  });
});
var _flow = require("./flow");
Object.keys(_flow).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _flow[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _flow[key];
    }
  });
});
var _base = require("./base");
Object.keys(_base).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _base[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _base[key];
    }
  });
});
var _jsx = require("./jsx");
Object.keys(_jsx).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _jsx[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _jsx[key];
    }
  });
});
var _typescript = require("./typescript");
Object.keys(_typescript).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _typescript[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _typescript[key];
    }
  });
});

//# sourceMappingURL=index.js.map

}, function(modId) { var map = {"./template-literals":1679363156139,"./expressions":1679363156140,"./statements":1679363156141,"./classes":1679363156142,"./methods":1679363156143,"./modules":1679363156144,"./types":1679363156145,"./flow":1679363156146,"./base":1679363156147,"./jsx":1679363156148,"./typescript":1679363156149}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679363156139, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TaggedTemplateExpression = TaggedTemplateExpression;
exports.TemplateElement = TemplateElement;
exports.TemplateLiteral = TemplateLiteral;
function TaggedTemplateExpression(node) {
  this.print(node.tag, node);
  this.print(node.typeParameters, node);
  this.print(node.quasi, node);
}
function TemplateElement(node, parent) {
  const isFirst = parent.quasis[0] === node;
  const isLast = parent.quasis[parent.quasis.length - 1] === node;
  const value = (isFirst ? "`" : "}") + node.value.raw + (isLast ? "`" : "${");
  this.token(value, true);
}
function TemplateLiteral(node) {
  const quasis = node.quasis;
  for (let i = 0; i < quasis.length; i++) {
    this.print(quasis[i], node);
    if (i + 1 < quasis.length) {
      this.print(node.expressions[i], node);
    }
  }
}

//# sourceMappingURL=template-literals.js.map

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679363156140, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LogicalExpression = exports.BinaryExpression = exports.AssignmentExpression = AssignmentExpression;
exports.AssignmentPattern = AssignmentPattern;
exports.AwaitExpression = AwaitExpression;
exports.BindExpression = BindExpression;
exports.CallExpression = CallExpression;
exports.ConditionalExpression = ConditionalExpression;
exports.Decorator = Decorator;
exports.DoExpression = DoExpression;
exports.EmptyStatement = EmptyStatement;
exports.ExpressionStatement = ExpressionStatement;
exports.Import = Import;
exports.MemberExpression = MemberExpression;
exports.MetaProperty = MetaProperty;
exports.ModuleExpression = ModuleExpression;
exports.NewExpression = NewExpression;
exports.OptionalCallExpression = OptionalCallExpression;
exports.OptionalMemberExpression = OptionalMemberExpression;
exports.ParenthesizedExpression = ParenthesizedExpression;
exports.PrivateName = PrivateName;
exports.SequenceExpression = SequenceExpression;
exports.Super = Super;
exports.ThisExpression = ThisExpression;
exports.UnaryExpression = UnaryExpression;
exports.UpdateExpression = UpdateExpression;
exports.V8IntrinsicIdentifier = V8IntrinsicIdentifier;
exports.YieldExpression = YieldExpression;
exports._shouldPrintDecoratorsBeforeExport = _shouldPrintDecoratorsBeforeExport;
var _t = require("@babel/types");
var n = require("../node");
const {
  isCallExpression,
  isLiteral,
  isMemberExpression,
  isNewExpression
} = _t;
function UnaryExpression(node) {
  if (node.operator === "void" || node.operator === "delete" || node.operator === "typeof" || node.operator === "throw") {
    this.word(node.operator);
    this.space();
  } else {
    this.token(node.operator);
  }
  this.print(node.argument, node);
}
function DoExpression(node) {
  if (node.async) {
    this.word("async", true);
    this.space();
  }
  this.word("do");
  this.space();
  this.print(node.body, node);
}
function ParenthesizedExpression(node) {
  this.tokenChar(40);
  this.print(node.expression, node);
  this.tokenChar(41);
}
function UpdateExpression(node) {
  if (node.prefix) {
    this.token(node.operator);
    this.print(node.argument, node);
  } else {
    this.printTerminatorless(node.argument, node, true);
    this.token(node.operator);
  }
}
function ConditionalExpression(node) {
  this.print(node.test, node);
  this.space();
  this.tokenChar(63);
  this.space();
  this.print(node.consequent, node);
  this.space();
  this.tokenChar(58);
  this.space();
  this.print(node.alternate, node);
}
function NewExpression(node, parent) {
  this.word("new");
  this.space();
  this.print(node.callee, node);
  if (this.format.minified && node.arguments.length === 0 && !node.optional && !isCallExpression(parent, {
    callee: node
  }) && !isMemberExpression(parent) && !isNewExpression(parent)) {
    return;
  }
  this.print(node.typeArguments, node);
  this.print(node.typeParameters, node);
  if (node.optional) {
    this.token("?.");
  }
  this.tokenChar(40);
  this.printList(node.arguments, node);
  this.tokenChar(41);
}
function SequenceExpression(node) {
  this.printList(node.expressions, node);
}
function ThisExpression() {
  this.word("this");
}
function Super() {
  this.word("super");
}
function isDecoratorMemberExpression(node) {
  switch (node.type) {
    case "Identifier":
      return true;
    case "MemberExpression":
      return !node.computed && node.property.type === "Identifier" && isDecoratorMemberExpression(node.object);
    default:
      return false;
  }
}
function shouldParenthesizeDecoratorExpression(node) {
  if (node.type === "ParenthesizedExpression") {
    return false;
  }
  return !isDecoratorMemberExpression(node.type === "CallExpression" ? node.callee : node);
}
function _shouldPrintDecoratorsBeforeExport(node) {
  if (typeof this.format.decoratorsBeforeExport === "boolean") {
    return this.format.decoratorsBeforeExport;
  }
  return typeof node.start === "number" && node.start === node.declaration.start;
}
function Decorator(node) {
  this.tokenChar(64);
  const {
    expression
  } = node;
  if (shouldParenthesizeDecoratorExpression(expression)) {
    this.tokenChar(40);
    this.print(expression, node);
    this.tokenChar(41);
  } else {
    this.print(expression, node);
  }
  this.newline();
}
function OptionalMemberExpression(node) {
  this.print(node.object, node);
  if (!node.computed && isMemberExpression(node.property)) {
    throw new TypeError("Got a MemberExpression for MemberExpression property");
  }
  let computed = node.computed;
  if (isLiteral(node.property) && typeof node.property.value === "number") {
    computed = true;
  }
  if (node.optional) {
    this.token("?.");
  }
  if (computed) {
    this.tokenChar(91);
    this.print(node.property, node);
    this.tokenChar(93);
  } else {
    if (!node.optional) {
      this.tokenChar(46);
    }
    this.print(node.property, node);
  }
}
function OptionalCallExpression(node) {
  this.print(node.callee, node);
  this.print(node.typeParameters, node);
  if (node.optional) {
    this.token("?.");
  }
  this.print(node.typeArguments, node);
  this.tokenChar(40);
  this.printList(node.arguments, node);
  this.tokenChar(41);
}
function CallExpression(node) {
  this.print(node.callee, node);
  this.print(node.typeArguments, node);
  this.print(node.typeParameters, node);
  this.tokenChar(40);
  this.printList(node.arguments, node);
  this.tokenChar(41);
}
function Import() {
  this.word("import");
}
function AwaitExpression(node) {
  this.word("await");
  if (node.argument) {
    this.space();
    this.printTerminatorless(node.argument, node, false);
  }
}
function YieldExpression(node) {
  this.word("yield", true);
  if (node.delegate) {
    this.tokenChar(42);
    if (node.argument) {
      this.space();
      this.print(node.argument, node);
    }
  } else {
    if (node.argument) {
      this.space();
      this.printTerminatorless(node.argument, node, false);
    }
  }
}
function EmptyStatement() {
  this.semicolon(true);
}
function ExpressionStatement(node) {
  this.print(node.expression, node);
  this.semicolon();
}
function AssignmentPattern(node) {
  this.print(node.left, node);
  if (node.left.optional) this.tokenChar(63);
  this.print(node.left.typeAnnotation, node);
  this.space();
  this.tokenChar(61);
  this.space();
  this.print(node.right, node);
}
function AssignmentExpression(node, parent) {
  const parens = this.inForStatementInitCounter && node.operator === "in" && !n.needsParens(node, parent);
  if (parens) {
    this.tokenChar(40);
  }
  this.print(node.left, node);
  this.space();
  if (node.operator === "in" || node.operator === "instanceof") {
    this.word(node.operator);
  } else {
    this.token(node.operator);
  }
  this.space();
  this.print(node.right, node);
  if (parens) {
    this.tokenChar(41);
  }
}
function BindExpression(node) {
  this.print(node.object, node);
  this.token("::");
  this.print(node.callee, node);
}
function MemberExpression(node) {
  this.print(node.object, node);
  if (!node.computed && isMemberExpression(node.property)) {
    throw new TypeError("Got a MemberExpression for MemberExpression property");
  }
  let computed = node.computed;
  if (isLiteral(node.property) && typeof node.property.value === "number") {
    computed = true;
  }
  if (computed) {
    this.tokenChar(91);
    this.print(node.property, node);
    this.tokenChar(93);
  } else {
    this.tokenChar(46);
    this.print(node.property, node);
  }
}
function MetaProperty(node) {
  this.print(node.meta, node);
  this.tokenChar(46);
  this.print(node.property, node);
}
function PrivateName(node) {
  this.tokenChar(35);
  this.print(node.id, node);
}
function V8IntrinsicIdentifier(node) {
  this.tokenChar(37);
  this.word(node.name);
}
function ModuleExpression(node) {
  this.word("module", true);
  this.space();
  this.tokenChar(123);
  this.indent();
  const {
    body
  } = node;
  if (body.body.length || body.directives.length) {
    this.newline();
  }
  this.print(body, node);
  this.dedent();
  this.sourceWithOffset("end", node.loc, 0, -1);
  this.rightBrace();
}

//# sourceMappingURL=expressions.js.map

}, function(modId) { var map = {"../node":1679363156135}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679363156141, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BreakStatement = BreakStatement;
exports.CatchClause = CatchClause;
exports.ContinueStatement = ContinueStatement;
exports.DebuggerStatement = DebuggerStatement;
exports.DoWhileStatement = DoWhileStatement;
exports.ForOfStatement = exports.ForInStatement = void 0;
exports.ForStatement = ForStatement;
exports.IfStatement = IfStatement;
exports.LabeledStatement = LabeledStatement;
exports.ReturnStatement = ReturnStatement;
exports.SwitchCase = SwitchCase;
exports.SwitchStatement = SwitchStatement;
exports.ThrowStatement = ThrowStatement;
exports.TryStatement = TryStatement;
exports.VariableDeclaration = VariableDeclaration;
exports.VariableDeclarator = VariableDeclarator;
exports.WhileStatement = WhileStatement;
exports.WithStatement = WithStatement;
var _t = require("@babel/types");
const {
  isFor,
  isForStatement,
  isIfStatement,
  isStatement
} = _t;
function WithStatement(node) {
  this.word("with");
  this.space();
  this.tokenChar(40);
  this.print(node.object, node);
  this.tokenChar(41);
  this.printBlock(node);
}
function IfStatement(node) {
  this.word("if");
  this.space();
  this.tokenChar(40);
  this.print(node.test, node);
  this.tokenChar(41);
  this.space();
  const needsBlock = node.alternate && isIfStatement(getLastStatement(node.consequent));
  if (needsBlock) {
    this.tokenChar(123);
    this.newline();
    this.indent();
  }
  this.printAndIndentOnComments(node.consequent, node);
  if (needsBlock) {
    this.dedent();
    this.newline();
    this.tokenChar(125);
  }
  if (node.alternate) {
    if (this.endsWith(125)) this.space();
    this.word("else");
    this.space();
    this.printAndIndentOnComments(node.alternate, node);
  }
}
function getLastStatement(statement) {
  const {
    body
  } = statement;
  if (isStatement(body) === false) {
    return statement;
  }
  return getLastStatement(body);
}
function ForStatement(node) {
  this.word("for");
  this.space();
  this.tokenChar(40);
  this.inForStatementInitCounter++;
  this.print(node.init, node);
  this.inForStatementInitCounter--;
  this.tokenChar(59);
  if (node.test) {
    this.space();
    this.print(node.test, node);
  }
  this.tokenChar(59);
  if (node.update) {
    this.space();
    this.print(node.update, node);
  }
  this.tokenChar(41);
  this.printBlock(node);
}
function WhileStatement(node) {
  this.word("while");
  this.space();
  this.tokenChar(40);
  this.print(node.test, node);
  this.tokenChar(41);
  this.printBlock(node);
}
function ForXStatement(node) {
  this.word("for");
  this.space();
  const isForOf = node.type === "ForOfStatement";
  if (isForOf && node.await) {
    this.word("await");
    this.space();
  }
  this.noIndentInnerCommentsHere();
  this.tokenChar(40);
  this.print(node.left, node);
  this.space();
  this.word(isForOf ? "of" : "in");
  this.space();
  this.print(node.right, node);
  this.tokenChar(41);
  this.printBlock(node);
}
const ForInStatement = ForXStatement;
exports.ForInStatement = ForInStatement;
const ForOfStatement = ForXStatement;
exports.ForOfStatement = ForOfStatement;
function DoWhileStatement(node) {
  this.word("do");
  this.space();
  this.print(node.body, node);
  this.space();
  this.word("while");
  this.space();
  this.tokenChar(40);
  this.print(node.test, node);
  this.tokenChar(41);
  this.semicolon();
}
function printStatementAfterKeyword(printer, node, parent, isLabel) {
  if (node) {
    printer.space();
    printer.printTerminatorless(node, parent, isLabel);
  }
  printer.semicolon();
}
function BreakStatement(node) {
  this.word("break");
  printStatementAfterKeyword(this, node.label, node, true);
}
function ContinueStatement(node) {
  this.word("continue");
  printStatementAfterKeyword(this, node.label, node, true);
}
function ReturnStatement(node) {
  this.word("return");
  printStatementAfterKeyword(this, node.argument, node, false);
}
function ThrowStatement(node) {
  this.word("throw");
  printStatementAfterKeyword(this, node.argument, node, false);
}
function LabeledStatement(node) {
  this.print(node.label, node);
  this.tokenChar(58);
  this.space();
  this.print(node.body, node);
}
function TryStatement(node) {
  this.word("try");
  this.space();
  this.print(node.block, node);
  this.space();
  if (node.handlers) {
    this.print(node.handlers[0], node);
  } else {
    this.print(node.handler, node);
  }
  if (node.finalizer) {
    this.space();
    this.word("finally");
    this.space();
    this.print(node.finalizer, node);
  }
}
function CatchClause(node) {
  this.word("catch");
  this.space();
  if (node.param) {
    this.tokenChar(40);
    this.print(node.param, node);
    this.print(node.param.typeAnnotation, node);
    this.tokenChar(41);
    this.space();
  }
  this.print(node.body, node);
}
function SwitchStatement(node) {
  this.word("switch");
  this.space();
  this.tokenChar(40);
  this.print(node.discriminant, node);
  this.tokenChar(41);
  this.space();
  this.tokenChar(123);
  this.printSequence(node.cases, node, {
    indent: true,
    addNewlines(leading, cas) {
      if (!leading && node.cases[node.cases.length - 1] === cas) return -1;
    }
  });
  this.tokenChar(125);
}
function SwitchCase(node) {
  if (node.test) {
    this.word("case");
    this.space();
    this.print(node.test, node);
    this.tokenChar(58);
  } else {
    this.word("default");
    this.tokenChar(58);
  }
  if (node.consequent.length) {
    this.newline();
    this.printSequence(node.consequent, node, {
      indent: true
    });
  }
}
function DebuggerStatement() {
  this.word("debugger");
  this.semicolon();
}
function VariableDeclaration(node, parent) {
  if (node.declare) {
    this.word("declare");
    this.space();
  }
  const {
    kind
  } = node;
  this.word(kind, kind === "using");
  this.space();
  let hasInits = false;
  if (!isFor(parent)) {
    for (const declar of node.declarations) {
      if (declar.init) {
        hasInits = true;
      }
    }
  }
  this.printList(node.declarations, node, {
    separator: hasInits ? function () {
      this.tokenChar(44);
      this.newline();
    } : undefined,
    indent: node.declarations.length > 1 ? true : false
  });
  if (isFor(parent)) {
    if (isForStatement(parent)) {
      if (parent.init === node) return;
    } else {
      if (parent.left === node) return;
    }
  }
  this.semicolon();
}
function VariableDeclarator(node) {
  this.print(node.id, node);
  if (node.definite) this.tokenChar(33);
  this.print(node.id.typeAnnotation, node);
  if (node.init) {
    this.space();
    this.tokenChar(61);
    this.space();
    this.print(node.init, node);
  }
}

//# sourceMappingURL=statements.js.map

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679363156142, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ClassAccessorProperty = ClassAccessorProperty;
exports.ClassBody = ClassBody;
exports.ClassExpression = exports.ClassDeclaration = ClassDeclaration;
exports.ClassMethod = ClassMethod;
exports.ClassPrivateMethod = ClassPrivateMethod;
exports.ClassPrivateProperty = ClassPrivateProperty;
exports.ClassProperty = ClassProperty;
exports.StaticBlock = StaticBlock;
exports._classMethodHead = _classMethodHead;
var _t = require("@babel/types");
const {
  isExportDefaultDeclaration,
  isExportNamedDeclaration
} = _t;
function ClassDeclaration(node, parent) {
  const inExport = isExportDefaultDeclaration(parent) || isExportNamedDeclaration(parent);
  if (!inExport || !this._shouldPrintDecoratorsBeforeExport(parent)) {
    this.printJoin(node.decorators, node);
  }
  if (node.declare) {
    this.word("declare");
    this.space();
  }
  if (node.abstract) {
    this.word("abstract");
    this.space();
  }
  this.word("class");
  if (node.id) {
    this.space();
    this.print(node.id, node);
  }
  this.print(node.typeParameters, node);
  if (node.superClass) {
    this.space();
    this.word("extends");
    this.space();
    this.print(node.superClass, node);
    this.print(node.superTypeParameters, node);
  }
  if (node.implements) {
    this.space();
    this.word("implements");
    this.space();
    this.printList(node.implements, node);
  }
  this.space();
  this.print(node.body, node);
}
function ClassBody(node) {
  this.tokenChar(123);
  if (node.body.length === 0) {
    this.tokenChar(125);
  } else {
    this.newline();
    this.indent();
    this.printSequence(node.body, node);
    this.dedent();
    if (!this.endsWith(10)) this.newline();
    this.sourceWithOffset("end", node.loc, 0, -1);
    this.rightBrace();
  }
}
function ClassProperty(node) {
  var _node$key$loc, _node$key$loc$end;
  this.printJoin(node.decorators, node);
  const endLine = (_node$key$loc = node.key.loc) == null ? void 0 : (_node$key$loc$end = _node$key$loc.end) == null ? void 0 : _node$key$loc$end.line;
  if (endLine) this.catchUp(endLine);
  this.tsPrintClassMemberModifiers(node);
  if (node.computed) {
    this.tokenChar(91);
    this.print(node.key, node);
    this.tokenChar(93);
  } else {
    this._variance(node);
    this.print(node.key, node);
  }
  if (node.optional) {
    this.tokenChar(63);
  }
  if (node.definite) {
    this.tokenChar(33);
  }
  this.print(node.typeAnnotation, node);
  if (node.value) {
    this.space();
    this.tokenChar(61);
    this.space();
    this.print(node.value, node);
  }
  this.semicolon();
}
function ClassAccessorProperty(node) {
  var _node$key$loc2, _node$key$loc2$end;
  this.printJoin(node.decorators, node);
  const endLine = (_node$key$loc2 = node.key.loc) == null ? void 0 : (_node$key$loc2$end = _node$key$loc2.end) == null ? void 0 : _node$key$loc2$end.line;
  if (endLine) this.catchUp(endLine);
  this.tsPrintClassMemberModifiers(node);
  this.word("accessor", true);
  this.space();
  if (node.computed) {
    this.tokenChar(91);
    this.print(node.key, node);
    this.tokenChar(93);
  } else {
    this._variance(node);
    this.print(node.key, node);
  }
  if (node.optional) {
    this.tokenChar(63);
  }
  if (node.definite) {
    this.tokenChar(33);
  }
  this.print(node.typeAnnotation, node);
  if (node.value) {
    this.space();
    this.tokenChar(61);
    this.space();
    this.print(node.value, node);
  }
  this.semicolon();
}
function ClassPrivateProperty(node) {
  this.printJoin(node.decorators, node);
  if (node.static) {
    this.word("static");
    this.space();
  }
  this.print(node.key, node);
  this.print(node.typeAnnotation, node);
  if (node.value) {
    this.space();
    this.tokenChar(61);
    this.space();
    this.print(node.value, node);
  }
  this.semicolon();
}
function ClassMethod(node) {
  this._classMethodHead(node);
  this.space();
  this.print(node.body, node);
}
function ClassPrivateMethod(node) {
  this._classMethodHead(node);
  this.space();
  this.print(node.body, node);
}
function _classMethodHead(node) {
  var _node$key$loc3, _node$key$loc3$end;
  this.printJoin(node.decorators, node);
  const endLine = (_node$key$loc3 = node.key.loc) == null ? void 0 : (_node$key$loc3$end = _node$key$loc3.end) == null ? void 0 : _node$key$loc3$end.line;
  if (endLine) this.catchUp(endLine);
  this.tsPrintClassMemberModifiers(node);
  this._methodHead(node);
}
function StaticBlock(node) {
  this.word("static");
  this.space();
  this.tokenChar(123);
  if (node.body.length === 0) {
    this.tokenChar(125);
  } else {
    this.newline();
    this.printSequence(node.body, node, {
      indent: true
    });
    this.sourceWithOffset("end", node.loc, 0, -1);
    this.rightBrace();
  }
}

//# sourceMappingURL=classes.js.map

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679363156143, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ArrowFunctionExpression = ArrowFunctionExpression;
exports.FunctionDeclaration = exports.FunctionExpression = FunctionExpression;
exports._functionHead = _functionHead;
exports._methodHead = _methodHead;
exports._param = _param;
exports._parameters = _parameters;
exports._params = _params;
exports._predicate = _predicate;
var _t = require("@babel/types");
const {
  isIdentifier
} = _t;
function _params(node, idNode, parentNode) {
  this.print(node.typeParameters, node);
  const nameInfo = _getFuncIdName.call(this, idNode, parentNode);
  if (nameInfo) {
    this.sourceIdentifierName(nameInfo.name, nameInfo.pos);
  }
  this.tokenChar(40);
  this._parameters(node.params, node);
  this.tokenChar(41);
  const noLineTerminator = node.type === "ArrowFunctionExpression";
  this.print(node.returnType, node, noLineTerminator);
  this._noLineTerminator = noLineTerminator;
}
function _parameters(parameters, parent) {
  const paramLength = parameters.length;
  for (let i = 0; i < paramLength; i++) {
    this._param(parameters[i], parent);
    if (i < parameters.length - 1) {
      this.tokenChar(44);
      this.space();
    }
  }
}
function _param(parameter, parent) {
  this.printJoin(parameter.decorators, parameter);
  this.print(parameter, parent);
  if (parameter.optional) {
    this.tokenChar(63);
  }
  this.print(parameter.typeAnnotation, parameter);
}
function _methodHead(node) {
  const kind = node.kind;
  const key = node.key;
  if (kind === "get" || kind === "set") {
    this.word(kind);
    this.space();
  }
  if (node.async) {
    this.word("async", true);
    this.space();
  }
  if (kind === "method" || kind === "init") {
    if (node.generator) {
      this.tokenChar(42);
    }
  }
  if (node.computed) {
    this.tokenChar(91);
    this.print(key, node);
    this.tokenChar(93);
  } else {
    this.print(key, node);
  }
  if (node.optional) {
    this.tokenChar(63);
  }
  this._params(node, node.computed && node.key.type !== "StringLiteral" ? undefined : node.key, undefined);
}
function _predicate(node, noLineTerminatorAfter) {
  if (node.predicate) {
    if (!node.returnType) {
      this.tokenChar(58);
    }
    this.space();
    this.print(node.predicate, node, noLineTerminatorAfter);
  }
}
function _functionHead(node, parent) {
  if (node.async) {
    this.word("async");
    this._endsWithInnerRaw = false;
    this.space();
  }
  this.word("function");
  if (node.generator) {
    this._endsWithInnerRaw = false;
    this.tokenChar(42);
  }
  this.space();
  if (node.id) {
    this.print(node.id, node);
  }
  this._params(node, node.id, parent);
  if (node.type !== "TSDeclareFunction") {
    this._predicate(node);
  }
}
function FunctionExpression(node, parent) {
  this._functionHead(node, parent);
  this.space();
  this.print(node.body, node);
}
function ArrowFunctionExpression(node, parent) {
  if (node.async) {
    this.word("async", true);
    this.space();
  }
  let firstParam;
  if (!this.format.retainLines && node.params.length === 1 && isIdentifier(firstParam = node.params[0]) && !hasTypesOrComments(node, firstParam)) {
    this.print(firstParam, node, true);
  } else {
    this._params(node, undefined, parent);
  }
  this._predicate(node, true);
  this.space();
  this.printInnerComments();
  this.token("=>");
  this.space();
  this.print(node.body, node);
}
function hasTypesOrComments(node, param) {
  var _param$leadingComment, _param$trailingCommen;
  return !!(node.typeParameters || node.returnType || node.predicate || param.typeAnnotation || param.optional || (_param$leadingComment = param.leadingComments) != null && _param$leadingComment.length || (_param$trailingCommen = param.trailingComments) != null && _param$trailingCommen.length);
}
function _getFuncIdName(idNode, parent) {
  let id = idNode;
  if (!id && parent) {
    const parentType = parent.type;
    if (parentType === "VariableDeclarator") {
      id = parent.id;
    } else if (parentType === "AssignmentExpression" || parentType === "AssignmentPattern") {
      id = parent.left;
    } else if (parentType === "ObjectProperty" || parentType === "ClassProperty") {
      if (!parent.computed || parent.key.type === "StringLiteral") {
        id = parent.key;
      }
    } else if (parentType === "ClassPrivateProperty" || parentType === "ClassAccessorProperty") {
      id = parent.key;
    }
  }
  if (!id) return;
  let nameInfo;
  if (id.type === "Identifier") {
    var _id$loc, _id$loc2;
    nameInfo = {
      pos: (_id$loc = id.loc) == null ? void 0 : _id$loc.start,
      name: ((_id$loc2 = id.loc) == null ? void 0 : _id$loc2.identifierName) || id.name
    };
  } else if (id.type === "PrivateName") {
    var _id$loc3;
    nameInfo = {
      pos: (_id$loc3 = id.loc) == null ? void 0 : _id$loc3.start,
      name: "#" + id.id.name
    };
  } else if (id.type === "StringLiteral") {
    var _id$loc4;
    nameInfo = {
      pos: (_id$loc4 = id.loc) == null ? void 0 : _id$loc4.start,
      name: id.value
    };
  }
  return nameInfo;
}

//# sourceMappingURL=methods.js.map

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679363156144, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ExportAllDeclaration = ExportAllDeclaration;
exports.ExportDefaultDeclaration = ExportDefaultDeclaration;
exports.ExportDefaultSpecifier = ExportDefaultSpecifier;
exports.ExportNamedDeclaration = ExportNamedDeclaration;
exports.ExportNamespaceSpecifier = ExportNamespaceSpecifier;
exports.ExportSpecifier = ExportSpecifier;
exports.ImportAttribute = ImportAttribute;
exports.ImportDeclaration = ImportDeclaration;
exports.ImportDefaultSpecifier = ImportDefaultSpecifier;
exports.ImportNamespaceSpecifier = ImportNamespaceSpecifier;
exports.ImportSpecifier = ImportSpecifier;
exports._printAssertions = _printAssertions;
var _t = require("@babel/types");
const {
  isClassDeclaration,
  isExportDefaultSpecifier,
  isExportNamespaceSpecifier,
  isImportDefaultSpecifier,
  isImportNamespaceSpecifier,
  isStatement
} = _t;
function ImportSpecifier(node) {
  if (node.importKind === "type" || node.importKind === "typeof") {
    this.word(node.importKind);
    this.space();
  }
  this.print(node.imported, node);
  if (node.local && node.local.name !== node.imported.name) {
    this.space();
    this.word("as");
    this.space();
    this.print(node.local, node);
  }
}
function ImportDefaultSpecifier(node) {
  this.print(node.local, node);
}
function ExportDefaultSpecifier(node) {
  this.print(node.exported, node);
}
function ExportSpecifier(node) {
  if (node.exportKind === "type") {
    this.word("type");
    this.space();
  }
  this.print(node.local, node);
  if (node.exported && node.local.name !== node.exported.name) {
    this.space();
    this.word("as");
    this.space();
    this.print(node.exported, node);
  }
}
function ExportNamespaceSpecifier(node) {
  this.tokenChar(42);
  this.space();
  this.word("as");
  this.space();
  this.print(node.exported, node);
}
function _printAssertions(node) {
  this.word("assert");
  this.space();
  this.tokenChar(123);
  this.space();
  this.printList(node.assertions, node);
  this.space();
  this.tokenChar(125);
}
function ExportAllDeclaration(node) {
  var _node$assertions;
  this.word("export");
  this.space();
  if (node.exportKind === "type") {
    this.word("type");
    this.space();
  }
  this.tokenChar(42);
  this.space();
  this.word("from");
  this.space();
  if ((_node$assertions = node.assertions) != null && _node$assertions.length) {
    this.print(node.source, node, true);
    this.space();
    this._printAssertions(node);
  } else {
    this.print(node.source, node);
  }
  this.semicolon();
}
function maybePrintDecoratorsBeforeExport(printer, node) {
  if (isClassDeclaration(node.declaration) && printer._shouldPrintDecoratorsBeforeExport(node)) {
    printer.printJoin(node.declaration.decorators, node);
  }
}
function ExportNamedDeclaration(node) {
  maybePrintDecoratorsBeforeExport(this, node);
  this.word("export");
  this.space();
  if (node.declaration) {
    const declar = node.declaration;
    this.print(declar, node);
    if (!isStatement(declar)) this.semicolon();
  } else {
    if (node.exportKind === "type") {
      this.word("type");
      this.space();
    }
    const specifiers = node.specifiers.slice(0);
    let hasSpecial = false;
    for (;;) {
      const first = specifiers[0];
      if (isExportDefaultSpecifier(first) || isExportNamespaceSpecifier(first)) {
        hasSpecial = true;
        this.print(specifiers.shift(), node);
        if (specifiers.length) {
          this.tokenChar(44);
          this.space();
        }
      } else {
        break;
      }
    }
    if (specifiers.length || !specifiers.length && !hasSpecial) {
      this.tokenChar(123);
      if (specifiers.length) {
        this.space();
        this.printList(specifiers, node);
        this.space();
      }
      this.tokenChar(125);
    }
    if (node.source) {
      var _node$assertions2;
      this.space();
      this.word("from");
      this.space();
      if ((_node$assertions2 = node.assertions) != null && _node$assertions2.length) {
        this.print(node.source, node, true);
        this.space();
        this._printAssertions(node);
      } else {
        this.print(node.source, node);
      }
    }
    this.semicolon();
  }
}
function ExportDefaultDeclaration(node) {
  maybePrintDecoratorsBeforeExport(this, node);
  this.word("export");
  this.noIndentInnerCommentsHere();
  this.space();
  this.word("default");
  this.space();
  const declar = node.declaration;
  this.print(declar, node);
  if (!isStatement(declar)) this.semicolon();
}
function ImportDeclaration(node) {
  var _node$assertions3;
  this.word("import");
  this.space();
  const isTypeKind = node.importKind === "type" || node.importKind === "typeof";
  if (isTypeKind) {
    this.noIndentInnerCommentsHere();
    this.word(node.importKind);
    this.space();
  } else if (node.module) {
    this.noIndentInnerCommentsHere();
    this.word("module");
    this.space();
  }
  const specifiers = node.specifiers.slice(0);
  const hasSpecifiers = !!specifiers.length;
  while (hasSpecifiers) {
    const first = specifiers[0];
    if (isImportDefaultSpecifier(first) || isImportNamespaceSpecifier(first)) {
      this.print(specifiers.shift(), node);
      if (specifiers.length) {
        this.tokenChar(44);
        this.space();
      }
    } else {
      break;
    }
  }
  if (specifiers.length) {
    this.tokenChar(123);
    this.space();
    this.printList(specifiers, node);
    this.space();
    this.tokenChar(125);
  } else if (isTypeKind && !hasSpecifiers) {
    this.tokenChar(123);
    this.tokenChar(125);
  }
  if (hasSpecifiers || isTypeKind) {
    this.space();
    this.word("from");
    this.space();
  }
  if ((_node$assertions3 = node.assertions) != null && _node$assertions3.length) {
    this.print(node.source, node, true);
    this.space();
    this._printAssertions(node);
  } else {
    this.print(node.source, node);
  }
  {
    var _node$attributes;
    if ((_node$attributes = node.attributes) != null && _node$attributes.length) {
      this.space();
      this.word("with");
      this.space();
      this.printList(node.attributes, node);
    }
  }
  this.semicolon();
}
function ImportAttribute(node) {
  this.print(node.key);
  this.tokenChar(58);
  this.space();
  this.print(node.value);
}
function ImportNamespaceSpecifier(node) {
  this.tokenChar(42);
  this.space();
  this.word("as");
  this.space();
  this.print(node.local, node);
}

//# sourceMappingURL=modules.js.map

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679363156145, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ArgumentPlaceholder = ArgumentPlaceholder;
exports.ArrayPattern = exports.ArrayExpression = ArrayExpression;
exports.BigIntLiteral = BigIntLiteral;
exports.BooleanLiteral = BooleanLiteral;
exports.DecimalLiteral = DecimalLiteral;
exports.Identifier = Identifier;
exports.NullLiteral = NullLiteral;
exports.NumericLiteral = NumericLiteral;
exports.ObjectPattern = exports.ObjectExpression = ObjectExpression;
exports.ObjectMethod = ObjectMethod;
exports.ObjectProperty = ObjectProperty;
exports.PipelineBareFunction = PipelineBareFunction;
exports.PipelinePrimaryTopicReference = PipelinePrimaryTopicReference;
exports.PipelineTopicExpression = PipelineTopicExpression;
exports.RecordExpression = RecordExpression;
exports.RegExpLiteral = RegExpLiteral;
exports.SpreadElement = exports.RestElement = RestElement;
exports.StringLiteral = StringLiteral;
exports.TopicReference = TopicReference;
exports.TupleExpression = TupleExpression;
var _t = require("@babel/types");
var _jsesc = require("jsesc");
const {
  isAssignmentPattern,
  isIdentifier
} = _t;
function Identifier(node) {
  var _node$loc;
  this.sourceIdentifierName(((_node$loc = node.loc) == null ? void 0 : _node$loc.identifierName) || node.name);
  this.word(node.name);
}
function ArgumentPlaceholder() {
  this.tokenChar(63);
}
function RestElement(node) {
  this.token("...");
  this.print(node.argument, node);
}
function ObjectExpression(node) {
  const props = node.properties;
  this.tokenChar(123);
  if (props.length) {
    this.space();
    this.printList(props, node, {
      indent: true,
      statement: true
    });
    this.space();
  }
  this.sourceWithOffset("end", node.loc, 0, -1);
  this.tokenChar(125);
}
function ObjectMethod(node) {
  this.printJoin(node.decorators, node);
  this._methodHead(node);
  this.space();
  this.print(node.body, node);
}
function ObjectProperty(node) {
  this.printJoin(node.decorators, node);
  if (node.computed) {
    this.tokenChar(91);
    this.print(node.key, node);
    this.tokenChar(93);
  } else {
    if (isAssignmentPattern(node.value) && isIdentifier(node.key) && node.key.name === node.value.left.name) {
      this.print(node.value, node);
      return;
    }
    this.print(node.key, node);
    if (node.shorthand && isIdentifier(node.key) && isIdentifier(node.value) && node.key.name === node.value.name) {
      return;
    }
  }
  this.tokenChar(58);
  this.space();
  this.print(node.value, node);
}
function ArrayExpression(node) {
  const elems = node.elements;
  const len = elems.length;
  this.tokenChar(91);
  for (let i = 0; i < elems.length; i++) {
    const elem = elems[i];
    if (elem) {
      if (i > 0) this.space();
      this.print(elem, node);
      if (i < len - 1) this.tokenChar(44);
    } else {
      this.tokenChar(44);
    }
  }
  this.tokenChar(93);
}
function RecordExpression(node) {
  const props = node.properties;
  let startToken;
  let endToken;
  if (this.format.recordAndTupleSyntaxType === "bar") {
    startToken = "{|";
    endToken = "|}";
  } else if (this.format.recordAndTupleSyntaxType !== "hash" && this.format.recordAndTupleSyntaxType != null) {
    throw new Error(`The "recordAndTupleSyntaxType" generator option must be "bar" or "hash" (${JSON.stringify(this.format.recordAndTupleSyntaxType)} received).`);
  } else {
    startToken = "#{";
    endToken = "}";
  }
  this.token(startToken);
  if (props.length) {
    this.space();
    this.printList(props, node, {
      indent: true,
      statement: true
    });
    this.space();
  }
  this.token(endToken);
}
function TupleExpression(node) {
  const elems = node.elements;
  const len = elems.length;
  let startToken;
  let endToken;
  if (this.format.recordAndTupleSyntaxType === "bar") {
    startToken = "[|";
    endToken = "|]";
  } else if (this.format.recordAndTupleSyntaxType === "hash") {
    startToken = "#[";
    endToken = "]";
  } else {
    throw new Error(`${this.format.recordAndTupleSyntaxType} is not a valid recordAndTuple syntax type`);
  }
  this.token(startToken);
  for (let i = 0; i < elems.length; i++) {
    const elem = elems[i];
    if (elem) {
      if (i > 0) this.space();
      this.print(elem, node);
      if (i < len - 1) this.tokenChar(44);
    }
  }
  this.token(endToken);
}
function RegExpLiteral(node) {
  this.word(`/${node.pattern}/${node.flags}`);
}
function BooleanLiteral(node) {
  this.word(node.value ? "true" : "false");
}
function NullLiteral() {
  this.word("null");
}
function NumericLiteral(node) {
  const raw = this.getPossibleRaw(node);
  const opts = this.format.jsescOption;
  const value = node.value + "";
  if (opts.numbers) {
    this.number(_jsesc(node.value, opts));
  } else if (raw == null) {
    this.number(value);
  } else if (this.format.minified) {
    this.number(raw.length < value.length ? raw : value);
  } else {
    this.number(raw);
  }
}
function StringLiteral(node) {
  const raw = this.getPossibleRaw(node);
  if (!this.format.minified && raw !== undefined) {
    this.token(raw);
    return;
  }
  const val = _jsesc(node.value, this.format.jsescOption);
  this.token(val);
}
function BigIntLiteral(node) {
  const raw = this.getPossibleRaw(node);
  if (!this.format.minified && raw !== undefined) {
    this.word(raw);
    return;
  }
  this.word(node.value + "n");
}
function DecimalLiteral(node) {
  const raw = this.getPossibleRaw(node);
  if (!this.format.minified && raw !== undefined) {
    this.word(raw);
    return;
  }
  this.word(node.value + "m");
}
const validTopicTokenSet = new Set(["^^", "@@", "^", "%", "#"]);
function TopicReference() {
  const {
    topicToken
  } = this.format;
  if (validTopicTokenSet.has(topicToken)) {
    this.token(topicToken);
  } else {
    const givenTopicTokenJSON = JSON.stringify(topicToken);
    const validTopics = Array.from(validTopicTokenSet, v => JSON.stringify(v));
    throw new Error(`The "topicToken" generator option must be one of ` + `${validTopics.join(", ")} (${givenTopicTokenJSON} received instead).`);
  }
}
function PipelineTopicExpression(node) {
  this.print(node.expression, node);
}
function PipelineBareFunction(node) {
  this.print(node.callee, node);
}
function PipelinePrimaryTopicReference() {
  this.tokenChar(35);
}

//# sourceMappingURL=types.js.map

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679363156146, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AnyTypeAnnotation = AnyTypeAnnotation;
exports.ArrayTypeAnnotation = ArrayTypeAnnotation;
exports.BooleanLiteralTypeAnnotation = BooleanLiteralTypeAnnotation;
exports.BooleanTypeAnnotation = BooleanTypeAnnotation;
exports.DeclareClass = DeclareClass;
exports.DeclareExportAllDeclaration = DeclareExportAllDeclaration;
exports.DeclareExportDeclaration = DeclareExportDeclaration;
exports.DeclareFunction = DeclareFunction;
exports.DeclareInterface = DeclareInterface;
exports.DeclareModule = DeclareModule;
exports.DeclareModuleExports = DeclareModuleExports;
exports.DeclareOpaqueType = DeclareOpaqueType;
exports.DeclareTypeAlias = DeclareTypeAlias;
exports.DeclareVariable = DeclareVariable;
exports.DeclaredPredicate = DeclaredPredicate;
exports.EmptyTypeAnnotation = EmptyTypeAnnotation;
exports.EnumBooleanBody = EnumBooleanBody;
exports.EnumBooleanMember = EnumBooleanMember;
exports.EnumDeclaration = EnumDeclaration;
exports.EnumDefaultedMember = EnumDefaultedMember;
exports.EnumNumberBody = EnumNumberBody;
exports.EnumNumberMember = EnumNumberMember;
exports.EnumStringBody = EnumStringBody;
exports.EnumStringMember = EnumStringMember;
exports.EnumSymbolBody = EnumSymbolBody;
exports.ExistsTypeAnnotation = ExistsTypeAnnotation;
exports.FunctionTypeAnnotation = FunctionTypeAnnotation;
exports.FunctionTypeParam = FunctionTypeParam;
exports.IndexedAccessType = IndexedAccessType;
exports.InferredPredicate = InferredPredicate;
exports.InterfaceDeclaration = InterfaceDeclaration;
exports.GenericTypeAnnotation = exports.ClassImplements = exports.InterfaceExtends = InterfaceExtends;
exports.InterfaceTypeAnnotation = InterfaceTypeAnnotation;
exports.IntersectionTypeAnnotation = IntersectionTypeAnnotation;
exports.MixedTypeAnnotation = MixedTypeAnnotation;
exports.NullLiteralTypeAnnotation = NullLiteralTypeAnnotation;
exports.NullableTypeAnnotation = NullableTypeAnnotation;
Object.defineProperty(exports, "NumberLiteralTypeAnnotation", {
  enumerable: true,
  get: function () {
    return _types2.NumericLiteral;
  }
});
exports.NumberTypeAnnotation = NumberTypeAnnotation;
exports.ObjectTypeAnnotation = ObjectTypeAnnotation;
exports.ObjectTypeCallProperty = ObjectTypeCallProperty;
exports.ObjectTypeIndexer = ObjectTypeIndexer;
exports.ObjectTypeInternalSlot = ObjectTypeInternalSlot;
exports.ObjectTypeProperty = ObjectTypeProperty;
exports.ObjectTypeSpreadProperty = ObjectTypeSpreadProperty;
exports.OpaqueType = OpaqueType;
exports.OptionalIndexedAccessType = OptionalIndexedAccessType;
exports.QualifiedTypeIdentifier = QualifiedTypeIdentifier;
Object.defineProperty(exports, "StringLiteralTypeAnnotation", {
  enumerable: true,
  get: function () {
    return _types2.StringLiteral;
  }
});
exports.StringTypeAnnotation = StringTypeAnnotation;
exports.SymbolTypeAnnotation = SymbolTypeAnnotation;
exports.ThisTypeAnnotation = ThisTypeAnnotation;
exports.TupleTypeAnnotation = TupleTypeAnnotation;
exports.TypeAlias = TypeAlias;
exports.TypeAnnotation = TypeAnnotation;
exports.TypeCastExpression = TypeCastExpression;
exports.TypeParameter = TypeParameter;
exports.TypeParameterDeclaration = exports.TypeParameterInstantiation = TypeParameterInstantiation;
exports.TypeofTypeAnnotation = TypeofTypeAnnotation;
exports.UnionTypeAnnotation = UnionTypeAnnotation;
exports.Variance = Variance;
exports.VoidTypeAnnotation = VoidTypeAnnotation;
exports._interfaceish = _interfaceish;
exports._variance = _variance;
var _t = require("@babel/types");
var _modules = require("./modules");
var _types2 = require("./types");
const {
  isDeclareExportDeclaration,
  isStatement
} = _t;
function AnyTypeAnnotation() {
  this.word("any");
}
function ArrayTypeAnnotation(node) {
  this.print(node.elementType, node, true);
  this.tokenChar(91);
  this.tokenChar(93);
}
function BooleanTypeAnnotation() {
  this.word("boolean");
}
function BooleanLiteralTypeAnnotation(node) {
  this.word(node.value ? "true" : "false");
}
function NullLiteralTypeAnnotation() {
  this.word("null");
}
function DeclareClass(node, parent) {
  if (!isDeclareExportDeclaration(parent)) {
    this.word("declare");
    this.space();
  }
  this.word("class");
  this.space();
  this._interfaceish(node);
}
function DeclareFunction(node, parent) {
  if (!isDeclareExportDeclaration(parent)) {
    this.word("declare");
    this.space();
  }
  this.word("function");
  this.space();
  this.print(node.id, node);
  this.print(node.id.typeAnnotation.typeAnnotation, node);
  if (node.predicate) {
    this.space();
    this.print(node.predicate, node);
  }
  this.semicolon();
}
function InferredPredicate() {
  this.tokenChar(37);
  this.word("checks");
}
function DeclaredPredicate(node) {
  this.tokenChar(37);
  this.word("checks");
  this.tokenChar(40);
  this.print(node.value, node);
  this.tokenChar(41);
}
function DeclareInterface(node) {
  this.word("declare");
  this.space();
  this.InterfaceDeclaration(node);
}
function DeclareModule(node) {
  this.word("declare");
  this.space();
  this.word("module");
  this.space();
  this.print(node.id, node);
  this.space();
  this.print(node.body, node);
}
function DeclareModuleExports(node) {
  this.word("declare");
  this.space();
  this.word("module");
  this.tokenChar(46);
  this.word("exports");
  this.print(node.typeAnnotation, node);
}
function DeclareTypeAlias(node) {
  this.word("declare");
  this.space();
  this.TypeAlias(node);
}
function DeclareOpaqueType(node, parent) {
  if (!isDeclareExportDeclaration(parent)) {
    this.word("declare");
    this.space();
  }
  this.OpaqueType(node);
}
function DeclareVariable(node, parent) {
  if (!isDeclareExportDeclaration(parent)) {
    this.word("declare");
    this.space();
  }
  this.word("var");
  this.space();
  this.print(node.id, node);
  this.print(node.id.typeAnnotation, node);
  this.semicolon();
}
function DeclareExportDeclaration(node) {
  this.word("declare");
  this.space();
  this.word("export");
  this.space();
  if (node.default) {
    this.word("default");
    this.space();
  }
  FlowExportDeclaration.call(this, node);
}
function DeclareExportAllDeclaration(node) {
  this.word("declare");
  this.space();
  _modules.ExportAllDeclaration.call(this, node);
}
function EnumDeclaration(node) {
  const {
    id,
    body
  } = node;
  this.word("enum");
  this.space();
  this.print(id, node);
  this.print(body, node);
}
function enumExplicitType(context, name, hasExplicitType) {
  if (hasExplicitType) {
    context.space();
    context.word("of");
    context.space();
    context.word(name);
  }
  context.space();
}
function enumBody(context, node) {
  const {
    members
  } = node;
  context.token("{");
  context.indent();
  context.newline();
  for (const member of members) {
    context.print(member, node);
    context.newline();
  }
  if (node.hasUnknownMembers) {
    context.token("...");
    context.newline();
  }
  context.dedent();
  context.token("}");
}
function EnumBooleanBody(node) {
  const {
    explicitType
  } = node;
  enumExplicitType(this, "boolean", explicitType);
  enumBody(this, node);
}
function EnumNumberBody(node) {
  const {
    explicitType
  } = node;
  enumExplicitType(this, "number", explicitType);
  enumBody(this, node);
}
function EnumStringBody(node) {
  const {
    explicitType
  } = node;
  enumExplicitType(this, "string", explicitType);
  enumBody(this, node);
}
function EnumSymbolBody(node) {
  enumExplicitType(this, "symbol", true);
  enumBody(this, node);
}
function EnumDefaultedMember(node) {
  const {
    id
  } = node;
  this.print(id, node);
  this.tokenChar(44);
}
function enumInitializedMember(context, node) {
  const {
    id,
    init
  } = node;
  context.print(id, node);
  context.space();
  context.token("=");
  context.space();
  context.print(init, node);
  context.token(",");
}
function EnumBooleanMember(node) {
  enumInitializedMember(this, node);
}
function EnumNumberMember(node) {
  enumInitializedMember(this, node);
}
function EnumStringMember(node) {
  enumInitializedMember(this, node);
}
function FlowExportDeclaration(node) {
  if (node.declaration) {
    const declar = node.declaration;
    this.print(declar, node);
    if (!isStatement(declar)) this.semicolon();
  } else {
    this.tokenChar(123);
    if (node.specifiers.length) {
      this.space();
      this.printList(node.specifiers, node);
      this.space();
    }
    this.tokenChar(125);
    if (node.source) {
      this.space();
      this.word("from");
      this.space();
      this.print(node.source, node);
    }
    this.semicolon();
  }
}
function ExistsTypeAnnotation() {
  this.tokenChar(42);
}
function FunctionTypeAnnotation(node, parent) {
  this.print(node.typeParameters, node);
  this.tokenChar(40);
  if (node.this) {
    this.word("this");
    this.tokenChar(58);
    this.space();
    this.print(node.this.typeAnnotation, node);
    if (node.params.length || node.rest) {
      this.tokenChar(44);
      this.space();
    }
  }
  this.printList(node.params, node);
  if (node.rest) {
    if (node.params.length) {
      this.tokenChar(44);
      this.space();
    }
    this.token("...");
    this.print(node.rest, node);
  }
  this.tokenChar(41);
  if (parent && (parent.type === "ObjectTypeCallProperty" || parent.type === "ObjectTypeInternalSlot" || parent.type === "DeclareFunction" || parent.type === "ObjectTypeProperty" && parent.method)) {
    this.tokenChar(58);
  } else {
    this.space();
    this.token("=>");
  }
  this.space();
  this.print(node.returnType, node);
}
function FunctionTypeParam(node) {
  this.print(node.name, node);
  if (node.optional) this.tokenChar(63);
  if (node.name) {
    this.tokenChar(58);
    this.space();
  }
  this.print(node.typeAnnotation, node);
}
function InterfaceExtends(node) {
  this.print(node.id, node);
  this.print(node.typeParameters, node, true);
}
function _interfaceish(node) {
  var _node$extends;
  this.print(node.id, node);
  this.print(node.typeParameters, node);
  if ((_node$extends = node.extends) != null && _node$extends.length) {
    this.space();
    this.word("extends");
    this.space();
    this.printList(node.extends, node);
  }
  if (node.mixins && node.mixins.length) {
    this.space();
    this.word("mixins");
    this.space();
    this.printList(node.mixins, node);
  }
  if (node.implements && node.implements.length) {
    this.space();
    this.word("implements");
    this.space();
    this.printList(node.implements, node);
  }
  this.space();
  this.print(node.body, node);
}
function _variance(node) {
  if (node.variance) {
    if (node.variance.kind === "plus") {
      this.tokenChar(43);
    } else if (node.variance.kind === "minus") {
      this.tokenChar(45);
    }
  }
}
function InterfaceDeclaration(node) {
  this.word("interface");
  this.space();
  this._interfaceish(node);
}
function andSeparator() {
  this.space();
  this.tokenChar(38);
  this.space();
}
function InterfaceTypeAnnotation(node) {
  this.word("interface");
  if (node.extends && node.extends.length) {
    this.space();
    this.word("extends");
    this.space();
    this.printList(node.extends, node);
  }
  this.space();
  this.print(node.body, node);
}
function IntersectionTypeAnnotation(node) {
  this.printJoin(node.types, node, {
    separator: andSeparator
  });
}
function MixedTypeAnnotation() {
  this.word("mixed");
}
function EmptyTypeAnnotation() {
  this.word("empty");
}
function NullableTypeAnnotation(node) {
  this.tokenChar(63);
  this.print(node.typeAnnotation, node);
}
function NumberTypeAnnotation() {
  this.word("number");
}
function StringTypeAnnotation() {
  this.word("string");
}
function ThisTypeAnnotation() {
  this.word("this");
}
function TupleTypeAnnotation(node) {
  this.tokenChar(91);
  this.printList(node.types, node);
  this.tokenChar(93);
}
function TypeofTypeAnnotation(node) {
  this.word("typeof");
  this.space();
  this.print(node.argument, node);
}
function TypeAlias(node) {
  this.word("type");
  this.space();
  this.print(node.id, node);
  this.print(node.typeParameters, node);
  this.space();
  this.tokenChar(61);
  this.space();
  this.print(node.right, node);
  this.semicolon();
}
function TypeAnnotation(node) {
  this.tokenChar(58);
  this.space();
  if (node.optional) this.tokenChar(63);
  this.print(node.typeAnnotation, node);
}
function TypeParameterInstantiation(node) {
  this.tokenChar(60);
  this.printList(node.params, node, {});
  this.tokenChar(62);
}
function TypeParameter(node) {
  this._variance(node);
  this.word(node.name);
  if (node.bound) {
    this.print(node.bound, node);
  }
  if (node.default) {
    this.space();
    this.tokenChar(61);
    this.space();
    this.print(node.default, node);
  }
}
function OpaqueType(node) {
  this.word("opaque");
  this.space();
  this.word("type");
  this.space();
  this.print(node.id, node);
  this.print(node.typeParameters, node);
  if (node.supertype) {
    this.tokenChar(58);
    this.space();
    this.print(node.supertype, node);
  }
  if (node.impltype) {
    this.space();
    this.tokenChar(61);
    this.space();
    this.print(node.impltype, node);
  }
  this.semicolon();
}
function ObjectTypeAnnotation(node) {
  if (node.exact) {
    this.token("{|");
  } else {
    this.tokenChar(123);
  }
  const props = [...node.properties, ...(node.callProperties || []), ...(node.indexers || []), ...(node.internalSlots || [])];
  if (props.length) {
    this.newline();
    this.space();
    this.printJoin(props, node, {
      addNewlines(leading) {
        if (leading && !props[0]) return 1;
      },
      indent: true,
      statement: true,
      iterator: () => {
        if (props.length !== 1 || node.inexact) {
          this.tokenChar(44);
          this.space();
        }
      }
    });
    this.space();
  }
  if (node.inexact) {
    this.indent();
    this.token("...");
    if (props.length) {
      this.newline();
    }
    this.dedent();
  }
  if (node.exact) {
    this.token("|}");
  } else {
    this.tokenChar(125);
  }
}
function ObjectTypeInternalSlot(node) {
  if (node.static) {
    this.word("static");
    this.space();
  }
  this.tokenChar(91);
  this.tokenChar(91);
  this.print(node.id, node);
  this.tokenChar(93);
  this.tokenChar(93);
  if (node.optional) this.tokenChar(63);
  if (!node.method) {
    this.tokenChar(58);
    this.space();
  }
  this.print(node.value, node);
}
function ObjectTypeCallProperty(node) {
  if (node.static) {
    this.word("static");
    this.space();
  }
  this.print(node.value, node);
}
function ObjectTypeIndexer(node) {
  if (node.static) {
    this.word("static");
    this.space();
  }
  this._variance(node);
  this.tokenChar(91);
  if (node.id) {
    this.print(node.id, node);
    this.tokenChar(58);
    this.space();
  }
  this.print(node.key, node);
  this.tokenChar(93);
  this.tokenChar(58);
  this.space();
  this.print(node.value, node);
}
function ObjectTypeProperty(node) {
  if (node.proto) {
    this.word("proto");
    this.space();
  }
  if (node.static) {
    this.word("static");
    this.space();
  }
  if (node.kind === "get" || node.kind === "set") {
    this.word(node.kind);
    this.space();
  }
  this._variance(node);
  this.print(node.key, node);
  if (node.optional) this.tokenChar(63);
  if (!node.method) {
    this.tokenChar(58);
    this.space();
  }
  this.print(node.value, node);
}
function ObjectTypeSpreadProperty(node) {
  this.token("...");
  this.print(node.argument, node);
}
function QualifiedTypeIdentifier(node) {
  this.print(node.qualification, node);
  this.tokenChar(46);
  this.print(node.id, node);
}
function SymbolTypeAnnotation() {
  this.word("symbol");
}
function orSeparator() {
  this.space();
  this.tokenChar(124);
  this.space();
}
function UnionTypeAnnotation(node) {
  this.printJoin(node.types, node, {
    separator: orSeparator
  });
}
function TypeCastExpression(node) {
  this.tokenChar(40);
  this.print(node.expression, node);
  this.print(node.typeAnnotation, node);
  this.tokenChar(41);
}
function Variance(node) {
  if (node.kind === "plus") {
    this.tokenChar(43);
  } else {
    this.tokenChar(45);
  }
}
function VoidTypeAnnotation() {
  this.word("void");
}
function IndexedAccessType(node) {
  this.print(node.objectType, node, true);
  this.tokenChar(91);
  this.print(node.indexType, node);
  this.tokenChar(93);
}
function OptionalIndexedAccessType(node) {
  this.print(node.objectType, node);
  if (node.optional) {
    this.token("?.");
  }
  this.tokenChar(91);
  this.print(node.indexType, node);
  this.tokenChar(93);
}

//# sourceMappingURL=flow.js.map

}, function(modId) { var map = {"./modules":1679363156144,"./types":1679363156145}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679363156147, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BlockStatement = BlockStatement;
exports.Directive = Directive;
exports.DirectiveLiteral = DirectiveLiteral;
exports.File = File;
exports.InterpreterDirective = InterpreterDirective;
exports.Placeholder = Placeholder;
exports.Program = Program;
function File(node) {
  if (node.program) {
    this.print(node.program.interpreter, node);
  }
  this.print(node.program, node);
}
function Program(node) {
  var _node$directives;
  this.noIndentInnerCommentsHere();
  this.printInnerComments();
  const directivesLen = (_node$directives = node.directives) == null ? void 0 : _node$directives.length;
  if (directivesLen) {
    var _node$directives$trai;
    const newline = node.body.length ? 2 : 1;
    this.printSequence(node.directives, node, {
      trailingCommentsLineOffset: newline
    });
    if (!((_node$directives$trai = node.directives[directivesLen - 1].trailingComments) != null && _node$directives$trai.length)) {
      this.newline(newline);
    }
  }
  this.printSequence(node.body, node);
}
function BlockStatement(node) {
  var _node$directives2;
  this.tokenChar(123);
  const directivesLen = (_node$directives2 = node.directives) == null ? void 0 : _node$directives2.length;
  if (directivesLen) {
    var _node$directives$trai2;
    const newline = node.body.length ? 2 : 1;
    this.printSequence(node.directives, node, {
      indent: true,
      trailingCommentsLineOffset: newline
    });
    if (!((_node$directives$trai2 = node.directives[directivesLen - 1].trailingComments) != null && _node$directives$trai2.length)) {
      this.newline(newline);
    }
  }
  this.printSequence(node.body, node, {
    indent: true
  });
  this.sourceWithOffset("end", node.loc, 0, -1);
  this.rightBrace();
}
function Directive(node) {
  this.print(node.value, node);
  this.semicolon();
}
const unescapedSingleQuoteRE = /(?:^|[^\\])(?:\\\\)*'/;
const unescapedDoubleQuoteRE = /(?:^|[^\\])(?:\\\\)*"/;
function DirectiveLiteral(node) {
  const raw = this.getPossibleRaw(node);
  if (!this.format.minified && raw !== undefined) {
    this.token(raw);
    return;
  }
  const {
    value
  } = node;
  if (!unescapedDoubleQuoteRE.test(value)) {
    this.token(`"${value}"`);
  } else if (!unescapedSingleQuoteRE.test(value)) {
    this.token(`'${value}'`);
  } else {
    throw new Error("Malformed AST: it is not possible to print a directive containing" + " both unescaped single and double quotes.");
  }
}
function InterpreterDirective(node) {
  this.token(`#!${node.value}`);
  this.newline(1, true);
}
function Placeholder(node) {
  this.token("%%");
  this.print(node.name);
  this.token("%%");
  if (node.expectedNode === "Statement") {
    this.semicolon();
  }
}

//# sourceMappingURL=base.js.map

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679363156148, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.JSXAttribute = JSXAttribute;
exports.JSXClosingElement = JSXClosingElement;
exports.JSXClosingFragment = JSXClosingFragment;
exports.JSXElement = JSXElement;
exports.JSXEmptyExpression = JSXEmptyExpression;
exports.JSXExpressionContainer = JSXExpressionContainer;
exports.JSXFragment = JSXFragment;
exports.JSXIdentifier = JSXIdentifier;
exports.JSXMemberExpression = JSXMemberExpression;
exports.JSXNamespacedName = JSXNamespacedName;
exports.JSXOpeningElement = JSXOpeningElement;
exports.JSXOpeningFragment = JSXOpeningFragment;
exports.JSXSpreadAttribute = JSXSpreadAttribute;
exports.JSXSpreadChild = JSXSpreadChild;
exports.JSXText = JSXText;
function JSXAttribute(node) {
  this.print(node.name, node);
  if (node.value) {
    this.tokenChar(61);
    this.print(node.value, node);
  }
}
function JSXIdentifier(node) {
  this.word(node.name);
}
function JSXNamespacedName(node) {
  this.print(node.namespace, node);
  this.tokenChar(58);
  this.print(node.name, node);
}
function JSXMemberExpression(node) {
  this.print(node.object, node);
  this.tokenChar(46);
  this.print(node.property, node);
}
function JSXSpreadAttribute(node) {
  this.tokenChar(123);
  this.token("...");
  this.print(node.argument, node);
  this.tokenChar(125);
}
function JSXExpressionContainer(node) {
  this.tokenChar(123);
  this.print(node.expression, node);
  this.tokenChar(125);
}
function JSXSpreadChild(node) {
  this.tokenChar(123);
  this.token("...");
  this.print(node.expression, node);
  this.tokenChar(125);
}
function JSXText(node) {
  const raw = this.getPossibleRaw(node);
  if (raw !== undefined) {
    this.token(raw, true);
  } else {
    this.token(node.value, true);
  }
}
function JSXElement(node) {
  const open = node.openingElement;
  this.print(open, node);
  if (open.selfClosing) return;
  this.indent();
  for (const child of node.children) {
    this.print(child, node);
  }
  this.dedent();
  this.print(node.closingElement, node);
}
function spaceSeparator() {
  this.space();
}
function JSXOpeningElement(node) {
  this.tokenChar(60);
  this.print(node.name, node);
  this.print(node.typeParameters, node);
  if (node.attributes.length > 0) {
    this.space();
    this.printJoin(node.attributes, node, {
      separator: spaceSeparator
    });
  }
  if (node.selfClosing) {
    this.space();
    this.token("/>");
  } else {
    this.tokenChar(62);
  }
}
function JSXClosingElement(node) {
  this.token("</");
  this.print(node.name, node);
  this.tokenChar(62);
}
function JSXEmptyExpression() {
  this.printInnerComments();
}
function JSXFragment(node) {
  this.print(node.openingFragment, node);
  this.indent();
  for (const child of node.children) {
    this.print(child, node);
  }
  this.dedent();
  this.print(node.closingFragment, node);
}
function JSXOpeningFragment() {
  this.tokenChar(60);
  this.tokenChar(62);
}
function JSXClosingFragment() {
  this.token("</");
  this.tokenChar(62);
}

//# sourceMappingURL=jsx.js.map

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679363156149, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TSAnyKeyword = TSAnyKeyword;
exports.TSArrayType = TSArrayType;
exports.TSSatisfiesExpression = exports.TSAsExpression = TSTypeExpression;
exports.TSBigIntKeyword = TSBigIntKeyword;
exports.TSBooleanKeyword = TSBooleanKeyword;
exports.TSCallSignatureDeclaration = TSCallSignatureDeclaration;
exports.TSConditionalType = TSConditionalType;
exports.TSConstructSignatureDeclaration = TSConstructSignatureDeclaration;
exports.TSConstructorType = TSConstructorType;
exports.TSDeclareFunction = TSDeclareFunction;
exports.TSDeclareMethod = TSDeclareMethod;
exports.TSEnumDeclaration = TSEnumDeclaration;
exports.TSEnumMember = TSEnumMember;
exports.TSExportAssignment = TSExportAssignment;
exports.TSExpressionWithTypeArguments = TSExpressionWithTypeArguments;
exports.TSExternalModuleReference = TSExternalModuleReference;
exports.TSFunctionType = TSFunctionType;
exports.TSImportEqualsDeclaration = TSImportEqualsDeclaration;
exports.TSImportType = TSImportType;
exports.TSIndexSignature = TSIndexSignature;
exports.TSIndexedAccessType = TSIndexedAccessType;
exports.TSInferType = TSInferType;
exports.TSInstantiationExpression = TSInstantiationExpression;
exports.TSInterfaceBody = TSInterfaceBody;
exports.TSInterfaceDeclaration = TSInterfaceDeclaration;
exports.TSIntersectionType = TSIntersectionType;
exports.TSIntrinsicKeyword = TSIntrinsicKeyword;
exports.TSLiteralType = TSLiteralType;
exports.TSMappedType = TSMappedType;
exports.TSMethodSignature = TSMethodSignature;
exports.TSModuleBlock = TSModuleBlock;
exports.TSModuleDeclaration = TSModuleDeclaration;
exports.TSNamedTupleMember = TSNamedTupleMember;
exports.TSNamespaceExportDeclaration = TSNamespaceExportDeclaration;
exports.TSNeverKeyword = TSNeverKeyword;
exports.TSNonNullExpression = TSNonNullExpression;
exports.TSNullKeyword = TSNullKeyword;
exports.TSNumberKeyword = TSNumberKeyword;
exports.TSObjectKeyword = TSObjectKeyword;
exports.TSOptionalType = TSOptionalType;
exports.TSParameterProperty = TSParameterProperty;
exports.TSParenthesizedType = TSParenthesizedType;
exports.TSPropertySignature = TSPropertySignature;
exports.TSQualifiedName = TSQualifiedName;
exports.TSRestType = TSRestType;
exports.TSStringKeyword = TSStringKeyword;
exports.TSSymbolKeyword = TSSymbolKeyword;
exports.TSThisType = TSThisType;
exports.TSTupleType = TSTupleType;
exports.TSTypeAliasDeclaration = TSTypeAliasDeclaration;
exports.TSTypeAnnotation = TSTypeAnnotation;
exports.TSTypeAssertion = TSTypeAssertion;
exports.TSTypeLiteral = TSTypeLiteral;
exports.TSTypeOperator = TSTypeOperator;
exports.TSTypeParameter = TSTypeParameter;
exports.TSTypeParameterDeclaration = exports.TSTypeParameterInstantiation = TSTypeParameterInstantiation;
exports.TSTypePredicate = TSTypePredicate;
exports.TSTypeQuery = TSTypeQuery;
exports.TSTypeReference = TSTypeReference;
exports.TSUndefinedKeyword = TSUndefinedKeyword;
exports.TSUnionType = TSUnionType;
exports.TSUnknownKeyword = TSUnknownKeyword;
exports.TSVoidKeyword = TSVoidKeyword;
exports.tsPrintClassMemberModifiers = tsPrintClassMemberModifiers;
exports.tsPrintFunctionOrConstructorType = tsPrintFunctionOrConstructorType;
exports.tsPrintPropertyOrMethodName = tsPrintPropertyOrMethodName;
exports.tsPrintSignatureDeclarationBase = tsPrintSignatureDeclarationBase;
exports.tsPrintTypeLiteralOrInterfaceBody = tsPrintTypeLiteralOrInterfaceBody;
function TSTypeAnnotation(node) {
  this.tokenChar(58);
  this.space();
  if (node.optional) this.tokenChar(63);
  this.print(node.typeAnnotation, node);
}
function TSTypeParameterInstantiation(node, parent) {
  this.tokenChar(60);
  this.printList(node.params, node, {});
  if (parent.type === "ArrowFunctionExpression" && node.params.length === 1) {
    this.tokenChar(44);
  }
  this.tokenChar(62);
}
function TSTypeParameter(node) {
  if (node.in) {
    this.word("in");
    this.space();
  }
  if (node.out) {
    this.word("out");
    this.space();
  }
  this.word(node.name);
  if (node.constraint) {
    this.space();
    this.word("extends");
    this.space();
    this.print(node.constraint, node);
  }
  if (node.default) {
    this.space();
    this.tokenChar(61);
    this.space();
    this.print(node.default, node);
  }
}
function TSParameterProperty(node) {
  if (node.accessibility) {
    this.word(node.accessibility);
    this.space();
  }
  if (node.readonly) {
    this.word("readonly");
    this.space();
  }
  this._param(node.parameter);
}
function TSDeclareFunction(node, parent) {
  if (node.declare) {
    this.word("declare");
    this.space();
  }
  this._functionHead(node, parent);
  this.tokenChar(59);
}
function TSDeclareMethod(node) {
  this._classMethodHead(node);
  this.tokenChar(59);
}
function TSQualifiedName(node) {
  this.print(node.left, node);
  this.tokenChar(46);
  this.print(node.right, node);
}
function TSCallSignatureDeclaration(node) {
  this.tsPrintSignatureDeclarationBase(node);
  this.tokenChar(59);
}
function TSConstructSignatureDeclaration(node) {
  this.word("new");
  this.space();
  this.tsPrintSignatureDeclarationBase(node);
  this.tokenChar(59);
}
function TSPropertySignature(node) {
  const {
    readonly,
    initializer
  } = node;
  if (readonly) {
    this.word("readonly");
    this.space();
  }
  this.tsPrintPropertyOrMethodName(node);
  this.print(node.typeAnnotation, node);
  if (initializer) {
    this.space();
    this.tokenChar(61);
    this.space();
    this.print(initializer, node);
  }
  this.tokenChar(59);
}
function tsPrintPropertyOrMethodName(node) {
  if (node.computed) {
    this.tokenChar(91);
  }
  this.print(node.key, node);
  if (node.computed) {
    this.tokenChar(93);
  }
  if (node.optional) {
    this.tokenChar(63);
  }
}
function TSMethodSignature(node) {
  const {
    kind
  } = node;
  if (kind === "set" || kind === "get") {
    this.word(kind);
    this.space();
  }
  this.tsPrintPropertyOrMethodName(node);
  this.tsPrintSignatureDeclarationBase(node);
  this.tokenChar(59);
}
function TSIndexSignature(node) {
  const {
    readonly,
    static: isStatic
  } = node;
  if (isStatic) {
    this.word("static");
    this.space();
  }
  if (readonly) {
    this.word("readonly");
    this.space();
  }
  this.tokenChar(91);
  this._parameters(node.parameters, node);
  this.tokenChar(93);
  this.print(node.typeAnnotation, node);
  this.tokenChar(59);
}
function TSAnyKeyword() {
  this.word("any");
}
function TSBigIntKeyword() {
  this.word("bigint");
}
function TSUnknownKeyword() {
  this.word("unknown");
}
function TSNumberKeyword() {
  this.word("number");
}
function TSObjectKeyword() {
  this.word("object");
}
function TSBooleanKeyword() {
  this.word("boolean");
}
function TSStringKeyword() {
  this.word("string");
}
function TSSymbolKeyword() {
  this.word("symbol");
}
function TSVoidKeyword() {
  this.word("void");
}
function TSUndefinedKeyword() {
  this.word("undefined");
}
function TSNullKeyword() {
  this.word("null");
}
function TSNeverKeyword() {
  this.word("never");
}
function TSIntrinsicKeyword() {
  this.word("intrinsic");
}
function TSThisType() {
  this.word("this");
}
function TSFunctionType(node) {
  this.tsPrintFunctionOrConstructorType(node);
}
function TSConstructorType(node) {
  if (node.abstract) {
    this.word("abstract");
    this.space();
  }
  this.word("new");
  this.space();
  this.tsPrintFunctionOrConstructorType(node);
}
function tsPrintFunctionOrConstructorType(node) {
  const {
    typeParameters
  } = node;
  const parameters = node.parameters;
  this.print(typeParameters, node);
  this.tokenChar(40);
  this._parameters(parameters, node);
  this.tokenChar(41);
  this.space();
  this.token("=>");
  this.space();
  const returnType = node.typeAnnotation;
  this.print(returnType.typeAnnotation, node);
}
function TSTypeReference(node) {
  this.print(node.typeName, node, true);
  this.print(node.typeParameters, node, true);
}
function TSTypePredicate(node) {
  if (node.asserts) {
    this.word("asserts");
    this.space();
  }
  this.print(node.parameterName);
  if (node.typeAnnotation) {
    this.space();
    this.word("is");
    this.space();
    this.print(node.typeAnnotation.typeAnnotation);
  }
}
function TSTypeQuery(node) {
  this.word("typeof");
  this.space();
  this.print(node.exprName);
  if (node.typeParameters) {
    this.print(node.typeParameters, node);
  }
}
function TSTypeLiteral(node) {
  this.tsPrintTypeLiteralOrInterfaceBody(node.members, node);
}
function tsPrintTypeLiteralOrInterfaceBody(members, node) {
  tsPrintBraced(this, members, node);
}
function tsPrintBraced(printer, members, node) {
  printer.token("{");
  if (members.length) {
    printer.indent();
    printer.newline();
    for (const member of members) {
      printer.print(member, node);
      printer.newline();
    }
    printer.dedent();
  }
  printer.sourceWithOffset("end", node.loc, 0, -1);
  printer.rightBrace();
}
function TSArrayType(node) {
  this.print(node.elementType, node, true);
  this.token("[]");
}
function TSTupleType(node) {
  this.tokenChar(91);
  this.printList(node.elementTypes, node);
  this.tokenChar(93);
}
function TSOptionalType(node) {
  this.print(node.typeAnnotation, node);
  this.tokenChar(63);
}
function TSRestType(node) {
  this.token("...");
  this.print(node.typeAnnotation, node);
}
function TSNamedTupleMember(node) {
  this.print(node.label, node);
  if (node.optional) this.tokenChar(63);
  this.tokenChar(58);
  this.space();
  this.print(node.elementType, node);
}
function TSUnionType(node) {
  tsPrintUnionOrIntersectionType(this, node, "|");
}
function TSIntersectionType(node) {
  tsPrintUnionOrIntersectionType(this, node, "&");
}
function tsPrintUnionOrIntersectionType(printer, node, sep) {
  printer.printJoin(node.types, node, {
    separator() {
      this.space();
      this.token(sep);
      this.space();
    }
  });
}
function TSConditionalType(node) {
  this.print(node.checkType);
  this.space();
  this.word("extends");
  this.space();
  this.print(node.extendsType);
  this.space();
  this.tokenChar(63);
  this.space();
  this.print(node.trueType);
  this.space();
  this.tokenChar(58);
  this.space();
  this.print(node.falseType);
}
function TSInferType(node) {
  this.token("infer");
  this.space();
  this.print(node.typeParameter);
}
function TSParenthesizedType(node) {
  this.tokenChar(40);
  this.print(node.typeAnnotation, node);
  this.tokenChar(41);
}
function TSTypeOperator(node) {
  this.word(node.operator);
  this.space();
  this.print(node.typeAnnotation, node);
}
function TSIndexedAccessType(node) {
  this.print(node.objectType, node, true);
  this.tokenChar(91);
  this.print(node.indexType, node);
  this.tokenChar(93);
}
function TSMappedType(node) {
  const {
    nameType,
    optional,
    readonly,
    typeParameter
  } = node;
  this.tokenChar(123);
  this.space();
  if (readonly) {
    tokenIfPlusMinus(this, readonly);
    this.word("readonly");
    this.space();
  }
  this.tokenChar(91);
  this.word(typeParameter.name);
  this.space();
  this.word("in");
  this.space();
  this.print(typeParameter.constraint, typeParameter);
  if (nameType) {
    this.space();
    this.word("as");
    this.space();
    this.print(nameType, node);
  }
  this.tokenChar(93);
  if (optional) {
    tokenIfPlusMinus(this, optional);
    this.tokenChar(63);
  }
  this.tokenChar(58);
  this.space();
  this.print(node.typeAnnotation, node);
  this.space();
  this.tokenChar(125);
}
function tokenIfPlusMinus(self, tok) {
  if (tok !== true) {
    self.token(tok);
  }
}
function TSLiteralType(node) {
  this.print(node.literal, node);
}
function TSExpressionWithTypeArguments(node) {
  this.print(node.expression, node);
  this.print(node.typeParameters, node);
}
function TSInterfaceDeclaration(node) {
  const {
    declare,
    id,
    typeParameters,
    extends: extendz,
    body
  } = node;
  if (declare) {
    this.word("declare");
    this.space();
  }
  this.word("interface");
  this.space();
  this.print(id, node);
  this.print(typeParameters, node);
  if (extendz != null && extendz.length) {
    this.space();
    this.word("extends");
    this.space();
    this.printList(extendz, node);
  }
  this.space();
  this.print(body, node);
}
function TSInterfaceBody(node) {
  this.tsPrintTypeLiteralOrInterfaceBody(node.body, node);
}
function TSTypeAliasDeclaration(node) {
  const {
    declare,
    id,
    typeParameters,
    typeAnnotation
  } = node;
  if (declare) {
    this.word("declare");
    this.space();
  }
  this.word("type");
  this.space();
  this.print(id, node);
  this.print(typeParameters, node);
  this.space();
  this.tokenChar(61);
  this.space();
  this.print(typeAnnotation, node);
  this.tokenChar(59);
}
function TSTypeExpression(node) {
  var _expression$trailingC;
  const {
    type,
    expression,
    typeAnnotation
  } = node;
  const forceParens = !!((_expression$trailingC = expression.trailingComments) != null && _expression$trailingC.length);
  this.print(expression, node, true, undefined, forceParens);
  this.space();
  this.word(type === "TSAsExpression" ? "as" : "satisfies");
  this.space();
  this.print(typeAnnotation, node);
}
function TSTypeAssertion(node) {
  const {
    typeAnnotation,
    expression
  } = node;
  this.tokenChar(60);
  this.print(typeAnnotation, node);
  this.tokenChar(62);
  this.space();
  this.print(expression, node);
}
function TSInstantiationExpression(node) {
  this.print(node.expression, node);
  this.print(node.typeParameters, node);
}
function TSEnumDeclaration(node) {
  const {
    declare,
    const: isConst,
    id,
    members
  } = node;
  if (declare) {
    this.word("declare");
    this.space();
  }
  if (isConst) {
    this.word("const");
    this.space();
  }
  this.word("enum");
  this.space();
  this.print(id, node);
  this.space();
  tsPrintBraced(this, members, node);
}
function TSEnumMember(node) {
  const {
    id,
    initializer
  } = node;
  this.print(id, node);
  if (initializer) {
    this.space();
    this.tokenChar(61);
    this.space();
    this.print(initializer, node);
  }
  this.tokenChar(44);
}
function TSModuleDeclaration(node) {
  const {
    declare,
    id
  } = node;
  if (declare) {
    this.word("declare");
    this.space();
  }
  if (!node.global) {
    this.word(id.type === "Identifier" ? "namespace" : "module");
    this.space();
  }
  this.print(id, node);
  if (!node.body) {
    this.tokenChar(59);
    return;
  }
  let body = node.body;
  while (body.type === "TSModuleDeclaration") {
    this.tokenChar(46);
    this.print(body.id, body);
    body = body.body;
  }
  this.space();
  this.print(body, node);
}
function TSModuleBlock(node) {
  tsPrintBraced(this, node.body, node);
}
function TSImportType(node) {
  const {
    argument,
    qualifier,
    typeParameters
  } = node;
  this.word("import");
  this.tokenChar(40);
  this.print(argument, node);
  this.tokenChar(41);
  if (qualifier) {
    this.tokenChar(46);
    this.print(qualifier, node);
  }
  if (typeParameters) {
    this.print(typeParameters, node);
  }
}
function TSImportEqualsDeclaration(node) {
  const {
    isExport,
    id,
    moduleReference
  } = node;
  if (isExport) {
    this.word("export");
    this.space();
  }
  this.word("import");
  this.space();
  this.print(id, node);
  this.space();
  this.tokenChar(61);
  this.space();
  this.print(moduleReference, node);
  this.tokenChar(59);
}
function TSExternalModuleReference(node) {
  this.token("require(");
  this.print(node.expression, node);
  this.tokenChar(41);
}
function TSNonNullExpression(node) {
  this.print(node.expression, node);
  this.tokenChar(33);
}
function TSExportAssignment(node) {
  this.word("export");
  this.space();
  this.tokenChar(61);
  this.space();
  this.print(node.expression, node);
  this.tokenChar(59);
}
function TSNamespaceExportDeclaration(node) {
  this.word("export");
  this.space();
  this.word("as");
  this.space();
  this.word("namespace");
  this.space();
  this.print(node.id, node);
}
function tsPrintSignatureDeclarationBase(node) {
  const {
    typeParameters
  } = node;
  const parameters = node.parameters;
  this.print(typeParameters, node);
  this.tokenChar(40);
  this._parameters(parameters, node);
  this.tokenChar(41);
  const returnType = node.typeAnnotation;
  this.print(returnType, node);
}
function tsPrintClassMemberModifiers(node) {
  const isField = node.type === "ClassAccessorProperty" || node.type === "ClassProperty";
  if (isField && node.declare) {
    this.word("declare");
    this.space();
  }
  if (node.accessibility) {
    this.word(node.accessibility);
    this.space();
  }
  if (node.static) {
    this.word("static");
    this.space();
  }
  if (node.override) {
    this.word("override");
    this.space();
  }
  if (node.abstract) {
    this.word("abstract");
    this.space();
  }
  if (isField && node.readonly) {
    this.word("readonly");
    this.space();
  }
}

//# sourceMappingURL=typescript.js.map

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1679363156131);
})()
//miniprogram-npm-outsideDeps=["@jridgewell/gen-mapping","@jridgewell/trace-mapping","@babel/types","jsesc"]
//# sourceMappingURL=index.js.map