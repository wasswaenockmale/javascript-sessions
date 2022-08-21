function myReplace(str, before, after) {
    // let capital = /[A-Z]/
    // if(capital.test(before)){
    //     after = after[0].toUpperCase() + after.slice(1)
    // }

    // return str.replace(before, after)
    return /[A-Z]/.test(before[0])?str.replace(before, after[0].toUpperCase()+after.slice(1)):str.replace(before, after.toLowerCase());
  }
  
console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"))
console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"))