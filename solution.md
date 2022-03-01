## Return Negative

```js
function makeNegative(num) {
  if (num < 0) {
    return num
  } else if (num > 0) {
    num = -num
    return num
  } else {
    return num
  }
}
```

## Sum of Positive

```js
function positiveSum(arr) {
  let posNum = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      posNum = posNum + arr[i]
    }
  }
  return posNum
}
```

## Function 2

```js
const square = (num) => {
  let squareNum = num * num
  return squareNum
}
```

## Sum Arrays

```js
function sum(numbers) {
  'use strict'
  let sumNum = 0
  if (numbers.length > 0) {
    for (let i = 0; i < numbers.length; i++) {
      sumNum = sumNum + numbers[i]
    }
  } else if (numbers.length === 0) {
    return 0
  }
  return sumNum
}
```

## Reversed Strings

```js
function solution(str) {
  let newStr = ''
  for (let i = str.length - 1; i >= 0; i--) {
    newStr = newStr + str[i]
  }
  return newStr
}
```
