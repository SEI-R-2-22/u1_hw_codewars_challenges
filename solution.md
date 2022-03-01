## Return Negative

```js
function makeNegative(num) {
  return num < 0 ? num : -num
}
```

## Sum of Positive

```js
function positiveSum(arr) {
  if (arr.length === 0) {
    return 0
  } else {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > 0) sum += arr[i]
    }
    return sum
  }
}
```

## Function 2

```js
const square = (num) => {
  let square = num * num
  return square
}
```

## Sum Arrays

```js
function sum(numbers) {
  if (numbers.length === 0) {
    return 0
  } else {
    let total = 0
    for (let i = 0; i < numbers.length; i++) {
      total += numbers[i]
    }
    return total
  }
}
```

## Reversed Strings

```js
function solution(str) {
  let newStr = ''
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i]
  }
  return newStr
}
```
