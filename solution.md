## Return Negative

```js

// function makeNegative (num) {
//     if (num>0)
// return negativenum;
// }
// else {
//     return num;
////////////////////////// above first attempt
}
function makeNegative(num) {
  return num = Math.abs(num) * -1
}
}
///////////////////////////////// above second attempt after receiveing better understanding
```

## Sum of Positive

```js
// function positiveSum(array) {
//     let sum = 0;
//     for (let i=0; i<array.length; ++i)> {
//         if (array (i) > 0) {sum+=array[i];
//         return sum;
///////////above this line is the first attempt
function positiveSum(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++){
        if (array [i] > 0) {sum+= array[i]}
    }
        return sum
}
/////////////////////////////////////////////////////////////////
```

## Function 2

```js

// function square = (num) [
//     return num 2 **
// ]
////////////////////above this line is the first attempt

function square(num) {
  return num * num;
}

/////////////////////////////////////////////////////////////////////
```

## Sum Arrays

```js
// function sum (numbers) {
//     let sum = 0;
//     if (numbers.length >0;) {
//     for (let i=0; i < numbers.length; i++) {
//         total +=numbers[i]
//     }
//     return sum
//     {
///////////////////////////////// above is first attempt

ffunction sum(num){
    let sum = 0;
  
   for (let i = 0; i < num.length; i++)
       sum += num[i];
    return sum
  }
////////////////////////////// second attempt

## Reversed Strings

// ```js

// // function reverseString(str) {

// // return str.split("").reverse().join("");
// // }
// //////////////////////////// above this line is the first attmept 

// // function solution.(str){
// //     return str.split('').reverse().join('');
// }
// ///////////ran it twice failed second time until i found out what i did wrong////////////////


function solution(str){
  return str.split('').reverse().join('')
}

// ```
