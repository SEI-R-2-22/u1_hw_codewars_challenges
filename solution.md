## Return Negative

```js
function makeNegative(num) {
  if (num < 0) {
    return num
  } else {
    return num * -1
  }
}
```

## Sum of Positive

```js
// Researched filter function here: https://morioh.com/p/3ca876e1d7e6
function positiveSum(arr) {
  let sum = 0
  const posArr = arr.filter((num) => num > -1)

  for (let i = 0; i < posArr.length; i++) sum += posArr[i]
  return sum
}
```

## Function 2

<!-- *Googled square operators , we also reviewed a version during the first week of class -->

```js
function square(num) {
  return num ** 2
}
```

## Sum Arrays

```js

```

## Reversed Strings

```js

```
