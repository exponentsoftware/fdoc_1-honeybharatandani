// .a. Looping a triangle: Write a loop that makes seven calls to console.log to output the following triangle:
const triangle = () => {
  for (let i = "#"; i.length <= 7; i += "#") {
    console.log(i);
  }
};
triangle();

// 2c. Reversing an array: Arrays have a reverse method which changes the array by inverting
// the order in which its elements appear.For this exercise, write a function,
// reverseArray.The reverseArray, takes an array as argument and produces a new array that has the same elements
//     in the inverse order.Without reverse method.

const array = ["A", "B", "C"];

let revArray = array.reverse(function () {
  return revArray;
});
console.log("Reverse of Array is ", revArray);

// 2.d. Write a function which check if items of an array are unique?
// let checkUniqueness;
// const arrOne = [1, 4, 6, 2, 1];
// console.log(checkUniqueness(arrOne));
// false;
// const arrTwo = [1, 4, 6, 2, 3];
// console.log(checkUniqueness(arrTwo));
// true;

let arrOne = [1, 4, 6, 2, 3];
let arrTwo = [1, 4, 6, 2, 1];

const checkUniqueness =
  arrOne || arrTwo.filter((item, i, ar) => ar.indexOf(item) === i);

console.log(checkUniqueness);
