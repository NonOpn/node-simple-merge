"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function _merge_native_array(equals, newer, older) {
    if (!newer && !older)
        return [];
    if (!newer)
        return older;
    const result = [...newer];
    older.forEach(o => {
        if (!newer.find(n => equals(n, o)))
            result.push(o);
    });
    return result;
}
exports.merge_native_array = _merge_native_array;
//# sourceMappingURL=merge_object_array.js.map