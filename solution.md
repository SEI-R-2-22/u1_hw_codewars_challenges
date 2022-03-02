## Return Negative

function makeNegative(num) {
if (num <= 0) {
return num
} else if (num > 0) {
return num \* (-1)
}
}

## Sum of Positive

function positiveSum(arr) {
let sum = 0;  
 for (i = 0; i < arr.length; i++) {
if (arr[i] > 0) {  
 sum += arr[i];
}
return sum;  
}
}

## Function 2

function square(num) {
return num \* num;
}

## Sum Arrays

function sum (numbers) {
let sum = 0; {
for (i=0; i<numbers.length; i++) {
sum += numbers[i];
}
return sum;
}
}

## Reversed Strings

function solution(str){
let newString = "";
for (let i = str.length - 1; i >= 0; i--) {
newString += str[i];
}
return newString
}
