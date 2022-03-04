## Return Negative
Kata.MakeNegative(1);  // return -1

function makeNegative(num) {
{
    return -Math.abs(num);
}
console.log(chaToNeg(1))}


## Sum of Positive


let numArr = [1,-4,7,12];
function positiveSum(arr) {
let total = 0
   let theFresh = []
for (let i = 0; i < arr.length; i++){
  if(arr[i] > 0){
     theFresh.push(arr[i])  
}
  }
 for(let i = 0; i < theFresh.length; i++){
    total += theFresh[i]     
 }
 return total
}


## Function 2

function square(num){
  let theVar = num * num
return theVar
  }

## Sum Arrays

function sum (numbers) {
  let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
   
}
   return sum
}



## Reversed Strings

function solution(str){
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--){
        reversed += str[i];
    }
    return reversed
    }
    