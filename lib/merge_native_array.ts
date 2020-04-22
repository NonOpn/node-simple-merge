import { MERGE_EQUALS, MERGE } from "./abstract_merge";

export type NATIVE_ARRAY<T> = T[];

function _merge_native_array<T>(
    merge: MERGE<T>,
    equals: MERGE_EQUALS<T>,
    newer: NATIVE_ARRAY<T>,
    older: NATIVE_ARRAY<T>): T[]
{
    if(!newer && !older) return [];
    if(!newer) return older;

    const result:T[] = [];

    newer.forEach(n => {
        const found = older.find(o => equals(n,o));
        if(found) result.push(merge(n, found));
        else result.push(n);
    });

    older.forEach(o => {
        if(!newer.find(n => equals(n,o))) result.push(o);
    });

    return result;
}

export const merge_native_array = _merge_native_array;