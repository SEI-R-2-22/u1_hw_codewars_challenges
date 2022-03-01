## Return Negative

```js
function makeNegative(num) {
  return -Math.abs(num);
}
// solution NO.2
function makeNegative(num) {
  if (num > 0) {
    return -num
  } else {
    return num
  }
}
```

## Sum of Positive

```js
function positiveSum(arr) {
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) 
      sum += arr[i]
  }
  return sum
}

```

## Function 2

```js
function square(num) {
return Math.pow((num),2)  
}

```

## Sum Arrays

```js
function sum (numbers) {
    "use strict";
    let total = 0 
    for (let i = 0; i < numbers.length; i++) {
      total += numbers[i]
    }
    return total
};

```

## Reversed Strings

```js
function solution(str){
  return str.split("").reverse().join("")
}

```
