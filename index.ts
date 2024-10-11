// map

const oldArray = [1, 2, 3, 4, 5, 2];
// map
const myArray = oldArray.map((el) => el * 2);
console.log(myArray);

// filter
const filteredArray = oldArray.filter((el) => el % 2 === 0);
console.log(`filtered array ${filteredArray}`);

// find
const foundElement = oldArray.find((el) => el > 2);
console.log(`found element ${foundElement}`);

//find index
const findIndex = oldArray.findIndex((el) => el === 2);
console.log(`index: ${findIndex}`);

// fill
const newArray = new Array(4);
const newestArray = newArray.fill(10);
console.log(`newest array is ${newestArray}`);

// every
const everyArray = oldArray.every((el) => el < 3);
console.log(`every ${everyArray}`);

//some
const someArray = oldArray.some((el) => el > 3);
console.log(`some ${someArray}`);

// concant
const arrayONE = [1, 2, 3, 4, 5];
const arrayTwo = [6, 7, 8, 9, 10];
const arrayThree: number[] = arrayONE.concat(arrayTwo);
console.log(`concat ${arrayThree}`);

// includes
const arrayIncludes: boolean = arrayThree.includes(11);
console.log(`includes ${arrayIncludes}`);

// sort
const alphabet = ["a", "d", "b", "z", "m", "h", "x", "0"];
const ascending = alphabet.sort((a, b) => (a > b ? 1 : -1));
const descending = alphabet.sort((a, b) => (a > b ? -1 : 1));
console.log(`ascending:${ascending}`);
console.log(`descending : ${descending}`);

// for each
const ourArray = [];
const forArray = arrayTwo.forEach((arr) => {
  if (arr > 7) {
    console.log(arr);
  }
});
// join
const name = ["h", "u", "m", "a", "n"];
let myname = name.join("");
console.log(myname);
// reduce
const total = arrayThree.reduce((total, current) => total + current);
console.log(`total: ${total}`);

// slice

const count = [10, 20, 30, 40, 50];
const mycount = count.slice(2, 4);
console.log(`slice ${mycount}`);
// reverse
const reversed = count.reverse();
console.log(`reversed ${reversed}`);

// shift
const shift = count.shift();
console.log(`shifted count :${count}`);

// unshift

const unshift = count.unshift(15);
console.log(unshift);
console.log(count);

export {};
