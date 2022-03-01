## Return Negative

```js
function makeNegative(num) {
  // Code?
  if (num <= 0) {
    return num
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
      sum = sum + arr[i]
    }
  }
  return sum
}
```

## Function 2

```js
const square = (num) => {
  let squared = num * num
  return squared
}
```

## Sum Arrays

```js
function sum(numbers) {
  'use strict'
  let sum = 0
  for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i]
  }
  return sum
}
```

## Reversed Strings

```js
function solution(str) {
  let splitStr = str.split('')
  let reverseStrArray = splitStr.reverse()
  let joinReverseStrArray = reverseStrArray.join('')
  return joinReverseStrArray
}
```
