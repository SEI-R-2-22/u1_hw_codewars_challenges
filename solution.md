## Return Negative

```js

```
function makeNegative(num) {
  if (num <= 0) {
    return (num* 1)
  }else if (num > 0) {
    return (num* -1)
    }
 
}
## Sum of Positive

```js
function positiveSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++){
    if (arr[i]>0){sum+= arr[i]}
     }
  return sum;
}
```

## Function 2

```js
function square(num){
  return num ** 2
}
```

## Sum Arrays

```js
function sum (numbers) {
    let sum = 0;
    if(numbers !== ''){
      for (let i=0; i < numbers.length; i++){
      sum += numbers[i];
    }
    return sum;
    }else {
    return 0;
    }
};
```

## Reversed Strings

```js

function solution(str) {
    return str.split("").reverse().join("");
}

```
