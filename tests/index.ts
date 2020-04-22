import { full_merge } from "../lib";

const left = {
    type: "LEFT",
    date: new Date(),
    array: [1, 3, 2, 4, 5, 5],
    other: {
        type: "OTHER",
        subobject: {
            value: new Date()
        }
    }
};

const right = {
    type: "LEFT",
    numver_value: 12,
    array: [1, 2, 28],
    other: {
        type: "OTHER", display: "some value"
    },
    another: {
        type:"ANOTHER", dates: [new Date()]
    }
};

const result = full_merge(left, right);
console.log(result);