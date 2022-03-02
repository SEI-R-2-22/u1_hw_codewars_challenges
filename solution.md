## Return Negative

function makeNegative(num) {
  return num <= 0 ? num : (num * -1)
}

## Sum of Positive

function positiveSum(arr) {
  let sum = 0
  for (let i=0; i< arr.length; i++) {
    if (arr[i] >0) sum += arr[i]
  }
  return sum 
}
## Function 2

function square(num) {
  return Math.pow(num, 2); 
}

## Sum Arrays

function sum (numbers) {
    "use strict";
    return  numbers.reduce((initalNum,nextNum) => initalNum + nextNum,0);
};

## Reversed Strings

function soution(str) {
   return str.split('').reverse().join('');
}
