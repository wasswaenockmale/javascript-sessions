function convertHTML(str) {
  let ar = str.split("")
    for(let k = 0; k < ar.length; k++){
      let v = ar[k]
      console.log(v)
      switch(v){
        case ">":
          ar[k] = "&gt;"
          break;
        case "<":
          ar[k] = "&lt;"
          break;
        case "\"":
          ar[k] = "&quot;"
          break;
        case "'":
          ar[k] = "&apos;"
          break;
        case "&":
          ar[k] = "&amp;"
          break;
      }
    }
    return ar.join("")
}
console.log(convertHTML("Dolce & Gabbana"));