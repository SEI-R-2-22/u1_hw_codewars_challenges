## Return Negative

```js
const makeNegative = (num) => {
  // Code?
  if (num <= 0) {
    return 0
  }
  return num * -1
}
```

## Sum of Positive

```js
const positiveSum = (arr) => {
  if (arr.length <= 1) {
    return 0
  }
  let tempSum = 0
  const sum = arr
    .filter((num) => num > 0)
    .reduce((num1, num2) => num1 + num2, tempSum)
  return sum
}
```

## Function 2

```js
const square = (n) => {
  return (n *= n)
}
```

## Sum Arrays

```js
const sumArray = (arr) => {
  let temp = 0
  const sum = arr.reduce((n1, n2) => n1 + n2, 0)
  return sum
}
```

## Reversed Strings

```js
const ReverseString = (string) => {
  let newString = ''
  for (let i = string.length - 1; i >= 0; i--) {
    newString += string[i]
  }
  return newString
}
```
