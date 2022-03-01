# Introduction to Codewars

![Codewars](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.wW8sg4sEIu9PU-iq9Ds2mQHaCh%26pid%3DApi&f=1)

## Overview

Codewars is an interactive platform used to practice coding challenges that you may see in interviews. For this homework, you'll be completing 5 problems on Codewars. These are 8 kyu which is the easiest difficulty level.

## Getting Started

- Fork and Clone this repo
- Put your answer for each problem in the provided `solution.md` in it's corresponding area. You'll be adding your solution code inside of the provided code snippets
- Feel free to create a Codewars account

## Problem 1

[Return Negative](https://www.codewars.com/kata/55685cd7ad70877c23000102)

function makeNegative(num) {
// Code?

function makeNegative(num) {
// Code?
if(num <= 0){
return num
}else{
return num \* (-1)
}
}

## Problem 2

[Sum of Positive](https://www.codewars.com/kata/5715eaedb436cf5606000381)

function positiveSum(arr) {
let num = 0;
for (let i = 0; i < arr.length; i++){
if(arr[i] > 0) num += arr[i]
}
return num
}

## Problem 3

[Function 2](https://www.codewars.com/kata/523b623152af8a30c6000027)

const square = (num) => {
return num \* num
}

## Problem 4

[Sum Arrays](https://www.codewars.com/kata/53dc54212259ed3d4f00071c)

function sum (numbers) {
"use strict";
let num = 0;
if (numbers.length === 0){
return 0
}else {
for (let i =0; i < numbers.length; i++){
num += numbers[i]
}
return num
}

};

## Problem 5

[Reversed String](https://www.codewars.com/kata/5168bb5dfe9a00b126000018)

## Submission

function solution(str){
let newStr = ''
for (let i = str.length - 1; i >= 0; i--){
newStr += str[i]
}
return newStr
}

- Submit your your pull request following these guidelines: [PR Guidelines](https://github.com/SEI-R-2-22/template_pull_request)
