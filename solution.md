## Return Negative

```if (num <= 0) {
    return num
  } else {
    return num * -1
  }
  
}

```

## Sum of Positive

```function positiveSum(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > 0) sum += arr[i]
    }
    return sum
}
```

## Function 2

```function square(num) {
  return num ** 2;
}
```

## Sum Arrays

```function sum (numbers) {
    "use strict";
  let sum = 0;
  for (let i = 0; i < numbers.length; i++){
    sum += numbers[i];
  }
    return sum
};
```

## Reversed Strings

```function solution(str){
  let stringArr = str.split('')
  let revArr = stringArr.reverse()
  let finalArr = revArr.join('')
  for(let i = 0; i < str; i++) {
    str.reverse();
    string.push(str[i])
    }
  return finalArr
}
```
