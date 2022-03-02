## Return Negative
`retunNegative(1);  // return -1`
`returnNegative(-5); // return -5`
`returnNegative(0);  // return 0`

console.log(-Math.abs(1));
console.log(-Math.abs(-5));
console.log(Math.abs(0));

## Sum of Positive
`[1,-4,7,12] => 1 + 7 + 12 = 20`

var arr = [1,-4,7,12];
for(var i = 0; i < arr.length; i++){
    if(arr[i] === -4){
        arr.splice(i,1);
    }
}
const num = [1,7,12]
let sum = 0;
for(let i = 0; i<num.length; i++) {
    sum += num[i];
}
console.log(sum);

## Function 2
`Now you have to write a function that takes an argument and returns the square of it.`

function square(num){
    return num * num;
}
console.log(square(4));

## Sum Arrays
`Input: [1, 5.2, 4, 0, -1]`
`Output: 9.2`
const num = [1,5.2,4,0,-1]
let sum = 0;
for(let i = 0; i < num.length; i++) {
    sum += num[i];
}
console.log(sum);
`Input: []`
`Output: 0`
const num = [0]
let sum = 0;
for(let i = 0; i < num.length; i++) {
    sum += num[i];
}
console.log(sum);
`Input: [-2.398]`
`Output: -2.398`
const num = [-2.398]
console.log(num);

## Reversed Strings
'world'  =>  'dlrow'
'word'   =>  'drow'

let word = "world, word";
let reverseWord = "";

for (let i = word.length -1 ; i >= 0; i--){
    reverseWord += word[i]
}

console.log(reverseWord);