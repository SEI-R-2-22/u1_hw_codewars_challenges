## Return Negative

```js
function makeNegative(num) {
  if (num < 0) {
    return num
  } else if (num > 0) {
    return num * -1
  }
}
```

## Ternary for John

```js
return num < 0 ? num : num * -1
```

## Sum of Positive

```js
function positiveSum(arr) {
  let sum = 0
  for (let i = 0; i < arr.length; i++)
    if (arr[i] > 0) {
      sum = arr[i] + sum
    }
  return sum
}
```

## Function 2

```js
function square(num) {
  return Math.pow(num, 2)
}

square(3)
```

## Sum Arrays

```js
function sum(numbers) {
  'use strict'
  let total = 0
  for (let i = 0; i < numbers.length; i++) {
    total = numbers[i] + total
  }
  return total
}

sum([1, 5.2, 4, 0, -1])
```

## Reversed Strings

```js
function sum(numbers) {
  'use strict'
  let total = 0
  for (let i = 0; i < numbers.length; i++) {
    total = numbers[i] + total
  }
  return total
}

sum([1, 5.2, 4, 0, -1])
```
