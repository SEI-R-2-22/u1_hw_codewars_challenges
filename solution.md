## Return Negative

```js
function nameNegative(num) {
    if ( num > 0) {
        return -num;
    } else {
        return num;
    }
}
```

## Sum of Positive

```js
function positiveSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++){
    if(arr[i] > 0){sum+= arr[i]}
    }
    return sum;
}
```

## Function 2

```js
const square = (x) => {
  return x * x
}
```

## Sum Arrays

```js
// Sum Numbers
function sum (numbers) {
  let totalSum=0;
  if ( numbers.length > 0) { 
    for (let i = 0; i < numbers.length; i++){
      totalSum += numbers[i]
    }
    return totalSum  
    }
  return 0;
    
};
```

## Reversed Strings

```js
function solution(str){
  return str.split('').reverse().join('')
}
```
