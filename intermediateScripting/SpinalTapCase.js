function spinalCase(str) {
    if((/\s/).test(str)){
        return str.toLowerCase().split(" ").join("-");
    }else{
        
    }
  }
  
console.log(spinalCase('This Is Spinal Tap'))