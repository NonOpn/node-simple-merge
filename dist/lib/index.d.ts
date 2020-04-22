import { MERGE_EQUALS, MERGE_OBJECT } from "./abstract_merge";
export declare function equals(left: any, right: any): any;
export declare function full_merge(newer: any, older: any): any;
export declare function registerEquals(type: string, equals: MERGE_EQUALS<any>): void;
export declare function registerMerge(type: string, merge: MERGE_OBJECT<any>): void;
