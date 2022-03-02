## Return Negative

```js
let makeNegative = (num) => {
  return -Math.abs(num);
}
```

## Sum of Positive

```js
let positiveSum = (arr) => {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
      } if (arr[i] > 0) {
        sum += arr[i]
      }
    console.log(sum)
    return sum
    
  }

positiveSum()

Note: I couldn't figure out why this wasn't working and saying it can't read the length property
```

## Function 2

```js
let square = (number) => {
  return number * number
}
```

## Sum Arrays

```js
let sumArr = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    } if (arr.length > 1) {
      let sum = 0
      sum += arr[i]
      return sum
    } else {
        return 0
    }
}
```
Note: Again, not sure why it won't take the code. It says "sum not defined" when sum is defined right there

## Reversed Strings

```js

let reverse = (str) => {
    let newStr = ''
    for (let i = str.length - 1; i >= 0; i--) {
      newStr += str[i];
      return newStr
    }
    console.log(newStr)
  }
  

reverse()

```
