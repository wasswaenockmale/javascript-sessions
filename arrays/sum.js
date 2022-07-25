// Sum Numbers
function sum (numbers) {
    "use strict";
  if(numbers.length === 0){
    return 0
  }
  return numbers.reduce((accumulator, currentValue)=>accumulator+currentValue)
};