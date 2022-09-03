let smartphones =  ['apple', 'samsung', 'motorola']
console.log(smartphones[1]) // output is: samsung

// smartphones = null
// console.log(smartphones[1]) // output is: TypeError: Cannot read property '1' of null

console.log(smartphones?.[1]) // output is: undefined
let books = null;
const book = books?.[0]
console.log(book)
let smartPhones = {
    brands:{
        apple:true
    }
}
console.log(smartPhones.campanies?.motorola)