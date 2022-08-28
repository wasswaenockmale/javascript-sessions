function palindrome(str) {
    const non = /[\W_]/g // The non alphanumeric character does not include the underscore.
    str = str.replace(non, "").toLowerCase()
    let len = str.length
    if(len%2 !== 0){
        return str.slice(0,(len/2)+1) === str.slice(len/2).split("").reverse().join("") ? true:false
    }else{
        return str.slice(0,len/2) === str.slice(len/2).split("").reverse().join("") ? true : false
    }
  }
  
  console.log(palindrome("ey/e"))
  console.log(palindrome("_eye"))
  console.log(palindrome("1 eye for of 1 eye."))
  console.log(palindrome("0_0 (: /-\ :) 0-0"))
  console.log(palindrome("2A3*3a2"))
  console.log(palindrome("A man, a plan, a canal. Panama"))