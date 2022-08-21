function spinalCase(str) {
    let nonNumeric = /[^a-zA-Z\d\s:-]/g
    let capitalLetter = /[A-Z]/g
    let newStr = str.replace(nonNumeric, "").replace(/\s/g, "-")

    let res = ""
    // console.log(newStr)
    for(let k = 0; k < newStr.length; k++){
        if(k === 0){
            res += newStr[k]
        }else{
            if(capitalLetter.test(newStr[k])){
                if(newStr[k] === "-"){
                    res += newStr[k]
                }else{
                    if(newStr[k-1] === "-"){
                        res += newStr[k]
                    }else{
                        res += "-" + newStr[k]
                    }
                }
            }else{
                res += newStr[k]
            }
        }
    }
    return res.toLowerCase()
}

console.log(spinalCase("This Is Spinal Tap"))
console.log(spinalCase("The_Andy_Griffith_Show"))
console.log(spinalCase("Teletubbies say Eh-oh"))