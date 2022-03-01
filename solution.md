## Return Negative

```js
function makeNegative(num) {
  if (num <= 0) {
    return num
  } else {
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
const square = (number) => number ** 2
```

## Sum Arrays

```js
function sum(numbers) {
  let sum = 0
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i]
  }
  return sum
}
```

## Reversed Strings

```js
function solution(str) {
  let result = ''
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i]
  }
  return result
}
```
