import { MERGE, MERGE_COMPLEX, MERGE_EQUALS } from "./abstract_merge";


function has_key(key: string, object: any) {
    return Object.keys(object).find(k => k === key);
}

export const merge_object = (
    merge: MERGE<any>,
    newer: any,
    older: any
) => {
    if(!newer) newer = {};
    if(!older) older = {};

    Object.keys(newer).forEach(k => !has_key(k, older) && (older[k] = null));
    Object.keys(older).forEach(k => !has_key(k, newer) && (newer[k] = null));

    const result = {};
    Object.keys(newer).forEach(k => result[k] = merge(newer[k], older[k]));

    return result;
}