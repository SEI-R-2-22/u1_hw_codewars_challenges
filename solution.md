## Return Negative

```js
const makeNegative(number)=>{
    if (number>0){
        return -number
    }
    else if (number<0 ){
        return number
    }
    else {
        return 0
    }
}
```

## Sum of Positive

```js
const positiveNumSum(arry) => {
    let sum = 0;
    for (let i = 0; i< arry.length; i++) {
        if (arry[i]>0){
            sum += arry[i];
        }
        else {
            return sum;
        }
    }
    
}
```

## Function 2

```js
const numSqr(num) => {
    return num * num;
}
```

## Sum Arrays

```js
const sumArry(arry) => {
    for (let i = 0; i > arry.lenght; i++)
    return sumArry + arry
}
```

## Reversed Strings

```js
const reverseString(str) => {
    return str.split('').reverse().join('');
}
reverseString('noor')
// expected return of 'roon'
```
