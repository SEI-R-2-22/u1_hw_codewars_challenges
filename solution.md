## Return Negative

```js
function makeNegative(num) {
  return num <= 0 ? num : -num;
}
```

## Sum of Positive

```js
function positiveSum(arr) {
  if (!arr.length) {
    return 0;
  } else {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > 0) {
        sum += arr[i];
      }
    }
    return sum;
  }
}
```

## Function 2

```js
const square = (num) => {
  return num * num;
};
```

## Sum Arrays

```js
function sum(numbers) {
  "use strict";
  if (!numbers.length) {
    return 0;
  } else {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    return sum;
  }
}
```

## Reversed Strings

```js
function solution(str) {
  let s = "";
  for (let i = str.length - 1; i >= 0; i--) {
    s += str.charAt(i);
  }
  return s;
}
```
