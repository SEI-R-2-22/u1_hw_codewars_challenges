## Return Negative

---

function makeNegative(num) {
if (num < 0) {
return num
} else if (num > 0){
num = num \* -1
return num
} else {
return num
}
}

---

## Sum of Positive

function positiveSum(arr) {
let num = 0;
for(let i = 0; i < arr.length; i++) {
if(arr[i] > 0) {
num += arr[i]
}
} return num
}

## Function 2

---

function square(num) {
num = num \* num
return num
}

---

## Sum Arrays

function sum (numbers) {
let total = 0
for (let i = 0;i < numbers.length;i++){
total = total + numbers[i]
}
return total
};

## Reversed Strings

---

function solution(str) {
let word = ''
for (let i = str.length - 1; i >= 0; i--) {
word += str[i]
}
return word
}

---
