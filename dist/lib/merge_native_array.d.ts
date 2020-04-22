import { MERGE_EQUALS, MERGE } from "./abstract_merge";
export declare type NATIVE_ARRAY<T> = T[];
declare function _merge_native_array<T>(merge: MERGE<T>, equals: MERGE_EQUALS<T>, newer: NATIVE_ARRAY<T>, older: NATIVE_ARRAY<T>): T[];
export declare const merge_native_array: typeof _merge_native_array;
export {};
