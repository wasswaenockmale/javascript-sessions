function steamrollArray(arr) {
    let res = []
    for(let k of arr){
        if(Array.isArray(k)){
            res.push(...steamrollArray(k))
        }else{
            res.push(k)
        }
    }
    return res
}
  
console.log(steamrollArray([1, [2], [3, [[4]]]]))