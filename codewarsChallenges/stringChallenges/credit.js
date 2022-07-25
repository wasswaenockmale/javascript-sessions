// return masked string
function maskify(cc) {
    if(cc.length > 4){
        return new Array(cc.length-4).fill("#").join("") + cc.slice(cc.length-4) 
    }
    return cc
  }

// Solving the problem using padding 
// padding has two methods -> padStart() and padEnd()
// threeone.

function maskify(str){
    return str.slice(-4).padStart(str.length, '#')
}