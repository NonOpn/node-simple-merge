"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const merge_native_array_1 = require("./merge_native_array");
const merge_object_1 = require("./merge_object");
const map = new Map();
const map_merge = new Map();
function defaultEquals(left, right) {
    console.log("can't call equals for unknown", { left, right });
    return false;
}
function defaultMergeObjects(merge, left, right) {
    console.log("can't call merge for unknown", { left, right });
    return merge_object_1.merge_object(full_merge, left, right);
}
function mergeForType(type) {
    return map_merge.get(type) || defaultMergeObjects;
}
function equalsForType(type) {
    return map.get(type) || defaultEquals;
}
function equals(left, right) {
    if (!left)
        return false;
    if (!right)
        return false;
    if (left.type && right.type && left.type === right.type)
        return equalsForType(left.type);
    return left === right;
}
exports.equals = equals;
function full_merge(newer, older) {
    if (!newer)
        return older;
    if (!older)
        return newer;
    if (Array.isArray(newer) || Array.isArray(older)) {
        return merge_native_array_1.merge_native_array(full_merge, equals, newer, older);
    }
    if (newer.type && older.type) {
        const merge_for_type = mergeForType(newer.type);
        return merge_for_type(full_merge, newer, older);
    }
    if (newer instanceof Date || older instanceof Date) {
        return newer;
    }
    if (typeof newer === "string" || typeof older === "string") {
        return newer;
    }
    return newer;
}
exports.full_merge = full_merge;
function registerEquals(type, equals) {
    map.set(type, equals);
}
exports.registerEquals = registerEquals;
function registerMerge(type, merge) {
    map_merge.set(type, merge);
}
exports.registerMerge = registerMerge;
//# sourceMappingURL=index.js.map