## Return Negative

```js
function makeNegative(num) {
  if (num > 0) {
  return num * -1}
  else {
    return num
  }
}
```

## Sum of Positive

```js
function positiveSum(arr) {
  let sum = 0
  for ( let i = 0; i <arr.length; i++ ) {
     if (arr[i] > 0) { 
       sum += arr[i]
     }
    }
  return sum
}
```

## Function 2

```js
function square(n) {
 return Math.pow(n, 2)
}
```

## Sum Arrays

```js
function sum (numbers) {
    "use strict";
  let sum = 0
    for ( let i = 0;i<numbers.length;i++ ){
      sum += numbers[i]
    }
    return sum
};
```

## Reversed Strings

```js
function solution(str){
  let rst = ""
  for ( let i = 0;i<str.length;i++ ) {
    rst = rst + str.substr((str.length-1-i), 1)
  }
  return rst
}
```
