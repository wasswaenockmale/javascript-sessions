function sumFibs(num) {
    let fib = [1]
    let sum = 0
    for(let i = 0; i <= num; i++){
        if(fib[i] < num){
            if(fib.length === 1){
                fib.push(1)
            }else{
                fib.push(fib[i -1] + fib[i])
            }
        }
    }

    for(let k of fib){
        if(k <= num && k%2 !== 0){
            sum += k
        }
    }
    return sum
  }
  
  console.log(sumFibs(4))
  console.log(sumFibs(4000000))


//   function sumFibs(num){
//     let prevNumber = 0;
//     let currNumber = 1;
//     let result = 0;
//     while (currNumber <= num) {
//       if (currNumber % 2 !== 0) {
//         result += currNumber;
//       }
//       currNumber += prevNumber;
//       prevNumber = currNumber - prevNumber;
//     }
  
//     return result;
//   }