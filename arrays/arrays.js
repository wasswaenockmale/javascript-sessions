// Data structures in js 
// Array 
// object 
// map 

// How to create an array in js 
let array = [];
// console.log(array)
let array1 = new Array(20)
// let array2 = ['Enock', 1, 'Kevin', true]

// Methods in arrays
// Methods used to add items to an array 
// push()
// splice() can used add 
// unshift()
// fill()

console.log(array)
// push adds items to the end of the array 
array1.push('enock','kevin', 'david')
console.log(array1)
array1.push(1)
console.log(array1)

// unshift adds items at the beginning of the array
array1.unshift('enock','male')
console.log(array1)

// The splice helps us add items to an array anyway in the array 
array1.splice(0,0,'kampala city', ' kemi city', 'empire city')
console.log(array1)
// array1.fill(2, 4,8)

// console.log(array1)
// methods used to remove items from an array 
// pop() -> removes an item from the end of the array
// shift() -> removes an item from the beginning of the array
// splice -> removes an item from an index in an array
array1.pop() // will remove the last element
console.log(array1)
array1.shift() // will remove the first element
console.log(array1)

let kevin = array1.splice(1,2) // It delete element starting from the start and then it count the number of items that you want to delete
console.log(array1)
console.log(kevin)

// Other methods of an array 
// at()
// filter
// reduce()
// sort()
// forEach
// iterate an array

// Filter helps to filter out possion of a given array and store what
// it has filtered into a given array
let arr = array1.filter(element => element.length == 5)
console.log(arr)

// forEach
array1.forEach((element)=> console.log(element))