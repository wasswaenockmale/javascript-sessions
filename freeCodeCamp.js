// Setup
const contacts = [
    {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
      firstName: "Sherlock",
      lastName: "Holmes",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"],
    },
    {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"],
    },
  ];
  
  // let n = contacts.length 
  // for(let i = 0; i< n; i++){
  //   if(contacts[i].firstName === "Kristian"){
  //     console.log(contacts[i].lastName)
  //   }
  // }
  function lookUpProfile(name, prop) {
    // Only change code below this line
    let len = contacts.length
    let index = -1;
    let index_name = -1;
    let index_prop = -1;
    for(let i = 0; i < len; i++){
      if(contacts[i].firstName === name && contacts[i].hasOwnProperty(prop)){
        index = i // This will help me return a property
      }else{
        if(contacts[i].firstName === name){
          index_name = i
        }
        if(contacts[i].hasOwnProperty(prop)){
          index_prop = i
        }
      }
    }
    if(index != -1){
      return contacts[index][prop]
    }else{
      if(index_name === -1){
        return "No such contact"
      }
      if(index_prop === -1){
        return "No such property"
      }
    }
    // return `Prop index is ${index_prop} and name index is ${index_name}`
    // Only change code above this line
  }

  console.log(lookUpProfile("Kristian", "lastName"))
  console.log(lookUpProfile("Sherlock", "likes"))


  /**
   * 
   * @param {*} myMin 
   * @param {*} myMax 
   * @returns 
   * Create a function called randomRange that takes a range myMin and myMax
   * and returns a random whole number that's greater than or equal to myMin, 
   * and is less than or equal to myMax, inclusive.
   */
  function randomRange(myMin, myMax) {
    // Only change code below this line
    return Math.floor(Math.random() * (myMax-myMin + 1)) + myMin;
    // Only change code above this line
  }

  // Function using recursion,
  // returns an array of intergers with startNum being the first number and endNum being the last Number
  function rangeOfNumbers(startNum, endNum) {
    if(startNum>endNum){
      return []
    }else{
      const count = rangeOfNumbers(startNum + 1, endNum)
      count.unshift(startNum)
      return count
    }
  };

  console.log(rangeOfNumbers(6,9))


// Only change code below this line
// The code below uses the class keyword to create a Thermostat class and it uses the 
// getters and setters
class Thermostat{
  constructor(fahrenheit){
    this.fahrenheit = fahrenheit
  }

  get temperature(){
    return 5/9 * (this.fahrenheit - 32)
  }

  set temperature(celsius){
    this.fahrenheit = celsius * 9.0 / 5 + 32 
  }
}
// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius


/**
 * Using promises in javascript
 * 
 */
const makeServerRequest = new Promise((resolve, reject)=>{
  let response;// Boolean value showing the response was a success or failure
  if(response){
    resolve("We can do something")// This is also a function of what was promised to be done, when the response is true from the server
  }else{
    reject("There is no data fetched from the server")
  }
})

// You can also do something after the response was a success
makeServerRequest.then(result =>{
  // result is the result from the server
})

// You can also catch the error for the false response of the server
makeServerRequest.catch(error =>{
  console.log(error)
})