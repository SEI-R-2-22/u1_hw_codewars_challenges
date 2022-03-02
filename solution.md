## Return Negative
Kata.MakeNegative(1);  // return -1

function chaToNeg(num)
{
    return -Math.abs(num);
}
console.log(chaToNeg(1))


## Sum of Positive

let numArr = [1,-4,7,12];
let total = 0

for (let i = 0; i < numArr.length; i++){
    if(numArr[i] > 0){
        total += numArr[i];
    }
  }
  console.log(total)


## Function 2

function multy (num1,num2){
    return num1 * num2
}
console.log(multy(2,2))

---------------------not sure if square root is wanted so below is squareroot of a number just in case.

function sqrRoot() {
    return Math.sqrt(2,5)
}

console.log(sqrRoot())

## Sum Arrays

const array = [2,4,6];
let sum = 0;

for (let i = 0; i < array.length; i++) {
    sum += array[i];
}
console.log(sum);


## Reversed Strings

const strToReverse = "JavaScript could be even harder, if we only had to read it in reverse"

let reversed = '';
for (let i = strToReverse.length - 1; i >= 0; i--){
    reversed += strToReverse[i];
}
console.log(reversed)
