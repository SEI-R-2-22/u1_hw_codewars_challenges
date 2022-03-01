## Return Negative

```js
function makeNegative(num) {
  if (num > 0) {
    return (num \*= -1)
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
      total += arr[i]
    }
  }
  return total
}
```

## Function 2

```js
function square(num) {
  return (num \* num)
}
```

## Sum Arrays

```js
function sum(numbers) {
  'use strict'
  let total = 0
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i]
  }
  return total
}
```

## Reversed Strings

```js
function solution(str) {
  let newStr = ''
  for (let i = 0; i < str.length; i++) {
    newStr += str.substr(-(i + 1), 1)
  }
  return newStr
}
```
