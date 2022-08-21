function translatePigLatin(str) {
    let consonants = /[^aeiou]/
    if(consonants.test(str[0])){
        if(!/[aeiou]/g.test(str)){
            str += "ay"
        }else{
            // Check for the first occurance of the vowel
            let index = str.indexOf(str.match(/[aeiou]/)[0])
            let copLetters = str.slice(0,index)
            str = str.slice(index) + copLetters + "ay"
        }
    }else{
        str += "way"
    }
    return str
  }