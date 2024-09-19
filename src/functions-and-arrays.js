// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
  if (num1 > num2) return num1;
  if (num2 > num1) return num2;
  return num2;
}

// Iteration 2 | Find the Longest Word
const words = [
  "mystery",
  "brother",
  "aviator",
  "crocodile",
  "pearl",
  "orchard",
  "crackpot",
];

function findLongestWord(arr) {
  if (!arr || arr.length === 0) return null;
  let word = arr[0];

  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];
    let itemLength = item.length;

    if (itemLength > word.length) {
      word = item;
    }
    if (itemLength === word.length) {
      continue;
    }
  }
  return word;
}

// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];
    sum += item;
  }
  return sum;
}

// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(arr) {
  if (arr.length === 0) return 0;

  let arrayLength = arr.length;
  let arraySum = sumNumbers(arr);
  let result = arraySum / arrayLength;

  return result;
}

// Iteration 5 | Find Elements
const words2 = [
  "machine",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "truth",
  "disobedience",
];

const doesWordExist = (words, word) =>
  words.length ? words.includes(word) : null;

//This was my initial solution, but unit test was complaining even the output of function is correct.

// function doesWordExist(arr, word) {
//   if (arr.length === 0) return null;
//   for (let i = 0; i < arr.length; i++) {
//     let item = arr[i];

//     if (item === word) return true;
//     if (item !== word) return false;
//   }
// }
