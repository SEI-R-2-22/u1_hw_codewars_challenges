## Return Negative

```js
function makeNegative(num) {
  return num < 0 ? num : -num;
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
let square = (x) => {
  return x * x
}

```

## Sum Arrays

```js
function sum (numbers) {
  let tSum=0;
  if ( numbers.length > 0) { 
    for (let i = 0; i < numbers.length; i++){
      tSum += numbers[i]
    }
    return tSum  
    }
  return 0;
    
};

```

## Reversed Strings

```js
function solution(str){
  return str.split('').reverse().toString().replace(/,/g,'');
}
```
