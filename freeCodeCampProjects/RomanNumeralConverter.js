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
        console.log(`This is the remainder: ${remainder}`)
        
    }

    // return res.join("");
}
   
console.log(convertToRoman(100))