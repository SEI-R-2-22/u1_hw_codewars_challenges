## Return Negative

```js
function makeNegative(num) {
    return -Math.abs(num) 
}
makeNegative(1);  // return -1

makeNegative(-5);   // return -5
 
makeNegative(0);    // return 0

makeNegative(0.12); // return -0.12

//wanted to make a note that I found this solution on https://www.w3resource.com/javascript-exercises/javascript-math-exercise-29.php

```

## Sum of Positive

```js

const numArray = [1, -4, 7, 12].filter(val => val > 0)
let sum = 0;

for (let i = 0; i < numArray.length; i++) {

    sum += numArray[i];
}

//console.log(sum);

```

## Function 2

```js

function squareRoot(num) {
    return num * num;
}

let square = squareRoot(7);


//console.log(square)

//source: https://sebhastian.com/javascript-square/

```

## Sum Arrays

```js

const numArray = [1, 5.2, 4, 0, -1]
let sum = 0;

for (let i = 0; i < numArray.length; i++) {

    sum += numArray[i];
}

const numArray = []
let sum = 0;

for (let i = 0; i < numArray.length; i++) {

    sum += numArray[i];
}

const numArray = [-2.398]
let sum = 0;

for (let i = 0; i < numArray.length; i++) {

    sum += numArray[i];
}

//console.log(sum);

```

## Reversed Strings

```js

function reverseString(str) {
    let splitString = str.split(""); 
    let reverseArray = splitString.reverse();   
    let joinArray = reverseArray.join("");   
    return joinArray; 
}
 
let worldBackwards = reverseString("world");

//console.log(worldBackwards)

function reverseString(str) {
    let splitString = str.split(""); 
    let reverseArray = splitString.reverse();   
    let joinArray = reverseArray.join("");   
    return joinArray;
}
 
let wordBackwards = reverseString("word");

//console.log(wordBackwards)

//source: https://www.freecodecamp.org/news/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb/

```
