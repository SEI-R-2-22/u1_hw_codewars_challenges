## Return Negative

```js
function makeNegative(num) {
  if(num < 0) {
    return num;
    }
  else {
    return num*-1;
  }
  }
```

## Sum of Positive

```js
function positiveSum(arr) {
  let sum = 0
  for (let i = 0; i<arr.length; i++) {
    if (arr[i]>0) {
      sum += arr[i]
    }
  }
  return sum
}
```

## Function 2

```js
function square(num) {
  return num**2
}
```

## Sum Arrays

```js
// Sum Numbers
function sum (numbers) {
    "use strict";
    let all = 0;
  if (numbers.length > 0) {
    for(let i = 0; i<numbers.length; i++) {
      all += numbers[i]
      }
    }
  else {
    all = 0
  }
  return all
};
```

## Reversed Strings

```js
function solution(str){
    return str.split("").reverse().join("");
}
```
