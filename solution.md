## Return Negative

const negaReturn = (num) => {
        switch (true) {
    
        case (num < 0):
            
            return num;
            

        case (num > 0):
            
            let negNum = num * -1;
            
            return negNum;

        default:
            
            return num;

        }
    }

    console.log(negaReturn(-1))

## Sum of Positive

const posSum = (exArr) => {
    
    
    let result = 0;

    let posNumArr = [];
    

    for (i=0; i<exArr.length; i++){
        

        switch (true) {

            case (exArr[i]>0):

                posNumArr.push(exArr[i]);
                console.log("pos");
                break;


            case (exArr[i]<=0):
                console.log("neg")
                break;

            default:
                console.log("default")
                break;



        }
    }

        for (i=0; i<posNumArr.length; i++) {
        
        
            result += posNumArr[i];
    
            
    
        }
    return result;

    }


console.log(posSum([1, 2, -3]));

## Function 2

const sqFunc = (num) => {


    let result = num * num;
    return result;



}

console.log(sqFunc(4))

## Sum Arrays

const totSum = (exArr) => {
    
    
    let result = 0;
    let testArr = exArr[0];
    
    
    if ( testArr === undefined){

        return result;

       

        
    }else {

        for (i=0; i<exArr.length; i++) {
        
            
            result += exArr[i];
    
            
    
        }


    }
    return result;

    }


console.log(totSum([1, -1, 2]));


## Reversed Strings

const revStr = (word) => {

let exArr = [];
let letter = word.split("").reverse();
exArr.push(letter.join(""));
console.log(exArr)

for (i=0; i<word.length; i++) {

    
    
    


}

let result= exArr.join("");

console.log(result)
return result;


}


console.log(revStr("Hello"));
