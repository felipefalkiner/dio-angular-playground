"use strict";
function concatArray(...itens) {
    return new Array().concat(...itens);
}
const numArray = concatArray([1, 5], [3]);
const stringArray = concatArray(["teste", "banana"], ["falk"]);
stringArray.push("hello");
console.log(numArray);
console.log(stringArray);
