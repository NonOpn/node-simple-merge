export type MERGE<T> = (
    newer?: T,
    older?: T
) => T|null|undefined;

export type MERGE_OBJECT<T> = (
    merge: MERGE<T>,
    newer: T,
    older: T
) => T|null|undefined;

export type MERGE_COMPLEX<T> = (
    merge: MERGE<T>,
    equals: MERGE_EQUALS<T>,
    newer: T,
    older: T
) => T|null|undefined;

export type MERGE_EQUALS<T> = (left?: T, right?: T) => boolean;