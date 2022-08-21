function uniteUnique(arr) {
    let res = []
    let ar = [...arguments]
    for(let k = 0; k < ar.length; k++){
        // console.log(ar[k])
        for(let m = 0; m < ar[k].length; m++){
            if(res.indexOf(ar[k][m]) < 0){
                res.push(ar[k][m])
            }
        }
    }
    return res;
  }
  
 console.log( uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));