// Sum Numbers
function sum (numbers) {
    "use strict";
  if(numbers.length === 0){
    return 0
  }
  return numbers.reduce((accumulator, currentValue)=>accumulator+currentValue)
};

// This function sums up all positive numbers in an array in js 
function positiveSum(arr) {
    return arr.filter(element=>element>0).reduce((accumalator, currentvalue)=>accumalator+currentvalue,0)
  }
// This one calculate the first n multiples of x 
  function countBy(x, n) {
    let z = [];
    for(let i = 1; i <= n; i++){
      z.push(i*x)
    }
    return z;
  }

//   This function returns the function without a second element 
  function removeEveryOther(arr){
    //your code here
    return arr.filter((element, index)=> index%2 === 0)
  }
// This function returns an array with the first value being the count of the positive elements 
// and the second value being the sum of the negative elements 
function countPositivesSumNegatives(input) {
  if(input === null){
    return []
  }else if(input.length === 0){
    return []
  }else{
      let countP = 0
      let sumNeg = 0
      for(let value of input){
        if(value > 0){
          countP++
        }else{
          sumNeg += value
        }
      }
      return [countP, sumNeg]
  }
 // your code here
//   let positives = input.filter(element=>element>0)
//   let negatives = input.filter(element=>element<0)
//   if(negatives === null || negatives.length === 0){
//     return [positives.length,0]
//   }
//   return [positives.length, negatives.reduce((pre, curr)=>pre+curr)]
}