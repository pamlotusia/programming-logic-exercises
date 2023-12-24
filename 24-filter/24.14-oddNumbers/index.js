const numbers = [1, 2, 3, 4, 5, 6]

function oddNumbers(arr){
  return arr.filter((num) => {
    if(num % 2 !== 0){
      return true
    }
  })
}

console.log(oddNumbers(numbers))