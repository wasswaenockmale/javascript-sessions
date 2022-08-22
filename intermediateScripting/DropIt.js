function dropElements(arr, func) {
    let len = arr.length
    for(let k = 0; k < len; k++){
        if(func(arr[0])){
            break
        }else{
            arr.shift()
        }
    }
    return arr
}
  
console.log(dropElements([1, 2, 3], function(n) {return n < 3; }))
// console.log(dropElements([1, 2, 3, 4], function(n) {return n >= 3;}))
// console.log(dropElements(dropElements([1, 2, 3, 4], function(n) {return n > 5;})))