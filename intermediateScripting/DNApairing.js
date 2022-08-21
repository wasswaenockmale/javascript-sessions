function pairElement(str) {
    let res = []
    for(let k of str){
      let arr = []
      switch(k){
        case "C":
          arr.push("C","G")
          break;
        case "G":
        arr.push("G","C")
        break;
        case "T":
        arr.push("T","A")
        break;
        case "A":
        arr.push("A","T")
        break;
      }
      res.push(arr)
    }
    return res;
  }
  
  pairElement("GCG");