// Inputting a number, will return a reverse kind of the same number enter
// starting with the biggest number. 
function descendingOrder(n){
    //...
    // I am a newbie in Javascript
    // I hope this practice helps get where I wanna get
    let str = n.toString().split("")
    let num = str.sort((a,b)=>b-a)
    let number = num.join("")
    return Number(number)
  }

//   parseInt(String(n).split('').sort().reverse().join(''))