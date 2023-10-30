import emojipedia from "./emojipedia.js";

// console.log(emojipedia);

//  var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.
function emojientry(x) {
  return x.meaning.substring(0, 40);
}

let result = emojipedia.map(emojientry);
//console.log(emojipedia.map(emojientry));
console.log(result);
// console.log(numbers.map(square));

// //Filter - Create a new array by keeping the items that return true.
// function greater(x) {
//   return x > 10;
// }
// console.log(numbers.filter(greater));

// //Reduce - Accumulate a value by doing something to each item in an array.

// function sum(l, x) {
//   return l + x;
// }

// console.log(numbers.reduce(sum));

// //Find - find the first item that matches from an array.

// function finding(num) {
//   return num > 50;
// }

// console.log(numbers.find(finding));

// console.log(numbers);

// //FindIndex - find the index of the first item that matches.

// function returnindex(num) {
//   return num > 50;
// }

// console.log(numbers.findIndex(returnindex));
