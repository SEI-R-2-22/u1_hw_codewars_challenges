## Return Negative

```js

function makeNegative(num) {
  if (num <=0) { //if num is < or = to 0 return that number
    return num
  } else { // or * by -1
    return num * -1
  }
}


```

## Sum of Positive

```js
function positiveSum(arr) {
  let sum = 0; 
    for (let i = 0; i < arr.length; i++){ //if the the num is greater than 0 in the array add them all together
      if(arr[i] > 0) sum =+ arr[i];
    }
     return sum
}

```

## Function 2

```js
const square = function(x) {
  return x * x;
};
```

## Sum Arrays

```js
function sum (numbers) {
    "use strict";
  let sum = 0
  for (let i= 0; i < numbers.length; i++){
    sum += numbers[i];
  }
  return sum  
    
};

```

## Reversed Strings

```js
function solution(str){
  return str.split('').reverse().join('');
}
```
