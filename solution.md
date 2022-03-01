## Return Negative

```js
function makeNegative(num) {
  if (num <= 0) {
    return num * 1
  } else if (num > 0) {
    return num * -1
  }
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
  return sum
}
```

## Function 2

```js
const square = (num) => {
  return num * num
}
```

## Sum Arrays

```js
function sum(numbers) {
  'use strict'
  let add = 0
  for (let i = 0; i < numbers.length; i++) {
    let addIndex = numbers[i]
    add += addIndex
  }
  return add
}
```

## Reversed Strings

```js
function solution(str) {
  let newString = ''
  for (let i = str.length - 1; i >= 0; i--) {
    newString += str[i]
  }
  return newString
}
```
