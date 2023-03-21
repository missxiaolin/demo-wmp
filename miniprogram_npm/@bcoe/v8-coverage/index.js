module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1679363156325, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var ascii_1 = require("./ascii");
exports.emitForest = ascii_1.emitForest;
exports.emitForestLines = ascii_1.emitForestLines;
exports.parseFunctionRanges = ascii_1.parseFunctionRanges;
exports.parseOffsets = ascii_1.parseOffsets;
var clone_1 = require("./clone");
exports.cloneFunctionCov = clone_1.cloneFunctionCov;
exports.cloneProcessCov = clone_1.cloneProcessCov;
exports.cloneScriptCov = clone_1.cloneScriptCov;
exports.cloneRangeCov = clone_1.cloneRangeCov;
var compare_1 = require("./compare");
exports.compareScriptCovs = compare_1.compareScriptCovs;
exports.compareFunctionCovs = compare_1.compareFunctionCovs;
exports.compareRangeCovs = compare_1.compareRangeCovs;
var merge_1 = require("./merge");
exports.mergeFunctionCovs = merge_1.mergeFunctionCovs;
exports.mergeProcessCovs = merge_1.mergeProcessCovs;
exports.mergeScriptCovs = merge_1.mergeScriptCovs;
var range_tree_1 = require("./range-tree");
exports.RangeTree = range_tree_1.RangeTree;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxpQ0FBeUY7QUFBaEYsNkJBQUEsVUFBVSxDQUFBO0FBQUUsa0NBQUEsZUFBZSxDQUFBO0FBQUUsc0NBQUEsbUJBQW1CLENBQUE7QUFBRSwrQkFBQSxZQUFZLENBQUE7QUFDdkUsaUNBQTJGO0FBQWxGLG1DQUFBLGdCQUFnQixDQUFBO0FBQUUsa0NBQUEsZUFBZSxDQUFBO0FBQUUsaUNBQUEsY0FBYyxDQUFBO0FBQUUsZ0NBQUEsYUFBYSxDQUFBO0FBQ3pFLHFDQUFxRjtBQUE1RSxzQ0FBQSxpQkFBaUIsQ0FBQTtBQUFFLHdDQUFBLG1CQUFtQixDQUFBO0FBQUUscUNBQUEsZ0JBQWdCLENBQUE7QUFDakUsaUNBQStFO0FBQXRFLG9DQUFBLGlCQUFpQixDQUFBO0FBQUUsbUNBQUEsZ0JBQWdCLENBQUE7QUFBRSxrQ0FBQSxlQUFlLENBQUE7QUFDN0QsMkNBQXlDO0FBQWhDLGlDQUFBLFNBQVMsQ0FBQSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB7IGVtaXRGb3Jlc3QsIGVtaXRGb3Jlc3RMaW5lcywgcGFyc2VGdW5jdGlvblJhbmdlcywgcGFyc2VPZmZzZXRzIH0gZnJvbSBcIi4vYXNjaWlcIjtcbmV4cG9ydCB7IGNsb25lRnVuY3Rpb25Db3YsIGNsb25lUHJvY2Vzc0NvdiwgY2xvbmVTY3JpcHRDb3YsIGNsb25lUmFuZ2VDb3YgfSBmcm9tIFwiLi9jbG9uZVwiO1xuZXhwb3J0IHsgY29tcGFyZVNjcmlwdENvdnMsIGNvbXBhcmVGdW5jdGlvbkNvdnMsIGNvbXBhcmVSYW5nZUNvdnMgfSBmcm9tIFwiLi9jb21wYXJlXCI7XG5leHBvcnQgeyBtZXJnZUZ1bmN0aW9uQ292cywgbWVyZ2VQcm9jZXNzQ292cywgbWVyZ2VTY3JpcHRDb3ZzIH0gZnJvbSBcIi4vbWVyZ2VcIjtcbmV4cG9ydCB7IFJhbmdlVHJlZSB9IGZyb20gXCIuL3JhbmdlLXRyZWVcIjtcbmV4cG9ydCB7IFByb2Nlc3NDb3YsIFNjcmlwdENvdiwgRnVuY3Rpb25Db3YsIFJhbmdlQ292IH0gZnJvbSBcIi4vdHlwZXNcIjtcbiJdLCJzb3VyY2VSb290IjoiIn0=

}, function(modId) {var map = {"./ascii":1679363156326,"./clone":1679363156328,"./compare":1679363156327,"./merge":1679363156329,"./range-tree":1679363156331}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679363156326, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
const compare_1 = require("./compare");
function emitForest(trees) {
    return emitForestLines(trees).join("\n");
}
exports.emitForest = emitForest;
function emitForestLines(trees) {
    const colMap = getColMap(trees);
    const header = emitOffsets(colMap);
    return [header, ...trees.map(tree => emitTree(tree, colMap).join("\n"))];
}
exports.emitForestLines = emitForestLines;
function getColMap(trees) {
    const eventSet = new Set();
    for (const tree of trees) {
        const stack = [tree];
        while (stack.length > 0) {
            const cur = stack.pop();
            eventSet.add(cur.start);
            eventSet.add(cur.end);
            for (const child of cur.children) {
                stack.push(child);
            }
        }
    }
    const events = [...eventSet];
    events.sort((a, b) => a - b);
    let maxDigits = 1;
    for (const event of events) {
        maxDigits = Math.max(maxDigits, event.toString(10).length);
    }
    const colWidth = maxDigits + 3;
    const colMap = new Map();
    for (const [i, event] of events.entries()) {
        colMap.set(event, i * colWidth);
    }
    return colMap;
}
function emitTree(tree, colMap) {
    const layers = [];
    let nextLayer = [tree];
    while (nextLayer.length > 0) {
        const layer = nextLayer;
        layers.push(layer);
        nextLayer = [];
        for (const node of layer) {
            for (const child of node.children) {
                nextLayer.push(child);
            }
        }
    }
    return layers.map(layer => emitTreeLayer(layer, colMap));
}
function parseFunctionRanges(text, offsetMap) {
    const result = [];
    for (const line of text.split("\n")) {
        for (const range of parseTreeLayer(line, offsetMap)) {
            result.push(range);
        }
    }
    result.sort(compare_1.compareRangeCovs);
    return result;
}
exports.parseFunctionRanges = parseFunctionRanges;
/**
 *
 * @param layer Sorted list of disjoint trees.
 * @param colMap
 */
function emitTreeLayer(layer, colMap) {
    const line = [];
    let curIdx = 0;
    for (const { start, end, count } of layer) {
        const startIdx = colMap.get(start);
        const endIdx = colMap.get(end);
        if (startIdx > curIdx) {
            line.push(" ".repeat(startIdx - curIdx));
        }
        line.push(emitRange(count, endIdx - startIdx));
        curIdx = endIdx;
    }
    return line.join("");
}
function parseTreeLayer(text, offsetMap) {
    const result = [];
    const regex = /\[(\d+)-*\)/gs;
    while (true) {
        const match = regex.exec(text);
        if (match === null) {
            break;
        }
        const startIdx = match.index;
        const endIdx = startIdx + match[0].length;
        const count = parseInt(match[1], 10);
        const startOffset = offsetMap.get(startIdx);
        const endOffset = offsetMap.get(endIdx);
        if (startOffset === undefined || endOffset === undefined) {
            throw new Error(`Invalid offsets for: ${JSON.stringify(text)}`);
        }
        result.push({ startOffset, endOffset, count });
    }
    return result;
}
function emitRange(count, len) {
    const rangeStart = `[${count.toString(10)}`;
    const rangeEnd = ")";
    const hyphensLen = len - (rangeStart.length + rangeEnd.length);
    const hyphens = "-".repeat(Math.max(0, hyphensLen));
    return `${rangeStart}${hyphens}${rangeEnd}`;
}
function emitOffsets(colMap) {
    let line = "";
    for (const [event, col] of colMap) {
        if (line.length < col) {
            line += " ".repeat(col - line.length);
        }
        line += event.toString(10);
    }
    return line;
}
function parseOffsets(text) {
    const result = new Map();
    const regex = /\d+/gs;
    while (true) {
        const match = regex.exec(text);
        if (match === null) {
            break;
        }
        result.set(match.index, parseInt(match[0], 10));
    }
    return result;
}
exports.parseOffsets = parseOffsets;

//# sourceMappingURL=data:application/json;charset=utf8;base64,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TUFBTTtTQUNQO1FBQ0QsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztLQUNqRDtJQUNELE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUM7QUFYRCxvQ0FXQyIsImZpbGUiOiJhc2NpaS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbXBhcmVSYW5nZUNvdnMgfSBmcm9tIFwiLi9jb21wYXJlXCI7XG5pbXBvcnQgeyBSYW5nZUNvdiB9IGZyb20gXCIuL3R5cGVzXCI7XG5cbmludGVyZmFjZSBSZWFkb25seVJhbmdlVHJlZSB7XG4gIHJlYWRvbmx5IHN0YXJ0OiBudW1iZXI7XG4gIHJlYWRvbmx5IGVuZDogbnVtYmVyO1xuICByZWFkb25seSBjb3VudDogbnVtYmVyO1xuICByZWFkb25seSBjaGlsZHJlbjogUmVhZG9ubHlSYW5nZVRyZWVbXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVtaXRGb3Jlc3QodHJlZXM6IFJlYWRvbmx5QXJyYXk8UmVhZG9ubHlSYW5nZVRyZWU+KTogc3RyaW5nIHtcbiAgcmV0dXJuIGVtaXRGb3Jlc3RMaW5lcyh0cmVlcykuam9pbihcIlxcblwiKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVtaXRGb3Jlc3RMaW5lcyh0cmVlczogUmVhZG9ubHlBcnJheTxSZWFkb25seVJhbmdlVHJlZT4pOiBzdHJpbmdbXSB7XG4gIGNvbnN0IGNvbE1hcDogTWFwPG51bWJlciwgbnVtYmVyPiA9IGdldENvbE1hcCh0cmVlcyk7XG4gIGNvbnN0IGhlYWRlcjogc3RyaW5nID0gZW1pdE9mZnNldHMoY29sTWFwKTtcbiAgcmV0dXJuIFtoZWFkZXIsIC4uLnRyZWVzLm1hcCh0cmVlID0+IGVtaXRUcmVlKHRyZWUsIGNvbE1hcCkuam9pbihcIlxcblwiKSldO1xufVxuXG5mdW5jdGlvbiBnZXRDb2xNYXAodHJlZXM6IEl0ZXJhYmxlPFJlYWRvbmx5UmFuZ2VUcmVlPik6IE1hcDxudW1iZXIsIG51bWJlcj4ge1xuICBjb25zdCBldmVudFNldDogU2V0PG51bWJlcj4gPSBuZXcgU2V0KCk7XG4gIGZvciAoY29uc3QgdHJlZSBvZiB0cmVlcykge1xuICAgIGNvbnN0IHN0YWNrOiBSZWFkb25seVJhbmdlVHJlZVtdID0gW3RyZWVdO1xuICAgIHdoaWxlIChzdGFjay5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBjdXI6IFJlYWRvbmx5UmFuZ2VUcmVlID0gc3RhY2sucG9wKCkhO1xuICAgICAgZXZlbnRTZXQuYWRkKGN1ci5zdGFydCk7XG4gICAgICBldmVudFNldC5hZGQoY3VyLmVuZCk7XG4gICAgICBmb3IgKGNvbnN0IGNoaWxkIG9mIGN1ci5jaGlsZHJlbikge1xuICAgICAgICBzdGFjay5wdXNoKGNoaWxkKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgY29uc3QgZXZlbnRzOiBudW1iZXJbXSA9IFsuLi5ldmVudFNldF07XG4gIGV2ZW50cy5zb3J0KChhLCBiKSA9PiBhIC0gYik7XG4gIGxldCBtYXhEaWdpdHM6IG51bWJlciA9IDE7XG4gIGZvciAoY29uc3QgZXZlbnQgb2YgZXZlbnRzKSB7XG4gICAgbWF4RGlnaXRzID0gTWF0aC5tYXgobWF4RGlnaXRzLCBldmVudC50b1N0cmluZygxMCkubGVuZ3RoKTtcbiAgfVxuICBjb25zdCBjb2xXaWR0aDogbnVtYmVyID0gbWF4RGlnaXRzICsgMztcbiAgY29uc3QgY29sTWFwOiBNYXA8bnVtYmVyLCBudW1iZXI+ID0gbmV3IE1hcCgpO1xuICBmb3IgKGNvbnN0IFtpLCBldmVudF0gb2YgZXZlbnRzLmVudHJpZXMoKSkge1xuICAgIGNvbE1hcC5zZXQoZXZlbnQsIGkgKiBjb2xXaWR0aCk7XG4gIH1cbiAgcmV0dXJuIGNvbE1hcDtcbn1cblxuZnVuY3Rpb24gZW1pdFRyZWUodHJlZTogUmVhZG9ubHlSYW5nZVRyZWUsIGNvbE1hcDogTWFwPG51bWJlciwgbnVtYmVyPik6IHN0cmluZ1tdIHtcbiAgY29uc3QgbGF5ZXJzOiBSZWFkb25seVJhbmdlVHJlZVtdW10gPSBbXTtcbiAgbGV0IG5leHRMYXllcjogUmVhZG9ubHlSYW5nZVRyZWVbXSA9IFt0cmVlXTtcbiAgd2hpbGUgKG5leHRMYXllci5sZW5ndGggPiAwKSB7XG4gICAgY29uc3QgbGF5ZXI6IFJlYWRvbmx5UmFuZ2VUcmVlW10gPSBuZXh0TGF5ZXI7XG4gICAgbGF5ZXJzLnB1c2gobGF5ZXIpO1xuICAgIG5leHRMYXllciA9IFtdO1xuICAgIGZvciAoY29uc3Qgbm9kZSBvZiBsYXllcikge1xuICAgICAgZm9yIChjb25zdCBjaGlsZCBvZiBub2RlLmNoaWxkcmVuKSB7XG4gICAgICAgIG5leHRMYXllci5wdXNoKGNoaWxkKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGxheWVycy5tYXAobGF5ZXIgPT4gZW1pdFRyZWVMYXllcihsYXllciwgY29sTWFwKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUZ1bmN0aW9uUmFuZ2VzKHRleHQ6IHN0cmluZywgb2Zmc2V0TWFwOiBNYXA8bnVtYmVyLCBudW1iZXI+KTogUmFuZ2VDb3ZbXSB7XG4gIGNvbnN0IHJlc3VsdDogUmFuZ2VDb3ZbXSA9IFtdO1xuICBmb3IgKGNvbnN0IGxpbmUgb2YgdGV4dC5zcGxpdChcIlxcblwiKSkge1xuICAgIGZvciAoY29uc3QgcmFuZ2Ugb2YgcGFyc2VUcmVlTGF5ZXIobGluZSwgb2Zmc2V0TWFwKSkge1xuICAgICAgcmVzdWx0LnB1c2gocmFuZ2UpO1xuICAgIH1cbiAgfVxuICByZXN1bHQuc29ydChjb21wYXJlUmFuZ2VDb3ZzKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKlxuICogQHBhcmFtIGxheWVyIFNvcnRlZCBsaXN0IG9mIGRpc2pvaW50IHRyZWVzLlxuICogQHBhcmFtIGNvbE1hcFxuICovXG5mdW5jdGlvbiBlbWl0VHJlZUxheWVyKGxheWVyOiBSZWFkb25seVJhbmdlVHJlZVtdLCBjb2xNYXA6IE1hcDxudW1iZXIsIG51bWJlcj4pOiBzdHJpbmcge1xuICBjb25zdCBsaW5lOiBzdHJpbmdbXSA9IFtdO1xuICBsZXQgY3VySWR4OiBudW1iZXIgPSAwO1xuICBmb3IgKGNvbnN0IHtzdGFydCwgZW5kLCBjb3VudH0gb2YgbGF5ZXIpIHtcbiAgICBjb25zdCBzdGFydElkeDogbnVtYmVyID0gY29sTWFwLmdldChzdGFydCkhO1xuICAgIGNvbnN0IGVuZElkeDogbnVtYmVyID0gY29sTWFwLmdldChlbmQpITtcbiAgICBpZiAoc3RhcnRJZHggPiBjdXJJZHgpIHtcbiAgICAgIGxpbmUucHVzaChcIiBcIi5yZXBlYXQoc3RhcnRJZHggLSBjdXJJZHgpKTtcbiAgICB9XG4gICAgbGluZS5wdXNoKGVtaXRSYW5nZShjb3VudCwgZW5kSWR4IC0gc3RhcnRJZHgpKTtcbiAgICBjdXJJZHggPSBlbmRJZHg7XG4gIH1cbiAgcmV0dXJuIGxpbmUuam9pbihcIlwiKTtcbn1cblxuZnVuY3Rpb24gcGFyc2VUcmVlTGF5ZXIodGV4dDogc3RyaW5nLCBvZmZzZXRNYXA6IE1hcDxudW1iZXIsIG51bWJlcj4pOiBSYW5nZUNvdltdIHtcbiAgY29uc3QgcmVzdWx0OiBSYW5nZUNvdltdID0gW107XG4gIGNvbnN0IHJlZ2V4OiBSZWdFeHAgPSAvXFxbKFxcZCspLSpcXCkvZ3M7XG4gIHdoaWxlICh0cnVlKSB7XG4gICAgY29uc3QgbWF0Y2g6IFJlZ0V4cE1hdGNoQXJyYXkgfCBudWxsID0gcmVnZXguZXhlYyh0ZXh0KTtcbiAgICBpZiAobWF0Y2ggPT09IG51bGwpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBjb25zdCBzdGFydElkeDogbnVtYmVyID0gbWF0Y2guaW5kZXghO1xuICAgIGNvbnN0IGVuZElkeDogbnVtYmVyID0gc3RhcnRJZHggKyBtYXRjaFswXS5sZW5ndGg7XG4gICAgY29uc3QgY291bnQ6IG51bWJlciA9IHBhcnNlSW50KG1hdGNoWzFdLCAxMCk7XG4gICAgY29uc3Qgc3RhcnRPZmZzZXQ6IG51bWJlciB8IHVuZGVmaW5lZCA9IG9mZnNldE1hcC5nZXQoc3RhcnRJZHgpO1xuICAgIGNvbnN0IGVuZE9mZnNldDogbnVtYmVyIHwgdW5kZWZpbmVkID0gb2Zmc2V0TWFwLmdldChlbmRJZHgpO1xuICAgIGlmIChzdGFydE9mZnNldCA9PT0gdW5kZWZpbmVkIHx8IGVuZE9mZnNldCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgb2Zmc2V0cyBmb3I6ICR7SlNPTi5zdHJpbmdpZnkodGV4dCl9YCk7XG4gICAgfVxuICAgIHJlc3VsdC5wdXNoKHtzdGFydE9mZnNldCwgZW5kT2Zmc2V0LCBjb3VudH0pO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIGVtaXRSYW5nZShjb3VudDogbnVtYmVyLCBsZW46IG51bWJlcik6IHN0cmluZyB7XG4gIGNvbnN0IHJhbmdlU3RhcnQ6IHN0cmluZyA9IGBbJHtjb3VudC50b1N0cmluZygxMCl9YDtcbiAgY29uc3QgcmFuZ2VFbmQ6IHN0cmluZyA9IFwiKVwiO1xuICBjb25zdCBoeXBoZW5zTGVuOiBudW1iZXIgPSBsZW4gLSAocmFuZ2VTdGFydC5sZW5ndGggKyByYW5nZUVuZC5sZW5ndGgpO1xuICBjb25zdCBoeXBoZW5zOiBzdHJpbmcgPSBcIi1cIi5yZXBlYXQoTWF0aC5tYXgoMCwgaHlwaGVuc0xlbikpO1xuICByZXR1cm4gYCR7cmFuZ2VTdGFydH0ke2h5cGhlbnN9JHtyYW5nZUVuZH1gO1xufVxuXG5mdW5jdGlvbiBlbWl0T2Zmc2V0cyhjb2xNYXA6IE1hcDxudW1iZXIsIG51bWJlcj4pOiBzdHJpbmcge1xuICBsZXQgbGluZTogc3RyaW5nID0gXCJcIjtcbiAgZm9yIChjb25zdCBbZXZlbnQsIGNvbF0gb2YgY29sTWFwKSB7XG4gICAgaWYgKGxpbmUubGVuZ3RoIDwgY29sKSB7XG4gICAgICBsaW5lICs9IFwiIFwiLnJlcGVhdChjb2wgLSBsaW5lLmxlbmd0aCk7XG4gICAgfVxuICAgIGxpbmUgKz0gZXZlbnQudG9TdHJpbmcoMTApO1xuICB9XG4gIHJldHVybiBsaW5lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VPZmZzZXRzKHRleHQ6IHN0cmluZyk6IE1hcDxudW1iZXIsIG51bWJlcj4ge1xuICBjb25zdCByZXN1bHQ6IE1hcDxudW1iZXIsIG51bWJlcj4gPSBuZXcgTWFwKCk7XG4gIGNvbnN0IHJlZ2V4OiBSZWdFeHAgPSAvXFxkKy9ncztcbiAgd2hpbGUgKHRydWUpIHtcbiAgICBjb25zdCBtYXRjaDogUmVnRXhwRXhlY0FycmF5IHwgbnVsbCA9IHJlZ2V4LmV4ZWModGV4dCk7XG4gICAgaWYgKG1hdGNoID09PSBudWxsKSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgcmVzdWx0LnNldChtYXRjaC5pbmRleCwgcGFyc2VJbnQobWF0Y2hbMF0sIDEwKSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=

}, function(modId) { var map = {"./compare":1679363156327}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679363156327, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Compares two script coverages.
 *
 * The result corresponds to the comparison of their `url` value (alphabetical sort).
 */
function compareScriptCovs(a, b) {
    if (a.url === b.url) {
        return 0;
    }
    else if (a.url < b.url) {
        return -1;
    }
    else {
        return 1;
    }
}
exports.compareScriptCovs = compareScriptCovs;
/**
 * Compares two function coverages.
 *
 * The result corresponds to the comparison of the root ranges.
 */
function compareFunctionCovs(a, b) {
    return compareRangeCovs(a.ranges[0], b.ranges[0]);
}
exports.compareFunctionCovs = compareFunctionCovs;
/**
 * Compares two range coverages.
 *
 * The ranges are first ordered by ascending `startOffset` and then by
 * descending `endOffset`.
 * This corresponds to a pre-order tree traversal.
 */
function compareRangeCovs(a, b) {
    if (a.startOffset !== b.startOffset) {
        return a.startOffset - b.startOffset;
    }
    else {
        return b.endOffset - a.endOffset;
    }
}
exports.compareRangeCovs = compareRangeCovs;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9zcmMvY29tcGFyZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBOzs7O0dBSUc7QUFDSCxTQUFnQixpQkFBaUIsQ0FBQyxDQUFzQixFQUFFLENBQXNCO0lBQzlFLElBQUksQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsR0FBRyxFQUFFO1FBQ25CLE9BQU8sQ0FBQyxDQUFDO0tBQ1Y7U0FBTSxJQUFJLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRTtRQUN4QixPQUFPLENBQUMsQ0FBQyxDQUFDO0tBQ1g7U0FBTTtRQUNMLE9BQU8sQ0FBQyxDQUFDO0tBQ1Y7QUFDSCxDQUFDO0FBUkQsOENBUUM7QUFFRDs7OztHQUlHO0FBQ0gsU0FBZ0IsbUJBQW1CLENBQUMsQ0FBd0IsRUFBRSxDQUF3QjtJQUNwRixPQUFPLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3BELENBQUM7QUFGRCxrREFFQztBQUVEOzs7Ozs7R0FNRztBQUNILFNBQWdCLGdCQUFnQixDQUFDLENBQXFCLEVBQUUsQ0FBcUI7SUFDM0UsSUFBSSxDQUFDLENBQUMsV0FBVyxLQUFLLENBQUMsQ0FBQyxXQUFXLEVBQUU7UUFDbkMsT0FBTyxDQUFDLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxXQUFXLENBQUM7S0FDdEM7U0FBTTtRQUNMLE9BQU8sQ0FBQyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsU0FBUyxDQUFDO0tBQ2xDO0FBQ0gsQ0FBQztBQU5ELDRDQU1DIiwiZmlsZSI6ImNvbXBhcmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGdW5jdGlvbkNvdiwgUmFuZ2VDb3YsIFNjcmlwdENvdiB9IGZyb20gXCIuL3R5cGVzXCI7XG5cbi8qKlxuICogQ29tcGFyZXMgdHdvIHNjcmlwdCBjb3ZlcmFnZXMuXG4gKlxuICogVGhlIHJlc3VsdCBjb3JyZXNwb25kcyB0byB0aGUgY29tcGFyaXNvbiBvZiB0aGVpciBgdXJsYCB2YWx1ZSAoYWxwaGFiZXRpY2FsIHNvcnQpLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY29tcGFyZVNjcmlwdENvdnMoYTogUmVhZG9ubHk8U2NyaXB0Q292PiwgYjogUmVhZG9ubHk8U2NyaXB0Q292Pik6IG51bWJlciB7XG4gIGlmIChhLnVybCA9PT0gYi51cmwpIHtcbiAgICByZXR1cm4gMDtcbiAgfSBlbHNlIGlmIChhLnVybCA8IGIudXJsKSB7XG4gICAgcmV0dXJuIC0xO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAxO1xuICB9XG59XG5cbi8qKlxuICogQ29tcGFyZXMgdHdvIGZ1bmN0aW9uIGNvdmVyYWdlcy5cbiAqXG4gKiBUaGUgcmVzdWx0IGNvcnJlc3BvbmRzIHRvIHRoZSBjb21wYXJpc29uIG9mIHRoZSByb290IHJhbmdlcy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbXBhcmVGdW5jdGlvbkNvdnMoYTogUmVhZG9ubHk8RnVuY3Rpb25Db3Y+LCBiOiBSZWFkb25seTxGdW5jdGlvbkNvdj4pOiBudW1iZXIge1xuICByZXR1cm4gY29tcGFyZVJhbmdlQ292cyhhLnJhbmdlc1swXSwgYi5yYW5nZXNbMF0pO1xufVxuXG4vKipcbiAqIENvbXBhcmVzIHR3byByYW5nZSBjb3ZlcmFnZXMuXG4gKlxuICogVGhlIHJhbmdlcyBhcmUgZmlyc3Qgb3JkZXJlZCBieSBhc2NlbmRpbmcgYHN0YXJ0T2Zmc2V0YCBhbmQgdGhlbiBieVxuICogZGVzY2VuZGluZyBgZW5kT2Zmc2V0YC5cbiAqIFRoaXMgY29ycmVzcG9uZHMgdG8gYSBwcmUtb3JkZXIgdHJlZSB0cmF2ZXJzYWwuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb21wYXJlUmFuZ2VDb3ZzKGE6IFJlYWRvbmx5PFJhbmdlQ292PiwgYjogUmVhZG9ubHk8UmFuZ2VDb3Y+KTogbnVtYmVyIHtcbiAgaWYgKGEuc3RhcnRPZmZzZXQgIT09IGIuc3RhcnRPZmZzZXQpIHtcbiAgICByZXR1cm4gYS5zdGFydE9mZnNldCAtIGIuc3RhcnRPZmZzZXQ7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGIuZW5kT2Zmc2V0IC0gYS5lbmRPZmZzZXQ7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679363156328, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Creates a deep copy of a process coverage.
 *
 * @param processCov Process coverage to clone.
 * @return Cloned process coverage.
 */
function cloneProcessCov(processCov) {
    const result = [];
    for (const scriptCov of processCov.result) {
        result.push(cloneScriptCov(scriptCov));
    }
    return {
        result,
    };
}
exports.cloneProcessCov = cloneProcessCov;
/**
 * Creates a deep copy of a script coverage.
 *
 * @param scriptCov Script coverage to clone.
 * @return Cloned script coverage.
 */
function cloneScriptCov(scriptCov) {
    const functions = [];
    for (const functionCov of scriptCov.functions) {
        functions.push(cloneFunctionCov(functionCov));
    }
    return {
        scriptId: scriptCov.scriptId,
        url: scriptCov.url,
        functions,
    };
}
exports.cloneScriptCov = cloneScriptCov;
/**
 * Creates a deep copy of a function coverage.
 *
 * @param functionCov Function coverage to clone.
 * @return Cloned function coverage.
 */
function cloneFunctionCov(functionCov) {
    const ranges = [];
    for (const rangeCov of functionCov.ranges) {
        ranges.push(cloneRangeCov(rangeCov));
    }
    return {
        functionName: functionCov.functionName,
        ranges,
        isBlockCoverage: functionCov.isBlockCoverage,
    };
}
exports.cloneFunctionCov = cloneFunctionCov;
/**
 * Creates a deep copy of a function coverage.
 *
 * @param rangeCov Range coverage to clone.
 * @return Cloned range coverage.
 */
function cloneRangeCov(rangeCov) {
    return {
        startOffset: rangeCov.startOffset,
        endOffset: rangeCov.endOffset,
        count: rangeCov.count,
    };
}
exports.cloneRangeCov = cloneRangeCov;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9zcmMvY2xvbmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTs7Ozs7R0FLRztBQUNILFNBQWdCLGVBQWUsQ0FBQyxVQUFnQztJQUM5RCxNQUFNLE1BQU0sR0FBZ0IsRUFBRSxDQUFDO0lBQy9CLEtBQUssTUFBTSxTQUFTLElBQUksVUFBVSxDQUFDLE1BQU0sRUFBRTtRQUN6QyxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0tBQ3hDO0lBRUQsT0FBTztRQUNMLE1BQU07S0FDUCxDQUFDO0FBQ0osQ0FBQztBQVRELDBDQVNDO0FBRUQ7Ozs7O0dBS0c7QUFDSCxTQUFnQixjQUFjLENBQUMsU0FBOEI7SUFDM0QsTUFBTSxTQUFTLEdBQWtCLEVBQUUsQ0FBQztJQUNwQyxLQUFLLE1BQU0sV0FBVyxJQUFJLFNBQVMsQ0FBQyxTQUFTLEVBQUU7UUFDN0MsU0FBUyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0tBQy9DO0lBRUQsT0FBTztRQUNMLFFBQVEsRUFBRSxTQUFTLENBQUMsUUFBUTtRQUM1QixHQUFHLEVBQUUsU0FBUyxDQUFDLEdBQUc7UUFDbEIsU0FBUztLQUNWLENBQUM7QUFDSixDQUFDO0FBWEQsd0NBV0M7QUFFRDs7Ozs7R0FLRztBQUNILFNBQWdCLGdCQUFnQixDQUFDLFdBQWtDO0lBQ2pFLE1BQU0sTUFBTSxHQUFlLEVBQUUsQ0FBQztJQUM5QixLQUFLLE1BQU0sUUFBUSxJQUFJLFdBQVcsQ0FBQyxNQUFNLEVBQUU7UUFDekMsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztLQUN0QztJQUVELE9BQU87UUFDTCxZQUFZLEVBQUUsV0FBVyxDQUFDLFlBQVk7UUFDdEMsTUFBTTtRQUNOLGVBQWUsRUFBRSxXQUFXLENBQUMsZUFBZTtLQUM3QyxDQUFDO0FBQ0osQ0FBQztBQVhELDRDQVdDO0FBRUQ7Ozs7O0dBS0c7QUFDSCxTQUFnQixhQUFhLENBQUMsUUFBNEI7SUFDeEQsT0FBTztRQUNMLFdBQVcsRUFBRSxRQUFRLENBQUMsV0FBVztRQUNqQyxTQUFTLEVBQUUsUUFBUSxDQUFDLFNBQVM7UUFDN0IsS0FBSyxFQUFFLFFBQVEsQ0FBQyxLQUFLO0tBQ3RCLENBQUM7QUFDSixDQUFDO0FBTkQsc0NBTUMiLCJmaWxlIjoiY2xvbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGdW5jdGlvbkNvdiwgUHJvY2Vzc0NvdiwgUmFuZ2VDb3YsIFNjcmlwdENvdiB9IGZyb20gXCIuL3R5cGVzXCI7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGRlZXAgY29weSBvZiBhIHByb2Nlc3MgY292ZXJhZ2UuXG4gKlxuICogQHBhcmFtIHByb2Nlc3NDb3YgUHJvY2VzcyBjb3ZlcmFnZSB0byBjbG9uZS5cbiAqIEByZXR1cm4gQ2xvbmVkIHByb2Nlc3MgY292ZXJhZ2UuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjbG9uZVByb2Nlc3NDb3YocHJvY2Vzc0NvdjogUmVhZG9ubHk8UHJvY2Vzc0Nvdj4pOiBQcm9jZXNzQ292IHtcbiAgY29uc3QgcmVzdWx0OiBTY3JpcHRDb3ZbXSA9IFtdO1xuICBmb3IgKGNvbnN0IHNjcmlwdENvdiBvZiBwcm9jZXNzQ292LnJlc3VsdCkge1xuICAgIHJlc3VsdC5wdXNoKGNsb25lU2NyaXB0Q292KHNjcmlwdENvdikpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICByZXN1bHQsXG4gIH07XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIGRlZXAgY29weSBvZiBhIHNjcmlwdCBjb3ZlcmFnZS5cbiAqXG4gKiBAcGFyYW0gc2NyaXB0Q292IFNjcmlwdCBjb3ZlcmFnZSB0byBjbG9uZS5cbiAqIEByZXR1cm4gQ2xvbmVkIHNjcmlwdCBjb3ZlcmFnZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNsb25lU2NyaXB0Q292KHNjcmlwdENvdjogUmVhZG9ubHk8U2NyaXB0Q292Pik6IFNjcmlwdENvdiB7XG4gIGNvbnN0IGZ1bmN0aW9uczogRnVuY3Rpb25Db3ZbXSA9IFtdO1xuICBmb3IgKGNvbnN0IGZ1bmN0aW9uQ292IG9mIHNjcmlwdENvdi5mdW5jdGlvbnMpIHtcbiAgICBmdW5jdGlvbnMucHVzaChjbG9uZUZ1bmN0aW9uQ292KGZ1bmN0aW9uQ292KSk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHNjcmlwdElkOiBzY3JpcHRDb3Yuc2NyaXB0SWQsXG4gICAgdXJsOiBzY3JpcHRDb3YudXJsLFxuICAgIGZ1bmN0aW9ucyxcbiAgfTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgZGVlcCBjb3B5IG9mIGEgZnVuY3Rpb24gY292ZXJhZ2UuXG4gKlxuICogQHBhcmFtIGZ1bmN0aW9uQ292IEZ1bmN0aW9uIGNvdmVyYWdlIHRvIGNsb25lLlxuICogQHJldHVybiBDbG9uZWQgZnVuY3Rpb24gY292ZXJhZ2UuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjbG9uZUZ1bmN0aW9uQ292KGZ1bmN0aW9uQ292OiBSZWFkb25seTxGdW5jdGlvbkNvdj4pOiBGdW5jdGlvbkNvdiB7XG4gIGNvbnN0IHJhbmdlczogUmFuZ2VDb3ZbXSA9IFtdO1xuICBmb3IgKGNvbnN0IHJhbmdlQ292IG9mIGZ1bmN0aW9uQ292LnJhbmdlcykge1xuICAgIHJhbmdlcy5wdXNoKGNsb25lUmFuZ2VDb3YocmFuZ2VDb3YpKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZnVuY3Rpb25OYW1lOiBmdW5jdGlvbkNvdi5mdW5jdGlvbk5hbWUsXG4gICAgcmFuZ2VzLFxuICAgIGlzQmxvY2tDb3ZlcmFnZTogZnVuY3Rpb25Db3YuaXNCbG9ja0NvdmVyYWdlLFxuICB9O1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBkZWVwIGNvcHkgb2YgYSBmdW5jdGlvbiBjb3ZlcmFnZS5cbiAqXG4gKiBAcGFyYW0gcmFuZ2VDb3YgUmFuZ2UgY292ZXJhZ2UgdG8gY2xvbmUuXG4gKiBAcmV0dXJuIENsb25lZCByYW5nZSBjb3ZlcmFnZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNsb25lUmFuZ2VDb3YocmFuZ2VDb3Y6IFJlYWRvbmx5PFJhbmdlQ292Pik6IFJhbmdlQ292IHtcbiAgcmV0dXJuIHtcbiAgICBzdGFydE9mZnNldDogcmFuZ2VDb3Yuc3RhcnRPZmZzZXQsXG4gICAgZW5kT2Zmc2V0OiByYW5nZUNvdi5lbmRPZmZzZXQsXG4gICAgY291bnQ6IHJhbmdlQ292LmNvdW50LFxuICB9O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679363156329, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
const normalize_1 = require("./normalize");
const range_tree_1 = require("./range-tree");
/**
 * Merges a list of process coverages.
 *
 * The result is normalized.
 * The input values may be mutated, it is not safe to use them after passing
 * them to this function.
 * The computation is synchronous.
 *
 * @param processCovs Process coverages to merge.
 * @return Merged process coverage.
 */
function mergeProcessCovs(processCovs) {
    if (processCovs.length === 0) {
        return { result: [] };
    }
    const urlToScripts = new Map();
    for (const processCov of processCovs) {
        for (const scriptCov of processCov.result) {
            let scriptCovs = urlToScripts.get(scriptCov.url);
            if (scriptCovs === undefined) {
                scriptCovs = [];
                urlToScripts.set(scriptCov.url, scriptCovs);
            }
            scriptCovs.push(scriptCov);
        }
    }
    const result = [];
    for (const scripts of urlToScripts.values()) {
        // assert: `scripts.length > 0`
        result.push(mergeScriptCovs(scripts));
    }
    const merged = { result };
    normalize_1.normalizeProcessCov(merged);
    return merged;
}
exports.mergeProcessCovs = mergeProcessCovs;
/**
 * Merges a list of matching script coverages.
 *
 * Scripts are matching if they have the same `url`.
 * The result is normalized.
 * The input values may be mutated, it is not safe to use them after passing
 * them to this function.
 * The computation is synchronous.
 *
 * @param scriptCovs Process coverages to merge.
 * @return Merged script coverage, or `undefined` if the input list was empty.
 */
function mergeScriptCovs(scriptCovs) {
    if (scriptCovs.length === 0) {
        return undefined;
    }
    else if (scriptCovs.length === 1) {
        const merged = scriptCovs[0];
        normalize_1.deepNormalizeScriptCov(merged);
        return merged;
    }
    const first = scriptCovs[0];
    const scriptId = first.scriptId;
    const url = first.url;
    const rangeToFuncs = new Map();
    for (const scriptCov of scriptCovs) {
        for (const funcCov of scriptCov.functions) {
            const rootRange = stringifyFunctionRootRange(funcCov);
            let funcCovs = rangeToFuncs.get(rootRange);
            if (funcCovs === undefined ||
                // if the entry in rangeToFuncs is function-level granularity and
                // the new coverage is block-level, prefer block-level.
                (!funcCovs[0].isBlockCoverage && funcCov.isBlockCoverage)) {
                funcCovs = [];
                rangeToFuncs.set(rootRange, funcCovs);
            }
            else if (funcCovs[0].isBlockCoverage && !funcCov.isBlockCoverage) {
                // if the entry in rangeToFuncs is block-level granularity, we should
                // not append function level granularity.
                continue;
            }
            funcCovs.push(funcCov);
        }
    }
    const functions = [];
    for (const funcCovs of rangeToFuncs.values()) {
        // assert: `funcCovs.length > 0`
        functions.push(mergeFunctionCovs(funcCovs));
    }
    const merged = { scriptId, url, functions };
    normalize_1.normalizeScriptCov(merged);
    return merged;
}
exports.mergeScriptCovs = mergeScriptCovs;
/**
 * Returns a string representation of the root range of the function.
 *
 * This string can be used to match function with same root range.
 * The string is derived from the start and end offsets of the root range of
 * the function.
 * This assumes that `ranges` is non-empty (true for valid function coverages).
 *
 * @param funcCov Function coverage with the range to stringify
 * @internal
 */
function stringifyFunctionRootRange(funcCov) {
    const rootRange = funcCov.ranges[0];
    return `${rootRange.startOffset.toString(10)};${rootRange.endOffset.toString(10)}`;
}
/**
 * Merges a list of matching function coverages.
 *
 * Functions are matching if their root ranges have the same span.
 * The result is normalized.
 * The input values may be mutated, it is not safe to use them after passing
 * them to this function.
 * The computation is synchronous.
 *
 * @param funcCovs Function coverages to merge.
 * @return Merged function coverage, or `undefined` if the input list was empty.
 */
function mergeFunctionCovs(funcCovs) {
    if (funcCovs.length === 0) {
        return undefined;
    }
    else if (funcCovs.length === 1) {
        const merged = funcCovs[0];
        normalize_1.normalizeFunctionCov(merged);
        return merged;
    }
    const functionName = funcCovs[0].functionName;
    const trees = [];
    for (const funcCov of funcCovs) {
        // assert: `fn.ranges.length > 0`
        // assert: `fn.ranges` is sorted
        trees.push(range_tree_1.RangeTree.fromSortedRanges(funcCov.ranges));
    }
    // assert: `trees.length > 0`
    const mergedTree = mergeRangeTrees(trees);
    normalize_1.normalizeRangeTree(mergedTree);
    const ranges = mergedTree.toRanges();
    const isBlockCoverage = !(ranges.length === 1 && ranges[0].count === 0);
    const merged = { functionName, ranges, isBlockCoverage };
    // assert: `merged` is normalized
    return merged;
}
exports.mergeFunctionCovs = mergeFunctionCovs;
/**
 * @precondition Same `start` and `end` for all the trees
 */
function mergeRangeTrees(trees) {
    if (trees.length <= 1) {
        return trees[0];
    }
    const first = trees[0];
    let delta = 0;
    for (const tree of trees) {
        delta += tree.delta;
    }
    const children = mergeRangeTreeChildren(trees);
    return new range_tree_1.RangeTree(first.start, first.end, delta, children);
}
class RangeTreeWithParent {
    constructor(parentIndex, tree) {
        this.parentIndex = parentIndex;
        this.tree = tree;
    }
}
class StartEvent {
    constructor(offset, trees) {
        this.offset = offset;
        this.trees = trees;
    }
    static compare(a, b) {
        return a.offset - b.offset;
    }
}
class StartEventQueue {
    constructor(queue) {
        this.queue = queue;
        this.nextIndex = 0;
        this.pendingOffset = 0;
        this.pendingTrees = undefined;
    }
    static fromParentTrees(parentTrees) {
        const startToTrees = new Map();
        for (const [parentIndex, parentTree] of parentTrees.entries()) {
            for (const child of parentTree.children) {
                let trees = startToTrees.get(child.start);
                if (trees === undefined) {
                    trees = [];
                    startToTrees.set(child.start, trees);
                }
                trees.push(new RangeTreeWithParent(parentIndex, child));
            }
        }
        const queue = [];
        for (const [startOffset, trees] of startToTrees) {
            queue.push(new StartEvent(startOffset, trees));
        }
        queue.sort(StartEvent.compare);
        return new StartEventQueue(queue);
    }
    setPendingOffset(offset) {
        this.pendingOffset = offset;
    }
    pushPendingTree(tree) {
        if (this.pendingTrees === undefined) {
            this.pendingTrees = [];
        }
        this.pendingTrees.push(tree);
    }
    next() {
        const pendingTrees = this.pendingTrees;
        const nextEvent = this.queue[this.nextIndex];
        if (pendingTrees === undefined) {
            this.nextIndex++;
            return nextEvent;
        }
        else if (nextEvent === undefined) {
            this.pendingTrees = undefined;
            return new StartEvent(this.pendingOffset, pendingTrees);
        }
        else {
            if (this.pendingOffset < nextEvent.offset) {
                this.pendingTrees = undefined;
                return new StartEvent(this.pendingOffset, pendingTrees);
            }
            else {
                if (this.pendingOffset === nextEvent.offset) {
                    this.pendingTrees = undefined;
                    for (const tree of pendingTrees) {
                        nextEvent.trees.push(tree);
                    }
                }
                this.nextIndex++;
                return nextEvent;
            }
        }
    }
}
function mergeRangeTreeChildren(parentTrees) {
    const result = [];
    const startEventQueue = StartEventQueue.fromParentTrees(parentTrees);
    const parentToNested = new Map();
    let openRange;
    while (true) {
        const event = startEventQueue.next();
        if (event === undefined) {
            break;
        }
        if (openRange !== undefined && openRange.end <= event.offset) {
            result.push(nextChild(openRange, parentToNested));
            openRange = undefined;
        }
        if (openRange === undefined) {
            let openRangeEnd = event.offset + 1;
            for (const { parentIndex, tree } of event.trees) {
                openRangeEnd = Math.max(openRangeEnd, tree.end);
                insertChild(parentToNested, parentIndex, tree);
            }
            startEventQueue.setPendingOffset(openRangeEnd);
            openRange = { start: event.offset, end: openRangeEnd };
        }
        else {
            for (const { parentIndex, tree } of event.trees) {
                if (tree.end > openRange.end) {
                    const right = tree.split(openRange.end);
                    startEventQueue.pushPendingTree(new RangeTreeWithParent(parentIndex, right));
                }
                insertChild(parentToNested, parentIndex, tree);
            }
        }
    }
    if (openRange !== undefined) {
        result.push(nextChild(openRange, parentToNested));
    }
    return result;
}
function insertChild(parentToNested, parentIndex, tree) {
    let nested = parentToNested.get(parentIndex);
    if (nested === undefined) {
        nested = [];
        parentToNested.set(parentIndex, nested);
    }
    nested.push(tree);
}
function nextChild(openRange, parentToNested) {
    const matchingTrees = [];
    for (const nested of parentToNested.values()) {
        if (nested.length === 1 && nested[0].start === openRange.start && nested[0].end === openRange.end) {
            matchingTrees.push(nested[0]);
        }
        else {
            matchingTrees.push(new range_tree_1.RangeTree(openRange.start, openRange.end, 0, nested));
        }
    }
    parentToNested.clear();
    return mergeRangeTrees(matchingTrees);
}

//# sourceMappingURL=data:application/json;charset=utf8;base64,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QUM7QUFDekMsQ0FBQyIsImZpbGUiOiJtZXJnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIGRlZXBOb3JtYWxpemVTY3JpcHRDb3YsXG4gIG5vcm1hbGl6ZUZ1bmN0aW9uQ292LFxuICBub3JtYWxpemVQcm9jZXNzQ292LFxuICBub3JtYWxpemVSYW5nZVRyZWUsXG4gIG5vcm1hbGl6ZVNjcmlwdENvdixcbn0gZnJvbSBcIi4vbm9ybWFsaXplXCI7XG5pbXBvcnQgeyBSYW5nZVRyZWUgfSBmcm9tIFwiLi9yYW5nZS10cmVlXCI7XG5pbXBvcnQgeyBGdW5jdGlvbkNvdiwgUHJvY2Vzc0NvdiwgUmFuZ2UsIFJhbmdlQ292LCBTY3JpcHRDb3YgfSBmcm9tIFwiLi90eXBlc1wiO1xuXG4vKipcbiAqIE1lcmdlcyBhIGxpc3Qgb2YgcHJvY2VzcyBjb3ZlcmFnZXMuXG4gKlxuICogVGhlIHJlc3VsdCBpcyBub3JtYWxpemVkLlxuICogVGhlIGlucHV0IHZhbHVlcyBtYXkgYmUgbXV0YXRlZCwgaXQgaXMgbm90IHNhZmUgdG8gdXNlIHRoZW0gYWZ0ZXIgcGFzc2luZ1xuICogdGhlbSB0byB0aGlzIGZ1bmN0aW9uLlxuICogVGhlIGNvbXB1dGF0aW9uIGlzIHN5bmNocm9ub3VzLlxuICpcbiAqIEBwYXJhbSBwcm9jZXNzQ292cyBQcm9jZXNzIGNvdmVyYWdlcyB0byBtZXJnZS5cbiAqIEByZXR1cm4gTWVyZ2VkIHByb2Nlc3MgY292ZXJhZ2UuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtZXJnZVByb2Nlc3NDb3ZzKHByb2Nlc3NDb3ZzOiBSZWFkb25seUFycmF5PFByb2Nlc3NDb3Y+KTogUHJvY2Vzc0NvdiB7XG4gIGlmIChwcm9jZXNzQ292cy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4ge3Jlc3VsdDogW119O1xuICB9XG5cbiAgY29uc3QgdXJsVG9TY3JpcHRzOiBNYXA8c3RyaW5nLCBTY3JpcHRDb3ZbXT4gPSBuZXcgTWFwKCk7XG4gIGZvciAoY29uc3QgcHJvY2Vzc0NvdiBvZiBwcm9jZXNzQ292cykge1xuICAgIGZvciAoY29uc3Qgc2NyaXB0Q292IG9mIHByb2Nlc3NDb3YucmVzdWx0KSB7XG4gICAgICBsZXQgc2NyaXB0Q292czogU2NyaXB0Q292W10gfCB1bmRlZmluZWQgPSB1cmxUb1NjcmlwdHMuZ2V0KHNjcmlwdENvdi51cmwpO1xuICAgICAgaWYgKHNjcmlwdENvdnMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBzY3JpcHRDb3ZzID0gW107XG4gICAgICAgIHVybFRvU2NyaXB0cy5zZXQoc2NyaXB0Q292LnVybCwgc2NyaXB0Q292cyk7XG4gICAgICB9XG4gICAgICBzY3JpcHRDb3ZzLnB1c2goc2NyaXB0Q292KTtcbiAgICB9XG4gIH1cblxuICBjb25zdCByZXN1bHQ6IFNjcmlwdENvdltdID0gW107XG4gIGZvciAoY29uc3Qgc2NyaXB0cyBvZiB1cmxUb1NjcmlwdHMudmFsdWVzKCkpIHtcbiAgICAvLyBhc3NlcnQ6IGBzY3JpcHRzLmxlbmd0aCA+IDBgXG4gICAgcmVzdWx0LnB1c2gobWVyZ2VTY3JpcHRDb3ZzKHNjcmlwdHMpISk7XG4gIH1cbiAgY29uc3QgbWVyZ2VkOiBQcm9jZXNzQ292ID0ge3Jlc3VsdH07XG5cbiAgbm9ybWFsaXplUHJvY2Vzc0NvdihtZXJnZWQpO1xuICByZXR1cm4gbWVyZ2VkO1xufVxuXG4vKipcbiAqIE1lcmdlcyBhIGxpc3Qgb2YgbWF0Y2hpbmcgc2NyaXB0IGNvdmVyYWdlcy5cbiAqXG4gKiBTY3JpcHRzIGFyZSBtYXRjaGluZyBpZiB0aGV5IGhhdmUgdGhlIHNhbWUgYHVybGAuXG4gKiBUaGUgcmVzdWx0IGlzIG5vcm1hbGl6ZWQuXG4gKiBUaGUgaW5wdXQgdmFsdWVzIG1heSBiZSBtdXRhdGVkLCBpdCBpcyBub3Qgc2FmZSB0byB1c2UgdGhlbSBhZnRlciBwYXNzaW5nXG4gKiB0aGVtIHRvIHRoaXMgZnVuY3Rpb24uXG4gKiBUaGUgY29tcHV0YXRpb24gaXMgc3luY2hyb25vdXMuXG4gKlxuICogQHBhcmFtIHNjcmlwdENvdnMgUHJvY2VzcyBjb3ZlcmFnZXMgdG8gbWVyZ2UuXG4gKiBAcmV0dXJuIE1lcmdlZCBzY3JpcHQgY292ZXJhZ2UsIG9yIGB1bmRlZmluZWRgIGlmIHRoZSBpbnB1dCBsaXN0IHdhcyBlbXB0eS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlU2NyaXB0Q292cyhzY3JpcHRDb3ZzOiBSZWFkb25seUFycmF5PFNjcmlwdENvdj4pOiBTY3JpcHRDb3YgfCB1bmRlZmluZWQge1xuICBpZiAoc2NyaXB0Q292cy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9IGVsc2UgaWYgKHNjcmlwdENvdnMubGVuZ3RoID09PSAxKSB7XG4gICAgY29uc3QgbWVyZ2VkOiBTY3JpcHRDb3YgPSBzY3JpcHRDb3ZzWzBdO1xuICAgIGRlZXBOb3JtYWxpemVTY3JpcHRDb3YobWVyZ2VkKTtcbiAgICByZXR1cm4gbWVyZ2VkO1xuICB9XG5cbiAgY29uc3QgZmlyc3Q6IFNjcmlwdENvdiA9IHNjcmlwdENvdnNbMF07XG4gIGNvbnN0IHNjcmlwdElkOiBzdHJpbmcgPSBmaXJzdC5zY3JpcHRJZDtcbiAgY29uc3QgdXJsOiBzdHJpbmcgPSBmaXJzdC51cmw7XG5cbiAgY29uc3QgcmFuZ2VUb0Z1bmNzOiBNYXA8c3RyaW5nLCBGdW5jdGlvbkNvdltdPiA9IG5ldyBNYXAoKTtcbiAgZm9yIChjb25zdCBzY3JpcHRDb3Ygb2Ygc2NyaXB0Q292cykge1xuICAgIGZvciAoY29uc3QgZnVuY0NvdiBvZiBzY3JpcHRDb3YuZnVuY3Rpb25zKSB7XG4gICAgICBjb25zdCByb290UmFuZ2U6IHN0cmluZyA9IHN0cmluZ2lmeUZ1bmN0aW9uUm9vdFJhbmdlKGZ1bmNDb3YpO1xuICAgICAgbGV0IGZ1bmNDb3ZzOiBGdW5jdGlvbkNvdltdIHwgdW5kZWZpbmVkID0gcmFuZ2VUb0Z1bmNzLmdldChyb290UmFuZ2UpO1xuXG4gICAgICBpZiAoZnVuY0NvdnMgPT09IHVuZGVmaW5lZCB8fFxuICAgICAgICAvLyBpZiB0aGUgZW50cnkgaW4gcmFuZ2VUb0Z1bmNzIGlzIGZ1bmN0aW9uLWxldmVsIGdyYW51bGFyaXR5IGFuZFxuICAgICAgICAvLyB0aGUgbmV3IGNvdmVyYWdlIGlzIGJsb2NrLWxldmVsLCBwcmVmZXIgYmxvY2stbGV2ZWwuXG4gICAgICAgICghZnVuY0NvdnNbMF0uaXNCbG9ja0NvdmVyYWdlICYmIGZ1bmNDb3YuaXNCbG9ja0NvdmVyYWdlKSkge1xuICAgICAgICBmdW5jQ292cyA9IFtdO1xuICAgICAgICByYW5nZVRvRnVuY3Muc2V0KHJvb3RSYW5nZSwgZnVuY0NvdnMpO1xuICAgICAgfSBlbHNlIGlmIChmdW5jQ292c1swXS5pc0Jsb2NrQ292ZXJhZ2UgJiYgIWZ1bmNDb3YuaXNCbG9ja0NvdmVyYWdlKSB7XG4gICAgICAgIC8vIGlmIHRoZSBlbnRyeSBpbiByYW5nZVRvRnVuY3MgaXMgYmxvY2stbGV2ZWwgZ3JhbnVsYXJpdHksIHdlIHNob3VsZFxuICAgICAgICAvLyBub3QgYXBwZW5kIGZ1bmN0aW9uIGxldmVsIGdyYW51bGFyaXR5LlxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGZ1bmNDb3ZzLnB1c2goZnVuY0Nvdik7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgZnVuY3Rpb25zOiBGdW5jdGlvbkNvdltdID0gW107XG4gIGZvciAoY29uc3QgZnVuY0NvdnMgb2YgcmFuZ2VUb0Z1bmNzLnZhbHVlcygpKSB7XG4gICAgLy8gYXNzZXJ0OiBgZnVuY0NvdnMubGVuZ3RoID4gMGBcbiAgICBmdW5jdGlvbnMucHVzaChtZXJnZUZ1bmN0aW9uQ292cyhmdW5jQ292cykhKTtcbiAgfVxuXG4gIGNvbnN0IG1lcmdlZDogU2NyaXB0Q292ID0ge3NjcmlwdElkLCB1cmwsIGZ1bmN0aW9uc307XG4gIG5vcm1hbGl6ZVNjcmlwdENvdihtZXJnZWQpO1xuICByZXR1cm4gbWVyZ2VkO1xufVxuXG4vKipcbiAqIFJldHVybnMgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIHJvb3QgcmFuZ2Ugb2YgdGhlIGZ1bmN0aW9uLlxuICpcbiAqIFRoaXMgc3RyaW5nIGNhbiBiZSB1c2VkIHRvIG1hdGNoIGZ1bmN0aW9uIHdpdGggc2FtZSByb290IHJhbmdlLlxuICogVGhlIHN0cmluZyBpcyBkZXJpdmVkIGZyb20gdGhlIHN0YXJ0IGFuZCBlbmQgb2Zmc2V0cyBvZiB0aGUgcm9vdCByYW5nZSBvZlxuICogdGhlIGZ1bmN0aW9uLlxuICogVGhpcyBhc3N1bWVzIHRoYXQgYHJhbmdlc2AgaXMgbm9uLWVtcHR5ICh0cnVlIGZvciB2YWxpZCBmdW5jdGlvbiBjb3ZlcmFnZXMpLlxuICpcbiAqIEBwYXJhbSBmdW5jQ292IEZ1bmN0aW9uIGNvdmVyYWdlIHdpdGggdGhlIHJhbmdlIHRvIHN0cmluZ2lmeVxuICogQGludGVybmFsXG4gKi9cbmZ1bmN0aW9uIHN0cmluZ2lmeUZ1bmN0aW9uUm9vdFJhbmdlKGZ1bmNDb3Y6IFJlYWRvbmx5PEZ1bmN0aW9uQ292Pik6IHN0cmluZyB7XG4gIGNvbnN0IHJvb3RSYW5nZTogUmFuZ2VDb3YgPSBmdW5jQ292LnJhbmdlc1swXTtcbiAgcmV0dXJuIGAke3Jvb3RSYW5nZS5zdGFydE9mZnNldC50b1N0cmluZygxMCl9OyR7cm9vdFJhbmdlLmVuZE9mZnNldC50b1N0cmluZygxMCl9YDtcbn1cblxuLyoqXG4gKiBNZXJnZXMgYSBsaXN0IG9mIG1hdGNoaW5nIGZ1bmN0aW9uIGNvdmVyYWdlcy5cbiAqXG4gKiBGdW5jdGlvbnMgYXJlIG1hdGNoaW5nIGlmIHRoZWlyIHJvb3QgcmFuZ2VzIGhhdmUgdGhlIHNhbWUgc3Bhbi5cbiAqIFRoZSByZXN1bHQgaXMgbm9ybWFsaXplZC5cbiAqIFRoZSBpbnB1dCB2YWx1ZXMgbWF5IGJlIG11dGF0ZWQsIGl0IGlzIG5vdCBzYWZlIHRvIHVzZSB0aGVtIGFmdGVyIHBhc3NpbmdcbiAqIHRoZW0gdG8gdGhpcyBmdW5jdGlvbi5cbiAqIFRoZSBjb21wdXRhdGlvbiBpcyBzeW5jaHJvbm91cy5cbiAqXG4gKiBAcGFyYW0gZnVuY0NvdnMgRnVuY3Rpb24gY292ZXJhZ2VzIHRvIG1lcmdlLlxuICogQHJldHVybiBNZXJnZWQgZnVuY3Rpb24gY292ZXJhZ2UsIG9yIGB1bmRlZmluZWRgIGlmIHRoZSBpbnB1dCBsaXN0IHdhcyBlbXB0eS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlRnVuY3Rpb25Db3ZzKGZ1bmNDb3ZzOiBSZWFkb25seUFycmF5PEZ1bmN0aW9uQ292Pik6IEZ1bmN0aW9uQ292IHwgdW5kZWZpbmVkIHtcbiAgaWYgKGZ1bmNDb3ZzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH0gZWxzZSBpZiAoZnVuY0NvdnMubGVuZ3RoID09PSAxKSB7XG4gICAgY29uc3QgbWVyZ2VkOiBGdW5jdGlvbkNvdiA9IGZ1bmNDb3ZzWzBdO1xuICAgIG5vcm1hbGl6ZUZ1bmN0aW9uQ292KG1lcmdlZCk7XG4gICAgcmV0dXJuIG1lcmdlZDtcbiAgfVxuXG4gIGNvbnN0IGZ1bmN0aW9uTmFtZTogc3RyaW5nID0gZnVuY0NvdnNbMF0uZnVuY3Rpb25OYW1lO1xuXG4gIGNvbnN0IHRyZWVzOiBSYW5nZVRyZWVbXSA9IFtdO1xuICBmb3IgKGNvbnN0IGZ1bmNDb3Ygb2YgZnVuY0NvdnMpIHtcbiAgICAvLyBhc3NlcnQ6IGBmbi5yYW5nZXMubGVuZ3RoID4gMGBcbiAgICAvLyBhc3NlcnQ6IGBmbi5yYW5nZXNgIGlzIHNvcnRlZFxuICAgIHRyZWVzLnB1c2goUmFuZ2VUcmVlLmZyb21Tb3J0ZWRSYW5nZXMoZnVuY0Nvdi5yYW5nZXMpISk7XG4gIH1cblxuICAvLyBhc3NlcnQ6IGB0cmVlcy5sZW5ndGggPiAwYFxuICBjb25zdCBtZXJnZWRUcmVlOiBSYW5nZVRyZWUgPSBtZXJnZVJhbmdlVHJlZXModHJlZXMpITtcbiAgbm9ybWFsaXplUmFuZ2VUcmVlKG1lcmdlZFRyZWUpO1xuICBjb25zdCByYW5nZXM6IFJhbmdlQ292W10gPSBtZXJnZWRUcmVlLnRvUmFuZ2VzKCk7XG4gIGNvbnN0IGlzQmxvY2tDb3ZlcmFnZTogYm9vbGVhbiA9ICEocmFuZ2VzLmxlbmd0aCA9PT0gMSAmJiByYW5nZXNbMF0uY291bnQgPT09IDApO1xuXG4gIGNvbnN0IG1lcmdlZDogRnVuY3Rpb25Db3YgPSB7ZnVuY3Rpb25OYW1lLCByYW5nZXMsIGlzQmxvY2tDb3ZlcmFnZX07XG4gIC8vIGFzc2VydDogYG1lcmdlZGAgaXMgbm9ybWFsaXplZFxuICByZXR1cm4gbWVyZ2VkO1xufVxuXG4vKipcbiAqIEBwcmVjb25kaXRpb24gU2FtZSBgc3RhcnRgIGFuZCBgZW5kYCBmb3IgYWxsIHRoZSB0cmVlc1xuICovXG5mdW5jdGlvbiBtZXJnZVJhbmdlVHJlZXModHJlZXM6IFJlYWRvbmx5QXJyYXk8UmFuZ2VUcmVlPik6IFJhbmdlVHJlZSB8IHVuZGVmaW5lZCB7XG4gIGlmICh0cmVlcy5sZW5ndGggPD0gMSkge1xuICAgIHJldHVybiB0cmVlc1swXTtcbiAgfVxuICBjb25zdCBmaXJzdDogUmFuZ2VUcmVlID0gdHJlZXNbMF07XG4gIGxldCBkZWx0YTogbnVtYmVyID0gMDtcbiAgZm9yIChjb25zdCB0cmVlIG9mIHRyZWVzKSB7XG4gICAgZGVsdGEgKz0gdHJlZS5kZWx0YTtcbiAgfVxuICBjb25zdCBjaGlsZHJlbjogUmFuZ2VUcmVlW10gPSBtZXJnZVJhbmdlVHJlZUNoaWxkcmVuKHRyZWVzKTtcbiAgcmV0dXJuIG5ldyBSYW5nZVRyZWUoZmlyc3Quc3RhcnQsIGZpcnN0LmVuZCwgZGVsdGEsIGNoaWxkcmVuKTtcbn1cblxuY2xhc3MgUmFuZ2VUcmVlV2l0aFBhcmVudCB7XG4gIHJlYWRvbmx5IHBhcmVudEluZGV4OiBudW1iZXI7XG4gIHJlYWRvbmx5IHRyZWU6IFJhbmdlVHJlZTtcblxuICBjb25zdHJ1Y3RvcihwYXJlbnRJbmRleDogbnVtYmVyLCB0cmVlOiBSYW5nZVRyZWUpIHtcbiAgICB0aGlzLnBhcmVudEluZGV4ID0gcGFyZW50SW5kZXg7XG4gICAgdGhpcy50cmVlID0gdHJlZTtcbiAgfVxufVxuXG5jbGFzcyBTdGFydEV2ZW50IHtcbiAgcmVhZG9ubHkgb2Zmc2V0OiBudW1iZXI7XG4gIHJlYWRvbmx5IHRyZWVzOiBSYW5nZVRyZWVXaXRoUGFyZW50W107XG5cbiAgY29uc3RydWN0b3Iob2Zmc2V0OiBudW1iZXIsIHRyZWVzOiBSYW5nZVRyZWVXaXRoUGFyZW50W10pIHtcbiAgICB0aGlzLm9mZnNldCA9IG9mZnNldDtcbiAgICB0aGlzLnRyZWVzID0gdHJlZXM7XG4gIH1cblxuICBzdGF0aWMgY29tcGFyZShhOiBTdGFydEV2ZW50LCBiOiBTdGFydEV2ZW50KTogbnVtYmVyIHtcbiAgICByZXR1cm4gYS5vZmZzZXQgLSBiLm9mZnNldDtcbiAgfVxufVxuXG5jbGFzcyBTdGFydEV2ZW50UXVldWUge1xuICBwcml2YXRlIHJlYWRvbmx5IHF1ZXVlOiBTdGFydEV2ZW50W107XG4gIHByaXZhdGUgbmV4dEluZGV4OiBudW1iZXI7XG4gIHByaXZhdGUgcGVuZGluZ09mZnNldDogbnVtYmVyO1xuICBwcml2YXRlIHBlbmRpbmdUcmVlczogUmFuZ2VUcmVlV2l0aFBhcmVudFtdIHwgdW5kZWZpbmVkO1xuXG4gIHByaXZhdGUgY29uc3RydWN0b3IocXVldWU6IFN0YXJ0RXZlbnRbXSkge1xuICAgIHRoaXMucXVldWUgPSBxdWV1ZTtcbiAgICB0aGlzLm5leHRJbmRleCA9IDA7XG4gICAgdGhpcy5wZW5kaW5nT2Zmc2V0ID0gMDtcbiAgICB0aGlzLnBlbmRpbmdUcmVlcyA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUGFyZW50VHJlZXMocGFyZW50VHJlZXM6IFJlYWRvbmx5QXJyYXk8UmFuZ2VUcmVlPik6IFN0YXJ0RXZlbnRRdWV1ZSB7XG4gICAgY29uc3Qgc3RhcnRUb1RyZWVzOiBNYXA8bnVtYmVyLCBSYW5nZVRyZWVXaXRoUGFyZW50W10+ID0gbmV3IE1hcCgpO1xuICAgIGZvciAoY29uc3QgW3BhcmVudEluZGV4LCBwYXJlbnRUcmVlXSBvZiBwYXJlbnRUcmVlcy5lbnRyaWVzKCkpIHtcbiAgICAgIGZvciAoY29uc3QgY2hpbGQgb2YgcGFyZW50VHJlZS5jaGlsZHJlbikge1xuICAgICAgICBsZXQgdHJlZXM6IFJhbmdlVHJlZVdpdGhQYXJlbnRbXSB8IHVuZGVmaW5lZCA9IHN0YXJ0VG9UcmVlcy5nZXQoY2hpbGQuc3RhcnQpO1xuICAgICAgICBpZiAodHJlZXMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRyZWVzID0gW107XG4gICAgICAgICAgc3RhcnRUb1RyZWVzLnNldChjaGlsZC5zdGFydCwgdHJlZXMpO1xuICAgICAgICB9XG4gICAgICAgIHRyZWVzLnB1c2gobmV3IFJhbmdlVHJlZVdpdGhQYXJlbnQocGFyZW50SW5kZXgsIGNoaWxkKSk7XG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHF1ZXVlOiBTdGFydEV2ZW50W10gPSBbXTtcbiAgICBmb3IgKGNvbnN0IFtzdGFydE9mZnNldCwgdHJlZXNdIG9mIHN0YXJ0VG9UcmVlcykge1xuICAgICAgcXVldWUucHVzaChuZXcgU3RhcnRFdmVudChzdGFydE9mZnNldCwgdHJlZXMpKTtcbiAgICB9XG4gICAgcXVldWUuc29ydChTdGFydEV2ZW50LmNvbXBhcmUpO1xuICAgIHJldHVybiBuZXcgU3RhcnRFdmVudFF1ZXVlKHF1ZXVlKTtcbiAgfVxuXG4gIHNldFBlbmRpbmdPZmZzZXQob2Zmc2V0OiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLnBlbmRpbmdPZmZzZXQgPSBvZmZzZXQ7XG4gIH1cblxuICBwdXNoUGVuZGluZ1RyZWUodHJlZTogUmFuZ2VUcmVlV2l0aFBhcmVudCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnBlbmRpbmdUcmVlcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLnBlbmRpbmdUcmVlcyA9IFtdO1xuICAgIH1cbiAgICB0aGlzLnBlbmRpbmdUcmVlcy5wdXNoKHRyZWUpO1xuICB9XG5cbiAgbmV4dCgpOiBTdGFydEV2ZW50IHwgdW5kZWZpbmVkIHtcbiAgICBjb25zdCBwZW5kaW5nVHJlZXM6IFJhbmdlVHJlZVdpdGhQYXJlbnRbXSB8IHVuZGVmaW5lZCA9IHRoaXMucGVuZGluZ1RyZWVzO1xuICAgIGNvbnN0IG5leHRFdmVudDogU3RhcnRFdmVudCB8IHVuZGVmaW5lZCA9IHRoaXMucXVldWVbdGhpcy5uZXh0SW5kZXhdO1xuICAgIGlmIChwZW5kaW5nVHJlZXMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5uZXh0SW5kZXgrKztcbiAgICAgIHJldHVybiBuZXh0RXZlbnQ7XG4gICAgfSBlbHNlIGlmIChuZXh0RXZlbnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5wZW5kaW5nVHJlZXMgPSB1bmRlZmluZWQ7XG4gICAgICByZXR1cm4gbmV3IFN0YXJ0RXZlbnQodGhpcy5wZW5kaW5nT2Zmc2V0LCBwZW5kaW5nVHJlZXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5wZW5kaW5nT2Zmc2V0IDwgbmV4dEV2ZW50Lm9mZnNldCkge1xuICAgICAgICB0aGlzLnBlbmRpbmdUcmVlcyA9IHVuZGVmaW5lZDtcbiAgICAgICAgcmV0dXJuIG5ldyBTdGFydEV2ZW50KHRoaXMucGVuZGluZ09mZnNldCwgcGVuZGluZ1RyZWVzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICh0aGlzLnBlbmRpbmdPZmZzZXQgPT09IG5leHRFdmVudC5vZmZzZXQpIHtcbiAgICAgICAgICB0aGlzLnBlbmRpbmdUcmVlcyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBmb3IgKGNvbnN0IHRyZWUgb2YgcGVuZGluZ1RyZWVzKSB7XG4gICAgICAgICAgICBuZXh0RXZlbnQudHJlZXMucHVzaCh0cmVlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5uZXh0SW5kZXgrKztcbiAgICAgICAgcmV0dXJuIG5leHRFdmVudDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gbWVyZ2VSYW5nZVRyZWVDaGlsZHJlbihwYXJlbnRUcmVlczogUmVhZG9ubHlBcnJheTxSYW5nZVRyZWU+KTogUmFuZ2VUcmVlW10ge1xuICBjb25zdCByZXN1bHQ6IFJhbmdlVHJlZVtdID0gW107XG4gIGNvbnN0IHN0YXJ0RXZlbnRRdWV1ZTogU3RhcnRFdmVudFF1ZXVlID0gU3RhcnRFdmVudFF1ZXVlLmZyb21QYXJlbnRUcmVlcyhwYXJlbnRUcmVlcyk7XG4gIGNvbnN0IHBhcmVudFRvTmVzdGVkOiBNYXA8bnVtYmVyLCBSYW5nZVRyZWVbXT4gPSBuZXcgTWFwKCk7XG4gIGxldCBvcGVuUmFuZ2U6IFJhbmdlIHwgdW5kZWZpbmVkO1xuXG4gIHdoaWxlICh0cnVlKSB7XG4gICAgY29uc3QgZXZlbnQ6IFN0YXJ0RXZlbnQgfCB1bmRlZmluZWQgPSBzdGFydEV2ZW50UXVldWUubmV4dCgpO1xuICAgIGlmIChldmVudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBpZiAob3BlblJhbmdlICE9PSB1bmRlZmluZWQgJiYgb3BlblJhbmdlLmVuZCA8PSBldmVudC5vZmZzZXQpIHtcbiAgICAgIHJlc3VsdC5wdXNoKG5leHRDaGlsZChvcGVuUmFuZ2UsIHBhcmVudFRvTmVzdGVkKSk7XG4gICAgICBvcGVuUmFuZ2UgPSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgaWYgKG9wZW5SYW5nZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBsZXQgb3BlblJhbmdlRW5kOiBudW1iZXIgPSBldmVudC5vZmZzZXQgKyAxO1xuICAgICAgZm9yIChjb25zdCB7cGFyZW50SW5kZXgsIHRyZWV9IG9mIGV2ZW50LnRyZWVzKSB7XG4gICAgICAgIG9wZW5SYW5nZUVuZCA9IE1hdGgubWF4KG9wZW5SYW5nZUVuZCwgdHJlZS5lbmQpO1xuICAgICAgICBpbnNlcnRDaGlsZChwYXJlbnRUb05lc3RlZCwgcGFyZW50SW5kZXgsIHRyZWUpO1xuICAgICAgfVxuICAgICAgc3RhcnRFdmVudFF1ZXVlLnNldFBlbmRpbmdPZmZzZXQob3BlblJhbmdlRW5kKTtcbiAgICAgIG9wZW5SYW5nZSA9IHtzdGFydDogZXZlbnQub2Zmc2V0LCBlbmQ6IG9wZW5SYW5nZUVuZH07XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAoY29uc3Qge3BhcmVudEluZGV4LCB0cmVlfSBvZiBldmVudC50cmVlcykge1xuICAgICAgICBpZiAodHJlZS5lbmQgPiBvcGVuUmFuZ2UuZW5kKSB7XG4gICAgICAgICAgY29uc3QgcmlnaHQ6IFJhbmdlVHJlZSA9IHRyZWUuc3BsaXQob3BlblJhbmdlLmVuZCk7XG4gICAgICAgICAgc3RhcnRFdmVudFF1ZXVlLnB1c2hQZW5kaW5nVHJlZShuZXcgUmFuZ2VUcmVlV2l0aFBhcmVudChwYXJlbnRJbmRleCwgcmlnaHQpKTtcbiAgICAgICAgfVxuICAgICAgICBpbnNlcnRDaGlsZChwYXJlbnRUb05lc3RlZCwgcGFyZW50SW5kZXgsIHRyZWUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBpZiAob3BlblJhbmdlICE9PSB1bmRlZmluZWQpIHtcbiAgICByZXN1bHQucHVzaChuZXh0Q2hpbGQob3BlblJhbmdlLCBwYXJlbnRUb05lc3RlZCkpO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gaW5zZXJ0Q2hpbGQocGFyZW50VG9OZXN0ZWQ6IE1hcDxudW1iZXIsIFJhbmdlVHJlZVtdPiwgcGFyZW50SW5kZXg6IG51bWJlciwgdHJlZTogUmFuZ2VUcmVlKTogdm9pZCB7XG4gIGxldCBuZXN0ZWQ6IFJhbmdlVHJlZVtdIHwgdW5kZWZpbmVkID0gcGFyZW50VG9OZXN0ZWQuZ2V0KHBhcmVudEluZGV4KTtcbiAgaWYgKG5lc3RlZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgbmVzdGVkID0gW107XG4gICAgcGFyZW50VG9OZXN0ZWQuc2V0KHBhcmVudEluZGV4LCBuZXN0ZWQpO1xuICB9XG4gIG5lc3RlZC5wdXNoKHRyZWUpO1xufVxuXG5mdW5jdGlvbiBuZXh0Q2hpbGQob3BlblJhbmdlOiBSYW5nZSwgcGFyZW50VG9OZXN0ZWQ6IE1hcDxudW1iZXIsIFJhbmdlVHJlZVtdPik6IFJhbmdlVHJlZSB7XG4gIGNvbnN0IG1hdGNoaW5nVHJlZXM6IFJhbmdlVHJlZVtdID0gW107XG5cbiAgZm9yIChjb25zdCBuZXN0ZWQgb2YgcGFyZW50VG9OZXN0ZWQudmFsdWVzKCkpIHtcbiAgICBpZiAobmVzdGVkLmxlbmd0aCA9PT0gMSAmJiBuZXN0ZWRbMF0uc3RhcnQgPT09IG9wZW5SYW5nZS5zdGFydCAmJiBuZXN0ZWRbMF0uZW5kID09PSBvcGVuUmFuZ2UuZW5kKSB7XG4gICAgICBtYXRjaGluZ1RyZWVzLnB1c2gobmVzdGVkWzBdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbWF0Y2hpbmdUcmVlcy5wdXNoKG5ldyBSYW5nZVRyZWUoXG4gICAgICAgIG9wZW5SYW5nZS5zdGFydCxcbiAgICAgICAgb3BlblJhbmdlLmVuZCxcbiAgICAgICAgMCxcbiAgICAgICAgbmVzdGVkLFxuICAgICAgKSk7XG4gICAgfVxuICB9XG4gIHBhcmVudFRvTmVzdGVkLmNsZWFyKCk7XG4gIHJldHVybiBtZXJnZVJhbmdlVHJlZXMobWF0Y2hpbmdUcmVlcykhO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==

}, function(modId) { var map = {"./normalize":1679363156330,"./range-tree":1679363156331}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679363156330, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
const compare_1 = require("./compare");
const range_tree_1 = require("./range-tree");
/**
 * Normalizes a process coverage.
 *
 * Sorts the scripts alphabetically by `url`.
 * Reassigns script ids: the script at index `0` receives `"0"`, the script at
 * index `1` receives `"1"` etc.
 * This does not normalize the script coverages.
 *
 * @param processCov Process coverage to normalize.
 */
function normalizeProcessCov(processCov) {
    processCov.result.sort(compare_1.compareScriptCovs);
    for (const [scriptId, scriptCov] of processCov.result.entries()) {
        scriptCov.scriptId = scriptId.toString(10);
    }
}
exports.normalizeProcessCov = normalizeProcessCov;
/**
 * Normalizes a process coverage deeply.
 *
 * Normalizes the script coverages deeply, then normalizes the process coverage
 * itself.
 *
 * @param processCov Process coverage to normalize.
 */
function deepNormalizeProcessCov(processCov) {
    for (const scriptCov of processCov.result) {
        deepNormalizeScriptCov(scriptCov);
    }
    normalizeProcessCov(processCov);
}
exports.deepNormalizeProcessCov = deepNormalizeProcessCov;
/**
 * Normalizes a script coverage.
 *
 * Sorts the function by root range (pre-order sort).
 * This does not normalize the function coverages.
 *
 * @param scriptCov Script coverage to normalize.
 */
function normalizeScriptCov(scriptCov) {
    scriptCov.functions.sort(compare_1.compareFunctionCovs);
}
exports.normalizeScriptCov = normalizeScriptCov;
/**
 * Normalizes a script coverage deeply.
 *
 * Normalizes the function coverages deeply, then normalizes the script coverage
 * itself.
 *
 * @param scriptCov Script coverage to normalize.
 */
function deepNormalizeScriptCov(scriptCov) {
    for (const funcCov of scriptCov.functions) {
        normalizeFunctionCov(funcCov);
    }
    normalizeScriptCov(scriptCov);
}
exports.deepNormalizeScriptCov = deepNormalizeScriptCov;
/**
 * Normalizes a function coverage.
 *
 * Sorts the ranges (pre-order sort).
 * TODO: Tree-based normalization of the ranges.
 *
 * @param funcCov Function coverage to normalize.
 */
function normalizeFunctionCov(funcCov) {
    funcCov.ranges.sort(compare_1.compareRangeCovs);
    const tree = range_tree_1.RangeTree.fromSortedRanges(funcCov.ranges);
    normalizeRangeTree(tree);
    funcCov.ranges = tree.toRanges();
}
exports.normalizeFunctionCov = normalizeFunctionCov;
/**
 * @internal
 */
function normalizeRangeTree(tree) {
    tree.normalize();
}
exports.normalizeRangeTree = normalizeRangeTree;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9zcmMvbm9ybWFsaXplLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsdUNBQXFGO0FBQ3JGLDZDQUF5QztBQUd6Qzs7Ozs7Ozs7O0dBU0c7QUFDSCxTQUFnQixtQkFBbUIsQ0FBQyxVQUFzQjtJQUN4RCxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQywyQkFBaUIsQ0FBQyxDQUFDO0lBQzFDLEtBQUssTUFBTSxDQUFDLFFBQVEsRUFBRSxTQUFTLENBQUMsSUFBSSxVQUFVLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxFQUFFO1FBQy9ELFNBQVMsQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztLQUM1QztBQUNILENBQUM7QUFMRCxrREFLQztBQUVEOzs7Ozs7O0dBT0c7QUFDSCxTQUFnQix1QkFBdUIsQ0FBQyxVQUFzQjtJQUM1RCxLQUFLLE1BQU0sU0FBUyxJQUFJLFVBQVUsQ0FBQyxNQUFNLEVBQUU7UUFDekMsc0JBQXNCLENBQUMsU0FBUyxDQUFDLENBQUM7S0FDbkM7SUFDRCxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUNsQyxDQUFDO0FBTEQsMERBS0M7QUFFRDs7Ozs7OztHQU9HO0FBQ0gsU0FBZ0Isa0JBQWtCLENBQUMsU0FBb0I7SUFDckQsU0FBUyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsNkJBQW1CLENBQUMsQ0FBQztBQUNoRCxDQUFDO0FBRkQsZ0RBRUM7QUFFRDs7Ozs7OztHQU9HO0FBQ0gsU0FBZ0Isc0JBQXNCLENBQUMsU0FBb0I7SUFDekQsS0FBSyxNQUFNLE9BQU8sSUFBSSxTQUFTLENBQUMsU0FBUyxFQUFFO1FBQ3pDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxDQUFDO0tBQy9CO0lBQ0Qsa0JBQWtCLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDaEMsQ0FBQztBQUxELHdEQUtDO0FBRUQ7Ozs7Ozs7R0FPRztBQUNILFNBQWdCLG9CQUFvQixDQUFDLE9BQW9CO0lBQ3ZELE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLDBCQUFnQixDQUFDLENBQUM7SUFDdEMsTUFBTSxJQUFJLEdBQWMsc0JBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFFLENBQUM7SUFDcEUsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekIsT0FBTyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7QUFDbkMsQ0FBQztBQUxELG9EQUtDO0FBRUQ7O0dBRUc7QUFDSCxTQUFnQixrQkFBa0IsQ0FBQyxJQUFlO0lBQ2hELElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztBQUNuQixDQUFDO0FBRkQsZ0RBRUMiLCJmaWxlIjoibm9ybWFsaXplLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29tcGFyZUZ1bmN0aW9uQ292cywgY29tcGFyZVJhbmdlQ292cywgY29tcGFyZVNjcmlwdENvdnMgfSBmcm9tIFwiLi9jb21wYXJlXCI7XG5pbXBvcnQgeyBSYW5nZVRyZWUgfSBmcm9tIFwiLi9yYW5nZS10cmVlXCI7XG5pbXBvcnQgeyBGdW5jdGlvbkNvdiwgUHJvY2Vzc0NvdiwgU2NyaXB0Q292IH0gZnJvbSBcIi4vdHlwZXNcIjtcblxuLyoqXG4gKiBOb3JtYWxpemVzIGEgcHJvY2VzcyBjb3ZlcmFnZS5cbiAqXG4gKiBTb3J0cyB0aGUgc2NyaXB0cyBhbHBoYWJldGljYWxseSBieSBgdXJsYC5cbiAqIFJlYXNzaWducyBzY3JpcHQgaWRzOiB0aGUgc2NyaXB0IGF0IGluZGV4IGAwYCByZWNlaXZlcyBgXCIwXCJgLCB0aGUgc2NyaXB0IGF0XG4gKiBpbmRleCBgMWAgcmVjZWl2ZXMgYFwiMVwiYCBldGMuXG4gKiBUaGlzIGRvZXMgbm90IG5vcm1hbGl6ZSB0aGUgc2NyaXB0IGNvdmVyYWdlcy5cbiAqXG4gKiBAcGFyYW0gcHJvY2Vzc0NvdiBQcm9jZXNzIGNvdmVyYWdlIHRvIG5vcm1hbGl6ZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZVByb2Nlc3NDb3YocHJvY2Vzc0NvdjogUHJvY2Vzc0Nvdik6IHZvaWQge1xuICBwcm9jZXNzQ292LnJlc3VsdC5zb3J0KGNvbXBhcmVTY3JpcHRDb3ZzKTtcbiAgZm9yIChjb25zdCBbc2NyaXB0SWQsIHNjcmlwdENvdl0gb2YgcHJvY2Vzc0Nvdi5yZXN1bHQuZW50cmllcygpKSB7XG4gICAgc2NyaXB0Q292LnNjcmlwdElkID0gc2NyaXB0SWQudG9TdHJpbmcoMTApO1xuICB9XG59XG5cbi8qKlxuICogTm9ybWFsaXplcyBhIHByb2Nlc3MgY292ZXJhZ2UgZGVlcGx5LlxuICpcbiAqIE5vcm1hbGl6ZXMgdGhlIHNjcmlwdCBjb3ZlcmFnZXMgZGVlcGx5LCB0aGVuIG5vcm1hbGl6ZXMgdGhlIHByb2Nlc3MgY292ZXJhZ2VcbiAqIGl0c2VsZi5cbiAqXG4gKiBAcGFyYW0gcHJvY2Vzc0NvdiBQcm9jZXNzIGNvdmVyYWdlIHRvIG5vcm1hbGl6ZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlZXBOb3JtYWxpemVQcm9jZXNzQ292KHByb2Nlc3NDb3Y6IFByb2Nlc3NDb3YpOiB2b2lkIHtcbiAgZm9yIChjb25zdCBzY3JpcHRDb3Ygb2YgcHJvY2Vzc0Nvdi5yZXN1bHQpIHtcbiAgICBkZWVwTm9ybWFsaXplU2NyaXB0Q292KHNjcmlwdENvdik7XG4gIH1cbiAgbm9ybWFsaXplUHJvY2Vzc0Nvdihwcm9jZXNzQ292KTtcbn1cblxuLyoqXG4gKiBOb3JtYWxpemVzIGEgc2NyaXB0IGNvdmVyYWdlLlxuICpcbiAqIFNvcnRzIHRoZSBmdW5jdGlvbiBieSByb290IHJhbmdlIChwcmUtb3JkZXIgc29ydCkuXG4gKiBUaGlzIGRvZXMgbm90IG5vcm1hbGl6ZSB0aGUgZnVuY3Rpb24gY292ZXJhZ2VzLlxuICpcbiAqIEBwYXJhbSBzY3JpcHRDb3YgU2NyaXB0IGNvdmVyYWdlIHRvIG5vcm1hbGl6ZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZVNjcmlwdENvdihzY3JpcHRDb3Y6IFNjcmlwdENvdik6IHZvaWQge1xuICBzY3JpcHRDb3YuZnVuY3Rpb25zLnNvcnQoY29tcGFyZUZ1bmN0aW9uQ292cyk7XG59XG5cbi8qKlxuICogTm9ybWFsaXplcyBhIHNjcmlwdCBjb3ZlcmFnZSBkZWVwbHkuXG4gKlxuICogTm9ybWFsaXplcyB0aGUgZnVuY3Rpb24gY292ZXJhZ2VzIGRlZXBseSwgdGhlbiBub3JtYWxpemVzIHRoZSBzY3JpcHQgY292ZXJhZ2VcbiAqIGl0c2VsZi5cbiAqXG4gKiBAcGFyYW0gc2NyaXB0Q292IFNjcmlwdCBjb3ZlcmFnZSB0byBub3JtYWxpemUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZWVwTm9ybWFsaXplU2NyaXB0Q292KHNjcmlwdENvdjogU2NyaXB0Q292KTogdm9pZCB7XG4gIGZvciAoY29uc3QgZnVuY0NvdiBvZiBzY3JpcHRDb3YuZnVuY3Rpb25zKSB7XG4gICAgbm9ybWFsaXplRnVuY3Rpb25Db3YoZnVuY0Nvdik7XG4gIH1cbiAgbm9ybWFsaXplU2NyaXB0Q292KHNjcmlwdENvdik7XG59XG5cbi8qKlxuICogTm9ybWFsaXplcyBhIGZ1bmN0aW9uIGNvdmVyYWdlLlxuICpcbiAqIFNvcnRzIHRoZSByYW5nZXMgKHByZS1vcmRlciBzb3J0KS5cbiAqIFRPRE86IFRyZWUtYmFzZWQgbm9ybWFsaXphdGlvbiBvZiB0aGUgcmFuZ2VzLlxuICpcbiAqIEBwYXJhbSBmdW5jQ292IEZ1bmN0aW9uIGNvdmVyYWdlIHRvIG5vcm1hbGl6ZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZUZ1bmN0aW9uQ292KGZ1bmNDb3Y6IEZ1bmN0aW9uQ292KTogdm9pZCB7XG4gIGZ1bmNDb3YucmFuZ2VzLnNvcnQoY29tcGFyZVJhbmdlQ292cyk7XG4gIGNvbnN0IHRyZWU6IFJhbmdlVHJlZSA9IFJhbmdlVHJlZS5mcm9tU29ydGVkUmFuZ2VzKGZ1bmNDb3YucmFuZ2VzKSE7XG4gIG5vcm1hbGl6ZVJhbmdlVHJlZSh0cmVlKTtcbiAgZnVuY0Nvdi5yYW5nZXMgPSB0cmVlLnRvUmFuZ2VzKCk7XG59XG5cbi8qKlxuICogQGludGVybmFsXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVSYW5nZVRyZWUodHJlZTogUmFuZ2VUcmVlKTogdm9pZCB7XG4gIHRyZWUubm9ybWFsaXplKCk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9

}, function(modId) { var map = {"./compare":1679363156327,"./range-tree":1679363156331}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1679363156331, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
class RangeTree {
    constructor(start, end, delta, children) {
        this.start = start;
        this.end = end;
        this.delta = delta;
        this.children = children;
    }
    /**
     * @precodition `ranges` are well-formed and pre-order sorted
     */
    static fromSortedRanges(ranges) {
        let root;
        // Stack of parent trees and parent counts.
        const stack = [];
        for (const range of ranges) {
            const node = new RangeTree(range.startOffset, range.endOffset, range.count, []);
            if (root === undefined) {
                root = node;
                stack.push([node, range.count]);
                continue;
            }
            let parent;
            let parentCount;
            while (true) {
                [parent, parentCount] = stack[stack.length - 1];
                // assert: `top !== undefined` (the ranges are sorted)
                if (range.startOffset < parent.end) {
                    break;
                }
                else {
                    stack.pop();
                }
            }
            node.delta -= parentCount;
            parent.children.push(node);
            stack.push([node, range.count]);
        }
        return root;
    }
    normalize() {
        const children = [];
        let curEnd;
        let head;
        const tail = [];
        for (const child of this.children) {
            if (head === undefined) {
                head = child;
            }
            else if (child.delta === head.delta && child.start === curEnd) {
                tail.push(child);
            }
            else {
                endChain();
                head = child;
            }
            curEnd = child.end;
        }
        if (head !== undefined) {
            endChain();
        }
        if (children.length === 1) {
            const child = children[0];
            if (child.start === this.start && child.end === this.end) {
                this.delta += child.delta;
                this.children = child.children;
                // `.lazyCount` is zero for both (both are after normalization)
                return;
            }
        }
        this.children = children;
        function endChain() {
            if (tail.length !== 0) {
                head.end = tail[tail.length - 1].end;
                for (const tailTree of tail) {
                    for (const subChild of tailTree.children) {
                        subChild.delta += tailTree.delta - head.delta;
                        head.children.push(subChild);
                    }
                }
                tail.length = 0;
            }
            head.normalize();
            children.push(head);
        }
    }
    /**
     * @precondition `tree.start < value && value < tree.end`
     * @return RangeTree Right part
     */
    split(value) {
        let leftChildLen = this.children.length;
        let mid;
        // TODO(perf): Binary search (check overhead)
        for (let i = 0; i < this.children.length; i++) {
            const child = this.children[i];
            if (child.start < value && value < child.end) {
                mid = child.split(value);
                leftChildLen = i + 1;
                break;
            }
            else if (child.start >= value) {
                leftChildLen = i;
                break;
            }
        }
        const rightLen = this.children.length - leftChildLen;
        const rightChildren = this.children.splice(leftChildLen, rightLen);
        if (mid !== undefined) {
            rightChildren.unshift(mid);
        }
        const result = new RangeTree(value, this.end, this.delta, rightChildren);
        this.end = value;
        return result;
    }
    /**
     * Get the range coverages corresponding to the tree.
     *
     * The ranges are pre-order sorted.
     */
    toRanges() {
        const ranges = [];
        // Stack of parent trees and counts.
        const stack = [[this, 0]];
        while (stack.length > 0) {
            const [cur, parentCount] = stack.pop();
            const count = parentCount + cur.delta;
            ranges.push({ startOffset: cur.start, endOffset: cur.end, count });
            for (let i = cur.children.length - 1; i >= 0; i--) {
                stack.push([cur.children[i], count]);
            }
        }
        return ranges;
    }
}
exports.RangeTree = RangeTree;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9zcmMvcmFuZ2UtdHJlZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLE1BQWEsU0FBUztJQU1wQixZQUNFLEtBQWEsRUFDYixHQUFXLEVBQ1gsS0FBYSxFQUNiLFFBQXFCO1FBRXJCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ2YsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7SUFDM0IsQ0FBQztJQUVEOztPQUVHO0lBQ0gsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE1BQStCO1FBQ3JELElBQUksSUFBMkIsQ0FBQztRQUNoQywyQ0FBMkM7UUFDM0MsTUFBTSxLQUFLLEdBQTBCLEVBQUUsQ0FBQztRQUN4QyxLQUFLLE1BQU0sS0FBSyxJQUFJLE1BQU0sRUFBRTtZQUMxQixNQUFNLElBQUksR0FBYyxJQUFJLFNBQVMsQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztZQUMzRixJQUFJLElBQUksS0FBSyxTQUFTLEVBQUU7Z0JBQ3RCLElBQUksR0FBRyxJQUFJLENBQUM7Z0JBQ1osS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDaEMsU0FBUzthQUNWO1lBQ0QsSUFBSSxNQUFpQixDQUFDO1lBQ3RCLElBQUksV0FBbUIsQ0FBQztZQUN4QixPQUFPLElBQUksRUFBRTtnQkFDWCxDQUFDLE1BQU0sRUFBRSxXQUFXLENBQUMsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDaEQsc0RBQXNEO2dCQUN0RCxJQUFJLEtBQUssQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLEdBQUcsRUFBRTtvQkFDbEMsTUFBTTtpQkFDUDtxQkFBTTtvQkFDTCxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUM7aUJBQ2I7YUFDRjtZQUNELElBQUksQ0FBQyxLQUFLLElBQUksV0FBVyxDQUFDO1lBQzFCLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzNCLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7U0FDakM7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRCxTQUFTO1FBQ1AsTUFBTSxRQUFRLEdBQWdCLEVBQUUsQ0FBQztRQUNqQyxJQUFJLE1BQWMsQ0FBQztRQUNuQixJQUFJLElBQTJCLENBQUM7UUFDaEMsTUFBTSxJQUFJLEdBQWdCLEVBQUUsQ0FBQztRQUM3QixLQUFLLE1BQU0sS0FBSyxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakMsSUFBSSxJQUFJLEtBQUssU0FBUyxFQUFFO2dCQUN0QixJQUFJLEdBQUcsS0FBSyxDQUFDO2FBQ2Q7aUJBQU0sSUFBSSxLQUFLLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxLQUFLLElBQUksS0FBSyxDQUFDLEtBQUssS0FBSyxNQUFPLEVBQUU7Z0JBQ2hFLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDbEI7aUJBQU07Z0JBQ0wsUUFBUSxFQUFFLENBQUM7Z0JBQ1gsSUFBSSxHQUFHLEtBQUssQ0FBQzthQUNkO1lBQ0QsTUFBTSxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUM7U0FDcEI7UUFDRCxJQUFJLElBQUksS0FBSyxTQUFTLEVBQUU7WUFDdEIsUUFBUSxFQUFFLENBQUM7U0FDWjtRQUVELElBQUksUUFBUSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDekIsTUFBTSxLQUFLLEdBQWMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3JDLElBQUksS0FBSyxDQUFDLEtBQUssS0FBSyxJQUFJLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQyxHQUFHLEtBQUssSUFBSSxDQUFDLEdBQUcsRUFBRTtnQkFDeEQsSUFBSSxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDO2dCQUMxQixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUM7Z0JBQy9CLCtEQUErRDtnQkFDL0QsT0FBTzthQUNSO1NBQ0Y7UUFFRCxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUV6QixTQUFTLFFBQVE7WUFDZixJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO2dCQUNyQixJQUFLLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztnQkFDdEMsS0FBSyxNQUFNLFFBQVEsSUFBSSxJQUFJLEVBQUU7b0JBQzNCLEtBQUssTUFBTSxRQUFRLElBQUksUUFBUSxDQUFDLFFBQVEsRUFBRTt3QkFDeEMsUUFBUSxDQUFDLEtBQUssSUFBSSxRQUFRLENBQUMsS0FBSyxHQUFHLElBQUssQ0FBQyxLQUFLLENBQUM7d0JBQy9DLElBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO3FCQUMvQjtpQkFDRjtnQkFDRCxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQzthQUNqQjtZQUNELElBQUssQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUNsQixRQUFRLENBQUMsSUFBSSxDQUFDLElBQUssQ0FBQyxDQUFDO1FBQ3ZCLENBQUM7SUFDSCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsS0FBSyxDQUFDLEtBQWE7UUFDakIsSUFBSSxZQUFZLEdBQVcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7UUFDaEQsSUFBSSxHQUEwQixDQUFDO1FBRS9CLDZDQUE2QztRQUM3QyxLQUFLLElBQUksQ0FBQyxHQUFXLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDckQsTUFBTSxLQUFLLEdBQWMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMxQyxJQUFJLEtBQUssQ0FBQyxLQUFLLEdBQUcsS0FBSyxJQUFJLEtBQUssR0FBRyxLQUFLLENBQUMsR0FBRyxFQUFFO2dCQUM1QyxHQUFHLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDekIsWUFBWSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ3JCLE1BQU07YUFDUDtpQkFBTSxJQUFJLEtBQUssQ0FBQyxLQUFLLElBQUksS0FBSyxFQUFFO2dCQUMvQixZQUFZLEdBQUcsQ0FBQyxDQUFDO2dCQUNqQixNQUFNO2FBQ1A7U0FDRjtRQUVELE1BQU0sUUFBUSxHQUFXLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLFlBQVksQ0FBQztRQUM3RCxNQUFNLGFBQWEsR0FBZ0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ2hGLElBQUksR0FBRyxLQUFLLFNBQVMsRUFBRTtZQUNyQixhQUFhLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQzVCO1FBQ0QsTUFBTSxNQUFNLEdBQWMsSUFBSSxTQUFTLENBQ3JDLEtBQUssRUFDTCxJQUFJLENBQUMsR0FBRyxFQUNSLElBQUksQ0FBQyxLQUFLLEVBQ1YsYUFBYSxDQUNkLENBQUM7UUFDRixJQUFJLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQztRQUNqQixPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILFFBQVE7UUFDTixNQUFNLE1BQU0sR0FBZSxFQUFFLENBQUM7UUFDOUIsb0NBQW9DO1FBQ3BDLE1BQU0sS0FBSyxHQUEwQixDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakQsT0FBTyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUN2QixNQUFNLENBQUMsR0FBRyxFQUFFLFdBQVcsQ0FBQyxHQUF3QixLQUFLLENBQUMsR0FBRyxFQUFHLENBQUM7WUFDN0QsTUFBTSxLQUFLLEdBQVcsV0FBVyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUM7WUFDOUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFDLFdBQVcsRUFBRSxHQUFHLENBQUMsS0FBSyxFQUFFLFNBQVMsRUFBRSxHQUFHLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBQyxDQUFDLENBQUM7WUFDakUsS0FBSyxJQUFJLENBQUMsR0FBVyxHQUFHLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDekQsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQzthQUN0QztTQUNGO1FBQ0QsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztDQUNGO0FBekpELDhCQXlKQyIsImZpbGUiOiJyYW5nZS10cmVlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmFuZ2VDb3YgfSBmcm9tIFwiLi90eXBlc1wiO1xuXG5leHBvcnQgY2xhc3MgUmFuZ2VUcmVlIHtcbiAgc3RhcnQ6IG51bWJlcjtcbiAgZW5kOiBudW1iZXI7XG4gIGRlbHRhOiBudW1iZXI7XG4gIGNoaWxkcmVuOiBSYW5nZVRyZWVbXTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBzdGFydDogbnVtYmVyLFxuICAgIGVuZDogbnVtYmVyLFxuICAgIGRlbHRhOiBudW1iZXIsXG4gICAgY2hpbGRyZW46IFJhbmdlVHJlZVtdLFxuICApIHtcbiAgICB0aGlzLnN0YXJ0ID0gc3RhcnQ7XG4gICAgdGhpcy5lbmQgPSBlbmQ7XG4gICAgdGhpcy5kZWx0YSA9IGRlbHRhO1xuICAgIHRoaXMuY2hpbGRyZW4gPSBjaGlsZHJlbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcHJlY29kaXRpb24gYHJhbmdlc2AgYXJlIHdlbGwtZm9ybWVkIGFuZCBwcmUtb3JkZXIgc29ydGVkXG4gICAqL1xuICBzdGF0aWMgZnJvbVNvcnRlZFJhbmdlcyhyYW5nZXM6IFJlYWRvbmx5QXJyYXk8UmFuZ2VDb3Y+KTogUmFuZ2VUcmVlIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgcm9vdDogUmFuZ2VUcmVlIHwgdW5kZWZpbmVkO1xuICAgIC8vIFN0YWNrIG9mIHBhcmVudCB0cmVlcyBhbmQgcGFyZW50IGNvdW50cy5cbiAgICBjb25zdCBzdGFjazogW1JhbmdlVHJlZSwgbnVtYmVyXVtdID0gW107XG4gICAgZm9yIChjb25zdCByYW5nZSBvZiByYW5nZXMpIHtcbiAgICAgIGNvbnN0IG5vZGU6IFJhbmdlVHJlZSA9IG5ldyBSYW5nZVRyZWUocmFuZ2Uuc3RhcnRPZmZzZXQsIHJhbmdlLmVuZE9mZnNldCwgcmFuZ2UuY291bnQsIFtdKTtcbiAgICAgIGlmIChyb290ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcm9vdCA9IG5vZGU7XG4gICAgICAgIHN0YWNrLnB1c2goW25vZGUsIHJhbmdlLmNvdW50XSk7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgbGV0IHBhcmVudDogUmFuZ2VUcmVlO1xuICAgICAgbGV0IHBhcmVudENvdW50OiBudW1iZXI7XG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICBbcGFyZW50LCBwYXJlbnRDb3VudF0gPSBzdGFja1tzdGFjay5sZW5ndGggLSAxXTtcbiAgICAgICAgLy8gYXNzZXJ0OiBgdG9wICE9PSB1bmRlZmluZWRgICh0aGUgcmFuZ2VzIGFyZSBzb3J0ZWQpXG4gICAgICAgIGlmIChyYW5nZS5zdGFydE9mZnNldCA8IHBhcmVudC5lbmQpIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzdGFjay5wb3AoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbm9kZS5kZWx0YSAtPSBwYXJlbnRDb3VudDtcbiAgICAgIHBhcmVudC5jaGlsZHJlbi5wdXNoKG5vZGUpO1xuICAgICAgc3RhY2sucHVzaChbbm9kZSwgcmFuZ2UuY291bnRdKTtcbiAgICB9XG4gICAgcmV0dXJuIHJvb3Q7XG4gIH1cblxuICBub3JtYWxpemUoKTogdm9pZCB7XG4gICAgY29uc3QgY2hpbGRyZW46IFJhbmdlVHJlZVtdID0gW107XG4gICAgbGV0IGN1ckVuZDogbnVtYmVyO1xuICAgIGxldCBoZWFkOiBSYW5nZVRyZWUgfCB1bmRlZmluZWQ7XG4gICAgY29uc3QgdGFpbDogUmFuZ2VUcmVlW10gPSBbXTtcbiAgICBmb3IgKGNvbnN0IGNoaWxkIG9mIHRoaXMuY2hpbGRyZW4pIHtcbiAgICAgIGlmIChoZWFkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaGVhZCA9IGNoaWxkO1xuICAgICAgfSBlbHNlIGlmIChjaGlsZC5kZWx0YSA9PT0gaGVhZC5kZWx0YSAmJiBjaGlsZC5zdGFydCA9PT0gY3VyRW5kISkge1xuICAgICAgICB0YWlsLnB1c2goY2hpbGQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZW5kQ2hhaW4oKTtcbiAgICAgICAgaGVhZCA9IGNoaWxkO1xuICAgICAgfVxuICAgICAgY3VyRW5kID0gY2hpbGQuZW5kO1xuICAgIH1cbiAgICBpZiAoaGVhZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBlbmRDaGFpbigpO1xuICAgIH1cblxuICAgIGlmIChjaGlsZHJlbi5sZW5ndGggPT09IDEpIHtcbiAgICAgIGNvbnN0IGNoaWxkOiBSYW5nZVRyZWUgPSBjaGlsZHJlblswXTtcbiAgICAgIGlmIChjaGlsZC5zdGFydCA9PT0gdGhpcy5zdGFydCAmJiBjaGlsZC5lbmQgPT09IHRoaXMuZW5kKSB7XG4gICAgICAgIHRoaXMuZGVsdGEgKz0gY2hpbGQuZGVsdGE7XG4gICAgICAgIHRoaXMuY2hpbGRyZW4gPSBjaGlsZC5jaGlsZHJlbjtcbiAgICAgICAgLy8gYC5sYXp5Q291bnRgIGlzIHplcm8gZm9yIGJvdGggKGJvdGggYXJlIGFmdGVyIG5vcm1hbGl6YXRpb24pXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmNoaWxkcmVuID0gY2hpbGRyZW47XG5cbiAgICBmdW5jdGlvbiBlbmRDaGFpbigpOiB2b2lkIHtcbiAgICAgIGlmICh0YWlsLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICBoZWFkIS5lbmQgPSB0YWlsW3RhaWwubGVuZ3RoIC0gMV0uZW5kO1xuICAgICAgICBmb3IgKGNvbnN0IHRhaWxUcmVlIG9mIHRhaWwpIHtcbiAgICAgICAgICBmb3IgKGNvbnN0IHN1YkNoaWxkIG9mIHRhaWxUcmVlLmNoaWxkcmVuKSB7XG4gICAgICAgICAgICBzdWJDaGlsZC5kZWx0YSArPSB0YWlsVHJlZS5kZWx0YSAtIGhlYWQhLmRlbHRhO1xuICAgICAgICAgICAgaGVhZCEuY2hpbGRyZW4ucHVzaChzdWJDaGlsZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRhaWwubGVuZ3RoID0gMDtcbiAgICAgIH1cbiAgICAgIGhlYWQhLm5vcm1hbGl6ZSgpO1xuICAgICAgY2hpbGRyZW4ucHVzaChoZWFkISk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBwcmVjb25kaXRpb24gYHRyZWUuc3RhcnQgPCB2YWx1ZSAmJiB2YWx1ZSA8IHRyZWUuZW5kYFxuICAgKiBAcmV0dXJuIFJhbmdlVHJlZSBSaWdodCBwYXJ0XG4gICAqL1xuICBzcGxpdCh2YWx1ZTogbnVtYmVyKTogUmFuZ2VUcmVlIHtcbiAgICBsZXQgbGVmdENoaWxkTGVuOiBudW1iZXIgPSB0aGlzLmNoaWxkcmVuLmxlbmd0aDtcbiAgICBsZXQgbWlkOiBSYW5nZVRyZWUgfCB1bmRlZmluZWQ7XG5cbiAgICAvLyBUT0RPKHBlcmYpOiBCaW5hcnkgc2VhcmNoIChjaGVjayBvdmVyaGVhZClcbiAgICBmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgdGhpcy5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgY2hpbGQ6IFJhbmdlVHJlZSA9IHRoaXMuY2hpbGRyZW5baV07XG4gICAgICBpZiAoY2hpbGQuc3RhcnQgPCB2YWx1ZSAmJiB2YWx1ZSA8IGNoaWxkLmVuZCkge1xuICAgICAgICBtaWQgPSBjaGlsZC5zcGxpdCh2YWx1ZSk7XG4gICAgICAgIGxlZnRDaGlsZExlbiA9IGkgKyAxO1xuICAgICAgICBicmVhaztcbiAgICAgIH0gZWxzZSBpZiAoY2hpbGQuc3RhcnQgPj0gdmFsdWUpIHtcbiAgICAgICAgbGVmdENoaWxkTGVuID0gaTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcmlnaHRMZW46IG51bWJlciA9IHRoaXMuY2hpbGRyZW4ubGVuZ3RoIC0gbGVmdENoaWxkTGVuO1xuICAgIGNvbnN0IHJpZ2h0Q2hpbGRyZW46IFJhbmdlVHJlZVtdID0gdGhpcy5jaGlsZHJlbi5zcGxpY2UobGVmdENoaWxkTGVuLCByaWdodExlbik7XG4gICAgaWYgKG1pZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByaWdodENoaWxkcmVuLnVuc2hpZnQobWlkKTtcbiAgICB9XG4gICAgY29uc3QgcmVzdWx0OiBSYW5nZVRyZWUgPSBuZXcgUmFuZ2VUcmVlKFxuICAgICAgdmFsdWUsXG4gICAgICB0aGlzLmVuZCxcbiAgICAgIHRoaXMuZGVsdGEsXG4gICAgICByaWdodENoaWxkcmVuLFxuICAgICk7XG4gICAgdGhpcy5lbmQgPSB2YWx1ZTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgcmFuZ2UgY292ZXJhZ2VzIGNvcnJlc3BvbmRpbmcgdG8gdGhlIHRyZWUuXG4gICAqXG4gICAqIFRoZSByYW5nZXMgYXJlIHByZS1vcmRlciBzb3J0ZWQuXG4gICAqL1xuICB0b1JhbmdlcygpOiBSYW5nZUNvdltdIHtcbiAgICBjb25zdCByYW5nZXM6IFJhbmdlQ292W10gPSBbXTtcbiAgICAvLyBTdGFjayBvZiBwYXJlbnQgdHJlZXMgYW5kIGNvdW50cy5cbiAgICBjb25zdCBzdGFjazogW1JhbmdlVHJlZSwgbnVtYmVyXVtdID0gW1t0aGlzLCAwXV07XG4gICAgd2hpbGUgKHN0YWNrLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IFtjdXIsIHBhcmVudENvdW50XTogW1JhbmdlVHJlZSwgbnVtYmVyXSA9IHN0YWNrLnBvcCgpITtcbiAgICAgIGNvbnN0IGNvdW50OiBudW1iZXIgPSBwYXJlbnRDb3VudCArIGN1ci5kZWx0YTtcbiAgICAgIHJhbmdlcy5wdXNoKHtzdGFydE9mZnNldDogY3VyLnN0YXJ0LCBlbmRPZmZzZXQ6IGN1ci5lbmQsIGNvdW50fSk7XG4gICAgICBmb3IgKGxldCBpOiBudW1iZXIgPSBjdXIuY2hpbGRyZW4ubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgc3RhY2sucHVzaChbY3VyLmNoaWxkcmVuW2ldLCBjb3VudF0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmFuZ2VzO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1679363156325);
})()
//miniprogram-npm-outsideDeps=[]
//# sourceMappingURL=index.js.map