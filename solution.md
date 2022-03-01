## Return Negative

```js
const makeNegative = (num) => {
  return num > 0 ? -num : num
}
```

## Sum of Positive

```js
const sumPos = (arr) => {
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) sum += arr[i]
  }
  return sum
}
```

## Function 2

```js
const square = (num) => {
  return Math.pow(num, 2)
}
```

## Sum Arrays

```js
function sum(numbers) {
  return numbers.filter((number) => !isNaN(number)).reduce((a, b) => a + b, 0)
}
```

## Reversed Strings

```js
function solution(str) {
  return str.split('').reverse().join('')
}
```
