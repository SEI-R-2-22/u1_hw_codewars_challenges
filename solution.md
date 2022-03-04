## Return Negative
function makeNegative(num) {
if (num>0) {num *= -1}
return num
}
```js

```

## Sum of Positive
function positiveSum(arr) {
  let sum = 0
  for(let i = 0; arr.length; i++){
    if(arr[i]>0) {
      sum += arr[i];
    }
  }
  return sum
}
```js

```

## Function 2
let square = (x) =>{
  let squared = x*x
  return squared
}
```js

```

## Sum Arrays

function sum(numbers) {
    let sum = 0;
    for(let i = 0; i<numbers.length; i++){
      sum += numbers[i];
    }
    return sum;
};
```js

```

## Reversed Strings
function solution(str){
  let stringArr=str.split('')
  let revArr = stringArr.reverse()
  let finalArr = revArr.join('')
  for(let i=0;i<str;i++){
    str.reverse();
    string.push(str[i])
    }
  return finalArr
}
```js

```
