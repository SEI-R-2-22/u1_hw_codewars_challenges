## Return Negative

```js
function makeNegative(num) {
  if (num <= 0) {
    return num    
  }
  else {
    return (num * -1)
  }
}
```

## Sum of Positive

```js
function positiveSum(arr) {
  let summation = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      summation = summation + arr[i]
    }
  }
  return summation
}

```

## Function 2

```js
function square(num) {
  num = (num * num)
  return num
}
```

## Sum Arrays

```js
function sum (numbers) {
  if (numbers === []) {
    return 0
  }  
  else {
  summation = 0   
    for (let i = 0; i < numbers.length; i++) {
      summation = summation + numbers[i]
  }
  return summation}    
};
```

## Reversed Strings

```js
function solution(str){ 

  let str2 = ''

for (let i = 0; i < str.length; i++) {
  str2 = str2 + str[str.length - i - 1]
}

str = str2
  return str }  
```
