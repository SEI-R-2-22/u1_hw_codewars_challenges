## Return Negative

```js
function makeNegative(num) {
  return Math.abs(num) * -1;
}
```

## Sum of Positive

```js
function positiveSum(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++){
    if (arr[i] >= 0) {
      total += arr[i];
    }
  }
  return total;
}
```

## Function 2

```js
function square (num) {
  return Math.pow(num,2);
}
```

## Sum Arrays

```js
// Sum Numbers
function sum(numbers) {
    "use strict";
    let total = 0;
    for (let i = 0; i < numbers.length; i++){
      total += numbers[i];
    }
    return total;
};
```

## Reversed Strings

```js
function solution(str){
  
  let reverseWrd = '';
  for (let i of str){
    reverseWrd = (i + reverseWrd);
  }
  return reverseWrd;
}
```
