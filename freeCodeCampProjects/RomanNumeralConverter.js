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
    while(num!=0){
        count++;
        let remainder = num%10
        let prev = num;
        if(remainder !== 0){
            if(Object.keys(roman).find((number)=>roman[number] === remainder) !== undefined){
                if(count > 1){
                    prev = num + "0".repeat(count)
                    if(Object.keys(roman).find((elem)=>roman[elem] === Number(prev)) !== undefined){
                        // This means it actually exists.
                        res.unshift(Object.keys(roman).find((elem)=>roman[elem] === Number(prev)))
                    }else{
                        // That means, it's not in the object but it's in the range of zeros
                        
                    }
                }else{
                    if(Object.keys(roman).find((elem)=>roman[elem] === Number(prev)) !== undefined){
                        // This means it actually exists.
                        res.unshift(Object.keys(roman).find((elem)=>{roman[elem] === Number(elem)}))
                    }else{
                        // That means, it's not in the object but it's in the range of zeros
                    }
                }
            }else{

            }
        }else{
            num = num/10;
        }
    }

    return res.join("");
}
   
console.log(convertToRoman(36))