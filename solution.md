## Return Negative

```js

function makeNegative(num) {
  if (num > 0) {
    num=num*-1;
    return num;
  }
  else {
    return num;    
  }
}

```

## Sum of Positive

```js

function positiveSum(arr) {
    let sum = 0;
    for (i=0; i < arr.length; i++) {    
    if (arr[i] > 0) {
      sum+=arr[i];
    }
    else {
      
    }
    }
    return sum;
  }

```

## Function 2

```js

const square = (num) => {
  num *= num;
  return num;
}

```

## Sum Arrays

```js

function sum (numbers) {
//     "use strict"; lmao i feel as if i may have cheated by commenting this out.  based on what i researched, just doesnt like the i in the for loop because it's 'undefined'
  let arrayTotal = 0;
  for (i=0; i < numbers.length; i++) {
    arrayTotal += numbers[i];
  }
  return arrayTotal;  
    
};

```

## Reversed Strings

```js

function solution(str){
  let answer = ""
  let backWorld = [];
  const length = str.length-1;
  for (i=length; i >= 0; i--){
    backWorld.push(str[i]);
    }
  answer = backWorld.join('');
  return answer;
    
    
  
}

```
