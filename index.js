"use strict";
// map
Object.defineProperty(exports, "__esModule", { value: true });
var oldArray = [1, 2, 3, 4, 5, 2];
// map
var myArray = oldArray.map(function (el) { return el * 2; });
console.log(myArray);
// filter
var filteredArray = oldArray.filter(function (el) { return el % 2 === 0; });
console.log("filtered array ".concat(filteredArray));
// find
var foundElement = oldArray.find(function (el) { return el > 2; });
console.log("found element ".concat(foundElement));
//find index
var findIndex = oldArray.findIndex(function (el) { return el === 2; });
console.log("index: ".concat(findIndex));
// fill
var newArray = new Array(4);
var newestArray = newArray.fill(10);
console.log("newest array is ".concat(newestArray));
// every
var everyArray = oldArray.every(function (el) { return el < 3; });
console.log("every ".concat(everyArray));
//some
var someArray = oldArray.some(function (el) { return el > 3; });
console.log("some ".concat(someArray));
// concant
var arrayONE = [1, 2, 3, 4, 5];
var arrayTwo = [6, 7, 8, 9, 10];
var arrayThree = arrayONE.concat(arrayTwo);
console.log("concat ".concat(arrayThree));
// includes
var arrayIncludes = arrayThree.includes(11);
console.log("includes ".concat(arrayIncludes));
// sort
var alphabet = ["a", "d", "b", "z", "m", "h", "x", "0"];
var ascending = alphabet.sort(function (a, b) { return (a > b ? 1 : -1); });
var descending = alphabet.sort(function (a, b) { return (a > b ? -1 : 1); });
console.log("ascending:".concat(ascending));
console.log("descending : ".concat(descending));
// for each
var ourArray = [];
var forArray = arrayTwo.forEach(function (arr) {
    if (arr > 7) {
        console.log(arr);
    }
});
// join
var name = ["h", "u", "m", "a", "n"];
var myname = name.join("");
console.log(myname);
// reduce
var total = arrayThree.reduce(function (total, current) { return total + current; });
console.log("total: ".concat(total));
// slice
var count = [10, 20, 30, 40, 50];
var mycount = count.slice(2, 4);
console.log("slice ".concat(mycount));
// reverse
var reversed = count.reverse();
console.log("reversed ".concat(reversed));
// shift
var shift = count.shift();
console.log("shifted count :".concat(count));
// unshift
var unshift = count.unshift(15);
console.log(unshift);
console.log(count);
