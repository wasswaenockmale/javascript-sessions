// function diffArray(arr1, arr2) {
//     const newArr = arr1.reduce((prev, currentV)=>{
//         if(prev.indexOf(currentV) !== -1){
//             // remove the element 
//             prev.splice(prev.indexOf(currentV),1)
//         }else{
//             // add the element to the arr.
//             prev.push(element)
//         }
//     }, [...arr2])
//     // for(let one of arr1){
      
//     // }
//     return newArr;
//   }
  
// // console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]))
// let m = [2,3,4,5]

function diffArray(arr1, arr2) {
    for(let one of arr1){
      if(arr2.includes(one)){
        arr2.splice(arr2.indexOf(one),1)
      }else{
        arr2.push(one)
      }
    }
    const newArr = arr2
    return newArr;
  }
  
  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);