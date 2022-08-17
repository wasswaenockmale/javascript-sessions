function destroyer(arr) {
    let newArr = [...arguments]
    let values = newArr.slice(1)
    return arr.filter(element=>{
      return !values.includes(element)
    })
  }
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3))
console.log(destroyer([3, 5, 1, 2, 2], 2, 3, 5))
