// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.
// @author WASSWA ENOCK MALE
function highAndLow(numbers){
    // ...
    // If the numbers.length is equal to a 1, just return that number
    const array = numbers.split(" ") // Creating an array of the numbers
    let lowest = array[0] // First lowest number
    let highest = array[0] // First highest number 
    if(numbers.length == 1){
      if(numbers[0] > highest){
        return `${numbers} ${lowest}`
      }
      return `${lowest} ${numbers}` 
    }
    // If the lenght of the numbers string is greater than 1, then test this
    // ["1 23 4 5 2 29 200"]
    for(let number of array){
      if(Number(lowest) > Number(number)){
        lowest = number;
      }
      
      if(Number(highest) < Number(number)){
        highest = number;
      }
    }
    return `${highest} ${lowest}`
  }