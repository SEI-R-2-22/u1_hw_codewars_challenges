## Return Negative

```js
function makeNegative(num) {
  if (num === 0) {
    return 0
  } else if (num > 0) {
    return -num
  } else {
    return num
  }
}
```

## Sum of Positive

```js
function positiveSum(arr) {
  let total = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      total = total + arr[i]
    }
  }
  return total
}
```

## Function 2

```js
const square = (x) => {
  return x * x
}
```

## Sum Arrays

```js
function sum(numbers) {
  'use strict'
  let total = 0
  if (numbers === []) {
    return 0
  } else {
    for (let i = 0; i < numbers.length; i++) total = total + numbers[i]
  }
  return total
}
```

## Reversed Strings

```js
function solution(str) {
  let strRev = str.split('').reverse().join('')
  return strRev
}
```
