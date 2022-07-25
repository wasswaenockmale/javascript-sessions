// return masked string
function maskify(cc) {
    if(cc.length > 4){
        return new Array(cc.length-4).fill("#").join("") + cc.slice(cc.length-4) 
    }
    return cc
  }