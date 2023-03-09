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


// ----------------------------------------------------------------------------------------------------------
 
function findingBadData(numbers){
     let nagatives = [];
      for(i = 0; i < numbers.length ; i++){
        if(numbers[i] < 0 ){
            nagatives.push(numbers[i]);

        }
      }
      return nagatives.length
    };
     
        

    
    // const data=[1, -1, -2, 0 ,-3, -9 , -0 , 0  ];
    // const data1 = findingBadData(data);
    // console.log(data1);

// ------------------------------------------------------------------------------------------------------------



// problem--5


function gemsToDiamond(frd1, frd2, frd3){
   
    let frdGems1 = 21
    let frdGems2 = 32
    let frdGems3 = 43

    let totalFrdGems1 = frdGems1 * frd1
    let totalFrdGems2 = frdGems2 * frd2
    let totalFrdGems3 = frdGems3 * frd3

    let total = totalFrdGems1 + totalFrdGems2 + totalFrdGems3;
    if(total >  1000 * 2  ){
        let substraction = total - 2000;
        return substraction;
    
    }
    
    return total;
    
}


// const totalgems = gemsToDiamond( 21 , 21, 21);
// console.log(totalgems);


