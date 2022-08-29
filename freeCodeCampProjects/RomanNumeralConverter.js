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
    while(num !== 0){
        count++;
        
        let remainder = num%10
        let prev = num;
        num = Math.floor(num/10)
        // console.log(`This is the remainder: ${remainder}`)
        let checkValue = Object.keys(roman).find((element)=>roman[element] === remainder)
        if(checkValue !== undefined){
            res.unshift(checkValue)
        }else{
            prev = Number(prev + "0".repeat(count - 1))
            let rom = Object.keys(roman).find((elem)=>roman[elem] === Number(1 + "0".repeat(count -1)))
            if(prev > rom && prev < Number(4 + "0".repeat(count - 1))){
                res.unshift(rom.repeat(remainder))
            }else if(prev > Number(5 + "0".repeat(count - 1)) && prev < Number(9 + "0".repeat(count - 1))){
                let roms = Object.keys(roman).find((elem)=>roman[elem] === Number(5 + "0".repeat(count - 1)))
                res.unshift(roms + rom.repeat(remainder))
            }
        }
        // if(count === 1){
        //     // console.log(checkValue)
        //     if(checkValue !== undefined){
        //         res.unshift(checkValue)
        //     }else{
        //         prev = prev + "0".repeat(count-1)
        //         // console.log(prev)
        //         let romanNum = Object.keys(roman).find((ele)=>roman[ele] === 1)
        //         if(Number(prev) > 1 && Number(prev) < 4){
        //             let btn_value = Number(prev)
        //             res.unshift(romanNum.repeat(btn_value))
        //         }else if(Number(prev) > 5 && Number(prev) < 9){
        //             let btn_value = Number(prev) - 5
        //             console.log(btn_value)
        //             let rom = Object.keys(roman).find((elem)=>roman[elem] === 5) + romanNum.repeat(btn_value)
        //             res.unshift(rom)
        //         }
        //     }
        // }else{
        //     if(checkValue !== undefined){
        //         res.unshift(checkValue)
        //     }else{

        //     }
        // }
        // let checkValue = Object.keys(roman).find((element)=>roman[element] === remainder)
    }

    return res.join("")
}
   
console.log(convertToRoman(10))