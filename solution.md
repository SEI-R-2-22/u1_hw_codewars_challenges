## Return Negative

```js
function makeNegative(num) {
  return -Math.abs(num);
}
```

## Sum of Positive

```js
function positiveSum(arr) {
  let counter = 0;
  for(x of arr) {
    if(x > 0) {
      counter += x
    }
    
  }
    return counter
}
```

## Function 2

```js
function square(num) {
  return Math.pow(num, 2);
}
```

## Sum Arrays

```js
function sum (numbers) {
    "use strict";
  let counter = 0;
  for (let i = 0; i < numbers.length; i++) {
    counter += numbers[i];
  }
    return counter   
};
```

## Reversed Strings

```js
function solution(str){
  return str.split('').reverse().join('');
}
```
