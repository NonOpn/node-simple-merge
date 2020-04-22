import { MERGE } from "./abstract_merge";

export type NATIVE_TYPES = number|string|Date|null|undefined;

export const merge_native: MERGE<NATIVE_TYPES> = (newer?: NATIVE_TYPES, older?: NATIVE_TYPES) => {
    return newer;
}