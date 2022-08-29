function rot13(str) {
    const arrAlpha = ["A","B","C","D","E","F","G","H",
        "I","J","K","L","M","N","O","P","Q",
        "R","S","T","U","V","W","X","Y","Z"
    ]
    let arr = str.split("")
    for(let k = 0; k < arr.length; k++){
        let index = arrAlpha.indexOf(arr[k])
        if(index !== -1){
            let replacedIndex = 13+index
            if(replacedIndex >= arrAlpha.length){
                arr[k] = arrAlpha[replacedIndex - 26]
                
            }else{
                arr[k] = arrAlpha[replacedIndex]
            }
        }
    }
    return arr.join("")
}
  
console.log(rot13("SERR PBQR PNZC"))
// console.log(rot13("SERR CVMMN!"))
// rot13("SERR PBQR PNZC")