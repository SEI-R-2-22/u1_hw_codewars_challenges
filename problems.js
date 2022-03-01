// No. 1
// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

function makeNegative(num) {
  if (num < 0) {
    return num
  } else if (num > 0) {
    return num * -1
  }
}

// ** Ternary for John Below **

return num < 0 ? num : num * -1

// No. 2
// You get an array of numbers, return the sum of all of the positives ones.
// Example [1,-4,7,12] => 1 + 7 + 12 = 20
// Note: if there is nothing to sum, the sum is default to 0.

function positiveSum(arr) {
  let sum = 0
  for (let i = 0; i < arr.length; i++)
    if (arr[i] > 0) {
      sum = arr[i] + sum
    }
  return sum
}

positiveSum([1, -2, 3, 4, 5])

// No. 3
// Now you have to write a function that takes an argument and returns the square of it.
function square(num) {
  return Math.pow(num, 2)
}

square(3)

// No. 4
// Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

function sum(numbers) {
  'use strict'
  let total = 0
  for (let i = 0; i < numbers.length; i++) {
    total = numbers[i] + total
  }
  return total
}

sum([1, 5.2, 4, 0, -1])

// No. 5
// Complete the solution so that it reverses the string passed into it.

// Ex: 'world' => 'dlrow'

// * New Technique *

function solution(str) {
  let dlrow = ''
  for (let i = str.length - 1; i >= 0; i--) {
    dlrow += str[i]
  }
  return dlrow
}

solution('dlrow')

// (Source: programiz)
