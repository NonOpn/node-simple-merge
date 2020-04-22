"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function has_key(key, object) {
    return Object.keys(object).find(k => k === key);
}
exports.merge_object = (merge, newer, older) => {
    if (!newer)
        newer = {};
    if (!older)
        older = {};
    Object.keys(newer).forEach(k => !has_key(k, older) && (older[k] = null));
    Object.keys(older).forEach(k => !has_key(k, newer) && (newer[k] = null));
    const result = {};
    Object.keys(newer).forEach(k => result[k] = merge(newer[k], older[k]));
    return result;
};
//# sourceMappingURL=merge_object.js.map