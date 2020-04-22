"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function _merge_native_array(merge, equals, newer, older) {
    if (!newer && !older)
        return [];
    if (!newer)
        return older;
    const result = [];
    newer.forEach(n => {
        const found = older.find(o => equals(n, o));
        if (found)
            result.push(merge(n, found));
        else
            result.push(n);
    });
    older.forEach(o => {
        if (!newer.find(n => equals(n, o)))
            result.push(o);
    });
    return result;
}
exports.merge_native_array = _merge_native_array;
//# sourceMappingURL=merge_native_array.js.map