import { merge_native_array } from "./merge_native_array";
import { merge_object } from "./merge_object";
import { MERGE_EQUALS, MERGE_COMPLEX, MERGE_OBJECT, MERGE } from "./abstract_merge";

const map: Map<string, MERGE_EQUALS<any>> = new Map();
const map_merge: Map<string, MERGE_OBJECT<any>> = new Map();

function defaultEquals(left: any, right: any) {
    console.log("can't call equals for unknown", {left, right});
    return false;
}

function defaultMergeObjects(merge: MERGE<any>, left: any, right: any) {
    console.log("can't call merge for unknown", {left, right});
    return merge_object(full_merge, left, right);
}

function mergeForType(type: string): MERGE_OBJECT<any> {
    return map_merge.get(type) || defaultMergeObjects;
}

function equalsForType(type: string): MERGE_EQUALS<any> {
    return map.get(type) || defaultEquals;
}

export function equals(left: any, right: any): any {
    if(!left) return false;
    if(!right) return false;

    if(left.type && right.type && left.type === right.type) return equalsForType(left.type);

    return left === right;
}

export function full_merge(newer: any, older: any): any {
    if(!newer) return older;
    if(!older) return newer;

    if(Array.isArray(newer) || Array.isArray(older)) {
        return merge_native_array(full_merge, equals, newer, older);
    }

    if(newer.type && older.type) {
        const merge_for_type = mergeForType(newer.type);
        return merge_for_type(full_merge, newer, older);
    }

    if(newer instanceof Date || older instanceof Date) {
        return newer;
    }

    if(typeof newer === "string" || typeof older === "string") {
        return newer;
    }

    return newer;
}

export function registerEquals(type: string, equals: MERGE_EQUALS<any>) {
    map.set(type, equals);
}

export function registerMerge(type: string, merge: MERGE_OBJECT<any>) {
    map_merge.set(type, merge);
}