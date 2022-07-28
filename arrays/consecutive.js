// This function find and returns the first non consecutive number in an array of integers,
// returns null if all the numbers are consecutive
// returns null if length of an array is less 2
function firstNonConsecutive (arr) {
    let len = arr.length
    if(len > 1){
      for(let i = 1; i < len; i++){
        if(arr[i] - arr[i-1] > 1){
          return arr[i]
        }
      }
      return null
    }else{
      return null
    }
  }