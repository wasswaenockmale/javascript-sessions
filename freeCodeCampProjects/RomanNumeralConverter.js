function convertToRoman(num) {
    const roman = {
        "M":1000,
        "CM":900,
        "D":500,
        "CD":400,
        "C":100,
        "XC":90,
        "L":50,
        "XL":40,
        "X":10,
        "IX":9,
        "V":5,
        "IV":4,
        "I":1
    }
    let res = []
    let count = 0; // to count the tens and thousands.
    let ch = Object.keys(roman).find((elem)=>roman[elem] === num)
    if(ch !== undefined){
        res.unshift(ch)
    }else{
        while(num !== 0){
                let remainder = num%10
                let divisor = Math.floor(num/10);
                // console.log(`This is the remainder: ${remainder}`)

                let curr = remainder + "0".repeat(count)
                let checkCurr = Object.keys(roman).find((element)=>roman[element] === Number(curr))
                if(checkCurr !== undefined){
                    res.unshift(checkCurr)
                    count++
                    num = divisor
                }else{
                    curr = Number(curr) // Making it a number
                    if(curr > Number(1 + "0".repeat(count)) && curr < Number(5 + "0".repeat(count))){
                        res.unshift(Object.keys(roman).find((element)=> roman[element] === Number(1 + "0".repeat(count))).repeat(remainder))
                        count++
                        num = divisor
                    }else if(curr > Number(5 + "0".repeat(count)) && curr < Number(9 + "0".repeat(count))){
                        let firstValue = Object.keys(roman).find((element)=>roman[element] === Number(5 + "0".repeat(count)))
                        let last = Object.keys(roman).find((element)=>roman[element] === Number(1 + "0".repeat(count))).repeat(remainder - 5)
                        res.unshift(firstValue + last)
                        count++
                        num = divisor
                    }
                    
                }

                
        }
    }
    return res.join("")
}

// console.log(convertToRoman(1111))
// console.log(convertToRoman(83))
// console.log(convertToRoman(99))
// console.log(convertToRoman(97))
// // console.log(convertToRoman(68))
// console.log(convertToRoman(68))
// console.log(convertToRoman(2014))
// console.log(convertToRoman(1023))
console.log(convertToRoman(797))