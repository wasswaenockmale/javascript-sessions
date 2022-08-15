function sumAll(arr) {
    let arrSum = arr.reduce((sum, currentValue)=>{
      return sum += currentValue
    },0)
    arr.sort((a,b)=>a-b)
    for(let k = arr[0] + 1; k < arr[1]; k++){
      arrSum += k
    }
    return arrSum;
  }
  
  console.log(sumAll([1, 4]))