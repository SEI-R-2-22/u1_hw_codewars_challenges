## Return Negative

```js
function makeNegative(num) {
    return -Math.abs(num);
    }
```

## Sum of Positive

```js
function positiveSum(arr) {
    var sum = 0;
    for (let i = 0; i < arr.length; i ++){
        if(arr[i] > 0) sum += arr[i]
    }
    return sum
}
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
    var total = 0; 
    numbers.forEach (x => {
        total += x
    })
    return total
    
};
```

## Reversed Strings

```js
function solution(str){
    return str.split('').reverse().join('');
}
```
