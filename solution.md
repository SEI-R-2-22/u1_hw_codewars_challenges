## Return Negative

```js
function makeNegative(num) {
  if(num > 0) {
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
  for(i=0; i < arr.length; i++) {
    if(arr[i] > 0){
      sum += arr[i];
    }
  }
  return sum;
}

```

## Function 2

```js
function square(num) {
  return num * num;
};

```

## Sum Arrays

```js
// Sum Numbers
function sum (numbers) {
  let sum = 0;
  if(numbers !== "") {
      for(i=0; i < numbers.length; i++) {
        sum += numbers[i];
      }
    return sum;
  } else {
    return 0;
  }  
    
};
```

## Reversed Strings

```js
function solution(str){
  
  let reverse ='';
  
  for(let i = str.length - 1; i >= 0; i--) {
    reverse = reverse + str[i];
  }
  return reverse;
}

```
