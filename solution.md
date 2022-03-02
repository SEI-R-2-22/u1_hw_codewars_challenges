## Return Negative

```js
function makeNegative(num) {
  return num = Math.abs(num) * -1
}
```

## Sum of Positive

```js
function positiveSum(arr) {
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum += arr[i]
    } 
  }
  return sum
};
```

## Function 2

```js
function square(num) {
  return num * num
}
```

## Sum Arrays

```js
function sum (numbers) {
    let total = 0
     if (numbers[0] === undefined) {
       return 0
      } else {
        for (let i = 0; i < numbers.length; i++) {
        total += numbers[i]
           return total
       }   
      } 
    }
```

## Reversed Strings

```js
function solution(str){
   return str.split('').reverse().join('');
}
```
