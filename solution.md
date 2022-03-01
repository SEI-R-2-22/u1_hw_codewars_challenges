## Return Negative

```js
function makeNegative(num) {
  if(num > 0){
      num *= -1
      return num
  }else{
      return num
  }
}
```

## Sum of Positive

```js
function positiveSum(arr) {
  let sum = 0
  for(let i = 0; i < arr.length; i++){
      if(arr[i] > 0){
          sum += arr[i]
      }
  }
  return sum
}
```

## Function 2

```js
function square(num) {
  return num ** 2
}
```

## Sum Arrays

```js
function sum (numbers) {
    let current = 0
    for(let i = 0; i < numbers.length; i++){
        current += numbers[i]
    }
    return current
};
```

## Reversed Strings

```js
function solution(str){
  let reverseString = ``
  for(let i = str.length-1; i >= 0; i--){
      reverseString += str[i]
  }

  return reverseString
}
```
