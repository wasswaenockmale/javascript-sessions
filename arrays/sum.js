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