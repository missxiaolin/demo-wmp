module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1679363156360, function(require, module, exports) {


Object.defineProperty(exports, '__esModule', {
  value: true
});
Object.defineProperty(exports, 'BaseReporter', {
  enumerable: true,
  get: function () {
    return _BaseReporter.default;
  }
});
Object.defineProperty(exports, 'CoverageReporter', {
  enumerable: true,
  get: function () {
    return _CoverageReporter.default;
  }
});
Object.defineProperty(exports, 'DefaultReporter', {
  enumerable: true,
  get: function () {
    return _DefaultReporter.default;
  }
});
Object.defineProperty(exports, 'GitHubActionsReporter', {
  enumerable: true,
  get: function () {
    return _GitHubActionsReporter.default;
  }
});
Object.defineProperty(exports, 'NotifyReporter', {
  enumerable: true,
  get: function () {
    return _NotifyReporter.default;
  }
});
Object.defineProperty(exports, 'SummaryReporter', {
  enumerable: true,
  get: function () {
    return _SummaryReporter.default;
  }
});
Object.defineProperty(exports, 'VerboseReporter', {
  enumerable: true,
  get: function () {
    return _VerboseReporter.default;
  }
});
exports.utils = void 0;
var _formatTestPath = _interopRequireDefault(require('./formatTestPath'));
var _getResultHeader = _interopRequireDefault(require('./getResultHeader'));
var _getSnapshotStatus = _interopRequireDefault(require('./getSnapshotStatus'));
var _getSnapshotSummary = _interopRequireDefault(
  require('./getSnapshotSummary')
);
var _getSummary = _interopRequireDefault(require('./getSummary'));
var _printDisplayName = _interopRequireDefault(require('./printDisplayName'));
var _relativePath = _interopRequireDefault(require('./relativePath'));
var _trimAndFormatPath = _interopRequireDefault(require('./trimAndFormatPath'));
var _BaseReporter = _interopRequireDefault(require('./BaseReporter'));
var _CoverageReporter = _interopRequireDefault(require('./CoverageReporter'));
var _DefaultReporter = _interopRequireDefault(require('./DefaultReporter'));
var _GitHubActionsReporter = _interopRequireDefault(
  require('./GitHubActionsReporter')
);
var _NotifyReporter = _interopRequireDefault(require('./NotifyReporter'));
var _SummaryReporter = _interopRequireDefault(require('./SummaryReporter'));
var _VerboseReporter = _interopRequireDefault(require('./VerboseReporter'));
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {default: obj};
}
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const utils = {
  formatTestPath: _formatTestPath.default,
  getResultHeader: _getResultHeader.default,
  getSnapshotStatus: _getSnapshotStatus.default,
  getSnapshotSummary: _getSnapshotSummary.default,
  getSummary: _getSummary.default,
  printDisplayName: _printDisplayName.default,
  relativePath: _relativePath.default,
  trimAndFormatPath: _trimAndFormatPath.default
};
exports.utils = utils;

}, function(modId) {var map = {"./formatTestPath":1679363156361,"./getSnapshotStatus":1679363156364,"./getSnapshotSummary":1679363156365,"./printDisplayName":1679363156367,"./relativePath":1679363156362,"./trimAndFormatPath":1679363156368}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679363156361, function(require, module, exports) {


Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = formatTestPath;
function path() {
  const data = _interopRequireWildcard(require('path'));
  path = function () {
    return data;
  };
  return data;
}
function _chalk() {
  const data = _interopRequireDefault(require('chalk'));
  _chalk = function () {
    return data;
  };
  return data;
}
function _slash() {
  const data = _interopRequireDefault(require('slash'));
  _slash = function () {
    return data;
  };
  return data;
}
var _relativePath = _interopRequireDefault(require('./relativePath'));
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {default: obj};
}
function _getRequireWildcardCache(nodeInterop) {
  if (typeof WeakMap !== 'function') return null;
  var cacheBabelInterop = new WeakMap();
  var cacheNodeInterop = new WeakMap();
  return (_getRequireWildcardCache = function (nodeInterop) {
    return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
  })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
  if (!nodeInterop && obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || (typeof obj !== 'object' && typeof obj !== 'function')) {
    return {default: obj};
  }
  var cache = _getRequireWildcardCache(nodeInterop);
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor =
    Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (key !== 'default' && Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor
        ? Object.getOwnPropertyDescriptor(obj, key)
        : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

function formatTestPath(config, testPath) {
  const {dirname, basename} = (0, _relativePath.default)(config, testPath);
  return (0, _slash().default)(
    _chalk().default.dim(dirname + path().sep) + _chalk().default.bold(basename)
  );
}

}, function(modId) { var map = {"./relativePath":1679363156362}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679363156362, function(require, module, exports) {


Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = relativePath;
function path() {
  const data = _interopRequireWildcard(require('path'));
  path = function () {
    return data;
  };
  return data;
}
function _getRequireWildcardCache(nodeInterop) {
  if (typeof WeakMap !== 'function') return null;
  var cacheBabelInterop = new WeakMap();
  var cacheNodeInterop = new WeakMap();
  return (_getRequireWildcardCache = function (nodeInterop) {
    return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
  })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
  if (!nodeInterop && obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || (typeof obj !== 'object' && typeof obj !== 'function')) {
    return {default: obj};
  }
  var cache = _getRequireWildcardCache(nodeInterop);
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor =
    Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (key !== 'default' && Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor
        ? Object.getOwnPropertyDescriptor(obj, key)
        : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

function relativePath(config, testPath) {
  // this function can be called with ProjectConfigs or GlobalConfigs. GlobalConfigs
  // do not have config.cwd, only config.rootDir. Try using config.cwd, fallback
  // to config.rootDir. (Also, some unit just use config.rootDir, which is ok)
  testPath = path().relative(config.cwd || config.rootDir, testPath);
  const dirname = path().dirname(testPath);
  const basename = path().basename(testPath);
  return {
    basename,
    dirname
  };
}

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679363156364, function(require, module, exports) {


Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = getSnapshotStatus;
function _chalk() {
  const data = _interopRequireDefault(require('chalk'));
  _chalk = function () {
    return data;
  };
  return data;
}
function _jestUtil() {
  const data = require('jest-util');
  _jestUtil = function () {
    return data;
  };
  return data;
}
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {default: obj};
}
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const ARROW = ' \u203A ';
const DOT = ' \u2022 ';
const FAIL_COLOR = _chalk().default.bold.red;
const SNAPSHOT_ADDED = _chalk().default.bold.green;
const SNAPSHOT_UPDATED = _chalk().default.bold.green;
const SNAPSHOT_OUTDATED = _chalk().default.bold.yellow;
function getSnapshotStatus(snapshot, afterUpdate) {
  const statuses = [];
  if (snapshot.added) {
    statuses.push(
      SNAPSHOT_ADDED(
        `${
          ARROW + (0, _jestUtil().pluralize)('snapshot', snapshot.added)
        } written.`
      )
    );
  }
  if (snapshot.updated) {
    statuses.push(
      SNAPSHOT_UPDATED(
        `${
          ARROW + (0, _jestUtil().pluralize)('snapshot', snapshot.updated)
        } updated.`
      )
    );
  }
  if (snapshot.unmatched) {
    statuses.push(
      FAIL_COLOR(
        `${
          ARROW + (0, _jestUtil().pluralize)('snapshot', snapshot.unmatched)
        } failed.`
      )
    );
  }
  if (snapshot.unchecked) {
    if (afterUpdate) {
      statuses.push(
        SNAPSHOT_UPDATED(
          `${
            ARROW + (0, _jestUtil().pluralize)('snapshot', snapshot.unchecked)
          } removed.`
        )
      );
    } else {
      statuses.push(
        `${SNAPSHOT_OUTDATED(
          `${
            ARROW + (0, _jestUtil().pluralize)('snapshot', snapshot.unchecked)
          } obsolete`
        )}.`
      );
    }
    snapshot.uncheckedKeys.forEach(key => {
      statuses.push(`  ${DOT}${key}`);
    });
  }
  if (snapshot.fileDeleted) {
    statuses.push(SNAPSHOT_UPDATED(`${ARROW}snapshot file removed.`));
  }
  return statuses;
}

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679363156365, function(require, module, exports) {


Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = getSnapshotSummary;
function _chalk() {
  const data = _interopRequireDefault(require('chalk'));
  _chalk = function () {
    return data;
  };
  return data;
}
function _jestUtil() {
  const data = require('jest-util');
  _jestUtil = function () {
    return data;
  };
  return data;
}
var _formatTestPath = _interopRequireDefault(require('./formatTestPath'));
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {default: obj};
}
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const ARROW = ' \u203A ';
const DOWN_ARROW = ' \u21B3 ';
const DOT = ' \u2022 ';
const FAIL_COLOR = _chalk().default.bold.red;
const OBSOLETE_COLOR = _chalk().default.bold.yellow;
const SNAPSHOT_ADDED = _chalk().default.bold.green;
const SNAPSHOT_NOTE = _chalk().default.dim;
const SNAPSHOT_REMOVED = _chalk().default.bold.green;
const SNAPSHOT_SUMMARY = _chalk().default.bold;
const SNAPSHOT_UPDATED = _chalk().default.bold.green;
function getSnapshotSummary(snapshots, globalConfig, updateCommand) {
  const summary = [];
  summary.push(SNAPSHOT_SUMMARY('Snapshot Summary'));
  if (snapshots.added) {
    summary.push(
      `${SNAPSHOT_ADDED(
        `${
          ARROW + (0, _jestUtil().pluralize)('snapshot', snapshots.added)
        } written `
      )}from ${(0, _jestUtil().pluralize)('test suite', snapshots.filesAdded)}.`
    );
  }
  if (snapshots.unmatched) {
    summary.push(
      `${FAIL_COLOR(
        `${ARROW}${(0, _jestUtil().pluralize)(
          'snapshot',
          snapshots.unmatched
        )} failed`
      )} from ${(0, _jestUtil().pluralize)(
        'test suite',
        snapshots.filesUnmatched
      )}. ${SNAPSHOT_NOTE(
        `Inspect your code changes or ${updateCommand} to update them.`
      )}`
    );
  }
  if (snapshots.updated) {
    summary.push(
      `${SNAPSHOT_UPDATED(
        `${
          ARROW + (0, _jestUtil().pluralize)('snapshot', snapshots.updated)
        } updated `
      )}from ${(0, _jestUtil().pluralize)(
        'test suite',
        snapshots.filesUpdated
      )}.`
    );
  }
  if (snapshots.filesRemoved) {
    if (snapshots.didUpdate) {
      summary.push(
        `${SNAPSHOT_REMOVED(
          `${ARROW}${(0, _jestUtil().pluralize)(
            'snapshot file',
            snapshots.filesRemoved
          )} removed `
        )}from ${(0, _jestUtil().pluralize)(
          'test suite',
          snapshots.filesRemoved
        )}.`
      );
    } else {
      summary.push(
        `${OBSOLETE_COLOR(
          `${ARROW}${(0, _jestUtil().pluralize)(
            'snapshot file',
            snapshots.filesRemoved
          )} obsolete `
        )}from ${(0, _jestUtil().pluralize)(
          'test suite',
          snapshots.filesRemoved
        )}. ${SNAPSHOT_NOTE(
          `To remove ${
            snapshots.filesRemoved === 1 ? 'it' : 'them all'
          }, ${updateCommand}.`
        )}`
      );
    }
  }
  if (snapshots.filesRemovedList && snapshots.filesRemovedList.length) {
    const [head, ...tail] = snapshots.filesRemovedList;
    summary.push(
      `  ${DOWN_ARROW} ${DOT}${(0, _formatTestPath.default)(
        globalConfig,
        head
      )}`
    );
    tail.forEach(key => {
      summary.push(
        `      ${DOT}${(0, _formatTestPath.default)(globalConfig, key)}`
      );
    });
  }
  if (snapshots.unchecked) {
    if (snapshots.didUpdate) {
      summary.push(
        `${SNAPSHOT_REMOVED(
          `${ARROW}${(0, _jestUtil().pluralize)(
            'snapshot',
            snapshots.unchecked
          )} removed `
        )}from ${(0, _jestUtil().pluralize)(
          'test suite',
          snapshots.uncheckedKeysByFile.length
        )}.`
      );
    } else {
      summary.push(
        `${OBSOLETE_COLOR(
          `${ARROW}${(0, _jestUtil().pluralize)(
            'snapshot',
            snapshots.unchecked
          )} obsolete `
        )}from ${(0, _jestUtil().pluralize)(
          'test suite',
          snapshots.uncheckedKeysByFile.length
        )}. ${SNAPSHOT_NOTE(
          `To remove ${
            snapshots.unchecked === 1 ? 'it' : 'them all'
          }, ${updateCommand}.`
        )}`
      );
    }
    snapshots.uncheckedKeysByFile.forEach(uncheckedFile => {
      summary.push(
        `  ${DOWN_ARROW}${(0, _formatTestPath.default)(
          globalConfig,
          uncheckedFile.filePath
        )}`
      );
      uncheckedFile.keys.forEach(key => {
        summary.push(`      ${DOT}${key}`);
      });
    });
  }
  return summary;
}

}, function(modId) { var map = {"./formatTestPath":1679363156361}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679363156367, function(require, module, exports) {


Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = printDisplayName;
function _chalk() {
  const data = _interopRequireDefault(require('chalk'));
  _chalk = function () {
    return data;
  };
  return data;
}
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {default: obj};
}
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

function printDisplayName(config) {
  const {displayName} = config;
  const white = _chalk().default.reset.inverse.white;
  if (!displayName) {
    return '';
  }
  const {name, color} = displayName;
  const chosenColor = _chalk().default.reset.inverse[color]
    ? _chalk().default.reset.inverse[color]
    : white;
  return _chalk().default.supportsColor ? chosenColor(` ${name} `) : name;
}

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679363156368, function(require, module, exports) {


Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = trimAndFormatPath;
function path() {
  const data = _interopRequireWildcard(require('path'));
  path = function () {
    return data;
  };
  return data;
}
function _chalk() {
  const data = _interopRequireDefault(require('chalk'));
  _chalk = function () {
    return data;
  };
  return data;
}
function _slash() {
  const data = _interopRequireDefault(require('slash'));
  _slash = function () {
    return data;
  };
  return data;
}
var _relativePath = _interopRequireDefault(require('./relativePath'));
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {default: obj};
}
function _getRequireWildcardCache(nodeInterop) {
  if (typeof WeakMap !== 'function') return null;
  var cacheBabelInterop = new WeakMap();
  var cacheNodeInterop = new WeakMap();
  return (_getRequireWildcardCache = function (nodeInterop) {
    return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
  })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
  if (!nodeInterop && obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || (typeof obj !== 'object' && typeof obj !== 'function')) {
    return {default: obj};
  }
  var cache = _getRequireWildcardCache(nodeInterop);
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor =
    Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (key !== 'default' && Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor
        ? Object.getOwnPropertyDescriptor(obj, key)
        : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

function trimAndFormatPath(pad, config, testPath, columns) {
  const maxLength = columns - pad;
  const relative = (0, _relativePath.default)(config, testPath);
  const {basename} = relative;
  let {dirname} = relative;

  // length is ok
  if ((dirname + path().sep + basename).length <= maxLength) {
    return (0, _slash().default)(
      _chalk().default.dim(dirname + path().sep) +
        _chalk().default.bold(basename)
    );
  }

  // we can fit trimmed dirname and full basename
  const basenameLength = basename.length;
  if (basenameLength + 4 < maxLength) {
    const dirnameLength = maxLength - 4 - basenameLength;
    dirname = `...${dirname.slice(
      dirname.length - dirnameLength,
      dirname.length
    )}`;
    return (0, _slash().default)(
      _chalk().default.dim(dirname + path().sep) +
        _chalk().default.bold(basename)
    );
  }
  if (basenameLength + 4 === maxLength) {
    return (0, _slash().default)(
      _chalk().default.dim(`...${path().sep}`) + _chalk().default.bold(basename)
    );
  }

  // can't fit dirname, but can fit trimmed basename
  return (0, _slash().default)(
    _chalk().default.bold(
      `...${basename.slice(basename.length - maxLength - 4, basename.length)}`
    )
  );
}

}, function(modId) { var map = {"./relativePath":1679363156362}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1679363156360);
})()
//miniprogram-npm-outsideDeps=["./getResultHeader","./getSummary","./BaseReporter","./CoverageReporter","./DefaultReporter","./GitHubActionsReporter","./NotifyReporter","./SummaryReporter","./VerboseReporter","path","chalk","slash","jest-util"]
//# sourceMappingURL=index.js.map