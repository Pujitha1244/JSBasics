/*
Filter function is also HOF
loops over an array element
there is one special thing aboit filter, i.e, the argument function which we have to pass inside filter should always
return a boolean, otherwise output is converted to boolean
*/

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 3, 2, 7, 6, 5, 4, 2, 2, 4, 5, 6];

const result = arr.filter((ele) => ele % 2 === 0);
console.log(result);

console.log(...new Set(arr));

console.log(arr.sort((a, b) => a - b));
