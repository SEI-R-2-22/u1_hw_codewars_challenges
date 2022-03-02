## Return Negative

const makeNegative = (num) => {
if (num > 0){
return -Math.abs(num)

    }

else if (num < 0) {
return -Math.abs(num)
}
else {
return num
}
};

## Sum of Positive

function positiveSum(arr) {
let allNum = 0;
for(let i =0; i < arr.length; i++) {
if(arr[i] > 0) {
allNum+=arr[i]
}
} return allNum
}

## Function 2

function square(num) {
return num \* num;
}

## Sum Arrays

function sum (numbers) {
let total = 0
for(let i = 0; i < numbers.length; i++) {
total = total + numbers[i]
} return total
};

## Reversed Strings

function solution(str){
let word = ''
for(let i = str.length - 1; i >= 0; i--) {
word += str[i]
}
return word
}
