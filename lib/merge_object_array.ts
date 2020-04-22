import { MERGE_EQUALS } from "./abstract_merge";

export type NATIVE_ARRAY<T> = T[];

function _merge_native_array<T>(
    equals: MERGE_EQUALS<T>,
    newer: NATIVE_ARRAY<T>,
    older: NATIVE_ARRAY<T>): T[]
{
    if(!newer && !older) return [];
    if(!newer) return older;

    const result = [...newer];

    older.forEach(o => {
        if(!newer.find(n => equals(n,o))) result.push(o);
    });

    return result;
}

export const merge_native_array = _merge_native_array;