## Return Negative

```js
function makeNegative(num) {
 if (num <= 0) {
   return num
 }     else {
   return num * -1
 }
```

## Sum of Positive

```js
function positiveSum(arr) {
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum += arr[i]
    }
  }
  return sum; 
}
```

## Function 2

```js

const result = Math.sqrt(number);
```

## Sum Arrays

```js
function sum (numbers) {
    "use strict";
    let sum = 0
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i]
    }
    return sum 
};
```

## Reversed Strings

```js 
//credits :https://www.freecodecamp.org/news/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb/

  function solution(str){
    return str.split("").reverse().join("");
}

```
