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
const square = (num) => {
  return num * num
}
```

## Sum Arrays

```js
function sum(numbers) {
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
  let reversed = ''
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i]
  }
  return reversed
}
```
