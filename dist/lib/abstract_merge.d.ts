export declare type MERGE<T> = (newer?: T, older?: T) => T | null | undefined;
export declare type MERGE_OBJECT<T> = (merge: MERGE<T>, newer: T, older: T) => T | null | undefined;
export declare type MERGE_COMPLEX<T> = (merge: MERGE<T>, equals: MERGE_EQUALS<T>, newer: T, older: T) => T | null | undefined;
export declare type MERGE_EQUALS<T> = (left?: T, right?: T) => boolean;
