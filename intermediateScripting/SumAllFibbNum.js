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