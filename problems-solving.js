// problem number--1

function mindGame(number){
    let total = (number * 3 + 10) / 2 - 5;
    
    return total;

}
//  const myNumber = mindGame(50);
//  console.log(myNumber);

//  Description: Multiply a number by 3, then add 10, then divide by 2, then subtract 5, return the output;

// -----------------------------------------------------------------------------------------------------------

// problem number---2

function evenOdd( str){
    let totalStr = str.length;
    if(totalStr % 2 === 0 ){
       return console.log("Even");
       
    }
    else{
       return console.log("Odd");
    }
}





// --------------------------------------------------------------------------------------------------------------------------





// problem number---3

function isLGSeven(number){
    let differenceInputNum = number -7;
    if(differenceInputNum > 7){
        let double = differenceInputNum * 2 ; 
        return double;

    }
   else{
    return differenceInputNum;
   }
  
}
//  const myNumber = isLGSeven(50);
//  console.log(myNumber);

