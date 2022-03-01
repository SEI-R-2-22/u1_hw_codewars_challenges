## Return Negative

```js
  return -Math.abs(num)
  ////return the negative of the absolute value
```

## Sum of Positive

```js
//returns the sum of only positives
return (n - 1) % 9 + 1;

```

## Function 2

```js
// enter your majic here
///vowel count
function getCount(str) {
  let vowelsCount = 0
  //create an array of vowels to search for
  const vowels = ["a", "e", "i", "o", "u"]
  /set an if nested in a for of to add 1 to vowelCount for each character
  for(let char of str) {
      if(vowels.includes(char)) {
          vowelsCount++
      }
  }
  return vowelsCount;
}

```

## Sum Arrays

```js
let sum = 0
  for(let i = 0; i < numbers.length; i++){
    sum = sum + numbers[i]
  }
  return(sum) 

```

## Reversed Strings

```js
//using methods to split the string into and array reverse it and join it 
//back to a string
 return str.split("").reverse().join("");
  return(solution)

```
