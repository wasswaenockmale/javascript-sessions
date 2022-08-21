function fearNotLetter(str) {
    let len =  str.length
    let letter
    for(let k = 0; k < len; k++){
        // console.log(code)
        if(k === 0){
            continue
        }else{
            let code = str[k].charCodeAt(str[k])
            if(code - (str[k-1].charCodeAt(str[k-1])) > 1){
                letter = String.fromCharCode(code-1)
            }
        }
    }
    return letter;
  }
  
console.log(fearNotLetter("abce"))