console.log("This is the file")
function digital_root(n) {
    // ...
    let len = n.toString().length
    while(len!=1){
      n = n.toString().split("").map(element=>Number(element)).reduce((curr, pre)=>curr+pre)
      len = n.toString().length
    }
    return n;
  }

// console.log(digital_root(16))
console.log(digital_root(16))
console.log(digital_root(132189))