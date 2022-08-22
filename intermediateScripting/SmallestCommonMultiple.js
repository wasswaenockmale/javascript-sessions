function smallestCommons(arr) {
    let [first, second] = arr.sort((a,b)=>a-b)
    let range = Array(second-first+1).fill(0).map((_, i) => i + first)
    console.log(range)
    let upperBound = range.reduce((prod, curr)=> prod * curr)

    for (let multiple = second; multiple <= upperBound; multiple += second) {
        // Check if every value in range divides 'multiple'
        const divisible = range.every((value) => multiple % value === 0);
        if (divisible) {
          return multiple;
        }
      }
}

console.log(smallestCommons([1,5]));
console.log(smallestCommons([2, 10]))
console.log(smallestCommons([1, 13]))
console.log(smallestCommons([23, 18]))