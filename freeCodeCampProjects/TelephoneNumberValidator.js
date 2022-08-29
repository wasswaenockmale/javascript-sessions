function telephoneCheck(str) {
    const reg_ = /[1]?\W{0,1}\d{3}\W{0,1}\d{3}\W{0,1}\d{4}/
    const reg = /[1]\W{0,1}\d{3}\W{0,1}\d{3}\W{0,1}\d{4}/
    const len = str.length
    console.log(len)
    const digit_ = /[0-9]/
    const len_digits_ = str.split("").reduce((prev, curr)=>{
        if(digit_.test(curr)){
            prev = prev + 1
        }
        return prev
    },0)
    return len_digits_ > 10 ? false: len_digits_ === 11 ? reg.test(str): len_digits_ > 11? false: reg_.test(str)
}
const start = Date.now()
console.log(telephoneCheck("555-555-5555"))
console.log(telephoneCheck("555-555-5555"))
console.log(telephoneCheck("123**&!!asdf#"))
console.log(telephoneCheck("55555555"))
console.log(telephoneCheck("-1 (757) 622-7382"))
console.log(telephoneCheck("2(757)6227382"))
// console.log(telephoneCheck("(555)5(55?)-5555"))
console.log(telephoneCheck("(555-555-5555"))
console.log(telephoneCheck("11 555-555-5555"))
console.log(telephoneCheck("555)-555-5555"))
// telephoneCheck("5555555555")
const end = Date.now()
// console.log(end - start)