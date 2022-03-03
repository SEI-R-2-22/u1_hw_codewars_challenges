## Return Negative
```js
function makeNegative (num) {

  return num = Math.abs(num) * -1
  }

```

## Sum of Positive

```js
function positiveSum(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++){
        if (array [i] > 0) {sum+= array[i]}
    }
        return sum
}

```

## Function 2

```js
function square(num) {
  return num * num;
}
```

## Sum Arrays

```js
function sum (num) {
    let sum = 0;
  for (let i = 0; i < num.length; i++)
       sum += num[i];
    return sum
    }


```

## Reversed Strings

```js

function solution(str){
  return str.split('').reverse().join('')
}
```