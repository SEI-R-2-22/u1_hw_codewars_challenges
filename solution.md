## Return Negative

```js
function makeNegative(num) {
  // Code?
  return num > 0 ? -num : num;
}
```

## Sum of Positive

```js
function positiveSum(numbers) {
  let n = 0;
  for (let i=0; i<numbers.length; i++) {
    if (numbers[i] > 0) n += numbers[i];
  }
  return n;
}

//Or, after some learning about array functions like filter and reduce: 

function positiveSum(arr) {
  return arr.filter(e => e > 0).reduce((prev,current) => prev + current, 0);
}

//I'm not sure I could do anything more complicated with reduce yet, but this was a straightforward enough example. Took me a while to figure out I could put a "0" in as "initial" and bypass a long if statement.
```

## Function 2

```js
function square(x) {
  return x**2;
}
```

## Sum Arrays

```js
function sum (numbers) {
  return numbers.reduce((x,y) => x+y,0);
}
// Or, longform:
function sum(numbers) {
  let x = 0;
  for (let i=0; i<numbers.length; i++) {
    x += numbers[i];
  }
  return x;
}
```

## Reversed Strings

```js
function solution(str){
  let strarr = str.split("");
  let revarr = [];
  for (let i=0; i<strarr.length; i++) {
    revarr.unshift(strarr[i]);
  }
  return revarr.join("");
}

// ...aaand that's how I learned about the array function "reverse". ::facepalm emoji::

function solution(str){
  return str.split("").reverse().join("");
}
```
