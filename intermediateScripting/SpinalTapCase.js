function spinalCase(str) {
    let nonNumeric = /[^a-zA-Z\d:]/g
    let capitalLetter = /[A-Z]/g
    let newStr = str.replace(nonNumeric, "")

    let res = ""
    let count = 0
    for(let k of newStr){
        if(!capitalLetter.test(k)){
            res += k
        }else{
            if(count === 0){
                res += k
                count++
            }else{
                res += " " + k
                count++
            }
        }
    }
    return res.split(" ").join("-").toLowerCase()
}

console.log(spinalCase("This Is Spinal Tap"))
console.log(spinalCase("The_Andy_Griffith_Show"))