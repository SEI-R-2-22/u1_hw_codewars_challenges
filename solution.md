## Return Negative

```js
function makeNegative(num) {
  // Code?
  // want to return a negative number
  //if our number is 0 or already negative we want to just return that number
if (num <= 0) {
  return num
  } else {
    return num * -1
  }
}
```

## Sum of Positive

```js
function positiveSum(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > 0) sum += arr[i]
    }
    return sum
}

```

## Function 2

```js
function squareSum(numbers) {
    let sum = 0
    for( let i = 0; i < numbers.length; i++) {
        sum += numbers[i] **2
    }
    return sum
}

```

## Sum Arrays

```js
sum = function (numbers) {
  "use strict";
  return numbers.reduce(function(t, n){
    return t + n;
  }, 0);
};
```

## Reversed Strings

```js
function solution(str){
  const reverseStr = str.split('').reverse('').join('');
  return reverseStr;
}
```
