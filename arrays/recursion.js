// This method calculate the total sum of the first n elements of a given array 
// if sum([1],0)
function sum(arr, n) {
    if(n == 0){
      return 0;
    }else{
      return sum(arr, n-1) + arr[n-1]
    }
  }