## Return Negative

```js
function makeNegative(num) {
  if (num <= 0) {
    return num
  } else {
    return -num
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
function square(num) {
  return num * num
}
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
  return str.split('').reverse().join('')
}
```
