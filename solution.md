## Return Negative

```js
function makeNegative(num) {
  return -Math.abs(num);
}
```

## Sum of Positive

```js
function positiveSum(arr) {
  let sum = arr.filter((num) => {
    return num > 0
  })
  return sum.reduce((a,b) => a + b, 0)
}
```

## Function 2

```js
function square(num){
  return num * num
}
```

## Sum Arrays

```js
// Sum Numbers
function sum (numbers) {
    return numbers.reduce((a, b) => a + b, 0)
};
```

## Reversed Strings

```js
function solution(str){
  return str.split('').reverse().join('');  
}
```
