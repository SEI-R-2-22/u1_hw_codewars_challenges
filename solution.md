## Return Negative

function makeNegative(num) {
if (num <= 0) {
return num
} else if (num > 0) {
num = -num
return num
}
}

## Sum of Positive

function positiveSum(arr) {
let sum = 0
for (let i = 0; i < arr.length; i++) {
if (arr[i] > 0) {
sum += arr[i]
}
}
return sum
}

## Function 2

function square(num) {
return num \* num
}

## Sum Arrays

function sum (numbers) {
"use strict";
let sum = 0
for(let i = 0; i < numbers.length; i++) {
sum += numbers[i]
}
return sum  
};

## Reversed Strings

function solution(str){
str = str.split('').reverse().join('')
return str
}
