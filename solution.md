## Return Negative

```js
function makeNegative(num) {
  if(num <= 0){
    return num;
  }else{
    return -Math.abs(num);
  }
}
```

## Sum of Positive

```js
function positiveSum(arr) {
  let sum = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum += arr[i];
    }
  } 
  return sum;
}
```

## Function 2

```js
function square(x) {
  return x * x;
}
```

## Sum Arrays

```js
function sum (numbers) {
    
      let sumNumber = 0;
  for (var i = 0; i < numbers.length; i++) {
      sumNumber += numbers[i];
  } 
  return sumNumber;
};
```

## Reversed Strings

```js
function solution(str){
 var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
  
}
```
