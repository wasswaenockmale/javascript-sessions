// The global variable
const s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback){
  // Only change code below this line
  const newArray = [];
  for(let k = 0; k < this.length; k++){
    // newArray.push(callback(this[k]))
    if(callback(this[k]) == true){
      newArray.push(this[k])
    }
  }
  // Only change code above this line
  return newArray;
};

const new_s = s.myFilter(function(item) {
  return item % 2 === 1;
});