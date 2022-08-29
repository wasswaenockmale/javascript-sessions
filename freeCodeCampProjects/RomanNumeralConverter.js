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
                count++;
                let remainder = num%10
                let prev = num;
                num = Math.floor(num/10)
                // console.log(`This is the remainder: ${remainder}`)
                let checkValue = Object.keys(roman).find((element)=>roman[element] === remainder)
                // console.log(remainder)
                // let checkRemainder = Object.keys(roman).find((element)=>roman)
                if(checkValue !== undefined){
                    res.unshift(checkValue)
                }else{
                    let r = Number(remainder + "0".repeat(count - 1))
                    
                    
                    let rom = Object.keys(roman).find((elem)=>roman[elem] === Number(1 + "0".repeat(count -1)))
                    if(r > Number(1 + "0".repeat(count - 1)) && r < Number(4 + "0".repeat(count - 1))){
                        res.unshift(rom.repeat(remainder))
                    }else if(r > Number(5 + "0".repeat(count - 1)) && r < Number(9 + "0".repeat(count - 1))){
                        let roms = Object.keys(roman).find((elem)=>roman[elem] === Number(5 + "0".repeat(count - 1)))
                        res.unshift(roms + rom.repeat(remainder))
                    }
                }
            }
    }
    return res.join("")
}

console.log(convertToRoman(102))